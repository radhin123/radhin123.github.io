var myvar = 
'<link rel="stylesheet" type="text/css" href="css/hobby-trade.css">' +
'<div class=\'main-trade\'>' +
'    <div class="demo-img">' +
'        <img src="/img/hobby-trade/trade-kanban_960x435.png" />' +
'    </div>' +
'    <div class="hold-stocks-groups">' +
'        <h1> 持有個股 </h1>' +
'        <table id="hold-stocks-table">' +
'            <thead>' +
'                <th class="th-symbol">Symbol</th>' +
'                <th class="th-price">Price</th>' +
'                <th class="th-52w">52W</th>' +
'                <th class="th-sma20">SMA20</th>' +
'                <th class="th-sma50">SMA50</th>' +
'                <th class="th-sma200">SMA200</th>' +
'                <th class="th-rsi">RSI</th>' +
'                <th class="th-atr">ATR</th>' +
'                <th class="th-risk">Risk</th>' +
'            </thead>' +
'            <tbody id="hold-stocks-tbody">' +
'            </tbody>' +
'        </table>' +
'    </div>' +
'    <h1>網站建置中...</h1>' +
'</div>' ;

document.getElementById('main-plugin-wrap').innerHTML = myvar;