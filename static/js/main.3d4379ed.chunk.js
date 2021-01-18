(this["webpackJsonpcovid-visualisation"]=this["webpackJsonpcovid-visualisation"]||[]).push([[0],{218:function(e,a,t){},219:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(19),c=t.n(r),s=(t(92),t(93),t(94),t(33)),o=t(34),i=t(37),m=t(36),d=t(6),u=t(220),b=t(221),E=t(222),f=t(223),p=t(224),g=t(225),h=t(10),v=function(e){var a=Object(n.useState)(!1),t=Object(d.a)(a,2),r=t[0],c=t[1];return l.a.createElement("div",null,l.a.createElement(u.a,{dark:!0,className:"bg-dark",expand:"xs"},l.a.createElement(b.a,{to:"/"},"CoVisuals"),l.a.createElement(E.a,{onClick:function(){return c(!r)}}),l.a.createElement(f.a,{isOpen:r,navbar:!0},l.a.createElement(p.a,{navbar:!0},l.a.createElement(g.a,null,l.a.createElement(h.c,{className:"nav-link",to:"/home"},l.a.createElement("i",{className:"fa fa-bar-chart fa-2x"}),l.a.createElement("br",null),l.a.createElement("span",{className:"make-it-small"},"stats"))),l.a.createElement(g.a,null,l.a.createElement(h.c,{className:"nav-link",to:"/news/0"},l.a.createElement("i",{className:"fa fa-newspaper-o fa-2x"}),l.a.createElement("br",null),l.a.createElement("span",{className:"make-it-small"},"news"))),l.a.createElement(g.a,null,l.a.createElement(h.c,{className:"nav-link",to:"/about"},l.a.createElement("i",{className:"fa fa-info-circle fa-2x"}),l.a.createElement("br",null),l.a.createElement("span",{className:"make-it-small"},"about")))))))},N=t(15),w=t(226),k=t(227),O=t(228);function j(e){var a=Object(n.useState)({labels:["1","2","3","4","5"],datasets:[{label:"total-cases",data:[1,1,1,1,1]}]}),t=Object(d.a)(a,2),r=t[0],c=t[1],s=Object(n.useState)({labels:["1","2","3","4","5"],datasets:[{label:"deceased",data:[1,1,1,1,1]}]}),o=Object(d.a)(s,2),i=o[0],m=o[1],u=Object(n.useState)({labels:["1","2","3","4","5"],datasets:[{label:"Recovered",data:[1,1,1,1,1]}]}),b=Object(d.a)(u,2),E=b[0],f=b[1],p=Object(n.useState)({labels:["1","2","3","4","5"],datasets:[{label:"active-cases",data:[1,1,1,1,1]}]}),g=Object(d.a)(p,2),v=g[0],j=g[1],S=Object(n.useState)({labels:["1","2","3","4","5"],datasets:[{label:"no. of tests",data:[1,1,1,1,1]}]}),y=Object(d.a)(S,2),C=y[0],L=y[1];if(e.isLoading||e.testsisLoading)return l.a.createElement("div",{className:"container-fluid text-center"},l.a.createElement("img",{src:"https://64.media.tumblr.com/30989303b244278454e07c53dd3a47ac/tumblr_nxa257Q6Zh1uzo3myo1_500.gif",className:"img-fluid"}));if(e.errMess)return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("h4",null,e.errMess)));if(e.testserrMess)return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("h4",null,e.testserrMess)));if(null!=e.cases&&null!=e.tests){for(var x=[],I=[],A=[],M=[],D=0;D<e.cases.data.length;D++){A[D]="".concat(e.cases.data[D].day);var _=A[D].split("-");x[D]=_[2]+"/"+_[1]}for(var T=0;T<e.tests.data.length;T++){M[T]="".concat(e.tests.data[T].day);_=M[T].split("-");I[T]=_[2]+"/"+_[1]}for(var W=[],R=[],B=[],G=[],V=[],F=0;F<e.cases.data.length;F++)W[F]=e.cases.data[F].summary.total,R[F]=e.cases.data[F].summary.deaths,B[F]=e.cases.data[F].summary.discharged,G[F]=W[F]-B[F]-R[F];for(var P=0;P<e.tests.data.length;P++)V[P]=e.tests.data[P].totalSamplesTested;var U=e.cases.data.length-1,z=W[U],q=G[U],J=B[U],Q=R[U],Z=[];Z[0]=Math.abs(W[U]-W[U-1]),Z[1]=Math.abs(G[U]-G[U-1]),Z[2]=Math.abs(B[U]-B[U-1]),Z[3]=Math.abs(R[U]-R[U-1]);var $=[];W[U]<W[U-1]?$[0]=!1:$[0]=!0,G[U]<G[U-1]?$[1]=!1:$[1]=!0,B[U]<B[U-1]?$[2]=!1:$[2]=!0,R[U]<R[U-1]?$[3]=!1:$[3]=!0;for(var H=[],K=0;K<4;K++)$[K]?H[K]="fa-arrow-up":H[K]="fa-arrow-down";return l.a.createElement(l.a.Fragment,null,l.a.createElement(w.a,null,l.a.createElement(k.a,{active:!0},"India"),l.a.createElement(k.a,null,l.a.createElement(h.b,{to:"/state-wise"},l.a.createElement("small",{className:"text-info"},"State")))),l.a.createElement("div",{className:"container"},l.a.createElement("br",null),l.a.createElement("p",{className:"lead"},l.a.createElement("span",{className:"font-weight-bolder"},"Latest Stats:"),"India"),l.a.createElement("p",null,"Looking for\xa0",l.a.createElement(h.b,{className:"text-info",to:"/state-wise"},"State-Wise"),"\xa0data?"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6 col-md-3 pt-4"},l.a.createElement("button",{onClick:function(){document.getElementById("slide-1").scrollIntoView(!0)},className:"container btn btn-primary"},l.a.createElement("p",null,"".concat(z),l.a.createElement("br",null)," ","".concat(Z[0]),l.a.createElement("i",{className:"fa fa-lg ".concat(H[0])})),l.a.createElement("small",null,"Total"))),l.a.createElement("div",{className:"col-6 col-md-3 pt-4"},l.a.createElement("button",{onClick:function(){document.getElementById("slide-2").scrollIntoView(!0)},className:"container btn btn-danger"},l.a.createElement("p",null,"".concat(q),l.a.createElement("br",null)," ","".concat(Z[1]),l.a.createElement("i",{className:"fa fa-lg ".concat(H[1])})),l.a.createElement("small",null,"Active"))),l.a.createElement("div",{className:"col-6 col-md-3 pt-4 "},l.a.createElement("button",{onClick:function(){document.getElementById("slide-3").scrollIntoView(!0)},className:"container btn btn-success"},l.a.createElement("p",null,"".concat(J),l.a.createElement("br",null)," ","".concat(Z[2]),l.a.createElement("i",{className:"fa fa-lg ".concat(H[2])})),l.a.createElement("small",null,"Recovered"))),l.a.createElement("div",{className:"col-6 col-md-3 pt-4 "},l.a.createElement("button",{onClick:function(){document.getElementById("slide-4").scrollIntoView(!0)},className:"container btn btn-dark"},l.a.createElement("p",null,"".concat(Q),l.a.createElement("br",null)," ","".concat(Z[3]),l.a.createElement("i",{className:"fa fa-lg ".concat(H[3])})),l.a.createElement("small",null,"Deceased")))),l.a.createElement("small",{className:"text-muted"},"Last updated: ".concat(e.cases.lastOriginUpdate)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"slider"},l.a.createElement("div",{className:"slides"},l.a.createElement("div",{id:"btnCompute"},l.a.createElement(O.a,{color:"light",onClick:function(){document.getElementById("btnCompute").remove(),c({labels:x,datasets:[{label:"Total cases",data:W,pointRadius:0,borderWidth:2,borderColor:"blue",backgroundColor:"rgba(0,0,255,0.1)"}]}),m({labels:x,datasets:[{label:"Deceased",data:R,pointRadius:0,borderWidth:2,borderColor:"black"}]}),f({labels:x,datasets:[{label:"Recovered",data:B,pointRadius:0,borderWidth:2,borderColor:"green",backgroundColor:"rgba(0,255,0,0.1)"}]}),j({labels:x,datasets:[{label:"Active Cases",data:G,pointRadius:0,borderWidth:2,borderColor:"red",backgroundColor:"rgba(255,0,0,0.1)"}]}),L({labels:I,datasets:[{label:"Samples Tested",data:V,pointRadius:0,borderWidth:2,borderColor:"orange",backgroundColor:"rgba(253,227,167,0.5)"}]})}},"Compute Graphs")),l.a.createElement("div",{id:"slide-1"},l.a.createElement(N.Line,{data:r})),l.a.createElement("div",{id:"slide-2"},l.a.createElement(N.Line,{data:v})),l.a.createElement("div",{id:"slide-3"},l.a.createElement(N.Line,{data:E})),l.a.createElement("div",{id:"slide-4"},l.a.createElement(N.Line,{data:i})),l.a.createElement("div",{id:"slide-5"},l.a.createElement(N.Line,{data:C}))))))}}function S(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("h3",null,"App Information"),l.a.createElement("p",null,"The App uses ",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://api.rootnet.in/"},"api.rootnet.in")," as backend"),l.a.createElement("p",null,l.a.createElement("bold",null,"Dependencies and Packages used:"),l.a.createElement("br",null),'"axios": "^0.20.0"',l.a.createElement("br",null),'"bootstrap": "^4.5.2"',l.a.createElement("br",null),'"chart.js": "^2.9.3"',l.a.createElement("br",null),'"font-awesome": "^4.7.0"',l.a.createElement("br",null),'"react": "^16.13.1"',l.a.createElement("br",null),'"react-chartjs-2": "^2.10.0"',l.a.createElement("br",null),'"react-dom": "^16.13.1"',l.a.createElement("br",null),'"react-redux": "^7.2.1"',l.a.createElement("br",null),'"react-router-dom": "^5.2.0"',l.a.createElement("br",null),'"react-scripts": "3.4.3"',l.a.createElement("br",null),'"reactstrap": "^8.5.1"',l.a.createElement("br",null),'"redux": "^4.0.5"',l.a.createElement("br",null),'"redux-thunk": "^2.3.0"'),l.a.createElement("h3",null,"Check My Works"),l.a.createElement("div",null,l.a.createElement("a",{rel:"noopener noreferrer",href:"https://github.com/vanssign",target:"_blank",class:"btn"},l.a.createElement("i",{class:"fa fa-lg fa-github","aria-hidden":"true"})),l.a.createElement("a",{rel:"noopener noreferrer",href:"https://behance.net/thindvansh7aab",target:"_blank",class:"btn"},l.a.createElement("i",{class:"fa fa-lg fa-behance","aria-hidden":"true"})),l.a.createElement("a",{rel:"noopener noreferrer",href:"https://lifeviawindow.wordpress.com",target:"_blank",class:"btn"},l.a.createElement("i",{class:"fa fa-lg fa-wordpress","aria-hidden":"true"}))),l.a.createElement("br",null),l.a.createElement("h3",null,"Contact Me"),l.a.createElement("div",null,l.a.createElement("a",{rel:"noopener noreferrer",href:"https://www.facebook.com/singh.vansh1999",target:"_blank",class:"btn btn-social-icon btn-facebook"},l.a.createElement("i",{className:"text-light",class:"fa fa-lg fa-facebook-f","aria-hidden":"true"})),l.a.createElement("a",{rel:"noopener noreferrer",href:"https://in.linkedin.com/in/vansh-singh",target:"_blank",class:"btn btn-linkedin"},l.a.createElement("i",{class:"fa fa-lg fa-linkedin","aria-hidden":"true"})),l.a.createElement("a",{rel:"noopener noreferrer",href:"https://www.instagram.com/vanssign",target:"_blank",class:"btn btn-instagram"},l.a.createElement("i",{class:"fa fa-lg fa-instagram","aria-hidden":"true"})),l.a.createElement("a",{rel:"noopener noreferrer",href:"https://wa.me/918279762669",target:"_blank",class:"btn btn-whatsapp"},l.a.createElement("i",{class:"fa fa-lg fa-whatsapp","aria-hidden":"true"})),l.a.createElement("a",{rel:"noopener noreferrer",href:"mailto:thindvansh1999@gmail.com",target:"_blank",class:"btn"},l.a.createElement("i",{class:"fa fa-lg fa-envelope","aria-hidden":"true"}))),l.a.createElement("br",null),l.a.createElement("br",null))}var y=t(53),C=t.n(y),L=t(84),x=t(7),I=t(229),A=t(230),M=t(231),D=t(232);var _=Object(x.g)((function(e){if(e.isLoading)return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("img",{className:"img-fluid",alt:"LOADING....",src:"https://fuselabcreative.com/wp-content/themes/fuselab/img/loading.gif"}))));if(e.errMess)return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("h4",null,e.errMess)));if(e.news[0]){console.log("props.news[0] is"),console.log(e.news[0]);var a="https://www.imf.org/-/media/Images/IMF/Topics/COVID19/lending-tracker-fullsize-istock-1213355637.ashx?h=1413&w=2122&la=en";e.news[0].media&&(a="".concat(e.news[0].media));var t={title:"".concat(e.news[0].title),text:"Check out covid stats and news at CoVisuals.",url:"https://vanssign.github.io/covid-visuals/#/news/".concat(e.indexCount)};return l.a.createElement("div",{className:"fs-sm-min container"},l.a.createElement("br",null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row border rounded-top"},l.a.createElement("div",{className:"col"},l.a.createElement("button",{to:"/news/0",className:"text-dark btn btn-link"},l.a.createElement("i",{className:"fa fa-lg fa-globe"})," ",l.a.createElement("small",{className:"text-muted"},e.news[0].country),l.a.createElement("div",{className:"make-it-small"},"Change Country"))),l.a.createElement("div",{className:"col"},l.a.createElement("button",{className:"btn btn-link text-dark",onClick:Object(L.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.share(t);case 3:console.log("MDN shared successfully"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("Error: "+e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))},l.a.createElement("i",{className:"fa fa-lg fa-share-alt"}),l.a.createElement("div",{className:"make-it-small"},"Share",l.a.createElement("span",{className:"d-none d-md-block"},"this news")))))),l.a.createElement("div",{className:"border-right border-left bg-light"},l.a.createElement("img",{className:"img-fluid",src:a,alt:"Respresentative"})),l.a.createElement(I.a,{className:"rounded-0"},l.a.createElement(A.a,null,l.a.createElement(M.a,{className:"font-weight-bolder"},e.news[0].title),l.a.createElement(D.a,null,e.news[0].summary),l.a.createElement("small",{className:"text-muted"},"Dated: ",e.news[0].published_date),l.a.createElement("br",null),l.a.createElement("small",{className:"text-info"},"explore next news in\xa0",e.news[0].country,l.a.createElement("br",null),l.a.createElement(h.b,{className:"text-info",to:"/news/".concat(e.indexCount+1)},l.a.createElement("i",{className:"fa fa-chevron-circle-right fa-3x"}))))),l.a.createElement("a",{href:"".concat(e.news[0].link),target:"_blank",rel:"noopener noreferrer",className:"text-reset"},l.a.createElement("div",{className:"bg-dark text-white rounded-bottom"},"Read entire article at\xa0",e.news[0].clean_url," ")),l.a.createElement("br",null))}return l.a.createElement("div",{className:"container text-centre"},l.a.createElement("br",null),"Could not fetch anything from API",l.a.createElement("br",null),l.a.createElement("br",null))})),T=t(35),W="https://api.rootnet.in/covid19-in/stats/",R=t(38),B=t.n(R),G={method:"GET",url:"https://newscatcher.p.rapidapi.com/v1/search_free",params:{q:"Covid",lang:"en",sort_by:"date",page:"1",media:"True"},headers:{"x-rapidapi-key":"3cc37c16e3msh53638f35ab97a9dp1c3953jsn9369dcb421d4","x-rapidapi-host":"newscatcher.p.rapidapi.com"}},V=t(236),F=t(233),P=t(234),U=t(235);function z(e){var a=e.className,t=Object(n.useState)(!0),r=Object(d.a)(t,2),c=r[0],s=r[1],o=Object(n.useState)("None"),i=Object(d.a)(o,2),m=i[0],u=i[1],b=Object(n.useState)([]),E=Object(d.a)(b,2),f=E[0],p=(E[1],Object(n.useState)([])),g=Object(d.a)(p,2),v=g[0],j=(g[1],Object(n.useState)([])),S=Object(d.a)(j,2),y=S[0],C=(S[1],Object(n.useState)(" ")),L=Object(d.a)(C,2),x=L[0],I=L[1],A=Object(n.useState)(" "),M=Object(d.a)(A,2),D=M[0],_=M[1],T=Object(n.useState)(" "),W=Object(d.a)(T,2),R=W[0],B=W[1],G=Object(n.useState)(" "),z=Object(d.a)(G,2),q=z[0],J=z[1],Q=Object(n.useState)({labels:["1","2","3","4","5"],datasets:[{label:"total-cases",data:[1,1,1,1,1]}]}),Z=Object(d.a)(Q,2),$=Z[0],H=Z[1],K=Object(n.useState)({labels:["1","2","3","4","5"],datasets:[{label:"deceased",data:[1,1,1,1,1]}]}),X=Object(d.a)(K,2),Y=X[0],ee=X[1],ae=Object(n.useState)({labels:["1","2","3","4","5"],datasets:[{label:"Recovered",data:[1,1,1,1,1]}]}),te=Object(d.a)(ae,2),ne=te[0],le=te[1],re=Object(n.useState)({labels:["1","2","3","4","5"],datasets:[{label:"active-cases",data:[1,1,1,1,1]}]}),ce=Object(d.a)(re,2),se=ce[0],oe=ce[1],ie=function(){return s(!c)};if(e.isLoading)return l.a.createElement("div",{className:"container-fluid text-center"},l.a.createElement("img",{src:"https://64.media.tumblr.com/30989303b244278454e07c53dd3a47ac/tumblr_nxa257Q6Zh1uzo3myo1_500.gif",className:"img-fluid"}));if(e.errMess)return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("h4",null,e.errMess)));if(null!=e.cases){for(var me,de=[],ue=[],be=0;be<e.cases.data.length;be++){ue[be]="".concat(e.cases.data[be].day);var Ee=ue[be].split("-");de[be]=Ee[2]+"/"+Ee[1]}var fe=[],pe=[],ge=[],he=[],ve=e.cases.data.length-1,Ne=document.getElementsByName("indianstate");return l.a.createElement(l.a.Fragment,null,l.a.createElement(w.a,null,l.a.createElement(k.a,null,l.a.createElement(h.b,{to:"/home",className:"text-info"},"India")),l.a.createElement(k.a,{active:!0},"".concat(m)," ",l.a.createElement("button",{className:"btn btn-link text-info",onClick:ie},l.a.createElement("i",{className:"fa fa-edit"})))),l.a.createElement("div",{className:"container"},l.a.createElement("br",null),l.a.createElement(V.a,{isOpen:c,toggle:ie,className:a},l.a.createElement(F.a,null,l.a.createElement("small",null,"Select a radio button, Press Select State and then Compute Data"),l.a.createElement("br",null),l.a.createElement(O.a,{className:"mr-2",color:"light",onClick:function(){!function(){for(var e=0;e<Ne.length;e++)!0===Ne[e].checked&&u("".concat(Ne[e].value))}()}},"Select State"),l.a.createElement(O.a,{color:"light",onClick:function(){!function(){console.log(m);for(var a=0;a<e.cases.data.length;a++){me=-1;for(var t=0;t<e.cases.data[a].regional.length;t++)if(e.cases.data[a].regional[t].loc===m){me=t;break}-1===me?(fe[a]=0,pe[a]=0,ge[a]=0,he[a]=0):(fe[a]=e.cases.data[a].regional[me].totalConfirmed,pe[a]=e.cases.data[a].regional[me].deaths,ge[a]=e.cases.data[a].regional[me].discharged,he[a]=fe[a]-ge[a]-pe[a])}I(fe[ve]),J(he[ve]),B(ge[ve]),_(pe[ve]),f[0]=Math.abs(fe[ve]-fe[ve-1]),f[1]=Math.abs(he[ve]-he[ve-1]),f[2]=Math.abs(ge[ve]-ge[ve-1]),f[3]=Math.abs(pe[ve]-pe[ve-1]),fe[ve]<fe[ve-1]?v[0]=!1:v[0]=!0,he[ve]<he[ve-1]?v[1]=!1:v[1]=!0,ge[ve]<ge[ve-1]?v[2]=!1:v[2]=!0,pe[ve]<pe[ve-1]?v[3]=!1:v[3]=!0;for(var n=0;n<4;n++)v[n]?y[n]="fa-arrow-up":y[n]="fa-arrow-down";H({labels:de,datasets:[{label:"Total cases",data:fe,pointRadius:0,borderWidth:2,borderColor:"blue",backgroundColor:"rgba(0,0,255,0.1)"}]}),ee({labels:de,datasets:[{label:"Deceased",data:pe,pointRadius:0,borderWidth:2,borderColor:"black"}]}),le({labels:de,datasets:[{label:"Recovered",data:ge,pointRadius:0,borderWidth:2,borderColor:"green",backgroundColor:"rgba(0,255,0,0.1)"}]}),oe({labels:de,datasets:[{label:"Active Cases",data:he,pointRadius:0,borderWidth:2,borderColor:"red",backgroundColor:"rgba(255,0,0,0.1)"}]}),s(!c)}()}},"Compute Data"),l.a.createElement("br",null),l.a.createElement("small",null,"Selected: ",l.a.createElement("span",{className:"text-info font-weight-bolder"},"".concat(m)))),l.a.createElement(P.a,null,e.cases.data[ve].regional.map((function(e,a){return l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{type:"radio",id:"region".concat(a),name:"indianstate",value:e.loc}),l.a.createElement("label",{for:"region".concat(a)},e.loc),l.a.createElement("br",null))}))),l.a.createElement(U.a,null," "," ")),l.a.createElement("p",{className:"lead"},l.a.createElement("span",{className:"font-weight-bolder"},"Latest Stats:")," ","".concat(m)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6 col-md-3 pt-4"},l.a.createElement("button",{className:"container btn btn-primary",onClick:function(){document.getElementById("slide-1").scrollIntoView(!0)}},l.a.createElement("p",null,"".concat(x),l.a.createElement("br",null),"".concat(f[0])," ",l.a.createElement("i",{className:"fa fa-lg ".concat(y[0])})),l.a.createElement("small",null,"Total"))),l.a.createElement("div",{className:"col-6 col-md-3 pt-4"},l.a.createElement("button",{className:"container btn btn-danger",onClick:function(){document.getElementById("slide-2").scrollIntoView(!0)}},l.a.createElement("p",null,"".concat(q),l.a.createElement("br",null),"".concat(f[1])," ",l.a.createElement("i",{className:"fa fa-lg ".concat(y[1])})),l.a.createElement("small",null,"Active"))),l.a.createElement("div",{className:"col-6 col-md-3 pt-4"},l.a.createElement("button",{className:"container btn btn-success",onClick:function(){document.getElementById("slide-3").scrollIntoView(!0)}},l.a.createElement("p",null,"".concat(R)," ",l.a.createElement("br",null),"".concat(f[2])," ",l.a.createElement("i",{className:"fa fa-lg ".concat(y[2])})),l.a.createElement("small",null,"Recovered"))),l.a.createElement("div",{className:"col-6 col-md-3 pt-4"},l.a.createElement("button",{className:"container btn btn-dark",onClick:function(){document.getElementById("slide-4").scrollIntoView(!0)}},l.a.createElement("p",null,"".concat(D),l.a.createElement("br",null),"".concat(f[3])," ",l.a.createElement("i",{className:"fa fa-lg ".concat(y[3])})),l.a.createElement("small",null,"Deceased")))),l.a.createElement("small",{className:"text-muted"},"Last updated: ".concat(e.cases.lastOriginUpdate)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"slider"},l.a.createElement("div",{className:"slides"},l.a.createElement("div",{id:"slide-1"},l.a.createElement(N.Line,{data:$})),l.a.createElement("div",{id:"slide-2"},l.a.createElement(N.Line,{data:se})),l.a.createElement("div",{id:"slide-3"},l.a.createElement(N.Line,{data:ne})),l.a.createElement("div",{id:"slide-4"},l.a.createElement(N.Line,{data:Y}))))))}}var q=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchCases(),this.props.fetchTests(),this.props.fetchNews()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement(x.d,null,l.a.createElement(x.b,{exact:!0,path:"/home",component:function(){return l.a.createElement(j,{cases:e.props.cases.cases,isLoading:e.props.cases.isLoading,errMess:e.props.cases.errMess,tests:e.props.tests.tests,testsisLoading:e.props.tests.isLoading,testserrMess:e.props.tests.errMess})}}),l.a.createElement(x.b,{exact:!0,path:"/state-wise",component:function(){return l.a.createElement(z,{cases:e.props.cases.cases,isLoading:e.props.cases.isLoading,errMess:e.props.cases.errMess})}}),l.a.createElement(x.b,{exact:!0,path:"/about",component:function(){return l.a.createElement(S,null)}}),l.a.createElement(x.b,{path:"/news/:newsId",component:function(a){var t=a.match;return l.a.createElement(_,{indexCount:parseInt(t.params.newsId,10),news:e.props.news.news.filter((function(e,a){return a==[parseInt(t.params.newsId,10)]})),isLoading:e.props.news.isLoading,errMess:e.props.news.errMess})},defaultParams:{newsId:0}}),l.a.createElement(x.a,{to:"/home"})))}}]),t}(n.Component),J=Object(x.g)(Object(T.b)((function(e){return{cases:e.cases,tests:e.tests,news:e.news}}),(function(e){return{fetchCases:function(){return e((function(e){return e({type:"CASES_LOADING"}),B.a.get(W+"history/data").then((function(a){return e({type:"ADD_CASES",payload:a.data})})).catch((function(a){e({type:"CASES_LOADING"});var t="Error: "+a.message;return e(function(e){return{type:"CASES_FAILED",payload:e}}(t))}))}))},fetchTests:function(){return e((function(e){return e({type:"TESTS_LOADING"}),B.a.get(W+"testing/history/data").then((function(a){return e({type:"ADD_TESTS",payload:a.data})})).catch((function(a){e({type:"TESTS_LOADING"});var t="Error: "+a.message;return e(function(e){return{type:"TESTS_FAILED",payload:e}}(t))}))}))},fetchNews:function(){return e((function(e){return e({type:"NEWS_LOADING"}),B.a.request(G).then((function(a){return e({type:"ADD_NEWS",payload:a.data.articles})})).catch((function(a){e({type:"NEWS_LOADING"});var t="Error: "+a.message;return e(function(e){return{type:"NEWS_FAILED",payload:e}}(t))}))}))}}}))(q)),Q=(t(218),t(22)),Z=t(9),$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,cases:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_CASES":return Object(Z.a)(Object(Z.a)({},e),{},{isLoading:!1,errMess:null,cases:a.payload});case"CASES_LOADING":return Object(Z.a)(Object(Z.a)({},e),{},{isLoading:!0,errMess:null,cases:[]});case"CASES_FAILED":return Object(Z.a)(Object(Z.a)({},e),{},{isLoading:!1,errMess:a.payload,cases:[]});default:return e}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,tests:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_TESTS":return Object(Z.a)(Object(Z.a)({},e),{},{isLoading:!1,errMess:null,tests:a.payload});case"TESTS_LOADING":return Object(Z.a)(Object(Z.a)({},e),{},{isLoading:!0,errMess:null,tests:[]});case"TESTS_FAILED":return Object(Z.a)(Object(Z.a)({},e),{},{isLoading:!1,errMess:a.payload,tests:[]});default:return e}},K=t(86),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,news:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_NEWS":return Object(Z.a)(Object(Z.a)({},e),{},{isLoading:!1,errMess:null,news:a.payload});case"NEWS_LOADING":return Object(Z.a)(Object(Z.a)({},e),{},{isLoading:!0,errMess:null,news:[]});case"NEWS_FAILED":return Object(Z.a)(Object(Z.a)({},e),{},{isLoading:!1,errMess:a.payload,news:[]});default:return e}},Y=Object(Q.d)(Object(Q.c)({cases:$,tests:H,news:X}),Object(Q.a)(K.a)),ee=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(T.a,{store:Y},l.a.createElement(h.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(J,null))))}}]),t}(n.Component),ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function te(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ee,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/covid-visuals",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/covid-visuals","/service-worker.js");ae?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):te(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):te(a,e)}))}}()},87:function(e,a,t){e.exports=t(219)},94:function(e,a,t){}},[[87,1,2]]]);
//# sourceMappingURL=main.3d4379ed.chunk.js.map