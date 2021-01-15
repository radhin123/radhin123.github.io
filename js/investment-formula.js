var myvar = 
'<link rel="stylesheet" type="text/css" href="css/investment-formula.css">' +
'<div class=\'main-investment-formula\'>' +
'    <div class="demo-img">' +
'        <img src="/img/investment-formula/Etz haChayim-gold.png" />' +
'    </div>' +
'    <div class="formula-groups" style="display:none;">' +
'        <div class="formula-component">' +
'            <fieldset class="formula-block formula-group">' +
'                <legend class="formula-block">凱利公式</legend>' +
'                <div id="kelly-formula-val" style="pointer-events:none;"></div>' +
'                <div id="kelly-formula-description" style="pointer-events:none;"></div>' +
'                <fieldset class="formula-block formula-group arg-input">' +
'                    <legend class="formula-block arg-input">手動輸入</legend>' +
'                    <div class="kelly-formula-input-block1">' +
'                        <div>賠率:</div>' +
'                        <div></div>' +
'                        <input type="text" id="kelly-b-input" name="kelly-b-input">' +
'                        <div></div>' +
'                        <div>獲利機率:</div>' +
'                        <div></div>' +
'                        <input type="text" id="kelly-p-input" name="kelly-p-input">' +
'                        <div></div>' +
'                        <div>虧損機率:</div>' +
'                        <div></div>' +
'                        <input type="text" id="kelly-q-input" name="kelly-q-input">' +
'                        <div></div>' +
'                        <button id="kelly-manual-calc-btn" class="click-btn">計算</button>' +
'                        <div></div>' +
'                    </div>' +
'                </fieldset>' +
'                <br><br><br>' +
'                <fieldset class="formula-block formula-group arg-input">' +
'                    <legend class="formula-block arg-input">自動取得(區間盤整個股)</legend>' +
'                    <div class="kelly-formula-input-block2">' +
'                        <div>股票代號:</div>' +
'                        <div></div>' +
'                        <input type="text" id="kelly-symbol-input" name="kelly-symbol-input">' +
'                        <div></div>' +
'                        <div>資料天數:</div>' +
'                        <div></div>' +
'                        <input type="text" id="kelly-days-input" value="180" name="kelly-days-input">' +
'                        <div></div>' +
'                        <button id="kelly-auto-range-v1-calc-btn" class="click-btn">計算</button>' +
'                        <div></div>' +
'                    </div>' +
'                </fieldset>' +
'            </fieldset>' +
'        </div>' +
'        <div class="formula-component">' +
'            <fieldset class="formula-block formula-group">' +
'                <legend class="formula-block">Beneish M-Score模型</legend>' +
'                <div id="beneish-formula-val" style="pointer-events:none;"></div>' +
'                <div id="beneish-formula-description" style="pointer-events:none;"></div>' +
'                <fieldset class="formula-block formula-group arg-input">' +
'                    <legend class="formula-block arg-input">手動輸入</legend>' +
'                    <div class="beneish-formula-input-block1">' +
'                        <div>DSRI:</div>' +
'                        <div></div>' +
'                        <input type="text" id="beneish-DSRI-input" name="beneish-DSRI-input">' +
'                        <div></div>' +
'                        <div>GMI:</div>' +
'                        <div></div>' +
'                        <input type="text" id="beneish-GMI-input" name="beneish-GMI-input">' +
'                        <div></div>' +
'                        <div>AQI:</div>' +
'                        <div></div>' +
'                        <input type="text" id="beneish-AQI-input" name="beneish-AQI-input">' +
'                        <div></div>' +
'                        <div>SGI:</div>' +
'                        <div></div>' +
'                        <input type="text" id="beneish-SGI-input" name="beneish-SGI-input">' +
'                        <div></div>' +
'                        <div>DEPI:</div>' +
'                        <div></div>' +
'                        <input type="text" id="beneish-DEPI-input" name="beneish-DEPI-input">' +
'                        <div></div>' +
'                        <div>SGAI:</div>' +
'                        <div></div>' +
'                        <input type="text" id="beneish-SGAI-input" name="beneish-SGAI-input">' +
'                        <div></div>' +
'                        <div>LVGI:</div>' +
'                        <div></div>' +
'                        <input type="text" id="beneish-LVGI-input" name="beneish-LVGI-input">' +
'                        <div></div>' +
'                        <div>TATA:</div>' +
'                        <div></div>' +
'                        <input type="text" id="beneish-TATA-input" name="beneish-TATA-input">' +
'                        <div></div>' +
'                    </div>' +
'                    <div class="beneish-formula-input-block1-1">' +
'                        <div></div>' +
'                        <button id="beneish-manual-calc-btn" class="click-btn">計算</button>' +
'                        <div></div>' +
'                    </div>' +
'                </fieldset>' +
'                <br><br><br>' +
'                <fieldset class="formula-block formula-group arg-input">' +
'                    <legend class="formula-block arg-input">自動取得</legend>' +
'                    <div class="beneish-formula-input-block2">' +
'                        <div>股票代號:</div>' +
'                        <div></div>' +
'                        <input type="text" id="beneish-symbol-input" name="beneish-symbol-input">' +
'                        <div></div>' +
'                        <div>比較年度:</div>' +
'                        <div></div>' +
'                        <input type="text" id="beneish-year-input" name="beneish-year-input">' +
'                        <div></div>' +
'                        <button id="beneish-auto-range-v1-calc-btn" class="click-btn">計算</button>' +
'                        <div></div>' +
'                    </div>' +
'                </fieldset>' +
'            </fieldset>' +
'        </div>' +
'    </div>' +
'    <div class="hold-stocks-groups">' +
'        <h1> 持有清單 </h1>' +
'        <div class="hold-stocks content-block">' +
'            <table id="hold-stocks-table">' +
'                <thead>' +
'                    <th class="th-symbol">Symbol</th>' +
'                    <th class="th-price">Price</th>' +
'                    <th class="th-180d">180 days</th>' +
'                    <th class="th-avg_cost">Avg Cost</th>' +
'                    <th class="th-profit_now">Profit (now)</th>' +
'                    <th class="th-position_now">Position (now)</th>' +
'                    <th class="th-position_kelly">Position [Kelly Formula]</th>' +
'                </thead>' +
'                <tbody id="hold-stocks-tbody">' +
'                </tbody>' +
'            </table>' +
'        </div>' +
'    </div>' +
'    <div class="data-source groups">' +
'        <h1> 數據源 </h1>' +
'        <div class="data-source content-block">' +
'            <a class="link" target="_blank" href="https://norn-minehunter.zmcx16.moe/">Norn-Minehunter</a>' +
'            <a class="link" target="_blank" href="https://www.alphavantage.co/">Alpha Vantage</a>' +
'        </div>' +
'    </div>' +
'</div>' ;

document.getElementById('main-plugin-wrap').innerHTML = myvar;

var kelly_formula = 'f^* = \\frac{bp-q}{b} = p - \\frac{q}{b}';
var beneish_formula1 = 'M = -4.84+0.920 \\times DSRI+0.528 \\times GMI+0.404 \\times AQI+0.892 \\times SGI+';
var beneish_formula2 = '0.115 \\times DEPI–0.172 \\times SGAI–0.327 \\times LVGI+4.697 \\times TATA';

function runMathJax(target, jump=true){
  MathJax.Hub.Queue(
    () => { 
      LoadingImg.doLoading(true);
      $(target).hide();
    }, 
    ["Typeset", MathJax.Hub, $(".formula-groups")[0]], 
    () => { 
      $(target).show(); 
      LoadingImg.doLoading(false); 
    },
    ()=>{
      if (jump){
        $(target)[0].scrollIntoView({ behavior: "smooth" });
      }
    }
  );
}


// kelly
function kellyFormula(b, p ,q){
  return (p - (q / b));
}

function calcKelly(){

  let target = '#kelly-formula-val';
  let b = $('#kelly-b-input').val();
  let p = $('#kelly-p-input').val();
  let q = $('#kelly-q-input').val();

  if (isNaN(b) || b <= 0){
    $(target)[0].innerHTML = '$$' + kelly_formula + ' = {\\color{red}{Error!!\\enspace賠率須為正實數}}' + '$$';
    runMathJax(target);
    return;
  }
  if (isNaN(p) || p <= 0 || p > 1) {
    $(target)[0].innerHTML = '$$' + kelly_formula + ' = {\\color{red}{Error!!\\enspace獲利機率須為小於或等於1的正實數}}' + '$$';
    runMathJax(target);
    return;
  }
  if (isNaN(q) || q <= 0 || q > 1) {
    $(target)[0].innerHTML = '$$' + kelly_formula + ' = {\\color{red}{Error!!\\enspace虧損機率須為小於或等於1的正實數}}' + '$$';
    runMathJax(target);
    return;
  }

  let result = kellyFormula(b, p, q) * 100;
  if (result <= 0){
    $(target)[0].innerHTML = '$$' + kelly_formula + ' = {\\color{Orange}{' + parseFloat(result.toFixed(2)) + '\\%\\enspace(期望值小於等於0, 要不玩就趁現在了!)}}' + '$$';
  }else{
    $(target)[0].innerHTML = '$$' + kelly_formula + ' = {\\color{LimeGreen}{' + parseFloat(result.toFixed(2)) + '\\%}}' + '$$';
  }

  runMathJax(target);
}

function getKellyAutoRangeV1(){

  let symbol = $("#kelly-symbol-input").val();
  let days = $("#kelly-days-input").val();

  if (!symbol) {
    $('#kelly-formula-val')[0].innerHTML = '$$' + kelly_formula + ' = {\\color{red}{Error!!\\enspace非法股票代號}}' + '$$';
    runMathJax('#kelly-formula-val');
    return;
  }

  if (isNaN(days) || days <= 0) {
    $('#kelly-formula-val')[0].innerHTML = '$$' + kelly_formula + ' = {\\color{red}{Error!!\\enspace資料天數須為正整數}}' + '$$';
    runMathJax('#kelly-formula-val');
    return;
  }

  var data = [
    {
      'type': 'KellyFormula_Range_v1',
      'name': '',
      'target': [symbol],
      'args': {
        'days': days
      }
    }
  ];

  LoadingImg.doLoading(true);

  $.ajax({
    type: 'POST',
    url: 'https://zmcx16.moe/stock-minehunter/api/task/calc-formula',
    async: true,
    data: JSON.stringify({ "data": data }),
    dataType: 'json',
    contentType: 'application/json',
    cache: false,
    success: function (resp_data, textStatus, xhr) {
      LoadingImg.doLoading(false);
      if (resp_data) {
        console.log(resp_data);
        if (resp_data["ret"] !== 0 || resp_data["data"][0]["result"] === null) {
          $('#kelly-formula-val')[0].innerHTML = '$$' + kelly_formula + ' = {\\color{red}{Error!!\\enspace取得資料失敗...}}' + '$$';
          runMathJax('#kelly-formula-val');
        }else{
          $('#kelly-b-input').val((resp_data["data"][0]["result"]["profit"] / resp_data["data"][0]["result"]["loss"]).toFixed(2));
          $('#kelly-p-input').val((resp_data["data"][0]["result"]["p"]).toFixed(2));
          $('#kelly-q-input').val((resp_data["data"][0]["result"]["q"]).toFixed(2));
          calcKelly();
        }
      }
      else {
        console.log('get formula reports failed: ' + xhr);
        $('#kelly-formula-val')[0].innerHTML = '$$' + kelly_formula + ' = {\\color{red}{Error!!\\enspace取得資料失敗...}}' + '$$';
        runMathJax('#kelly-formula-val');
      }
    },
    error: function (xhr, textStatus, errorThrown) {
      LoadingImg.doLoading(false);
      console.log('Get formula reports failed: ' + xhr);
      console.log('Get formula reports failed: ' + textStatus);
      console.log('Get formula reports failed: ' + errorThrown);
      $('#kelly-formula-val')[0].innerHTML = '$$' + kelly_formula + ' = {\\color{red}{Error!!\\enspace取得資料失敗...}}' + '$$';
      runMathJax('#kelly-formula-val');
    },
    timeout: 300000
  });
}

// beneish
function beneishFormula(DSRI, GMI, AQI, SGI, DEPI, SGAI, LVGI, TATA) {
  return -4.84 + 0.92 * DSRI + 0.528 * GMI + 0.404 * AQI + 0.892 * SGI + 0.115 * DEPI - 0.172 * SGAI - 0.327 * LVGI + 4.679 * TATA;
}

function calcBeneish() {

  let target = '#beneish-formula-val';
  let DSRI = $('#beneish-DSRI-input').val();
  let GMI = $('#beneish-GMI-input').val();
  let AQI = $('#beneish-AQI-input').val();
  let SGI = $('#beneish-SGI-input').val();
  let DEPI = $('#beneish-DEPI-input').val();
  let SGAI = $('#beneish-SGAI-input').val();
  let LVGI = $('#beneish-LVGI-input').val();
  let TATA = $('#beneish-TATA-input').val();

  if (isNaN(DSRI) || isNaN(GMI) || isNaN(AQI) || isNaN(SGI) || isNaN(DEPI) || isNaN(SGAI) || isNaN(LVGI) || isNaN(TATA) || isNaN(DSRI)) {
    $(target)[0].innerHTML = '$$' + beneish_formula1 + '$$' + '$$' + beneish_formula2 + '$$$${\\color{red}{Error!!\\enspace不合法參數}}' + '$$';
    runMathJax(target);
    return;
  }


  let result = beneishFormula(DSRI, GMI, AQI, SGI, DEPI, SGAI, LVGI, TATA);
  if (result <= -2.22) {
    $(target)[0].innerHTML = '$$' + beneish_formula1 + '$$' + '$$' + beneish_formula2 + ' = {\\color{LimeGreen}{' + parseFloat(result.toFixed(5)) + '}}' + '$$$${\\color{LimeGreen}{財報造假機率低}}$$';
  } else if (result >= -1.78) {
    $(target)[0].innerHTML = '$$' + beneish_formula1 + '$$' + '$$' + beneish_formula2 + ' = {\\color{red}{' + parseFloat(result.toFixed(5)) + '}}' + '$$$${\\color{red}{財報造假可能性高}}$$';
  } else {
    $(target)[0].innerHTML = '$$' + beneish_formula1 + '$$' + '$$' + beneish_formula2 + ' = {\\color{Orange}{' + parseFloat(result.toFixed(5)) + '}}' + '$$$${\\color{Orange}{進行一些財務操作可能性高}}$$';
  }

  runMathJax(target);
}

function getBeneishAutoRangeV1() {

  let symbol = $("#beneish-symbol-input").val();
  let year = $("#beneish-year-input").val();

  if (!symbol) {
    $('#beneish-formula-val')[0].innerHTML = '$$' + beneish_formula1 + '$$' + '$$' + beneish_formula2 + '$$$${\\color{red}{Error!!\\enspace非法股票代號}}' + '$$';
    runMathJax('#beneish-formula-val');
    return;
  }

  if (isNaN(year) || year <= 0) {
    $('#beneish-formula-val')[0].innerHTML = '$$' + beneish_formula1 + '$$' + '$$' + beneish_formula2 + '$$$${\\color{red}{Error!!\\enspace比較年度須為正整數}}' + '$$';
    runMathJax('#beneish-formula-val');
    return;
  }

  var data = [
    {
      'type': 'Beneish_Model_v1',
      'name': '',
      'target': [symbol],
      'args': {
        'year': year
      }
    }
  ];

  LoadingImg.doLoading(true);

  $.ajax({
    type: 'POST',
    url: 'https://zmcx16.moe/stock-minehunter/api/task/calc-formula',
    async: true,
    data: JSON.stringify({ "data": data }),
    dataType: 'json',
    contentType: 'application/json',
    cache: false,
    success: function (resp_data, textStatus, xhr) {
      LoadingImg.doLoading(false);
      if (resp_data) {
        console.log(resp_data);
        if (resp_data["ret"] !== 0 || resp_data["data"][0]["result"] === null) {
          $('#beneish-formula-val')[0].innerHTML = '$$' + beneish_formula1 + '$$' + '$$' + beneish_formula2 + '$$$${\\color{red}{Error!!\\enspace取得資料失敗...}}' + '$$';
          runMathJax('#beneish-formula-val');
        } else {
          $('#beneish-DSRI-input').val((resp_data["data"][0]["result"][year]["DSRI"]));
          $('#beneish-GMI-input').val((resp_data["data"][0]["result"][year]["GMI"]));
          $('#beneish-AQI-input').val((resp_data["data"][0]["result"][year]["AQI"]));
          $('#beneish-SGI-input').val((resp_data["data"][0]["result"][year]["SGI"]));
          $('#beneish-DEPI-input').val((resp_data["data"][0]["result"][year]["DEPI"]));
          $('#beneish-SGAI-input').val((resp_data["data"][0]["result"][year]["SGAI"]));
          $('#beneish-LVGI-input').val((resp_data["data"][0]["result"][year]["LVGI"]));
          $('#beneish-TATA-input').val((resp_data["data"][0]["result"][year]["TATA"]));
          calcBeneish();
        }
      }
      else {
        console.log('get formula reports failed: ' + xhr);
        $('#beneish-formula-val')[0].innerHTML = '$$' + beneish_formula1 + '$$' + '$$' + beneish_formula2 + '$$$${\\color{red}{Error!!\\enspace取得資料失敗...}}' + '$$';
        runMathJax('#beneish-formula-val');
      }
    },
    error: function (xhr, textStatus, errorThrown) {
      LoadingImg.doLoading(false);
      console.log('Get formula reports failed: ' + xhr);
      console.log('Get formula reports failed: ' + textStatus);
      console.log('Get formula reports failed: ' + errorThrown);
      $('#beneish-formula-val')[0].innerHTML = '$$' + beneish_formula1 + '$$' + '$$' + beneish_formula2 + '$$$${\\color{red}{Error!!\\enspace取得資料失敗...}}' + '$$';
      runMathJax('#beneish-formula-val');
    },
    timeout: 300000
  });
}


function buildTable(data){

  let total_postion_kelly = 0;
  data["hold_stock_list"].forEach((symbol) => {
    let kelly_result = data["KellyFormula_Range_v1"][symbol];
    if (kelly_result === null) {
      console.log('symbol ' + symbol + ' data is null');
      return;
    }

    let score = kellyFormula(kelly_result['profit'] / kelly_result['loss'], kelly_result['p'], kelly_result['q']);
    if (score>0)
      total_postion_kelly += score;
  });

  let output = "";
  data["hold_stock_list"].forEach((symbol) => {
    let kelly_result = data["KellyFormula_Range_v1"][symbol];
    if (kelly_result === null){
      console.log('symbol ' + symbol + ' data is null');
      return;
    }

    let price = kelly_result['close'];
    let days = kelly_result['min_close'].toFixed(2) + ' - ' + kelly_result['max_close'].toFixed(2);
    let score = kellyFormula(kelly_result['profit'] / kelly_result['loss'], kelly_result['p'], kelly_result['q']);
    let avg_cost = data["portfolio"][symbol]["cost_p"];
    let profit_now = data["portfolio"][symbol]["profit_%"].toFixed(2);
    let position_now = data["portfolio"][symbol]["position_%"].toFixed(2);
    let position_kelly = score > 0 ? (score / total_postion_kelly * 100).toFixed(2) : 0;
    output += 
    '<tr class="tr-stock main">' + 
    '  <td class="td-symbol">' + symbol + '</td>' + 
    '  <td class="td-price">' + price + '</td>' + 
    '  <td class="td-180d">' + days + '</td>' + 
    '  <td class="td-avg_cost">' + avg_cost + '</td>' + 
    '  <td class="td-profit_now">' + profit_now + '%</td>' + 
    '  <td class="td-position_now">' + position_now + '%</td>' + 
    '  <td class="td-position_kelly">' + position_kelly + '%</td>' + 
    '</tr>';
  });

  return output;
}

$(document).ready(function () {

  // disable cache
  // $.ajaxSetup({ cache: false });

  setBanner('Unlimited Formula Works', 'gold', ['好用的公式整理', 'Etz haChayim', 'El Psy Congroo']);

  // kelly
  $("#kelly-formula-val")[0].innerHTML = '$$' + kelly_formula + '$$';
  $("#kelly-formula-description")[0].innerHTML = '$$f^*: 下注比率 \\qquad b: 賠率 = \\cfrac{獲利金額}{虧損金額} \\qquad p: 獲利機率 \\qquad q: 虧損機率 $$'

  $('#kelly-manual-calc-btn').click(()=>{
    calcKelly();
  });

  $('#kelly-auto-range-v1-calc-btn').click(() => {
    getKellyAutoRangeV1();
  });

  // beneish (workaround: mathjax break line not work problem )
  $("#beneish-formula-val")[0].innerHTML = '$$' + beneish_formula1 + '$$' + '$$' + beneish_formula2 + '$$';
  $("#beneish-formula-description")[0].innerHTML = '$$' + 'DSRI(應收帳款指數): \\cfrac{本期應收帳款佔銷售收入比例}{上期應收帳款佔銷售收入比例} \\qquad GMI(毛利率指數): \\cfrac{上期毛利率}{本期毛利率}' + '$$' +
    '$$' + 'AQI(資產質量指數): \\cfrac{本期非流動資產占比}{上期非流動資產占比} \\qquad SGI(營業收入指數): \\cfrac{本期銷貨收入}{上期銷貨收入}' + '$$' + 
    '$$' + 'DEPI(折舊率指數): \\cfrac{上期折舊率}{本期折舊率} \\qquad SGAI(銷售管理費用指數): \\cfrac{本期銷售管理費用占銷售收入比例}{上期銷售管理費用占銷售收入比例}' + '$$' +
    '$$' + 'LVGI(財務杠桿指數): \\cfrac{本期資產負債率}{上期資產負債率} \\qquad TATA(應計系數): \\cfrac{淨收入 - 營運現金流量}{總資產}' + '$$';

  $('#beneish-manual-calc-btn').click(() => {
    calcBeneish();
  });

  $('#beneish-auto-range-v1-calc-btn').click(() => {
    getBeneishAutoRangeV1();
  });

  runMathJax(".formula-groups", false);

  // load hold stocks data
  $.getJSON("zmcx16_investment-formula-trade-data.json", function (json_data) {
    $("#hold-stocks-tbody")[0].innerHTML = buildTable(json_data);
  });

});
