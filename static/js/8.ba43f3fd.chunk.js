(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{406:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var a=n(9),i=n(10),r=n(13),c=n(12),l=n(14),s=n(0),o=n.n(s),u=n(22),d=n.n(u);function h(e){return function(t){function n(){return Object(a.a)(this,n),Object(r.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(l.a)(n,t),Object(i.a)(n,[{key:"render",value:function(){var t={setHeaderTitle:function(e){d.a.publish("setPageTitle",e)}};return o.a.createElement(e,Object.assign({},this.props,t))}}]),n}(s.Component)}},433:function(e,t,n){"use strict";n.r(t);var a=n(6),i=n(9),r=n(10),c=n(13),l=n(12),s=n(14),o=n(0),u=n.n(o),d=n(407),h=n(408),p=n(44),f=n.n(p),b=n(58),m=n(406),j=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1,skills:[]},n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){this.props.setHeaderTitle("Skills")}},{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("ph-admin-token");f.a.get("".concat(b.a,"/api/api/skills"),{headers:{Authorization:t}}).then(this.setState({loading:!0})).then(function(t){e.setState({skills:t.data,loading:!1})})}},{key:"render",value:function(){var e,t=this.state.skills,n=[{Header:"ID",accessor:"id",width:60,Cell:function(e){var t=e.original;return u.a.createElement("div",{style:{textAlign:"right"}},u.a.createElement("span",null,t.id))}},(e={Header:"Name",accessor:"name",id:"name"},Object(a.a)(e,"accessor",function(e){return e.name}),Object(a.a)(e,"filterMethod",function(e,t){return Object(h.a)(t,e.value,{keys:["name"]})}),Object(a.a)(e,"filterAll",!0),e)];return u.a.createElement("div",null,u.a.createElement(d.a,{className:"-striped -highlight",data:t,columns:n,filterable:!0,resizable:!0}))}}]),t}(u.a.Component);t.default=Object(m.a)(j)}}]);
//# sourceMappingURL=8.ba43f3fd.chunk.js.map