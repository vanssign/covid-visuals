(this["webpackJsonpcovid-visualisation"]=this["webpackJsonpcovid-visualisation"]||[]).push([[0],{109:function(e,a,t){e.exports=t(253)},116:function(e,a,t){},252:function(e,a,t){},253:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(23),s=t.n(c),l=(t(114),t(115),t(116),t(37)),o=t(38),i=t(43),u=t(41),m=t(42),d=t(254),E=t(255),p=t(256),h=t(257),f=t(258),v=t(259),b=t(260),g=t(263),O=t(264),j=t(265),y=t(261),S=t(262),A=function(e){var a=Object(n.useState)(!1),t=Object(m.a)(a,2),c=t[0],s=t[1];return r.a.createElement("div",null,r.a.createElement(d.a,{light:!0,className:"bg-light",expand:"md"},r.a.createElement(E.a,{to:"/"},"covid-Visualiser"),r.a.createElement(p.a,{onClick:function(){return s(!c)}}),r.a.createElement(h.a,{isOpen:c,navbar:!0},r.a.createElement(f.a,{className:"mr-auto",navbar:!0},r.a.createElement(v.a,null,r.a.createElement(b.a,{to:""},"India")),r.a.createElement(v.a,null,r.a.createElement(b.a,{to:""},"State-Wise")),r.a.createElement(v.a,null,r.a.createElement(b.a,{to:""},"About")),r.a.createElement(g.a,{nav:!0,inNavbar:!0},r.a.createElement(O.a,{nav:!0,caret:!0},"Documentation"),r.a.createElement(j.a,{right:!0},r.a.createElement(y.a,null,"one"),r.a.createElement(y.a,{divider:!0}),r.a.createElement(y.a,null,"two"),r.a.createElement(y.a,{divider:!0}),r.a.createElement(y.a,null,"three")))),r.a.createElement(S.a,null,"for educational purposes only"))))},C=t(104),N=t(101);function w(e){var a=Object(n.useState)({labels:["1","2","3","4","5"],datasets:[{label:"covid-cases",data:[1,1,1,1,1]}]}),t=Object(m.a)(a,2),c=t[0],s=t[1];if(e.isLoading)return r.a.createElement("div",{className:"container-fluid text-center"},r.a.createElement("img",{src:"https://64.media.tumblr.com/30989303b244278454e07c53dd3a47ac/tumblr_nxa257Q6Zh1uzo3myo1_500.gif",className:"img-fluid"}));if(e.errMess)return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess)));if(null!=e.cases){for(var l=[],o=0;o<e.cases.data.length;o++)l[o]="".concat(e.cases.data[o].day);for(var i=[],u=0;u<e.cases.data.length;u++)i[u]=e.cases.data[u].summary.total;return r.a.createElement("div",null,console.log(c),r.a.createElement("p",{className:"lead"},"Best viewed on larger screen sizes for now"),r.a.createElement(C.Line,{data:c}),r.a.createElement(N.a,{onClick:function(){s({labels:l,datasets:[{label:"Total cases",data:i,pointRadius:0,borderWidth:2}]})}},"Compute Graph"))}}function L(){return r.a.createElement("div",{className:"bg-light"},"Data Source:",r.a.createElement("a",{href:"https://api.rootnet.in/"},"api.rootnet.in")," | ",r.a.createElement("a",{href:"https://github.com/vanssign"},r.a.createElement("span",{className:"fa fa-github fa-lg"})," vanssign"),"ed")}var D=t(9),M=t(40),k=t(106),_=t.n(k),I=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchCases()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement(D.d,null,r.a.createElement(D.b,{exact:!0,path:"/home",component:function(){return r.a.createElement(w,{cases:e.props.cases.cases,isLoading:e.props.cases.isLoading,errMess:e.props.cases.errMess})}}),r.a.createElement(D.a,{to:"/home"})),r.a.createElement(L,null))}}]),t}(n.Component),x=Object(D.g)(Object(M.b)((function(e){return{cases:e.cases}}),(function(e){return{fetchCases:function(){return e((function(e){return e({type:"CASES_LOADING"}),_.a.get("https://api.rootnet.in/covid19-in/stats/history/data").then((function(a){return e({type:"ADD_CASES",payload:a.data})})).catch((function(a){e({type:"CASES_LOADING"});var t="Error: "+a.message;return e(function(e){return{type:"CASES_FAILED",payload:e}}(t))}))}))}}}))(I)),G=(t(252),t(56)),W=t(25),B=t(21),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,cases:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_CASES":return Object(B.a)(Object(B.a)({},e),{},{isLoading:!1,errMess:null,cases:a.payload});case"CASES_LOADING":return Object(B.a)(Object(B.a)({},e),{},{isLoading:!0,errMess:null,cases:[]});case"CASES_FAILED":return Object(B.a)(Object(B.a)({},e),{},{isLoading:!1,errMess:a.payload,cases:[]});default:return e}},F=t(107),J=Object(W.d)(Object(W.c)({cases:z}),Object(W.a)(F.a)),Q=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(M.a,{store:J},r.a.createElement(G.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(x,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[109,1,2]]]);
//# sourceMappingURL=main.32c33d79.chunk.js.map