(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{144:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(9),r=a(10),c=a(13),i=a(12),l=a(14),o=a(0),s=a.n(o),u=a(22),d=a.n(u);function m(e){return function(t){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(l.a)(a,t),Object(r.a)(a,[{key:"render",value:function(){var t={setHeaderTitle:function(e){d.a.publish("setPageTitle",e)}};return s.a.createElement(e,Object.assign({},this.props,t))}}]),a}(o.Component)}},428:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a(10),c=a(13),i=a(12),l=a(14),o=a(0),s=a.n(o),u=a(145),d=a(4),m=a.n(d),g=a(56),h=a.n(g),p=a(70),v=a(144),f=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={data:[],count:null,loading:!1,columnName:"id",sortingOrder:"DESC"},a.toggleOrder=function(e){var t=a.state.sortingOrder;a.setState({columnName:e}),"DESC"===t?a.setState({sortingOrder:"ASC"}):a.setState({sortingOrder:"DESC"})},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){this.props.setHeaderTitle("Users")}},{key:"render",value:function(){var e=this,t=[{Header:function(){var t=e.state,a=t.sortingOrder,n=t.columnName,r=t.loading;return s.a.createElement("div",{onClick:e.toggleOrder.bind(e,"id"),className:m()("custom-th",{desc:!r&&"id"===n&&"DESC"===a,asc:!r&&"id"===n&&"ASC"===a})},"ID")},accessor:"id",width:60,Cell:function(e){var t=e.original;return s.a.createElement("div",{style:{textAlign:"right"}},s.a.createElement("span",null,t.id||"..."))}},{Header:function(){var t=e.state,a=t.sortingOrder,n=t.columnName,r=t.loading;return s.a.createElement("div",{onClick:e.toggleOrder.bind(e,"name"),className:m()("custom-th",{desc:!r&&"name"===n&&"DESC"===a,asc:!r&&"name"===n&&"ASC"===a})},"Name")},accessor:"name",style:{fontWeight:"bold"},Cell:function(e){var t=e.original;return s.a.createElement("div",null,s.a.createElement("span",null,"".concat(t.name," ").concat(t.surname)||"..."))}},{Header:function(){var t=e.state,a=t.sortingOrder,n=t.columnName,r=t.loading;return s.a.createElement("div",{onClick:e.toggleOrder.bind(e,"email"),className:m()("custom-th",{desc:!r&&"email"===n&&"DESC"===a,asc:!r&&"email"===n&&"ASC"===a})},"Email")},accessor:"email",Cell:function(e){var t=e.original;return s.a.createElement("a",{href:"mailto:".concat(t.email)},t.email||"\u2014")}},{Header:function(){var t=e.state,a=t.sortingOrder,n=t.columnName,r=t.loading;return s.a.createElement("div",{onClick:e.toggleOrder.bind(e,"created"),className:m()("custom-th",{desc:!r&&"created"===n&&"DESC"===a,asc:!r&&"created"===n&&"ASC"===a})},"Created")},width:120,accessor:"created",Cell:function(e){var t=e.original;return s.a.createElement("div",{style:{textAlign:"center"}},s.a.createElement("span",null,t.created.substring(0,10)||"..."))}},{Header:function(){var t=e.state,a=t.sortingOrder,n=t.columnName,r=t.loading;return s.a.createElement("div",{onClick:e.toggleOrder.bind(e,"status"),className:m()("custom-th",{desc:!r&&"status"===n&&"DESC"===a,asc:!r&&"status"===n&&"ASC"===a})},"Status")},width:100,accessor:"status",Cell:function(e){var t=e.original;return s.a.createElement("div",{style:{textAlign:"center"}},s.a.createElement("span",null,t.status?"Active":"Blocked"))}}],a=this.state,n=a.data,r=a.loading,c=a.count,i=a.columnName,l=a.sortingOrder;return s.a.createElement("div",null,s.a.createElement(u.a,{pages:c,manual:!0,data:n,loading:r,resizable:!0,className:"companies-table -striped -highlight",columns:t,onFetchData:function(t,a){e.setState({loading:!0});var n=t.pageSize,r=t.page;h.a.get("".concat(p.a,"/api/api/users/count"),{headers:{Authorization:localStorage.getItem("ph-admin-token")}}).then(function(t){e.setState({count:Math.ceil(t.data.count/n)})}).then(h.a.get("".concat(p.a,"/api/api/users"),{headers:{Authorization:localStorage.getItem("ph-admin-token")},params:{filter:{limit:n,skip:r*n,order:"".concat(i," ").concat(l)}}}).then(function(t){e.setState({loading:!1,data:t.data})}))}}))}}]),t}(s.a.Component);t.default=Object(v.a)(f)}}]);
//# sourceMappingURL=2.5eed3ed8.chunk.js.map