(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{417:function(e,a,t){"use strict";t.d(a,"a",function(){return s});var n=t(10),l=t(11),i=t(15),r=t(13),o=t(14),c=t(0),m=t.n(c),d=t(30),u=t.n(d);function s(e){return function(a){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(o.a)(t,a),Object(l.a)(t,[{key:"render",value:function(){var a={setHeaderTitle:function(e){u.a.publish("setPageTitle",e)}};return m.a.createElement(e,Object.assign({},this.props,a))}}]),t}(c.Component)}},418:function(e,a,t){"use strict";var n=t(0),l=t.n(n),i=t(442);a.a=function(e,a){return l.a.createElement(i.Input,{style:{width:"100%"},value:e?e.value:"",onChange:function(e){return a(e.target.value)},debounceTimeout:800})}},419:function(e,a,t){"use strict";var n=t(48),l=t(10),i=t(11),r=t(15),o=t(13),c=t(14),m=t(0),d=t.n(m),u=t(457),s=t(426),g=t.n(s),h=t(6),p=t(130),v=t(282),f=t(112),E=t(466),b=function(e){var a=e.id,t=e.name,n=e.onChange;return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"edit-id"},"Id"),d.a.createElement(E.a,{id:"edit-id",type:"number",value:a,name:"id",disabled:!0})),d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"edit-name"},"Name"),d.a.createElement(E.a,{id:"edit-name",type:"text",value:t,name:"name",onChange:n})))},C=function(e){var a=e.slug,t=e.domain,n=e.weight,l=e.onChange,i=e.logo,r=e.logoLoading,o=e.onUploadLogo,c=e.fileInputLogo,m=e.cover,u=e.coverLoading,s=e.onUploadCover,g=e.fileInputCover;return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"edit-domain"},"Domain"),d.a.createElement(E.a,{id:"edit-domain",type:"text",value:t,name:"domain",onChange:l})),d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"edit-slug"},"Slug"),d.a.createElement(E.a,{id:"edit-slug",type:"text",value:a,name:"slug",onChange:l})),d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"edit-weight"},"Weight"),d.a.createElement(E.a,{id:"edit-weight",type:"number",value:n,name:"weight",onChange:l})),d.a.createElement("div",null),d.a.createElement("div",{className:"image-container"},d.a.createElement("label",{htmlFor:"edit-logo"},"Logo"),d.a.createElement(E.a,{id:"edit-logo",type:"url",value:i,name:"logo",onChange:l}),r?d.a.createElement(f.a,null):d.a.createElement("img",{className:"logo",src:i,alt:"logo"}),d.a.createElement("input",{type:"file",ref:c,onChange:o})),d.a.createElement("div",{className:"image-container"},d.a.createElement("label",{htmlFor:"edit-cover"},"Cover"),d.a.createElement(E.a,{id:"edit-cover",type:"url",value:m,name:"cover",onChange:l}),u?d.a.createElement(f.a,null):d.a.createElement("img",{className:"cover",src:m,alt:"cover"}),d.a.createElement("input",{type:"file",ref:g,onChange:s})))},O=function(e){var a=e.surname,t=e.email,n=e.job_title,l=e.experience,i=e.emailVerified,r=e.status,o=e.roles,c=e.onChange;return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"edit-surname"},"Surname"),d.a.createElement(E.a,{id:"edit-surname",type:"text",value:a,name:"surname",onChange:c})),d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"edit-email"},"Email"),d.a.createElement(E.a,{id:"edit-email",type:"email",value:t,name:"email",onChange:c})),d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"edit-job-title"},"Job Title"),d.a.createElement(E.a,{id:"edit-job-title",type:"text",value:n,name:"job_title",onChange:c})),d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"edit-experience"},"Experience"),d.a.createElement(E.a,{id:"edit-experience",type:"number",value:l,name:"experience",onChange:c})),d.a.createElement("div",{className:"checkbox-wrapper"},d.a.createElement("label",{htmlFor:"edit-email-verified"},"Email verified"),d.a.createElement(E.a,{id:"edit-email-verified",type:"checkbox",name:"emailVerified",checked:i,onChange:c})),d.a.createElement("div",{className:"checkbox-wrapper"},d.a.createElement("label",{htmlFor:"edit-user-status"},"Active status"),d.a.createElement(E.a,{id:"edit-user-status",type:"checkbox",name:"status",checked:r,onChange:c})),d.a.createElement("div",{className:"checkbox-wrapper"},d.a.createElement("label",{htmlFor:"edit-admin-status"},"Admin status"),d.a.createElement(E.a,{id:"edit-admin-status",type:"checkbox",name:"roles",checked:!(!o.length||"admin"!==o[0].name),disabled:!0})))},y=function(e){var a=e.weight,t=e.slug,n=e.markers,l=e.onChange;return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"edit-weight"},"Weight"),d.a.createElement(E.a,{id:"edit-weight",disabled:!0,type:"number",value:a,name:"weight",onChange:l})),d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"edit-slug"},"Slug"),d.a.createElement(E.a,{id:"edit-slug",type:"text",value:t,name:"slug",onChange:l})),d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"edit-aliases"},"Aliases"),d.a.createElement(E.a,{id:"edit-aliases",type:"text",value:n,name:"aliases",onChange:l})))},w=function(e){var a=e.slug,t=e.weight,n=e.onChange;return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"edit-slug"},"Slug"),d.a.createElement(E.a,{id:"edit-slug",type:"text",value:a,name:"slug",onChange:n})),d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"edit-weight"},"Weight"),d.a.createElement(E.a,{id:"edit-weight",type:"number",value:t,name:"weight",onChange:n})))},k=function(e){var a=e.price,t=e.onChange;return d.a.createElement("div",null,d.a.createElement("label",{htmlFor:"edit-price"},"Price"),d.a.createElement(E.a,{id:"edit-price",type:"number",value:a,name:"price",onChange:t}))},L=t(73),S=t(59),F=t.n(S),j=t(111),I=function(e){return F.a.post("".concat(L.a,"/vacancies/logo"),e,{headers:{"Content-Type":"multipart/form-data",Authorization:j.a}})},_=function(e){return F.a.post("".concat(L.a,"/vacancies/cover"),e,{headers:{"Content-Type":"multipart/form-data",Authorization:j.a}})},x=(t(434),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=Object(r.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(i)))).fileInputLogo=d.a.createRef(),t.fileInputCover=d.a.createRef(),t.state={id:null,name:null,surname:null,domain:null,email:null,emailVerified:!1,slug:null,weight:null,price:null,markers:null,status:!0,job_title:null,experience:null,roles:[],logo:null,logoLoading:!1,cover:null,coverLoading:!1},t.onChange=function(e){"checkbox"===e.target.type?t.setState(Object(h.a)({},e.target.name,e.target.checked)):t.setState(Object(h.a)({},e.target.name,e.target.value))},t.onUploadLogo=function(e){e.preventDefault(),t.setState({logoLoading:!0});var a=new FormData,n=t.fileInputLogo.current.files[0];a.append("file",n),I(a).then(function(e){t.setState({logo:"".concat(L.a,"/containers/logo/download/").concat(e.data.name),logoLoading:!1})}).catch(function(e){return console.log(e)})},t.onUploadCover=function(e){e.preventDefault(),t.setState({coverLoading:!0});var a=new FormData,n=t.fileInputCover.current.files[0];a.append("file",n),_(a).then(function(e){t.setState({cover:"".concat(L.a,"/containers/cover/download/").concat(e.data.name),coverLoading:!1})}).catch(function(e){return console.log(e)})},t.onSubmit=function(e){e.preventDefault();var a=Object(p.a)(Object(p.a)(t)).state,n=t.props;(0,n.editRequest)(a,n.dataPath)},t}return Object(c.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.itemOriginal,a=e.id,t=e.name,n=e.surname,l=e.email,i=e.slug,r=e.weight,o=e.price,c=e.markers,m=e.emailVerified,d=e.status,u=e.job_title,s=e.experience,g=e.roles,h=e.domain,p=e.logo,v=e.cover;this.setState({id:a,name:t,surname:n,email:l,slug:i,weight:r,price:o,markers:c,emailVerified:m,status:d,job_title:u,experience:s,roles:g,domain:h,logo:p,cover:v})}},{key:"render",value:function(){var e=this.props,a=e.itemOriginal,t=e.dataPath,n=e.closeModal,l=e.modalLoading,i=this.state,r=i.id,o=i.name,c=i.email,m=i.slug,u=i.weight,s=i.price,g=i.markers,h=i.surname,p=i.emailVerified,E=i.status,L=i.job_title,S=i.experience,F=i.roles,j=i.domain,I=i.logo,_=i.logoLoading,x=i.cover,N=i.coverLoading;return d.a.createElement(d.a.Fragment,null,d.a.createElement("form",{action:"",onSubmit:this.onSubmit},d.a.createElement("header",{className:"form__title"},"Edit ",d.a.createElement("b",null,'"'.concat(a.id," - ").concat(a.name,'"'))),d.a.createElement(b,{id:r,name:o,onChange:this.onChange}),"companies"===t&&d.a.createElement(C,{slug:m,domain:j,weight:u,onChange:this.onChange,logo:I,logoLoading:_,onUploadLogo:this.onUploadLogo,fileInputLogo:this.fileInputLogo,cover:x,coverLoading:N,onUploadCover:this.onUploadCover,fileInputCover:this.fileInputCover}),"users"===t&&d.a.createElement(O,{email:c,roles:F,status:E,surname:h,job_title:L,experience:S,onChange:this.onChange,emailVerified:p}),"skills"===t&&d.a.createElement(y,{slug:m,weight:u,markers:g,onChange:this.onChange}),"vacancy_roles"===t&&d.a.createElement(w,{slug:m,weight:u,onChange:this.onChange}),"plans"===t&&d.a.createElement(k,{price:s,onChange:this.onChange}),d.a.createElement("footer",{className:"form__buttons"},l?d.a.createElement(f.a,null):d.a.createElement(d.a.Fragment,null,d.a.createElement(v.a,{outline:!0,color:"secondary",onClick:n},"Cancel"),d.a.createElement(v.a,{outline:!0,color:"primary",type:"submit"},"Save")))))}}]),a}(d.a.Component)),N=(t(436),function(e){var a=e.itemOriginal,t=e.closeModal,n=e.deleteRequest,l=e.modalLoading;return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"ReactModal__delete__title"},d.a.createElement("span",null,"Are you sure you want to delete ")," ",d.a.createElement("br",null),'"'.concat(a.id)," - ",d.a.createElement("b",null,"".concat(a.name,'"?'))),l?d.a.createElement(f.a,null):d.a.createElement("div",{className:"ReactModal__delete__buttons"},d.a.createElement(v.a,{outline:!0,color:"secondary",onClick:t},"Cancel"),d.a.createElement(v.a,{outline:!0,color:"danger",onClick:n},"Delete")))}),R=(t(438),function(e){e.name,e.id;return d.a.createElement("div",{className:"ReactModal__add"},"Add modal")}),A=(t(440),function(e){var a=e.type,t=e.dataPath,n=e.modalIsOpen,l=e.closeModal,i=e.itemOriginal,r=e.editRequest,o=e.deleteRequest,c=e.modalLoading;return d.a.createElement(d.a.Fragment,null,d.a.createElement(g.a,{ariaHideApp:!1,isOpen:n,overlayClassName:"ReactModal__Overlay",className:"ReactModal ReactModal__".concat(a),onRequestClose:!c&&l},"delete"===a&&d.a.createElement(N,{closeModal:l,itemOriginal:i,deleteRequest:o,modalLoading:c})||"edit"===a&&d.a.createElement(x,{dataPath:t,closeModal:l,itemOriginal:i,editRequest:r,modalLoading:c})||"add"===a&&d.a.createElement(R,{closeModal:l,itemOriginal:i,deleteRequest:o,modalLoading:c})))}),M=t(458),T=function(e){var a=e.type,t=e.itemOriginal;return d.a.createElement(d.a.Fragment,null,"delete"===a&&d.a.createElement(M.a,{color:"danger"},'"'.concat(t.id)," - ",d.a.createElement("b",null,"".concat(t.name,'" is deleted')))||"edit"===a&&d.a.createElement(M.a,{color:"warning"},'"'.concat(t.id)," - ",d.a.createElement("b",null,"".concat(t.name,'" is edited')))||"add"===a&&d.a.createElement(M.a,{color:"success"},"New item is added")||"error"===a&&d.a.createElement(M.a,{color:"danger"},d.a.createElement("b",null,"Error"),". Something is wrong!"))},V=function(e,a){var t=e.filtered,n={};return t.forEach(function(e){"id"===e.id?n[e.id]=e.value:n[e.id]={like:e.value+"%"}}),F.a.get("".concat(L.a,"/").concat(a,"/count"),{params:{where:n},headers:{Authorization:j.a}}).then(function(e){return e.data.count})},q=function(e,a,t){var n=e.pageSize,l=e.page,i=e.filtered,r=e.sorted,o={where:{},limit:n,skip:l*n,order:t};return i.forEach(function(e){"id"===e.id?o.where[e.id]=e.value:o.where[e.id]={like:e.value+"%"}}),r.forEach(function(e){var a=e.desc?"DESC":"ASC";o.order="".concat(e.id," ").concat(a)}),F.a.get("".concat(L.a,"/").concat(a),{params:{filter:o},headers:{Authorization:j.a}}).then(function(e){return e.data})},D=function(e,a){var t=e.id,n=e.name,l={Authorization:j.a},i="".concat(L.a,"/").concat(a,"/").concat(t);if("plans"===a){var r=e.price;return F.a.patch(i,{name:n,price:r,id:t},{headers:l})}if("companies"===a){var o=e.slug,c=e.domain,m=e.weight,d=e.logo,u=e.cover;return F.a.patch(i,{name:n,slug:o,domain:c,weight:m,logo:d,cover:u,id:t},{headers:l})}if("users"===a){var s=e.surname,g=e.email,h=e.emailVerified,p=(e.adminVerified,e.status),v=e.job_title,f=e.experience;return F.a.patch(i,{id:t,name:n,surname:s,email:g,emailVerified:h,status:p,job_title:v,experience:f},{headers:l})}if("vacancy_roles"===a){var E=e.slug,b=e.weight;return F.a.patch(i,{id:t,name:n,slug:E,weight:b},{headers:l})}if("skills"===a){var C=e.slug,O=e.markers;return F.a.patch(i,{name:n,slug:C,markers:O,id:t},{headers:l})}},P=function(e,a){return F.a.delete("".concat(L.a,"/").concat(e,"/").concat(a),{headers:{Authorization:j.a}})},z=t(418),U=(t(452),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=Object(r.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(i)))).state={data:[],count:null,loading:!1,itemOriginal:null,modalType:"",modalIsOpen:!1,modalLoading:!1,alertIsOpen:!1,idValue:""},t.deleteClick=function(e){return function(){t.setState({modalType:"delete",modalIsOpen:!0,itemOriginal:e,alertIsOpen:!1})}},t.delete=function(){var e=t.props.dataPath,a=t.state.itemOriginal.id;t.setState({modalLoading:!0}),P(e,a).then(function(){t.setState({modalIsOpen:!1,modalLoading:!1})}).then(function(){t.setState({alertIsOpen:!0}),setTimeout(function(){t.setState({alertIsOpen:!1}),window.location.reload()},2e3)}).catch(function(e){console.log(e),t.setState({alertIsOpen:!0,modalType:"error"})})},t.editClick=function(e){return function(){t.setState({modalType:"edit",modalIsOpen:!0,itemOriginal:e,alertIsOpen:!1})}},t.edit=function(e,a){D(e,a).then(t.setState({modalLoading:!0})).then(function(){t.setState({modalLoading:!1,modalIsOpen:!1,alertIsOpen:!0}),setTimeout(function(){t.setState({alertIsOpen:!1}),window.location.reload()},2e3)}).catch(function(e){return console.log(e)})},t.addClick=function(e){return function(){t.setState({modalType:"add",modalIsOpen:!0,itemOriginal:e})}},t}return Object(c.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this,a=[{Header:"Id",accessor:"id",width:60,style:{textAlign:"right"},Cell:function(e){var a=e.original;return d.a.createElement("div",null,a.id||"...")},Filter:function(e){var a=e.filter,t=e.onChange;return Object(z.a)(a,t)}}],t=[{Header:"",width:65,sortable:!1,filterable:!1,Cell:function(a){var t=a.original;return d.a.createElement("div",{className:"rt-custom__controls"},d.a.createElement("i",{className:"ion-android-delete",onClick:e.deleteClick(t)}),d.a.createElement("i",{className:"ion-edit",onClick:e.editClick(t)}))}}],l=this.props,i=l.columns,r=l.dataPath,o=l.startOrder,c=this.state,m=c.loading,s=c.count,g=c.data,h=c.modalIsOpen,p=c.itemOriginal,v=c.modalType,f=c.modalLoading,E=c.alertIsOpen;return d.a.createElement("div",{className:"".concat(r,"-table")},E&&d.a.createElement(T,{type:v,itemOriginal:p}),d.a.createElement(A,{type:v,modalIsOpen:h,modalLoading:f,itemOriginal:p,dataPath:r,editRequest:this.edit,deleteRequest:this.delete,closeModal:function(){return e.setState({modalIsOpen:!1})}}),d.a.createElement(u.a,{data:g,manual:!0,pages:s,resizable:!0,filterable:!0,loading:m,className:"-striped -highlight",columns:[].concat(a,Object(n.a)(i),t),dataPath:r,startOrder:o,onFetchData:function(a){e.setState({loading:!0}),V(a,r).then(function(t){return e.setState({count:Math.ceil(t/a.pageSize)})}).then(function(){return q(a,r,o)}).then(function(a){return e.setState({data:a,loading:!1})}).catch(function(e){return console.log(e)})}}))}}]),a}(d.a.Component));a.a=U},434:function(e,a,t){},436:function(e,a,t){},438:function(e,a,t){},440:function(e,a,t){},452:function(e,a,t){}}]);
//# sourceMappingURL=1.4ed77f7c.chunk.js.map