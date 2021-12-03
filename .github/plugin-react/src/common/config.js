const MonitorConfig = {
  monitor_data: [
    {
      id: 'all-stock-change-order-200',
      name: 'All Stock, Change Order 200',
      monitor_url: 'https://finviz.com/screener.ashx?v=152&o=-change&c=1,4,6,7,8,10,11,12,14,17,18,19,20,21,22,23,26,27,28,29,30,31,32,33,34,35,36,37,38,42,43,44,45,46,47,52,54,55,56,57,58,62,63,65,66,67,69',
      max_count: 200
    },
    {
      id: 'pb2-tpc-change-order-200',
      name: 'P/B < 2 & Target Price > Current, Change Order 200',
      monitor_url: 'https://finviz.com/screener.ashx?v=151&f=fa_pb_u2,targetprice_above&ft=4&o=-change&c=1,4,6,7,8,10,11,12,14,17,18,19,20,21,22,23,26,27,28,29,30,31,32,33,34,35,36,37,38,42,43,44,45,46,47,52,54,55,56,57,58,62,63,65,66,67,69',
      max_count: 200
    },
    {
      id: 'all-industry-change-order',
      name: 'All Industry, Change Order',
      monitor_url: 'https://finviz.com/groups.ashx?g=industry&v=152&o=-change&c=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26',
      max_count: 200
    },
  ],
  header_order: [
    'Ticker',
    'Name',
    'Price',
    'Change',
    'Target Price',
    'P/E',
    'P/B',
    'Perf Week',
    'Perf Month',
    'Perf Quart',
    'Perf Half',
    'Perf Year',
    'Perf YTD',
    'Insider Own',
    'Insider Trans',
    'Inst Own',
    'Inst Trans',
    '50D High',
    '50D Low',
    '52W High',
    '52W Low',
    'Industry',
    'Market Cap',
    'P/S',
    'P/C',
    'Dividend',
    'EPS this Y',
    'EPS next Y',
    'EPS past 5Y',
    'EPS next 5Y',
    'Sales past 5Y',
    'EPS Q/Q',
    'Sales Q/Q',
    'Float Short',
    'Short Ratio',
    'ROA',
    'ROE',
    'ROI',
    'Curr R',
    'Quick R',
    'LTDebt/Eq',
    'Debt/Eq',
    'SMA20',
    'SMA200',
    'Recom',
    'Avg Volume',
    'Volume'
  ]
}

const MarketConfig = {
  data:[
    {
      symbol: "KGC",
      src: "marketwatch",
      api: "investing/stock/KGC"
    },
    {
      symbol: "DAC",
      src: "marketwatch",
      api: "investing/stock/DAC"
    },
    {
      symbol: "GOGL",
      src: "marketwatch",
      api: "investing/stock/GOGL"
    },
    {
      symbol: "CPLP",
      src: "marketwatch",
      api: "investing/stock/CPLP"
    },
    {
      symbol: "EDRY",
      src: "marketwatch",
      api: "investing/stock/EDRY"
    },
    {
      symbol: "NMM",
      src: "marketwatch",
      api: "investing/stock/NMM"
    },
    {
      symbol: "SB",
      src: "marketwatch",
      api: "investing/stock/SB"
    },	
    {
      symbol: "VALE",
      src: "marketwatch",
      api: "investing/stock/VALE"
    },
    {
      symbol: "GGB",
      src: "marketwatch",
      api: "investing/stock/GGB"
    },
    {
      symbol: "THO",
      src: "marketwatch",
      api: "investing/stock/THO"
    },
	{
      symbol: "INTC",
      src: "marketwatch",
      api: "investing/stock/INTC"
    },
	{
      symbol: "ET",
      src: "marketwatch",
      api: "investing/stock/ET"
    },
	{
      symbol: "LDI",
      src: "marketwatch",
      api: "investing/stock/LDI"
    },
    {
      symbol: "SID",
      src: "marketwatch",
      api: "investing/stock/SID"
    },
    {
      symbol: "TX",
      src: "marketwatch",
      api: "investing/stock/TX"
    },
    {
      symbol: "HRN00",
      src: "marketwatch",
      api: "investing/future/hrn00"
    },
    {
      symbol: "TIOc1",
      src: "investing",
      api: "https://www.investing.com/commodities/iron-ore-62-cfr-futures-historical-data;curr_id=961729&smlID=301009&header=Iron+ore+fines+62%25+Fe+CFR+Futures+Historical+Data;https://www.investing.com/commodities/iron-ore-62-cfr-futures"
    },
    {
      symbol: "STEEL",
      src: "marketwatch",
      api: "investing/index/steel?countryCode=XX"
    },
    {
      symbol: "FBX",
      src: "freightos",
      api: "api/lane/FBX?isDaily=true"
    },
    {
      symbol: "BDIY:IND",
      src: "bloomberg",
      api: "https://www.bloomberg.com/markets2/api/history/BDIY%3AIND/PX_LAST?timeframe=1_YEAR&period=daily&volumePeriod=daily"
    },
    {
      symbol: "DJUSMT",
      src: "marketwatch",
      api: "investing/index/djusmt?countrycode=xx"
    },
    {
      symbol: "COAL",
      src: "marketwatch",
      api: "investing/Future/COAL"
    },
    {
      symbol: "GC00",
      src: "marketwatch",
      api: "investing/future/gold"
    },
    {
      symbol: "NBI",
      src: "marketwatch",
      api: "investing/index/nbi"
    },
    {
      symbol: "CL.1",
      src: "marketwatch",
      api: "investing/future/cl.1"
    },
    {
      symbol: "U.S. Crude Oil Inventories",
      src: "investing",
      api: "https://sbcharts.investing.com/events_charts/us/75.json;https://www.investing.com/economic-calendar/eia-crude-oil-inventories-75"
    },
    {
      symbol: "TMUBMUSD10Y",
      src: "marketwatch",
      api: "investing/bond/tmubmusd10y?countrycode=bx"
    },
    {
      symbol: "COMP",
      src: "marketwatch",
      api: "investing/index/comp"
    },
    {
      symbol: "DJIA",
      src: "marketwatch",
      api: "investing/index/djia"
    },
    {
      symbol: "SPY",
      src: "marketwatch",
      api: "investing/fund/spy"
    },
    {
      symbol: "VTI",
      src: "marketwatch",
      api: "investing/fund/vti"
    }
  ]
}

const ForecastConfig = {
// hold stocks
  VALE: [
    {
      type: 'stock_fbprophet_empty',
      algorithm: 'fbprophet',
      args: {
        using_regressors: [],
        forecast_periods: 30
      },
      target_data: {
        name: 'VALE',
        file_path: 'stock/historical-quotes/VALE.json',
        type: 'stock'
      },
      feature_data: [] 
    },
    {
      type: 'stock_fbprophet_ohlv',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Open', 'High', 'Low', 'Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'VALE',
        file_path: 'stock/historical-quotes/VALE.json',
        type: 'stock'
      },
      feature_data: []
    },
    {
      type: 'stock_fbprophet_v',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'VALE',
        file_path: 'stock/historical-quotes/VALE.json',
        type: 'stock'
      },
      feature_data: []
    },
  ],
  INTC: [
    {
      type: 'stock_fbprophet_empty',
      algorithm: 'fbprophet',
      args: {
        using_regressors: [],
        forecast_periods: 30
      },
      target_data: {
        name: 'INTC',
        file_path: 'stock/historical-quotes/INTC.json',
        type: 'stock'
      },
      feature_data: []
    },
    {
      type: 'stock_fbprophet_ohlv',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Open', 'High', 'Low', 'Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'INTC',
        file_path: 'stock/historical-quotes/INTC.json',
        type: 'stock'
      },
      feature_data: []
    },
    {
      type: 'stock_fbprophet_v',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'INTC',
        file_path: 'stock/historical-quotes/INTC.json',
        type: 'stock'
      },
      feature_data: []
    },
  ],
  KGC: [
    {
      type: 'stock_fbprophet_empty',
      algorithm: 'fbprophet',
      args: {
        using_regressors: [],
        forecast_periods: 30
      },
      target_data: {
        name: 'KGC',
        file_path: 'stock/historical-quotes/KGC.json',
        type: 'stock'
      },
      feature_data: []
    },
    {
      type: 'stock_fbprophet_ohlv',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Open', 'High', 'Low', 'Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'KGC',
        file_path: 'stock/historical-quotes/KGC.json',
        type: 'stock'
      },
      feature_data: []
    },
    {
      type: 'stock_fbprophet_v',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'KGC',
        file_path: 'stock/historical-quotes/KGC.json',
        type: 'stock'
      },
      feature_data: []
    },
  ],
  DAC: [
    {
      type: 'stock_fbprophet_empty',
      algorithm: 'fbprophet',
      args: {
        using_regressors: [],
        forecast_periods: 30
      },
      target_data: {
        name: 'DAC',
        file_path: 'stock/historical-quotes/DAC.json',
        type: 'stock'
      },
      feature_data: []
    },
    {
      type: 'stock_fbprophet_ohlv',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Open', 'High', 'Low', 'Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'DAC',
        file_path: 'stock/historical-quotes/DAC.json',
        type: 'stock'
      },
      feature_data: []
    },
    {
      type: 'stock_fbprophet_v',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'DAC',
        file_path: 'stock/historical-quotes/DAC.json',
        type: 'stock'
      },
      feature_data: []
    },
  ],
  GGB: [
    {
      type: 'stock_fbprophet_empty',
      algorithm: 'fbprophet',
      args: {
        using_regressors: [],
        forecast_periods: 30
      },
      target_data: {
        name: 'GGB',
        file_path: 'stock/historical-quotes/GGB.json',
        type: 'stock'
      },
      feature_data: []
    },
    {
      type: 'stock_fbprophet_ohlv',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Open', 'High', 'Low', 'Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'GGB',
        file_path: 'stock/historical-quotes/GGB.json',
        type: 'stock'
      },
      feature_data: []
    },
    {
      type: 'stock_fbprophet_v',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'GGB',
        file_path: 'stock/historical-quotes/GGB.json',
        type: 'stock'
      },
      feature_data: []
    },
  ],
  LDI: [
    {
      type: 'stock_fbprophet_empty',
      algorithm: 'fbprophet',
      args: {
        using_regressors: [],
        forecast_periods: 30
      },
      target_data: {
        name: 'LDI',
        file_path: 'stock/historical-quotes/LDI.json',
        type: 'stock'
      },
      feature_data: []
    },
    {
      type: 'stock_fbprophet_ohlv',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Open', 'High', 'Low', 'Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'LDI',
        file_path: 'stock/historical-quotes/LDI.json',
        type: 'stock'
      },
      feature_data: []
    },
    {
      type: 'stock_fbprophet_v',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'LDI',
        file_path: 'stock/historical-quotes/LDI.json',
        type: 'stock'
      },
      feature_data: []
    },
  ],
  THO: [
    {
      type: 'stock_fbprophet_empty',
      algorithm: 'fbprophet',
      args: {
        using_regressors: [],
        forecast_periods: 30
      },
      target_data: {
        name: 'THO',
        file_path: 'stock/historical-quotes/THO.json',
        type: 'stock'
      },
      feature_data: []
    },
    {
      type: 'stock_fbprophet_ohlv',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Open', 'High', 'Low', 'Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'THO',
        file_path: 'stock/historical-quotes/THO.json',
        type: 'stock'
      },
      feature_data: []
    },
    {
      type: 'stock_fbprophet_v',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'THO',
        file_path: 'stock/historical-quotes/THO.json',
        type: 'stock'
      },
      feature_data: []
    },
  ],
  GOGL: [
    {
      type: 'stock_fbprophet_empty',
      algorithm: 'fbprophet',
      args: {
        using_regressors: [],
        forecast_periods: 30
      },
      target_data: {
        name: 'GOGL',
        file_path: 'stock/historical-quotes/GOGL.json',
        type: 'stock'
      },
      feature_data: []
    },
    {
      type: 'stock_fbprophet_ohlv',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Open', 'High', 'Low', 'Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'GOGL',
        file_path: 'stock/historical-quotes/GOGL.json',
        type: 'stock'
      },
      feature_data: []
    },
    {
      type: 'stock_fbprophet_v',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'GOGL',
        file_path: 'stock/historical-quotes/GOGL.json',
        type: 'stock'
      },
      feature_data: []
    },
  ],
  CPLP: [
    {
      type: 'stock_fbprophet_empty',
      algorithm: 'fbprophet',
      args: {
        using_regressors: [],
        forecast_periods: 30
      },
      target_data: {
        name: 'CPLP',
        file_path: 'stock/historical-quotes/CPLP.json',
        type: 'stock'
      },
      feature_data: []
    },
    {
      type: 'stock_fbprophet_ohlv',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Open', 'High', 'Low', 'Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'CPLP',
        file_path: 'stock/historical-quotes/CPLP.json',
        type: 'stock'
      },
      feature_data: []
    },
    {
      type: 'stock_fbprophet_v',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'CPLP',
        file_path: 'stock/historical-quotes/CPLP.json',
        type: 'stock'
      },
      feature_data: []
    },
  ],
  SID: [
    {
      type: 'stock_fbprophet_empty',
      algorithm: 'fbprophet',
      args: {
        using_regressors: [],
        forecast_periods: 30
      },
      target_data: {
        name: 'SID',
        file_path: 'stock/historical-quotes/SID.json',
        type: 'stock'
      },
      feature_data: []
    },
    {
      type: 'stock_fbprophet_ohlv',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Open', 'High', 'Low', 'Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'SID',
        file_path: 'stock/historical-quotes/SID.json',
        type: 'stock'
      },
      feature_data: []
    },
    {
      type: 'stock_fbprophet_v',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'SID',
        file_path: 'stock/historical-quotes/SID.json',
        type: 'stock'
      },
      feature_data: []
    },
  ],
  EDRY: [
    {
      type: 'stock_fbprophet_empty',
      algorithm: 'fbprophet',
      args: {
        using_regressors: [],
        forecast_periods: 30
      },
      target_data: {
        name: 'EDRY',
        file_path: 'stock/historical-quotes/EDRY.json',
        type: 'stock'
      },
      feature_data: []
    },
    {
      type: 'stock_fbprophet_ohlv',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Open', 'High', 'Low', 'Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'EDRY',
        file_path: 'stock/historical-quotes/EDRY.json',
        type: 'stock'
      },
      feature_data: []
    },
    {
      type: 'stock_fbprophet_v',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'EDRY',
        file_path: 'stock/historical-quotes/EDRY.json',
        type: 'stock'
      },
      feature_data: []
    },
  ],
  ET: [
    {
      type: 'stock_fbprophet_empty',
      algorithm: 'fbprophet',
      args: {
        using_regressors: [],
        forecast_periods: 30
      },
      target_data: {
        name: 'ET',
        file_path: 'stock/historical-quotes/ET.json',
        type: 'stock'
      },
      feature_data: []
    },
    {
      type: 'stock_fbprophet_ohlv',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Open', 'High', 'Low', 'Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'ET',
        file_path: 'stock/historical-quotes/ET.json',
        type: 'stock'
      },
      feature_data: []
    },
    {
      type: 'stock_fbprophet_v',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'ET',
        file_path: 'stock/historical-quotes/ET.json',
        type: 'stock'
      },
      feature_data: []
    },
  ],
  SB: [
    {
      type: 'stock_fbprophet_empty',
      algorithm: 'fbprophet',
      args: {
        using_regressors: [],
        forecast_periods: 30
      },
      target_data: {
        name: 'SB',
        file_path: 'stock/historical-quotes/SB.json',
        type: 'stock'
      },
      feature_data: []
    },
    {
      type: 'stock_fbprophet_ohlv',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Open', 'High', 'Low', 'Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'SB',
        file_path: 'stock/historical-quotes/SB.json',
        type: 'stock'
      },
      feature_data: []
    },
    {
      type: 'stock_fbprophet_v',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'SB',
        file_path: 'stock/historical-quotes/SB.json',
        type: 'stock'
      },
      feature_data: []
    },
  ],
  NMM: [
    {
      type: 'stock_fbprophet_empty',
      algorithm: 'fbprophet',
      args: {
        using_regressors: [],
        forecast_periods: 30
      },
      target_data: {
        name: 'NMM',
        file_path: 'stock/historical-quotes/NMM.json',
        type: 'stock'
      },
      feature_data: []
    },
    {
      type: 'stock_fbprophet_ohlv',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Open', 'High', 'Low', 'Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'NMM',
        file_path: 'stock/historical-quotes/NMM.json',
        type: 'stock'
      },
      feature_data: []
    },
    {
      type: 'stock_fbprophet_v',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'NMM',
        file_path: 'stock/historical-quotes/NMM.json',
        type: 'stock'
      },
      feature_data: []
    },
  ],
  TX: [
    {
      type: 'stock_fbprophet_empty',
      algorithm: 'fbprophet',
      args: {
        using_regressors: [],
        forecast_periods: 30
      },
      target_data: {
        name: 'TX',
        file_path: 'stock/historical-quotes/TX.json',
        type: 'stock'
      },
      feature_data: []
    },
    {
      type: 'stock_fbprophet_ohlv',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Open', 'High', 'Low', 'Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'TX',
        file_path: 'stock/historical-quotes/TX.json',
        type: 'stock'
      },
      feature_data: []
    },
    {
      type: 'stock_fbprophet_v',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'TX',
        file_path: 'stock/historical-quotes/TX.json',
        type: 'stock'
      },
      feature_data: []
    },
  ],
// watch market
  bloomberg_BDIY_IND: [
    {
      type: "market_fbprophet_empty",
      algorithm: "fbprophet",
      args: {
        using_regressors: [],
        forecast_periods: 30
      },
      target_data: {
        name: "bloomberg_BDIY_IND",
        file_path: "markets/historical-quotes/bloomberg_BDIY_IND.json",
        type: "market"
      },
      feature_data: [

      ]
    }
  ],
  freightos_FBX: [
    {
      type: "market_fbprophet_empty",
      algorithm: "fbprophet",
      args: {
        using_regressors: [],
        forecast_periods: 30
      },
      target_data: {
        name: "freightos_FBX",
        file_path: "markets/historical-quotes/freightos_FBX.json",
        type: "market"
      },
      feature_data: [

      ]
    }
  ],
  investing_TIOc1: [
    {
      type: "market_fbprophet_empty",
      algorithm: "fbprophet",
      args: {
        using_regressors: [],
        forecast_periods: 30
      },
      target_data: {
        name: "investing_TIOc1",
        file_path: "markets/historical-quotes/investing_TIOc1.json",
        type: "market"
      },
      feature_data: [

      ]
    }
  ],
  marketwatch_CL_1: [
    {
      type: "market_fbprophet_empty",
      algorithm: "fbprophet",
      args: {
        using_regressors: [],
        forecast_periods: 30
      },
      target_data: {
        name: "marketwatch_CL_1",
        file_path: "markets/historical-quotes/marketwatch_CL_1.json",
        type: "market"
      },
      feature_data: [

      ]
    }
  ],
  marketwatch_GC00: [
    {
      type: "market_fbprophet_empty",
      algorithm: "fbprophet",
      args: {
        using_regressors: [],
        forecast_periods: 30
      },
      target_data: {
        name: "marketwatch_GC00",
        file_path: "markets/historical-quotes/marketwatch_GC00.json",
        type: "market"
      },
      feature_data: [

      ]
    }
  ],
  marketwatch_HRN00: [
    {
      type: "market_fbprophet_empty",
      algorithm: "fbprophet",
      args: {
        using_regressors: [],
        forecast_periods: 30
      },
      target_data: {
        name: "marketwatch_HRN00",
        file_path: "markets/historical-quotes/marketwatch_HRN00.json",
        type: "market"
      },
      feature_data: [

      ]
    }
  ],
  marketwatch_NG00: [
    {
      type: "market_fbprophet_empty",
      algorithm: "fbprophet",
      args: {
        using_regressors: [],
        forecast_periods: 30
      },
      target_data: {
        name: "marketwatch_NG00",
        file_path: "markets/historical-quotes/marketwatch_NG00.json",
        type: "market"
      },
      feature_data: [

      ]
    }
  ],
// watch stocks
  PBFX: [
    {
      type: 'stock_fbprophet_empty',
      algorithm: 'fbprophet',
      args: {
        using_regressors: [],
        forecast_periods: 30
      },
      target_data: {
        name: 'PBFX',
        file_path: 'stock/historical-quotes/PBFX.json',
        type: 'stock'
      },
      feature_data: []
    },
    {
      type: 'stock_fbprophet_ohlv',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Open', 'High', 'Low', 'Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'PBFX',
        file_path: 'stock/historical-quotes/PBFX.json',
        type: 'stock'
      },
      feature_data: []
    },
    {
      type: 'stock_fbprophet_v',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'PBFX',
        file_path: 'stock/historical-quotes/PBFX.json',
        type: 'stock'
      },
      feature_data: []
    },
  ],
  BIO: [
    {
      type: 'stock_fbprophet_empty',
      algorithm: 'fbprophet',
      args: {
        using_regressors: [],
        forecast_periods: 30
      },
      target_data: {
        name: 'BIO',
        file_path: 'stock/historical-quotes/BIO.json',
        type: 'stock'
      },
      feature_data: []
    },
    {
      type: 'stock_fbprophet_ohlv',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Open', 'High', 'Low', 'Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'BIO',
        file_path: 'stock/historical-quotes/BIO.json',
        type: 'stock'
      },
      feature_data: []
    },
    {
      type: 'stock_fbprophet_v',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'BIO',
        file_path: 'stock/historical-quotes/BIO.json',
        type: 'stock'
      },
      feature_data: []
    },
  ],
  T: [
    {
      type: 'stock_fbprophet_empty',
      algorithm: 'fbprophet',
      args: {
        using_regressors: [],
        forecast_periods: 30
      },
      target_data: {
        name: 'T',
        file_path: 'stock/historical-quotes/T.json',
        type: 'stock'
      },
      feature_data: []
    },
    {
      type: 'stock_fbprophet_ohlv',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Open', 'High', 'Low', 'Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'T',
        file_path: 'stock/historical-quotes/T.json',
        type: 'stock'
      },
      feature_data: []
    },
    {
      type: 'stock_fbprophet_v',
      algorithm: 'fbprophet',
      args: {
        using_regressors: ['Volume'],
        forecast_periods: 30
      },
      target_data: {
        name: 'T',
        file_path: 'stock/historical-quotes/T.json',
        type: 'stock'
      },
      feature_data: []
    },
  ]
}

module.exports = {
  getMonitorConfig: function () {
    return MonitorConfig
  },
  getMarketConfig: function () {
    return MarketConfig
  },
  getForecastConfig: function () {
    return ForecastConfig
  },
}
