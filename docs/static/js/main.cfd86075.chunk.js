(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{161:function(e,t,a){e.exports=a.p+"static/media/logo.1f568862.png"},174:function(e,t,a){e.exports=a(311)},179:function(e,t,a){},296:function(e,t,a){},297:function(e,t,a){},311:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(31),r=a.n(l),c=a(122),i=(a(179),a(68)),s=a(92),u=a(110),m=a(105),d=a(313),p=a(48),E=a(316),b=a(317),f=a(315),h=a(103),g=a(64),x=a(318),y=a(319),v=a(320),I=a(126),k=a(93),C=a(314),O=a(94),w=a.n(O),L=function(){for(var e=[],t=["14%","15%","13%","17%","12%","11%","10%","3%","20%"],a=["Albert","Michael","Alvin","Owen","Guna","Raj"],n=["Comp Assistant not used","Qualified exceeds policy","Retroactive comp assist","Not qualified"],o=0;o<1e3;o++)e.push({key:o,exception:t[Number(Math.floor(8*Math.random()))],status:o%2===0?"Open":"Close",compDate:"Jan ".concat(Number(Math.floor(8*Math.random()))+1,", 2020"),guestId:1234567+o,name:a[Number(Math.floor(5*Math.random()))],issuer:"Thomas",sourceCompAmount:"1000",exceptionType:n[Number(Math.floor(3*Math.random()))]});self.addEventListener("message",(function(t){t&&"GET"===t.data.action&&postMessage(e.slice(t.data.start,t.data.end))}))},S=function e(t){Object(i.a)(this,e);var a=t.toString(),n=new Blob(["("+a+")()"]);return new Worker(URL.createObjectURL(n))},j=function(e,t){return e<t?-1:t<e?1:0},M=function(e,t){return w.a.utc(e).diff(w.a.utc(t))},N=[{title:"Exception",dataIndex:"exception",sorter:{compare:function(e,t){var a=Number(e.exception.slice(0,-1)),n=Number(t.exception.slice(0,-1));return j(a,n)},multiple:1}},{title:"Status",dataIndex:"status",key:"status",filters:[{text:"Open",value:"Open"},{text:"Close",value:"Close"}],onFilter:function(e,t){return 0===t.status.indexOf(e)}},{title:"Comp Date",dataIndex:"compDate",sorter:{compare:function(e,t){return M(e.compDate,t.compDate)},multiple:1}},{title:"Guest Id",dataIndex:"guestId"},{title:"Name",dataIndex:"name"},{title:"Issuer",dataIndex:"issuer"},{title:"Source Comp Amount",dataIndex:"sourceCompAmount"},{title:"Exception Type",dataIndex:"exceptionType"}],D=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.getExceptionInformation(),document.querySelector(".ant-table-body").addEventListener("scroll",n.onScroll),n.worker.addEventListener("message",(function(e){n.setState({exceptionsList:[].concat(Object(I.a)(n.state.exceptionsList),Object(I.a)(e.data)),listCount:n.state.listCount+n.state.defaultListCount,loading:!1})}))},n.state={exceptionsList:[],defaultListCount:10,listCount:0,loading:!1},n.worker=new S(L),n.onScroll=n.onScroll.bind(Object(k.a)(n)),n}return Object(s.a)(a,[{key:"getExceptionInformation",value:function(){var e=this.state,t=e.defaultListCount,a=e.listCount,n={action:"GET",start:a,end:a+t};this.setState({loading:!0}),this.worker.postMessage(n)}},{key:"onScroll",value:function(e){var t=e.target.scrollHeight-e.target.clientHeight;e.target.scrollTop===t&&!this.state.loading&&this.getExceptionInformation()}},{key:"render",value:function(){var e=this.state,t=e.exceptionsList,a=e.loading;return o.a.createElement(C.a,{className:"table",loading:a,columns:N,dataSource:t,pagination:!1,scroll:{y:240,scrollToFirstRowOnChange:!1},onChange:this.onChange})}}]),a}(n.Component),T=[{key:"tab1",tab:"All comps"},{key:"tab2",tab:"Exceptions"},{key:"tab3",tab:"Trends"}],A=a(161),R=a.n(A),B=(a(296),a(297),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){var e=d.a.Header,t=(d.a.Sider,d.a.Content);p.a.SubMenu;return o.a.createElement(d.a,{className:"layout"},o.a.createElement(e,null,o.a.createElement(E.a,{src:R.a,width:120}),o.a.createElement(p.a,{mode:"horizontal"},o.a.createElement(p.a.Item,{key:"mail",icon:o.a.createElement(x.a,null)},"Dashboard"),o.a.createElement(p.a.Item,{key:"app",icon:o.a.createElement(y.a,null)},"Floor view"),o.a.createElement(p.a.Item,{key:"mail",icon:o.a.createElement(x.a,null)},"Data base"),o.a.createElement(p.a.Item,{key:"app",icon:o.a.createElement(y.a,null)},"PD portal"),o.a.createElement(p.a.Item,{key:"mail",icon:o.a.createElement(x.a,null)},"Admin"),o.a.createElement(p.a.Item,{key:"app",icon:o.a.createElement(y.a,null)},"Settings"))),o.a.createElement(t,{style:{padding:"0 50px"}},o.a.createElement(b.a,{style:{margin:"16px 0"}},o.a.createElement(b.a.Item,null,"Breadcrumb Link"),o.a.createElement(b.a.Item,null,"Breadcrumb Link"),o.a.createElement(b.a.Item,null,"Comp Review")),o.a.createElement("div",{className:"site-layout-content"},o.a.createElement(f.a,{style:{width:"100%"},tabList:T,activeTabKey:"tab2"},"Department:",o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,{disabled:!0,className:"drop-down"},o.a.createElement(g.a,null,"Button ",o.a.createElement(v.a,null))),o.a.createElement(g.a,{className:"report-btn"},"Run Report"))),o.a.createElement(D,null))))}}]),a}(n.Component));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(c.a,null,o.a.createElement(B,null))),document.getElementById("root"))}},[[174,1,2]]]);
//# sourceMappingURL=main.cfd86075.chunk.js.map