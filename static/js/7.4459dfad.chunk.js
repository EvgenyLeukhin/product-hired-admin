(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{144:function(e,t,a){"use strict";a.d(t,"a",function(){return h});var n=a(9),r=a(10),i=a(13),c=a(12),o=a(14),l=a(0),s=a.n(l),u=a(22),d=a.n(u);function h(e){return function(t){function a(){return Object(n.a)(this,a),Object(i.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(o.a)(a,t),Object(r.a)(a,[{key:"render",value:function(){var t={setHeaderTitle:function(e){d.a.publish("setPageTitle",e)}};return s.a.createElement(e,Object.assign({},this.props,t))}}]),a}(l.Component)}},145:function(e,t,a){"use strict";var n=a(9),r=a(10),i=a(13),c=a(12),o=a(14),l=a(0),s=a.n(l),u=a(146),d=a(56),h=a.n(d),p=a(67),f=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={data:[],count:null,loading:!1},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.columns,n=t.dataPath,r=t.order,i=this.state,c=i.data,o=i.loading,l=i.count,d=JSON.parse(localStorage.getItem("ph-admin-user-data")),f=d&&d.id;return s.a.createElement("div",null,s.a.createElement(u.a,{manual:!0,pages:l,data:c,loading:o,resizable:!0,filterable:!0,className:"-striped -highlight",columns:a,onFetchData:function(t){var a=t.pageSize,i=t.page,c=t.sorted,o=t.filtered;e.setState({loading:!0});var l={where:{},limit:a,skip:i*a,order:r};o.forEach(function(e){"id"===e.id?l.where[e.id]=e.value:l.where[e.id]={like:e.value+"%"}}),c.forEach(function(e){var t=e.desc?"DESC":"ASC";l.order="".concat(e.id," ").concat(t)}),h.a.get("".concat(p.a,"/api/api/").concat(n,"/count"),{params:{where:l.where},headers:{Authorization:f}}).then(function(t){e.setState({count:Math.ceil(t.data.count/a)})}).then(h.a.get("".concat(p.a,"/api/api/").concat(n),{params:{filter:l},headers:{Authorization:f}}).then(function(t){e.setState({data:t.data,loading:!1})}).catch(function(e){console.log(e)}))}}))}}]),t}(s.a.Component);t.a=f},432:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a(10),i=a(13),c=a(12),o=a(14),l=a(0),s=a.n(l),u=a(145),d=a(144),h=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){this.props.setHeaderTitle("Jobs")}},{key:"render",value:function(){var e=[{Header:"Id",accessor:"id",width:60,style:{textAlign:"right"},Cell:function(e){var t=e.original;return s.a.createElement("div",null,t.id||"...")}},{Header:"Job",accessor:"name",style:{fontWeight:"bold"},Cell:function(e){var t=e.original;return s.a.createElement("div",null,t.name||"...")}},{Header:"Location",accessor:"locations",width:200,sortable:!1,filterable:!1,Cell:function(e){var t=e.original;return s.a.createElement("span",null,t.locations.map(function(e){return"".concat(e.name," ")}))}},{Header:"Created",accessor:"created",width:120,Cell:function(e){var t=e.original;return s.a.createElement("div",{style:{textAlign:"center"}},s.a.createElement("span",null,t.created.substring(0,10)||"..."))}}];return s.a.createElement(u.a,{columns:e,order:"id DESC",dataPath:"vacancies"})}}]),t}(s.a.Component);t.default=Object(d.a)(h)}}]);
//# sourceMappingURL=7.4459dfad.chunk.js.map