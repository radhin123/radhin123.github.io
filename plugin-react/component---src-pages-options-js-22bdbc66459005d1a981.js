(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"0JEz":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("w8ma"),i=n("DYZr"),l=n("Nb3f"),c=n.n(l),s=n("UG0H"),u=n("sD0r"),d=n("wx14"),f=n("dxcw"),b=n("CZYX"),m=n("YSst"),p=n("nKUr");var v=function(e){var t=e.children,n=e.theme,a=Object(b.a)(),o=r.useMemo((function(){var e=null===a?n:function(e,t){return"function"==typeof t?t(e):Object(d.a)({},e,t)}(a,n);return null!=e&&(e[m.a]=null!==a),e}),[n,a]);return Object(p.jsx)(f.a.Provider,{value:o,children:t})},h=n("5I82"),g=n("NZDO"),y=n("z6Y5"),M=n("je4i"),O=n.n(M),j=n("tFdz"),E=n("wd/R"),x=n.n(E),w=n("qnxO"),A=n("h4VS"),V=n("zLVn"),C=n("iuhU"),P=n("6RIW"),S=n("AeFk"),k=n("2Qr1"),W=n("xeev"),_=n("UnQg"),B=n("Vn7y"),D=n("tCRK"),H=n("ZGJG"),N=n("TeiJ");function T(e){return Object(H.a)("MuiLinearProgress",e)}Object(N.a)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var I,R,L,q,U,X,z,G,F,Y,J,Z,Q=["className","color","value","valueBuffer","variant"],K=Object(S.keyframes)(z||(z=I||(I=Object(A.a)(["\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n"])))),$=Object(S.keyframes)(G||(G=R||(R=Object(A.a)(["\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n"])))),ee=Object(S.keyframes)(F||(F=L||(L=Object(A.a)(["\n  0% {\n    opacity: 1;\n    background-position: 0 -23px;\n  }\n\n  60% {\n    opacity: 0;\n    background-position: 0 -23px;\n  }\n\n  100% {\n    opacity: 1;\n    background-position: -200px -23px;\n  }\n"])))),te=function(e,t){return"inherit"===t?"currentColor":"light"===e.palette.mode?Object(k.d)(e.palette[t].main,.62):Object(k.b)(e.palette[t].main,.5)},ne=Object(B.a)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["color".concat(Object(W.a)(n.color))],t[n.variant]]}})((function(e){var t=e.ownerState,n=e.theme;return Object(d.a)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:te(n,t.color)},"inherit"===t.color&&"buffer"!==t.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===t.variant&&{backgroundColor:"transparent"},"query"===t.variant&&{transform:"rotate(180deg)"})})),re=Object(B.a)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:function(e,t){var n=e.ownerState;return[t.dashed,t["dashedColor".concat(Object(W.a)(n.color))]]}})((function(e){var t=e.ownerState,n=e.theme,r=te(n,t.color);return Object(d.a)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===t.color&&{opacity:.3},{backgroundImage:"radial-gradient(".concat(r," 0%, ").concat(r," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),Object(S.css)(Y||(Y=q||(q=Object(A.a)(["\n    animation: "," 3s infinite linear;\n  "]))),ee)),ae=Object(B.a)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:function(e,t){var n=e.ownerState;return[t.bar,t["barColor".concat(Object(W.a)(n.color))],("indeterminate"===n.variant||"query"===n.variant)&&t.bar1Indeterminate,"determinate"===n.variant&&t.bar1Determinate,"buffer"===n.variant&&t.bar1Buffer]}})((function(e){var t=e.ownerState,n=e.theme;return Object(d.a)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===t.color?"currentColor":n.palette[t.color].main},"determinate"===t.variant&&{transition:"transform .".concat(4,"s linear")},"buffer"===t.variant&&{zIndex:1,transition:"transform .".concat(4,"s linear")})}),(function(e){var t=e.ownerState;return("indeterminate"===t.variant||"query"===t.variant)&&Object(S.css)(J||(J=U||(U=Object(A.a)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    "]))),K)})),oe=Object(B.a)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:function(e,t){var n=e.ownerState;return[t.bar,t["barColor".concat(Object(W.a)(n.color))],("indeterminate"===n.variant||"query"===n.variant)&&t.bar2Indeterminate,"buffer"===n.variant&&t.bar2Buffer]}})((function(e){var t=e.ownerState,n=e.theme;return Object(d.a)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==t.variant&&{backgroundColor:"inherit"===t.color?"currentColor":n.palette[t.color].main},"inherit"===t.color&&{opacity:.3},"buffer"===t.variant&&{backgroundColor:te(n,t.color),transition:"transform .".concat(4,"s linear")})}),(function(e){var t=e.ownerState;return("indeterminate"===t.variant||"query"===t.variant)&&Object(S.css)(Z||(Z=X||(X=Object(A.a)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;\n    "]))),$)})),ie=r.forwardRef((function(e,t){var n=Object(D.a)({props:e,name:"MuiLinearProgress"}),r=n.className,a=n.color,o=void 0===a?"primary":a,i=n.value,l=n.valueBuffer,c=n.variant,s=void 0===c?"indeterminate":c,u=Object(V.a)(n,Q),f=Object(d.a)({},n,{color:o,variant:s}),b=function(e){var t=e.classes,n=e.variant,r=e.color,a={root:["root","color".concat(Object(W.a)(r)),n],dashed:["dashed","dashedColor".concat(Object(W.a)(r))],bar1:["bar","barColor".concat(Object(W.a)(r)),("indeterminate"===n||"query"===n)&&"bar1Indeterminate","determinate"===n&&"bar1Determinate","buffer"===n&&"bar1Buffer"],bar2:["bar","buffer"!==n&&"barColor".concat(Object(W.a)(r)),"buffer"===n&&"color".concat(Object(W.a)(r)),("indeterminate"===n||"query"===n)&&"bar2Indeterminate","buffer"===n&&"bar2Buffer"]};return Object(P.a)(a,T,t)}(f),m=Object(_.a)(),v={},h={bar1:{},bar2:{}};if("determinate"===s||"buffer"===s)if(void 0!==i){v["aria-valuenow"]=Math.round(i),v["aria-valuemin"]=0,v["aria-valuemax"]=100;var g=i-100;"rtl"===m.direction&&(g=-g),h.bar1.transform="translateX(".concat(g,"%)")}else 0;if("buffer"===s)if(void 0!==l){var y=(l||0)-100;"rtl"===m.direction&&(y=-y),h.bar2.transform="translateX(".concat(y,"%)")}else 0;return Object(p.jsxs)(ne,Object(d.a)({className:Object(C.a)(b.root,r),ownerState:f,role:"progressbar"},v,{ref:t},u,{children:["buffer"===s?Object(p.jsx)(re,{className:b.dashed,ownerState:f}):null,Object(p.jsx)(ae,{className:b.bar1,ownerState:f,style:h.bar1}),"determinate"===s?null:Object(p.jsx)(oe,{className:b.bar2,ownerState:f,style:h.bar2})]}))})),le=n("Gqia");var ce=function(e){var t=e.progress;return a.a.createElement(g.a,{sx:{display:"flex",alignItems:"center"}},a.a.createElement(g.a,{sx:{width:"100%",mr:1}},a.a.createElement(ie,{variant:"determinate",value:t.val,style:{height:10}})),a.a.createElement(g.a,{sx:{minWidth:100}},a.a.createElement(le.a,{noWrap:!0,variant:"body1",style:{textOverflow:"clip",overflow:"visible"}},t.text)))},se=n("oqdv"),ue=n("Nihg"),de=n("jJ2d"),fe=n("y4pv"),be=n.n(fe),me=n("ea0G"),pe=n.n(me),ve=function(e){var t=e.OptionsRef,n=e.ControlPannelRef,o=e.SyncDataRef,i=Object(r.useState)(null),l=i[0],c=i[1],s=Object(r.useRef)({symbols:[],now:0,data:[]}),u=function(e){if(e.length>0&&(s.current.symbols=e),0!=s.current.symbols.length){var t=s.current.symbols[s.current.now],r="/ws/option/quote-valuation?symbol="+t;c(new WebSocket(se.e+r));var a=100*s.current.now/s.current.symbols.length,o=Math.round(a)+"% - Querying "+t+" ("+(s.current.now+1)+"/"+s.current.symbols.length+")";n.current.updateProgress(a,o)}else console.error("No symbols data")};return o.current={syncData:u},Object(ue.k)((function(){l&&l.readyState===WebSocket.OPEN?(l.send(""),console.log("heartbeat")):s.current.now<s.current.symbols.length&&(console.warn("unexpected disconnected, do syncData again"),u([]))}),l?3e3:null),Object(r.useEffect)((function(){return l&&(l.onopen=function(){console.log("WebSocket Connected")},l.onmessage=function(e){var r=JSON.parse(e.data);if(console.log(r),s.current.data.push(r),s.current.now+=1,0!==s.current.symbols.length)if(s.current.now>=s.current.symbols.length)t.current.renderTable(s.current.data),s.current.now=0,s.current.data=[],c(null),n.current.updateProgress(100,"100%");else{var a=s.current.symbols[s.current.now],o="/ws/option/quote-valuation?symbol="+a;c(new WebSocket(se.e+o));var i=100*s.current.now/s.current.symbols.length,l=Math.round(i)+"% - Querying "+a+" ("+(s.current.now+1)+"/"+s.current.symbols.length+")";n.current.updateProgress(i,l)}}),function(){}}),[l]),a.a.createElement(a.a.Fragment,null)},he=function(e){var t=e.SyncDataRef,n=e.modalWindowRef,o=e.ControlPannelRef,i=Object(r.useState)({val:0,text:"0%"}),l=i[0],d=i[1],f=Object(j.a)({cachePolicy:"no-cache"});return o.current={updateProgress:function(e,t){d({val:e,text:t})}},a.a.createElement("div",{className:pe.a.queryPannel},a.a.createElement(y.a,{container:!0,spacing:2,alignItems:"center"},a.a.createElement(y.a,{item:!0,md:10,xs:7},a.a.createElement(ce,{progress:l})),a.a.createElement(y.a,{item:!0,md:2,xs:5},a.a.createElement(g.a,{display:"flex",justifyContent:"flex-end"},a.a.createElement(v,{theme:Object(u.a)({palette:{primary:s.a}})},a.a.createElement(h.a,{className:pe.a.queryBtn,variant:"contained",color:"primary",startIcon:a.a.createElement(c.a,null),onClick:function(){Promise.all([Object(ue.c)("/trade-data.json",f)]).then((function(e){if(console.log(e),1===e.length&&null!==e[0]){var r=e[0];t.current.syncData(r.hold_stock_list.concat(r.star_option_list))}else console.error("renderDefaultOptionsData some data failed"),n.current.popModalWindow(a.a.createElement("div",null,"Get some data failed..."))})).catch((function(){console.error("renderDefaultOptionsData failed"),n.current.popModalWindow(a.a.createElement("div",null,"Get data failed..."))}))}},"Query Now"))))))},ge=function(){var e=Object(r.useRef)({popModalWindow:null,popPureModal:null}),t=Object(r.useRef)({syncData:null}),n=Object(r.useRef)({updateProgress:null}),o={hide:!1,text:"Price (Stock)"},l={hide:!1,text:"Expiry"},c={hide:!1,text:"Strike"},s={hide:!1,text:"Last Price"},u={hide:!1,text:"Valuation (Avg)"},d={hide:!1,text:"Bias (Price)"},f={hide:!1,text:"Last Trade Date"},b={hide:!1,text:"Bid"},m={hide:!1,text:"Ask"},p={hide:!0,text:"Change"},v={hide:!1,text:"Change (%)"},h={hide:!1,text:"Volume"},g={hide:!1,text:"Open Interest"},y={hide:!1,text:"Implied Volatility"},M={hide:!1,text:"EWMA Historical Volatility"},E={hide:!1,text:"Black Scholes Merton"},A={hide:!1,text:"Monte Carlo"},V={hide:!1,text:"Binomial Tree"},C=function(){return[Object(ue.i)("symbol","Symbol",130,"symbol"in I&&I.symbol),Object(ue.g)("stockPrice",o.text,130,2,"stockPrice"in I?I.stockPrice:o.hide),{field:"expiryDate",headerName:l.text,width:125,type:"date",renderCell:function(e){return a.a.createElement("span",null,x()(e.row.expiryDate).format("YYYY-MM-DD"))},hide:"expiryDate"in I?I.expiryDate:l.hide},Object(ue.g)("strike",c.text,120,2,"strike"in I?I.strike:c.hide),Object(ue.g)("lastPrice",s.text,140,2,"lastPrice"in I?I.lastPrice:s.hide),Object(ue.g)("avgEWMA",u.text,150,2,"avgEWMA"in I?I.avgEWMA:u.hide),Object(ue.g)("priceBias",d.text,120,2,"priceBias"in I?I.priceBias:d.hide),{field:"lastTradeDate",headerName:f.text,width:145,type:"date",renderCell:function(e){return a.a.createElement("span",null,x()(e.row.lastTradeDate).format("YYYY-MM-DD"))},hide:"lastTradeDate"in I?I.lastTradeDate:f.hide},Object(ue.g)("bid",b.text,105,2,"bid"in I?I.bid:b.hide),Object(ue.g)("ask",m.text,105,2,"ask"in I?I.ask:m.hide),Object(ue.b)("change",p.text,130,"change"in I?I.change:p.hide,500),Object(ue.a)("percentChange",v.text,140,2,"percentChange"in I?I.percentChange:v.hide,500),Object(ue.g)("volume",h.text,140,0,"volume"in I?I.volume:h.hide),Object(ue.g)("openInterest",g.text,140,0,"openInterest"in I?I.openInterest:g.hide),Object(ue.f)("impliedVolatility",y.text,140,"impliedVolatility"in I?I.impliedVolatility:y.hide),Object(ue.f)("EWMAHisVol",M.text,140,"EWMAHisVol"in I?I.EWMAHisVol:M.hide),Object(ue.g)("BSM_EWMAHisVol",E.text,140,2,"BSM_EWMAHisVol"in I?I.BSM_EWMAHisVol:E.hide),Object(ue.g)("MC_EWMAHisVol",A.text,140,2,"MC_EWMAHisVol"in I?I.MC_EWMAHisVol:A.hide),Object(ue.g)("BT_EWMAHisVol",V.text,140,2,"BT_EWMAHisVol"in I?I.BT_EWMAHisVol:V.hide)]},P=Object(j.a)({cachePolicy:"no-cache"}),S=function(e){var t=[],n=[];e.forEach((function(e){var r=e.symbol,a=e.stockPrice,o=e.EWMA_historicalVolatility;e.contracts.forEach((function(e){var i=e.expiryDate,l=function(e){return e.map((function(e,t){var n=e.valuationData,l={id:t,symbol:r,stockPrice:a,EWMAHisVol:o,expiryDate:i,lastTradeDate:void 0!==e.lastTradeDate&&null!==e.lastTradeDate&&"-"!==e.lastTradeDate?e.lastTradeDate:0,strike:void 0!==e.strike&&null!==e.strike&&"-"!==e.strike?e.strike:-Number.MAX_VALUE,lastPrice:void 0!==e.lastPrice&&null!==e.lastPrice&&"-"!==e.lastPrice?e.lastPrice:-Number.MAX_VALUE,bid:void 0!==e.bid&&null!==e.bid&&"-"!==e.bid?e.bid:-Number.MAX_VALUE,ask:void 0!==e.ask&&null!==e.ask&&"-"!==e.ask?e.ask:-Number.MAX_VALUE,change:void 0!==e.change&&null!==e.change&&"-"!==e.change?e.change:-Number.MAX_VALUE,percentChange:void 0!==e.percentChange&&null!==e.percentChange&&"-"!==e.percentChange?e.percentChange/100:-Number.MAX_VALUE,volume:void 0!==e.volume&&null!==e.volume&&"-"!==e.volume?e.volume:-Number.MAX_VALUE,openInterest:void 0!==e.openInterest&&null!==e.openInterest&&"-"!==e.openInterest?e.openInterest:-Number.MAX_VALUE,impliedVolatility:void 0!==e.impliedVolatility&&null!==e.impliedVolatility&&"-"!==e.impliedVolatility?e.impliedVolatility:-Number.MAX_VALUE,BSM_EWMAHisVol:void 0!==n.BSM_EWMAHisVol&&null!==n.BSM_EWMAHisVol&&n.BSM_EWMAHisVol>0?n.BSM_EWMAHisVol:-Number.MAX_VALUE,MC_EWMAHisVol:void 0!==n.MC_EWMAHisVol&&null!==n.MC_EWMAHisVol&&n.MC_EWMAHisVol>0?n.MC_EWMAHisVol:-Number.MAX_VALUE,BT_EWMAHisVol:void 0!==n.BT_EWMAHisVol&&null!==n.BT_EWMAHisVol&&n.BT_EWMAHisVol>0?n.BT_EWMAHisVol:-Number.MAX_VALUE},c=0,s=0;return l.BSM_EWMAHisVol>0&&(c+=1,s+=l.BSM_EWMAHisVol),l.MC_EWMAHisVol>0&&(c+=1,s+=l.MC_EWMAHisVol),l.BT_EWMAHisVol>0&&(c+=1,s+=l.BT_EWMAHisVol),l.avgEWMA=s/c,l.priceBias=Math.abs(l.lastPrice-l.avgEWMA)/l.lastPrice,l}))};t=t.concat(l(e.calls)),n=n.concat(l(e.puts))}))})),t.forEach((function(e,n){t[n].id=n})),n.forEach((function(e,t){n[t].id=t})),console.log(t),B(t),console.log(n),N(n)},k=Object(r.useRef)({renderTable:S}),W=Object(r.useState)([]),_=W[0],B=W[1],D=Object(r.useState)([]),H=D[0],N=D[1],T=Object(r.useState)({}),I=T[0],R=T[1];return Object(r.useEffect)((function(){return Promise.all([Object(ue.c)("/plugin-react/option-valuation/output.json",P)]).then((function(t){console.log(t),1===t.length&&null!==t[0]?S(t[0]):(console.error("renderDefaultOptionsData some data failed"),e.current.popModalWindow(a.a.createElement("div",null,"Get some data failed...")))})).catch((function(){console.error("renderDefaultOptionsData failed"),e.current.popModalWindow(a.a.createElement("div",null,"Get data failed..."))})),function(){}}),[]),a.a.createElement("div",{className:be.a.defaultFont+" "+pe.a.container},a.a.createElement(he,{SyncDataRef:t,modalWindowRef:e,ControlPannelRef:n}),a.a.createElement("div",{key:O.a.generate()},a.a.createElement("div",{className:pe.a.table},a.a.createElement(i.a,{rows:_,columns:C(),rowsPerPageOptions:[],autoPageSize:!0,components:{NoRowsOverlay:w.a},disableSelectionOnClick:!0,onColumnVisibilityChange:function(e){var t=I;t[e.field]=!e.isVisible,R(t)},initialState:{filter:{filterModel:{items:[{columnField:"lastPrice",operatorValue:">",value:.1}]}},sorting:{sortModel:[{field:"priceBias",sort:"desc"}]}}})),a.a.createElement("div",{className:pe.a.table},a.a.createElement(i.a,{rows:H,columns:C(),rowsPerPageOptions:[],autoPageSize:!0,components:{NoRowsOverlay:w.a},disableSelectionOnClick:!0,onColumnVisibilityChange:function(e){var t=I;t[e.field]=!e.isVisible,R(t)},initialState:{filter:{filterModel:{items:[{columnField:"lastPrice",operatorValue:">",value:.1}]}},sorting:{sortModel:[{field:"priceBias",sort:"desc"}]}}}))),a.a.createElement(de.a,{modalWindowRef:e}),a.a.createElement(ve,{OptionsRef:k,ControlPannelRef:n,SyncDataRef:t}))};t.default=function(){return a.a.createElement(o.a,{injectFirst:!0},a.a.createElement(ge,null))}},Gcu1:function(e,t,n){"use strict";t.a=function(e,t,n,r,a){return null}},Nb3f:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("jelL")),o=n("nKUr"),i=(0,a.default)((0,o.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.default=i},Udd0:function(e,t,n){"use strict";n.r(t),n.d(t,"capitalize",(function(){return r.a})),n.d(t,"createChainedFunction",(function(){return a})),n.d(t,"createSvgIcon",(function(){return o.a})),n.d(t,"debounce",(function(){return i.a})),n.d(t,"deprecatedPropType",(function(){return l})),n.d(t,"isMuiElement",(function(){return c.a})),n.d(t,"ownerDocument",(function(){return s.a})),n.d(t,"ownerWindow",(function(){return u.a})),n.d(t,"requirePropFactory",(function(){return d.a})),n.d(t,"setRef",(function(){return f})),n.d(t,"unstable_useEnhancedEffect",(function(){return b.a})),n.d(t,"unstable_useId",(function(){return m.a})),n.d(t,"unsupportedProp",(function(){return p.a})),n.d(t,"useControlled",(function(){return v.a})),n.d(t,"useEventCallback",(function(){return h.a})),n.d(t,"useForkRef",(function(){return g.a})),n.d(t,"useIsFocusVisible",(function(){return y.a})),n.d(t,"unstable_ClassNameGenerator",(function(){return M.a}));var r=n("xeev"),a=n("GRZg").a,o=n("M7pN"),i=n("7yHM");var l=function(e,t){return function(){return null}},c=n("M3M6"),s=n("rdfb"),u=n("WFZb"),d=n("hxbm"),f=n("wB8u").a,b=n("6q60"),m=n("DSU1"),p=n("Gcu1"),v=n("1vOf"),h=n("KXty"),g=n("ZfBw"),y=n("8rms"),M=n("VA7I")},ea0G:function(e,t,n){e.exports={container:"options-module--container--2TUIk",optionsTableSelect:"options-module--optionsTableSelect--4rIAu",queryPannel:"options-module--queryPannel--3N9g-",parameterTitle:"options-module--parameterTitle--yYHMI",parameterBlock:"options-module--parameterBlock--PqKd0",valueText:"options-module--valueText--2UFQB",queryBtn:"options-module--queryBtn--Ue1au",table:"options-module--table--2Tr-f"}},hxbm:function(e,t,n){"use strict";n("wx14");t.a=function(e,t){return function(){return null}}},jelL:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n("Udd0")}}]);
//# sourceMappingURL=component---src-pages-options-js-22bdbc66459005d1a981.js.map