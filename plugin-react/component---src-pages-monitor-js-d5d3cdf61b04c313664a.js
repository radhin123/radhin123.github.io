/*! For license information please see component---src-pages-monitor-js-d5d3cdf61b04c313664a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"5I6w":function(e,t,r){e.exports={container:"monitorTable-module--container--26q-D",showColumn:"monitorTable-module--showColumn--3WAWS",table:"monitorTable-module--table--TS5RO",monitorTableTitle:"monitorTable-module--monitorTableTitle--1xllf",monitorTableLastUpdateTime:"monitorTable-module--monitorTableLastUpdateTime--K3kmi"}},a7W4:function(e,t,r){e.exports={ControlToggle:"monitorSwitch-module--ControlToggle--332Cq"}},"bT/m":function(e,t,r){"use strict";r.r(t);var a=r("q1tI"),o=r.n(a),s=r("o8Rm"),i=r("HaE+"),n=r("o0o1"),p=r.n(n),c=r("tRbT"),_=r("r9w1"),l=r("je4i"),h=r.n(l),m=r("iVi/");function g(e,t){void 0===t&&(t={});var r=function(e){if(e&&"j"===e[0]&&":"===e[1])return e.substr(2);return e}(e);if(function(e,t){return void 0===t&&(t=!e||"{"!==e[0]&&"["!==e[0]&&'"'!==e[0]),!t}(r,t.doNotParse))try{return JSON.parse(r)}catch(a){}return e}var f=function(){return(f=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},u=function(){function e(e,t){var r=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=function(e,t){return"string"==typeof e?m.parse(e,t):"object"==typeof e&&null!==e?e:{}}(e,t),new Promise((function(){r.HAS_DOCUMENT_COOKIE="object"==typeof document&&"string"==typeof document.cookie})).catch((function(){}))}return e.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=m.parse(document.cookie,e))},e.prototype._emitChange=function(e){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)},e.prototype.get=function(e,t,r){return void 0===t&&(t={}),this._updateBrowserValues(r),g(this.cookies[e],t)},e.prototype.getAll=function(e,t){void 0===e&&(e={}),this._updateBrowserValues(t);var r={};for(var a in this.cookies)r[a]=g(this.cookies[a],e);return r},e.prototype.set=function(e,t,r){var a;"object"==typeof t&&(t=JSON.stringify(t)),this.cookies=f(f({},this.cookies),((a={})[e]=t,a)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=m.serialize(e,t,r)),this._emitChange({name:e,value:t,options:r})},e.prototype.remove=function(e,t){var r=t=f(f({},t),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=f({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=m.serialize(e,"",r)),this._emitChange({name:e,value:void 0,options:t})},e.prototype.addChangeListener=function(e){this.changeListeners.push(e)},e.prototype.removeChangeListener=function(e){var t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1)},e}(),d=r("oqdv"),k=r("kLkQ"),b=r("Nihg"),y=r("ZGBi"),v=r("zLVn"),C=r("H2TA"),j=r("UhlP"),T=["classes"],I=Object(C.a)((function(e){return{root:{width:46,height:22,padding:0,margin:e.spacing(1)},switchBase:{padding:1,"&$checked":{transform:"translateX(25px)",color:e.palette.common.white,"& + $track":{backgroundColor:"violet",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"violet",border:"6px solid #fff"}},thumb:{width:20,height:20},track:{borderRadius:13,border:"1px solid "+e.palette.grey[400],backgroundColor:"grey",opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{}}}))((function(e){var t=e.classes,r=Object(v.a)(e,T);return o.a.createElement(j.a,Object.assign({focusVisibleClassName:t.focusVisible,disableRipple:!0,classes:{root:t.root,switchBase:t.switchBase,thumb:t.thumb,track:t.track,checked:t.checked}},r))})),w=r("a7W4"),O=r.n(w),D=function(e){var t=e.monitorSwitchRef,r=Object(a.useState)(!1),s=r[0],i=r[1];return Object(b.i)((function(){t.current.doTasks()}),s?t.current.getTaskCycleTime():null),o.a.createElement(y.a,{className:O.a.ControlToggle,control:o.a.createElement(I,{onChange:function(){if(t.current.canEnable()){var e=!s;e&&t.current.doTasks(),i(e)}},checked:s}),labelPlacement:"start",label:"Monitor"})},q=r("YMtY"),E=r("ofer"),N=r("qnxO"),L=r("5I6w"),B=r.n(L),S=(r("jAbX"),function(e){var t=e.headerList,r=e.data,s={};t.forEach((function(e,t){"id"!==e&&"Url"!==e&&(s[e]={hide:!1,text:e})}));var i=Object(a.useState)({}),n=i[0],p=i[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:B.a.container},o.a.createElement("div",{className:B.a.table},o.a.createElement(q.a,{rows:r,columns:Object.keys(s).map((function(e){return"Change"===e||"EPS Q/Q"===e||"EPS next 5Y"===e||"EPS next Y"===e||"EPS past 5Y"===e||"EPS this Y"===e||"Insider Trans"===e||"Inst Trans"===e||"ROA"===e||"ROE"===e||"ROI"===e||"SMA20"===e||"SMA200"===e||-1!=e.indexOf("Perf ")?Object(b.h)(s[e].text,s[e].text,150,n[e]?n[e]:s[e].hide):"Dividend"===e||"Sales Q/Q"===e||"Sales past 5Y"===e||"Insider Own"===e||"Inst Own"===e||"Gross Margin"===e||"Oper. Margin"===e||"Profit Margin"===e||"Float Short"===e||"52W High"===e||"52W Low"===e||"50D High"===e||"50D Low"===e?Object(b.d)(s[e].text,s[e].text,150,n[e]?n[e]:s[e].hide):"Market Cap"===e||"Volume"===e||"Avg Volume"===e?Object(b.c)(s[e].text,s[e].text,150,n[e]?n[e]:s[e].hide):"Ticker"===e?Object(b.g)(s[e].text,s[e].text,130,n[e]?n[e]:s[e].hide):"Name"===e?Object(b.b)(s[e].text,s[e].text,250,n[e]?n[e]:s[e].hide):{field:s[e].text,headerName:s[e].text,width:150,hide:n[e]?n[e]:s[e].hide}})),rowsPerPageOptions:[],scrollbarSize:17,pageSize:50,components:{noRowsOverlay:N.a},disableSelectionOnClick:!0,onColumnVisibilityChange:function(e){var t=n;t[e.field]=!e.isVisible,p(t)}}))))}),x=function(e){e.tableID;var t=e.name,s=e.monitorTableRef,i=r("pJv6").getMonitorConfig();s.current={setTable:function(e,t){var r,a,s;_(o.a.createElement(S,{headerList:(a=e[0],s=[],i.header_order.forEach((function(e){e in a&&s.push(e)})),Object.keys(a).forEach((function(e){i.header_order.includes(e)||s.push(e)})),s),data:(r=e,r.map((function(e,t){return e.id=t,Object.keys(e).forEach((function(t){e[t]="Market Cap"===t||"Avg Volume"===t?Object(k.a)(e[t]):Object(k.d)(e[t])})),e})))})),m("Last Update Time: "+t)}};var n=Object(a.useState)(),p=n[0],_=n[1],l=Object(a.useState)("Last Update Time: None"),h=l[0],m=l[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{container:!0,spacing:3},o.a.createElement(c.a,{item:!0,xs:6},o.a.createElement(E.a,{className:B.a.monitorTableTitle,variant:"h6"},t)),o.a.createElement(c.a,{container:!0,item:!0,xs:6,justifyContent:"flex-end"},o.a.createElement(E.a,{className:B.a.monitorTableLastUpdateTime,variant:"h6"},h))),p)},G=r("y4pv"),P=r.n(G),V=r("kuaW"),R=r.n(V),Y=function(){var e=r("pJv6").getMonitorConfig(),t=new u;t.get(d.a)||t.set(d.a,"None",{path:"/"}),t.get(d.b)||t.set(d.b,"5",{path:"/"});var s=Object(a.useRef)("None"),n=Object(a.useRef)(5),l=function(){var t=Object(i.a)(p.a.mark((function t(r){var a,o,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.current.doPost("/api/StockMineHunterFunc?code="+s.current.value+"&api=get-monitor-data",{monitor_url:e.monitor_data[r].monitor_url,max_count:e.monitor_data[r].max_count});case 2:a=t.sent,o=a.resp,i=a.ok,a.err,i&&Object.keys(o).length>0?g.current[r].current.setTable(o.data,(new Date).toLocaleString("en-US")):console.error("refreshMonitorData failed");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var e=Object(i.a)(p.a.mark((function e(){var t,r,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.current.doGet("/plugin-react/monitor_data.json");case 2:t=e.sent,r=t.resp,a=t.ok,t.err,a&&Object.keys(r).length>0?r.forEach((function(e,t){g.current[t].current.setTable(e.data,new Date(1e3*e.timestamp).toLocaleString("en-US"))})):(alert("Get default monitor data failed..."),console.error("setDefaultMonitorData failed"));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=Object(a.useRef)([]);e.monitor_data.forEach((function(e,t){g.current[t]=Object(a.createRef)(),g.current[t].current={setTable:null}}));var f=Object(a.useRef)();f.current={canEnable:function(){return Object(k.c)(n.current.value)?!(parseInt(n.current.value)<5)||(alert("The refresh time must greater than or equal to 5..."),!1):(alert("The refresh time is invalid..."),!1)},getTaskCycleTime:function(){return 60*parseInt(n.current.value)*1e3},doTasks:function(){e.monitor_data.forEach((function(e,t){setTimeout((function(){l(t)}),5e3*t)}))}};var y=Object(a.useRef)();y.current={doGet:null};var v=Object(a.useRef)();return v.current={doGet:null},Object(a.useEffect)((function(){return m(),function(){}}),[]),o.a.createElement("div",{className:P.a.defaultFont+" "+R.a.container},o.a.createElement("div",{className:R.a.controlPannel},o.a.createElement(c.a,{container:!0,spacing:3},o.a.createElement(c.a,{item:!0,xs:5,md:8},o.a.createElement("form",{noValidate:!0,autoComplete:"off",key:h.a.generate()},o.a.createElement(_.a,{className:R.a.valueText,label:"API Token",variant:"outlined",defaultValue:t.get(d.a),size:"small",inputRef:s,onChange:function(e){t.set(d.a,s.current.value,{path:"/"})}}))),o.a.createElement(c.a,{item:!0,xs:5,md:2},o.a.createElement("form",{noValidate:!0,autoComplete:"off",key:h.a.generate()},o.a.createElement(_.a,{className:R.a.valueText,label:"Refresh Time (min)",variant:"outlined",defaultValue:t.get(d.b),size:"small",inputRef:n,onChange:function(e){t.set(d.b,n.current.value,{path:"/"})}}))),o.a.createElement(c.a,{container:!0,item:!0,xs:2,md:2,justifyContent:"flex-end"},o.a.createElement("div",{className:R.a.controlToggleContainer},o.a.createElement(D,{monitorSwitchRef:f}))))),o.a.createElement("div",null,e.monitor_data.map((function(e,t){return o.a.createElement("div",{key:h.a.generate(),className:R.a.monitorTable},o.a.createElement(x,{tableID:e.id,name:e.name,monitorTableRef:g.current[t]}))}))),o.a.createElement(b.f,{serverUrl:"",queryDataRef:y}),o.a.createElement(b.f,{serverUrl:d.d,queryDataRef:v}))};t.default=function(){return o.a.createElement(s.b,{injectFirst:!0},o.a.createElement(Y,null))}},"iVi/":function(e,t,r){"use strict";t.parse=function(e,t){if("string"!=typeof e)throw new TypeError("argument str must be a string");for(var r={},o=t||{},i=e.split(s),p=o.decode||a,c=0;c<i.length;c++){var _=i[c],l=_.indexOf("=");if(!(l<0)){var h=_.substr(0,l).trim(),m=_.substr(++l,_.length).trim();'"'==m[0]&&(m=m.slice(1,-1)),null==r[h]&&(r[h]=n(m,p))}}return r},t.serialize=function(e,t,r){var a=r||{},s=a.encode||o;if("function"!=typeof s)throw new TypeError("option encode is invalid");if(!i.test(e))throw new TypeError("argument name is invalid");var n=s(t);if(n&&!i.test(n))throw new TypeError("argument val is invalid");var p=e+"="+n;if(null!=a.maxAge){var c=a.maxAge-0;if(isNaN(c))throw new Error("maxAge should be a Number");p+="; Max-Age="+Math.floor(c)}if(a.domain){if(!i.test(a.domain))throw new TypeError("option domain is invalid");p+="; Domain="+a.domain}if(a.path){if(!i.test(a.path))throw new TypeError("option path is invalid");p+="; Path="+a.path}if(a.expires){if("function"!=typeof a.expires.toUTCString)throw new TypeError("option expires is invalid");p+="; Expires="+a.expires.toUTCString()}a.httpOnly&&(p+="; HttpOnly");a.secure&&(p+="; Secure");if(a.sameSite){switch("string"==typeof a.sameSite?a.sameSite.toLowerCase():a.sameSite){case!0:p+="; SameSite=Strict";break;case"lax":p+="; SameSite=Lax";break;case"strict":p+="; SameSite=Strict";break;case"none":p+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return p};var a=decodeURIComponent,o=encodeURIComponent,s=/; */,i=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function n(e,t){try{return t(e)}catch(r){return e}}},kuaW:function(e,t,r){e.exports={container:"monitor-module--container--6U9t4",controlPannel:"monitor-module--controlPannel--SkQhD",valueText:"monitor-module--valueText--3GD2c",controlToggleContainer:"monitor-module--controlToggleContainer--13WoU",monitorBtn:"monitor-module--monitorBtn--3-1xq",monitorTable:"monitor-module--monitorTable--UzwYl"}},pJv6:function(e,t){var r={monitor_data:[{id:"all-stock-change-order-200",name:"All Stock, Change Order 200",monitor_url:"https://finviz.com/screener.ashx?v=152&o=-change&c=1,4,6,7,8,10,11,12,14,17,18,19,20,21,22,23,26,27,28,29,30,31,32,33,34,35,36,37,38,42,43,44,45,46,47,52,54,55,56,57,58,62,63,65,66,67,69",max_count:200},{id:"pb2-tpc-change-order-200",name:"P/B < 2 & Target Price > Current, Change Order 200",monitor_url:"https://finviz.com/screener.ashx?v=151&f=fa_pb_u2,targetprice_above&ft=4&o=-change&c=1,4,6,7,8,10,11,12,14,17,18,19,20,21,22,23,26,27,28,29,30,31,32,33,34,35,36,37,38,42,43,44,45,46,47,52,54,55,56,57,58,62,63,65,66,67,69",max_count:200},{id:"all-industry-change-order",name:"All Industry, Change Order",monitor_url:"https://finviz.com/groups.ashx?g=industry&v=152&o=-change&c=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26",max_count:200}],header_order:["Ticker","Name","Price","Change","Target Price","P/E","P/B","Perf Week","Perf Month","Perf Quart","Perf Half","Perf Year","Perf YTD","Insider Own","Insider Trans","Inst Own","Inst Trans","50D High","50D Low","52W High","52W Low","Industry","Market Cap","P/S","P/C","Dividend","EPS this Y","EPS next Y","EPS past 5Y","EPS next 5Y","Sales past 5Y","EPS Q/Q","Sales Q/Q","Float Short","Short Ratio","ROA","ROE","ROI","Curr R","Quick R","LTDebt/Eq","Debt/Eq","SMA20","SMA200","Recom","Avg Volume","Volume"]},a={data:[{symbol:"KGC",src:"marketwatch",api:"investing/stock/KGC"},{symbol:"DAC",src:"marketwatch",api:"investing/stock/DAC"},{symbol:"GOGL",src:"marketwatch",api:"investing/stock/GOGL"},{symbol:"CPLP",src:"marketwatch",api:"investing/stock/CPLP"},{symbol:"EDRY",src:"marketwatch",api:"investing/stock/EDRY"},{symbol:"NMM",src:"marketwatch",api:"investing/stock/NMM"},{symbol:"SB",src:"marketwatch",api:"investing/stock/SB"},{symbol:"VALE",src:"marketwatch",api:"investing/stock/VALE"},{symbol:"GGB",src:"marketwatch",api:"investing/stock/GGB"},{symbol:"THO",src:"marketwatch",api:"investing/stock/THO"},{symbol:"INTC",src:"marketwatch",api:"investing/stock/INTC"},{symbol:"ET",src:"marketwatch",api:"investing/stock/ET"},{symbol:"LDI",src:"marketwatch",api:"investing/stock/LDI"},{symbol:"SID",src:"marketwatch",api:"investing/stock/SID"},{symbol:"TX",src:"marketwatch",api:"investing/stock/TX"},{symbol:"HRN00",src:"marketwatch",api:"investing/future/hrn00"},{symbol:"TIOc1",src:"investing",api:"https://www.investing.com/commodities/iron-ore-62-cfr-futures-historical-data;curr_id=961729&smlID=301009&header=Iron+ore+fines+62%25+Fe+CFR+Futures+Historical+Data;https://www.investing.com/commodities/iron-ore-62-cfr-futures"},{symbol:"STEEL",src:"marketwatch",api:"investing/index/steel?countryCode=XX"},{symbol:"FBX",src:"freightos",api:"api/lane/FBX?isDaily=true"},{symbol:"BDIY:IND",src:"bloomberg",api:"https://www.bloomberg.com/markets2/api/history/BDIY%3AIND/PX_LAST?timeframe=1_YEAR&period=daily&volumePeriod=daily"},{symbol:"DJUSMT",src:"marketwatch",api:"investing/index/djusmt?countrycode=xx"},{symbol:"COAL",src:"marketwatch",api:"investing/Future/COAL"},{symbol:"GC00",src:"marketwatch",api:"investing/future/gold"},{symbol:"NBI",src:"marketwatch",api:"investing/index/nbi"},{symbol:"CL.1",src:"marketwatch",api:"investing/future/cl.1"},{symbol:"U.S. Crude Oil Inventories",src:"investing",api:"https://sbcharts.investing.com/events_charts/us/75.json;https://www.investing.com/economic-calendar/eia-crude-oil-inventories-75"},{symbol:"TMUBMUSD10Y",src:"marketwatch",api:"investing/bond/tmubmusd10y?countrycode=bx"},{symbol:"COMP",src:"marketwatch",api:"investing/index/comp"},{symbol:"DJIA",src:"marketwatch",api:"investing/index/djia"},{symbol:"SPY",src:"marketwatch",api:"investing/fund/spy"},{symbol:"VTI",src:"marketwatch",api:"investing/fund/vti"}]},o={VALE:[{type:"stock_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"VALE",file_path:"stock/historical-quotes/VALE.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_ohlv",algorithm:"fbprophet",args:{using_regressors:["Open","High","Low","Volume"],forecast_periods:30},target_data:{name:"VALE",file_path:"stock/historical-quotes/VALE.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_v",algorithm:"fbprophet",args:{using_regressors:["Volume"],forecast_periods:30},target_data:{name:"VALE",file_path:"stock/historical-quotes/VALE.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_empty_TIOc1_HRN00",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"VALE",file_path:"stock/historical-quotes/VALE.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"TIOc1",file_path:"markets/historical-quotes/investing_TIOc1.json",type:"market"},{using_regressors:["Close"],name:"HRN00",file_path:"markets/historical-quotes/marketwatch_HRN00.json",type:"market"}]}],INTC:[{type:"stock_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"INTC",file_path:"stock/historical-quotes/INTC.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_ohlv",algorithm:"fbprophet",args:{using_regressors:["Open","High","Low","Volume"],forecast_periods:30},target_data:{name:"INTC",file_path:"stock/historical-quotes/INTC.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_v",algorithm:"fbprophet",args:{using_regressors:["Volume"],forecast_periods:30},target_data:{name:"INTC",file_path:"stock/historical-quotes/INTC.json",type:"stock"},feature_data:[]}],KGC:[{type:"stock_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"KGC",file_path:"stock/historical-quotes/KGC.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_ohlv",algorithm:"fbprophet",args:{using_regressors:["Open","High","Low","Volume"],forecast_periods:30},target_data:{name:"KGC",file_path:"stock/historical-quotes/KGC.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_v",algorithm:"fbprophet",args:{using_regressors:["Volume"],forecast_periods:30},target_data:{name:"KGC",file_path:"stock/historical-quotes/KGC.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_empty_GC00",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"KGC",file_path:"stock/historical-quotes/KGC.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"GC00",file_path:"markets/historical-quotes/marketwatch_GC00.json",type:"market"}]}],DAC:[{type:"stock_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"DAC",file_path:"stock/historical-quotes/DAC.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_ohlv",algorithm:"fbprophet",args:{using_regressors:["Open","High","Low","Volume"],forecast_periods:30},target_data:{name:"DAC",file_path:"stock/historical-quotes/DAC.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_v",algorithm:"fbprophet",args:{using_regressors:["Volume"],forecast_periods:30},target_data:{name:"DAC",file_path:"stock/historical-quotes/DAC.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_empty_bdi",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"DAC",file_path:"stock/historical-quotes/DAC.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"BDIY_IND",file_path:"markets/historical-quotes/bloomberg_BDIY_IND.json",type:"market"}]},{type:"stock_fbprophet_empty_bdi_fbx",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"DAC",file_path:"stock/historical-quotes/DAC.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"BDIY_IND",file_path:"markets/historical-quotes/bloomberg_BDIY_IND.json",type:"market"},{using_regressors:["Close"],name:"FBX",file_path:"markets/historical-quotes/freightos_FBX.json",type:"market"}]}],GGB:[{type:"stock_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"GGB",file_path:"stock/historical-quotes/GGB.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_ohlv",algorithm:"fbprophet",args:{using_regressors:["Open","High","Low","Volume"],forecast_periods:30},target_data:{name:"GGB",file_path:"stock/historical-quotes/GGB.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_v",algorithm:"fbprophet",args:{using_regressors:["Volume"],forecast_periods:30},target_data:{name:"GGB",file_path:"stock/historical-quotes/GGB.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_empty_TIOc1_HRN00",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"GGB",file_path:"stock/historical-quotes/GGB.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"TIOc1",file_path:"markets/historical-quotes/investing_TIOc1.json",type:"market"},{using_regressors:["Close"],name:"HRN00",file_path:"markets/historical-quotes/marketwatch_HRN00.json",type:"market"}]}],LDI:[{type:"stock_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"LDI",file_path:"stock/historical-quotes/LDI.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_ohlv",algorithm:"fbprophet",args:{using_regressors:["Open","High","Low","Volume"],forecast_periods:30},target_data:{name:"LDI",file_path:"stock/historical-quotes/LDI.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_v",algorithm:"fbprophet",args:{using_regressors:["Volume"],forecast_periods:30},target_data:{name:"LDI",file_path:"stock/historical-quotes/LDI.json",type:"stock"},feature_data:[]}],THO:[{type:"stock_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"THO",file_path:"stock/historical-quotes/THO.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_ohlv",algorithm:"fbprophet",args:{using_regressors:["Open","High","Low","Volume"],forecast_periods:30},target_data:{name:"THO",file_path:"stock/historical-quotes/THO.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_v",algorithm:"fbprophet",args:{using_regressors:["Volume"],forecast_periods:30},target_data:{name:"THO",file_path:"stock/historical-quotes/THO.json",type:"stock"},feature_data:[]}],GOGL:[{type:"stock_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"GOGL",file_path:"stock/historical-quotes/GOGL.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_ohlv",algorithm:"fbprophet",args:{using_regressors:["Open","High","Low","Volume"],forecast_periods:30},target_data:{name:"GOGL",file_path:"stock/historical-quotes/GOGL.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_v",algorithm:"fbprophet",args:{using_regressors:["Volume"],forecast_periods:30},target_data:{name:"GOGL",file_path:"stock/historical-quotes/GOGL.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_empty_bdi",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"GOGL",file_path:"stock/historical-quotes/GOGL.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"BDIY_IND",file_path:"markets/historical-quotes/bloomberg_BDIY_IND.json",type:"market"}]},{type:"stock_fbprophet_empty_bdi_fbx",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"GOGL",file_path:"stock/historical-quotes/GOGL.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"BDIY_IND",file_path:"markets/historical-quotes/bloomberg_BDIY_IND.json",type:"market"},{using_regressors:["Close"],name:"FBX",file_path:"markets/historical-quotes/freightos_FBX.json",type:"market"}]}],CPLP:[{type:"stock_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"CPLP",file_path:"stock/historical-quotes/CPLP.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_ohlv",algorithm:"fbprophet",args:{using_regressors:["Open","High","Low","Volume"],forecast_periods:30},target_data:{name:"CPLP",file_path:"stock/historical-quotes/CPLP.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_v",algorithm:"fbprophet",args:{using_regressors:["Volume"],forecast_periods:30},target_data:{name:"CPLP",file_path:"stock/historical-quotes/CPLP.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_empty_bdi",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"CPLP",file_path:"stock/historical-quotes/CPLP.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"BDIY_IND",file_path:"markets/historical-quotes/bloomberg_BDIY_IND.json",type:"market"}]},{type:"stock_fbprophet_empty_bdi_fbx",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"CPLP",file_path:"stock/historical-quotes/CPLP.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"BDIY_IND",file_path:"markets/historical-quotes/bloomberg_BDIY_IND.json",type:"market"},{using_regressors:["Close"],name:"FBX",file_path:"markets/historical-quotes/freightos_FBX.json",type:"market"}]}],SID:[{type:"stock_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"SID",file_path:"stock/historical-quotes/SID.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_ohlv",algorithm:"fbprophet",args:{using_regressors:["Open","High","Low","Volume"],forecast_periods:30},target_data:{name:"SID",file_path:"stock/historical-quotes/SID.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_v",algorithm:"fbprophet",args:{using_regressors:["Volume"],forecast_periods:30},target_data:{name:"SID",file_path:"stock/historical-quotes/SID.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_empty_TIOc1_HRN00",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"SID",file_path:"stock/historical-quotes/SID.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"TIOc1",file_path:"markets/historical-quotes/investing_TIOc1.json",type:"market"},{using_regressors:["Close"],name:"HRN00",file_path:"markets/historical-quotes/marketwatch_HRN00.json",type:"market"}]}],EDRY:[{type:"stock_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"EDRY",file_path:"stock/historical-quotes/EDRY.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_ohlv",algorithm:"fbprophet",args:{using_regressors:["Open","High","Low","Volume"],forecast_periods:30},target_data:{name:"EDRY",file_path:"stock/historical-quotes/EDRY.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_v",algorithm:"fbprophet",args:{using_regressors:["Volume"],forecast_periods:30},target_data:{name:"EDRY",file_path:"stock/historical-quotes/EDRY.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_empty_bdi",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"EDRY",file_path:"stock/historical-quotes/EDRY.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"BDIY_IND",file_path:"markets/historical-quotes/bloomberg_BDIY_IND.json",type:"market"}]},{type:"stock_fbprophet_empty_bdi_fbx",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"EDRY",file_path:"stock/historical-quotes/EDRY.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"BDIY_IND",file_path:"markets/historical-quotes/bloomberg_BDIY_IND.json",type:"market"},{using_regressors:["Close"],name:"FBX",file_path:"markets/historical-quotes/freightos_FBX.json",type:"market"}]}],ET:[{type:"stock_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"ET",file_path:"stock/historical-quotes/ET.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_ohlv",algorithm:"fbprophet",args:{using_regressors:["Open","High","Low","Volume"],forecast_periods:30},target_data:{name:"ET",file_path:"stock/historical-quotes/ET.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_v",algorithm:"fbprophet",args:{using_regressors:["Volume"],forecast_periods:30},target_data:{name:"ET",file_path:"stock/historical-quotes/ET.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_empty_CL_1_NG00",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"ET",file_path:"stock/historical-quotes/ET.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"CL_1",file_path:"markets/historical-quotes/marketwatch_CL_1.json",type:"market"},{using_regressors:["Close"],name:"NG00",file_path:"markets/historical-quotes/marketwatch_NG00.json",type:"market"}]}],SB:[{type:"stock_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"SB",file_path:"stock/historical-quotes/SB.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_ohlv",algorithm:"fbprophet",args:{using_regressors:["Open","High","Low","Volume"],forecast_periods:30},target_data:{name:"SB",file_path:"stock/historical-quotes/SB.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_v",algorithm:"fbprophet",args:{using_regressors:["Volume"],forecast_periods:30},target_data:{name:"SB",file_path:"stock/historical-quotes/SB.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_empty_bdi",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"SB",file_path:"stock/historical-quotes/SB.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"BDIY_IND",file_path:"markets/historical-quotes/bloomberg_BDIY_IND.json",type:"market"}]},{type:"stock_fbprophet_empty_bdi_fbx",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"SB",file_path:"stock/historical-quotes/SB.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"BDIY_IND",file_path:"markets/historical-quotes/bloomberg_BDIY_IND.json",type:"market"},{using_regressors:["Close"],name:"FBX",file_path:"markets/historical-quotes/freightos_FBX.json",type:"market"}]}],NMM:[{type:"stock_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"NMM",file_path:"stock/historical-quotes/NMM.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_ohlv",algorithm:"fbprophet",args:{using_regressors:["Open","High","Low","Volume"],forecast_periods:30},target_data:{name:"NMM",file_path:"stock/historical-quotes/NMM.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_v",algorithm:"fbprophet",args:{using_regressors:["Volume"],forecast_periods:30},target_data:{name:"NMM",file_path:"stock/historical-quotes/NMM.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_empty_bdi",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"NMM",file_path:"stock/historical-quotes/NMM.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"BDIY_IND",file_path:"markets/historical-quotes/bloomberg_BDIY_IND.json",type:"market"}]},{type:"stock_fbprophet_empty_bdi_fbx",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"NMM",file_path:"stock/historical-quotes/NMM.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"BDIY_IND",file_path:"markets/historical-quotes/bloomberg_BDIY_IND.json",type:"market"},{using_regressors:["Close"],name:"FBX",file_path:"markets/historical-quotes/freightos_FBX.json",type:"market"}]}],TX:[{type:"stock_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"TX",file_path:"stock/historical-quotes/TX.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_ohlv",algorithm:"fbprophet",args:{using_regressors:["Open","High","Low","Volume"],forecast_periods:30},target_data:{name:"TX",file_path:"stock/historical-quotes/TX.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_v",algorithm:"fbprophet",args:{using_regressors:["Volume"],forecast_periods:30},target_data:{name:"TX",file_path:"stock/historical-quotes/TX.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_empty_TIOc1_HRN00",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"TX",file_path:"stock/historical-quotes/TX.json",type:"stock"},feature_data:[{using_regressors:["Close"],name:"TIOc1",file_path:"markets/historical-quotes/investing_TIOc1.json",type:"market"},{using_regressors:["Close"],name:"HRN00",file_path:"markets/historical-quotes/marketwatch_HRN00.json",type:"market"}]}],bloomberg_BDIY_IND:[{type:"market_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"bloomberg_BDIY_IND",file_path:"markets/historical-quotes/bloomberg_BDIY_IND.json",type:"market"},feature_data:[]}],freightos_FBX:[{type:"market_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"freightos_FBX",file_path:"markets/historical-quotes/freightos_FBX.json",type:"market"},feature_data:[]}],investing_TIOc1:[{type:"market_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"investing_TIOc1",file_path:"markets/historical-quotes/investing_TIOc1.json",type:"market"},feature_data:[]}],marketwatch_CL_1:[{type:"market_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"marketwatch_CL_1",file_path:"markets/historical-quotes/marketwatch_CL_1.json",type:"market"},feature_data:[]}],marketwatch_GC00:[{type:"market_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"marketwatch_GC00",file_path:"markets/historical-quotes/marketwatch_GC00.json",type:"market"},feature_data:[]}],marketwatch_HRN00:[{type:"market_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"marketwatch_HRN00",file_path:"markets/historical-quotes/marketwatch_HRN00.json",type:"market"},feature_data:[]}],marketwatch_NG00:[{type:"market_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"marketwatch_NG00",file_path:"markets/historical-quotes/marketwatch_NG00.json",type:"market"},feature_data:[]}],PBFX:[{type:"stock_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"PBFX",file_path:"stock/historical-quotes/PBFX.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_ohlv",algorithm:"fbprophet",args:{using_regressors:["Open","High","Low","Volume"],forecast_periods:30},target_data:{name:"PBFX",file_path:"stock/historical-quotes/PBFX.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_v",algorithm:"fbprophet",args:{using_regressors:["Volume"],forecast_periods:30},target_data:{name:"PBFX",file_path:"stock/historical-quotes/PBFX.json",type:"stock"},feature_data:[]}],BIO:[{type:"stock_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"BIO",file_path:"stock/historical-quotes/BIO.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_ohlv",algorithm:"fbprophet",args:{using_regressors:["Open","High","Low","Volume"],forecast_periods:30},target_data:{name:"BIO",file_path:"stock/historical-quotes/BIO.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_v",algorithm:"fbprophet",args:{using_regressors:["Volume"],forecast_periods:30},target_data:{name:"BIO",file_path:"stock/historical-quotes/BIO.json",type:"stock"},feature_data:[]}],T:[{type:"stock_fbprophet_empty",algorithm:"fbprophet",args:{using_regressors:[],forecast_periods:30},target_data:{name:"T",file_path:"stock/historical-quotes/T.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_ohlv",algorithm:"fbprophet",args:{using_regressors:["Open","High","Low","Volume"],forecast_periods:30},target_data:{name:"T",file_path:"stock/historical-quotes/T.json",type:"stock"},feature_data:[]},{type:"stock_fbprophet_v",algorithm:"fbprophet",args:{using_regressors:["Volume"],forecast_periods:30},target_data:{name:"T",file_path:"stock/historical-quotes/T.json",type:"stock"},feature_data:[]}]};e.exports={getMonitorConfig:function(){return r},getMarketConfig:function(){return a},getForecastConfig:function(){return o}}}}]);
//# sourceMappingURL=component---src-pages-monitor-js-d5d3cdf61b04c313664a.js.map