(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{417:function(e,a,t){"use strict";t.d(a,"a",function(){return u});var n=t(10),i=t(11),l=t(14),o=t(12),r=t(13),c=t(0),s=t.n(c),d=t(30),m=t.n(d);function u(e){return function(a){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(r.a)(t,a),Object(i.a)(t,[{key:"render",value:function(){var a={setHeaderTitle:function(e){m.a.publish("setPageTitle",e)}};return s.a.createElement(e,Object.assign({},this.props,a))}}]),t}(c.Component)}},419:function(e,a,t){"use strict";var n=t(0),i=t.n(n),l=t(452);t(420);a.a=function(e){return i.a.createElement(l.a,Object.assign({},e,{resizable:!0,filterable:!0,className:"-striped -highlight"}))}},420:function(e,a,t){},422:function(e,a,t){"use strict";var n=t(112),i=t(0),l=t.n(i),o=t(639);a.a=function(e){var a=e.type,t=e.original,r=e.errorText,c=Object(i.useState)(!0),s=Object(n.a)(c,2),d=s[0],m=s[1],u=t.surname?"".concat(t.name," ").concat(t.surname):"".concat(t.name);return l.a.createElement(l.a.Fragment,null,"add"===a&&l.a.createElement(o.a,{color:"success"},"New item is added")||"edit"===a&&l.a.createElement(o.a,{color:"warning"},'"'.concat(t.id)," - ",l.a.createElement("b",null,u," is edited"))||"delete"===a&&l.a.createElement(o.a,{color:"danger"},'"'.concat(t.id)," - ",l.a.createElement("b",null,u," is deleted"))||"error"===a&&l.a.createElement(o.a,{color:"danger",isOpen:d,toggle:function(){return m(!1)}},r))}},423:function(e,a,t){"use strict";var n=t(0),i=t.n(n),l=t(416),o=t.n(l);t(424),t(426),t(428);a.a=function(e){var a=e.isOpen,t=e.modalLoading,n=e.closeModal;return i.a.createElement(o.a,Object.assign({},e,{ariaHideApp:!1,isOpen:a,overlayClassName:"ReactModal__Overlay",className:"ReactModal ReactModal__edit",portalClassName:"ReactModal__Portal__edit",onRequestClose:!t&&n}),e.children)}},424:function(e,a,t){},426:function(e,a,t){},428:function(e,a,t){},432:function(e,a,t){"use strict";var n=t(0),i=t.n(n),l=t(281),o=t(6),r=t.n(o);t(433);a.a=function(e){var a=e.text,t=e.loading,n=e.addClick;return i.a.createElement(l.a,{type:"button",color:"primary",onClick:n,className:r()("add-button",{"is-loading":t})},"Add ",a)}},433:function(e,a,t){},435:function(e,a,t){"use strict";var n=t(0),i=t.n(n),l=t(416),o=t.n(l);t(436),t(438);a.a=function(e){var a=e.isOpen,t=e.modalLoading,n=e.closeModal;return i.a.createElement(o.a,Object.assign({},e,{ariaHideApp:!1,isOpen:a,overlayClassName:"ReactModal__Overlay",className:"ReactModal ReactModal__add",portalClassName:"ReactModal__Portal__add",onRequestClose:!t&&n}),e.children)}},436:function(e,a,t){},438:function(e,a,t){},440:function(e,a,t){"use strict";var n=t(0),i=t.n(n),l=t(416),o=t.n(l);t(441);a.a=function(e){var a=e.isOpen,t=e.modalLoading,n=e.closeModal;return i.a.createElement(o.a,Object.assign({},e,{ariaHideApp:!1,isOpen:a,overlayClassName:"ReactModal__Overlay",className:"ReactModal ReactModal__delete",portalClassName:"ReactModal__Portal__delete",onRequestClose:!t&&n}),e.children)}},441:function(e,a,t){},454:function(e,a,t){"use strict";var n=t(0),i=t.n(n),l=t(464);a.a=function(e,a){return i.a.createElement(l.Input,{style:{width:"100%"},value:e?e.value:"",onChange:function(e){return a(e.target.value)},debounceTimeout:800})}},549:function(e,a,t){},648:function(e,a,t){"use strict";t.r(a);var n=t(43),i=t(5),l=t(10),o=t(11),r=t(14),c=t(12),s=t(13),d=t(114),m=t(0),u=t.n(m),p=t(419),g=t(422),h=t(432),f=t(435),b=t(111),E=t(281),v=function(e){var a=e.name,t=e.surname,n=e.password,i=e.email,l=e.isOpen,o=e.closeModal,r=e.onChange,c=e.onSubmit,s=e.modalLoading;return u.a.createElement(f.a,{isOpen:l,modalLoading:s,closeModal:o},u.a.createElement("section",{className:"section-container add-container"},u.a.createElement("h4",{className:"add-container__title"},"Add user"),u.a.createElement("span",{className:"ion-close-round add-container__close",onClick:o}),u.a.createElement("div",{className:"cardbox"},u.a.createElement("div",{className:"cardbox-body"},u.a.createElement("form",{action:"",onSubmit:c},u.a.createElement("fieldset",null,u.a.createElement("div",{className:"form-group row"},u.a.createElement("div",{className:"col-md-6"},u.a.createElement("label",{htmlFor:"add-name"},"Name"),u.a.createElement("input",{required:!0,autoComplete:"off",name:"name",value:a,id:"add-name",onChange:r,type:"text",className:"form-control"})),u.a.createElement("div",{className:"col-md-6"},u.a.createElement("label",{htmlFor:"add-surname"},"Surname"),u.a.createElement("input",{required:!0,autoComplete:"off",name:"surname",value:t,id:"add-surname",onChange:r,type:"text",className:"form-control"})),u.a.createElement("div",{className:"col-md-6"},u.a.createElement("label",{htmlFor:"add-password"},"Password"),u.a.createElement("input",{required:!0,autoComplete:"off",name:"password",value:n,id:"add-password",onChange:r,type:"password",className:"form-control"})),u.a.createElement("div",{className:"col-md-6"},u.a.createElement("label",{htmlFor:"add-email"},"Email"),u.a.createElement("input",{required:!0,autoComplete:"off",name:"email",value:i,id:"add-email",onChange:r,type:"email",className:"form-control"})))),s?u.a.createElement("div",{className:"add-container__is-loading"},u.a.createElement(b.a,null)):u.a.createElement("footer",{className:"add-container__buttons"},u.a.createElement(E.a,{outline:!0,color:"secondary",onClick:o},"Cancel"),u.a.createElement(E.a,{disabled:!a,outline:!0,color:"primary",type:"submit"},"Save")))))))},_=t(508),C=t(482),y=t(502),S=t.n(y),N=t(423),O=t(58),k=t.n(O),M=t(57),I=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return k.a.get("".concat(M.a,"/").concat(M.b,"/skills"),{params:{filter:{where:{name:{like:"%".concat(e,"%")}},limit:50}},headers:{Authorization:a}})},x=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return k.a.get("".concat(M.a,"/").concat(M.b,"/locations"),{params:{filter:{where:{or:[{name:{like:"%".concat(e,"%")}},{country:{like:"%".concat(e,"%")}}]},limit:50}},headers:{Authorization:a}})},L=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return k.a.get("".concat(M.a,"/").concat(M.b,"/vacancy_roles"),{params:{filter:{where:{name:{like:"%".concat(e,"%")}},limit:10}},headers:{Authorization:a}})},w=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return k.a.get("".concat(M.a,"/").concat(M.b,"/user_roles"),{params:{filter:{where:{name:{like:"%".concat(e,"%")}},limit:10}},headers:{Authorization:a}})},A=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return k.a.get("".concat(M.a,"/").concat(M.b,"/companies"),{params:{filter:{where:{name:{like:"%".concat(e,"%")}},limit:30}},headers:{Authorization:a}})},j=[{value:1,label:"Junior"},{value:2,label:"Mid level"},{value:3,label:"Senior"},{value:4,label:"Managment"}],F=[{value:0,label:"0"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"},{value:9,label:"9"},{value:10,label:"10"}],J=(t(549),function(e){var a=e.original,t=e.name,n=e.surname,i=e.email,l=e.job_title,o=e.emailVerified,r=e.admin,c=e.status,s=e.experience,d=e.skills,m=e.created,p=e.modified,g=e.emailSettings,h=e.emailJobApplication,f=e.emailMarketing,v=e.seniority,y=e.seniority_id,O=e.location,k=e.location_id,M=e.user_role,J=e.user_role_id,R=e.role,V=e.role_id,D=e.company,T=e.company_id,z=e.image,P=e.imageLoading,U=e.fileInputImage,H=e.onUploadImage,q=e.deleteImage,W=e.onChangeImage,B=e.onDeleteImage,G=e.isOpen,K=e.closeModal,Q=e.onChange,X=e.onSubmit,Y=e.modalLoading,Z=e.deleteClick,$=e.onChangeSkills,ee=e.onChangeLocation,ae=e.onChangeSeniority,te=e.onChangeUserRole,ne=e.onChangeRole,ie=e.onChangeCompany,le=e.onChangeExperience;return u.a.createElement(N.a,{isOpen:G,modalLoading:Y,closeModal:K},u.a.createElement("section",{className:"section-container edit-container edit-user"},u.a.createElement("h4",{className:"edit-container__title"},"Edit\xa0",u.a.createElement("b",null,'"'.concat(a.id," - ").concat(a.name," ").concat(a.surname,'"'))),u.a.createElement("span",{className:"ion-close-round edit-container__close",onClick:K}),u.a.createElement("div",{className:"cardbox"},u.a.createElement("div",{className:"cardbox-body"},u.a.createElement("form",{action:"",onSubmit:X},u.a.createElement("fieldset",null,u.a.createElement("div",{className:"form-group row"},u.a.createElement("div",{className:"col-md-3  edit-user__left"},u.a.createElement("div",{className:"edit-image"},u.a.createElement("label",{htmlFor:"edit-image",className:"edit-image__label"},"Profile photo"),P?u.a.createElement(b.a,null):!S()(z)&&z.url?u.a.createElement("img",{className:"image",src:"".concat(z.url),alt:"image"}):u.a.createElement("div",{className:"no-image"},"No image"),u.a.createElement("input",{id:"edit-image",type:"file",className:"input-file-custom",ref:U,onChange:H}),u.a.createElement("div",{className:"edit-image__buttons"},u.a.createElement("label",{htmlFor:"edit-image",className:"input-file-label  btn btn-light"},u.a.createElement("i",{className:"ion-image"}),"\xa0",u.a.createElement("span",null,"Choose a file")),u.a.createElement(E.a,{disabled:!z.url,outline:!0,color:"danger",onClick:B},"Delete photo"))),u.a.createElement("div",{className:"edit-image-url",hidden:!0},u.a.createElement("label",{htmlFor:"edit-image-url"},"Image URL"),u.a.createElement("div",{className:"input-group"},u.a.createElement("input",{name:"image",value:!S()(z)&&z.url?z.url:"",id:"edit-image-url",onChange:W,type:"url",className:"form-control",placeholder:"Please, paste image URL or load file"}),u.a.createElement("div",{className:"input-group-append"},u.a.createElement("button",{className:"btn btn-light",type:"button",onClick:q,disabled:!S()(z)&&!z.url},"Clear")))),u.a.createElement("div",{className:"created"},u.a.createElement("label",{htmlFor:"edit-created"},"Created"),u.a.createElement("input",{disabled:!0,name:"created",value:m&&"".concat(m.substring(0,10),", ").concat(m.substring(11,16),"UTC"),id:"edit-created",type:"text",className:"form-control"})),u.a.createElement("div",{className:"modified"},u.a.createElement("label",{htmlFor:"edit-modified"},"Modified"),u.a.createElement("input",{disabled:!0,name:"modified",value:p&&"".concat(p.substring(0,10),", ").concat(p.substring(11,16),"UTC"),id:"edit-modified",type:"text",className:"form-control"})),u.a.createElement("div",{className:"admin"},u.a.createElement("div",{className:"custom-checkbox"},u.a.createElement("label",{className:"switch switch-warn switch-primary"},u.a.createElement("input",{id:"edit-admin",name:"admin",type:"checkbox",defaultChecked:!!r,value:r,onChange:Q}),u.a.createElement("span",null)),u.a.createElement("label",{htmlFor:"edit-admin",style:{fontWeight:"normal",paddingLeft:0,marginBottom:0}},r?"Admin rights":"Not admin")))),u.a.createElement("div",{className:"col-md-9  edit-user__right"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-4"},u.a.createElement("label",{htmlFor:"edit-name"},"Name"),u.a.createElement("input",{required:!0,name:"name",value:t,id:"edit-name",onChange:Q,type:"text",className:"form-control"})),u.a.createElement("div",{className:"col-md-4"},u.a.createElement("label",{htmlFor:"edit-name"},"Last name"),u.a.createElement("input",{required:!0,name:"surname",value:n,id:"edit-surname",onChange:Q,type:"text",className:"form-control"})),u.a.createElement("div",{className:"col-md-4"},u.a.createElement("label",{htmlFor:"edit-location_id"},"Location"),u.a.createElement("input",{hidden:!0,name:"location_id",value:k,id:"edit-location_id",onChange:Q,type:"number",className:"form-control"}),u.a.createElement(C.a,{menuPlacement:"auto",cacheOptions:!0,defaultOptions:!0,loadOptions:function(e){return x(e).then(function(e){return e.data})},getOptionValue:function(e){return e.id},getOptionLabel:function(e){return u.a.createElement("div",null,u.a.createElement("span",null,"".concat(e.name&&e.name+", "," ")),u.a.createElement("span",{style:{color:"#3498db",textShadow:"1px 1px 0 #fff"}},e.alias_region))},value:O,onChange:ee})),u.a.createElement("div",{className:"col-md-4"},u.a.createElement("label",{htmlFor:"edit-email"},"Email"),u.a.createElement("input",{required:!0,name:"email",value:i,id:"edit-email",onChange:Q,type:"text",className:"form-control"})),u.a.createElement("div",{className:"col-md-4"},u.a.createElement("label",{htmlFor:"edit-emailVerified"},"Email verified"),u.a.createElement("div",{className:"custom-checkbox"},u.a.createElement("label",{className:"switch switch-warn switch-primary"},u.a.createElement("input",{id:"edit-emailVerified",name:"emailVerified",type:"checkbox",defaultChecked:!!o,value:o,onChange:Q}),u.a.createElement("span",null)),u.a.createElement("label",{htmlFor:"edit-emailVerified",style:{fontWeight:"normal",paddingLeft:0,marginBottom:0}},o?"Verified":"Not verified"))),u.a.createElement("div",{className:"col-md-4"},u.a.createElement("label",{htmlFor:"edit-status"},"User activity"),u.a.createElement("div",{className:"custom-checkbox"},u.a.createElement("label",{className:"switch switch-warn switch-success"},u.a.createElement("input",{id:"edit-status",name:"status",type:"checkbox",defaultChecked:c,value:c,onChange:Q}),u.a.createElement("span",null)),u.a.createElement("label",{htmlFor:"edit-status",style:{fontWeight:"normal",paddingLeft:0,marginBottom:0}},c?u.a.createElement("span",{style:{color:"#4CAF50"}},"Active"):u.a.createElement("span",{style:{color:"#F44336"}},"Blocked")))),u.a.createElement("div",{className:"col-md-12"},u.a.createElement("label",{htmlFor:"edit-skills"},"Skills"),u.a.createElement(C.a,{isMulti:!0,menuPlacement:"auto",cacheOptions:!0,defaultOptions:!0,loadOptions:function(e){return I(e).then(function(e){return e.data})},getOptionValue:function(e){return e.id},getOptionLabel:function(e){return e.name},onChange:$,value:d})),u.a.createElement("div",{className:"col-md-4"},u.a.createElement("label",{htmlFor:"edit-company_id"},"Current company"),u.a.createElement("input",{hidden:!0,name:"company_id",value:T,id:"edit-company_id",onChange:Q,type:"number",className:"form-control"}),u.a.createElement(C.a,{menuPlacement:"auto",cacheOptions:!0,defaultOptions:!0,loadOptions:function(e){return A(e).then(function(e){return e.data})},getOptionValue:function(e){return e.id},getOptionLabel:function(e){return e.name},value:D,onChange:ie})),u.a.createElement("div",{className:"col-md-4"},u.a.createElement("label",{htmlFor:"edit-job_title"},"Job title"),u.a.createElement("input",{required:!0,name:"job_title",value:l,id:"edit-job_title",onChange:Q,type:"text",className:"form-control"})),u.a.createElement("div",{className:"col-md-4"},u.a.createElement("label",{htmlFor:"edit-role_id"},"Product role"),u.a.createElement("input",{hidden:!0,name:"role_id",value:V,id:"edit-role_id",onChange:Q,type:"number",className:"form-control"}),u.a.createElement(C.a,{menuPlacement:"auto",cacheOptions:!0,defaultOptions:!0,loadOptions:function(e){return L(e).then(function(e){return e.data})},getOptionValue:function(e){return e.id},getOptionLabel:function(e){return e.name},value:R,onChange:ne})),u.a.createElement("div",{className:"col-md-4"},u.a.createElement("label",{htmlFor:"edit-seniority_id"},"Seniority"),u.a.createElement("input",{hidden:!0,name:"seniority_id",value:y,id:"edit-seniority_id",onChange:Q,type:"number",className:"form-control"}),u.a.createElement(_.a,{value:v,onChange:ae,options:j})),u.a.createElement("div",{className:"col-md-2"},u.a.createElement("label",{htmlFor:"edit-experience"},"Experience"),u.a.createElement("input",{hidden:!0,required:!0,min:0,max:50,name:"experience",value:s.value,id:"edit-experience",onChange:Q,type:"number",className:"form-control"}),u.a.createElement(_.a,{value:s,onChange:le,options:F})),u.a.createElement("div",{className:"col-md-6"},u.a.createElement("label",{htmlFor:"edit-user_role_id"},"Main reason for using ProductHired"),u.a.createElement("input",{hidden:!0,name:"user_role",value:J,id:"edit-user_role",onChange:Q,type:"number",className:"form-control"}),u.a.createElement(C.a,{menuPlacement:"auto",cacheOptions:!0,defaultOptions:!0,loadOptions:function(e){return w(e).then(function(e){return e.data})},getOptionValue:function(e){return e.id},getOptionLabel:function(e){return e.name},value:M,onChange:te})),u.a.createElement("div",{className:"col-md-9  notifications"},u.a.createElement("label",null,"Notifications"),u.a.createElement("div",{className:"custom-control custom-checkbox"},u.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"edit-emailSettings",name:"emailSettings",checked:g,onChange:Q}),u.a.createElement("label",{className:"custom-control-label",htmlFor:"edit-emailSettings",style:{fontWeight:"normal"}},"When account settings have been modified")),u.a.createElement("div",{className:"custom-control custom-checkbox"},u.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"edit-emailJobApplication",name:"emailJobApplication",checked:h,onChange:Q}),u.a.createElement("label",{className:"custom-control-label",htmlFor:"edit-emailJobApplication",style:{fontWeight:"normal"}},"When job settings has been viewed")),u.a.createElement("div",{className:"custom-control custom-checkbox"},u.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"edit-emailMarketing",name:"emailMarketing",checked:f,onChange:Q}),u.a.createElement("label",{className:"custom-control-label",htmlFor:"edit-emailMarketing",style:{fontWeight:"normal"}},"Allow receiving marketing emails"))))))),Y?u.a.createElement("div",{className:"edit-container__is-loading"},u.a.createElement(b.a,null)):u.a.createElement("footer",{className:"edit-container__buttons"},u.a.createElement(E.a,{outline:!0,color:"danger",onClick:Z},"Delete"),u.a.createElement(E.a,{outline:!0,color:"secondary",onClick:K},"Cancel"),u.a.createElement(E.a,{disabled:!t,outline:!0,color:"primary",type:"submit"},"Save")))))))}),R=t(440),V=function(e){var a=e.isOpen,t=e.modalLoading,n=e.closeModal,i=e.original,l=e.deleteSubmit;return u.a.createElement(R.a,{isOpen:a,modalLoading:t,closeModal:n},u.a.createElement("section",{className:"section-container delete-container"},u.a.createElement("span",{className:"ion-close-round ReactModal__delete__close",onClick:n}),u.a.createElement("div",{className:"ReactModal__delete__title"},u.a.createElement("span",null,"Are you sure you want to delete ")," ",u.a.createElement("br",null),u.a.createElement("span",null,i.id," - ",u.a.createElement("b",null,"".concat(i.name," ").concat(i.surname)),"?")),t?u.a.createElement("div",{className:"ReactModal__delete__is-loading"},u.a.createElement(b.a,null)):u.a.createElement("footer",{className:"ReactModal__delete__buttons"},u.a.createElement(E.a,{outline:!0,color:"secondary",onClick:n},"Cancel"),u.a.createElement(E.a,{outline:!0,color:"danger",onClick:l},"Delete"))))},D=t(417),T=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id,t=e.pageSize,n=e.page,i=e.filtered,l=e.sorted,o={where:{},limit:t,skip:n*t,order:"id DESC"};return i.forEach(function(e){"id"===e.id?o.where[e.id]=e.value:o.where[e.id]={like:"%"+e.value+"%"}}),l.forEach(function(e){var a=e.desc?"DESC":"ASC";o.order="".concat(e.id," ").concat(a)}),k.a.get("".concat(M.a,"/").concat(M.b,"/users"),{params:{filter:o},headers:{Authorization:a}})},z=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id,t=e.filtered,n={};return t.forEach(function(e){"id"===e.id?n[e.id]=e.value:n[e.id]={like:"%"+e.value+"%"}}),k.a.get("".concat(M.a,"/").concat(M.b,"/users/count"),{params:{where:n},headers:{Authorization:a}})},P=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return k.a.get("".concat(M.a,"/").concat(M.b,"/locations/").concat(e),{params:{filter:{limit:1}},headers:{Authorization:a}})},U=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return k.a.get("".concat(M.a,"/").concat(M.b,"/user_roles/").concat(e),{params:{filter:{limit:1}},headers:{Authorization:a}})},H=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return k.a.get("".concat(M.a,"/").concat(M.b,"/vacancy_roles/").concat(e),{params:{filter:{limit:1}},headers:{Authorization:a}})},q=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return k.a.get("".concat(M.a,"/").concat(M.b,"/companies/").concat(e),{params:{filter:{limit:1}},headers:{Authorization:a}})},W=function(e,a,t,n){var i=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return k.a.post("".concat(M.a,"/").concat(M.b,"/users"),{name:e,surname:a,password:t,email:n},{headers:{Authorization:i}})},B=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id,t=e.id,n=e.name,i=e.surname,l=e.email,o=e.job_title,r=e.emailVerified,c=e.admin,s=e.status,d=e.experience,m=e.image,u=e.skills,p=e.emailSettings,g=e.emailJobApplication,h=e.emailMarketing,f=e.seniority_id,b=e.location_id,E=e.user_role_id,v=e.role_id,_=e.company_id;return k.a.patch("".concat(M.a,"/").concat(M.b,"/users/").concat(t),{name:n,surname:i,email:l,job_title:o,emailVerified:r,admin:c,status:s,experience:d.value,image:m,skills:u,emailSettings:p,emailJobApplication:g,emailMarketing:h,seniority_id:f,location_id:b,user_role_id:E,role_id:v,company_id:_,modified:"".concat((new Date).toISOString())},{headers:{Authorization:a}})},G=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return k.a.delete("".concat(M.a,"/").concat(M.b,"/users/").concat(e),{headers:{Authorization:a}})},K=function(e,a){var t=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return k.a.post("".concat(M.a,"/").concat(M.b,"/users/").concat(a,"/uploadImage"),e,{headers:{Authorization:t}})},Q=t(454),X=[{Header:"Id",accessor:"id",width:60,style:{textAlign:"right"},Cell:function(e){var a=e.original;return u.a.createElement("div",null,a.id||"...")},Filter:function(e){var a=e.filter,t=e.onChange;return Object(Q.a)(a,t)}},{Header:"Name",accessor:"name",style:{fontWeight:"bold"},Cell:function(e){var a=e.original;return u.a.createElement("span",null,a.name||"...")},Filter:function(e){var a=e.filter,t=e.onChange;return Object(Q.a)(a,t)}},{Header:"Last name",accessor:"surname",style:{fontWeight:"bold"},Cell:function(e){var a=e.original;return u.a.createElement("span",null,a.surname||"...")},Filter:function(e){var a=e.filter,t=e.onChange;return Object(Q.a)(a,t)}},{Header:"Email",accessor:"email",Cell:function(e){var a=e.original;return u.a.createElement("a",{href:"mailto:".concat(a.email),onClick:function(e){return e.stopPropagation()}},a.email||"...")},Filter:function(e){var a=e.filter,t=e.onChange;return Object(Q.a)(a,t)}},{Header:"Created",accessor:"created",width:120,Cell:function(e){var a=e.original;return u.a.createElement("div",{style:{textAlign:"center"}},u.a.createElement("span",null,a.created.substring(0,10)||"..."))},Filter:function(e){var a=e.filter,t=e.onChange;return Object(Q.a)(a,t)}},{Header:"Status",accessor:"status",width:70,Cell:function(e){var a=e.original;return u.a.createElement("span",{style:{color:a.status?"rgb(0,203,131)":"#dc3545"}},a.status?"Active":"Blocked")},Filter:function(e){var a=e.filter,t=e.onChange;return Object(Q.a)(a,t)}}],Y=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(t=Object(r.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(o)))).fileInputImage=u.a.createRef(),t.state={users:[],usersCount:null,tableLoading:!1,original:{},alertIsOpen:!1,alertType:"",alertErrorText:"",addModalIsOpen:!1,editModalIsOpen:!1,deleteModalIsOpen:!1,modalLoading:!1,id:null,name:"",surname:"",password:"",email:"",job_title:"",emailVerified:!1,admin:!1,roles:[],status:!0,experience:{value:0,label:"0"},skills:[],created:"",modified:"",emailSettings:!0,emailJobApplication:!0,emailMarketing:!0,seniority:{},seniority_id:null,location:{id:null,name:"",alias_region:""},location_id:null,user_role:{id:null,name:""},user_role_id:null,role:{id:null,name:""},role_id:null,company:{id:null,name:""},company_id:null,image:{url:"",icon:"",color:""},imageLoading:!1},t.onChange=function(e){"checkbox"===e.target.type?t.setState(Object(i.a)({},e.target.name,e.target.checked)):t.setState(Object(i.a)({},e.target.name,e.target.value))},t.onChangeImage=function(e){t.setState({image:{url:"".concat(e.target.value)}})},t.onChangeSkills=function(e){return t.setState({skills:e})},t.onChangeExperience=function(e){return t.setState({experience:e})},t.onChangeSeniority=function(e){t.setState({seniority:e,seniority_id:e.value})},t.onChangeLocation=function(e){t.setState({location:e,location_id:e.id})},t.onChangeUserRole=function(e){t.setState({user_role:e,user_role_id:e.id})},t.onChangeRole=function(e){t.setState({role:e,role_id:e.id})},t.onChangeCompany=function(e){t.setState({company:e,company_id:e.id})},t.catchErrors=function(e){401===e.response.status?(localStorage.removeItem("ph-admin-user-data"),t.props.history.push("/login")):t.setState({modalLoading:!1,addModalIsOpen:!1,editModalIsOpen:!1,deleteModalIsOpen:!1,alertType:"error",alertIsOpen:!0,alertErrorText:"".concat(e)})},t.addClick=function(){t.setState({addModalIsOpen:!0,alertIsOpen:!1,name:"",surname:"",password:"",email:"",job_title:"",emailVerified:!1,status:!0,experience:{value:0,label:"0"},image:{url:"",icon:"",color:""},location:{id:null,name:"",alias_region:""},skills:[],created:null,modified:null,emailSettings:!0,emailJobApplication:!0,emailMarketing:!0})},t.addSubmit=function(e){e.preventDefault(),t.setState({modalLoading:!0});var a=t.state,n=a.name,i=a.surname,l=a.password,o=a.email,r=a.users;W(n,i,l,o).then(function(e){var a=[e.data].concat(r);t.setState({modalLoading:!1,addModalIsOpen:!1,users:a}),t.editAfterAdd(e.data)}).catch(function(e){return t.catchErrors(e)})},t.editAfterAdd=function(e){t.setState({addModalIsOpen:!1,editModalIsOpen:!0,original:e,id:e.id,name:e.name,surname:e.surname,email:e.email,created:e.created,modified:e.modified,alertIsOpen:!1})},t.editClick=function(e){return function(a){a.stopPropagation(),t.setState({original:e,alertIsOpen:!1,editModalIsOpen:!0,logoLoading:!1,coverLoading:!1,id:e.id,name:e.name,surname:e.surname,email:e.email,job_title:e.job_title,emailVerified:e.emailVerified,status:e.status,experience:{value:e.experience?Number(e.experience):0,label:e.experience?"".concat(e.experience):"0"},image:e.image,skills:e.skills,created:e.created,modified:e.modified,emailSettings:e.emailSettings,emailJobApplication:e.emailJobApplication,emailMarketing:e.emailMarketing,seniority_id:e.seniority_id,location_id:e.location_id,user_role_id:e.user_role_id,role_id:e.user_role_id,company_id:e.company_id});var n=e.seniority_id;n?j.map(function(e){e.value===n&&t.setState({seniority:e})}):t.setState({seniority:{}});var i=e.location_id;t.setState({location:{id:null,name:"Loading ...",alias_region:""}}),i?P(i).then(function(e){t.setState({location:e.data,location_id:e.data.id})}):t.setState({location:{id:null,name:"",alias_region:""}});var l=e.user_role_id;t.setState({user_role:{id:null,name:"Loading..."}}),l?U(l).then(function(e){t.setState({user_role:e.data,user_role_id:e.data.id})}):t.setState({user_role:{id:null,name:""}});var o=e.role_id;t.setState({role:{id:null,name:"Loading..."}}),o?H(o).then(function(e){t.setState({role:e.data,role_id:e.data.id})}):t.setState({role:{id:null,name:""}});var r=e.company_id;t.setState({company:{id:null,name:"Loading..."}}),r?q(r).then(function(e){t.setState({company:e.data,company_id:e.data.id})}):t.setState({company:{id:null,name:""}});var c=e.roles;c&&c.map(function(e){return"admin"===e.name&&t.setState({admin:!0})})}},t.editSubmit=function(e){e.preventDefault(),t.setState({modalLoading:!0});var a=Object(d.a)(Object(d.a)(t)).state,n=t.state,i=n.id,l=n.name,o=n.surname,r=n.email,c=n.job_title,s=n.emailVerified,m=n.admin,u=n.status,p=n.experience,g=n.image,h=n.skills,f=n.created,b=n.emailSettings,E=n.emailJobApplication,v=n.emailMarketing,_=n.seniority_id,C=n.seniority,y=n.location_id,S=n.location,N=n.user_role,O=n.user_role_id,k=n.role,M=n.role_id,I=n.company,x=n.company_id;B(a).then(function(){for(var e=t.state.users,a=0;a<e.length;a++)e[a].id===i&&(e[a]={id:i,name:l,surname:o,email:r,job_title:c,emailVerified:s,admin:m,status:u,experience:p.value,image:g,skills:h,created:f,emailSettings:b,emailJobApplication:E,emailMarketing:v,seniority_id:_,seniority:C,location_id:y,location:S,user_role:N,user_role_id:O,role:k,role_id:M,company:I,company_id:x,modified:"".concat((new Date).toISOString())});t.setState({users:e,modalLoading:!1,editModalIsOpen:!1,alertType:"edit",alertIsOpen:!0}),setTimeout(function(){t.setState({alertIsOpen:!1})},2e3)}).catch(function(e){return t.catchErrors(e)})},t.onUploadImage=function(e){e.preventDefault(),t.setState({imageLoading:!0});var a=new FormData,n=t.state.id,i=t.fileInputImage.current.files[0];a.append("file",i),K(a,n).then(function(e){t.setState({image:{url:"".concat(M.a).concat(e.data.file.url)},imageLoading:!1})}).catch(function(e){return t.catchErrors(e)})},t.deleteClick=function(e){return function(a){a.stopPropagation(),t.setState({original:e,deleteModalIsOpen:!0,alertIsOpen:!1})}},t.deleteSubmit=function(){var e=[],a=t.state,n=a.users,i=a.original.id;t.setState({modalLoading:!0}),G(i).then(function(){for(var a=0;a<n.length;a++)n[a].id!==i&&e.push(n[a]);t.setState({users:e,editModalIsOpen:!1,deleteModalIsOpen:!1,modalLoading:!1,alertType:"delete",alertIsOpen:!0}),setTimeout(function(){t.setState({alertIsOpen:!1})},2e3)}).catch(function(e){return t.catchErrors(e)})},t.onDeleteImage=function(){return t.setState({image:{url:""}})},t.closeAddModal=function(){return!t.state.modalLoading&&t.setState({addModalIsOpen:!1})},t.closeEditModal=function(){!t.state.modalLoading&&t.setState({editModalIsOpen:!1,imageLoading:!1})},t.closeDeleteModal=function(){return!t.state.modalLoading&&t.setState({deleteModalIsOpen:!1})},t}return Object(s.a)(a,e),Object(o.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){this.props.setHeaderTitle("Users")}},{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keyup",function(a){return 27===a.keyCode&&e.closeEditModal()})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",function(e){return 27===e.keyCode})}},{key:"render",value:function(){var e=this,a=this.state,t=a.tableLoading,i=a.original,l=a.users,o=a.usersCount,r=a.name,c=a.surname,s=a.password,d=a.email,m=a.job_title,f=a.emailVerified,b=a.admin,E=a.status,_=a.experience,C=a.skills,y=a.created,S=a.modified,N=a.emailSettings,O=a.emailJobApplication,k=a.emailMarketing,M=a.seniority_id,I=a.seniority,x=a.location,L=a.location_id,w=a.user_role,A=a.user_role_id,j=a.role,F=a.role_id,R=a.company,D=a.company_id,P=a.image,U=a.imageLoading,H=a.addModalIsOpen,q=a.editModalIsOpen,W=a.modalLoading,B=a.deleteModalIsOpen,G=a.alertIsOpen,K=a.alertType,Q=a.alertErrorText,Y=[{Header:"",width:65,sortable:!1,filterable:!1,Cell:function(a){var t=a.original;return u.a.createElement("div",{className:"rt-custom__controls"},u.a.createElement("i",{className:"ion-android-delete",onClick:e.deleteClick(t)}),u.a.createElement("i",{className:"ion-edit",onClick:e.editClick(t)}))}}];return u.a.createElement("div",{className:"users-page"},G&&u.a.createElement(g.a,{type:K,original:i,errorText:Q}),u.a.createElement(h.a,{text:"user",loading:W,addClick:this.addClick}),u.a.createElement(V,{isOpen:B,modalLoading:W,closeModal:this.closeDeleteModal,original:i,deleteSubmit:this.deleteSubmit}),u.a.createElement(v,{name:r,surname:c,password:s,email:d,isOpen:H,modalLoading:W,closeModal:this.closeAddModal,onChange:this.onChange,onSubmit:this.addSubmit}),u.a.createElement(J,{original:i,name:r,surname:c,email:d,job_title:m,emailVerified:f,admin:b,status:E,experience:_,skills:C,created:y,modified:S,emailSettings:N,emailJobApplication:O,emailMarketing:k,seniority:I,seniority_id:M,location:x,location_id:L,user_role:w,user_role_id:A,role:j,role_id:F,company:R,company_id:D,image:P,imageLoading:U,fileInputImage:this.fileInputImage,onUploadImage:this.onUploadImage,onDeleteImage:this.onDeleteImage,isOpen:q,modalLoading:W,closeModal:this.closeEditModal,onChange:this.onChange,onChangeImage:this.onChangeImage,onSubmit:this.editSubmit,deleteClick:this.deleteClick(i),onChangeSkills:this.onChangeSkills,onChangeSeniority:this.onChangeSeniority,onChangeLocation:this.onChangeLocation,onChangeUserRole:this.onChangeUserRole,onChangeRole:this.onChangeRole,onChangeCompany:this.onChangeCompany,onChangeExperience:this.onChangeExperience}),u.a.createElement(p.a,{manual:!0,data:l,pages:o,loading:t,columns:[].concat(Object(n.a)(X),Y),getTdProps:function(a,t,n,i){return{onClick:function(a){if(void 0!==t){var n=t.original;return e.editClick(n)(a)}return null}}},onFetchData:function(a){e.setState({tableLoading:!0}),z(a).then(function(t){e.setState({usersCount:Math.ceil(t.data.count/a.pageSize)}),T(a).then(function(a){return e.setState({users:a.data,tableLoading:!1})}).catch(function(a){return e.catchErrors(a)})}).catch(function(a){return e.catchErrors(a)})}}))}}]),a}(u.a.Component);a.default=Object(D.a)(Y)}}]);
//# sourceMappingURL=4.12cc2bf1.chunk.js.map