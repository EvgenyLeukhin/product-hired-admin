(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1212:function(e,t,n){"use strict";n.r(t);var a=n(10),r=n(11),l=n(15),c=n(13),i=n(14),o=n(0),u=n.n(o),s=n(470),f=n(445),d=n(410),m=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){this.props.setHeaderTitle("Users")}},{key:"render",value:function(){var e=[{Header:"Name",accessor:"name",style:{fontWeight:"bold"},Cell:function(e){var t=e.original;return u.a.createElement(u.a.Fragment,null,u.a.createElement("span",null,t.name||"..."))},Filter:function(e){var t=e.filter,n=e.onChange;return Object(f.a)(t,n)}},{Header:"Surname",accessor:"surname",style:{fontWeight:"bold"},Cell:function(e){var t=e.original;return u.a.createElement("span",null,t.surname||"...")},Filter:function(e){var t=e.filter,n=e.onChange;return Object(f.a)(t,n)}},{Header:"Email",accessor:"email",Cell:function(e){var t=e.original;return u.a.createElement("a",{href:"mailto:".concat(t.email)},t.email||"\u2014")},Filter:function(e){var t=e.filter,n=e.onChange;return Object(f.a)(t,n)}},{Header:"Created",accessor:"created",width:120,Cell:function(e){var t=e.original;return u.a.createElement("div",{style:{textAlign:"center"}},u.a.createElement("span",null,t.created.substring(0,10)||"..."))},Filter:function(e){var t=e.filter,n=e.onChange;return Object(f.a)(t,n)}},{Header:"Status",accessor:"status",width:70,Cell:function(e){var t=e.original;return u.a.createElement("span",{style:{color:t.status?"rgb(0,203,131)":"#dc3545"}},t.status?"Active":"Blocked")},Filter:function(e){var t=e.filter,n=e.onChange;return Object(f.a)(t,n)}}];return u.a.createElement(s.a,{columns:e,dataPath:"users",buttonText:"user",startOrder:"id DESC"})}}]),t}(u.a.Component);t.default=Object(d.a)(m)}}]);
//# sourceMappingURL=4.d735b606.chunk.js.map