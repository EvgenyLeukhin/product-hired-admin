(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{419:function(e,a,t){"use strict";t.d(a,"a",function(){return u});var n=t(10),l=t(11),i=t(13),o=t(12),r=t(14),c=t(0),s=t.n(c),d=t(30),m=t.n(d);function u(e){return function(a){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(r.a)(t,a),Object(l.a)(t,[{key:"render",value:function(){var a={setHeaderTitle:function(e){m.a.publish("setPageTitle",e)}};return s.a.createElement(e,Object.assign({},this.props,a))}}]),t}(c.Component)}},420:function(e,a,t){"use strict";var n=t(0),l=t.n(n),i=t(448);t(421);a.a=function(e){return l.a.createElement(i.a,Object.assign({},e,{resizable:!0,filterable:!0,className:"-striped -highlight"}))}},421:function(e,a,t){},423:function(e,a,t){"use strict";var n=t(0),l=t.n(n),i=t(669);a.a=function(e){var a=e.type,t=e.original,n=e.errorText,o=e.errorAlertIsOpen,r=e.closeErrorAlert,c=t.surname?"".concat(t.name," ").concat(t.surname):"".concat(t.name);return l.a.createElement(l.a.Fragment,null,"add"===a&&l.a.createElement(i.a,{color:"success"},"New item has been added")||"edit"===a&&l.a.createElement(i.a,{color:"warning"},'"'.concat(t.id)," - ",l.a.createElement("b",null,c," has been edited"))||"delete"===a&&l.a.createElement(i.a,{color:"danger"},'"'.concat(t.id)," - ",l.a.createElement("b",null,c," has been deleted"))||"error"===a&&l.a.createElement(i.a,{color:"danger",isOpen:o,toggle:r},n)||"copy"===a&&l.a.createElement(i.a,{color:"warning"},"Copied"))}},424:function(e,a,t){"use strict";var n=t(0),l=t.n(n),i=t(418),o=t.n(i);t(425),t(427),t(429);a.a=function(e){var a=e.isOpen,t=e.modalLoading,n=e.closeModal;return l.a.createElement(o.a,Object.assign({},e,{ariaHideApp:!1,isOpen:a,overlayClassName:"ReactModal__Overlay",className:"ReactModal ReactModal__edit",portalClassName:"ReactModal__Portal__edit",onRequestClose:!t&&n}),e.children)}},425:function(e,a,t){},427:function(e,a,t){},429:function(e,a,t){},432:function(e,a,t){"use strict";var n=t(0),l=t.n(n),i=t(529),o=t(6),r=t.n(o);t(433);a.a=function(e){var a=e.text,t=e.loading,n=e.addClick;return l.a.createElement(i.a,{type:"button",color:"primary",onClick:n,className:r()("add-button",{"is-loading":t})},"Add ",a)}},433:function(e,a,t){},435:function(e,a,t){"use strict";var n=t(0),l=t.n(n),i=t(418),o=t.n(i);t(436),t(438);a.a=function(e){var a=e.isOpen,t=e.modalLoading,n=e.closeModal;return l.a.createElement(o.a,Object.assign({},e,{ariaHideApp:!1,isOpen:a,overlayClassName:"ReactModal__Overlay",className:"ReactModal ReactModal__add",portalClassName:"ReactModal__Portal__add",onRequestClose:!t&&n}),e.children)}},436:function(e,a,t){},438:function(e,a,t){},440:function(e,a,t){"use strict";var n=t(0),l=t.n(n),i=t(418),o=t.n(i);t(441);a.a=function(e){var a=e.isOpen,t=e.modalLoading,n=e.closeModal;return l.a.createElement(o.a,Object.assign({},e,{ariaHideApp:!1,isOpen:a,overlayClassName:"ReactModal__Overlay",className:"ReactModal ReactModal__delete",portalClassName:"ReactModal__Portal__delete",onRequestClose:!t&&n}),e.children)}},441:function(e,a,t){},568:function(e,a,t){},678:function(e,a,t){"use strict";t.r(a);var n=t(43),l=t(5),i=t(10),o=t(11),r=t(13),c=t(12),s=t(14),d=t(112),m=t(0),u=t.n(m),p=t(420),g=t(423),h=t(432),f=t(435),b=t(111),v=t(529),E=function(e){var a=e.name,t=e.surname,n=e.password,l=e.email,i=e.isOpen,o=e.closeModal,r=e.onChange,c=e.onSubmit,s=e.modalLoading;return u.a.createElement(f.a,{isOpen:i,modalLoading:s,closeModal:o},u.a.createElement("section",{className:"section-container add-container"},u.a.createElement("h4",{className:"add-container__title"},"Add user"),u.a.createElement("span",{className:"ion-close-round add-container__close",onClick:o}),u.a.createElement("div",{className:"cardbox"},u.a.createElement("div",{className:"cardbox-body"},u.a.createElement("form",{action:"",onSubmit:c},u.a.createElement("fieldset",null,u.a.createElement("div",{className:"form-group row"},u.a.createElement("div",{className:"col-md-6"},u.a.createElement("label",{htmlFor:"add-name"},"Name"),u.a.createElement("input",{required:!0,autoComplete:"off",name:"name",value:a,id:"add-name",onChange:r,type:"text",className:"form-control"})),u.a.createElement("div",{className:"col-md-6"},u.a.createElement("label",{htmlFor:"add-surname"},"Surname"),u.a.createElement("input",{required:!0,autoComplete:"off",name:"surname",value:t,id:"add-surname",onChange:r,type:"text",className:"form-control"})),u.a.createElement("div",{className:"col-md-6"},u.a.createElement("label",{htmlFor:"add-password"},"Password"),u.a.createElement("input",{required:!0,autoComplete:"off",name:"password",value:n,id:"add-password",onChange:r,type:"password",className:"form-control"})),u.a.createElement("div",{className:"col-md-6"},u.a.createElement("label",{htmlFor:"add-email"},"Email"),u.a.createElement("input",{required:!0,autoComplete:"off",name:"email",value:l,id:"add-email",onChange:r,type:"email",className:"form-control"})))),s?u.a.createElement("div",{className:"add-container__is-loading"},u.a.createElement(b.a,null)):u.a.createElement("footer",{className:"add-container__buttons"},u.a.createElement(v.a,{outline:!0,color:"secondary",onClick:o},"Cancel"),u.a.createElement(v.a,{disabled:!a,outline:!0,color:"primary",type:"submit"},"Save")))))))},_=t(498),y=t(464),C=t(477),N=t.n(C),S=t(424),O=t(58),k=t.n(O),I=t(57),M=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return k.a.get("".concat(I.a,"/").concat(I.b,"/skills"),{params:{filter:{where:{name:{like:"%".concat(e,"%")}},limit:50}},headers:{Authorization:a}})},x=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return k.a.get("".concat(I.a,"/").concat(I.b,"/locations"),{params:{filter:{where:{or:[{name:{like:"%".concat(e,"%")}},{country:{like:"%".concat(e,"%")}}]},limit:50}},headers:{Authorization:a}})},w=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return k.a.get("".concat(I.a,"/").concat(I.b,"/vacancy_roles"),{params:{filter:{where:{name:{like:"%".concat(e,"%")}},limit:10}},headers:{Authorization:a}})},A=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return k.a.get("".concat(I.a,"/").concat(I.b,"/user_roles"),{params:{filter:{where:{name:{like:"%".concat(e,"%")}},limit:10}},headers:{Authorization:a}})},L=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return k.a.get("".concat(I.a,"/").concat(I.b,"/companies"),{params:{filter:{where:{name:{like:"%".concat(e,"%")}},limit:30}},headers:{Authorization:a}})},R=[{value:1,label:"Junior"},{value:2,label:"Mid level"},{value:3,label:"Senior"},{value:4,label:"Managment"}],F=[{value:0,label:"0"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"},{value:9,label:"9"},{value:10,label:"10"}],j=(t(568),function(e){var a=e.original,t=e.name,n=e.surname,l=e.email,i=e.job_title,o=e.emailVerified,r=e.admin,c=(e.status,e.banned),s=e.experience,d=e.skills,m=e.created,p=e.modified,g=e.emailSettings,h=e.emailJobApplication,f=e.emailMarketing,E=e.seniority,C=e.seniority_id,O=e.location,k=e.location_id,I=e.userRole,j=e.user_role_id,J=(e.roles,e.role),T=e.role_id,V=e.company,D=e.company_id,P=e.image,z=e.imageLoading,U=e.fileInputImage,H=e.onUploadImage,W=e.deleteImage,q=e.onChangeImage,B=e.onDeleteImage,G=e.isOpen,K=e.closeModal,Q=e.onChange,X=e.onSubmit,Y=e.modalLoading,Z=e.deleteClick,$=e.onChangeSkills,ee=e.onChangeLocation,ae=e.onChangeSeniority,te=e.onChangeUserRole,ne=e.onChangeRole,le=e.onChangeCompany,ie=e.onChangeExperience,oe=e.onChangeRoles;return u.a.createElement(S.a,{isOpen:G,modalLoading:Y,closeModal:K},u.a.createElement("section",{className:"section-container edit-container edit-user"},u.a.createElement("h4",{className:"edit-container__title"},"Edit: ",u.a.createElement("b",null,"".concat(a.name," ").concat(a.surname))),u.a.createElement("span",{className:"ion-close-round edit-container__close",onClick:K}),u.a.createElement("div",{className:"cardbox"},u.a.createElement("div",{className:"cardbox-body"},u.a.createElement("form",{action:"",onSubmit:X},u.a.createElement("fieldset",null,u.a.createElement("div",{className:"form-group row"},u.a.createElement("div",{className:"col-md-3  edit-user__left"},u.a.createElement("div",{className:"edit-image"},u.a.createElement("label",{htmlFor:"edit-image",className:"edit-image__label"},"Profile photo"),z?u.a.createElement(b.a,null):!N()(P)&&P.url?u.a.createElement("img",{className:"image",src:"".concat(P.url),alt:"image"}):u.a.createElement("div",{className:"no-image"},"No image"),u.a.createElement("input",{id:"edit-image",type:"file",className:"input-file-custom",ref:U,onChange:H}),u.a.createElement("div",{className:"edit-image__buttons"},u.a.createElement("label",{htmlFor:"edit-image",className:"input-file-label  btn btn-light"},u.a.createElement("i",{className:"ion-image"}),"\xa0",u.a.createElement("span",null,"Choose a file")),u.a.createElement(v.a,{disabled:!P.url,outline:!0,color:"danger",onClick:B},"Delete photo"))),u.a.createElement("div",{className:"edit-image-url",hidden:!0},u.a.createElement("label",{htmlFor:"edit-image-url"},"Image URL"),u.a.createElement("div",{className:"input-group"},u.a.createElement("input",{name:"image",value:!N()(P)&&P.url?P.url:"",id:"edit-image-url",onChange:q,type:"url",className:"form-control",placeholder:"Please, paste image URL or load file"}),u.a.createElement("div",{className:"input-group-append"},u.a.createElement("button",{className:"btn btn-light",type:"button",onClick:W,disabled:!N()(P)&&!P.url},"Clear")))),u.a.createElement("div",{className:"created"},u.a.createElement("label",{htmlFor:"edit-created"},"Created"),u.a.createElement("input",{disabled:!0,name:"created",value:m&&"".concat(m.substring(0,10),", ").concat(m.substring(11,16),"UTC"),id:"edit-created",type:"text",className:"form-control"})),u.a.createElement("div",{className:"modified"},u.a.createElement("label",{htmlFor:"edit-modified"},"Modified"),u.a.createElement("input",{disabled:!0,name:"modified",value:p&&"".concat(p.substring(0,10),", ").concat(p.substring(11,16),"UTC"),id:"edit-modified",type:"text",className:"form-control"})),u.a.createElement("div",{className:"admin"},u.a.createElement("label",{htmlFor:"edit-modified"},"Admin status"),u.a.createElement("div",{className:"custom-checkbox"},u.a.createElement("label",{className:"switch switch-warn switch-primary"},u.a.createElement("input",{id:"edit-admin",name:"admin",type:"checkbox",checked:r,onChange:oe}),u.a.createElement("span",null)),u.a.createElement("label",{htmlFor:"edit-admin",style:{fontWeight:"normal",paddingLeft:0,marginBottom:0}},r?"Site admin":"Not an admin")))),u.a.createElement("div",{className:"col-md-9  edit-user__right"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-4"},u.a.createElement("label",{htmlFor:"edit-name"},"Name"),u.a.createElement("input",{required:!0,name:"name",value:t,id:"edit-name",onChange:Q,type:"text",className:"form-control"})),u.a.createElement("div",{className:"col-md-4"},u.a.createElement("label",{htmlFor:"edit-name"},"Last name"),u.a.createElement("input",{required:!0,name:"surname",value:n,id:"edit-surname",onChange:Q,type:"text",className:"form-control"})),u.a.createElement("div",{className:"col-md-4"},u.a.createElement("label",{htmlFor:"edit-location_id"},"Location"),u.a.createElement("input",{hidden:!0,name:"location_id",value:k,id:"edit-location_id",onChange:Q,type:"number",className:"form-control"}),u.a.createElement(y.a,{menuPlacement:"auto",cacheOptions:!0,defaultOptions:!0,loadOptions:function(e){return x(e).then(function(e){return e.data})},getOptionValue:function(e){return e.id},getOptionLabel:function(e){return u.a.createElement("div",null,u.a.createElement("span",null,"".concat(e.name&&e.name+", "," ")),u.a.createElement("span",{style:{color:"#3498db",textShadow:"1px 1px 0 #fff"}},e.alias_region))},value:O,onChange:ee})),u.a.createElement("div",{className:"col-md-4"},u.a.createElement("label",{htmlFor:"edit-email"},"Email"),u.a.createElement("input",{required:!0,name:"email",value:l,id:"edit-email",onChange:Q,type:"email",className:"form-control"})),u.a.createElement("div",{className:"col-md-4"},u.a.createElement("label",{htmlFor:"edit-emailVerified"},"Email verified"),u.a.createElement("div",{className:"custom-checkbox"},u.a.createElement("label",{className:"switch switch-warn switch-primary"},u.a.createElement("input",{id:"edit-emailVerified",name:"emailVerified",type:"checkbox",checked:o,onChange:Q}),u.a.createElement("span",null)),u.a.createElement("label",{htmlFor:"edit-emailVerified",style:{fontWeight:"normal",paddingLeft:0,marginBottom:0}},o?"Verified":"Not verified"))),u.a.createElement("div",{className:"col-md-4"},u.a.createElement("label",{htmlFor:"edit-banned"},"User activity"),u.a.createElement("div",{className:"custom-checkbox"},u.a.createElement("label",{className:"switch switch-warn switch-success"},u.a.createElement("input",{id:"edit-banned",name:"banned",type:"checkbox",checked:!c,onChange:oe}),u.a.createElement("span",null)),u.a.createElement("label",{htmlFor:"edit-banned",style:{fontWeight:"normal",paddingLeft:0,marginBottom:0}},c?u.a.createElement("span",{style:{color:"#F44336"}},"Blocked"):u.a.createElement("span",{style:{color:"#4CAF50"}},"Active")))),u.a.createElement("div",{className:"col-md-12"},u.a.createElement("label",{htmlFor:"edit-skills"},"Skills"),u.a.createElement(y.a,{isMulti:!0,menuPlacement:"auto",cacheOptions:!0,defaultOptions:!0,loadOptions:function(e){return M(e).then(function(e){return e.data})},getOptionValue:function(e){return e.id},getOptionLabel:function(e){return e.name},onChange:$,value:d})),u.a.createElement("div",{className:"col-md-4"},u.a.createElement("label",{htmlFor:"edit-company_id"},"Current company"),u.a.createElement("input",{hidden:!0,name:"company_id",value:D,id:"edit-company_id",onChange:Q,type:"number",className:"form-control"}),u.a.createElement(y.a,{menuPlacement:"auto",cacheOptions:!0,defaultOptions:!0,loadOptions:function(e){return L(e).then(function(e){return e.data})},getOptionValue:function(e){return e.id},getOptionLabel:function(e){return e.name},value:V,onChange:le})),u.a.createElement("div",{className:"col-md-4"},u.a.createElement("label",{htmlFor:"edit-job_title"},"Job title"),u.a.createElement("input",{name:"job_title",value:i,id:"edit-job_title",onChange:Q,type:"text",className:"form-control"})),u.a.createElement("div",{className:"col-md-4"},u.a.createElement("label",{htmlFor:"edit-role_id"},"Product role"),u.a.createElement("input",{hidden:!0,name:"role_id",value:T,id:"edit-role_id",onChange:Q,type:"number",className:"form-control"}),u.a.createElement(y.a,{menuPlacement:"auto",cacheOptions:!0,defaultOptions:!0,loadOptions:function(e){return w(e).then(function(e){return e.data})},getOptionValue:function(e){return e.id},getOptionLabel:function(e){return e.name},value:J,onChange:ne})),u.a.createElement("div",{className:"col-md-4"},u.a.createElement("label",{htmlFor:"edit-seniority_id"},"Seniority"),u.a.createElement("input",{hidden:!0,name:"seniority_id",value:C,id:"edit-seniority_id",onChange:Q,type:"number",className:"form-control"}),u.a.createElement(_.a,{value:E,onChange:ae,options:R})),u.a.createElement("div",{className:"col-md-2"},u.a.createElement("label",{htmlFor:"edit-experience"},"Experience"),u.a.createElement("input",{hidden:!0,required:!0,min:0,max:50,name:"experience",value:s.value,id:"edit-experience",onChange:Q,type:"number",className:"form-control"}),u.a.createElement(_.a,{value:s,onChange:ie,options:F})),u.a.createElement("div",{className:"col-md-6"},u.a.createElement("label",{htmlFor:"edit-user_role_id"},"Main reason for using ProductHired"),u.a.createElement("input",{hidden:!0,name:"user_role",value:j,id:"edit-user_role",onChange:Q,type:"number",className:"form-control"}),u.a.createElement(y.a,{menuPlacement:"auto",cacheOptions:!0,defaultOptions:!0,loadOptions:function(e){return A(e).then(function(e){return e.data})},getOptionValue:function(e){return e.id},getOptionLabel:function(e){return e.name},value:I,onChange:te})),u.a.createElement("div",{className:"col-md-9  notifications"},u.a.createElement("label",null,"Notifications"),u.a.createElement("div",{className:"custom-control custom-checkbox"},u.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"edit-emailSettings",name:"emailSettings",checked:g,onChange:Q}),u.a.createElement("label",{className:"custom-control-label",htmlFor:"edit-emailSettings",style:{fontWeight:"normal"}},"When account settings have been modified")),u.a.createElement("div",{className:"custom-control custom-checkbox"},u.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"edit-emailJobApplication",name:"emailJobApplication",checked:h,onChange:Q}),u.a.createElement("label",{className:"custom-control-label",htmlFor:"edit-emailJobApplication",style:{fontWeight:"normal"}},"When job settings has been viewed")),u.a.createElement("div",{className:"custom-control custom-checkbox"},u.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"edit-emailMarketing",name:"emailMarketing",checked:f,onChange:Q}),u.a.createElement("label",{className:"custom-control-label",htmlFor:"edit-emailMarketing",style:{fontWeight:"normal"}},"Allow receiving marketing emails"))))))),Y?u.a.createElement("div",{className:"edit-container__is-loading"},u.a.createElement(b.a,null)):u.a.createElement("footer",{className:"edit-container__buttons"},u.a.createElement(v.a,{outline:!0,color:"danger",onClick:Z},"Delete"),u.a.createElement(v.a,{outline:!0,color:"secondary",onClick:K},"Cancel"),u.a.createElement(v.a,{disabled:!t,outline:!0,color:"primary",type:"submit"},"Save")))))))}),J=t(440),T=function(e){var a=e.isOpen,t=e.modalLoading,n=e.closeModal,l=e.original,i=e.deleteSubmit;return u.a.createElement(J.a,{isOpen:a,modalLoading:t,closeModal:n},u.a.createElement("section",{className:"section-container delete-container"},u.a.createElement("span",{className:"ion-close-round ReactModal__delete__close",onClick:n}),u.a.createElement("div",{className:"ReactModal__delete__title"},u.a.createElement("span",null,"Are you sure you want to delete ")," ",u.a.createElement("br",null),u.a.createElement("span",null,l.id," - ",u.a.createElement("b",null,"".concat(l.name," ").concat(l.surname)),"?")),t?u.a.createElement("div",{className:"ReactModal__delete__is-loading"},u.a.createElement(b.a,null)):u.a.createElement("footer",{className:"ReactModal__delete__buttons"},u.a.createElement(v.a,{outline:!0,color:"secondary",onClick:n},"Cancel"),u.a.createElement(v.a,{outline:!0,color:"danger",onClick:i},"Delete"))))},V=t(419),D=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return k.a.get("".concat(I.a,"/").concat(I.b,"/users/").concat(e),{headers:{Authorization:a}})},P=t(666),z=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id,t=e.pageSize,n=e.page,l=e.filtered,i=e.sorted,o={where:{},limit:t,skip:n*t,order:"id DESC"};return l.forEach(function(e){if("id"===e.id)o.where[e.id]=e.value;else if("user_role_id"===e.id)e.value?o.where[e.id]=Number(e.value):o.where[e.id]=null;else if("created"===e.id){var a=e.value&&Object(P.default)(e.value,"yyyy-MM-dd");if(a)return o.where.created={gt:a};o.order=e.value?"created DESC":"id DESC"}else o.where[e.id]={like:"%"+e.value+"%"}}),i.forEach(function(e){var a=e.desc?"DESC":"ASC";o.order="".concat(e.id," ").concat(a)}),k.a.get("".concat(I.a,"/").concat(I.b,"/users"),{params:{filter:o},headers:{Authorization:a}})},U=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id,t=e.filtered,n={};return t.forEach(function(e){if("id"===e.id)n[e.id]=e.value;else if("user_role_id"===e.id)e.value?n[e.id]=Number(e.value):n[e.id]=null;else if("created"===e.id){var a=e.value&&Object(P.default)(e.value,"yyyy-MM-dd");if(a)return n.created={gt:a}}else n[e.id]={like:"%"+e.value+"%"}}),k.a.get("".concat(I.a,"/").concat(I.b,"/users/count"),{params:{where:n},headers:{Authorization:a}})},H=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return k.a.get("".concat(I.a,"/").concat(I.b,"/locations/").concat(e),{params:{filter:{limit:1}},headers:{Authorization:a}})},W=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return k.a.get("".concat(I.a,"/").concat(I.b,"/vacancy_roles/").concat(e),{params:{filter:{limit:1}},headers:{Authorization:a}})},q=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return k.a.get("".concat(I.a,"/").concat(I.b,"/companies/").concat(e),{params:{filter:{limit:1}},headers:{Authorization:a}})},B=function(e,a,t,n){var l=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return k.a.post("".concat(I.a,"/").concat(I.b,"/users"),{name:e,surname:a,password:t,email:n},{headers:{Authorization:l}})},G=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id,t=e.id,n=e.name,l=e.surname,i=e.email,o=e.job_title,r=e.emailVerified,c=e.admin,s=e.banned,d=e.experience,m=e.image,u=e.skills,p=e.emailSettings,g=e.emailJobApplication,h=e.emailMarketing,f=e.seniority_id,b=e.location_id,v=e.user_role_id,E=e.role_id,_=e.company_id;return k.a.patch("".concat(I.a,"/").concat(I.b,"/users/").concat(t),{name:n,surname:l,email:i,job_title:o,emailVerified:r,admin:c,banned:s,experience:d.value,image:m,skills:u,emailSettings:p,emailJobApplication:g,emailMarketing:h,seniority_id:f,location_id:b,user_role_id:v,role_id:E,company_id:_,modified:"".concat((new Date).toISOString())},{headers:{Authorization:a}})},K=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return k.a.delete("".concat(I.a,"/").concat(I.b,"/users/").concat(e),{headers:{Authorization:a}})},Q=function(e,a){var t=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return k.a.post("".concat(I.a,"/").concat(I.b,"/users/").concat(a,"/uploadImage"),e,{headers:{Authorization:t}})},X=t(505),Y=t.n(X),Z=t(444),$=(t(504),[{Header:"Id",accessor:"id",width:60,style:{textAlign:"right"},Cell:function(e){var a=e.original.id;return u.a.createElement("div",{className:"ellipsis-text",title:a||""},a||"")},Filter:function(e){var a=e.filter,t=e.onChange;return u.a.createElement(Z.Input,{value:a?a.value:"",onChange:function(e){return t(e.target.value)},style:{width:"100%",height:"38px"},debounceTimeout:800})}},{Header:"Name",accessor:"name",style:{fontWeight:"bold"},Cell:function(e){var a=e.original.name;return u.a.createElement("div",{className:"table-column-name  ellipsis-text",title:a||""},a||"")},Filter:function(e){var a=e.filter,t=e.onChange;return u.a.createElement(Z.Input,{value:a?a.value:"",onChange:function(e){return t(e.target.value)},style:{width:"100%",height:"38px"},debounceTimeout:800})}},{Header:"Last name",accessor:"surname",style:{fontWeight:"bold"},Cell:function(e){var a=e.original.surname;return u.a.createElement("div",{className:"table-column-name  ellipsis-text",title:a||""},a||"")},Filter:function(e){var a=e.filter,t=e.onChange;return u.a.createElement(Z.Input,{value:a?a.value:"",onChange:function(e){return t(e.target.value)},style:{width:"100%",height:"38px"},debounceTimeout:800})}},{Header:"Email",accessor:"email",Cell:function(e){var a=e.original,t=a.email;return t?u.a.createElement("div",{className:"ellipsis-text"},u.a.createElement("a",{href:"mailto:".concat(a.email),title:t,onClick:function(e){return e.stopPropagation()}},t)):""},Filter:function(e){var a=e.filter,t=e.onChange;return u.a.createElement(Z.Input,{value:a?a.value:"",onChange:function(e){return t(e.target.value)},style:{width:"100%",height:"38px"},debounceTimeout:800})}},{Header:"Role",accessor:"user_role_id",width:100,Cell:function(e){var a=e.original.user_role_id,t=a?(1===a?"Talent":2===a&&"Both")||3===a&&"Recruiter":"Null";return u.a.createElement("div",{className:"ellipsis-text",title:t},t)},Filter:function(e){var a=e.filter,t=e.onChange;return u.a.createElement("select",{onChange:function(e){return"Null"===e.target.value?t(null):t(e.target.value)},style:{width:"100%",height:"38px"},value:a?a.value:""},u.a.createElement("option",{value:""},"All"),u.a.createElement("option",{value:null},"Null"),u.a.createElement("option",{value:1},"Talent"),u.a.createElement("option",{value:2},"Both"),u.a.createElement("option",{value:3},"Recruiter"))}},{Header:"Created",accessor:"created",width:120,Cell:function(e){var a=e.original.created;return u.a.createElement("div",{className:"ellipsis-text",title:a&&a.substring(0,10)||""},u.a.createElement("span",null,a&&a.substring(0,10)||""))},Filter:function(e){var a=e.filter,t=e.onChange;return u.a.createElement(Y.a,{placeholderText:"Select date...",isClearable:!!a,className:"created-datepicker",selected:a?a.value:"",onChange:function(e){return t(e)}})}},{Header:"Access",accessor:"roles",width:110,filterable:!1,sortable:!1,Cell:function(e){var a=e.original.roles,t=a?a.map(function(e){return e.name}):[];return N()(t)?null:u.a.createElement("span",{className:"roles-string"},t.join(", "))}}]),ee=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(t=Object(r.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(o)))).fileInputImage=u.a.createRef(),t.state={users:[],usersCount:null,tableLoading:!1,original:{},count:null,alertIsOpen:!1,alertType:"",alertErrorText:"",errorAlertIsOpen:!1,addModalIsOpen:!1,editModalIsOpen:!1,deleteModalIsOpen:!1,modalLoading:!1,id:null,name:"",surname:"",password:"",email:"",job_title:"",emailVerified:!1,admin:!1,status:!0,banned:!1,experience:{value:0,label:"0"},skills:[],created:"",modified:"",emailSettings:!0,emailJobApplication:!0,emailMarketing:!0,seniority:{},seniority_id:null,location:{id:null,name:"",alias_region:""},location_id:null,userRole:{id:null,name:""},user_role_id:null,roles:[],role:{id:null,name:""},role_id:null,company:{id:null,name:""},company_id:null,image:{url:"",icon:"",color:""},imageLoading:!1},t.resetFields=function(){t.setState({name:"",surname:"",password:"",email:"",job_title:"",emailVerified:!1,admin:!1,status:!0,banned:!1,experience:{value:0,label:"0"},skills:[],created:"",modified:"",emailSettings:!0,emailJobApplication:!0,emailMarketing:!0,seniority:{},seniority_id:null,location:{id:null,name:"",alias_region:""},location_id:null,userRole:{id:null,name:""},user_role_id:null,roles:[],role:{id:null,name:""},role_id:null,company:{id:null,name:""},company_id:null,image:{url:"",icon:"",color:""},imageLoading:!1})},t.onChange=function(e){"checkbox"===e.target.type?t.setState(Object(l.a)({},e.target.name,e.target.checked)):t.setState(Object(l.a)({},e.target.name,e.target.value))},t.onChangeImage=function(e){t.setState({image:{url:"".concat(e.target.value)}})},t.onChangeSkills=function(e){return t.setState({skills:e})},t.onChangeExperience=function(e){return t.setState({experience:e})},t.onChangeSeniority=function(e){t.setState({seniority:e,seniority_id:e.value})},t.onChangeLocation=function(e){t.setState({location:e,location_id:e.id})},t.onChangeUserRole=function(e){t.setState({userRole:e,user_role_id:e.id})},t.onChangeRole=function(e){t.setState({role:e,role_id:e.id})},t.onChangeCompany=function(e){t.setState({company:e,company_id:e.id})},t.onChangeRoles=function(e){var a=e.target.name,n=t.state,l=n.admin,i=n.banned;"admin"===a&&t.setState({admin:!l,roles:[{name:l?"":"admin"},{name:i?"banned":""}]}),"banned"===a&&t.setState({banned:!i,roles:[{name:l?"admin":""},{name:i?"":"banned"}]})},t.catchErrors=function(e){401===e.response.status?(localStorage.removeItem("ph-admin-user-data"),t.props.history.push("/login")):t.setState({errorAlertIsOpen:!0,modalLoading:!1,imageLoading:!1,alertType:"error",alertIsOpen:!0,alertErrorText:"".concat(e,", ").concat(e.response.data.error.message)})},t.addClick=function(){t.setState({addModalIsOpen:!0,alertIsOpen:!1,name:"",surname:"",password:"",email:"",job_title:"",emailVerified:!1,status:!0,banned:!1,experience:{value:0,label:"0"},image:{url:"",icon:"",color:""},location:{id:null,name:"",alias_region:""},skills:[],created:null,modified:null,roles:[],emailSettings:!0,emailJobApplication:!0,emailMarketing:!0})},t.addSubmit=function(e){e.preventDefault(),t.setState({modalLoading:!0,errorAlertIsOpen:!1});var a=t.state,n=a.name,l=a.surname,i=a.password,o=a.email,r=a.users;B(n,l,i,o).then(function(e){var a=[e.data].concat(r);t.setState({modalLoading:!1,addModalIsOpen:!1,users:a}),t.editAfterAdd(e.data)}).catch(function(e){return t.catchErrors(e)})},t.editAfterAdd=function(e){t.setState({addModalIsOpen:!1,editModalIsOpen:!0,original:e,id:e.id,name:e.name,surname:e.surname,email:e.email,created:e.created,modified:e.modified,alertIsOpen:!1})},t.editClick=function(e){return function(a){a.stopPropagation(),t.resetFields(),t.setState({id:e.id,original:e,editModalIsOpen:!0,modalLoading:!0,alertIsOpen:!1,imageLoading:!1}),D(e.id).then(function(a){var n=a.data;t.setState({original:e,modalLoading:!1,id:n.id,name:n.name,surname:n.surname,email:n.email,job_title:n.job_title,emailVerified:n.emailVerified,status:n.status,experience:{value:n.experience?Number(n.experience):0,label:n.experience?"".concat(n.experience):"0"},image:n.image,skills:n.skills,created:n.created,modified:n.modified,emailSettings:n.emailSettings,emailJobApplication:n.emailJobApplication,emailMarketing:n.emailMarketing,seniority_id:n.seniority_id,location_id:n.location_id,user_role_id:n.user_role_id,userRole:n.userRole,role_id:n.role_id,roles:n.roles,company_id:n.company_id});var l=t.state.roles;l&&l.map(function(e){return"admin"===e.name&&t.setState({admin:!0})}),l&&l.map(function(e){return"banned"===e.name&&t.setState({banned:!0})});var i=t.state.seniority_id;i?R.map(function(e){e.value===i&&t.setState({seniority:e})}):t.setState({seniority:{}})}).then(function(){var e=t.state.location_id;t.setState({location:{id:null,name:"Loading ...",alias_region:""}}),e?H(e).then(function(e){t.setState({location:e.data,location_id:e.data.id})}):t.setState({location:{id:null,name:"",alias_region:""}});var a=t.state.role_id;t.setState({role:{id:null,name:"Loading..."}}),a?W(a).then(function(e){t.setState({role:e.data,role_id:e.data.id})}):t.setState({role:{id:null,name:""}});var n=t.state.company_id;t.setState({company:{id:null,name:"Loading..."}}),n?q(n).then(function(e){t.setState({company:e.data,company_id:e.data.id})}):t.setState({company:{id:null,name:""}})}).catch(function(e){return t.catchErrors(e)})}},t.editSubmit=function(e){e.preventDefault(),t.setState({modalLoading:!0,errorAlertIsOpen:!1});var a=Object(d.a)(Object(d.a)(t)).state,n=t.state,l=n.id,i=n.name,o=n.surname,r=n.email,c=n.job_title,s=n.emailVerified,m=n.admin,u=n.status,p=n.banned,g=n.experience,h=n.image,f=n.skills,b=n.created,v=n.emailSettings,E=n.emailJobApplication,_=n.emailMarketing,y=n.seniority_id,C=n.seniority,N=n.location_id,S=n.location,O=n.userRole,k=n.user_role_id,I=n.roles,M=n.role,x=n.role_id,w=n.company,A=n.company_id;G(a).then(function(){for(var e=t.state.users,a=0;a<e.length;a++)e[a].id===l&&(e[a]={id:l,name:i,surname:o,email:r,job_title:c,emailVerified:s,admin:m,status:u,banned:p,experience:g.value,image:h,skills:f,created:b,emailSettings:v,emailJobApplication:E,emailMarketing:_,seniority_id:y,seniority:C,location_id:N,location:S,userRole:O,user_role_id:k,roles:I,role:M,role_id:x,company:w,company_id:A,modified:"".concat((new Date).toISOString())},console.log(e[a].userRole));t.setState({users:e,modalLoading:!1,editModalIsOpen:!1,alertType:"edit",alertIsOpen:!0}),setTimeout(function(){t.setState({alertIsOpen:!1})},2e3)}).catch(function(e){return t.catchErrors(e)})},t.onUploadImage=function(e){e.preventDefault(),t.setState({imageLoading:!0});var a=new FormData,n=t.state.id,l=t.fileInputImage.current.files[0];a.append("file",l),Q(a,n).then(function(e){t.setState({image:{url:"".concat(I.a).concat(e.data.file.url)},imageLoading:!1})}).catch(function(e){return t.catchErrors(e)})},t.deleteClick=function(e){return function(a){a.stopPropagation(),t.setState({original:e,deleteModalIsOpen:!0,alertIsOpen:!1})}},t.deleteSubmit=function(){var e=[],a=t.state,n=a.users,l=a.original.id;t.setState({modalLoading:!0,errorAlertIsOpen:!1}),K(l).then(function(){for(var a=0;a<n.length;a++)n[a].id!==l&&e.push(n[a]);t.setState({users:e,editModalIsOpen:!1,deleteModalIsOpen:!1,modalLoading:!1,alertType:"delete",alertIsOpen:!0}),setTimeout(function(){t.setState({alertIsOpen:!1})},2e3)}).catch(function(e){return t.catchErrors(e)})},t.onDeleteImage=function(){return t.setState({image:{url:""}})},t.closeAddModal=function(){return!t.state.modalLoading&&t.setState({addModalIsOpen:!1})},t.closeEditModal=function(){!t.state.modalLoading&&t.setState({editModalIsOpen:!1,imageLoading:!1})},t.closeDeleteModal=function(){return!t.state.modalLoading&&t.setState({deleteModalIsOpen:!1})},t.closeErrorAlert=function(){return t.setState({errorAlertIsOpen:!1})},t}return Object(s.a)(a,e),Object(o.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){this.props.setHeaderTitle("Users")}},{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keyup",function(a){return 27===a.keyCode&&e.closeEditModal()})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",function(e){return 27===e.keyCode})}},{key:"render",value:function(){var e=this,a=this.state,t=a.tableLoading,l=a.original,i=a.users,o=a.usersCount,r=a.name,c=a.surname,s=a.password,d=a.email,m=a.job_title,f=a.emailVerified,b=a.admin,v=a.status,_=a.banned,y=a.experience,C=a.skills,N=a.created,S=a.modified,O=a.emailSettings,k=a.emailJobApplication,I=a.emailMarketing,M=a.seniority_id,x=a.seniority,w=a.location,A=a.location_id,L=a.userRole,R=a.user_role_id,F=a.roles,J=a.role,V=a.role_id,D=a.company,P=a.company_id,H=a.image,W=a.imageLoading,q=a.addModalIsOpen,B=a.editModalIsOpen,G=a.modalLoading,K=a.deleteModalIsOpen,Q=a.alertIsOpen,X=a.alertType,Y=a.alertErrorText,Z=a.errorAlertIsOpen,ee=[{Header:"",width:30,sortable:!1,filterable:!1,Cell:function(a){var t=a.original;return u.a.createElement("div",{className:"rt-custom__controls"},u.a.createElement("i",{className:"ion-android-delete",onClick:e.deleteClick(t)}))}}];return u.a.createElement("div",{className:"users-page"},u.a.createElement("p",{className:"md-lg"},"Total records:\xa0",u.a.createElement("b",null,this.state.count&&this.state.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),Q&&u.a.createElement(g.a,{type:X,original:l,errorText:Y,errorAlertIsOpen:Z,closeErrorAlert:this.closeErrorAlert}),u.a.createElement(h.a,{text:"user",loading:G,addClick:this.addClick}),u.a.createElement(T,{isOpen:K,modalLoading:G,closeModal:this.closeDeleteModal,original:l,deleteSubmit:this.deleteSubmit}),u.a.createElement(E,{name:r,surname:c,password:s,email:d,isOpen:q,modalLoading:G,closeModal:this.closeAddModal,onChange:this.onChange,onSubmit:this.addSubmit}),u.a.createElement(j,{original:l,name:r,surname:c,email:d,job_title:m,emailVerified:f,admin:b,status:v,banned:_,experience:y,skills:C,created:N,modified:S,emailSettings:O,emailJobApplication:k,emailMarketing:I,seniority:x,seniority_id:M,location:w,location_id:A,userRole:L,user_role_id:R,role:J,role_id:V,roles:F,company:D,company_id:P,image:H,imageLoading:W,fileInputImage:this.fileInputImage,onUploadImage:this.onUploadImage,onDeleteImage:this.onDeleteImage,isOpen:B,modalLoading:G,closeModal:this.closeEditModal,onChange:this.onChange,onChangeImage:this.onChangeImage,onSubmit:this.editSubmit,deleteClick:this.deleteClick(l),onChangeSkills:this.onChangeSkills,onChangeSeniority:this.onChangeSeniority,onChangeLocation:this.onChangeLocation,onChangeUserRole:this.onChangeUserRole,onChangeRole:this.onChangeRole,onChangeCompany:this.onChangeCompany,onChangeExperience:this.onChangeExperience,onChangeRoles:this.onChangeRoles}),u.a.createElement(p.a,{manual:!0,data:i,pages:o,loading:t,columns:[].concat(Object(n.a)($),ee),getTheadFilterThProps:function(e,a,t){return{style:{overflow:"visible"}}},getTdProps:function(a,t,n,l){return{onClick:function(a){if(void 0!==t){n&&n.id;var l=t.original;return e.editClick(l)(a)}return null}}},onFetchData:function(a){e.setState({tableLoading:!0}),U(a).then(function(t){e.setState({count:t.data.count,usersCount:Math.ceil(t.data.count/a.pageSize)}),z(a).then(function(a){return e.setState({users:a.data,tableLoading:!1})}).catch(function(a){return e.catchErrors(a)})}).catch(function(a){return e.catchErrors(a)})}}))}}]),a}(u.a.Component);a.default=Object(V.a)(ee)}}]);
//# sourceMappingURL=4.57240812.chunk.js.map