(this["webpackJsonpcovid-visualisation"]=this["webpackJsonpcovid-visualisation"]||[]).push([[0],{215:function(e,a,t){},216:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(17),r=t.n(c),s=(t(90),t(91),t(92),t(33)),o=t(34),m=t(37),i=t(36),d=t(8),u=t(217),b=t(218),E=t(219),f=t(220),h=t(221),p=t(222),g=t(18),v=function(e){var a=Object(l.useState)(!1),t=Object(d.a)(a,2),c=t[0],r=t[1];return n.a.createElement("div",null,n.a.createElement(u.a,{dark:!0,className:"bg-dark",expand:"xs"},n.a.createElement(b.a,{to:"/"},"Covid Stats"),n.a.createElement(E.a,{onClick:function(){return r(!c)}}),n.a.createElement(f.a,{isOpen:c,navbar:!0},n.a.createElement(h.a,{className:"mr-auto",navbar:!0},n.a.createElement(p.a,null,n.a.createElement(g.b,{className:"nav-link",to:"/india"},"India")),n.a.createElement(p.a,null,n.a.createElement(g.b,{className:"nav-link",to:"/state-wise"},"State Wise")),n.a.createElement(p.a,null,n.a.createElement(g.b,{className:"nav-link",to:"/about"},"About"))))))},O=t(14),j=t(223);function N(e){var a=Object(l.useState)({labels:["1","2","3","4","5"],datasets:[{label:"total-cases",data:[1,1,1,1,1]}]}),t=Object(d.a)(a,2),c=t[0],r=t[1],s=Object(l.useState)({labels:["1","2","3","4","5"],datasets:[{label:"deceased",data:[1,1,1,1,1]}]}),o=Object(d.a)(s,2),m=o[0],i=o[1],u=Object(l.useState)({labels:["1","2","3","4","5"],datasets:[{label:"Recovered",data:[1,1,1,1,1]}]}),b=Object(d.a)(u,2),E=b[0],f=b[1],h=Object(l.useState)({labels:["1","2","3","4","5"],datasets:[{label:"active-cases",data:[1,1,1,1,1]}]}),p=Object(d.a)(h,2),g=p[0],v=p[1];if(e.isLoading)return n.a.createElement("div",{className:"container-fluid text-center"},n.a.createElement("img",{src:"https://64.media.tumblr.com/30989303b244278454e07c53dd3a47ac/tumblr_nxa257Q6Zh1uzo3myo1_500.gif",className:"img-fluid"}));if(e.errMess)return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("h4",null,e.errMess)));if(null!=e.cases){for(var N=[],k=[],S=0;S<e.cases.data.length;S++){k[S]="".concat(e.cases.data[S].day);var w=k[S].split("-");N[S]=w[2]+"/"+w[1]}for(var C=[],y=[],L=[],M=[],x=0;x<e.cases.data.length;x++)C[x]=e.cases.data[x].summary.total,y[x]=e.cases.data[x].summary.deaths,L[x]=e.cases.data[x].summary.discharged,M[x]=C[x]-L[x]-y[x];var A=e.cases.data.length-1,_=C[A],D=M[A],R=L[A],W=y[A],I=[];I[0]=Math.abs(C[A]-C[A-1]),I[1]=Math.abs(M[A]-M[A-1]),I[2]=Math.abs(L[A]-L[A-1]),I[3]=Math.abs(y[A]-y[A-1]);var B=[];C[A]<C[A-1]?B[0]=!1:B[0]=!0,M[A]<M[A-1]?B[1]=!1:B[1]=!0,L[A]<L[A-1]?B[2]=!1:B[2]=!0,y[A]<y[A-1]?B[3]=!1:B[3]=!0;for(var T=[],z=0;z<4;z++)B[z]?T[z]="fa-arrow-up":T[z]="fa-arrow-down";return n.a.createElement("div",null,n.a.createElement("br",null),n.a.createElement("p",{className:"lead"},n.a.createElement("span",{className:"font-weight-bolder"},"Latest Stats: "),"India"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-6 col-md-3 pt-4"},n.a.createElement("p",{style:{color:"blue"}},"".concat(_),n.a.createElement("br",null),"".concat(I[0])," ",n.a.createElement("i",{className:"fa fa-lg ".concat(T[0])})),n.a.createElement("small",null,"Total")),n.a.createElement("div",{className:"col-6 col-md-3 pt-4"},n.a.createElement("p",{style:{color:"red"}},"".concat(D),n.a.createElement("br",null),"".concat(I[1])," ",n.a.createElement("i",{className:"fa fa-lg ".concat(T[1])})),n.a.createElement("small",null,"Active")),n.a.createElement("div",{className:"col-6 col-md-3 pt-4"},n.a.createElement("p",{style:{color:"green"}},"".concat(R)," ",n.a.createElement("br",null),"".concat(I[2])," ",n.a.createElement("i",{className:"fa fa-lg ".concat(T[2])})),n.a.createElement("small",null,"Recovered")),n.a.createElement("div",{className:"col-6 col-md-3 pt-4"},n.a.createElement("p",{style:{color:"black"}},"".concat(W),n.a.createElement("br",null),"".concat(I[3])," ",n.a.createElement("i",{className:"fa fa-lg ".concat(T[3])})),n.a.createElement("small",null,"Deceased"))),n.a.createElement("small",{className:"text-muted"},"Last updated: ".concat(e.cases.lastOriginUpdate)),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(j.a,{color:"light",onClick:function(){console.log(N),r({labels:N,datasets:[{label:"Total cases",data:C,pointRadius:0,borderWidth:2,borderColor:"blue",backgroundColor:"rgba(0,0,255,0.1)"}]}),i({labels:N,datasets:[{label:"Deceased",data:y,pointRadius:0,borderWidth:2,borderColor:"black"}]}),f({labels:N,datasets:[{label:"Recovered",data:L,pointRadius:0,borderWidth:2,borderColor:"green",backgroundColor:"rgba(0,255,0,0.1)"}]}),v({labels:N,datasets:[{label:"Active Cases",data:M,pointRadius:0,borderWidth:2,borderColor:"red",backgroundColor:"rgba(255,0,0,0.1)"}]})}},"Compute Graphs"),n.a.createElement("br",null),n.a.createElement("small",{className:"d-md-none"},n.a.createElement("i",{className:"fa fa-info-circle fa-lg"})," Best Viewed on Larger Screen Sizes"),n.a.createElement("br",null),n.a.createElement(O.Line,{data:c}),n.a.createElement("br",null),n.a.createElement(O.Line,{data:g}),n.a.createElement("br",null),n.a.createElement(O.Line,{data:E}),n.a.createElement("br",null),n.a.createElement(O.Line,{data:m}),n.a.createElement("br",null),n.a.createElement("br",null))}}function k(){return n.a.createElement("div",null,n.a.createElement("br",null),n.a.createElement("h3",null,"App Information"),n.a.createElement("p",null,"The App uses ",n.a.createElement("a",{href:"https://api.rootnet.in/covid19-in/stats/history"},"api.rootnet.in")," as backend"),n.a.createElement("p",null,n.a.createElement("bold",null,"Dependencies and Packages used:"),n.a.createElement("br",null),'"axios": "^0.20.0"',n.a.createElement("br",null),'"bootstrap": "^4.5.2"',n.a.createElement("br",null),'"chart.js": "^2.9.3"',n.a.createElement("br",null),'"font-awesome": "^4.7.0"',n.a.createElement("br",null),'"react": "^16.13.1"',n.a.createElement("br",null),'"react-chartjs-2": "^2.10.0"',n.a.createElement("br",null),'"react-dom": "^16.13.1"',n.a.createElement("br",null),'"react-redux": "^7.2.1"',n.a.createElement("br",null),'"react-router-dom": "^5.2.0"',n.a.createElement("br",null),'"react-scripts": "3.4.3"',n.a.createElement("br",null),'"reactstrap": "^8.5.1"',n.a.createElement("br",null),'"redux": "^4.0.5"',n.a.createElement("br",null),'"redux-thunk": "^2.3.0"'),n.a.createElement("h3",null,"Check My Works"),n.a.createElement("div",null,n.a.createElement("a",{href:"https://github.com/vanssign",target:"_blank",class:"btn"},n.a.createElement("i",{class:"fa fa-lg fa-github","aria-hidden":"true"})),n.a.createElement("a",{href:"https://behance.net/thindvansh7aab",target:"_blank",class:"btn"},n.a.createElement("i",{class:"fa fa-lg fa-behance","aria-hidden":"true"})),n.a.createElement("a",{href:"https://lifeviawindow.wordpress.com",target:"_blank",class:"btn"},n.a.createElement("i",{class:"fa fa-lg fa-wordpress","aria-hidden":"true"}))),n.a.createElement("br",null),n.a.createElement("h3",null,"Contact Me"),n.a.createElement("div",null,n.a.createElement("a",{href:"https://www.facebook.com/singh.vansh1999",target:"_blank",class:"btn btn-social-icon btn-facebook"},n.a.createElement("i",{className:"text-light",class:"fa fa-lg fa-facebook-f","aria-hidden":"true"})),n.a.createElement("a",{href:"https://in.linkedin.com/in/vansh-singh",target:"_blank",class:"btn btn-linkedin"},n.a.createElement("i",{class:"fa fa-lg fa-linkedin","aria-hidden":"true"})),n.a.createElement("a",{href:"https://www.instagram.com/vanssign",target:"_blank",class:"btn btn-instagram"},n.a.createElement("i",{class:"fa fa-lg fa-instagram","aria-hidden":"true"})),n.a.createElement("a",{href:"https://wa.me/918279762669",target:"_blank",class:"btn btn-whatsapp"},n.a.createElement("i",{class:"fa fa-lg fa-whatsapp","aria-hidden":"true"})),n.a.createElement("a",{href:"mailto:thindvansh1999@gmail.com",target:"_blank",class:"btn"},n.a.createElement("i",{class:"fa fa-lg fa-envelope","aria-hidden":"true"}))),n.a.createElement("br",null),n.a.createElement("br",null))}function S(){return n.a.createElement("div",{className:"bg-dark text-white"},n.a.createElement("br",null),"Data Source: ",n.a.createElement("a",{className:"text-info",href:"https://api.rootnet.in/"},"api.rootnet.in")," | ",n.a.createElement("span",{className:"text-info"},n.a.createElement("a",{className:"text-info",href:"https://github.com/vanssign"},n.a.createElement("span",{className:"fa fa-github fa-lg"})," vanssign"),"ed"),n.a.createElement("br",null),n.a.createElement("br",null))}var w=t(6),C=t(35),y=t(83),L=t.n(y),M=t(227),x=t(224),A=t(225),_=t(226);function D(e){var a=e.className,t=Object(l.useState)(!1),c=Object(d.a)(t,2),r=c[0],s=c[1],o=Object(l.useState)("None"),m=Object(d.a)(o,2),i=m[0],u=m[1],b=Object(l.useState)([]),E=Object(d.a)(b,2),f=E[0],h=(E[1],Object(l.useState)([])),p=Object(d.a)(h,2),g=p[0],v=(p[1],Object(l.useState)([])),N=Object(d.a)(v,2),k=N[0],S=(N[1],Object(l.useState)(" ")),w=Object(d.a)(S,2),C=w[0],y=w[1],L=Object(l.useState)(" "),D=Object(d.a)(L,2),R=D[0],W=D[1],I=Object(l.useState)(" "),B=Object(d.a)(I,2),T=B[0],z=B[1],G=Object(l.useState)(" "),F=Object(d.a)(G,2),J=F[0],P=F[1],Q=Object(l.useState)({labels:["1","2","3","4","5"],datasets:[{label:"total-cases",data:[1,1,1,1,1]}]}),U=Object(d.a)(Q,2),V=U[0],Z=U[1],$=Object(l.useState)({labels:["1","2","3","4","5"],datasets:[{label:"deceased",data:[1,1,1,1,1]}]}),q=Object(d.a)($,2),H=q[0],K=q[1],X=Object(l.useState)({labels:["1","2","3","4","5"],datasets:[{label:"Recovered",data:[1,1,1,1,1]}]}),Y=Object(d.a)(X,2),ee=Y[0],ae=Y[1],te=Object(l.useState)({labels:["1","2","3","4","5"],datasets:[{label:"active-cases",data:[1,1,1,1,1]}]}),le=Object(d.a)(te,2),ne=le[0],ce=le[1],re=function(){return s(!r)};if(e.isLoading)return n.a.createElement("div",{className:"container-fluid text-center"},n.a.createElement("img",{src:"https://64.media.tumblr.com/30989303b244278454e07c53dd3a47ac/tumblr_nxa257Q6Zh1uzo3myo1_500.gif",className:"img-fluid"}));if(e.errMess)return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("h4",null,e.errMess)));if(null!=e.cases){for(var se,oe=[],me=[],ie=0;ie<e.cases.data.length;ie++){me[ie]="".concat(e.cases.data[ie].day);var de=me[ie].split("-");oe[ie]=de[2]+"/"+de[1]}var ue=[],be=[],Ee=[],fe=[],he=e.cases.data.length-1,pe=document.getElementsByName("indianstate");return n.a.createElement("div",null,n.a.createElement("br",null),n.a.createElement(j.a,{color:"light",onClick:re},"Change State"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(M.a,{isOpen:r,toggle:re,className:a},n.a.createElement(x.a,null,n.a.createElement("small",null,"Select a radio button, Press Select State and then Compute Data"),n.a.createElement("br",null),n.a.createElement(j.a,{className:"mr-2",color:"light",onClick:function(){!function(){for(var e=0;e<pe.length;e++)!0===pe[e].checked&&u("".concat(pe[e].value))}()}},"Select State"),n.a.createElement(j.a,{color:"light",onClick:function(){!function(){console.log(i);for(var a=0;a<e.cases.data.length;a++){se=-1;for(var t=0;t<e.cases.data[a].regional.length;t++)if(e.cases.data[a].regional[t].loc===i){se=t;break}-1===se?(ue[a]=0,be[a]=0,Ee[a]=0,fe[a]=0):(ue[a]=e.cases.data[a].regional[se].totalConfirmed,be[a]=e.cases.data[a].regional[se].deaths,Ee[a]=e.cases.data[a].regional[se].discharged,fe[a]=ue[a]-Ee[a]-be[a])}y(ue[he]),P(fe[he]),z(Ee[he]),W(be[he]),f[0]=Math.abs(ue[he]-ue[he-1]),f[1]=Math.abs(fe[he]-fe[he-1]),f[2]=Math.abs(Ee[he]-Ee[he-1]),f[3]=Math.abs(be[he]-be[he-1]),ue[he]<ue[he-1]?g[0]=!1:g[0]=!0,fe[he]<fe[he-1]?g[1]=!1:g[1]=!0,Ee[he]<Ee[he-1]?g[2]=!1:g[2]=!0,be[he]<be[he-1]?g[3]=!1:g[3]=!0;for(var l=0;l<4;l++)g[l]?k[l]="fa-arrow-up":k[l]="fa-arrow-down";Z({labels:oe,datasets:[{label:"Total cases",data:ue,pointRadius:0,borderWidth:2,borderColor:"blue",backgroundColor:"rgba(0,0,255,0.1)"}]}),K({labels:oe,datasets:[{label:"Deceased",data:be,pointRadius:0,borderWidth:2,borderColor:"black"}]}),ae({labels:oe,datasets:[{label:"Recovered",data:Ee,pointRadius:0,borderWidth:2,borderColor:"green",backgroundColor:"rgba(0,255,0,0.1)"}]}),ce({labels:oe,datasets:[{label:"Active Cases",data:fe,pointRadius:0,borderWidth:2,borderColor:"red",backgroundColor:"rgba(255,0,0,0.1)"}]}),s(!r)}()}},"Compute Data"),n.a.createElement("br",null),n.a.createElement("small",null,"Selected: ",n.a.createElement("span",{className:"text-info font-weight-bolder"},"".concat(i)))),n.a.createElement(A.a,null,e.cases.data[he].regional.map((function(e,a){return n.a.createElement(n.a.Fragment,null,n.a.createElement("input",{type:"radio",id:"region".concat(a),name:"indianstate",value:e.loc}),n.a.createElement("label",{for:"region".concat(a)},e.loc),n.a.createElement("br",null))}))),n.a.createElement(_.a,null," "," ")),n.a.createElement("p",{className:"lead"},n.a.createElement("span",{className:"font-weight-bolder"},"Latest Stats:")," ","".concat(i)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-6 col-md-3 pt-4"},n.a.createElement("p",{style:{color:"blue"}},"".concat(C),n.a.createElement("br",null),"".concat(f[0])," ",n.a.createElement("i",{className:"fa fa-lg ".concat(k[0])})),n.a.createElement("small",null,"Total")),n.a.createElement("div",{className:"col-6 col-md-3 pt-4"},n.a.createElement("p",{style:{color:"red"}},"".concat(J),n.a.createElement("br",null),"".concat(f[1])," ",n.a.createElement("i",{className:"fa fa-lg ".concat(k[1])})),n.a.createElement("small",null,"Active")),n.a.createElement("div",{className:"col-6 col-md-3 pt-4"},n.a.createElement("p",{style:{color:"green"}},"".concat(T)," ",n.a.createElement("br",null),"".concat(f[2])," ",n.a.createElement("i",{className:"fa fa-lg ".concat(k[2])})),n.a.createElement("small",null,"Recovered")),n.a.createElement("div",{className:"col-6 col-md-3 pt-4"},n.a.createElement("p",{style:{color:"black"}},"".concat(R),n.a.createElement("br",null),"".concat(f[3])," ",n.a.createElement("i",{className:"fa fa-lg ".concat(k[3])})),n.a.createElement("small",null,"Deceased"))),n.a.createElement("small",{className:"text-muted"},"Last updated: ".concat(e.cases.lastOriginUpdate)),n.a.createElement("br",null),n.a.createElement("small",{className:"d-md-none"},n.a.createElement("i",{className:"fa fa-info-circle fa-lg"})," Best Viewed on Larger Screen Sizes"),n.a.createElement("br",null),n.a.createElement(O.Line,{data:V}),n.a.createElement("br",null),n.a.createElement(O.Line,{data:ne}),n.a.createElement("br",null),n.a.createElement(O.Line,{data:ee}),n.a.createElement("br",null),n.a.createElement(O.Line,{data:H}),n.a.createElement("br",null),n.a.createElement("br",null))}}var R=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchCases()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(v,null),n.a.createElement(w.d,null,n.a.createElement(w.b,{exact:!0,path:"/home",component:function(){return n.a.createElement(N,{cases:e.props.cases.cases,isLoading:e.props.cases.isLoading,errMess:e.props.cases.errMess})}}),n.a.createElement(w.b,{exact:!0,path:"/state-wise",component:function(){return n.a.createElement(D,{cases:e.props.cases.cases,isLoading:e.props.cases.isLoading,errMess:e.props.cases.errMess})}}),n.a.createElement(w.b,{exact:!0,path:"/about",component:function(){return n.a.createElement(k,null)}}),n.a.createElement(w.a,{to:"/home"})),n.a.createElement(S,null))}}]),t}(l.Component),W=Object(w.g)(Object(C.b)((function(e){return{cases:e.cases}}),(function(e){return{fetchCases:function(){return e((function(e){return e({type:"CASES_LOADING"}),L.a.get("https://api.rootnet.in/covid19-in/stats/history/data").then((function(a){return e({type:"ADD_CASES",payload:a.data})})).catch((function(a){e({type:"CASES_LOADING"});var t="Error: "+a.message;return e(function(e){return{type:"CASES_FAILED",payload:e}}(t))}))}))}}}))(R)),I=(t(215),t(22)),B=t(21),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,cases:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_CASES":return Object(B.a)(Object(B.a)({},e),{},{isLoading:!1,errMess:null,cases:a.payload});case"CASES_LOADING":return Object(B.a)(Object(B.a)({},e),{},{isLoading:!0,errMess:null,cases:[]});case"CASES_FAILED":return Object(B.a)(Object(B.a)({},e),{},{isLoading:!1,errMess:a.payload,cases:[]});default:return e}},z=t(84),G=Object(I.d)(Object(I.c)({cases:T}),Object(I.a)(z.a)),F=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement(C.a,{store:G},n.a.createElement(g.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(W,null))))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},85:function(e,a,t){e.exports=t(216)},92:function(e,a,t){}},[[85,1,2]]]);
//# sourceMappingURL=main.79cd7b49.chunk.js.map