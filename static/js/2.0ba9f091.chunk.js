(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{416:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(9),l=a(10),r=a(13),i=a(12),o=a(14),c=a(0),d=a.n(c),s=a(22),u=a.n(s);function m(e){return function(t){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(o.a)(a,t),Object(l.a)(a,[{key:"render",value:function(){var t={setHeaderTitle:function(e){u.a.publish("setPageTitle",e)}};return d.a.createElement(e,Object.assign({},this.props,t))}}]),a}(c.Component)}},417:function(e,t,a){},419:function(e,t,a){},421:function(e,t,a){},423:function(e,t,a){},425:function(e,t,a){},427:function(e,t,a){"use strict";var n=a(41),l=a(9),r=a(10),i=a(13),o=a(12),c=a(14),d=a(0),s=a.n(d),u=a(429),m=a(428),f=a.n(m),p=(a(417),function(e){e.name,e.id;return s.a.createElement("div",{className:"ReactModal__edit"},"Edit modal")}),g=a(285),h=a(87),O=(a(419),function(e){var t=e.itemOriginal,a=e.closeModal,n=e.deleteRequest,l=e.modalLoading;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"ReactModal__delete__title"},s.a.createElement("span",null,"Are you sure you want to delete ")," ",s.a.createElement("br",null),'"'.concat(t.id)," - ",s.a.createElement("b",null,"".concat(t.name,'"?'))),l?s.a.createElement(h.a,null):s.a.createElement("div",{className:"ReactModal__delete__buttons"},s.a.createElement(g.a,{outline:!0,color:"secondary",onClick:a},"Cancel"),s.a.createElement(g.a,{outline:!0,color:"danger",onClick:n},"Delete")))}),E=(a(421),function(e){e.name,e.id;return s.a.createElement("div",{className:"ReactModal__add"},"Add modal")}),v=(a(423),function(e){var t=e.type,a=e.modalIsOpen,n=e.closeModal,l=e.itemOriginal,r=e.deleteRequest,i=e.modalLoading;return s.a.createElement(s.a.Fragment,null,s.a.createElement(f.a,{ariaHideApp:!1,isOpen:a,overlayClassName:"ReactModal__Overlay",className:"ReactModal ReactModal__".concat(t),onRequestClose:!i&&n},"delete"===t&&s.a.createElement(O,{closeModal:n,itemOriginal:l,deleteRequest:r,modalLoading:i})||"edit"===t&&s.a.createElement(p,{closeModal:n,itemOriginal:l,modalLoading:i})||"add"===t&&s.a.createElement(E,{closeModal:n,itemOriginal:l,deleteRequest:r,modalLoading:i})))}),b=a(443),y=function(e){var t=e.type,a=e.itemOriginal;return s.a.createElement(s.a.Fragment,null,"delete"===t&&s.a.createElement(b.a,{color:"danger"},'"'.concat(a.id)," - ",s.a.createElement("b",null,"".concat(a.name,'" is deleted')))||"edit"===t&&s.a.createElement(b.a,{color:"warning"},'"'.concat(a.id)," - ",s.a.createElement("b",null,"".concat(a.name,'" is edited')))||"add"===t&&s.a.createElement(b.a,{color:"success"},"New item is added")||"error"===t&&s.a.createElement(b.a,{color:"danger"},s.a.createElement("b",null,"Error"),". Something is wrong!"))},C=a(51),w=a.n(C),_=a(62),j=a(86),k=function(e,t){var a=e.filtered,n={};return a.forEach(function(e){"id"===e.id?n[e.id]=e.value:n[e.id]={like:e.value+"%"}}),w.a.get("".concat(_.a,"/").concat(t,"/count"),{params:{where:n},headers:{Authorization:j.a}}).then(function(e){return e.data.count}).catch(function(e){return console.log(e)})},S=function(e,t,a){var n=e.pageSize,l=e.page,r=e.filtered,i=e.sorted,o={where:{},limit:n,skip:l*n,order:a};return r.forEach(function(e){"id"===e.id?o.where[e.id]=e.value:o.where[e.id]={like:e.value+"%"}}),i.forEach(function(e){var t=e.desc?"DESC":"ASC";o.order="".concat(e.id," ").concat(t)}),w.a.get("".concat(_.a,"/").concat(t),{params:{filter:o},headers:{Authorization:j.a}}).then(function(e){return e.data}).catch(function(e){return console.log(e)})},I=function(e,t){return w.a.delete("".concat(_.a,"/").concat(e,"/").concat(t),{headers:{Authorization:j.a}})},M=(a(425),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],count:null,loading:!1,itemOriginal:null,modalType:"",modalIsOpen:!1,modalLoading:!1,alertIsOpen:!1},a.deleteClick=function(e){return function(){a.setState({modalType:"delete",modalIsOpen:!0,itemOriginal:e,alertIsOpen:!1})}},a.delete=function(){var e=a.props.dataPath,t=a.state.itemOriginal.id;a.setState({modalLoading:!0}),I(e,t).then(function(e){console.log(e),a.setState({modalIsOpen:!1,modalLoading:!1})}).then(function(){a.setState({alertIsOpen:!0}),setTimeout(function(){a.setState({alertIsOpen:!1}),window.location.reload()},2e3)}).catch(function(e){console.log(e),a.setState({alertIsOpen:!0,modalType:"error"})})},a.editClick=function(e){return function(){a.setState({modalType:"edit",modalIsOpen:!0,itemOriginal:e,alertIsOpen:!1})}},a.addClick=function(e){return function(){a.setState({modalType:"add",modalIsOpen:!0,itemOriginal:e})}},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=[{Header:"Id",accessor:"id",width:60,style:{textAlign:"right"},Cell:function(e){var t=e.original;return s.a.createElement("div",null,t.id||"...")}}],a=[{Header:"",width:65,sortable:!1,filterable:!1,Cell:function(t){var a=t.original;return s.a.createElement("div",{className:"rt-custom__controls"},s.a.createElement("i",{className:"ion-android-delete",onClick:e.deleteClick(a)}),s.a.createElement("i",{className:"ion-edit",onClick:e.editClick(a)}))}}],l=this.props,r=l.wrapperClassname,i=l.columns,o=l.dataPath,c=l.startOrder,d=this.state,m=d.loading,f=d.count,p=d.data,g=d.modalIsOpen,h=d.itemOriginal,O=d.modalType,E=d.modalLoading,b=d.alertIsOpen;return s.a.createElement("div",{className:"".concat(r)},b&&s.a.createElement(y,{type:O,itemOriginal:h}),s.a.createElement(v,{type:O,modalIsOpen:g,modalLoading:E,itemOriginal:h,deleteRequest:this.delete,closeModal:function(){return e.setState({modalIsOpen:!1})}}),s.a.createElement(u.a,{data:p,manual:!0,pages:f,resizable:!0,filterable:!0,loading:m,className:"-striped -highlight",columns:[].concat(t,Object(n.a)(i),a),dataPath:o,startOrder:c,onFetchData:function(t){e.setState({loading:!0}),k(t,o).then(function(a){return e.setState({count:Math.ceil(a/t.pageSize)})}).then(function(){return S(t,o,c)}).then(function(t){return e.setState({data:t,loading:!1})})}}))}}]),t}(s.a.Component));t.a=M},452:function(e,t,a){"use strict";a.r(t);var n=a(9),l=a(10),r=a(13),i=a(12),o=a(14),c=a(0),d=a.n(c),s=a(427),u=a(416),m=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){this.props.setHeaderTitle("Users")}},{key:"render",value:function(){var e=[{Header:"Name",accessor:"name",style:{fontWeight:"bold"},Cell:function(e){var t=e.original;return d.a.createElement("div",null,d.a.createElement("span",null,"".concat(t.name," ").concat(t.surname)||"..."))}},{Header:"Email",accessor:"email",Cell:function(e){var t=e.original;return d.a.createElement("a",{href:"mailto:".concat(t.email)},t.email||"\u2014")}},{Header:"Created",accessor:"created",width:120,Cell:function(e){var t=e.original;return d.a.createElement("div",{style:{textAlign:"center"}},d.a.createElement("span",null,t.created.substring(0,10)||"..."))}}];return d.a.createElement(s.a,{columns:e,dataPath:"users",wrapperClassname:"users-table"})}}]),t}(d.a.Component);t.default=Object(u.a)(m)}}]);
//# sourceMappingURL=2.0ba9f091.chunk.js.map