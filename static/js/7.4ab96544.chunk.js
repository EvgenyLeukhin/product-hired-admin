(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{417:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(10),l=a(11),i=a(15),r=a(13),c=a(14),o=a(0),u=a.n(o),d=a(30),s=a.n(d);function m(e){return function(t){function a(){return Object(n.a)(this,a),Object(i.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(c.a)(a,t),Object(l.a)(a,[{key:"render",value:function(){var t={setHeaderTitle:function(e){s.a.publish("setPageTitle",e)}};return u.a.createElement(e,Object.assign({},this.props,t))}}]),a}(o.Component)}},418:function(e,t,a){"use strict";var n=a(0),l=a.n(n),i=a(431);t.a=function(e,t){return l.a.createElement(i.Input,{style:{width:"100%"},value:e?e.value:"",onChange:function(e){return t(e.target.value)},debounceTimeout:800})}},419:function(e,t,a){},421:function(e,t,a){},423:function(e,t,a){},425:function(e,t,a){},427:function(e,t,a){},429:function(e,t,a){"use strict";var n=a(43),l=a(10),i=a(11),r=a(15),c=a(13),o=a(14),u=a(0),d=a.n(u),s=a(432),m=a(430),h=a.n(m),g=a(6),p=a(113),f=a(466),E=a(282),v=a(112),b=(a(419),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={id:null,name:null,surname:null,email:null,emailVerified:!1,domain:null,slug:null,weight:null,price:null,markers:null,status:!0,job_title:null,experience:null},a.onChange=function(e){"checkbox"===e.target.type?a.setState(Object(g.a)({},e.target.name,e.target.checked)):a.setState(Object(g.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t=Object(p.a)(Object(p.a)(a)).state,n=a.props;(0,n.editRequest)(t,n.dataPath)},a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.itemOriginal,t=e.id,a=e.name,n=e.surname,l=e.email,i=e.domain,r=e.slug,c=e.weight,o=e.price,u=e.markers,d=e.emailVerified,s=e.status,m=e.job_title,h=e.experience;this.setState({id:t,name:a,surname:n,email:l,domain:i,slug:r,weight:c,price:o,markers:u,emailVerified:d,status:s,job_title:m,experience:h})}},{key:"render",value:function(){console.log(this.props.itemOriginal.roles);var e=this.props,t=e.dataPath,a=e.closeModal,n=e.modalLoading,l=this.state,i=l.id,r=l.name,c=l.email,o=(l.domain,l.slug),u=l.weight,s=l.price,m=l.markers,h=l.surname,g=l.emailVerified,p=l.status,b=l.job_title,O=l.experience;return d.a.createElement(d.a.Fragment,null,d.a.createElement("form",{action:"",onSubmit:this.onSubmit},d.a.createElement("header",{className:"form__title"},"Edit ",d.a.createElement("b",null,'"'.concat(i," - ").concat(r,'"'))),d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"edit-id"},"Id"),d.a.createElement(f.a,{id:"edit-id",type:"number",value:i,name:"id",disabled:!0})),d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"edit-name"},"Name"),d.a.createElement(f.a,{id:"edit-name",type:"text",value:r,name:"name",onChange:this.onChange})),"users"===t&&d.a.createElement(d.a.Fragment,null,d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"edit-surname"},"Surname"),d.a.createElement(f.a,{id:"edit-surname",type:"text",value:h,name:"surname",onChange:this.onChange})),d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"edit-email"},"Email"),d.a.createElement(f.a,{id:"edit-email",type:"email",value:c,name:"email",onChange:this.onChange})),d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"edit-job-title"},"Job Title"),d.a.createElement(f.a,{id:"edit-job-title",type:"text",value:b,name:"job_title",onChange:this.onChange})),d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"edit-experience"},"Experience"),d.a.createElement(f.a,{id:"edit-experience",type:"number",value:O,name:"experience",onChange:this.onChange})),d.a.createElement("div",{className:"checkbox-wrapper"},d.a.createElement("label",{htmlFor:"edit-email-verified"},"Email verified"),d.a.createElement(f.a,{id:"edit-email-verified",type:"checkbox",name:"emailVerified",checked:g,onChange:this.onChange})),d.a.createElement("div",{className:"checkbox-wrapper"},d.a.createElement("label",{htmlFor:"edit-user-status"},"Active status"),d.a.createElement(f.a,{id:"edit-user-status",type:"checkbox",name:"status",checked:p,onChange:this.onChange}))),"skills"===t&&d.a.createElement(d.a.Fragment,null,d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"edit-weight"},"Weight"),d.a.createElement(f.a,{id:"edit-weight",disabled:!0,type:"number",value:u,name:"weight",onChange:this.onChange})),d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"edit-slug"},"Slug"),d.a.createElement(f.a,{id:"edit-slug",type:"text",value:o,name:"slug",onChange:this.onChange})),d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"edit-aliases"},"Aliases"),d.a.createElement(f.a,{id:"edit-aliases",type:"text",value:m,name:"aliases",onChange:this.onChange}))),"vacancy_roles"===t&&d.a.createElement(d.a.Fragment,null,d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"edit-slug"},"Slug"),d.a.createElement(f.a,{id:"edit-slug",type:"text",value:o,name:"slug",onChange:this.onChange})),d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"edit-weight"},"Weight"),d.a.createElement(f.a,{id:"edit-weight",type:"number",value:u,name:"weight",onChange:this.onChange}))),"plans"===t&&d.a.createElement(d.a.Fragment,null,d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"edit-price"},"Price"),d.a.createElement(f.a,{id:"edit-price",type:"number",value:s,name:"price",onChange:this.onChange}))),d.a.createElement("footer",{className:"form__buttons"},n?d.a.createElement(v.a,null):d.a.createElement(d.a.Fragment,null,d.a.createElement(E.a,{outline:!0,color:"secondary",onClick:a},"Cancel"),d.a.createElement(E.a,{outline:!0,color:"primary",type:"submit"},"Save")))))}}]),t}(d.a.Component)),O=(a(421),function(e){var t=e.itemOriginal,a=e.closeModal,n=e.deleteRequest,l=e.modalLoading;return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"ReactModal__delete__title"},d.a.createElement("span",null,"Are you sure you want to delete ")," ",d.a.createElement("br",null),'"'.concat(t.id)," - ",d.a.createElement("b",null,"".concat(t.name,'"?'))),l?d.a.createElement(v.a,null):d.a.createElement("div",{className:"ReactModal__delete__buttons"},d.a.createElement(E.a,{outline:!0,color:"secondary",onClick:a},"Cancel"),d.a.createElement(E.a,{outline:!0,color:"danger",onClick:n},"Delete")))}),C=(a(423),function(e){e.name,e.id;return d.a.createElement("div",{className:"ReactModal__add"},"Add modal")}),y=(a(425),function(e){var t=e.type,a=e.dataPath,n=e.modalIsOpen,l=e.closeModal,i=e.itemOriginal,r=e.editRequest,c=e.deleteRequest,o=e.modalLoading;return d.a.createElement(d.a.Fragment,null,d.a.createElement(h.a,{ariaHideApp:!1,isOpen:n,overlayClassName:"ReactModal__Overlay",className:"ReactModal ReactModal__".concat(t),onRequestClose:!o&&l},"delete"===t&&d.a.createElement(O,{closeModal:l,itemOriginal:i,deleteRequest:c,modalLoading:o})||"edit"===t&&d.a.createElement(b,{dataPath:a,closeModal:l,itemOriginal:i,editRequest:r,modalLoading:o})||"add"===t&&d.a.createElement(C,{closeModal:l,itemOriginal:i,deleteRequest:c,modalLoading:o})))}),j=a(458),w=function(e){var t=e.type,a=e.itemOriginal;return d.a.createElement(d.a.Fragment,null,"delete"===t&&d.a.createElement(j.a,{color:"danger"},'"'.concat(a.id)," - ",d.a.createElement("b",null,"".concat(a.name,'" is deleted')))||"edit"===t&&d.a.createElement(j.a,{color:"warning"},'"'.concat(a.id)," - ",d.a.createElement("b",null,"".concat(a.name,'" is edited')))||"add"===t&&d.a.createElement(j.a,{color:"success"},"New item is added")||"error"===t&&d.a.createElement(j.a,{color:"danger"},d.a.createElement("b",null,"Error"),". Something is wrong!"))},k=a(57),S=a.n(k),F=a(71),_=a(111),x=function(e,t){var a=e.filtered,n={};return a.forEach(function(e){"id"===e.id?n[e.id]=e.value:n[e.id]={like:e.value+"%"}}),S.a.get("".concat(F.a,"/").concat(t,"/count"),{params:{where:n},headers:{Authorization:_.a}}).then(function(e){return e.data.count})},I=function(e,t,a){var n=e.pageSize,l=e.page,i=e.filtered,r=e.sorted,c={where:{},limit:n,skip:l*n,order:a};return i.forEach(function(e){"id"===e.id?c.where[e.id]=e.value:c.where[e.id]={like:e.value+"%"}}),r.forEach(function(e){var t=e.desc?"DESC":"ASC";c.order="".concat(e.id," ").concat(t)}),S.a.get("".concat(F.a,"/").concat(t),{params:{filter:c},headers:{Authorization:_.a}}).then(function(e){return e.data})},N=function(e,t){var a=e.id,n=e.name,l={Authorization:_.a},i="".concat(F.a,"/").concat(t,"/").concat(a);if("plans"===t){var r=e.price;return S.a.patch(i,{name:n,price:r,id:a},{headers:l})}if("users"===t){var c=e.surname,o=e.email,u=e.emailVerified,d=(e.adminVerified,e.status),s=e.job_title,m=e.experience;return S.a.patch(i,{id:a,name:n,surname:c,email:o,emailVerified:u,status:d,job_title:s,experience:m},{headers:l})}if("vacancy_roles"===t){var h=e.slug,g=e.weight;return S.a.patch(i,{id:a,name:n,slug:h,weight:g},{headers:l})}if("skills"===t){var p=e.slug,f=e.markers;return S.a.patch(i,{name:n,slug:p,markers:f,id:a},{headers:l})}},M=function(e,t){return S.a.delete("".concat(F.a,"/").concat(e,"/").concat(t),{headers:{Authorization:_.a}})},R=a(418),A=(a(427),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={data:[],count:null,loading:!1,itemOriginal:null,modalType:"",modalIsOpen:!1,modalLoading:!1,alertIsOpen:!1,idValue:""},a.deleteClick=function(e){return function(){a.setState({modalType:"delete",modalIsOpen:!0,itemOriginal:e,alertIsOpen:!1})}},a.delete=function(){var e=a.props.dataPath,t=a.state.itemOriginal.id;a.setState({modalLoading:!0}),M(e,t).then(function(){a.setState({modalIsOpen:!1,modalLoading:!1})}).then(function(){a.setState({alertIsOpen:!0}),setTimeout(function(){a.setState({alertIsOpen:!1}),window.location.reload()},2e3)}).catch(function(e){console.log(e),a.setState({alertIsOpen:!0,modalType:"error"})})},a.editClick=function(e){return function(){a.setState({modalType:"edit",modalIsOpen:!0,itemOriginal:e,alertIsOpen:!1})}},a.edit=function(e,t){N(e,t).then(a.setState({modalLoading:!0})).then(function(){a.setState({modalLoading:!1,modalIsOpen:!1,alertIsOpen:!0}),setTimeout(function(){a.setState({alertIsOpen:!1}),window.location.reload()},2e3)}).catch(function(e){return console.log(e)})},a.addClick=function(e){return function(){a.setState({modalType:"add",modalIsOpen:!0,itemOriginal:e})}},a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=[{Header:"Id",accessor:"id",width:60,style:{textAlign:"right"},Cell:function(e){var t=e.original;return d.a.createElement("div",null,t.id||"...")},Filter:function(e){var t=e.filter,a=e.onChange;return Object(R.a)(t,a)}}],a=[{Header:"",width:65,sortable:!1,filterable:!1,Cell:function(t){var a=t.original;return d.a.createElement("div",{className:"rt-custom__controls"},d.a.createElement("i",{className:"ion-android-delete",onClick:e.deleteClick(a)}),d.a.createElement("i",{className:"ion-edit",onClick:e.editClick(a)}))}}],l=this.props,i=l.columns,r=l.dataPath,c=l.startOrder,o=this.state,u=o.loading,m=o.count,h=o.data,g=o.modalIsOpen,p=o.itemOriginal,f=o.modalType,E=o.modalLoading,v=o.alertIsOpen;return d.a.createElement("div",{className:"".concat(r,"-table")},v&&d.a.createElement(w,{type:f,itemOriginal:p}),d.a.createElement(y,{type:f,modalIsOpen:g,modalLoading:E,itemOriginal:p,dataPath:r,editRequest:this.edit,deleteRequest:this.delete,closeModal:function(){return e.setState({modalIsOpen:!1})}}),d.a.createElement(s.a,{data:h,manual:!0,pages:m,resizable:!0,filterable:!0,loading:u,className:"-striped -highlight",columns:[].concat(t,Object(n.a)(i),a),dataPath:r,startOrder:c,onFetchData:function(t){e.setState({loading:!0}),x(t,r).then(function(a){return e.setState({count:Math.ceil(a/t.pageSize)})}).then(function(){return I(t,r,c)}).then(function(t){return e.setState({data:t,loading:!1})}).catch(function(e){return console.log(e)})}}))}}]),t}(d.a.Component));t.a=A},472:function(e,t,a){"use strict";a.r(t);var n=a(10),l=a(11),i=a(15),r=a(13),c=a(14),o=a(0),u=a.n(o),d=a(429),s=a(418),m=a(417),h=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(l.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){this.props.setHeaderTitle("Jobs")}},{key:"render",value:function(){var e=[{Header:"Job",accessor:"name",style:{fontWeight:"bold"},Cell:function(e){var t=e.original;return u.a.createElement("div",null,t.name||"...")},Filter:function(e){var t=e.filter,a=e.onChange;return Object(s.a)(t,a)}},{Header:"Company",accessor:"company",sortable:!1,filterable:!1,Cell:function(e){var t=e.original.company.name;return u.a.createElement("div",null,t||"...")}},{Header:"Location",accessor:"locations",width:200,sortable:!1,filterable:!1,Cell:function(e){var t=e.original;return u.a.createElement("span",null,t.locations.map(function(e){return"".concat(e.name," ")}))},Filter:function(e){var t=e.filter,a=e.onChange;return Object(s.a)(t,a)}},{Header:"Status",accessor:"status",width:60,Cell:function(e){var t=e.original;return u.a.createElement("div",null,t.status||"...")},Filter:function(e){var t=e.filter,a=e.onChange;return Object(s.a)(t,a)}},{Header:"Created",accessor:"created",width:120,Cell:function(e){var t=e.original;return u.a.createElement("div",{style:{textAlign:"center"}},u.a.createElement("span",null,t.created.substring(0,10)||"..."))},Filter:function(e){var t=e.filter,a=e.onChange;return Object(s.a)(t,a)}}];return u.a.createElement(d.a,{columns:e,order:"id DESC",dataPath:"vacancies"})}}]),t}(u.a.Component);t.default=Object(m.a)(h)}}]);
//# sourceMappingURL=7.4ab96544.chunk.js.map