(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{415:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(9),l=a(10),i=a(13),r=a(12),o=a(14),c=a(0),d=a.n(c),s=a(22),u=a.n(s);function m(e){return function(t){function a(){return Object(n.a)(this,a),Object(i.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(o.a)(a,t),Object(l.a)(a,[{key:"render",value:function(){var t={setHeaderTitle:function(e){u.a.publish("setPageTitle",e)}};return d.a.createElement(e,Object.assign({},this.props,t))}}]),a}(c.Component)}},416:function(e,t,a){},418:function(e,t,a){},420:function(e,t,a){"use strict";var n=a(41),l=a(9),i=a(10),r=a(13),o=a(12),c=a(14),d=a(0),s=a.n(d),u=a(422),m=a(436),p=a(52),h=a.n(p),f=a(421),g=a.n(f),O=a(284),b=a(87),v=(a(416),function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isOpen,a=e.closeModal,n=e.itemOriginal,l=e.deleteRequest,i=e.modalLoader;return s.a.createElement(g.a,{isOpen:t,style:{content:{width:"320px",right:"auto",bottom:"auto",left:"50%",marginLeft:"-160px",borderRadius:"10px"},overlay:{backgroundColor:"rgba(0,0,0, .5)",zIndex:"30"}},onRequestClose:!i&&a,ariaHideApp:!1},s.a.createElement("div",{className:"ReactModal__delete"},n&&s.a.createElement("div",{className:"ReactModal__delete__title"},s.a.createElement("span",null,"Are you sure you want to delete ")," ",s.a.createElement("br",null),'"'.concat(n.id)," - ",s.a.createElement("b",null,"".concat(n.name,'"?'))),s.a.createElement("div",{className:"ReactModal__delete__buttons"},i?s.a.createElement(b.a,null):s.a.createElement(s.a.Fragment,null,s.a.createElement(O.a,{outline:!0,color:"secondary",onClick:a},"Cancel"),s.a.createElement(O.a,{outline:!0,color:"danger",onClick:l},"Delete")))))}}]),t}(s.a.Component)),E=a(62),j=(a(418),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={data:[],count:null,loading:!1,itemOriginal:null,modalType:"",modalIsOpen:!1,modalLoader:!1,alert:!1},a.editClick=function(e){return function(){a.setState({modalType:"edit",itemOriginal:e}),alert("Edit TODO id:".concat(e.id))}},a.deleteClick=function(e){return function(){a.setState({modalType:"delete",modalIsOpen:!0,itemOriginal:e})}},a.deleteRequest=function(){var e=a.props.dataPath,t=a.state.itemOriginal.id,n=JSON.parse(localStorage.getItem("ph-admin-user-data")),l=n&&n.id;h.a.delete("".concat(E.a,"/api/api/").concat(e,"/").concat(t),{headers:{Authorization:l}}).then(a.setState({modalLoader:!0})).then(function(e){console.log(e),a.setState({modalIsOpen:!1,modalLoader:!1})}).then(function(){a.setState({alert:!0}),setTimeout(function(){a.setState({alert:!1}),window.location.reload()},2e3)}).catch(function(e){console.log(e),alert("Something is wrong!")})},a}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.columns,l=t.dataPath,i=t.order,r=this.state,o=r.data,c=r.loading,d=r.count,p=r.itemOriginal,f=r.modalType,g=r.modalIsOpen,O=r.modalLoader,b=r.alert,j=[{Header:"Id",accessor:"id",width:60,style:{textAlign:"right"},Cell:function(e){var t=e.original;return s.a.createElement("div",null,t.id||"...")}}],y=[{Header:"",width:65,sortable:!1,filterable:!1,Cell:function(t){var a=t.original;return s.a.createElement("div",{className:"rt-custom__controls"},s.a.createElement("i",{className:"ion-edit",onClick:e.editClick(a)}),s.a.createElement("i",{className:"ion-android-delete",onClick:e.deleteClick(a)}))}}];return s.a.createElement("div",null,s.a.createElement(v,{type:f,itemOriginal:p,modalLoader:O,isOpen:g,closeModal:function(){return e.setState({modalIsOpen:!1})},deleteRequest:this.deleteRequest}),b&&p&&s.a.createElement(m.a,{color:"danger"},'"'.concat(p.id)," - ",s.a.createElement("b",null,"".concat(p.name,'" is deleted'))),s.a.createElement(u.a,{manual:!0,pages:d,data:o,loading:c,resizable:!0,filterable:!0,className:"-striped -highlight",columns:[].concat(j,Object(n.a)(a),y),onFetchData:function(t){var a=t.pageSize,n=t.page,r=t.sorted,o=t.filtered;e.setState({loading:!0});var c={where:{},limit:a,skip:n*a,order:i};o.forEach(function(e){"id"===e.id?c.where[e.id]=e.value:c.where[e.id]={like:e.value+"%"}}),r.forEach(function(e){var t=e.desc?"DESC":"ASC";c.order="".concat(e.id," ").concat(t)});var d=JSON.parse(localStorage.getItem("ph-admin-user-data")),s=d&&d.id;h.a.get("".concat(E.a,"/api/api/").concat(l,"/count"),{params:{where:c.where},headers:{Authorization:s}}).then(function(t){e.setState({count:Math.ceil(t.data.count/a)})}).then(h.a.get("".concat(E.a,"/api/api/").concat(l),{params:{filter:c},headers:{Authorization:s}}).then(function(t){e.setState({data:t.data,loading:!1})}).catch(function(e){console.log(e)}))}}))}}]),t}(s.a.Component));t.a=j},453:function(e,t,a){"use strict";a.r(t);var n=a(9),l=a(10),i=a(13),r=a(12),o=a(14),c=a(0),d=a.n(c),s=a(420),u=a(415),m=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){this.props.setHeaderTitle("Plans")}},{key:"render",value:function(){var e=[{Header:"Plan",accessor:"plan",style:{fontWeight:"bold"},Cell:function(e){var t=e.original;return d.a.createElement("div",null,t.name||"...")}},{Header:"Price",accessor:"price",Cell:function(e){var t=e.original;return d.a.createElement("div",null,"$".concat(t.price))||"..."}}];return d.a.createElement(s.a,{columns:e,dataPath:"plans"})}}]),t}(d.a.Component);t.default=Object(u.a)(m)}}]);
//# sourceMappingURL=10.8f42130c.chunk.js.map