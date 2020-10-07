(this["webpackJsonpcovid-visualisation"]=this["webpackJsonpcovid-visualisation"]||[]).push([[0],{109:function(e,a,t){e.exports=t(253)},116:function(e,a,t){},252:function(e,a,t){},253:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(24),l=t.n(c),s=(t(114),t(115),t(116),t(39)),o=t(40),i=t(44),u=t(43),d=t(21),m=t(254),b=t(255),E=t(256),h=t(257),p=t(258),v=t(259),f=t(260),g=t(263),O=t(264),j=t(265),y=t(261),C=t(262),S=function(e){var a=Object(n.useState)(!1),t=Object(d.a)(a,2),c=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement(m.a,{light:!0,className:"bg-light",expand:"md"},r.a.createElement(b.a,{to:"/"},"covid-Visualiser"),r.a.createElement(E.a,{onClick:function(){return l(!c)}}),r.a.createElement(h.a,{isOpen:c,navbar:!0},r.a.createElement(p.a,{className:"mr-auto",navbar:!0},r.a.createElement(v.a,null,r.a.createElement(f.a,{to:""},"India")),r.a.createElement(v.a,null,r.a.createElement(f.a,{to:""},"State-Wise")),r.a.createElement(v.a,null,r.a.createElement(f.a,{to:""},"About")),r.a.createElement(g.a,{nav:!0,inNavbar:!0},r.a.createElement(O.a,{nav:!0,caret:!0},"Documentation"),r.a.createElement(j.a,{right:!0},r.a.createElement(y.a,null,"one"),r.a.createElement(y.a,{divider:!0}),r.a.createElement(y.a,null,"two"),r.a.createElement(y.a,{divider:!0}),r.a.createElement(y.a,null,"three")))),r.a.createElement(C.a,null,"for educational purposes only"))))},A=t(31),L=t(102);function N(e){var a=Object(n.useState)({labels:["1","2","3","4","5"],datasets:[{label:"total-cases",data:[1,1,1,1,1]}]}),t=Object(d.a)(a,2),c=t[0],l=t[1],s=Object(n.useState)({labels:["1","2","3","4","5"],datasets:[{label:"deceased",data:[1,1,1,1,1]}]}),o=Object(d.a)(s,2),i=o[0],u=o[1],m=Object(n.useState)({labels:["1","2","3","4","5"],datasets:[{label:"Recovered",data:[1,1,1,1,1]}]}),b=Object(d.a)(m,2),E=b[0],h=b[1],p=Object(n.useState)({labels:["1","2","3","4","5"],datasets:[{label:"active-cases",data:[1,1,1,1,1]}]}),v=Object(d.a)(p,2),f=v[0],g=v[1];if(e.isLoading)return r.a.createElement("div",{className:"container-fluid text-center"},r.a.createElement("img",{src:"https://64.media.tumblr.com/30989303b244278454e07c53dd3a47ac/tumblr_nxa257Q6Zh1uzo3myo1_500.gif",className:"img-fluid"}));if(e.errMess)return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess)));if(null!=e.cases){for(var O=[],j=0;j<e.cases.data.length;j++)O[j]="".concat(e.cases.data[j].day);for(var y=[],C=0;C<e.cases.data.length;C++)y[C]=e.cases.data[C].summary.total;for(var S=[],N=0;N<e.cases.data.length;N++)S[N]=e.cases.data[N].summary.deaths;for(var k=[],w=0;w<e.cases.data.length;w++)k[w]=e.cases.data[w].summary.discharged;for(var D=[],M=0;M<e.cases.data.length;M++)D[M]=y[M]-k[M]-S[M];return r.a.createElement("div",null,r.a.createElement("p",{className:"lead"},"Best viewed on larger screen sizes for now"),r.a.createElement(L.a,{onClick:function(){l({labels:O,datasets:[{label:"Total cases",data:y,pointRadius:0,borderWidth:2,borderColor:"blue",backgroundColor:"rgba(0,0,255,0.1)"}]}),u({labels:O,datasets:[{label:"Deceased",data:S,pointRadius:0,borderWidth:2,borderColor:"black"}]}),h({labels:O,datasets:[{label:"Recovered",data:k,pointRadius:0,borderWidth:2,borderColor:"green",backgroundColor:"rgba(0,255,0,0.1)"}]}),g({labels:O,datasets:[{label:"Active Cases",data:D,pointRadius:0,borderWidth:2,borderColor:"red",backgroundColor:"rgba(255,0,0,0.1)"}]})}},"Compute Graphs"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(A.Line,{data:c}),r.a.createElement("br",null),r.a.createElement(A.Line,{data:f}),r.a.createElement("br",null),r.a.createElement(A.Line,{data:E}),r.a.createElement("br",null),r.a.createElement(A.Line,{data:i}))}}function k(){return r.a.createElement("div",{className:"bg-light"},"Data Source:",r.a.createElement("a",{href:"https://api.rootnet.in/"},"api.rootnet.in")," | ",r.a.createElement("a",{href:"https://github.com/vanssign"},r.a.createElement("span",{className:"fa fa-github fa-lg"})," vanssign"),"ed")}var w=t(9),D=t(42),M=t(106),_=t.n(M),I=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchCases()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(w.d,null,r.a.createElement(w.b,{exact:!0,path:"/home",component:function(){return r.a.createElement(N,{cases:e.props.cases.cases,isLoading:e.props.cases.isLoading,errMess:e.props.cases.errMess})}}),r.a.createElement(w.a,{to:"/home"})),r.a.createElement(k,null))}}]),t}(n.Component),W=Object(w.g)(Object(D.b)((function(e){return{cases:e.cases}}),(function(e){return{fetchCases:function(){return e((function(e){return e({type:"CASES_LOADING"}),_.a.get("https://api.rootnet.in/covid19-in/stats/history/data").then((function(a){return e({type:"ADD_CASES",payload:a.data})})).catch((function(a){e({type:"CASES_LOADING"});var t="Error: "+a.message;return e(function(e){return{type:"CASES_FAILED",payload:e}}(t))}))}))}}}))(I)),R=(t(252),t(57)),x=t(26),G=t(22),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,cases:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_CASES":return Object(G.a)(Object(G.a)({},e),{},{isLoading:!1,errMess:null,cases:a.payload});case"CASES_LOADING":return Object(G.a)(Object(G.a)({},e),{},{isLoading:!0,errMess:null,cases:[]});case"CASES_FAILED":return Object(G.a)(Object(G.a)({},e),{},{isLoading:!1,errMess:a.payload,cases:[]});default:return e}},z=t(107),F=Object(x.d)(Object(x.c)({cases:B}),Object(x.a)(z.a)),J=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(D.a,{store:F},r.a.createElement(R.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(W,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[109,1,2]]]);
//# sourceMappingURL=main.53907dfa.chunk.js.map