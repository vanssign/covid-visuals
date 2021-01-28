(this["webpackJsonpcovid-visualisation"]=this["webpackJsonpcovid-visualisation"]||[]).push([[0],{224:function(e,a,t){},225:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(20),c=t.n(r),s=(t(96),t(97),t(98),t(35)),o=t(36),m=t(39),i=t(38),d=t(8),u=t(226),E=t(227),b=t(228),g=t(229),f=t(230),p=t(231),h=t(12),v=function(e){var a=Object(n.useState)(!1),t=Object(d.a)(a,2),r=t[0],c=t[1];return l.a.createElement("div",null,l.a.createElement(u.a,{dark:!0,className:"bg-grad",expand:"xs"},l.a.createElement(E.a,{to:"/"},"CoVisuals"),l.a.createElement(b.a,{onClick:function(){return c(!r)}}),l.a.createElement(g.a,{isOpen:r,navbar:!0},l.a.createElement(f.a,{navbar:!0},l.a.createElement(p.a,null,l.a.createElement(h.c,{className:"nav-link",to:"/home"},l.a.createElement("i",{className:"fa fa-bar-chart fa-2x"}),l.a.createElement("br",null),l.a.createElement("span",{className:"make-it-small"},"stats"))),l.a.createElement(p.a,null,l.a.createElement(h.c,{className:"nav-link",strict:!0,to:"/news/"},l.a.createElement("i",{className:"fa fa-newspaper-o fa-2x"}),l.a.createElement("br",null),l.a.createElement("span",{className:"make-it-small"},"news"))),l.a.createElement(p.a,null,l.a.createElement(h.c,{className:"nav-link",to:"/about"},l.a.createElement("i",{className:"fa fa-info-circle fa-2x"}),l.a.createElement("br",null),l.a.createElement("span",{className:"make-it-small"},"about")))))))},N=t(15),w=t(4),k=t.n(w);function O(e){Object(n.useEffect)((function(){null!=e.cases&&null!=e.tests&&(c({labels:S,datasets:[{label:"Total cases",data:_,pointRadius:0,borderWidth:2,borderColor:"#2980b9",backgroundColor:"rgba(0,0,255,0.1)"}]}),i({labels:S,datasets:[{label:"Deceased",data:T,pointRadius:0,borderWidth:2,borderColor:"black"}]}),g({labels:S,datasets:[{label:"Recovered",data:W,pointRadius:0,borderWidth:2,borderColor:"green",backgroundColor:"rgba(0,255,0,0.1)"}]}),w({labels:S,datasets:[{label:"Active Cases",data:R,pointRadius:0,borderWidth:2,borderColor:"red",backgroundColor:"rgba(255,0,0,0.1)"}]}),x({labels:C,datasets:[{label:"Samples Tested",data:F,pointRadius:0,borderWidth:2,borderColor:"orange",backgroundColor:"rgba(253,227,167,0.5)"}]}))}),[]);var a=Object(n.useState)({labels:[],datasets:[{label:"deceased",data:[]}]}),t=Object(d.a)(a,2),r=t[0],c=t[1],s=Object(n.useState)({labels:[],datasets:[{label:"deceased",data:[]}]}),o=Object(d.a)(s,2),m=o[0],i=o[1],u=Object(n.useState)({labels:[],datasets:[{label:"deceased",data:[]}]}),E=Object(d.a)(u,2),b=E[0],g=E[1],f=Object(n.useState)({labels:[],datasets:[{label:"deceased",data:[]}]}),p=Object(d.a)(f,2),v=p[0],w=p[1],O=Object(n.useState)({labels:[],datasets:[{label:"deceased",data:[]}]}),j=Object(d.a)(O,2),y=j[0],x=j[1];if(e.isLoading||e.testsisLoading)return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"bg-grad text-white"},l.a.createElement(k.a,null)),l.a.createElement("div",{className:"container"},l.a.createElement("br",null),l.a.createElement("p",{className:"lead"},l.a.createElement("span",{className:"font-weight-bolder"}),l.a.createElement(k.a,null)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6 col-md-3 pt-4"},l.a.createElement("button",{className:"container btn bg-primary-grad text-white"},l.a.createElement("p",null,l.a.createElement(k.a,null),l.a.createElement("br",null),l.a.createElement(k.a,null)),l.a.createElement("small",null,l.a.createElement(k.a,null)))),l.a.createElement("div",{className:"col-6 col-md-3 pt-4"},l.a.createElement("button",{className:"container btn bg-danger-grad text-white"},l.a.createElement("p",null,l.a.createElement(k.a,null),l.a.createElement("br",null),l.a.createElement(k.a,null)),l.a.createElement("small",null,l.a.createElement(k.a,null)))),l.a.createElement("div",{className:"col-6 col-md-3 pt-4 "},l.a.createElement("button",{className:"container btn bg-success-grad text-white"},l.a.createElement("p",null,l.a.createElement(k.a,null),l.a.createElement("br",null),l.a.createElement(k.a,null)),l.a.createElement("small",null,l.a.createElement(k.a,null)))),l.a.createElement("div",{className:"col-6 col-md-3 pt-4 "},l.a.createElement("button",{className:"container btn bg-dark-grad text-white"},l.a.createElement("p",null,l.a.createElement(k.a,null),l.a.createElement("br",null),l.a.createElement(k.a,null)),l.a.createElement("small",null,l.a.createElement(k.a,null))))),l.a.createElement("small",{className:"text-muted"},l.a.createElement(k.a,null)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"slider"},l.a.createElement("div",{className:"slides"},l.a.createElement("div",{id:"slide-1"},l.a.createElement(N.Line,{data:r}))))));if(e.errMess)return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("h4",null,e.errMess)));if(e.testserrMess)return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("h4",null,e.testserrMess)));if(null!=e.cases&&null!=e.tests){for(var S=[],C=[],L=[],I=[],M=0;M<e.cases.data.length;M++){L[M]="".concat(e.cases.data[M].day);var A=L[M].split("-");S[M]=A[2]+"/"+A[1]}for(var D=0;D<e.tests.data.length;D++){I[D]="".concat(e.tests.data[D].day);A=I[D].split("-");C[D]=A[2]+"/"+A[1]}for(var _=[],T=[],W=[],R=[],F=[],B=0;B<e.cases.data.length;B++)_[B]=e.cases.data[B].summary.total,T[B]=e.cases.data[B].summary.deaths,W[B]=e.cases.data[B].summary.discharged,R[B]=_[B]-W[B]-T[B];for(var V=0;V<e.tests.data.length;V++)F[V]=e.tests.data[V].totalSamplesTested;var G=e.cases.data.length-1,P=_[G],U=R[G],q=W[G],z=T[G],J=[];J[0]=Math.abs(_[G]-_[G-1]),J[1]=Math.abs(R[G]-R[G-1]),J[2]=Math.abs(W[G]-W[G-1]),J[3]=Math.abs(T[G]-T[G-1]);var H=[];_[G]<_[G-1]?H[0]=!1:H[0]=!0,R[G]<R[G-1]?H[1]=!1:H[1]=!0,W[G]<W[G-1]?H[2]=!1:H[2]=!0,T[G]<T[G-1]?H[3]=!1:H[3]=!0;for(var X=[],Y=0;Y<4;Y++)H[Y]?X[Y]="fa-arrow-up":X[Y]="fa-arrow-down";return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"bg-grad text-white"},"India ",l.a.createElement("i",{className:"fa fa-chevron-right"})," ",l.a.createElement(h.b,{to:"/home/state-wise",className:"text-white"},l.a.createElement("small",null,"Set State"))),l.a.createElement("div",{className:"container"},l.a.createElement("br",null),l.a.createElement("p",{className:"lead"},l.a.createElement("span",{className:"font-weight-bolder"},"Latest Stats:"),"India"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6 col-md-3 pt-4"},l.a.createElement("button",{onClick:function(){document.getElementById("slide-1").scrollIntoView(!0)},className:"container btn bg-primary-grad text-white"},l.a.createElement("p",null,"".concat(P),l.a.createElement("br",null)," ","".concat(J[0]),l.a.createElement("i",{className:"fa fa-lg ".concat(X[0])})),l.a.createElement("small",null,"Total"))),l.a.createElement("div",{className:"col-6 col-md-3 pt-4"},l.a.createElement("button",{onClick:function(){document.getElementById("slide-2").scrollIntoView(!0)},className:"container btn bg-danger-grad text-white"},l.a.createElement("p",null,"".concat(U),l.a.createElement("br",null)," ","".concat(J[1]),l.a.createElement("i",{className:"fa fa-lg ".concat(X[1])})),l.a.createElement("small",null,"Active"))),l.a.createElement("div",{className:"col-6 col-md-3 pt-4 "},l.a.createElement("button",{onClick:function(){document.getElementById("slide-3").scrollIntoView(!0)},className:"container btn bg-success-grad text-white"},l.a.createElement("p",null,"".concat(q),l.a.createElement("br",null)," ","".concat(J[2]),l.a.createElement("i",{className:"fa fa-lg ".concat(X[2])})),l.a.createElement("small",null,"Recovered"))),l.a.createElement("div",{className:"col-6 col-md-3 pt-4 "},l.a.createElement("button",{onClick:function(){document.getElementById("slide-4").scrollIntoView(!0)},className:"container btn bg-dark-grad text-white"},l.a.createElement("p",null,"".concat(z),l.a.createElement("br",null)," ","".concat(J[3]),l.a.createElement("i",{className:"fa fa-lg ".concat(X[3])})),l.a.createElement("small",null,"Deceased")))),l.a.createElement("small",{className:"text-muted"},"Last updated: ".concat(e.cases.lastOriginUpdate)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"slider"},l.a.createElement("div",{className:"slides"},l.a.createElement("div",{id:"slide-1"},l.a.createElement(N.Line,{data:r})),l.a.createElement("div",{id:"slide-2"},l.a.createElement(N.Line,{data:v})),l.a.createElement("div",{id:"slide-3"},l.a.createElement(N.Line,{data:b})),l.a.createElement("div",{id:"slide-4"},l.a.createElement(N.Line,{data:m})),l.a.createElement("div",{id:"slide-5"},l.a.createElement(N.Line,{data:y}))))))}}function j(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("h3",null,"App Information"),l.a.createElement("p",null,"The App uses ",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://api.rootnet.in/"},"api.rootnet.in")," as backend"),l.a.createElement("p",null,l.a.createElement("bold",null,"Dependencies and Packages used:"),l.a.createElement("br",null),'"axios": "^0.20.0"',l.a.createElement("br",null),'"bootstrap": "^4.5.2"',l.a.createElement("br",null),'"chart.js": "^2.9.3"',l.a.createElement("br",null),'"font-awesome": "^4.7.0"',l.a.createElement("br",null),'"react": "^16.13.1"',l.a.createElement("br",null),'"react-chartjs-2": "^2.10.0"',l.a.createElement("br",null),'"react-dom": "^16.13.1"',l.a.createElement("br",null),'"react-redux": "^7.2.1"',l.a.createElement("br",null),'"react-router-dom": "^5.2.0"',l.a.createElement("br",null),'"react-scripts": "3.4.3"',l.a.createElement("br",null),'"reactstrap": "^8.5.1"',l.a.createElement("br",null),'"redux": "^4.0.5"',l.a.createElement("br",null),'"redux-thunk": "^2.3.0"'),l.a.createElement("h3",null,"Check My Works"),l.a.createElement("div",null,l.a.createElement("a",{rel:"noopener noreferrer",href:"https://github.com/vanssign",target:"_blank",class:"btn"},l.a.createElement("i",{class:"fa fa-lg fa-github","aria-hidden":"true"})),l.a.createElement("a",{rel:"noopener noreferrer",href:"https://behance.net/thindvansh7aab",target:"_blank",class:"btn"},l.a.createElement("i",{class:"fa fa-lg fa-behance","aria-hidden":"true"})),l.a.createElement("a",{rel:"noopener noreferrer",href:"https://lifeviawindow.wordpress.com",target:"_blank",class:"btn"},l.a.createElement("i",{class:"fa fa-lg fa-wordpress","aria-hidden":"true"}))),l.a.createElement("br",null),l.a.createElement("h3",null,"Contact Me"),l.a.createElement("div",null,l.a.createElement("a",{rel:"noopener noreferrer",href:"https://www.facebook.com/singh.vansh1999",target:"_blank",class:"btn btn-social-icon btn-facebook"},l.a.createElement("i",{className:"text-light",class:"fa fa-lg fa-facebook-f","aria-hidden":"true"})),l.a.createElement("a",{rel:"noopener noreferrer",href:"https://in.linkedin.com/in/vansh-singh",target:"_blank",class:"btn btn-linkedin"},l.a.createElement("i",{class:"fa fa-lg fa-linkedin","aria-hidden":"true"})),l.a.createElement("a",{rel:"noopener noreferrer",href:"https://www.instagram.com/vanssign",target:"_blank",class:"btn btn-instagram"},l.a.createElement("i",{class:"fa fa-lg fa-instagram","aria-hidden":"true"})),l.a.createElement("a",{rel:"noopener noreferrer",href:"https://wa.me/918279762669",target:"_blank",class:"btn btn-whatsapp"},l.a.createElement("i",{class:"fa fa-lg fa-whatsapp","aria-hidden":"true"})),l.a.createElement("a",{rel:"noopener noreferrer",href:"mailto:thindvansh1999@gmail.com",target:"_blank",class:"btn"},l.a.createElement("i",{class:"fa fa-lg fa-envelope","aria-hidden":"true"}))),l.a.createElement("br",null),l.a.createElement("br",null))}var y=t(54),x=t.n(y),S=t(88),C=t(9);var L=Object(C.g)((function(e){if(e.isLoading)return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"fs-sm-min container"},l.a.createElement("br",null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row border rounded-top"},l.a.createElement("div",{className:"col"},l.a.createElement("button",{to:"/news/0",className:"text-dark btn btn-link",disabled:!0},l.a.createElement("i",{className:"fa fa-lg fa-globe"})," ",l.a.createElement("small",{className:"text-muted"}),l.a.createElement("div",{className:"make-it-small"},l.a.createElement(k.a,null)))),l.a.createElement("div",{className:"col"},l.a.createElement("button",{className:"btn btn-link text-dark"},l.a.createElement("i",{className:"fa fa-lg fa-share-alt"}),l.a.createElement("div",{className:"make-it-small"},l.a.createElement(k.a,null)))))),l.a.createElement("div",{className:"border-right border-left bg-light",style:{minHeight:250}},l.a.createElement(k.a,{height:250})),l.a.createElement("div",{className:" border-right border-left rounded-0 p-4"},l.a.createElement("div",null,l.a.createElement("div",{className:"font-weight-bolder p-2"},l.a.createElement(k.a,null)),l.a.createElement("div",null,l.a.createElement(k.a,{count:7})),l.a.createElement("small",{className:"text-muted"},l.a.createElement(k.a,null)),l.a.createElement("br",null),l.a.createElement("small",{className:"text-info"},l.a.createElement(k.a,null),l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-chevron-circle-right fa-3x"})))),l.a.createElement("div",{className:"bg-dark text-white rounded-bottom"},l.a.createElement(k.a,{width:100})),l.a.createElement("br",null)));if(e.errMess)return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("h4",null,e.errMess)));if(e.news[0]){console.log("props.news[0] is"),console.log(e.news[0]);var a="https://www.imf.org/-/media/Images/IMF/Topics/COVID19/lending-tracker-fullsize-istock-1213355637.ashx?h=1413&w=2122&la=en",t=a;e.news[0].media&&(t="".concat(e.news[0].media));var n={title:"".concat(e.news[0].title),text:"".concat(e.news[0].title,". Check out latest covid stats and news at CoVisuals."),url:"https://vanssign.github.io/covid-visuals/"};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"fs-sm-min container"},l.a.createElement("br",null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row border rounded-top"},l.a.createElement("div",{className:"col"},l.a.createElement("button",{to:"/news/0",className:"text-dark btn btn-link",disabled:!0},l.a.createElement("i",{className:"fa fa-lg fa-globe"})," ",l.a.createElement("small",{className:"text-muted"},e.news[0].country),l.a.createElement("div",{className:"make-it-small"},"Country"))),l.a.createElement("div",{className:"col"},l.a.createElement("button",{className:"btn btn-link text-dark",onClick:Object(S.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.share(n);case 3:console.log("MDN shared successfully"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("Error: "+e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))},l.a.createElement("i",{className:"fa fa-lg fa-share-alt"}),l.a.createElement("div",{className:"make-it-small"},"Share",l.a.createElement("span",{className:"d-none d-md-block"},"this news")))))),l.a.createElement("div",{id:"imageRContainer",className:"border-right border-left",style:{height:250,overflowY:"hidden",overflowX:"hidden",background:"linear-gradient(0deg, rgba(2,173,231,0.5), rgba(2,173,231,0.5)),url(".concat(t,")"),backgroundSize:"cover"}},l.a.createElement("img",{id:"imageR",src:t,style:{objectFit:"fill",height:250},onError:function(){document.getElementById("imageR").src=a,document.getElementById("imageRContainer").style.backgroundImage="url(".concat(a,")")}})),l.a.createElement("div",{className:"border-right border-left rounded-0 p-4"},l.a.createElement("div",null,l.a.createElement("div",{className:"text-left font-weight-bolder py-2"},e.news[0].title||l.a.createElement(k.a,null)),l.a.createElement("div",{className:"text-left"},e.news[0].summary||l.a.createElement(k.a,null)),l.a.createElement("small",{className:"text-muted"},"Dated: ",e.news[0].published_date),l.a.createElement("br",null),l.a.createElement("small",{className:"text-info"},"explore next news in\xa0",e.news[0].country,l.a.createElement("br",null),l.a.createElement(h.b,{className:"text-info",to:"/news/".concat(e.indexCount+1)},l.a.createElement("i",{className:"fa fa-chevron-circle-right fa-3x"}))))),l.a.createElement("a",{href:"".concat(e.news[0].link),target:"_blank",rel:"noopener noreferrer",className:"text-reset"},l.a.createElement("div",{className:"bg-dark text-white px-4 text-left rounded-bottom"},"Read entire article at ",l.a.createElement("br",null),e.news[0].clean_url||l.a.createElement(k.a,null)," ")),l.a.createElement("br",null)))}return l.a.createElement("div",{className:"container text-center"},l.a.createElement("br",null),"Could not fetch anything from API",l.a.createElement("br",null),l.a.createElement("br",null))})),I=t(37),M="https://api.rootnet.in/covid19-in/stats/",A=t(40),D=t.n(A),_={method:"GET",url:"https://newscatcher.p.rapidapi.com/v1/search_free",params:{q:"Covid",lang:"en",sort_by:"date",page:"1",media:"True"},headers:{"x-rapidapi-key":"3cc37c16e3msh53638f35ab97a9dp1c3953jsn9369dcb421d4","x-rapidapi-host":"newscatcher.p.rapidapi.com"}},T=t(27),W=t(236),R=t(232),F=t(233),B=t(234),V=t(235);function G(e){var a=e.className,t=Object(n.useState)(!0),r=Object(d.a)(t,2),c=r[0],s=r[1],o=Object(n.useState)("None"),m=Object(d.a)(o,2),i=m[0],u=m[1],E=Object(n.useState)([]),b=Object(d.a)(E,2),g=b[0],f=(b[1],Object(n.useState)([])),p=Object(d.a)(f,2),v=p[0],w=(p[1],Object(n.useState)([])),O=Object(d.a)(w,2),j=O[0],y=(O[1],Object(n.useState)(" ")),x=Object(d.a)(y,2),S=x[0],C=x[1],L=Object(n.useState)(" "),I=Object(d.a)(L,2),M=I[0],A=I[1],D=Object(n.useState)(" "),_=Object(d.a)(D,2),G=_[0],P=_[1],U=Object(n.useState)(" "),q=Object(d.a)(U,2),z=q[0],J=q[1],H=Object(n.useState)({bels:[],datasets:[{label:"deceased",data:[]}]}),X=Object(d.a)(H,2),Y=X[0],$=X[1],K=Object(n.useState)({bels:[],datasets:[{label:"deceased",data:[]}]}),Q=Object(d.a)(K,2),Z=Q[0],ee=Q[1],ae=Object(n.useState)({bels:[],datasets:[{label:"deceased",data:[]}]}),te=Object(d.a)(ae,2),ne=te[0],le=te[1],re=Object(n.useState)({bels:[],datasets:[{label:"deceased",data:[]}]}),ce=Object(d.a)(re,2),se=ce[0],oe=ce[1],me=function(){return s(!c)};if(e.isLoading)return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"bg-grad text-white"},l.a.createElement(k.a,null)),l.a.createElement("div",{className:"container"},l.a.createElement("br",null),l.a.createElement("p",{className:"lead"},l.a.createElement("span",{className:"font-weight-bolder"}),l.a.createElement(k.a,null)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6 col-md-3 pt-4"},l.a.createElement("button",{className:"container btn bg-primary-grad text-white"},l.a.createElement("p",null,l.a.createElement(k.a,null),l.a.createElement("br",null),l.a.createElement(k.a,null)),l.a.createElement("small",null,l.a.createElement(k.a,null)))),l.a.createElement("div",{className:"col-6 col-md-3 pt-4"},l.a.createElement("button",{className:"container btn bg-danger-grad text-white"},l.a.createElement("p",null,l.a.createElement(k.a,null),l.a.createElement("br",null),l.a.createElement(k.a,null)),l.a.createElement("small",null,l.a.createElement(k.a,null)))),l.a.createElement("div",{className:"col-6 col-md-3 pt-4 "},l.a.createElement("button",{className:"container btn bg-success-grad text-white"},l.a.createElement("p",null,l.a.createElement(k.a,null),l.a.createElement("br",null),l.a.createElement(k.a,null)),l.a.createElement("small",null,l.a.createElement(k.a,null)))),l.a.createElement("div",{className:"col-6 col-md-3 pt-4 "},l.a.createElement("button",{className:"container btn bg-dark-grad text-white"},l.a.createElement("p",null,l.a.createElement(k.a,null),l.a.createElement("br",null),l.a.createElement(k.a,null)),l.a.createElement("small",null,l.a.createElement(k.a,null))))),l.a.createElement("small",{className:"text-muted"},l.a.createElement(l.a.Fragment,null,"`Last updated`",l.a.createElement(k.a,null))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"slider"},l.a.createElement("div",{className:"slides"},l.a.createElement("div",{id:"slide-1"},l.a.createElement(N.Line,{data:Y}))))));if(e.errMess)return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("h4",null,e.errMess)));if(null!=e.cases){for(var ie,de,ue=[],Ee=[],be=0;be<e.cases.data.length;be++){Ee[be]="".concat(e.cases.data[be].day);var ge=Ee[be].split("-");ue[be]=ge[2]+"/"+ge[1]}var fe=[],pe=[],he=[],ve=[],Ne=e.cases.data.length-1,we=document.getElementsByName("indianstate");return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"bg-grad text-white"},l.a.createElement(h.b,{to:"/home",className:"text-white"},"India")," ",l.a.createElement("i",{className:"fa fa-chevron-right"})," ","".concat(i)," ",l.a.createElement("button",{className:"btn btn-link text-white",onClick:me},l.a.createElement("i",{className:"fa fa-edit"}))),l.a.createElement("div",{className:"container"},l.a.createElement("br",null),l.a.createElement(W.a,{isOpen:c,toggle:me,className:a},l.a.createElement(R.a,null,l.a.createElement("small",null,"Select a radio button, Press Select State and then Compute Data"),l.a.createElement("br",null),l.a.createElement(F.a,(ie={className:"mr-2"},Object(T.a)(ie,"className","bg-grad text-white"),Object(T.a)(ie,"onClick",(function(){!function(){for(var e=0;e<we.length;e++)!0===we[e].checked&&u("".concat(we[e].value))}()})),ie),"Select State")," ","\xa0",l.a.createElement(F.a,{className:"bg-grad text-white",onClick:function(){!function(){console.log(i);for(var a=0;a<e.cases.data.length;a++){de=-1;for(var t=0;t<e.cases.data[a].regional.length;t++)if(e.cases.data[a].regional[t].loc===i){de=t;break}-1===de?(fe[a]=0,pe[a]=0,he[a]=0,ve[a]=0):(fe[a]=e.cases.data[a].regional[de].totalConfirmed,pe[a]=e.cases.data[a].regional[de].deaths,he[a]=e.cases.data[a].regional[de].discharged,ve[a]=fe[a]-he[a]-pe[a])}C(fe[Ne]),J(ve[Ne]),P(he[Ne]),A(pe[Ne]),g[0]=Math.abs(fe[Ne]-fe[Ne-1]),g[1]=Math.abs(ve[Ne]-ve[Ne-1]),g[2]=Math.abs(he[Ne]-he[Ne-1]),g[3]=Math.abs(pe[Ne]-pe[Ne-1]),fe[Ne]<fe[Ne-1]?v[0]=!1:v[0]=!0,ve[Ne]<ve[Ne-1]?v[1]=!1:v[1]=!0,he[Ne]<he[Ne-1]?v[2]=!1:v[2]=!0,pe[Ne]<pe[Ne-1]?v[3]=!1:v[3]=!0;for(var n=0;n<4;n++)v[n]?j[n]="fa-arrow-up":j[n]="fa-arrow-down";$({labels:ue,datasets:[{label:"Total cases",data:fe,pointRadius:0,borderWidth:2,borderColor:"#2980b9",backgroundColor:"rgba(0,0,255,0.1)"}]}),ee({labels:ue,datasets:[{label:"Deceased",data:pe,pointRadius:0,borderWidth:2,borderColor:"black"}]}),le({labels:ue,datasets:[{label:"Recovered",data:he,pointRadius:0,borderWidth:2,borderColor:"green",backgroundColor:"rgba(0,255,0,0.1)"}]}),oe({labels:ue,datasets:[{label:"Active Cases",data:ve,pointRadius:0,borderWidth:2,borderColor:"red",backgroundColor:"rgba(255,0,0,0.1)"}]}),s(!c)}()}},"Compute Data"),l.a.createElement("br",null),l.a.createElement("small",null,"Selected:"," ",l.a.createElement("span",{className:"text-info font-weight-bolder"},"".concat(i)))),l.a.createElement(B.a,null,e.cases.data[Ne].regional.map((function(e,a){return l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{type:"radio",id:"region".concat(a),name:"indianstate",value:e.loc}),l.a.createElement("label",{for:"region".concat(a)},e.loc),l.a.createElement("br",null))}))),l.a.createElement(V.a,null," ")),l.a.createElement("p",{className:"lead"},l.a.createElement("span",{className:"font-weight-bolder"},"Latest Stats:")," ","".concat(i)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6 col-md-3 pt-4"},l.a.createElement("button",{className:"container btn bg-primary-grad text-white",onClick:function(){document.getElementById("slide-1").scrollIntoView(!0)}},l.a.createElement("p",null,"".concat(S),l.a.createElement("br",null),"".concat(g[0])," ",l.a.createElement("i",{className:"fa fa-lg ".concat(j[0])})),l.a.createElement("small",null,"Total"))),l.a.createElement("div",{className:"col-6 col-md-3 pt-4"},l.a.createElement("button",{className:"container btn bg-danger-grad text-white",onClick:function(){document.getElementById("slide-2").scrollIntoView(!0)}},l.a.createElement("p",null,"".concat(z),l.a.createElement("br",null),"".concat(g[1])," ",l.a.createElement("i",{className:"fa fa-lg ".concat(j[1])})),l.a.createElement("small",null,"Active"))),l.a.createElement("div",{className:"col-6 col-md-3 pt-4"},l.a.createElement("button",{className:"container btn bg-success-grad text-white",onClick:function(){document.getElementById("slide-3").scrollIntoView(!0)}},l.a.createElement("p",null,"".concat(G)," ",l.a.createElement("br",null),"".concat(g[2])," ",l.a.createElement("i",{className:"fa fa-lg ".concat(j[2])})),l.a.createElement("small",null,"Recovered"))),l.a.createElement("div",{className:"col-6 col-md-3 pt-4"},l.a.createElement("button",{className:"container btn bg-dark-grad text-white",onClick:function(){document.getElementById("slide-4").scrollIntoView(!0)}},l.a.createElement("p",null,"".concat(M),l.a.createElement("br",null),"".concat(g[3])," ",l.a.createElement("i",{className:"fa fa-lg ".concat(j[3])})),l.a.createElement("small",null,"Deceased")))),l.a.createElement("small",{className:"text-muted"},"Last updated: ".concat(e.cases.lastOriginUpdate)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"slider"},l.a.createElement("div",{className:"slides"},l.a.createElement("div",{id:"slide-1"},l.a.createElement(N.Line,{data:Y})),l.a.createElement("div",{id:"slide-2"},l.a.createElement(N.Line,{data:se})),l.a.createElement("div",{id:"slide-3"},l.a.createElement(N.Line,{data:ne})),l.a.createElement("div",{id:"slide-4"},l.a.createElement(N.Line,{data:Z}))))))}}var P=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchCases(),this.props.fetchTests(),this.props.fetchNews()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement(C.d,null,l.a.createElement(C.b,{exact:!0,path:"/home",component:function(){return l.a.createElement(O,{cases:e.props.cases.cases,isLoading:e.props.cases.isLoading,errMess:e.props.cases.errMess,tests:e.props.tests.tests,testsisLoading:e.props.tests.isLoading,testserrMess:e.props.tests.errMess})}}),l.a.createElement(C.b,{path:"/home/state-wise",component:function(){return l.a.createElement(G,{cases:e.props.cases.cases,isLoading:e.props.cases.isLoading,errMess:e.props.cases.errMess})}}),l.a.createElement(C.b,{exact:!0,path:"/about",component:function(){return l.a.createElement(j,null)}}),l.a.createElement(C.b,{path:"/news/:newsId",component:function(a){var t=a.match;return l.a.createElement(L,{indexCount:parseInt(t.params.newsId,10),news:e.props.news.news.filter((function(e,a){return a==[parseInt(t.params.newsId,10)]})),isLoading:e.props.news.isLoading,errMess:e.props.news.errMess})},defaultParams:{newsId:0}}),l.a.createElement(C.a,{to:"/news/0"})))}}]),t}(n.Component),U=Object(C.g)(Object(I.b)((function(e){return{cases:e.cases,tests:e.tests,news:e.news}}),(function(e){return{fetchCases:function(){return e((function(e){return e({type:"CASES_LOADING"}),D.a.get(M+"history/data").then((function(a){return e({type:"ADD_CASES",payload:a.data})})).catch((function(a){e({type:"CASES_LOADING"});var t="Error: "+a.message;return e(function(e){return{type:"CASES_FAILED",payload:e}}(t))}))}))},fetchTests:function(){return e((function(e){return e({type:"TESTS_LOADING"}),D.a.get(M+"testing/history/data").then((function(a){return e({type:"ADD_TESTS",payload:a.data})})).catch((function(a){e({type:"TESTS_LOADING"});var t="Error: "+a.message;return e(function(e){return{type:"TESTS_FAILED",payload:e}}(t))}))}))},fetchNews:function(){return e((function(e){return e({type:"NEWS_LOADING"}),D.a.request(_).then((function(a){return e({type:"ADD_NEWS",payload:a.data.articles})})).catch((function(a){e({type:"NEWS_LOADING"});var t="Error: "+a.message;return e(function(e){return{type:"NEWS_FAILED",payload:e}}(t))}))}))}}}))(P)),q=(t(224),t(23)),z=t(10),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,cases:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_CASES":return Object(z.a)(Object(z.a)({},e),{},{isLoading:!1,errMess:null,cases:a.payload});case"CASES_LOADING":return Object(z.a)(Object(z.a)({},e),{},{isLoading:!0,errMess:null,cases:[]});case"CASES_FAILED":return Object(z.a)(Object(z.a)({},e),{},{isLoading:!1,errMess:a.payload,cases:[]});default:return e}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,tests:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_TESTS":return Object(z.a)(Object(z.a)({},e),{},{isLoading:!1,errMess:null,tests:a.payload});case"TESTS_LOADING":return Object(z.a)(Object(z.a)({},e),{},{isLoading:!0,errMess:null,tests:[]});case"TESTS_FAILED":return Object(z.a)(Object(z.a)({},e),{},{isLoading:!1,errMess:a.payload,tests:[]});default:return e}},X=t(90),Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,news:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_NEWS":return Object(z.a)(Object(z.a)({},e),{},{isLoading:!1,errMess:null,news:a.payload});case"NEWS_LOADING":return Object(z.a)(Object(z.a)({},e),{},{isLoading:!0,errMess:null,news:[]});case"NEWS_FAILED":return Object(z.a)(Object(z.a)({},e),{},{isLoading:!1,errMess:a.payload,news:[]});default:return e}},$=Object(q.d)(Object(q.c)({cases:J,tests:H,news:Y}),Object(q.a)(X.a)),K=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(I.a,{store:$},l.a.createElement(h.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(U,null))))}}]),t}(n.Component),Q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Z(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(K,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/covid-visuals",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/covid-visuals","/service-worker.js");Q?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Z(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Z(a,e)}))}}()},91:function(e,a,t){e.exports=t(225)},98:function(e,a,t){}},[[91,1,2]]]);
//# sourceMappingURL=main.50db89e8.chunk.js.map