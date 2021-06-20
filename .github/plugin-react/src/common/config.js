const MonitorConfig = {
  monitor_data: [
    {
      name: 'All Stock Change Order 200',
      monitor_url: 'https://finviz.com/screener.ashx?v=152&o=-change&c=1,4,6,7,8,10,11,12,14,17,18,19,20,21,22,23,26,27,28,29,30,31,32,33,34,35,36,37,38,42,43,44,45,46,47,52,54,55,56,57,58,62,63,65,66,67,69',
      max_count: 200
    }
  ],
  header_order: [
    'Ticker',
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

module.exports = {
  getMonitorConfig: function () {
    return MonitorConfig
  }
}