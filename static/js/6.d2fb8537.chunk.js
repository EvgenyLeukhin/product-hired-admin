(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{651:function(e,t,n){"use strict";n.r(t);var a=n(10),r=n(11),l=n(14),c=n(12),i=n(13),o=n(0),u=n.n(o),s=n(516),d=n(492),b=n(418),f=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){this.props.setHeaderTitle("Jobs")}},{key:"render",value:function(){var e=[{Header:"Job",accessor:"name",style:{fontWeight:"bold"},Cell:function(e){var t=e.original;return u.a.createElement("div",null,t.name||"...")},Filter:function(e){var t=e.filter,n=e.onChange;return Object(d.a)(t,n)}},{Header:"Company",accessor:"company",sortable:!1,filterable:!1,Cell:function(e){var t=e.original;return t.company?u.a.createElement("div",null,t.company.name):u.a.createElement("div",null,"...")}},{Header:"Status",accessor:"status",width:60,Cell:function(e){var t=e.original;return u.a.createElement("div",null,t.status||"...")},Filter:function(e){var t=e.filter,n=e.onChange;return Object(d.a)(t,n)}},{Header:"Created",accessor:"created",width:120,Cell:function(e){var t=e.original;return u.a.createElement("div",{style:{textAlign:"center"}},u.a.createElement("span",null,t.created.substring(0,10)||"..."))},Filter:function(e){var t=e.filter,n=e.onChange;return Object(d.a)(t,n)}}];return u.a.createElement(s.a,{columns:e,buttonText:"job",startOrder:"id DESC",dataPath:"vacancies"})}}]),t}(u.a.Component);t.default=Object(b.a)(f)}}]);
//# sourceMappingURL=6.d2fb8537.chunk.js.map