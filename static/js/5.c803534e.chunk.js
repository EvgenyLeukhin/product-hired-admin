(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{417:function(e,a,t){"use strict";t.d(a,"a",function(){return m});var n=t(10),o=t(11),l=t(14),i=t(12),r=t(13),c=t(0),s=t.n(c),d=t(30),u=t.n(d);function m(e){return function(a){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(r.a)(t,a),Object(o.a)(t,[{key:"render",value:function(){var a={setHeaderTitle:function(e){u.a.publish("setPageTitle",e)}};return s.a.createElement(e,Object.assign({},this.props,a))}}]),t}(c.Component)}},419:function(e,a,t){"use strict";var n=t(0),o=t.n(n),l=t(452);t(420);a.a=function(e){return o.a.createElement(l.a,Object.assign({},e,{resizable:!0,filterable:!0,className:"-striped -highlight"}))}},420:function(e,a,t){},422:function(e,a,t){"use strict";var n=t(112),o=t(0),l=t.n(o),i=t(643);a.a=function(e){var a=e.type,t=e.original,r=e.errorText,c=Object(o.useState)(!0),s=Object(n.a)(c,2),d=s[0],u=s[1],m=t.surname?"".concat(t.name," ").concat(t.surname):"".concat(t.name);return l.a.createElement(l.a.Fragment,null,"add"===a&&l.a.createElement(i.a,{color:"success"},"New item has been added")||"edit"===a&&l.a.createElement(i.a,{color:"warning"},'"'.concat(t.id)," - ",l.a.createElement("b",null,m," has been edited"))||"delete"===a&&l.a.createElement(i.a,{color:"danger"},'"'.concat(t.id)," - ",l.a.createElement("b",null,m," has been deleted"))||"error"===a&&l.a.createElement(i.a,{color:"danger",isOpen:d,toggle:function(){return u(!1)}},r)||"copy"===a&&l.a.createElement(i.a,{color:"warning"},"Copied"))}},423:function(e,a,t){"use strict";var n=t(0),o=t.n(n),l=t(416),i=t.n(l);t(424),t(426),t(428);a.a=function(e){var a=e.isOpen,t=e.modalLoading,n=e.closeModal;return o.a.createElement(i.a,Object.assign({},e,{ariaHideApp:!1,isOpen:a,overlayClassName:"ReactModal__Overlay",className:"ReactModal ReactModal__edit",portalClassName:"ReactModal__Portal__edit",onRequestClose:!t&&n}),e.children)}},424:function(e,a,t){},426:function(e,a,t){},428:function(e,a,t){},432:function(e,a,t){"use strict";var n=t(0),o=t.n(n),l=t(281),i=t(6),r=t.n(i);t(433);a.a=function(e){var a=e.text,t=e.loading,n=e.addClick;return o.a.createElement(l.a,{type:"button",color:"primary",onClick:n,className:r()("add-button",{"is-loading":t})},"Add ",a)}},433:function(e,a,t){},435:function(e,a,t){"use strict";var n=t(0),o=t.n(n),l=t(416),i=t.n(l);t(436),t(438);a.a=function(e){var a=e.isOpen,t=e.modalLoading,n=e.closeModal;return o.a.createElement(i.a,Object.assign({},e,{ariaHideApp:!1,isOpen:a,overlayClassName:"ReactModal__Overlay",className:"ReactModal ReactModal__add",portalClassName:"ReactModal__Portal__add",onRequestClose:!t&&n}),e.children)}},436:function(e,a,t){},438:function(e,a,t){},440:function(e,a,t){"use strict";var n=t(0),o=t.n(n),l=t(416),i=t.n(l);t(441);a.a=function(e){var a=e.isOpen,t=e.modalLoading,n=e.closeModal;return o.a.createElement(i.a,Object.assign({},e,{ariaHideApp:!1,isOpen:a,overlayClassName:"ReactModal__Overlay",className:"ReactModal ReactModal__delete",portalClassName:"ReactModal__Portal__delete",onRequestClose:!t&&n}),e.children)}},441:function(e,a,t){},454:function(e,a,t){"use strict";var n=t(0),o=t.n(n),l=t(464);a.a=function(e,a){return o.a.createElement(l.Input,{style:{width:"100%"},value:e?e.value:"",onChange:function(e){return a(e.target.value)},debounceTimeout:800})}},522:function(e,a,t){},651:function(e,a,t){"use strict";t.r(a);var n=t(43),o=t(9),l=t(5),i=t(10),r=t(11),c=t(14),s=t(12),d=t(13),u=t(114),m=t(0),p=t.n(m),g=t(57),v=t(419),h=t(422),b=t(432),f=t(482),y=t(435),E=t(111),_=t(281),C=t(58),O=t.n(C),S=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return O.a.get("".concat(g.a,"/").concat(g.b,"/companies"),{params:{filter:{where:{name:{like:"%".concat(e,"%")}},limit:10}},headers:{Authorization:a}})},N=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return O.a.get("".concat(g.a,"/").concat(g.b,"/users"),{params:{filter:{where:{or:[{name:{like:"%".concat(e,"%")}},{surname:{like:"%".concat(e,"%")}},{email:{like:"%".concat(e,"%")}}]},limit:10}},headers:{Authorization:a}})},j=function(e){var a=e.name,t=e.company,n=e.user,o=e.isOpen,l=e.closeModal,i=e.onChange,r=e.onSubmit,c=e.modalLoading,s=e.onChangeCompany,d=e.onChangeUser;return p.a.createElement(y.a,{isOpen:o,modalLoading:c,closeModal:l},p.a.createElement("section",{className:"section-container add-container"},p.a.createElement("h4",{className:"add-container__title"},"Add user"),p.a.createElement("span",{className:"ion-close-round add-container__close",onClick:l}),p.a.createElement("div",{className:"cardbox"},p.a.createElement("div",{className:"cardbox-body"},p.a.createElement("form",{action:"",onSubmit:r},p.a.createElement("fieldset",null,p.a.createElement("div",{className:"form-group row"},p.a.createElement("div",{className:"col-md-12"},p.a.createElement("label",{htmlFor:"add-name"},"Job title"),p.a.createElement("input",{required:!0,autoComplete:"off",name:"name",value:a,id:"add-name",onChange:i,type:"text",className:"form-control"})),p.a.createElement("div",{className:"col-md-6"},p.a.createElement("label",{htmlFor:"add-surname"},"Company"),p.a.createElement(f.a,{menuPlacement:"auto",cacheOptions:!0,defaultOptions:!0,loadOptions:function(e){return S(e).then(function(e){return e.data})},getOptionValue:function(e){return e.id},getOptionLabel:function(e){return e.name},onChange:s,value:t})),p.a.createElement("div",{className:"col-md-6"},p.a.createElement("label",{htmlFor:"add-password"},"User"),p.a.createElement(f.a,{menuPlacement:"auto",cacheOptions:!0,defaultOptions:!0,loadOptions:function(e){return N(e).then(function(e){return e.data})},getOptionValue:function(e){return e.id},getOptionLabel:function(e){return p.a.createElement("div",null,p.a.createElement("span",null,"".concat(e.name," ").concat(e.surname," ")),p.a.createElement("span",{style:{color:"#1976D2"}},e.email))},onChange:d,value:n})))),c?p.a.createElement("div",{className:"add-container__is-loading"},p.a.createElement(E.a,null)):p.a.createElement("footer",{className:"add-container__buttons"},p.a.createElement(_.a,{outline:!0,color:"secondary",onClick:l},"Cancel"),p.a.createElement(_.a,{disabled:!a||!t.name||!n.name,outline:!0,color:"primary",type:"submit"},"Save")))))))},L=t(440),x=function(e){var a=e.isOpen,t=e.modalLoading,n=e.closeModal,o=e.original,l=e.deleteSubmit;return p.a.createElement(L.a,{isOpen:a,modalLoading:t,closeModal:n},p.a.createElement("section",{className:"section-container delete-container"},p.a.createElement("span",{className:"ion-close-round ReactModal__delete__close",onClick:n}),p.a.createElement("div",{className:"ReactModal__delete__title"},p.a.createElement("span",null,"Are you sure you want to delete ")," ",p.a.createElement("br",null),p.a.createElement("span",null,o.id," - ",p.a.createElement("b",null,o.name),"?")),t?p.a.createElement("div",{className:"ReactModal__delete__is-loading"},p.a.createElement(E.a,null)):p.a.createElement("footer",{className:"ReactModal__delete__buttons"},p.a.createElement(_.a,{outline:!0,color:"secondary",onClick:n},"Cancel"),p.a.createElement(_.a,{outline:!0,color:"danger",onClick:l},"Delete"))))},w=t(551),k=t.n(w),I=t(634),M=t(508),D=t(502),U=t.n(D),F=t(423),A=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return O.a.get("".concat(g.a,"/").concat(g.b,"/skills"),{params:{filter:{where:{markers:{like:"%".concat(e,"%")}},limit:50}},headers:{Authorization:a}})},P=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return O.a.get("".concat(g.a,"/").concat(g.b,"/locations"),{params:{filter:{where:{name:{like:"%".concat(e,"%")}},limit:50}},headers:{Authorization:a}})},T=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return O.a.get("".concat(g.a,"/").concat(g.b,"/vacancy_roles"),{params:{filter:{where:{name:{like:"%".concat(e,"%")}},limit:10}},headers:{Authorization:a}})},J=[{value:1,label:"Junior"},{value:2,label:"Mid level"},{value:3,label:"Senior"},{value:4,label:"Managment"}],R=[{value:"public",label:"Public"},{value:"draft",label:"Draft"},{value:"expired",label:"Expired"}],z=[{value:null,label:"Null"},{value:1,label:"Free"},{value:2,label:"Bronze"},{value:3,label:"Silver"},{value:4,label:"Gold"}],H=[{value:0,label:"0"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"},{value:9,label:"9"}],V=[{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"},{value:9,label:"9"},{value:10,label:"10"}],q=(t(638),t(522),function(e){var a=e.original,t=(e.id,e.name),n=e.created,o=e.modified,l=e.published,i=e.views,r=e.impressions,c=e.details,s=e.experience_from,d=e.experience_up,u=e.seniority,m=e.seniorityObj,v=e.skills,h=e.status,b=e.statusObj,y=e.plan_id,C=e.planObj,O=e.company,j=e.company_id,L=e.locations,x=e.user,w=e.employer_id,D=e.vacancy,q=e.vacancy_role,W=e.logo,B=e.cover,G=e.logoSwitcher,K=e.coverSwitcher,Q=e.logoLoading,X=e.coverLoading,Y=e.fileInputLogo,Z=e.fileInputCover,$=e.onUploadLogo,ee=e.onUploadCover,ae=e.onDeleteLogo,te=e.onDeleteCover,ne=e.isOpen,oe=e.closeModal,le=e.onSubmit,ie=e.modalLoading,re=e.deleteClick,ce=e.onChange,se=e.onChangeDetails,de=e.onChangeSeniority,ue=e.onChangeSkills,me=e.onChangeStatus,pe=e.onChangePlan,ge=e.onChangeLocations,ve=e.onChangeCompany,he=e.onChangeUser,be=e.onChangeVacancy,fe=e.onChangeExperienceFrom,ye=e.onChangeExperienceUp,Ee=e.onCopyUser,_e=n&&"".concat(n.substring(0,10),", ").concat(n.substring(11,16)," UTC"),Ce=o&&"".concat(o.substring(0,10),", ").concat(o.substring(11,16)," UTC"),Oe="".concat(g.a,"/").concat(g.b,"/containers/logo/download/").concat(W),Se="".concat(g.a,"/").concat(g.b,"/containers/cover/download/").concat(B);if(!G&&W&&W.includes("http")){var Ne=W.split("/").pop();Oe="".concat(g.a,"/").concat(g.b,"/containers/logo/download/").concat(Ne)}if(!K&&B&&B.includes("http")){var je=B.split("/").pop();Se="".concat(g.a,"/").concat(g.b,"/containers/cover/download/").concat(je)}return p.a.createElement(F.a,{isOpen:ne,modalLoading:ie,closeModal:oe},p.a.createElement("section",{className:"section-container edit-container edit-job"},p.a.createElement("h4",{className:"edit-container__title"},"Edit\xa0",p.a.createElement("b",null,'"'.concat(a.id," - ").concat(a.name,'"'))),p.a.createElement("span",{className:"ion-close-round edit-container__close",onClick:oe}),p.a.createElement("div",{className:"cardbox"},p.a.createElement("div",{className:"cardbox-body"},p.a.createElement("form",{action:"",onSubmit:le},p.a.createElement("fieldset",null,p.a.createElement("div",{className:"form-group row top-fields"},p.a.createElement("div",{className:"col-md-3 col-sm-6"},p.a.createElement("b",null,"Created"),p.a.createElement("span",null,_e||"")),p.a.createElement("div",{className:"col-md-3 col-sm-6"},p.a.createElement("b",null,"Modified"),p.a.createElement("span",null,Ce||"")),p.a.createElement("div",{className:"col-md-3 col-sm-6"},p.a.createElement("b",null,"Views"),p.a.createElement("span",null,i||0)),p.a.createElement("div",{className:"col-md-3 col-sm-6"},p.a.createElement("b",null,"Impressions"),p.a.createElement("span",null,r||0)))),p.a.createElement("fieldset",null,p.a.createElement("div",{className:"form-group row"},p.a.createElement("div",{className:"col-md-5"},p.a.createElement("label",{htmlFor:"edit-name"},"Job title"),p.a.createElement("input",{name:"name",type:"text",value:t,id:"edit-name",onChange:ce,className:"form-control"})),p.a.createElement("div",{className:"col-md-2"},p.a.createElement("label",{htmlFor:"edit-plan_id"},"Plan"),p.a.createElement("input",{hidden:!0,name:"plan_id",value:y,id:"edit-plan_id",onChange:ce,type:"number",className:"form-control"}),p.a.createElement(M.a,{value:C,onChange:pe,options:z})),p.a.createElement("div",{className:"col-md-3"},p.a.createElement("label",{htmlFor:"edit-published"},"Published"),p.a.createElement("input",{type:"date",name:"published",id:"edit-published",value:l&&l.substring(0,10),onChange:ce,className:"form-control"})),p.a.createElement("div",{className:"col-md-2"},p.a.createElement("label",{htmlFor:"edit-status"},"Status"),p.a.createElement("input",{hidden:!0,name:"status",value:h,id:"edit-status",onChange:ce,type:"text",className:"form-control"}),p.a.createElement(M.a,{value:b,onChange:me,options:R})),p.a.createElement("div",{className:"col-md-5"},p.a.createElement("label",{htmlFor:"edit-employer_id"},"User"),p.a.createElement("input",{hidden:!0,name:"employer_id",value:w,id:"edit-employer_id",onChange:ce,type:"number",className:"form-control"}),p.a.createElement(f.a,{menuPlacement:"auto",cacheOptions:!0,defaultOptions:!0,loadOptions:function(e){return N(e).then(function(e){return e.data})},getOptionValue:function(e){return e.id},getOptionLabel:function(e){return p.a.createElement("div",null,p.a.createElement("span",null,"".concat(e.name," ").concat(e.surname," ")),p.a.createElement("span",{style:{color:"#3498db",textShadow:"1px 1px 0 #fff"}},e.email))},onChange:he,value:x})),p.a.createElement("div",{className:"col-md-2  copy-button"},p.a.createElement(I.CopyToClipboard,{text:"".concat(x.name," ").concat(x.surname,", ").concat(x.email)},p.a.createElement(_.a,{title:"Copy user data to clipboard",disabled:!x,outline:!0,color:"primary",onClick:Ee},"Copy user"))),p.a.createElement("div",{className:"col-md-5"},p.a.createElement("label",{htmlFor:"edit-company_id"},"Company"),p.a.createElement("input",{hidden:!0,name:"company_id",value:j,id:"edit-company_id",onChange:ce,type:"number",className:"form-control"}),p.a.createElement(f.a,{menuPlacement:"auto",cacheOptions:!0,defaultOptions:!0,loadOptions:function(e){return S(e).then(function(e){return e.data})},getOptionValue:function(e){return e.id},getOptionLabel:function(e){return e.name},onChange:ve,value:O})),p.a.createElement("div",{className:"col-md-12"},p.a.createElement("label",{htmlFor:"edit-locations"},"Locations"),p.a.createElement(f.a,{isMulti:!0,menuPlacement:"auto",cacheOptions:!0,defaultOptions:!0,loadOptions:function(e){return P(e).then(function(e){return e.data})},getOptionValue:function(e){return e.id},getOptionLabel:function(e){return p.a.createElement("div",null,p.a.createElement("span",null,"".concat(e.name&&e.name+", "," ")),p.a.createElement("span",{style:{color:"#448aff"}},e.alias_region))},onChange:ge,value:L})),p.a.createElement("div",{className:"col-md-3"},p.a.createElement("label",{htmlFor:"edit-vacancy_role"},"Role"),p.a.createElement("input",{hidden:!0,name:"vacancy_role",value:q,id:"edit-vacancy_role",onChange:ce,type:"number",className:"form-control"}),p.a.createElement(f.a,{menuPlacement:"auto",cacheOptions:!0,defaultOptions:!0,loadOptions:function(e){return T(e).then(function(e){return e.data})},getOptionValue:function(e){return e.id},getOptionLabel:function(e){return e.name},value:D,onChange:be})),p.a.createElement("div",{className:"col-md-3"},p.a.createElement("label",{htmlFor:"edit-experience_from"},"Experience, from"),p.a.createElement("input",{hidden:!0,min:0,max:9,type:"number",onChange:ce,name:"experience_from",value:s,id:"edit-experience_from",className:"form-control"}),p.a.createElement(M.a,{value:s,onChange:fe,options:H})),p.a.createElement("div",{className:"col-md-3"},p.a.createElement("label",{htmlFor:"edit-experience_up"},"Experience, to"),p.a.createElement("input",{hidden:!0,min:1,max:10,type:"number",onChange:ce,name:"experience_up",value:d,id:"edit-experience_up",className:"form-control"}),p.a.createElement(M.a,{value:d,onChange:ye,options:V})),p.a.createElement("div",{className:"col-md-3"},p.a.createElement("label",{htmlFor:"edit-seniority"},"Seniority"),p.a.createElement("input",{hidden:!0,name:"seniority",value:u,id:"edit-seniority",onChange:ce,type:"number",className:"form-control"}),p.a.createElement(M.a,{value:m,onChange:de,options:J})),p.a.createElement("div",{className:"col-md-12"},p.a.createElement("label",{htmlFor:"edit-skills"},"Skills"),p.a.createElement(f.a,{isMulti:!0,menuPlacement:"auto",cacheOptions:!0,defaultOptions:!0,loadOptions:function(e){return A(e).then(function(e){return e.data})},getOptionValue:function(e){return e.id},getOptionLabel:function(e){return e.name},onChange:ue,value:v})),p.a.createElement("div",{className:"col-md-6  edit-logo"},p.a.createElement("label",{htmlFor:"edit-logo"},"Logo"),G?Q?p.a.createElement(E.a,null):W&&p.a.createElement("img",{className:"logo",src:W,alt:"logo"}):W?p.a.createElement("img",{className:"logo",src:Oe,alt:"logo"}):p.a.createElement("div",{className:"no-logo"},"No logo"),p.a.createElement("input",{id:"edit-logo",type:"file",className:"input-file-custom",ref:Y,onChange:$}),p.a.createElement("div",{className:"edit-logo__buttons"},p.a.createElement("label",{htmlFor:"edit-logo",className:"input-file-label  btn btn-light"},p.a.createElement("i",{className:"ion-image"}),"\xa0",p.a.createElement("span",null,"Load logo")),p.a.createElement(_.a,{disabled:!W||!Oe,outline:!0,color:"danger",onClick:ae},"Delete logo"))),p.a.createElement("div",{className:"col-md-6  edit-cover"},p.a.createElement("label",{htmlFor:"edit-cover"},"Cover"),K?X?p.a.createElement(E.a,null):B&&p.a.createElement("img",{className:"cover",src:B,alt:"cover"}):B?p.a.createElement("img",{className:"cover",src:Se,alt:"cover"}):p.a.createElement("div",{className:"no-cover"},"No cover"),p.a.createElement("input",{id:"edit-cover",type:"file",className:"input-file-custom",ref:Z,onChange:ee}),p.a.createElement("div",{className:"edit-cover__buttons"},p.a.createElement("label",{htmlFor:"edit-cover",className:"input-file-label  btn btn-light"},p.a.createElement("i",{className:"ion-image"}),"\xa0",p.a.createElement("span",null,"Load cover")),p.a.createElement(_.a,{disabled:!B||!Se,outline:!0,color:"danger",onClick:te},"Delete cover"))),p.a.createElement("div",{className:"col-md-12"},p.a.createElement("label",{htmlFor:"edit-details"},"Details"),p.a.createElement(k.a,{value:c,onChange:se})))),ie?p.a.createElement("div",{className:"edit-container__is-loading"},p.a.createElement(E.a,null)):p.a.createElement("footer",{className:"edit-container__buttons"},p.a.createElement(_.a,{outline:!0,color:"danger",onClick:re},"Delete"),p.a.createElement(_.a,{outline:!0,color:"secondary",onClick:oe},"Cancel"),p.a.createElement(_.a,{disabled:!t||U()(L)||U()(v),outline:!0,color:"primary",type:"submit"},"Save")))))))}),W=t(417),B=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id,t=e.pageSize,n=e.page,o=e.filtered,l=e.sorted,i={where:{},limit:t,skip:n*t,order:"id DESC"};return o.forEach(function(e){"id"===e.id?i.where[e.id]=e.value:i.where[e.id]={like:"%"+e.value+"%"}}),l.forEach(function(e){var a=e.desc?"DESC":"ASC";i.order="".concat(e.id," ").concat(a)}),O.a.get("".concat(g.a,"/").concat(g.b,"/vacancies"),{params:{filter:i},headers:{Authorization:a}})},G=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id,t=e.filtered,n={};return t.forEach(function(e){"id"===e.id?n[e.id]=e.value:n[e.id]={like:"%"+e.value+"%"}}),O.a.get("".concat(g.a,"/").concat(g.b,"/vacancies/count"),{params:{where:n},headers:{Authorization:a}})},K=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id,t=e.name,n=e.company,o=e.user,l=e.details,i=e.vacancy_role,r=e.seniority,c=e.experience_from,s=e.experience_up,d=e.application_type,u=e.application_link,m=e.plan_id,p=e.hash,v=e.status;return O.a.post("".concat(g.a,"/").concat(g.b,"/vacancies"),{name:t,company_id:n.id,employer_id:o.id,details:l,vacancy_role:i,seniority:r,experience_from:c.value,experience_up:s.value,application_type:d,application_link:u,plan_id:m,hash:p,status:v},{headers:{Authorization:a}})},Q=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return O.a.delete("".concat(g.a,"/").concat(g.b,"/vacancies/").concat(e),{headers:{Authorization:a}})},X=function(e){for(var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id,t=e.id,n=e.name,o=e.details,l=e.logo,i=e.cover,r=e.skills,c=e.locations,s=e.vacancy,d=e.company,u=e.status,m=e.seniority,p=e.experience_up,v=e.experience_from,h=e.employer_id,b=e.plan_id,f=e.published,y=[],E=0;E<r.length;E++)y.push(r[E].name);var _=y.toString();return O.a.post("".concat(g.a,"/").concat(g.b,"/vacancies/").concat(t,"/updateJob"),{name:n,details:o,logo:l?l.split("/").pop():"",cover:i?i.split("/").pop():"",skills_string:_,locations:c,company:d.length?d[0].name:d.name,employer_id:h,plan_id:b,status:u,seniority:m,experience_from:v.value,experience_up:p.value,role:s,modified:"".concat((new Date).toISOString()),published:f},{headers:{Authorization:a}})},Y=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return O.a.get("".concat(g.a,"/").concat(g.b,"/companies/").concat(e),{params:{filter:{limit:1}},headers:{Authorization:a}})},Z=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return O.a.get("".concat(g.a,"/").concat(g.b,"/users/").concat(e),{params:{filter:{limit:1}},headers:{Authorization:a}})},$=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return O.a.get("".concat(g.a,"/").concat(g.b,"/vacancy_roles/").concat(e),{params:{filter:{limit:1}},headers:{Authorization:a}})},ee=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return O.a.post("".concat(g.a,"/").concat(g.b,"/vacancies/logo"),e,{headers:{"Content-Type":"multipart/form-data",Authorization:a}})},ae=function(e){var a=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return O.a.post("".concat(g.a,"/").concat(g.b,"/vacancies/cover"),e,{headers:{"Content-Type":"multipart/form-data",Authorization:a}})},te=t(454),ne=[{Header:"Id",accessor:"id",width:60,style:{textAlign:"right"},Cell:function(e){return e.original.id||"..."},Filter:function(e){var a=e.filter,t=e.onChange;return Object(te.a)(a,t)}},{Header:"Job",accessor:"name",style:{fontWeight:"bold"},Cell:function(e){var a=e.original;return a.name?"".concat(a.name):"..."},Filter:function(e){var a=e.filter,t=e.onChange;return Object(te.a)(a,t)}},{Header:"Company",accessor:"company",sortable:!1,filterable:!1,Cell:function(e){var a=e.original;return a.company?"".concat(a.company.name):"..."}},{Header:"Locations",accessor:"locations",sortable:!1,filterable:!1,Cell:function(e){return e.original.locations.map(function(e){return e.name}).join(", ")||"..."}},{Header:"Status",accessor:"status",width:60,Cell:function(e){var a=e.original;return p.a.createElement("div",{style:{textAlign:"center"}},a.status||"...")},Filter:function(e){var a=e.filter,t=e.onChange;return Object(te.a)(a,t)}},{Header:"Plan",accessor:"plan_id",filterable:!1,width:50,Cell:function(e){var a=e.original.plan_id;return p.a.createElement("div",null,z.map(function(e){return a===e.value&&e.label}))}},{Header:"Created",accessor:"created",filterable:!1,width:85,Cell:function(e){var a=e.original;return p.a.createElement("div",{style:{textAlign:"center"}},p.a.createElement("span",null,a.created&&a.created.substring(0,10)||"..."))}},{Header:"Published",accessor:"published",filterable:!1,width:85,Cell:function(e){var a=e.original;return p.a.createElement("div",{style:{textAlign:"center"}},p.a.createElement("span",null,a.published&&a.published.substring(0,10)||"..."))}}],oe=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),d=0;d<n;d++)r[d]=arguments[d];return(t=Object(c.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(r)))).fileInputLogo=p.a.createRef(),t.fileInputCover=p.a.createRef(),t.state={jobs:[],jobsCount:null,tableLoading:!1,original:{},addModalIsOpen:!1,editModalIsOpen:!1,deleteModalIsOpen:!1,modalLoading:!1,id:null,created:"",modified:"",published:"".concat((new Date).toISOString()),views:null,impressions:"",skills:[],locations:[],seniorityObj:{},seniority:null,statusObj:{label:"Draft",value:"draft"},status:"draft",planObj:{label:"Null",value:null},plan_id:null,name:"",company:{name:""},company_id:null,user:{name:"",surname:"",email:""},user_id:null,employer_id:null,experience_from:{value:0,label:"0"},experience_up:{value:1,label:"1"},vacancy:{id:1,name:"Product Manager"},vacancy_role:1,details:"",logo:"",logoUrl:"",cover:"",coverUrl:"",logoLoading:!1,coverLoading:!1,logoSwitcher:!1,coverSwitcher:!1,application_link:null,application_type:0,hash:null,alertIsOpen:!1,alertType:"",alertErrorText:""},t.resetFields=function(){t.setState({id:null,created:"",modified:"",views:null,impressions:"",skills:[],locations:[],published:"".concat((new Date).toISOString()),seniorityObj:{},seniority:null,statusObj:{label:"Draft",value:"draft"},status:"draft",planObj:{label:"Null",value:null},plan_id:null,name:"",company:{name:""},company_id:null,user:{name:"",surname:"",email:""},user_id:null,employer_id:null,vacancy:{id:1,name:"Product Manager"},vacancy_role:1,details:"<p></p>",logo:"",cover:"",experience_from:{value:0,label:"0"},experience_up:{value:1,label:"1"}})},t.onChange=function(e){return t.setState(Object(l.a)({},e.target.name,e.target.value))},t.onChangeCompany=function(e){return t.setState({company:e})},t.onChangeLocations=function(e){return t.setState({locations:e})},t.onChangeDetails=function(e){return t.setState({details:e})},t.onChangeSkills=function(e){return t.setState({skills:e})},t.onChangeSeniority=function(e){return t.setState({seniorityObj:e,seniority:e.value})},t.onChangeStatus=function(e){return t.setState({statusObj:e,status:e.value})},t.onChangePlan=function(e){return t.setState({planObj:e,plan_id:e.value})},t.onChangeCompany=function(e){return t.setState({company:e,company_id:e.id})},t.onChangeUser=function(e){return t.setState({user:e,employer_id:e.id})},t.onChangeVacancy=function(e){return t.setState({vacancy:e,vacancy_role:e.id})},t.onChangeExperienceFrom=function(e){return t.setState({experience_from:e})},t.onChangeExperienceUp=function(e){return t.setState({experience_up:e})},t.catchErrors=function(e){401===e.response.status?(localStorage.removeItem("ph-admin-user-data"),t.props.history.push("/login")):t.setState({modalLoading:!1,alertType:"error",alertIsOpen:!0,alertErrorText:"".concat(e,", ").concat(e.response.data.error.sqlMessage)})},t.addClick=function(){t.setState({addModalIsOpen:!0,alertIsOpen:!1}),t.resetFields()},t.addSubmit=function(e){e.preventDefault(),t.setState({modalLoading:!0});var a=Object(u.a)(Object(u.a)(t)).state,n=t.state,l=n.jobs,i=n.company;K(a).then(function(e){var a=[Object(o.a)({},e.data,{company:i})].concat(l);t.setState({modalLoading:!1,addModalIsOpen:!1,jobs:a}),console.log("resData:",e.data),t.editAfterAdd(e.data)}).catch(function(e){return t.catchErrors(e)})},t.editAfterAdd=function(e){t.setState({addModalIsOpen:!1,editModalIsOpen:!0,original:e,id:e.id,name:e.name,created:e.created,modified:e.modified,employer_id:e.employer_id,company_id:e.company_id,published:"".concat((new Date).toISOString()),alertIsOpen:!1})},t.editClick=function(e){return function(a){var n;a.stopPropagation(),t.setState((n={original:e,alertIsOpen:!1,editModalIsOpen:!0,logoLoading:!1,coverLoading:!1,id:e.id,name:e.name,created:e.created,modified:e.modified,published:e.published,views:e.views,impressions:e.impressions,details:e.details,experience_up:{value:e.experience_up,label:"".concat(e.experience_up)},experience_from:{value:e.experience_from,label:"".concat(e.experience_from)},seniority:e.seniority,skills:e.skills,status:e.status,plan_id:e.plan_id,employer_id:e.employer_id,locations:e.locations,company_id:e.company_id,company:e.company},Object(l.a)(n,"locations",e.locations),Object(l.a)(n,"vacancy_role",e.vacancy_role),Object(l.a)(n,"vacancy",e.vacancy),Object(l.a)(n,"logo",e.logo),Object(l.a)(n,"cover",e.cover),n));var o=e.seniority;o?J.map(function(e){e.value===o&&t.setState({seniorityObj:e})}):t.setState({seniorityObj:{}});var i=e.status;i?R.map(function(e){i===e.value&&t.setState({statusObj:e})}):t.setState({statusObj:{}});var r=e.plan_id;r?z.map(function(e){r===e.value&&t.setState({planObj:e})}):t.setState({planObj:{label:"Null",value:null}});var c=e.company_id;t.setState({company:{id:null,name:"Loading..."}}),c?Y(c).then(function(e){t.setState({company:e.data,company_id:e.data.id})}):t.setState({company:{id:null,name:""}});var s=e.employer_id;t.setState({user:{name:"Loading ...",surname:"",email:""}}),s?Z(s).then(function(e){t.setState({user:e.data,employer_id:e.data.id})}):t.setState({user:{name:"",surname:"",email:""}});var d=e.vacancy_role;t.setState({vacancy:{name:"Loading ..."}}),d?$(d).then(function(e){t.setState({vacancy:e.data,vacancy_role:e.data.id})}):t.setState({vacancy:{name:""}})}},t.editSubmit=function(e){e.preventDefault(),t.setState({modalLoading:!0});var a=Object(u.a)(Object(u.a)(t)).state;X(a).then(function(){for(var e=t.state,a=e.jobs,n=e.id,o=e.name,i=e.user,r=e.employer_id,c=e.created,s=e.modified,d=e.published,u=e.views,m=e.impressions,p=e.details,g=e.experience_from,v=e.experience_up,h=e.seniority,b=e.seniorityObj,f=e.skills,y=e.status,E=e.statusObj,_=e.plan_id,C=e.planObj,O=e.company_id,S=e.company,N=e.locations,j=e.vacancy_role,L=e.vacancy,x=e.logo,w=e.cover,k=0;k<a.length;k++)a[k].id===n&&(a[k]=Object(l.a)({id:n,name:o,user:i,employer_id:r,created:c,modified:s,published:d,views:u,impressions:m,details:p,experience_from:g.value,experience_up:v.value,seniority:h,seniorityObj:b,skills:f,status:y,statusObj:E,plan_id:_,planObj:C,company_id:O,company:S,locations:N,vacancy_role:j,vacancy:L,logo:x,cover:w},"modified","".concat((new Date).toISOString())));t.setState({jobs:a,modalLoading:!1,editModalIsOpen:!1,alertType:"edit",alertIsOpen:!0}),setTimeout(function(){t.setState({alertIsOpen:!1})},2e3)}).catch(function(e){return t.catchErrors(e)})},t.deleteClick=function(e){return function(a){a.stopPropagation(),t.setState({original:e,deleteModalIsOpen:!0,alertIsOpen:!1})}},t.deleteSubmit=function(){var e=[],a=t.state,n=a.jobs,o=a.original.id;t.setState({modalLoading:!0}),Q(o).then(function(){for(var a=0;a<n.length;a++)n[a].id!==o&&e.push(n[a]);t.setState({jobs:e,editModalIsOpen:!1,deleteModalIsOpen:!1,modalLoading:!1,alertType:"delete",alertIsOpen:!0}),setTimeout(function(){t.setState({alertIsOpen:!1})},2e3)}).catch(function(e){return t.catchErrors(e)})},t.onUploadLogo=function(e){e.preventDefault(),t.setState({logoLoading:!0,logoSwitcher:!0});var a=new FormData,n=t.fileInputLogo.current.files[0];a.append("file",n),ee(a).then(function(e){t.setState({logo:"".concat(g.a,"/").concat(g.b,"/containers/logo/download/").concat(e.data.name),logoLoading:!1})}).catch(function(e){return console.log(e)})},t.onUploadCover=function(e){e.preventDefault(),t.setState({coverLoading:!0,coverSwitcher:!0});var a=new FormData,n=t.fileInputCover.current.files[0];a.append("file",n),ae(a).then(function(e){t.setState({cover:"".concat(g.a,"/").concat(g.b,"/containers/cover/download/").concat(e.data.name),coverLoading:!1})}).catch(function(e){return console.log(e)})},t.onDeleteLogo=function(){return t.setState({logo:"",logoUrl:"",logoSwitcher:!1})},t.onDeleteCover=function(){return t.setState({cover:"",coverUrl:"",coverSwitcher:!1})},t.closeAddModal=function(){return!t.state.modalLoading&&t.setState({addModalIsOpen:!1})},t.closeEditModal=function(){!t.state.modalLoading&&t.setState({editModalIsOpen:!1,logoLoading:!1,coverLoading:!1})},t.closeDeleteModal=function(){return!t.state.modalLoading&&t.setState({deleteModalIsOpen:!1})},t.onCopyUser=function(e){e.preventDefault(),t.setState({alertType:"copy",alertIsOpen:!0}),setTimeout(function(){t.setState({alertIsOpen:!1})},2e3)},t}return Object(d.a)(a,e),Object(r.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){this.props.setHeaderTitle("Jobs")}},{key:"render",value:function(){var e,a=this,t=this.state,o=t.tableLoading,i=t.original,r=t.jobs,c=t.jobsCount,s=t.id,d=t.name,u=t.user,m=t.employer_id,g=t.created,f=t.modified,y=t.published,E=t.views,_=t.impressions,C=t.details,O=t.experience_from,S=t.experience_up,N=t.seniority,L=t.seniorityObj,w=t.skills,k=t.status,I=t.statusObj,M=t.plan_id,D=t.planObj,U=t.company_id,F=t.company,A=t.locations,P=t.vacancy_role,T=t.vacancy,J=t.addModalIsOpen,R=t.editModalIsOpen,z=t.modalLoading,H=t.deleteModalIsOpen,V=t.alertIsOpen,W=t.alertType,K=t.alertErrorText,Q=t.logo,X=t.cover,Y=t.logoSwitcher,Z=t.coverSwitcher,$=t.logoLoading,ee=t.coverLoading,ae=t.logoUrl,te=t.coverUrl,oe=[{Header:"",width:65,sortable:!1,filterable:!1,Cell:function(e){var t=e.original;return p.a.createElement("div",{className:"rt-custom__controls"},p.a.createElement("i",{className:"ion-android-delete",onClick:a.deleteClick(t)}),p.a.createElement("i",{className:"ion-edit",onClick:a.editClick(t)}))}}];return p.a.createElement("div",{className:"jobs-page"},V&&p.a.createElement(h.a,{type:W,original:i,errorText:K}),p.a.createElement(b.a,{text:"job",loading:z,addClick:this.addClick}),p.a.createElement(x,{isOpen:H,modalLoading:z,closeModal:this.closeDeleteModal,original:i,deleteSubmit:this.deleteSubmit}),p.a.createElement(j,{name:d,company:F,user:u,isOpen:J,modalLoading:z,closeModal:this.closeAddModal,onChange:this.onChange,onChangeCompany:this.onChangeCompany,onChangeUser:this.onChangeUser,onSubmit:this.addSubmit}),p.a.createElement(q,(e={id:s,name:d,details:C,original:i,skills:w,created:g,modified:f,published:y,views:E,impressions:_,experience_from:O,experience_up:S,seniority:N,seniorityObj:L,status:k,statusObj:I,plan_id:M,planObj:D,locations:A,company_id:U,company:F,user:u,employer_id:m,vacancy_role:P,vacancy:T,logo:Q,cover:X,isOpen:R,modalLoading:z,closeModal:this.closeEditModal,onChange:this.onChange,onChangeDetails:this.onChangeDetails,onChangeSkills:this.onChangeSkills,onChangeLocations:this.onChangeLocations,onChangeCompany:this.onChangeCompany,onChangeStatus:this.onChangeStatus,onChangeSeniority:this.onChangeSeniority,onChangePlan:this.onChangePlan,onChangeUser:this.onChangeUser,onChangeVacancy:this.onChangeVacancy,onChangeExperienceFrom:this.onChangeExperienceFrom,onChangeExperienceUp:this.onChangeExperienceUp,onSubmit:this.editSubmit,deleteClick:this.deleteClick(i),onCopyUser:this.onCopyUser},Object(l.a)(e,"logo",Q),Object(l.a)(e,"cover",X),Object(l.a)(e,"logoSwitcher",Y),Object(l.a)(e,"coverSwitcher",Z),Object(l.a)(e,"logoLoading",$),Object(l.a)(e,"coverLoading",ee),Object(l.a)(e,"logoUrl",ae),Object(l.a)(e,"coverUrl",te),Object(l.a)(e,"fileInputLogo",this.fileInputLogo),Object(l.a)(e,"fileInputCover",this.fileInputCover),Object(l.a)(e,"onUploadLogo",this.onUploadLogo),Object(l.a)(e,"onUploadCover",this.onUploadCover),Object(l.a)(e,"onDeleteLogo",this.onDeleteLogo),Object(l.a)(e,"onDeleteCover",this.onDeleteCover),e)),p.a.createElement(v.a,{manual:!0,data:r,pages:c,loading:o,columns:[].concat(Object(n.a)(ne),oe),getTdProps:function(e,t,n,o){return{onClick:function(e){if(void 0!==t){var n=t.original;return a.editClick(n)(e)}return null}}},onFetchData:function(e){a.setState({tableLoading:!0}),G(e).then(function(t){a.setState({jobsCount:Math.ceil(t.data.count/e.pageSize)}),B(e).then(function(e){return a.setState({jobs:e.data,tableLoading:!1})}).catch(function(e){return a.catchErrors(e)})}).catch(function(e){return a.catchErrors(e)})}}))}}]),a}(p.a.Component);a.default=Object(W.a)(oe)}}]);
//# sourceMappingURL=5.c803534e.chunk.js.map