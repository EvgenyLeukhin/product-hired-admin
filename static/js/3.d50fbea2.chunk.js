(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{500:function(A,e,t){"use strict";t.d(e,"a",function(){return d});var a=t(12),n=t(13),i=t(16),r=t(15),o=t(17),c=t(0),l=t.n(c),s=t(28),u=t.n(s);function d(A){return function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e={setHeaderTitle:function(A){u.a.publish("setPageTitle",A)}};return l.a.createElement(A,Object.assign({},this.props,e))}}]),t}(c.Component)}},504:function(A,e){A.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQYGBgYICQgJCAwLCgoLDBINDg0ODRIbERQRERQRGxgdGBYYHRgrIh4eIisyKigqMjw2NjxMSExkZIYBBQUFBQUFBgYGBggJCAkIDAsKCgsMEg0ODQ4NEhsRFBERFBEbGB0YFhgdGCsiHh4iKzIqKCoyPDY2PExITGRkhv/CABEIABQAFAMBIgACEQEDEQH/xAAXAAADAQAAAAAAAAAAAAAAAAAABAYI/9oACAEBAAAAANlqNqytoB//xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAECEAAAAA//xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDEAAAAA//xAAhEAACAgIBBAMAAAAAAAAAAAABAgMEBRIhAAYRIhATIP/aAAgBAQABPwC9bix9K1clDGOCF5XCjyxVBsfA6xXcOJzJApTlyQ7AFSOI20Pxnbk1StFpQNtJpTFNHqWAjZG5YKG9fI54PWFztWfLfVV7ZNeR3dZ5kj1MZdy7CQhANi3sefz/AP/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8AH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8AH//Z"},516:function(A,e,t){"use strict";t.r(e);var a=t(12),n=t(13),i=t(16),r=t(15),o=t(17),c=t(0),l=t.n(c),s=t(501),u=t(68),d=t.n(u),g=t(500),h=t(504),p=t.n(h),E=t(90),f=function(A){function e(){var A,t;Object(a.a)(this,e);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(t=Object(i.a)(this,(A=Object(r.a)(e)).call.apply(A,[this].concat(o)))).state={data:[],count:null,loading:!1},t}return Object(o.a)(e,A),Object(n.a)(e,[{key:"UNSAFE_componentWillMount",value:function(){this.props.setHeaderTitle("Companies")}},{key:"render",value:function(){var A=this,e=[{Header:"ID",accessor:"id",width:60,Cell:function(A){var e=A.original;return l.a.createElement("div",{style:{textAlign:"right"}},l.a.createElement("span",null,e.id||"..."))}},{Header:"Company name",accessor:"name",style:{fontWeight:"bold"},Cell:function(A){var e=A.original;return l.a.createElement("div",null,l.a.createElement("img",{src:e.logo||p.a,width:20,height:20}),"\xa0\xa0",l.a.createElement("span",null,e.name||"..."))}},{Header:"Domain",accessor:"domain",Cell:function(A){var e=A.original;return e.domain?l.a.createElement("a",{href:"http://".concat(e.domain),target:"_blank",rel:"noopener noreferrer"},e.domain):l.a.createElement("div",null,"...")}},{Header:"Slug",accessor:"slug",Cell:function(A){var e=A.original;return l.a.createElement("div",null,e.slug||"...")}}],t=this.state,a=t.data,n=t.loading,i=t.count;return l.a.createElement("div",null,l.a.createElement(s.a,{pages:i,manual:!0,data:a,loading:n,resizable:!0,filterable:!0,className:"-striped -highlight",columns:e,onFetchData:function(e){var t=e.pageSize,a=e.page,n=e.sorted,i=e.filtered;A.setState({loading:!0});var r={where:{},limit:t,skip:a*t,order:"id DESC"};i.forEach(function(A){"id"===A.id?r.where[A.id]=A.value:r.where[A.id]={like:A.value+"%"}}),n.forEach(function(A){var e=A.desc?"DESC":"ASC";r.order="".concat(A.id," ").concat(e)}),d.a.get("".concat(E.a,"/api/api/companies/count"),{params:{where:r.where},headers:{Authorization:localStorage.getItem("ph-admin-token")}}).then(function(e){A.setState({count:Math.ceil(e.data.count/t)})}).then(d.a.get("".concat(E.a,"/api/api/companies"),{params:{filter:r},headers:{Authorization:localStorage.getItem("ph-admin-token")}}).then(function(e){A.setState({data:e.data,loading:!1})}).catch(function(A){console.log(A)}))}}))}}]),e}(l.a.Component);e.default=Object(g.a)(f)}}]);
//# sourceMappingURL=3.d50fbea2.chunk.js.map