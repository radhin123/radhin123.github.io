(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"0JEz":function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),i=a("w8ma"),o=a("DYZr"),l=a("Nb3f"),c=a.n(l),s=a("UG0H"),u=a("sD0r"),d=a("wx14"),b=a("dxcw"),m=a("CZYX"),f=a("YSst"),p=a("nKUr");var h=function(e){var t=e.children,a=e.theme,n=Object(m.a)(),i=r.useMemo((function(){var e=null===n?a:function(e,t){return"function"==typeof t?t(e):Object(d.a)({},e,t)}(n,a);return null!=e&&(e[f.a]=null!==n),e}),[a,n]);return Object(p.jsx)(b.a.Provider,{value:i,children:t})},v=a("5I82"),g=a("NZDO"),M=a("z6Y5"),E=a("je4i"),y=a.n(E),O=a("tFdz"),A=a("wd/R"),j=a.n(A),x=a("qnxO"),V=a("h4VS"),k=a("zLVn"),w=a("iuhU"),P=a("6RIW"),S=a("AeFk"),_=a("2Qr1"),C=a("xeev"),W=a("UnQg"),N=a("Vn7y"),B=a("tCRK"),D=a("ZGJG"),L=a("TeiJ");function R(e){return Object(D.a)("MuiLinearProgress",e)}Object(L.a)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var U,H,T,I,X,q,G,z,F,Y,J,Q,Z=["className","color","value","valueBuffer","variant"],K=Object(S.keyframes)(G||(G=U||(U=Object(V.a)(["\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n"])))),$=Object(S.keyframes)(z||(z=H||(H=Object(V.a)(["\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n"])))),ee=Object(S.keyframes)(F||(F=T||(T=Object(V.a)(["\n  0% {\n    opacity: 1;\n    background-position: 0 -23px;\n  }\n\n  60% {\n    opacity: 0;\n    background-position: 0 -23px;\n  }\n\n  100% {\n    opacity: 1;\n    background-position: -200px -23px;\n  }\n"])))),te=function(e,t){return"inherit"===t?"currentColor":"light"===e.palette.mode?Object(_.d)(e.palette[t].main,.62):Object(_.b)(e.palette[t].main,.5)},ae=Object(N.a)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t["color".concat(Object(C.a)(a.color))],t[a.variant]]}})((function(e){var t=e.ownerState,a=e.theme;return Object(d.a)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:te(a,t.color)},"inherit"===t.color&&"buffer"!==t.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===t.variant&&{backgroundColor:"transparent"},"query"===t.variant&&{transform:"rotate(180deg)"})})),re=Object(N.a)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:function(e,t){var a=e.ownerState;return[t.dashed,t["dashedColor".concat(Object(C.a)(a.color))]]}})((function(e){var t=e.ownerState,a=e.theme,r=te(a,t.color);return Object(d.a)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===t.color&&{opacity:.3},{backgroundImage:"radial-gradient(".concat(r," 0%, ").concat(r," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),Object(S.css)(Y||(Y=I||(I=Object(V.a)(["\n    animation: "," 3s infinite linear;\n  "]))),ee)),ne=Object(N.a)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:function(e,t){var a=e.ownerState;return[t.bar,t["barColor".concat(Object(C.a)(a.color))],("indeterminate"===a.variant||"query"===a.variant)&&t.bar1Indeterminate,"determinate"===a.variant&&t.bar1Determinate,"buffer"===a.variant&&t.bar1Buffer]}})((function(e){var t=e.ownerState,a=e.theme;return Object(d.a)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===t.color?"currentColor":a.palette[t.color].main},"determinate"===t.variant&&{transition:"transform .".concat(4,"s linear")},"buffer"===t.variant&&{zIndex:1,transition:"transform .".concat(4,"s linear")})}),(function(e){var t=e.ownerState;return("indeterminate"===t.variant||"query"===t.variant)&&Object(S.css)(J||(J=X||(X=Object(V.a)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    "]))),K)})),ie=Object(N.a)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:function(e,t){var a=e.ownerState;return[t.bar,t["barColor".concat(Object(C.a)(a.color))],("indeterminate"===a.variant||"query"===a.variant)&&t.bar2Indeterminate,"buffer"===a.variant&&t.bar2Buffer]}})((function(e){var t=e.ownerState,a=e.theme;return Object(d.a)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==t.variant&&{backgroundColor:"inherit"===t.color?"currentColor":a.palette[t.color].main},"inherit"===t.color&&{opacity:.3},"buffer"===t.variant&&{backgroundColor:te(a,t.color),transition:"transform .".concat(4,"s linear")})}),(function(e){var t=e.ownerState;return("indeterminate"===t.variant||"query"===t.variant)&&Object(S.css)(Q||(Q=q||(q=Object(V.a)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;\n    "]))),$)})),oe=r.forwardRef((function(e,t){var a=Object(B.a)({props:e,name:"MuiLinearProgress"}),r=a.className,n=a.color,i=void 0===n?"primary":n,o=a.value,l=a.valueBuffer,c=a.variant,s=void 0===c?"indeterminate":c,u=Object(k.a)(a,Z),b=Object(d.a)({},a,{color:i,variant:s}),m=function(e){var t=e.classes,a=e.variant,r=e.color,n={root:["root","color".concat(Object(C.a)(r)),a],dashed:["dashed","dashedColor".concat(Object(C.a)(r))],bar1:["bar","barColor".concat(Object(C.a)(r)),("indeterminate"===a||"query"===a)&&"bar1Indeterminate","determinate"===a&&"bar1Determinate","buffer"===a&&"bar1Buffer"],bar2:["bar","buffer"!==a&&"barColor".concat(Object(C.a)(r)),"buffer"===a&&"color".concat(Object(C.a)(r)),("indeterminate"===a||"query"===a)&&"bar2Indeterminate","buffer"===a&&"bar2Buffer"]};return Object(P.a)(n,R,t)}(b),f=Object(W.a)(),h={},v={bar1:{},bar2:{}};if("determinate"===s||"buffer"===s)if(void 0!==o){h["aria-valuenow"]=Math.round(o),h["aria-valuemin"]=0,h["aria-valuemax"]=100;var g=o-100;"rtl"===f.direction&&(g=-g),v.bar1.transform="translateX(".concat(g,"%)")}else 0;if("buffer"===s)if(void 0!==l){var M=(l||0)-100;"rtl"===f.direction&&(M=-M),v.bar2.transform="translateX(".concat(M,"%)")}else 0;return Object(p.jsxs)(ae,Object(d.a)({className:Object(w.a)(m.root,r),ownerState:b,role:"progressbar"},h,{ref:t},u,{children:["buffer"===s?Object(p.jsx)(re,{className:m.dashed,ownerState:b}):null,Object(p.jsx)(ne,{className:m.bar1,ownerState:b,style:v.bar1}),"determinate"===s?null:Object(p.jsx)(ie,{className:m.bar2,ownerState:b,style:v.bar2})]}))})),le=a("Gqia");var ce=function(e){var t=e.progress;return n.a.createElement(g.a,{sx:{display:"flex",alignItems:"center"}},n.a.createElement(g.a,{sx:{width:"100%",mr:1}},n.a.createElement(oe,{variant:"determinate",value:t.val,style:{height:10}})),n.a.createElement(g.a,{sx:{minWidth:100}},n.a.createElement(le.a,{noWrap:!0,variant:"body1",style:{textOverflow:"clip",overflow:"visible"}},t.text)))},se=a("oqdv"),ue=a("kLkQ"),de=a("Nihg"),be=a("jJ2d"),me=a("y4pv"),fe=a.n(me),pe=a("ea0G"),he=a.n(pe),ve=function(e){var t=e.OptionsRef,a=e.ControlPannelRef,i=e.SyncDataRef,o=Object(r.useState)(null),l=o[0],c=o[1],s=Object(r.useRef)({symbols:[],now:0,data:[]}),u=function(e){if(e.length>0&&(s.current.symbols=e),0!=s.current.symbols.length){var t=s.current.symbols[s.current.now],r="/ws/option/quote-valuation?symbol="+t;c(new WebSocket(se.e+r));var n=100*s.current.now/s.current.symbols.length,i=Math.round(n)+"% - Querying "+t+" ("+(s.current.now+1)+"/"+s.current.symbols.length+")";a.current.updateProgress(n,i)}else console.error("No symbols data")};return i.current={syncData:u},Object(de.k)((function(){l&&l.readyState===WebSocket.OPEN?(l.send(""),console.log("heartbeat")):s.current.now<s.current.symbols.length&&(console.warn("unexpected disconnected, do syncData again"),u([]))}),l?3e3:null),Object(r.useEffect)((function(){return l&&(l.onopen=function(){console.log("WebSocket Connected")},l.onmessage=function(e){var r=JSON.parse(e.data);if(console.log(r),s.current.data.push(r),s.current.now+=1,0!==s.current.symbols.length)if(s.current.now>=s.current.symbols.length)t.current.renderTable(s.current.data),s.current.now=0,s.current.data=[],c(null),a.current.updateProgress(100,"100%");else{var n=s.current.symbols[s.current.now],i="/ws/option/quote-valuation?symbol="+n;c(new WebSocket(se.e+i));var o=100*s.current.now/s.current.symbols.length,l=Math.round(o)+"% - Querying "+n+" ("+(s.current.now+1)+"/"+s.current.symbols.length+")";a.current.updateProgress(o,l)}}),function(){}}),[l]),n.a.createElement(n.a.Fragment,null)},ge=function(e){var t=e.SyncDataRef,a=e.modalWindowRef,i=e.ControlPannelRef,o=Object(r.useState)({val:0,text:"0%"}),l=o[0],d=o[1],b=Object(O.a)({cachePolicy:"no-cache"});return i.current={updateProgress:function(e,t){d({val:e,text:t})}},n.a.createElement("div",{className:he.a.queryPannel},n.a.createElement(M.a,{container:!0,spacing:2,alignItems:"center"},n.a.createElement(M.a,{item:!0,md:10,xs:7},n.a.createElement(ce,{progress:l})),n.a.createElement(M.a,{item:!0,md:2,xs:5},n.a.createElement(g.a,{display:"flex",justifyContent:"flex-end"},n.a.createElement(h,{theme:Object(u.a)({palette:{primary:s.a}})},n.a.createElement(v.a,{className:he.a.queryBtn,variant:"contained",color:"primary",startIcon:n.a.createElement(c.a,null),onClick:function(){Promise.all([Object(de.c)("/trade-data.json",b)]).then((function(e){if(console.log(e),1===e.length&&null!==e[0]){var r=e[0];t.current.syncData(r.hold_stock_list.concat(r.star_option_list))}else console.error("renderDefaultOptionsData some data failed"),a.current.popModalWindow(n.a.createElement("div",null,"Get some data failed..."))})).catch((function(){console.error("renderDefaultOptionsData failed"),a.current.popModalWindow(n.a.createElement("div",null,"Get data failed..."))}))}},"Query Now"))))))},Me=function(){var e=Object(r.useRef)({popModalWindow:null,popPureModal:null}),t=Object(r.useRef)({syncData:null}),a=Object(r.useRef)({updateProgress:null}),i={hide:!1,text:"Price (Stock)"},l={hide:!1,text:"Expiry"},c={hide:!1,text:"Strike"},s={hide:!1,text:"Last Price"},u={hide:!1,text:"Valuation (Avg)"},d={hide:!1,text:"Bias (Price)",description:"| Last Price - Valuation (Avg) | / Last Price"},b={hide:!1,text:"P/S (%)",description:"Last Price / Strike"},m={hide:!1,text:"Dist (%)",description:"| Price (Stock) - Strike | / Strike"},f={hide:!1,text:"δ (Delta)"},p={hide:!1,text:"γ (Gamma)"},h={hide:!1,text:"ρ (Rho)"},v={hide:!1,text:"θ (Theta)"},g={hide:!1,text:"ν (Vega)"},M={hide:!1,text:"Last Trade Date"},E={hide:!1,text:"Bid"},A={hide:!1,text:"Ask"},V={hide:!0,text:"Change"},k={hide:!1,text:"Change (%)"},w={hide:!1,text:"Volume"},P={hide:!1,text:"Open Interest"},S={hide:!1,text:"Implied Volatility"},_={hide:!1,text:"EWMA Historical Volatility"},C={hide:!1,text:"Black Scholes Merton"},W={hide:!1,text:"Monte Carlo"},N={hide:!1,text:"Binomial Tree"},B=function(){return[Object(de.i)("symbol","Symbol",130,"symbol"in z&&z.symbol),Object(de.g)("stockPrice",i.text,130,2,"stockPrice"in z?z.stockPrice:i.hide),{field:"expiryDate",headerName:l.text,width:125,type:"date",renderCell:function(e){return n.a.createElement("span",null,j()(e.row.expiryDate).format("YYYY-MM-DD"))},hide:"expiryDate"in z?z.expiryDate:l.hide},Object(de.g)("strike",c.text,120,2,"strike"in z?z.strike:c.hide),Object(de.g)("lastPrice",s.text,140,2,"lastPrice"in z?z.lastPrice:s.hide),Object(de.g)("avgEWMA",u.text,150,2,"avgEWMA"in z?z.avgEWMA:u.hide),Object(de.g)("avgEWMA",u.text,150,2,"avgEWMA"in z?z.avgEWMA:u.hide),{field:"priceBias",headerName:d.text,width:120,type:"number",description:d.description,renderCell:function(e){return"-"===e.value||e.value===-Number.MAX_VALUE||e.value===Number.MAX_VALUE||null===e.value||void 0===e.value||"Infinity"===e.value||"NaN"===e.value?n.a.createElement("span",null,"-"):n.a.createElement("span",{style:{fontWeight:500,color:e.row.lastPrice>e.row.avgEWMA?Object(ue.d)(e.value):e.row.lastPrice<e.row.avgEWMA?Object(ue.c)(e.value):""}},e.value.toFixed(2))},hide:"priceBias"in z?z.priceBias:d.hide},Object(de.f)("priceStrikeRatio",b.text,90,"priceStrikeRatio"in z?z.priceStrikeRatio:b.hide,b.description),Object(de.f)("distanceRatio",m.text,90,"distanceRatio"in z?z.distanceRatio:m.hide,m.description),Object(de.g)("delta",f.text,90,2,"delta"in z?z.delta:f.hide),Object(de.g)("gamma",p.text,90,2,"gamma"in z?z.gamma:p.hide),Object(de.g)("rho",h.text,90,2,"rho"in z?z.rho:h.hide),Object(de.g)("theta",v.text,90,2,"theta"in z?z.theta:v.hide),Object(de.g)("vega",g.text,90,2,"vega"in z?z.vega:g.hide),{field:"lastTradeDate",headerName:M.text,width:145,type:"date",renderCell:function(e){return n.a.createElement("span",null,j()(e.row.lastTradeDate).format("YYYY-MM-DD"))},hide:"lastTradeDate"in z?z.lastTradeDate:M.hide},Object(de.g)("bid",E.text,105,2,"bid"in z?z.bid:E.hide),Object(de.g)("ask",A.text,105,2,"ask"in z?z.ask:A.hide),Object(de.b)("change",V.text,130,"change"in z?z.change:V.hide,500),Object(de.a)("percentChange",k.text,140,2,"percentChange"in z?z.percentChange:k.hide,500),Object(de.g)("volume",w.text,140,0,"volume"in z?z.volume:w.hide),Object(de.g)("openInterest",P.text,140,0,"openInterest"in z?z.openInterest:P.hide),Object(de.f)("impliedVolatility",S.text,140,"impliedVolatility"in z?z.impliedVolatility:S.hide),Object(de.f)("EWMAHisVol",_.text,140,"EWMAHisVol"in z?z.EWMAHisVol:_.hide),Object(de.g)("BSM_EWMAHisVol",C.text,140,2,"BSM_EWMAHisVol"in z?z.BSM_EWMAHisVol:C.hide),Object(de.g)("MC_EWMAHisVol",W.text,140,2,"MC_EWMAHisVol"in z?z.MC_EWMAHisVol:W.hide),Object(de.g)("BT_EWMAHisVol",N.text,140,2,"BT_EWMAHisVol"in z?z.BT_EWMAHisVol:N.hide)]},D=Object(O.a)({cachePolicy:"no-cache"}),L=function(e){var t=[],a=[];e.forEach((function(e){var r=e.symbol,n=e.stockPrice,i=e.EWMA_historicalVolatility;e.contracts.forEach((function(e){var o=e.expiryDate,l=function(e){return e.map((function(e,t){var a=e.valuationData,l={id:t,symbol:r,stockPrice:n,EWMAHisVol:i,expiryDate:o,lastTradeDate:void 0!==e.lastTradeDate&&null!==e.lastTradeDate&&"-"!==e.lastTradeDate?e.lastTradeDate:0,strike:void 0!==e.strike&&null!==e.strike&&"-"!==e.strike?e.strike:-Number.MAX_VALUE,lastPrice:void 0!==e.lastPrice&&null!==e.lastPrice&&"-"!==e.lastPrice?e.lastPrice:-Number.MAX_VALUE,bid:void 0!==e.bid&&null!==e.bid&&"-"!==e.bid?e.bid:-Number.MAX_VALUE,ask:void 0!==e.ask&&null!==e.ask&&"-"!==e.ask?e.ask:-Number.MAX_VALUE,change:void 0!==e.change&&null!==e.change&&"-"!==e.change?e.change:-Number.MAX_VALUE,percentChange:void 0!==e.percentChange&&null!==e.percentChange&&"-"!==e.percentChange?e.percentChange/100:-Number.MAX_VALUE,volume:void 0!==e.volume&&null!==e.volume&&"-"!==e.volume?e.volume:-Number.MAX_VALUE,openInterest:void 0!==e.openInterest&&null!==e.openInterest&&"-"!==e.openInterest?e.openInterest:-Number.MAX_VALUE,impliedVolatility:void 0!==e.impliedVolatility&&null!==e.impliedVolatility&&"-"!==e.impliedVolatility?e.impliedVolatility:-Number.MAX_VALUE,BSM_EWMAHisVol:void 0!==a.BSM_EWMAHisVol&&null!==a.BSM_EWMAHisVol&&a.BSM_EWMAHisVol>0?a.BSM_EWMAHisVol:-Number.MAX_VALUE,MC_EWMAHisVol:void 0!==a.MC_EWMAHisVol&&null!==a.MC_EWMAHisVol&&a.MC_EWMAHisVol>0?a.MC_EWMAHisVol:-Number.MAX_VALUE,BT_EWMAHisVol:void 0!==a.BT_EWMAHisVol&&null!==a.BT_EWMAHisVol&&a.BT_EWMAHisVol>0?a.BT_EWMAHisVol:-Number.MAX_VALUE,delta:void 0!==a.delta&&null!==a.delta?a.delta:-Number.MAX_VALUE,gamma:void 0!==a.gamma&&null!==a.gamma?a.gamma:-Number.MAX_VALUE,rho:void 0!==a.rho&&null!==a.rho?a.rho:-Number.MAX_VALUE,theta:void 0!==a.theta&&null!==a.theta?a.theta:-Number.MAX_VALUE,vega:void 0!==a.vega&&null!==a.vega?a.vega:-Number.MAX_VALUE},c=0,s=0;return l.BSM_EWMAHisVol>0&&(c+=1,s+=l.BSM_EWMAHisVol),l.MC_EWMAHisVol>0&&(c+=1,s+=l.MC_EWMAHisVol),l.BT_EWMAHisVol>0&&(c+=1,s+=l.BT_EWMAHisVol),l.avgEWMA=s/c,l.priceBias=-Number.MAX_VALUE,l.lastPrice!=-Number.MAX_VALUE&&(l.priceBias=Math.abs(l.lastPrice-l.avgEWMA)/l.lastPrice),l.priceStrikeRatio=-Number.MAX_VALUE,l.strike!=-Number.MAX_VALUE&&l.lastPrice!=-Number.MAX_VALUE&&(l.priceStrikeRatio=l.lastPrice/l.strike),l.priceStrikeRatio=-Number.MAX_VALUE,l.strike!=-Number.MAX_VALUE&&l.lastPrice!=-Number.MAX_VALUE&&(l.priceStrikeRatio=l.lastPrice/l.strike),l.distanceRatio=-Number.MAX_VALUE,l.strike!=-Number.MAX_VALUE&&l.stockPrice!=-Number.MAX_VALUE&&(l.distanceRatio=Math.abs(l.stockPrice-l.strike)/l.stockPrice),l}))};t=t.concat(l(e.calls)),a=a.concat(l(e.puts))}))})),t.forEach((function(e,a){t[a].id=a})),a.forEach((function(e,t){a[t].id=t})),console.log(t),T(t),console.log(a),q(a)},R=Object(r.useRef)({renderTable:L}),U=Object(r.useState)([]),H=U[0],T=U[1],I=Object(r.useState)([]),X=I[0],q=I[1],G=Object(r.useState)({}),z=G[0],F=G[1];return Object(r.useEffect)((function(){return Promise.all([Object(de.c)("/plugin-react/option-valuation/output.json",D)]).then((function(t){console.log(t),1===t.length&&null!==t[0]?L(t[0]):(console.error("renderDefaultOptionsData some data failed"),e.current.popModalWindow(n.a.createElement("div",null,"Get some data failed...")))})).catch((function(){console.error("renderDefaultOptionsData failed"),e.current.popModalWindow(n.a.createElement("div",null,"Get data failed..."))})),function(){}}),[]),n.a.createElement("div",{className:fe.a.defaultFont+" "+he.a.container},n.a.createElement(ge,{SyncDataRef:t,modalWindowRef:e,ControlPannelRef:a}),n.a.createElement("div",{key:y.a.generate()},n.a.createElement("div",{className:he.a.table},n.a.createElement(o.a,{rows:H,columns:B(),rowsPerPageOptions:[],autoPageSize:!0,components:{NoRowsOverlay:x.a},disableSelectionOnClick:!0,onColumnVisibilityChange:function(e){var t=z;t[e.field]=!e.isVisible,F(t)},initialState:{filter:{filterModel:{items:[{columnField:"lastPrice",operatorValue:">",value:.1}]}},sorting:{sortModel:[{field:"priceBias",sort:"desc"}]}}})),n.a.createElement("div",{className:he.a.table},n.a.createElement(o.a,{rows:X,columns:B(),rowsPerPageOptions:[],autoPageSize:!0,components:{NoRowsOverlay:x.a},disableSelectionOnClick:!0,onColumnVisibilityChange:function(e){var t=z;t[e.field]=!e.isVisible,F(t)},initialState:{filter:{filterModel:{items:[{columnField:"lastPrice",operatorValue:">",value:.1}]}},sorting:{sortModel:[{field:"priceBias",sort:"desc"}]}}}))),n.a.createElement(be.a,{modalWindowRef:e}),n.a.createElement(ve,{OptionsRef:R,ControlPannelRef:a,SyncDataRef:t}))};t.default=function(){return n.a.createElement(i.a,{injectFirst:!0},n.a.createElement(Me,null))}},Gcu1:function(e,t,a){"use strict";t.a=function(e,t,a,r,n){return null}},Nb3f:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("jelL")),i=a("nKUr"),o=(0,n.default)((0,i.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.default=o},Udd0:function(e,t,a){"use strict";a.r(t),a.d(t,"capitalize",(function(){return r.a})),a.d(t,"createChainedFunction",(function(){return n})),a.d(t,"createSvgIcon",(function(){return i.a})),a.d(t,"debounce",(function(){return o.a})),a.d(t,"deprecatedPropType",(function(){return l})),a.d(t,"isMuiElement",(function(){return c.a})),a.d(t,"ownerDocument",(function(){return s.a})),a.d(t,"ownerWindow",(function(){return u.a})),a.d(t,"requirePropFactory",(function(){return d.a})),a.d(t,"setRef",(function(){return b})),a.d(t,"unstable_useEnhancedEffect",(function(){return m.a})),a.d(t,"unstable_useId",(function(){return f.a})),a.d(t,"unsupportedProp",(function(){return p.a})),a.d(t,"useControlled",(function(){return h.a})),a.d(t,"useEventCallback",(function(){return v.a})),a.d(t,"useForkRef",(function(){return g.a})),a.d(t,"useIsFocusVisible",(function(){return M.a})),a.d(t,"unstable_ClassNameGenerator",(function(){return E.a}));var r=a("xeev"),n=a("GRZg").a,i=a("M7pN"),o=a("7yHM");var l=function(e,t){return function(){return null}},c=a("M3M6"),s=a("rdfb"),u=a("WFZb"),d=a("hxbm"),b=a("wB8u").a,m=a("6q60"),f=a("DSU1"),p=a("Gcu1"),h=a("1vOf"),v=a("KXty"),g=a("ZfBw"),M=a("8rms"),E=a("VA7I")},ea0G:function(e,t,a){e.exports={container:"options-module--container--2TUIk",optionsTableSelect:"options-module--optionsTableSelect--4rIAu",queryPannel:"options-module--queryPannel--3N9g-",parameterTitle:"options-module--parameterTitle--yYHMI",parameterBlock:"options-module--parameterBlock--PqKd0",valueText:"options-module--valueText--2UFQB",queryBtn:"options-module--queryBtn--Ue1au",table:"options-module--table--2Tr-f"}},hxbm:function(e,t,a){"use strict";a("wx14");t.a=function(e,t){return function(){return null}}},jelL:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=a("Udd0")}}]);
//# sourceMappingURL=component---src-pages-options-js-b77948d6c519a5962ad1.js.map