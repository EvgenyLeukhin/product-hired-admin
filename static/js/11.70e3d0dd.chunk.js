(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{416:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var n=a(9),c=a(10),l=a(13),r=a(12),i=a(14),m=a(0),s=a.n(m),o=a(22),u=a.n(o);function d(e){return function(t){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(i.a)(a,t),Object(c.a)(a,[{key:"render",value:function(){var t={setHeaderTitle:function(e){u.a.publish("setPageTitle",e)}};return s.a.createElement(e,Object.assign({},this.props,t))}}]),a}(m.Component)}},441:function(e,t,a){},461:function(e,t,a){"use strict";a.r(t);var n=a(9),c=a(10),l=a(13),r=a(12),i=a(14),m=a(0),s=a.n(m),o=a(416),u=a(51),d=a.n(u),E=a(62),b=a(86),p=JSON.parse(localStorage.getItem("ph-admin-user-data")),f=p&&p.userId,h=function(){return d.a.get("".concat(E.a,"/users/").concat(f),{headers:{Authorization:b.a}}).then(function(e){return e.data}).catch(function(e){return console.log(e)})},N=(a(441),function(e){function t(){var e,a;Object(n.a)(this,t);for(var c=arguments.length,i=new Array(c),m=0;m<c;m++)i[m]=arguments[m];return(a=Object(l.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(i)))).state={name:"",position:"",avatar:"",id:null,email:"",created:"",city:"",country:""},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){this.props.setHeaderTitle("Profile")}},{key:"componentDidMount",value:function(){var e=this;h().then(function(t){e.setState({name:"".concat(t.name," ").concat(t.surname),position:t.job_title,avatar:t.image.url,id:t.id,email:t.email,created:t.created,city:t.location.name,country:t.location.alias_region})})}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.position,n=e.avatar,c=e.id,l=e.email,r=e.created,i=e.city,m=e.country;return s.a.createElement("section",{className:"section-container"},s.a.createElement("div",{className:"container-overlap bg-blue-500"},s.a.createElement("div",{className:"media m0 pv"},s.a.createElement("div",{className:"d-flex mr"},s.a.createElement("a",{href:"#dummy"},s.a.createElement("img",{alt:"User",className:"rounded-circle thumb64",src:n||"img/user/01.jpg"}))),s.a.createElement("div",{className:"media-body"},s.a.createElement("h4",{className:"mt-sm mb0"},t||""),s.a.createElement("span",{className:"text-muted",style:{textTransform:"capitalize"}},a&&"Product Hired ".concat(a))))),s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-10 col-xl-8"},s.a.createElement("form",{className:"cardbox"},s.a.createElement("h5",{className:"cardbox-heading pb0"},"Contact Information"),s.a.createElement("div",{className:"cardbox-body"},s.a.createElement("table",{className:"table table-striped"},s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement("em",{className:"ion-ios-contact icon-fw mr"}),"Position"),s.a.createElement("td",null,s.a.createElement("span",{className:"is-editable text-inherit",style:{textTransform:"capitalize"}},a||"\u2014"))),s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement("em",{className:"ion-ios-checkmark icon-fw mr"}),"User ID"),s.a.createElement("td",null,s.a.createElement("span",{className:"is-editable text-inherit"},c||"\u2014"))),s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement("em",{className:"ion-email icon-fw mr"}),"Email"),s.a.createElement("td",null,s.a.createElement("span",{className:"is-editable text-inherit"},s.a.createElement("a",{href:"mailto:".concat(l)},l||"\u2014")))),s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement("em",{className:"ion-android-calendar icon-fw mr"}),"Created"),s.a.createElement("td",null,s.a.createElement("span",{className:"is-editable text-inherit"},r.substring(0,10)||"\u2014"))),s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement("em",{className:"ion-android-home icon-fw mr"}),"Location"),s.a.createElement("td",null,s.a.createElement("span",{className:"is-editable text-inherit"},i&&"".concat(i,", ").concat(m)||"\u2014")))))))))))}}]),t}(m.Component));t.default=Object(o.a)(N)}}]);
//# sourceMappingURL=11.70e3d0dd.chunk.js.map