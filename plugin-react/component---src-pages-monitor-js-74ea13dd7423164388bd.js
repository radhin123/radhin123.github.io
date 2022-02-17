/*! For license information please see component---src-pages-monitor-js-74ea13dd7423164388bd.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"5I6w":function(e,t,r){e.exports={container:"monitorTable-module--container--1cJ3i",showColumn:"monitorTable-module--showColumn--2i-AB",table:"monitorTable-module--table--2DDq7",monitorTableTitle:"monitorTable-module--monitorTableTitle--2C_Z6",monitorTableLastUpdateTime:"monitorTable-module--monitorTableLastUpdateTime--3n57C"}},a7W4:function(e,t,r){e.exports={ControlToggle:"monitorSwitch-module--ControlToggle--2Vw32"}},"bT/m":function(e,t,r){"use strict";r.r(t);var a=r("q1tI"),o=r.n(a),s=r("w8ma"),i=r("HaE+"),n=r("o0o1"),p=r.n(n),c=r("z6Y5"),_=r("MGIy"),l=r("je4i"),h=r.n(l),m=r("iVi/");function g(e,t){void 0===t&&(t={});var r=function(e){if(e&&"j"===e[0]&&":"===e[1])return e.substr(2);return e}(e);if(function(e,t){return void 0===t&&(t=!e||"{"!==e[0]&&"["!==e[0]&&'"'!==e[0]),!t}(r,t.doNotParse))try{return JSON.parse(r)}catch(a){}return e}var u=function(){return(u=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},f=function(){function e(e,t){var r=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=function(e,t){return"string"==typeof e?m.parse(e,t):"object"==typeof e&&null!==e?e:{}}(e,t),new Promise((function(){r.HAS_DOCUMENT_COOKIE="object"==typeof document&&"string"==typeof document.cookie})).catch((function(){}))}return e.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=m.parse(document.cookie,e))},e.prototype._emitChange=function(e){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)},e.prototype.get=function(e,t,r){return void 0===t&&(t={}),this._updateBrowserValues(r),g(this.cookies[e],t)},e.prototype.getAll=function(e,t){void 0===e&&(e={}),this._updateBrowserValues(t);var r={};for(var a in this.cookies)r[a]=g(this.cookies[a],e);return r},e.prototype.set=function(e,t,r){var a;"object"==typeof t&&(t=JSON.stringify(t)),this.cookies=u(u({},this.cookies),((a={})[e]=t,a)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=m.serialize(e,t,r)),this._emitChange({name:e,value:t,options:r})},e.prototype.remove=function(e,t){var r=t=u(u({},t),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=u({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=m.serialize(e,"",r)),this._emitChange({name:e,value:void 0,options:t})},e.prototype.addChangeListener=function(e){this.changeListeners.push(e)},e.prototype.removeChangeListener=function(e){var t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1)},e}(),d=r("oqdv"),k=r("kLkQ"),b=r("Nihg"),y=r("O3LO"),v=r("Vn7y"),j=r("YM+J"),T=Object(v.a)((function(e){return o.a.createElement(j.a,Object.assign({focusVisibleClassName:".Mui-focusVisible",disableRipple:!0},e))}))((function(e){var t=e.theme;return{width:52,height:26,padding:1,margin:2,marginLeft:10,"& .MuiSwitch-switchBase":{padding:1,margin:1,transitionDuration:"300ms","&.Mui-checked":{transform:"translateX(26px)",color:"#fff","& + .MuiSwitch-track":{backgroundColor:"dark"===t.palette.mode?"#2ECA45":"#65C466",opacity:1,border:0},"&.Mui-disabled + .MuiSwitch-track":{opacity:.5}},"&.Mui-focusVisible .MuiSwitch-thumb":{color:"#33cf4d",border:"6px solid #fff"},"&.Mui-disabled .MuiSwitch-thumb":{color:"light"===t.palette.mode?t.palette.grey[100]:t.palette.grey[600]},"&.Mui-disabled + .MuiSwitch-track":{opacity:"light"===t.palette.mode?.7:.3}},"& .MuiSwitch-thumb":{boxSizing:"border-box",width:24,height:24},"& .MuiSwitch-track":{borderRadius:13,backgroundColor:"light"===t.palette.mode?"#E9E9EA":"#39393D",opacity:1,transition:t.transitions.create(["background-color"],{duration:500})}}})),O=r("a7W4"),w=r.n(O),C=function(e){var t=e.monitorSwitchRef,r=Object(a.useState)(!1),s=r[0],i=r[1];return Object(b.k)((function(){t.current.doTasks()}),s?t.current.getTaskCycleTime():null),o.a.createElement(y.a,{className:w.a.ControlToggle,control:o.a.createElement(T,{onChange:function(){if(t.current.canEnable()){var e=!s;e&&t.current.doTasks(),i(e)}},checked:s}),labelPlacement:"start",label:"Monitor"})},I=r("DYZr"),D=r("Gqia"),E=r("qnxO"),q=r("5I6w"),N=r.n(q),S=(r("jAbX"),function(e){var t=e.headerList,r=e.data,s={};t.forEach((function(e,t){"id"!==e&&"Url"!==e&&(s[e]={hide:!1,text:e})}));var i=Object(a.useState)({}),n=i[0],p=i[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:N.a.container},o.a.createElement("div",{className:N.a.table},o.a.createElement(I.a,{rows:r,columns:Object.keys(s).map((function(e){return"Change"===e||"EPS Q/Q"===e||"EPS next 5Y"===e||"EPS next Y"===e||"EPS past 5Y"===e||"EPS this Y"===e||"Insider Trans"===e||"Inst Trans"===e||"ROA"===e||"ROE"===e||"ROI"===e||"SMA20"===e||"SMA200"===e||-1!=e.indexOf("Perf ")?Object(b.j)(s[e].text,s[e].text,150,e in n?n[e]:s[e].hide):"Dividend"===e||"Sales Q/Q"===e||"Sales past 5Y"===e||"Insider Own"===e||"Inst Own"===e||"Gross Margin"===e||"Oper. Margin"===e||"Profit Margin"===e||"Float Short"===e||"52W High"===e||"52W Low"===e||"50D High"===e||"50D Low"===e?Object(b.f)(s[e].text,s[e].text,150,e in n?n[e]:s[e].hide):"Market Cap"===e||"Volume"===e||"Avg Volume"===e?Object(b.e)(s[e].text,s[e].text,150,e in n?n[e]:s[e].hide):"Ticker"===e?Object(b.i)(s[e].text,s[e].text,130,e in n?n[e]:s[e].hide):"Name"===e?Object(b.d)(s[e].text,s[e].text,250,e in n?n[e]:s[e].hide):{field:s[e].text,headerName:s[e].text,width:150,hide:e in n?n[e]:s[e].hide}})),rowsPerPageOptions:[],scrollbarSize:17,pageSize:50,components:{NoRowsOverlay:E.a},disableSelectionOnClick:!0,onColumnVisibilityChange:function(e){var t=n;t[e.field]=!e.isVisible,p(t)}}))))}),B=function(e){e.tableID;var t=e.name,s=e.monitorTableRef,i=r("pJv6").getMonitorConfig();s.current={setTable:function(e,t){var r,a,s;_(o.a.createElement(S,{headerList:(a=e[0],s=[],i.header_order.forEach((function(e){e in a&&s.push(e)})),Object.keys(a).forEach((function(e){i.header_order.includes(e)||s.push(e)})),s),data:(r=e,r.map((function(e,t){return e.id=t,Object.keys(e).forEach((function(t){e[t]="Market Cap"===t||"Avg Volume"===t?Object(k.a)(e[t]):Object(k.d)(e[t])})),e})))})),m("Last Update Time: "+t)}};var n=Object(a.useState)(),p=n[0],_=n[1],l=Object(a.useState)("Last Update Time: None"),h=l[0],m=l[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{container:!0,spacing:3},o.a.createElement(c.a,{item:!0,xs:6},o.a.createElement(D.a,{className:N.a.monitorTableTitle,variant:"h6"},t)),o.a.createElement(c.a,{container:!0,item:!0,xs:6,justifyContent:"flex-end"},o.a.createElement(D.a,{className:N.a.monitorTableLastUpdateTime,variant:"h6"},h))),p)},L=r("y4pv"),P=r.n(L),x=r("kuaW"),M=r.n(x),V=function(){var e=r("pJv6").getMonitorConfig(),t=new f;t.get(d.a)||t.set(d.a,"None",{path:"/"}),t.get(d.b)||t.set(d.b,"5",{path:"/"});var s=Object(a.useRef)("None"),n=Object(a.useRef)(5),l=function(){var t=Object(i.a)(p.a.mark((function t(r){var a,o,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.current.doPost("/api/StockMineHunterFunc?code="+s.current.value+"&api=get-monitor-data",{monitor_url:e.monitor_data[r].monitor_url,max_count:e.monitor_data[r].max_count});case 2:a=t.sent,o=a.resp,i=a.ok,a.err,i&&Object.keys(o).length>0?g.current[r].current.setTable(o.data,(new Date).toLocaleString("en-US")):console.error("refreshMonitorData failed");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var e=Object(i.a)(p.a.mark((function e(){var t,r,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.current.doGet("/plugin-react/monitor_data.json");case 2:t=e.sent,r=t.resp,a=t.ok,t.err,a&&Object.keys(r).length>0?r.forEach((function(e,t){g.current[t].current.setTable(e.data,new Date(1e3*e.timestamp).toLocaleString("en-US"))})):(alert("Get default monitor data failed..."),console.error("setDefaultMonitorData failed"));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=Object(a.useRef)([]);e.monitor_data.forEach((function(e,t){g.current[t]=Object(a.createRef)(),g.current[t].current={setTable:null}}));var u=Object(a.useRef)();u.current={canEnable:function(){return Object(k.c)(n.current.value)?!(parseInt(n.current.value)<5)||(alert("The refresh time must greater than or equal to 5..."),!1):(alert("The refresh time is invalid..."),!1)},getTaskCycleTime:function(){return 60*parseInt(n.current.value)*1e3},doTasks:function(){e.monitor_data.forEach((function(e,t){setTimeout((function(){l(t)}),5e3*t)}))}};var y=Object(a.useRef)();y.current={doGet:null};var v=Object(a.useRef)();return v.current={doGet:null},Object(a.useEffect)((function(){return m(),function(){}}),[]),o.a.createElement("div",{className:P.a.defaultFont+" "+M.a.container},o.a.createElement("div",{className:M.a.controlPannel},o.a.createElement(c.a,{container:!0,spacing:3},o.a.createElement(c.a,{item:!0,xs:5,md:8},o.a.createElement("form",{noValidate:!0,autoComplete:"off",key:h.a.generate()},o.a.createElement(_.a,{className:M.a.valueText,label:"API Token",variant:"outlined",defaultValue:t.get(d.a),size:"small",inputRef:s,onChange:function(e){t.set(d.a,s.current.value,{path:"/"})}}))),o.a.createElement(c.a,{item:!0,xs:5,md:2},o.a.createElement("form",{noValidate:!0,autoComplete:"off",key:h.a.generate()},o.a.createElement(_.a,{className:M.a.valueText,label:"Refresh Time (min)",variant:"outlined",defaultValue:t.get(d.b),size:"small",inputRef:n,onChange:function(e){t.set(d.b,n.current.value,{path:"/"})}}))),o.a.createElement(c.a,{container:!0,item:!0,xs:2,md:2,justifyContent:"flex-end"},o.a.createElement("div",{className:M.a.controlToggleContainer},o.a.createElement(C,{monitorSwitchRef:u}))))),o.a.createElement("div",null,e.monitor_data.map((function(e,t){return o.a.createElement("div",{key:h.a.generate(),className:M.a.monitorTable},o.a.createElement(B,{tableID:e.id,name:e.name,monitorTableRef:g.current[t]}))}))),o.a.createElement(b.h,{serverUrl:"",queryDataRef:y}),o.a.createElement(b.h,{serverUrl:d.d,queryDataRef:v}))};t.default=function(){return o.a.createElement(s.a,{injectFirst:!0},o.a.createElement(V,null))}},"iVi/":function(e,t,r){"use strict";t.parse=function(e,t){if("string"!=typeof e)throw new TypeError("argument str must be a string");for(var r={},o=t||{},s=e.split(";"),n=o.decode||a,p=0;p<s.length;p++){var c=s[p],_=c.indexOf("=");if(!(_<0)){var l=c.substring(0,_).trim();if(null==r[l]){var h=c.substring(_+1,c.length).trim();'"'===h[0]&&(h=h.slice(1,-1)),r[l]=i(h,n)}}}return r},t.serialize=function(e,t,r){var a=r||{},i=a.encode||o;if("function"!=typeof i)throw new TypeError("option encode is invalid");if(!s.test(e))throw new TypeError("argument name is invalid");var n=i(t);if(n&&!s.test(n))throw new TypeError("argument val is invalid");var p=e+"="+n;if(null!=a.maxAge){var c=a.maxAge-0;if(isNaN(c)||!isFinite(c))throw new TypeError("option maxAge is invalid");p+="; Max-Age="+Math.floor(c)}if(a.domain){if(!s.test(a.domain))throw new TypeError("option domain is invalid");p+="; Domain="+a.domain}if(a.path){if(!s.test(a.path))throw new TypeError("option path is invalid");p+="; Path="+a.path}if(a.expires){if("function"!=typeof a.expires.toUTCString)throw new TypeError("option expires is invalid");p+="; Expires="+a.expires.toUTCString()}a.httpOnly&&(p+="; HttpOnly");a.secure&&(p+="; Secure");if(a.sameSite){switch("string"==typeof a.sameSite?a.sameSite.toLowerCase():a.sameSite){case!0:p+="; SameSite=Strict";break;case"lax":p+="; SameSite=Lax";break;case"strict":p+="; SameSite=Strict";break;case"none":p+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return p};var a=decodeURIComponent,o=encodeURIComponent,s=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function i(e,t){try{return t(e)}catch(r){return e}}},jAbX:function(e,t,r){},kuaW:function(e,t,r){e.exports={container:"monitor-module--container--a6cm5",controlPannel:"monitor-module--controlPannel--15sgk",valueText:"monitor-module--valueText--WkMoX",controlToggleContainer:"monitor-module--controlToggleContainer--nL2yn",monitorBtn:"monitor-module--monitorBtn--3Bi3q",monitorTable:"monitor-module--monitorTable--3VRqO"}},pJv6:function(e,t){var r={monitor_data:[{id:"all-stock-change-order-200",name:"All Stock, Change Order 200",monitor_url:"https://finviz.com/screener.ashx?v=152&o=-change&c=1,4,6,7,8,10,11,12,14,17,18,19,20,21,22,23,26,27,28,29,30,31,32,33,34,35,36,37,38,42,43,44,45,46,47,52,54,55,56,57,58,62,63,65,66,67,69",max_count:200},{id:"pb2-tpc-change-order-200",name:"P/B < 2 & Target Price > Current, Change Order 200",monitor_url:"https://finviz.com/screener.ashx?v=151&f=fa_pb_u2,targetprice_above&ft=4&o=-change&c=1,4,6,7,8,10,11,12,14,17,18,19,20,21,22,23,26,27,28,29,30,31,32,33,34,35,36,37,38,42,43,44,45,46,47,52,54,55,56,57,58,62,63,65,66,67,69",max_count:200},{id:"all-industry-change-order",name:"All Industry, Change Order",monitor_url:"https://finviz.com/groups.ashx?g=industry&v=152&o=-change&c=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26",max_count:200}],header_order:["Ticker","Name","Price","Change","Target Price","P/E","P/B","Perf Week","Perf Month","Perf Quart","Perf Half","Perf Year","Perf YTD","Insider Own","Insider Trans","Inst Own","Inst Trans","50D High","50D Low","52W High","52W Low","Industry","Market Cap","P/S","P/C","Dividend","EPS this Y","EPS next Y","EPS past 5Y","EPS next 5Y","Sales past 5Y","EPS Q/Q","Sales Q/Q","Float Short","Short Ratio","ROA","ROE","ROI","Curr R","Quick R","LTDebt/Eq","Debt/Eq","SMA20","SMA200","Recom","Avg Volume","Volume"]},a={data:[{symbol:"BIO",src:"marketwatch",api:"investing/stock/BIO"},{symbol:"DAC",src:"marketwatch",api:"investing/stock/DAC"},{symbol:"GOGL",src:"marketwatch",api:"investing/stock/GOGL"},{symbol:"CPLP",src:"marketwatch",api:"investing/stock/CPLP"},{symbol:"EDRY",src:"marketwatch",api:"investing/stock/EDRY"},{symbol:"NMM",src:"marketwatch",api:"investing/stock/NMM"},{symbol:"SB",src:"marketwatch",api:"investing/stock/SB"},{symbol:"VALE",src:"marketwatch",api:"investing/stock/VALE"},{symbol:"GGB",src:"marketwatch",api:"investing/stock/GGB"},{symbol:"THO",src:"marketwatch",api:"investing/stock/THO"},{symbol:"INTC",src:"marketwatch",api:"investing/stock/INTC"},{symbol:"ET",src:"marketwatch",api:"investing/stock/ET"},{symbol:"SID",src:"marketwatch",api:"investing/stock/SID"},{symbol:"TX",src:"marketwatch",api:"investing/stock/TX"},{symbol:"PKX",src:"marketwatch",api:"investing/stock/PKX"},{symbol:"HRN00",src:"marketwatch",api:"investing/future/hrn00"},{symbol:"TIOc1",src:"investing",api:"https://www.investing.com/commodities/iron-ore-62-cfr-futures-historical-data;curr_id=961729&smlID=301009&header=Iron+ore+fines+62%25+Fe+CFR+Futures+Historical+Data;https://www.investing.com/commodities/iron-ore-62-cfr-futures"},{symbol:"STEEL",src:"marketwatch",api:"investing/index/steel?countryCode=XX"},{symbol:"FBX",src:"freightos",api:"api/lane/FBX?isDaily=true"},{symbol:"BDIY:IND",src:"bloomberg",api:"https://www.bloomberg.com/markets2/api/history/BDIY%3AIND/PX_LAST?timeframe=1_YEAR&period=daily&volumePeriod=daily"},{symbol:"DJUSMT",src:"marketwatch",api:"investing/index/djusmt?countrycode=xx"},{symbol:"COAL",src:"marketwatch",api:"investing/Future/COAL"},{symbol:"NBI",src:"marketwatch",api:"investing/index/nbi"},{symbol:"CL.1",src:"marketwatch",api:"investing/future/cl.1"},{symbol:"U.S. Crude Oil Inventories",src:"investing",api:"https://sbcharts.investing.com/events_charts/us/75.json;https://www.investing.com/economic-calendar/eia-crude-oil-inventories-75"},{symbol:"TMUBMUSD10Y",src:"marketwatch",api:"investing/bond/tmubmusd10y?countrycode=bx"},{symbol:"COMP",src:"marketwatch",api:"investing/index/comp"},{symbol:"DJIA",src:"marketwatch",api:"investing/index/djia"},{symbol:"SPY",src:"marketwatch",api:"investing/fund/spy"},{symbol:"VTI",src:"marketwatch",api:"investing/fund/vti"}]},o={VALE:[{type:"stock_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"VALE",file_path:"stock/historical-quotes/VALE.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_ohlv",algorithm:"fbprophet",args:{using_regressors:["Open","High","Low","Volume"],forecast_periods:30},target_data:{name:"VALE",file_path:"stock/historical-quotes/VALE.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_v",algorithm:"fbprophet",args:{using_regressors:["Volume"],forecast_periods:30},target_data:{name:"VALE",file_path:"stock/historical-quotes/VALE.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_empty_TIOc1_HRN00",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"VALE",file_path:"stock/historical-quotes/VALE.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"TIOc1",file_path:"markets/historical-quotes/investing_TIOc1.json",type:"market"},{using_regressors:["Close"],name:"HRN00",file_path:"markets/historical-quotes/marketwatch_HRN00.json",type:"market"}]}],PKX:[{type:"stock_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"PKX",file_path:"stock/historical-quotes/PKX.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_ohlv",algorithm:"fbprophet",args:{using_regressors:["Open","High","Low","Volume"],forecast_periods:30},target_data:{name:"PKX",file_path:"stock/historical-quotes/PKX.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_v",algorithm:"fbprophet",args:{using_regressors:["Volume"],forecast_periods:30},target_data:{name:"PKX",file_path:"stock/historical-quotes/PKX.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_empty_TIOc1_HRN00",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"PKX",file_path:"stock/historical-quotes/PKX.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"TIOc1",file_path:"markets/historical-quotes/investing_TIOc1.json",type:"market"},{using_regressors:["Close"],name:"HRN00",file_path:"markets/historical-quotes/marketwatch_HRN00.json",type:"market"}]}],INTC:[{type:"stock_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"INTC",file_path:"stock/historical-quotes/INTC.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_ohlv",algorithm:"fbprophet",args:{using_regressors:["Open","High","Low","Volume"],forecast_periods:30},target_data:{name:"INTC",file_path:"stock/historical-quotes/INTC.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_v",algorithm:"fbprophet",args:{using_regressors:["Volume"],forecast_periods:30},target_data:{name:"INTC",file_path:"stock/historical-quotes/INTC.json",type:"stock"},feature_data:[]}],BIO:[{type:"stock_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"BIO",file_path:"stock/historical-quotes/BIO.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_ohlv",algorithm:"fbprophet",args:{using_regressors:["Open","High","Low","Volume"],forecast_periods:30},target_data:{name:"BIO",file_path:"stock/historical-quotes/BIO.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_v",algorithm:"fbprophet",args:{using_regressors:["Volume"],forecast_periods:30},target_data:{name:"BIO",file_path:"stock/historical-quotes/BIO.json",type:"stock"},feature_data:[]}],DAC:[{type:"stock_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"DAC",file_path:"stock/historical-quotes/DAC.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_ohlv",algorithm:"fbprophet",args:{using_regressors:["Open","High","Low","Volume"],forecast_periods:30},target_data:{name:"DAC",file_path:"stock/historical-quotes/DAC.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_v",algorithm:"fbprophet",args:{using_regressors:["Volume"],forecast_periods:30},target_data:{name:"DAC",file_path:"stock/historical-quotes/DAC.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_empty_bdi",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"DAC",file_path:"stock/historical-quotes/DAC.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"BDIY_IND",file_path:"markets/historical-quotes/bloomberg_BDIY_IND.json",type:"market"}]},{type:"stock_fbprophet_empty_bdi_fbx",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"DAC",file_path:"stock/historical-quotes/DAC.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"BDIY_IND",file_path:"markets/historical-quotes/bloomberg_BDIY_IND.json",type:"market"},{using_regressors:["Close"],name:"FBX",file_path:"markets/historical-quotes/freightos_FBX.json",type:"market"}]}],GGB:[{type:"stock_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"GGB",file_path:"stock/historical-quotes/GGB.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_ohlv",algorithm:"fbprophet",args:{using_regressors:["Open","High","Low","Volume"],forecast_periods:30},target_data:{name:"GGB",file_path:"stock/historical-quotes/GGB.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_v",algorithm:"fbprophet",args:{using_regressors:["Volume"],forecast_periods:30},target_data:{name:"GGB",file_path:"stock/historical-quotes/GGB.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_empty_TIOc1_HRN00",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"GGB",file_path:"stock/historical-quotes/GGB.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"TIOc1",file_path:"markets/historical-quotes/investing_TIOc1.json",type:"market"},{using_regressors:["Close"],name:"HRN00",file_path:"markets/historical-quotes/marketwatch_HRN00.json",type:"market"}]}],THO:[{type:"stock_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"THO",file_path:"stock/historical-quotes/THO.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_ohlv",algorithm:"fbprophet",args:{using_regressors:["Open","High","Low","Volume"],forecast_periods:30},target_data:{name:"THO",file_path:"stock/historical-quotes/THO.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_v",algorithm:"fbprophet",args:{using_regressors:["Volume"],forecast_periods:30},target_data:{name:"THO",file_path:"stock/historical-quotes/THO.json",type:"stock"},feature_data:[]}],GOGL:[{type:"stock_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"GOGL",file_path:"stock/historical-quotes/GOGL.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_ohlv",algorithm:"fbprophet",args:{using_regressors:["Open","High","Low","Volume"],forecast_periods:30},target_data:{name:"GOGL",file_path:"stock/historical-quotes/GOGL.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_v",algorithm:"fbprophet",args:{using_regressors:["Volume"],forecast_periods:30},target_data:{name:"GOGL",file_path:"stock/historical-quotes/GOGL.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_empty_bdi",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"GOGL",file_path:"stock/historical-quotes/GOGL.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"BDIY_IND",file_path:"markets/historical-quotes/bloomberg_BDIY_IND.json",type:"market"}]},{type:"stock_fbprophet_empty_bdi_fbx",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"GOGL",file_path:"stock/historical-quotes/GOGL.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"BDIY_IND",file_path:"markets/historical-quotes/bloomberg_BDIY_IND.json",type:"market"},{using_regressors:["Close"],name:"FBX",file_path:"markets/historical-quotes/freightos_FBX.json",type:"market"}]}],CPLP:[{type:"stock_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"CPLP",file_path:"stock/historical-quotes/CPLP.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_ohlv",algorithm:"fbprophet",args:{using_regressors:["Open","High","Low","Volume"],forecast_periods:30},target_data:{name:"CPLP",file_path:"stock/historical-quotes/CPLP.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_v",algorithm:"fbprophet",args:{using_regressors:["Volume"],forecast_periods:30},target_data:{name:"CPLP",file_path:"stock/historical-quotes/CPLP.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_empty_bdi",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"CPLP",file_path:"stock/historical-quotes/CPLP.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"BDIY_IND",file_path:"markets/historical-quotes/bloomberg_BDIY_IND.json",type:"market"}]},{type:"stock_fbprophet_empty_bdi_fbx",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"CPLP",file_path:"stock/historical-quotes/CPLP.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"BDIY_IND",file_path:"markets/historical-quotes/bloomberg_BDIY_IND.json",type:"market"},{using_regressors:["Close"],name:"FBX",file_path:"markets/historical-quotes/freightos_FBX.json",type:"market"}]}],SID:[{type:"stock_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"SID",file_path:"stock/historical-quotes/SID.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_ohlv",algorithm:"fbprophet",args:{using_regressors:["Open","High","Low","Volume"],forecast_periods:30},target_data:{name:"SID",file_path:"stock/historical-quotes/SID.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_v",algorithm:"fbprophet",args:{using_regressors:["Volume"],forecast_periods:30},target_data:{name:"SID",file_path:"stock/historical-quotes/SID.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_empty_TIOc1_HRN00",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"SID",file_path:"stock/historical-quotes/SID.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"TIOc1",file_path:"markets/historical-quotes/investing_TIOc1.json",type:"market"},{using_regressors:["Close"],name:"HRN00",file_path:"markets/historical-quotes/marketwatch_HRN00.json",type:"market"}]}],EDRY:[{type:"stock_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"EDRY",file_path:"stock/historical-quotes/EDRY.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_ohlv",algorithm:"fbprophet",args:{using_regressors:["Open","High","Low","Volume"],forecast_periods:30},target_data:{name:"EDRY",file_path:"stock/historical-quotes/EDRY.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_v",algorithm:"fbprophet",args:{using_regressors:["Volume"],forecast_periods:30},target_data:{name:"EDRY",file_path:"stock/historical-quotes/EDRY.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_empty_bdi",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"EDRY",file_path:"stock/historical-quotes/EDRY.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"BDIY_IND",file_path:"markets/historical-quotes/bloomberg_BDIY_IND.json",type:"market"}]},{type:"stock_fbprophet_empty_bdi_fbx",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"EDRY",file_path:"stock/historical-quotes/EDRY.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"BDIY_IND",file_path:"markets/historical-quotes/bloomberg_BDIY_IND.json",type:"market"},{using_regressors:["Close"],name:"FBX",file_path:"markets/historical-quotes/freightos_FBX.json",type:"market"}]}],ET:[{type:"stock_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"ET",file_path:"stock/historical-quotes/ET.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_ohlv",algorithm:"fbprophet",args:{using_regressors:["Open","High","Low","Volume"],forecast_periods:30},target_data:{name:"ET",file_path:"stock/historical-quotes/ET.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_v",algorithm:"fbprophet",args:{using_regressors:["Volume"],forecast_periods:30},target_data:{name:"ET",file_path:"stock/historical-quotes/ET.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_empty_CL_1_NG00",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"ET",file_path:"stock/historical-quotes/ET.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"CL_1",file_path:"markets/historical-quotes/marketwatch_CL_1.json",type:"market"},{using_regressors:["Close"],name:"NG00",file_path:"markets/historical-quotes/marketwatch_NG00.json",type:"market"}]}],SB:[{type:"stock_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"SB",file_path:"stock/historical-quotes/SB.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_ohlv",algorithm:"fbprophet",args:{using_regressors:["Open","High","Low","Volume"],forecast_periods:30},target_data:{name:"SB",file_path:"stock/historical-quotes/SB.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_v",algorithm:"fbprophet",args:{using_regressors:["Volume"],forecast_periods:30},target_data:{name:"SB",file_path:"stock/historical-quotes/SB.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_empty_bdi",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"SB",file_path:"stock/historical-quotes/SB.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"BDIY_IND",file_path:"markets/historical-quotes/bloomberg_BDIY_IND.json",type:"market"}]},{type:"stock_fbprophet_empty_bdi_fbx",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"SB",file_path:"stock/historical-quotes/SB.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"BDIY_IND",file_path:"markets/historical-quotes/bloomberg_BDIY_IND.json",type:"market"},{using_regressors:["Close"],name:"FBX",file_path:"markets/historical-quotes/freightos_FBX.json",type:"market"}]}],NMM:[{type:"stock_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"NMM",file_path:"stock/historical-quotes/NMM.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_ohlv",algorithm:"fbprophet",args:{using_regressors:["Open","High","Low","Volume"],forecast_periods:30},target_data:{name:"NMM",file_path:"stock/historical-quotes/NMM.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_v",algorithm:"fbprophet",args:{using_regressors:["Volume"],forecast_periods:30},target_data:{name:"NMM",file_path:"stock/historical-quotes/NMM.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_empty_bdi",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"NMM",file_path:"stock/historical-quotes/NMM.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"BDIY_IND",file_path:"markets/historical-quotes/bloomberg_BDIY_IND.json",type:"market"}]},{type:"stock_fbprophet_empty_bdi_fbx",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"NMM",file_path:"stock/historical-quotes/NMM.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"BDIY_IND",file_path:"markets/historical-quotes/bloomberg_BDIY_IND.json",type:"market"},{using_regressors:["Close"],name:"FBX",file_path:"markets/historical-quotes/freightos_FBX.json",type:"market"}]}],TX:[{type:"stock_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"TX",file_path:"stock/historical-quotes/TX.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_ohlv",algorithm:"fbprophet",args:{using_regressors:["Open","High","Low","Volume"],forecast_periods:30},target_data:{name:"TX",file_path:"stock/historical-quotes/TX.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_v",algorithm:"fbprophet",args:{using_regressors:["Volume"],forecast_periods:30},target_data:{name:"TX",file_path:"stock/historical-quotes/TX.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_empty_TIOc1_HRN00",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"TX",file_path:"stock/historical-quotes/TX.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"TIOc1",file_path:"markets/historical-quotes/investing_TIOc1.json",type:"market"},{using_regressors:["Close"],name:"HRN00",file_path:"markets/historical-quotes/marketwatch_HRN00.json",type:"market"}]}],bloomberg_BDIY_IND:[{type:"market_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"bloomberg_BDIY_IND",file_path:"markets/historical-quotes/bloomberg_BDIY_IND.json",type:"market"},feature_data:[]}],freightos_FBX:[{type:"market_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"freightos_FBX",file_path:"markets/historical-quotes/freightos_FBX.json",type:"market"},feature_data:[]}],investing_TIOc1:[{type:"market_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"investing_TIOc1",file_path:"markets/historical-quotes/investing_TIOc1.json",type:"market"},feature_data:[]}],marketwatch_CL_1:[{type:"market_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"marketwatch_CL_1",file_path:"markets/historical-quotes/marketwatch_CL_1.json",type:"market"},feature_data:[]}],marketwatch_HRN00:[{type:"market_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"marketwatch_HRN00",file_path:"markets/historical-quotes/marketwatch_HRN00.json",type:"market"},feature_data:[]}],marketwatch_NG00:[{type:"market_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"marketwatch_NG00",file_path:"markets/historical-quotes/marketwatch_NG00.json",type:"market"},feature_data:[]}],PBFX:[{type:"stock_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"PBFX",file_path:"stock/historical-quotes/PBFX.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_ohlv",algorithm:"fbprophet",args:{using_regressors:["Open","High","Low","Volume"],forecast_periods:30},target_data:{name:"PBFX",file_path:"stock/historical-quotes/PBFX.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_v",algorithm:"fbprophet",args:{using_regressors:["Volume"],forecast_periods:30},target_data:{name:"PBFX",file_path:"stock/historical-quotes/PBFX.json",type:"stock"},feature_data:[]}],T:[{type:"stock_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"T",file_path:"stock/historical-quotes/T.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_ohlv",algorithm:"fbprophet",args:{using_regressors:["Open","High","Low","Volume"],forecast_periods:30},target_data:{name:"T",file_path:"stock/historical-quotes/T.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_v",algorithm:"fbprophet",args:{using_regressors:["Volume"],forecast_periods:30},target_data:{name:"T",file_path:"stock/historical-quotes/T.json",type:"stock"},feature_data:[]}]};e.exports={getMonitorConfig:function(){return r},getMarketConfig:function(){return a},getForecastConfig:function(){return o}}}}]);
//# sourceMappingURL=component---src-pages-monitor-js-74ea13dd7423164388bd.js.map