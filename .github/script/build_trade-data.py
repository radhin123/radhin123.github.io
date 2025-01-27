import os
import time
import datetime
import pathlib
import json
import requests
from datetime import date, timedelta, datetime
from newsapi import NewsApiClient


def send_post_json(url, req_data):
    try:
        headers = {'content-type': 'application/json'}
        res = requests.post(url, req_data, headers=headers)
        res.raise_for_status()
    except Exception as ex:
        print('Generated an exception: {ex}'.format(ex=ex))
        return -1, ex

    return 0, res.json()


if __name__ == "__main__":

    DELAY_TIME_SEC = 300
    SEC_RETRY_CNT = 5
    SCAN_URL = "https://zmcx16.moe/stock-minehunter/api/task/do-scan"
    SCREENER_URL = "https://zmcx16.moe/stock-minehunter/api/task/do-screen"
    SEC_URL = "https://zmcx16.moe/stock-minehunter/api/task/get-sec-data"
    FORMULA_URL = "https://zmcx16.moe/stock-minehunter/api/task/calc-formula"
    NEWS_API_KEY = os.environ.get("NEWS_API_KEY", "")

    script_path = pathlib.Path(__file__).parent.resolve()
    input_path = script_path / '..' / '..' / 'trade-data.json'
    stocks_output_path = script_path / '..' / '..' / 'zmcx16_investment-stocks-trade-data.json'
    stocks_output_readable_path = script_path / '..' / '..' / 'zmcx16_investment-stocks-trade-data_readable.json'
    formula_output_path = script_path / '..' / '..' / 'zmcx16_investment-formula-trade-data.json'
    formula_output_readable_path = script_path / '..' / '..' / 'zmcx16_investment-formula-trade-data_readable.json'

    scan_output = {"hold_stock_list": [], "star_stock_list": [], "screener_stock_list": [], "data": [], "news": {},
                   "SEC": {}, "Beneish_Model_v1": {}}
    formula_output = {"hold_stock_list": [], "portfolio": {}, "KellyFormula_Range_v1": {}}

    newsapi = NewsApiClient(api_key=NEWS_API_KEY)

    with open(input_path, 'r', encoding='utf-8') as f:
        data = json.loads(f.read())

        # screener
        screen_template = data["screen_template"].copy()
        ret, resp = send_post_json(SCREENER_URL, str({"data": screen_template}))
        if ret == 0:
            try:
                if resp["ret"] != 0:
                    print('server err = {err}, msg = {msg}'.format(err=resp["ret"], msg=resp["err_msg"]))
                else:
                    scan_output["screener_stock_list"] += resp["data"][0]["result"]["symbols"]

            except Exception as ex:
                print('Generated an exception: {ex}, try next target.'.format(ex=ex))

        # norm-minehunter
        formula_output["hold_stock_list"] = scan_output["hold_stock_list"] = data["hold_stock_list"]
        scan_output["star_stock_list"] = data["star_stock_list"]
        scan_list = set(data["hold_stock_list"] + data["star_stock_list"] + scan_output["screener_stock_list"])

        # SEC
        sec_cik_table = data["sec_cik_table"]

        # portfolio
        formula_output["portfolio"] = data["portfolio"]

        # news
        news_latest_days = data["news_config"]["latest_days"]
        news_max_count = data["news_config"]["max_count"]
        news_exclude_domains = data["news_config"]["exclude_domains"]
        news_symbol_keyword = data["news_config"]["symbol_keyword"]

        for symbol in scan_list:
            print("get {symbol} scan / SEC / formula output: {now}".format(symbol=symbol, now=datetime.now()))

            # get norm-minehunter
            scan_list_args = data["tactic_template"].copy()
            for target in scan_list_args:
                target["target"] = [symbol]

            ret, resp = send_post_json(SCAN_URL, str({"data": scan_list_args}))
            if ret == 0:
                try:
                    if resp["ret"] != 0:
                        print('server err = {err}, msg = {msg}'.format(err=resp["ret"], msg=resp["err_msg"]))
                    else:
                        scan_output["data"] += resp["data"]

                except Exception as ex:
                    print('Generated an exception: {ex}, try next target.'.format(ex=ex))

            # --- get SEC -------
            if (symbol in data["hold_stock_list"]):
                sec_args = data["sec_template"].copy()
                for sec_target in sec_args:
                    sec_target["target"] = [{"symbol": symbol, "CIK": sec_cik_table[symbol]}]

                for retry_i in range(SEC_RETRY_CNT):
                    ret, resp = send_post_json(SEC_URL, str({"data": [sec_target]}))
                    if ret == 0:
                        try:
                            if resp["ret"] != 0:
                                print('server err = {err}, msg = {msg}'.format(err=resp["ret"], msg=resp["err_msg"]))
                            else:
                                scan_output["SEC"][symbol] = resp["data"][0]["report"]
                            break
                        except Exception as ex:
                            print('Generated an exception: {ex}, try next target.'.format(ex=ex))
                        
                    print('SEC retry {retry_i} failed.'.format(retry_i=retry_i))

            # --- get news ------
            if (symbol in data["hold_stock_list"]) or (
                    symbol in data["star_stock_list"]):

                query = symbol + ' stock'
                if symbol in news_symbol_keyword:
                    query = news_symbol_keyword[symbol]

                news = newsapi.get_everything(q=query,
                                                exclude_domains=news_exclude_domains,
                                                from_param=(datetime.now() - timedelta(days=news_latest_days)).strftime("%Y-%m-%d"),
                                                to=date.today().strftime("%Y-%m-%d"),
                                                sort_by='publishedAt')

                if news['status'] == 'ok' and news['totalResults'] > 0:
                    news_temp = []
                    news_title = []
                    for article in news['articles']:
                        if article['title'] not in news_title:
                            news_temp.append(article)
                            news_title.append(article['title'])

                    scan_output["news"][symbol] = news_temp[:min(news_max_count, len(news_temp))]

            # -------------------
            # --- get KellyFormula ---
            if symbol in data["hold_stock_list"]:
                formula_list_args = data["KellyFormula_Range_v1_template"].copy()
                for target in formula_list_args:
                    target["target"] = [symbol]

                ret, resp = send_post_json(FORMULA_URL, str({"data": formula_list_args}))
                if ret == 0:
                    try:
                        if resp["ret"] != 0:
                            print('server err = {err}, msg = {msg}'.format(err=resp["ret"], msg=resp["err_msg"]))
                        else:
                            formula_output["KellyFormula_Range_v1"][symbol] = resp["data"][0]["result"]

                    except Exception as ex:
                        print('Generated an exception: {ex}, try next target.'.format(ex=ex))

            # -------------------

            # --- get Beneish_Model ---
            formula_list_args = data["Beneish_Model_v1_template"].copy()
            for target in formula_list_args:
                target["target"] = [symbol]

            ret, resp = send_post_json(FORMULA_URL, str({"data": formula_list_args}))
            if ret == 0:
                try:
                    if resp["ret"] != 0:
                        print('server err = {err}, msg = {msg}'.format(err=resp["ret"], msg=resp["err_msg"]))
                    else:
                        scan_output["Beneish_Model_v1"][symbol] = resp["data"][0]["result"]

                except Exception as ex:
                    print('Generated an exception: {ex}, try next target.'.format(ex=ex))

            # -------------------
            # -- load portfolio -
            if symbol in data["hold_stock_list"]:
                for stock in scan_output["data"]:
                    if symbol == stock["symbol"]:
                        price = float(stock["baseinfo"]["Price"])
                        formula_output["portfolio"][symbol]["profit_%"] = (price - data["portfolio"][symbol]["cost_p"]) / data["portfolio"][symbol]["cost_p"] * 100
                        break
            # ------------------

            time.sleep(DELAY_TIME_SEC)

    if len(scan_output["data"]) > 0 or len(scan_output["news"]) > 0 or len(formula_output["KellyFormula_Range_v1"]) > 0 or len(formula_output["portfolio"]) > 0:
        with open(stocks_output_path, 'w', encoding='utf-8') as f:
            f.write(json.dumps(scan_output, separators=(',', ':')))
        with open(stocks_output_readable_path, 'w', encoding='utf-8') as f:
            f.write(json.dumps(scan_output, indent=4, sort_keys=True))

        with open(formula_output_path, 'w', encoding='utf-8') as f:
            f.write(json.dumps(formula_output, separators=(',', ':')))
        with open(formula_output_readable_path, 'w', encoding='utf-8') as f:
            f.write(json.dumps(formula_output, indent=4, sort_keys=True))

        print("task completed: {now}".format(now=datetime.now()))

    else:
        print("No scan output data")

