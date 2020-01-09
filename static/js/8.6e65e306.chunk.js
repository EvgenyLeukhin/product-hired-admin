(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{417:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(9),l=a(10),r=a(14),i=a(12),c=a(13),o=a(0),u=a.n(o),d=a(22),s=a.n(d);function m(e){return function(t){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(c.a)(a,t),Object(l.a)(a,[{key:"render",value:function(){var t={setHeaderTitle:function(e){s.a.publish("setPageTitle",e)}};return u.a.createElement(e,Object.assign({},this.props,t))}}]),a}(o.Component)}},418:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(431);t.a=function(e,t){return l.a.createElement(r.Input,{style:{width:"100%"},value:e?e.value:"",onChange:function(e){return t(e.target.value)},debounceTimeout:800})}},419:function(e,t,a){},421:function(e,t,a){},423:function(e,t,a){},425:function(e,t,a){},427:function(e,t,a){},429:function(e,t,a){"use strict";var n=a(44),l=a(9),r=a(10),i=a(14),c=a(12),o=a(13),u=a(0),d=a.n(u),s=a(432),m=a(430),h=a.n(m),g=a(6),p=a(115),f=a(466),E=a(286),v=a(114),O=(a(419),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={id:null,name:null,domain:null,slug:null,weight:null,price:null,markers:null},a.onChange=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t=Object(p.a)(Object(p.a)(a)).state,n=a.props;(0,n.editRequest)(t,n.dataPath)},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.itemOriginal;this.setState({id:e.id,name:e.name,domain:e.domain,slug:e.slug,weight:e.weight,price:e.price,markers:e.markers})}},{key:"render",value:function(){var e=this.state,t=e.id,a=e.name,n=(e.domain,e.slug),l=e.weight,r=e.price,i=e.markers,c=this.props,o=c.dataPath,u=c.itemOriginal,s=c.closeModal,m=c.modalLoading;return d.a.createElement(d.a.Fragment,null,d.a.createElement("form",{action:"",onSubmit:this.onSubmit},d.a.createElement("header",{className:"form__title"},"Edit ",d.a.createElement("b",null,'"'.concat(u.id," - ").concat(u.name,'"'))),d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"edit-id"},"Id"),d.a.createElement(f.a,{id:"edit-id",type:"number",value:t,name:"id",disabled:!0})),d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"edit-name"},"Name"),d.a.createElement(f.a,{id:"edit-name",type:"text",value:a,name:"name",onChange:this.onChange})),"skills"===o&&d.a.createElement(d.a.Fragment,null,d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"edit-weight"},"Weight"),d.a.createElement(f.a,{id:"edit-weight",disabled:!0,type:"number",value:l,name:"weight",onChange:this.onChange})),d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"edit-slug"},"Slug"),d.a.createElement(f.a,{id:"edit-slug",type:"text",value:n,name:"slug",onChange:this.onChange})),d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"edit-aliases"},"Aliases"),d.a.createElement(f.a,{id:"edit-aliases",type:"text",value:i,name:"aliases",onChange:this.onChange}))),"vacancy_roles"===o&&d.a.createElement(d.a.Fragment,null,d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"edit-slug"},"Slug"),d.a.createElement(f.a,{id:"edit-slug",type:"text",value:n,name:"slug",onChange:this.onChange})),d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"edit-weight"},"Weight"),d.a.createElement(f.a,{id:"edit-weight",type:"number",value:l,name:"weight",onChange:this.onChange}))),"plans"===o&&d.a.createElement(d.a.Fragment,null,d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"edit-price"},"Price"),d.a.createElement(f.a,{id:"edit-price",type:"number",value:r,name:"price",onChange:this.onChange}))),d.a.createElement("footer",{className:"form__buttons"},m?d.a.createElement(v.a,null):d.a.createElement(d.a.Fragment,null,d.a.createElement(E.a,{outline:!0,color:"secondary",onClick:s},"Cancel"),d.a.createElement(E.a,{outline:!0,color:"primary",type:"submit"},"Save")))))}}]),t}(d.a.Component)),b=(a(421),function(e){var t=e.itemOriginal,a=e.closeModal,n=e.deleteRequest,l=e.modalLoading;return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"ReactModal__delete__title"},d.a.createElement("span",null,"Are you sure you want to delete ")," ",d.a.createElement("br",null),'"'.concat(t.id)," - ",d.a.createElement("b",null,"".concat(t.name,'"?'))),l?d.a.createElement(v.a,null):d.a.createElement("div",{className:"ReactModal__delete__buttons"},d.a.createElement(E.a,{outline:!0,color:"secondary",onClick:a},"Cancel"),d.a.createElement(E.a,{outline:!0,color:"danger",onClick:n},"Delete")))}),C=(a(423),function(e){e.name,e.id;return d.a.createElement("div",{className:"ReactModal__add"},"Add modal")}),y=(a(425),function(e){var t=e.type,a=e.dataPath,n=e.modalIsOpen,l=e.closeModal,r=e.itemOriginal,i=e.editRequest,c=e.deleteRequest,o=e.modalLoading;return d.a.createElement(d.a.Fragment,null,d.a.createElement(h.a,{ariaHideApp:!1,isOpen:n,overlayClassName:"ReactModal__Overlay",className:"ReactModal ReactModal__".concat(t),onRequestClose:!o&&l},"delete"===t&&d.a.createElement(b,{closeModal:l,itemOriginal:r,deleteRequest:c,modalLoading:o})||"edit"===t&&d.a.createElement(O,{dataPath:a,closeModal:l,itemOriginal:r,editRequest:i,modalLoading:o})||"add"===t&&d.a.createElement(C,{closeModal:l,itemOriginal:r,deleteRequest:c,modalLoading:o})))}),w=a(458),k=function(e){var t=e.type,a=e.itemOriginal;return d.a.createElement(d.a.Fragment,null,"delete"===t&&d.a.createElement(w.a,{color:"danger"},'"'.concat(a.id)," - ",d.a.createElement("b",null,"".concat(a.name,'" is deleted')))||"edit"===t&&d.a.createElement(w.a,{color:"warning"},'"'.concat(a.id)," - ",d.a.createElement("b",null,"".concat(a.name,'" is edited')))||"add"===t&&d.a.createElement(w.a,{color:"success"},"New item is added")||"error"===t&&d.a.createElement(w.a,{color:"danger"},d.a.createElement("b",null,"Error"),". Something is wrong!"))},S=a(57),j=a.n(S),_=a(71),F=a(113),I=function(e,t){var a=e.filtered,n={};return a.forEach(function(e){"id"===e.id?n[e.id]=e.value:n[e.id]={like:e.value+"%"}}),j.a.get("".concat(_.a,"/").concat(t,"/count"),{params:{where:n},headers:{Authorization:F.a}}).then(function(e){return e.data.count}).catch(function(e){return console.log(e)})},M=function(e,t,a){var n=e.pageSize,l=e.page,r=e.filtered,i=e.sorted,c={where:{},limit:n,skip:l*n,order:a};return r.forEach(function(e){"id"===e.id?c.where[e.id]=e.value:c.where[e.id]={like:e.value+"%"}}),i.forEach(function(e){var t=e.desc?"DESC":"ASC";c.order="".concat(e.id," ").concat(t)}),j.a.get("".concat(_.a,"/").concat(t),{params:{filter:c},headers:{Authorization:F.a}}).then(function(e){return e.data}).catch(function(e){return console.log(e)})},R=function(e,t){var a=e.id,n=e.name,l={Authorization:F.a},r="".concat(_.a,"/").concat(t,"/").concat(a);if("plans"===t){var i=e.price;return j.a.patch(r,{name:n,price:i,id:a},{headers:l})}if("vacancy_roles"===t){var c=e.slug,o=e.weight;return j.a.patch(r,{id:a,name:n,slug:c,weight:o},{headers:l})}if("skills"===t){var u=e.slug,d=e.markers;return j.a.patch(r,{name:n,slug:u,markers:d,id:a},{headers:l})}},N=function(e,t){return j.a.delete("".concat(_.a,"/").concat(e,"/").concat(t),{headers:{Authorization:F.a}})},A=a(418),L=(a(427),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],count:null,loading:!1,itemOriginal:null,modalType:"",modalIsOpen:!1,modalLoading:!1,alertIsOpen:!1,idValue:""},a.deleteClick=function(e){return function(){a.setState({modalType:"delete",modalIsOpen:!0,itemOriginal:e,alertIsOpen:!1})}},a.delete=function(){var e=a.props.dataPath,t=a.state.itemOriginal.id;a.setState({modalLoading:!0}),N(e,t).then(function(e){a.setState({modalIsOpen:!1,modalLoading:!1})}).then(function(){a.setState({alertIsOpen:!0}),setTimeout(function(){a.setState({alertIsOpen:!1}),window.location.reload()},2e3)}).catch(function(e){console.log(e),a.setState({alertIsOpen:!0,modalType:"error"})})},a.editClick=function(e){return function(){a.setState({modalType:"edit",modalIsOpen:!0,itemOriginal:e,alertIsOpen:!1})}},a.edit=function(e,t){R(e,t).then(a.setState({modalLoading:!0})).then(function(){a.setState({modalIsOpen:!1,alertIsOpen:!0,modalLoading:!1}),setTimeout(function(){a.setState({alertIsOpen:!1}),window.location.reload()},2e3)})},a.addClick=function(e){return function(){a.setState({modalType:"add",modalIsOpen:!0,itemOriginal:e})}},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=[{Header:"Id",accessor:"id",width:60,style:{textAlign:"right"},Cell:function(e){var t=e.original;return d.a.createElement("div",null,t.id||"...")},Filter:function(e){var t=e.filter,a=e.onChange;return Object(A.a)(t,a)}}],a=[{Header:"",width:65,sortable:!1,filterable:!1,Cell:function(t){var a=t.original;return d.a.createElement("div",{className:"rt-custom__controls"},d.a.createElement("i",{className:"ion-android-delete",onClick:e.deleteClick(a)}),d.a.createElement("i",{className:"ion-edit",onClick:e.editClick(a)}))}}],l=this.props,r=l.columns,i=l.dataPath,c=l.startOrder,o=this.state,u=o.loading,m=o.count,h=o.data,g=o.modalIsOpen,p=o.itemOriginal,f=o.modalType,E=o.modalLoading,v=o.alertIsOpen;return d.a.createElement("div",{className:"".concat(i,"-table")},v&&d.a.createElement(k,{type:f,itemOriginal:p}),d.a.createElement(y,{type:f,modalIsOpen:g,modalLoading:E,itemOriginal:p,dataPath:i,editRequest:this.edit,deleteRequest:this.delete,closeModal:function(){return e.setState({modalIsOpen:!1})}}),d.a.createElement(s.a,{data:h,manual:!0,pages:m,resizable:!0,filterable:!0,loading:u,className:"-striped -highlight",columns:[].concat(t,Object(n.a)(r),a),dataPath:i,startOrder:c,onFetchData:function(t){e.setState({loading:!0}),I(t,i).then(function(a){return e.setState({count:Math.ceil(a/t.pageSize)})}).then(function(){return M(t,i,c)}).then(function(t){return e.setState({data:t,loading:!1})})}}))}}]),t}(d.a.Component));t.a=L},473:function(e,t,a){"use strict";a.r(t);var n=a(9),l=a(10),r=a(14),i=a(12),c=a(13),o=a(0),u=a.n(o),d=a(429),s=a(418),m=a(417),h=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(l.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){this.props.setHeaderTitle("Skills")}},{key:"render",value:function(){var e=[{Header:"Skill",accessor:"name",style:{fontWeight:"bold"},Cell:function(e){var t=e.original;return u.a.createElement("div",null,t.name||"...")},Filter:function(e){var t=e.filter,a=e.onChange;return Object(s.a)(t,a)}},{Header:"Aliases",accessor:"markers",Cell:function(e){var t=e.original;return u.a.createElement("div",null,t.markers||"...")},Filter:function(e){var t=e.filter,a=e.onChange;return Object(s.a)(t,a)}},{Header:"Slug",accessor:"slug",Cell:function(e){var t=e.original;return u.a.createElement("div",null,t.slug||"...")},Filter:function(e){var t=e.filter,a=e.onChange;return Object(s.a)(t,a)}}];return u.a.createElement(d.a,{columns:e,dataPath:"skills"})}}]),t}(u.a.Component);t.default=Object(m.a)(h)}}]);
//# sourceMappingURL=8.6e65e306.chunk.js.map