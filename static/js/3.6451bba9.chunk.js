(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{419:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(10),o=a(11),l=a(13),r=a(12),i=a(14),c=a(0),s=a.n(c),d=a(30),u=a.n(d);function m(e){return function(t){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(i.a)(a,t),Object(o.a)(a,[{key:"render",value:function(){var t={setHeaderTitle:function(e){u.a.publish("setPageTitle",e)}};return s.a.createElement(e,Object.assign({},this.props,t))}}]),a}(c.Component)}},420:function(e,t,a){var n=a(465),o="object"==typeof self&&self&&self.Object===Object&&self,l=n||o||Function("return this")();e.exports=l},421:function(e,t,a){"use strict";var n=a(0),o=a.n(n),l=a(450);a(422);t.a=function(e){return o.a.createElement(l.a,Object.assign({},e,{resizable:!0,filterable:!0,className:"-striped -highlight"}))}},422:function(e,t,a){},424:function(e,t,a){"use strict";var n=a(0),o=a.n(n),l=a(670);t.a=function(e){var t=e.type,a=e.original,n=e.errorText,r=e.errorAlertIsOpen,i=e.closeErrorAlert,c=a.surname?"".concat(a.name," ").concat(a.surname):"".concat(a.name);return o.a.createElement(o.a.Fragment,null,"add"===t&&o.a.createElement(l.a,{color:"success"},"New item has been added")||"edit"===t&&o.a.createElement(l.a,{color:"warning"},'"'.concat(a.id)," - ",o.a.createElement("b",null,c," has been edited"))||"delete"===t&&o.a.createElement(l.a,{color:"danger"},'"'.concat(a.id)," - ",o.a.createElement("b",null,c," has been deleted"))||"error"===t&&o.a.createElement(l.a,{color:"danger",isOpen:r,toggle:i},n)||"copy"===t&&o.a.createElement(l.a,{color:"warning"},"Copied"))}},425:function(e,t,a){"use strict";var n=a(0),o=a.n(n),l=a(418),r=a.n(l);a(426),a(428),a(430);t.a=function(e){var t=e.isOpen,a=e.modalLoading,n=e.closeModal;return o.a.createElement(r.a,Object.assign({},e,{ariaHideApp:!1,isOpen:t,overlayClassName:"ReactModal__Overlay",className:"ReactModal ReactModal__edit",portalClassName:"ReactModal__Portal__edit",onRequestClose:!a&&n}),e.children)}},426:function(e,t,a){},428:function(e,t,a){},430:function(e,t,a){},432:function(e,t,a){"use strict";var n=a(0),o=a.n(n),l=a(534),r=a(6),i=a.n(r);a(433);t.a=function(e){var t=e.text,a=e.loading,n=e.addClick;return o.a.createElement(l.a,{type:"button",color:"primary",onClick:n,className:i()("add-button",{"is-loading":a})},"Add ",t)}},433:function(e,t,a){},435:function(e,t,a){"use strict";var n=a(0),o=a.n(n),l=a(418),r=a.n(l);a(436),a(438);t.a=function(e){var t=e.isOpen,a=e.modalLoading,n=e.closeModal;return o.a.createElement(r.a,Object.assign({},e,{ariaHideApp:!1,isOpen:t,overlayClassName:"ReactModal__Overlay",className:"ReactModal ReactModal__add",portalClassName:"ReactModal__Portal__add",onRequestClose:!a&&n}),e.children)}},436:function(e,t,a){},438:function(e,t,a){},440:function(e,t,a){"use strict";var n=a(0),o=a.n(n),l=a(418),r=a.n(l);a(441);t.a=function(e){var t=e.isOpen,a=e.modalLoading,n=e.closeModal;return o.a.createElement(r.a,Object.assign({},e,{ariaHideApp:!1,isOpen:t,overlayClassName:"ReactModal__Overlay",className:"ReactModal ReactModal__delete",portalClassName:"ReactModal__Portal__delete",onRequestClose:!a&&n}),e.children)}},441:function(e,t,a){},443:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},444:function(e,t,a){var n=a(452),o=a(480),l=a(481),r="[object Null]",i="[object Undefined]",c=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?i:r:c&&c in Object(e)?o(e):l(e)}},446:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},451:function(e,t,a){var n;n=function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","\xa2":"cent","\xa3":"pound","\xa4":"currency","\xa5":"yen","\xa9":"(c)","\xaa":"a","\xae":"(r)","\xba":"o","\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xc6":"AE","\xc7":"C","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xd0":"D","\xd1":"N","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xdd":"Y","\xde":"TH","\xdf":"ss","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xe6":"ae","\xe7":"c","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xf0":"d","\xf1":"n","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xfd":"y","\xfe":"th","\xff":"y","\u0100":"A","\u0101":"a","\u0102":"A","\u0103":"a","\u0104":"A","\u0105":"a","\u0106":"C","\u0107":"c","\u010c":"C","\u010d":"c","\u010e":"D","\u010f":"d","\u0110":"DJ","\u0111":"dj","\u0112":"E","\u0113":"e","\u0116":"E","\u0117":"e","\u0118":"e","\u0119":"e","\u011a":"E","\u011b":"e","\u011e":"G","\u011f":"g","\u0122":"G","\u0123":"g","\u0128":"I","\u0129":"i","\u012a":"i","\u012b":"i","\u012e":"I","\u012f":"i","\u0130":"I","\u0131":"i","\u0136":"k","\u0137":"k","\u013b":"L","\u013c":"l","\u013d":"L","\u013e":"l","\u0141":"L","\u0142":"l","\u0143":"N","\u0144":"n","\u0145":"N","\u0146":"n","\u0147":"N","\u0148":"n","\u0150":"O","\u0151":"o","\u0152":"OE","\u0153":"oe","\u0154":"R","\u0155":"r","\u0158":"R","\u0159":"r","\u015a":"S","\u015b":"s","\u015e":"S","\u015f":"s","\u0160":"S","\u0161":"s","\u0162":"T","\u0163":"t","\u0164":"T","\u0165":"t","\u0168":"U","\u0169":"u","\u016a":"u","\u016b":"u","\u016e":"U","\u016f":"u","\u0170":"U","\u0171":"u","\u0172":"U","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017a":"z","\u017b":"Z","\u017c":"z","\u017d":"Z","\u017e":"z","\u0192":"f","\u01a0":"O","\u01a1":"o","\u01af":"U","\u01b0":"u","\u01c8":"LJ","\u01c9":"lj","\u01cb":"NJ","\u01cc":"nj","\u0218":"S","\u0219":"s","\u021a":"T","\u021b":"t","\u02da":"o","\u0386":"A","\u0388":"E","\u0389":"H","\u038a":"I","\u038c":"O","\u038e":"Y","\u038f":"W","\u0390":"i","\u0391":"A","\u0392":"B","\u0393":"G","\u0394":"D","\u0395":"E","\u0396":"Z","\u0397":"H","\u0398":"8","\u0399":"I","\u039a":"K","\u039b":"L","\u039c":"M","\u039d":"N","\u039e":"3","\u039f":"O","\u03a0":"P","\u03a1":"R","\u03a3":"S","\u03a4":"T","\u03a5":"Y","\u03a6":"F","\u03a7":"X","\u03a8":"PS","\u03a9":"W","\u03aa":"I","\u03ab":"Y","\u03ac":"a","\u03ad":"e","\u03ae":"h","\u03af":"i","\u03b0":"y","\u03b1":"a","\u03b2":"b","\u03b3":"g","\u03b4":"d","\u03b5":"e","\u03b6":"z","\u03b7":"h","\u03b8":"8","\u03b9":"i","\u03ba":"k","\u03bb":"l","\u03bc":"m","\u03bd":"n","\u03be":"3","\u03bf":"o","\u03c0":"p","\u03c1":"r","\u03c2":"s","\u03c3":"s","\u03c4":"t","\u03c5":"y","\u03c6":"f","\u03c7":"x","\u03c8":"ps","\u03c9":"w","\u03ca":"i","\u03cb":"y","\u03cc":"o","\u03cd":"y","\u03ce":"w","\u0401":"Yo","\u0402":"DJ","\u0404":"Ye","\u0406":"I","\u0407":"Yi","\u0408":"J","\u0409":"LJ","\u040a":"NJ","\u040b":"C","\u040f":"DZ","\u0410":"A","\u0411":"B","\u0412":"V","\u0413":"G","\u0414":"D","\u0415":"E","\u0416":"Zh","\u0417":"Z","\u0418":"I","\u0419":"J","\u041a":"K","\u041b":"L","\u041c":"M","\u041d":"N","\u041e":"O","\u041f":"P","\u0420":"R","\u0421":"S","\u0422":"T","\u0423":"U","\u0424":"F","\u0425":"H","\u0426":"C","\u0427":"Ch","\u0428":"Sh","\u0429":"Sh","\u042a":"U","\u042b":"Y","\u042c":"","\u042d":"E","\u042e":"Yu","\u042f":"Ya","\u0430":"a","\u0431":"b","\u0432":"v","\u0433":"g","\u0434":"d","\u0435":"e","\u0436":"zh","\u0437":"z","\u0438":"i","\u0439":"j","\u043a":"k","\u043b":"l","\u043c":"m","\u043d":"n","\u043e":"o","\u043f":"p","\u0440":"r","\u0441":"s","\u0442":"t","\u0443":"u","\u0444":"f","\u0445":"h","\u0446":"c","\u0447":"ch","\u0448":"sh","\u0449":"sh","\u044a":"u","\u044b":"y","\u044c":"","\u044d":"e","\u044e":"yu","\u044f":"ya","\u0451":"yo","\u0452":"dj","\u0454":"ye","\u0456":"i","\u0457":"yi","\u0458":"j","\u0459":"lj","\u045a":"nj","\u045b":"c","\u045d":"u","\u045f":"dz","\u0490":"G","\u0491":"g","\u0492":"GH","\u0493":"gh","\u049a":"KH","\u049b":"kh","\u04a2":"NG","\u04a3":"ng","\u04ae":"UE","\u04af":"ue","\u04b0":"U","\u04b1":"u","\u04ba":"H","\u04bb":"h","\u04d8":"AE","\u04d9":"ae","\u04e8":"OE","\u04e9":"oe","\u0e3f":"baht","\u10d0":"a","\u10d1":"b","\u10d2":"g","\u10d3":"d","\u10d4":"e","\u10d5":"v","\u10d6":"z","\u10d7":"t","\u10d8":"i","\u10d9":"k","\u10da":"l","\u10db":"m","\u10dc":"n","\u10dd":"o","\u10de":"p","\u10df":"zh","\u10e0":"r","\u10e1":"s","\u10e2":"t","\u10e3":"u","\u10e4":"f","\u10e5":"k","\u10e6":"gh","\u10e7":"q","\u10e8":"sh","\u10e9":"ch","\u10ea":"ts","\u10eb":"dz","\u10ec":"ts","\u10ed":"ch","\u10ee":"kh","\u10ef":"j","\u10f0":"h","\u1e80":"W","\u1e81":"w","\u1e82":"W","\u1e83":"w","\u1e84":"W","\u1e85":"w","\u1e9e":"SS","\u1ea0":"A","\u1ea1":"a","\u1ea2":"A","\u1ea3":"a","\u1ea4":"A","\u1ea5":"a","\u1ea6":"A","\u1ea7":"a","\u1ea8":"A","\u1ea9":"a","\u1eaa":"A","\u1eab":"a","\u1eac":"A","\u1ead":"a","\u1eae":"A","\u1eaf":"a","\u1eb0":"A","\u1eb1":"a","\u1eb2":"A","\u1eb3":"a","\u1eb4":"A","\u1eb5":"a","\u1eb6":"A","\u1eb7":"a","\u1eb8":"E","\u1eb9":"e","\u1eba":"E","\u1ebb":"e","\u1ebc":"E","\u1ebd":"e","\u1ebe":"E","\u1ebf":"e","\u1ec0":"E","\u1ec1":"e","\u1ec2":"E","\u1ec3":"e","\u1ec4":"E","\u1ec5":"e","\u1ec6":"E","\u1ec7":"e","\u1ec8":"I","\u1ec9":"i","\u1eca":"I","\u1ecb":"i","\u1ecc":"O","\u1ecd":"o","\u1ece":"O","\u1ecf":"o","\u1ed0":"O","\u1ed1":"o","\u1ed2":"O","\u1ed3":"o","\u1ed4":"O","\u1ed5":"o","\u1ed6":"O","\u1ed7":"o","\u1ed8":"O","\u1ed9":"o","\u1eda":"O","\u1edb":"o","\u1edc":"O","\u1edd":"o","\u1ede":"O","\u1edf":"o","\u1ee0":"O","\u1ee1":"o","\u1ee2":"O","\u1ee3":"o","\u1ee4":"U","\u1ee5":"u","\u1ee6":"U","\u1ee7":"u","\u1ee8":"U","\u1ee9":"u","\u1eea":"U","\u1eeb":"u","\u1eec":"U","\u1eed":"u","\u1eee":"U","\u1eef":"u","\u1ef0":"U","\u1ef1":"u","\u1ef2":"Y","\u1ef3":"y","\u1ef4":"Y","\u1ef5":"y","\u1ef6":"Y","\u1ef7":"y","\u1ef8":"Y","\u1ef9":"y","\u2018":"\'","\u2019":"\'","\u201c":"\\"","\u201d":"\\"","\u2020":"+","\u2022":"*","\u2026":"...","\u20a0":"ecu","\u20a2":"cruzeiro","\u20a3":"french franc","\u20a4":"lira","\u20a5":"mill","\u20a6":"naira","\u20a7":"peseta","\u20a8":"rupee","\u20a9":"won","\u20aa":"new shequel","\u20ab":"dong","\u20ac":"euro","\u20ad":"kip","\u20ae":"tugrik","\u20af":"drachma","\u20b0":"penny","\u20b1":"peso","\u20b2":"guarani","\u20b3":"austral","\u20b4":"hryvnia","\u20b5":"cedi","\u20b8":"kazakhstani tenge","\u20b9":"indian rupee","\u20bd":"russian ruble","\u20bf":"bitcoin","\u2120":"sm","\u2122":"tm","\u2202":"d","\u2206":"delta","\u2211":"sum","\u221e":"infinity","\u2665":"love","\u5143":"yuan","\u5186":"yen","\ufdfc":"rial"}'),t=JSON.parse('{"vi":{"\u0110":"D","\u0111":"d"}}');function a(a,n){if("string"!==typeof a)throw new Error("slugify: string argument expected");var o=t[(n="string"===typeof n?{replacement:n}:n||{}).locale]||{},l=a.split("").reduce(function(t,a){return t+(o[a]||e[a]||a).replace(n.remove||/[^\w\s$*_+~.()'"!\-:@]/g,"")},"").trim().replace(/[-\s]+/g,n.replacement||"-");return n.lower?l.toLowerCase():l}return a.extend=function(t){for(var a in t)e[a]=t[a]},a},e.exports=n(),e.exports.default=n()},452:function(e,t,a){var n=a(420).Symbol;e.exports=n},464:function(e,t,a){"use strict";t.__esModule=!0,t.Textarea=t.Input=t.default=void 0;var n=l(a(476)),o=l(a(0));function l(e){return e&&e.__esModule?e:{default:e}}var r=function(e){var t=e.debounceTimeout;return void 0===t?250:t},i=function(e){var t,a;return null!=e&&null!=(t=e.target)&&void 0!==(a=t.value)?a:e},c={value:void 0},s=function(e){return void 0===e&&(e=r),function(t){return function(a){var l,r;function s(t){var o;return(o=a.call(this)||this).state={},o._notify=(0,n.default)(function(e){o.props.onChange(e),o.setState(c)},"function"===typeof e?e(t):e),o._onBlur=function(e){o._notify.flush();var t=o.props.onBlur;void 0!==t&&t(e)},o._onChange=function(e){o.setState({value:i(e)}),null!=e&&"function"===typeof e.persist&&e.persist(),o._notify(e)},o._onKeyDown=function(e){null!=e&&"Enter"===e.key&&o._notify.flush();var t=o.props.onKeyDown;void 0!==t&&t(e)},o._wrappedInstance=null,o._onRef=function(e){o._wrappedInstance=e},o}r=a,(l=s).prototype=Object.create(r.prototype),l.prototype.constructor=l,l.__proto__=r;var d=s.prototype;return d.componentWillReceiveProps=function(e){e.value!==this.props.value&&(this._notify.cancel(),this.setState(c))},d.componentWillUnmount=function(){this._notify.flush()},d.getWrappedInstance=function(){return this._wrappedInstance},d.render=function(){var e=Object.assign({},this.props,{onBlur:this._onBlur,onChange:this._onChange,onKeyDown:this._onKeyDown,ref:this._onRef});delete e.debounceTimeout;var a=this.state.value;return void 0!==a&&(e.value=a),o.default.createElement(t,e)},s}(o.default.Component)}};t.default=s;var d=s()("input");t.Input=d;var u=s()("textarea");t.Textarea=u},465:function(e,t,a){(function(t){var a="object"==typeof t&&t&&t.Object===Object&&t;e.exports=a}).call(this,a(66))},475:function(e,t,a){"use strict";var n=a(0),o=a.n(n),l=a(464);t.a=function(e,t){return o.a.createElement(l.Input,{style:{width:"100%"},value:e?e.value:"",onChange:function(e){return t(e.target.value)},debounceTimeout:800})}},476:function(e,t,a){var n=a(443),o=a(477),l=a(478),r="Expected a function",i=Math.max,c=Math.min;e.exports=function(e,t,a){var s,d,u,m,p,g,f=0,v=!1,A=!1,h=!0;if("function"!=typeof e)throw new TypeError(r);function E(t){var a=s,n=d;return s=d=void 0,f=t,m=e.apply(n,a)}function b(e){var a=e-g;return void 0===g||a>=t||a<0||A&&e-f>=u}function C(){var e=o();if(b(e))return O(e);p=setTimeout(C,function(e){var a=t-(e-g);return A?c(a,u-(e-f)):a}(e))}function O(e){return p=void 0,h&&s?E(e):(s=d=void 0,m)}function N(){var e=o(),a=b(e);if(s=arguments,d=this,g=e,a){if(void 0===p)return function(e){return f=e,p=setTimeout(C,t),v?E(e):m}(g);if(A)return clearTimeout(p),p=setTimeout(C,t),E(g)}return void 0===p&&(p=setTimeout(C,t)),m}return t=l(t)||0,n(a)&&(v=!!a.leading,u=(A="maxWait"in a)?i(l(a.maxWait)||0,t):u,h="trailing"in a?!!a.trailing:h),N.cancel=function(){void 0!==p&&clearTimeout(p),f=0,s=g=d=p=void 0},N.flush=function(){return void 0===p?m:O(o())},N}},477:function(e,t,a){var n=a(420);e.exports=function(){return n.Date.now()}},478:function(e,t,a){var n=a(443),o=a(479),l=NaN,r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,d=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return l;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var a=c.test(e);return a||s.test(e)?d(e.slice(2),a?2:8):i.test(e)?l:+e}},479:function(e,t,a){var n=a(444),o=a(446),l="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||o(e)&&n(e)==l}},480:function(e,t,a){var n=a(452),o=Object.prototype,l=o.hasOwnProperty,r=o.toString,i=n?n.toStringTag:void 0;e.exports=function(e){var t=l.call(e,i),a=e[i];try{e[i]=void 0;var n=!0}catch(c){}var o=r.call(e);return n&&(t?e[i]=a:delete e[i]),o}},481:function(e,t){var a=Object.prototype.toString;e.exports=function(e){return a.call(e)}},542:function(e,t){e.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQYGBgYICQgJCAwLCgoLDBINDg0ODRIbERQRERQRGxgdGBYYHRgrIh4eIisyKigqMjw2NjxMSExkZIYBBQUFBQUFBgYGBggJCAkIDAsKCgsMEg0ODQ4NEhsRFBERFBEbGB0YFhgdGCsiHh4iKzIqKCoyPDY2PExITGRkhv/CABEIABQAFAMBIgACEQEDEQH/xAAXAAADAQAAAAAAAAAAAAAAAAAABAYI/9oACAEBAAAAANlqNqytoB//xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAECEAAAAA//xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDEAAAAA//xAAhEAACAgIBBAMAAAAAAAAAAAABAgMEBRIhAAYRIhATIP/aAAgBAQABPwC9bix9K1clDGOCF5XCjyxVBsfA6xXcOJzJApTlyQ7AFSOI20Pxnbk1StFpQNtJpTFNHqWAjZG5YKG9fI54PWFztWfLfVV7ZNeR3dZ5kj1MZdy7CQhANi3sefz/AP/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8AH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8AH//Z"},680:function(e,t,a){"use strict";a.r(t);var n=a(43),o=a(5),l=a(10),r=a(11),i=a(13),c=a(12),s=a(14),d=a(0),u=a.n(d),m=a(451),p=a.n(m),g=a(421),f=a(424),v=a(432),A=a(435),h=a(109),E=a(534),b=function(e){var t=e.name,a=e.domain,n=e.slug,o=(e.weight,e.logo),l=e.cover,r=e.fileInputLogo,i=e.logoLoading,c=e.onUploadLogo,s=e.deleteLogo,d=e.fileInputCover,m=e.coverLoading,p=e.onUploadCover,g=e.deleteCover,f=e.isOpen,v=e.closeModal,b=e.onChange,C=e.onSubmit,O=e.modalLoading,N=e.generateSlug;return u.a.createElement(A.a,{isOpen:f,modalLoading:O,closeModal:v},u.a.createElement("section",{className:"section-container add-container"},u.a.createElement("h4",{className:"add-container__title"},"Add company"),u.a.createElement("span",{className:"ion-close-round add-container__close",onClick:v}),u.a.createElement("div",{className:"cardbox"},u.a.createElement("div",{className:"cardbox-body"},u.a.createElement("form",{action:"",onSubmit:C},u.a.createElement("fieldset",null,u.a.createElement("div",{className:"form-group row"},u.a.createElement("div",{className:"col-md-4"},u.a.createElement("label",{htmlFor:"add-name"},"Company name"),u.a.createElement("input",{name:"name",value:t,id:"add-name",onChange:b,type:"text",className:"form-control"})),u.a.createElement("div",{className:"col-md-4"},u.a.createElement("label",{htmlFor:"add-domain"},"Domain"),u.a.createElement("input",{name:"domain",value:a,id:"add-domain",onChange:b,type:"text",className:"form-control"})),u.a.createElement("div",{className:"col-md-4"},u.a.createElement("label",{htmlFor:"add-slug"},"Slug"),u.a.createElement("div",{className:"input-group"},u.a.createElement("input",{name:"slug",value:n,id:"add-slug",onChange:b,type:"text",className:"form-control"}),u.a.createElement("div",{className:"input-group-append"},u.a.createElement("button",{className:"btn btn-light",type:"button",onClick:N,disabled:!t},"Generate")))),u.a.createElement("div",{className:"col-md-6"},u.a.createElement("div",{className:"add-logo"},u.a.createElement("label",{htmlFor:"add-logo"},"Logo"),i?u.a.createElement(h.a,null):o?u.a.createElement("img",{className:"logo",src:o,alt:"logo"}):u.a.createElement("div",{className:"no-logo"},"No logo"),u.a.createElement("input",{id:"add-logo",type:"file",className:"input-file-custom",ref:r,onChange:c}),u.a.createElement("label",{htmlFor:"add-logo",className:"input-file-label  btn btn-light"},u.a.createElement("i",{className:"ion-image"}),"\xa0",u.a.createElement("span",null,"Load logo"))),u.a.createElement("div",{className:"add-logo-url"},u.a.createElement("label",{htmlFor:"add-logo-url"},"Logo URL"),u.a.createElement("div",{className:"input-group"},u.a.createElement("input",{name:"logo",value:o,id:"add-logo-url",onChange:b,type:"url",className:"form-control",placeholder:"Please, paste logo URL or load file"}),u.a.createElement("div",{className:"input-group-append"},u.a.createElement("button",{className:"btn btn-light",type:"button",onClick:s,disabled:!o},"Clear"))))),u.a.createElement("div",{className:"col-md-6"},u.a.createElement("div",{className:"add-cover"},u.a.createElement("label",{htmlFor:"add-cover"},"Cover"),m?u.a.createElement(h.a,null):l?u.a.createElement("img",{className:"cover",src:l,alt:"cover"}):u.a.createElement("div",{className:"no-cover"},"No cover"),u.a.createElement("input",{id:"add-cover",type:"file",className:"input-file-custom",ref:d,onChange:p}),u.a.createElement("label",{htmlFor:"add-cover",className:"input-file-label  btn btn-light"},u.a.createElement("i",{className:"ion-image"}),"\xa0",u.a.createElement("span",null,"Load cover"))),u.a.createElement("div",{className:"add-cover-url"},u.a.createElement("label",{htmlFor:"add-cover-url"},"Cover URL"),u.a.createElement("div",{className:"input-group"},u.a.createElement("input",{name:"cover",value:l,id:"add-cover-url",onChange:b,type:"url",className:"form-control",placeholder:"Please, paste cover URL or load file"}),u.a.createElement("div",{className:"input-group-append"},u.a.createElement("button",{className:"btn btn-light",type:"button",onClick:g,disabled:!l},"Clear"))))))),O?u.a.createElement("div",{className:"add-container__is-loading"},u.a.createElement(h.a,null)):u.a.createElement("footer",{className:"add-container__buttons"},u.a.createElement(E.a,{outline:!0,color:"secondary",onClick:v},"Cancel"),u.a.createElement(E.a,{disabled:!t||!n||i||m,outline:!0,color:"primary",type:"submit"},"Save")))))))},C=a(425),O=function(e){var t=e.name,a=e.domain,n=e.slug,o=e.logo,l=e.cover,r=e.original,i=e.fileInputLogo,c=e.logoLoading,s=e.onUploadLogo,d=e.deleteLogo,m=e.fileInputCover,p=e.coverLoading,g=e.onUploadCover,f=e.deleteCover,v=e.isOpen,A=e.closeModal,b=e.onChange,O=e.onSubmit,N=e.modalLoading,y=e.deleteClick,I=e.generateSlug;return u.a.createElement(C.a,{isOpen:v,modalLoading:N,closeModal:A},u.a.createElement("section",{className:"section-container edit-container"},u.a.createElement("h4",{className:"edit-container__title"},"Edit: ",u.a.createElement("b",null,r.name)),u.a.createElement("span",{className:"ion-close-round edit-container__close",onClick:A}),u.a.createElement("div",{className:"cardbox"},u.a.createElement("div",{className:"cardbox-body"},u.a.createElement("form",{action:"",onSubmit:O},u.a.createElement("fieldset",null,u.a.createElement("div",{className:"form-group row"},u.a.createElement("div",{className:"col-md-4"},u.a.createElement("label",{htmlFor:"edit-name"},"Company name"),u.a.createElement("input",{name:"name",value:t,id:"edit-name",onChange:b,type:"text",className:"form-control"})),u.a.createElement("div",{className:"col-md-4"},u.a.createElement("label",{htmlFor:"edit-domain"},"Website"),u.a.createElement("input",{name:"domain",value:a,id:"edit-domain",onChange:b,type:"text",className:"form-control"})),u.a.createElement("div",{className:"col-md-4"},u.a.createElement("label",{htmlFor:"edit-slug"},"Slug"),u.a.createElement("div",{className:"input-group"},u.a.createElement("input",{name:"slug",value:n,id:"edit-slug",onChange:b,type:"text",className:"form-control"}),u.a.createElement("div",{className:"input-group-append"},u.a.createElement("button",{className:"btn btn-light",type:"button",onClick:I,disabled:!t},"Generate")))),u.a.createElement("div",{className:"col-md-6"},u.a.createElement("div",{className:"edit-logo"},u.a.createElement("label",{htmlFor:"edit-logo"},"Logo"),c?u.a.createElement(h.a,null):o?u.a.createElement("img",{className:"logo",src:o,alt:"logo"}):u.a.createElement("div",{className:"no-logo"},"No logo"),u.a.createElement("input",{id:"edit-logo",type:"file",className:"input-file-custom",ref:i,onChange:s}),u.a.createElement("label",{htmlFor:"edit-logo",className:"input-file-label  btn btn-light"},u.a.createElement("i",{className:"ion-image"}),"\xa0",u.a.createElement("span",null,"Load logo"))),u.a.createElement("div",{className:"edit-logo-url"},u.a.createElement("label",{htmlFor:"edit-logo-url"},"Logo URL"),u.a.createElement("div",{className:"input-group"},u.a.createElement("input",{name:"logo",value:o&&o.includes("clearbit.com")?"":o,id:"edit-logo-url",onChange:b,type:"url",className:"form-control",placeholder:"Please, paste logo URL or load file"}),u.a.createElement("div",{className:"input-group-append"},u.a.createElement("button",{className:"btn btn-light",type:"button",onClick:d,disabled:!o},"Clear"))))),u.a.createElement("div",{className:"col-md-6"},u.a.createElement("div",{className:"edit-cover"},u.a.createElement("label",{htmlFor:"edit-cover"},"Cover"),p?u.a.createElement(h.a,null):l?u.a.createElement("img",{className:"cover",src:l,alt:"cover"}):u.a.createElement("div",{className:"no-cover"},"No cover"),u.a.createElement("input",{id:"edit-cover",type:"file",className:"input-file-custom",ref:m,onChange:g}),u.a.createElement("label",{htmlFor:"edit-cover",className:"input-file-label  btn btn-light"},u.a.createElement("i",{className:"ion-image"}),"\xa0",u.a.createElement("span",null,"Load cover"))),u.a.createElement("div",{className:"edit-cover-url"},u.a.createElement("label",{htmlFor:"edit-cover-url"},"Cover URL"),u.a.createElement("div",{className:"input-group"},u.a.createElement("input",{name:"cover",value:l,id:"edit-cover-url",onChange:b,type:"url",className:"form-control",placeholder:"Please, paste cover URL or load file"}),u.a.createElement("div",{className:"input-group-append"},u.a.createElement("button",{className:"btn btn-light",type:"button",onClick:f,disabled:!l},"Clear"))))))),N?u.a.createElement("div",{className:"edit-container__is-loading"},u.a.createElement(h.a,null)):u.a.createElement("footer",{className:"edit-container__buttons"},u.a.createElement(E.a,{outline:!0,color:"danger",onClick:y},"Delete"),u.a.createElement(E.a,{outline:!0,color:"secondary",onClick:A},"Cancel"),u.a.createElement(E.a,{disabled:!t||!n||c||p,outline:!0,color:"primary",type:"submit"},"Save")))))))},N=a(440),y=function(e){var t=e.isOpen,a=e.modalLoading,n=e.closeModal,o=e.original,l=e.deleteSubmit;return u.a.createElement(N.a,{isOpen:t,modalLoading:a,closeModal:n},u.a.createElement("section",{className:"section-container delete-container"},u.a.createElement("span",{className:"ion-close-round ReactModal__delete__close",onClick:n}),u.a.createElement("div",{className:"ReactModal__delete__title"},u.a.createElement("span",null,"Are you sure you want to delete ")," ",u.a.createElement("br",null),u.a.createElement("span",null,o.id," - ",u.a.createElement("b",null,o.name),"?")),a?u.a.createElement("div",{className:"ReactModal__delete__is-loading"},u.a.createElement(h.a,null)):u.a.createElement("footer",{className:"ReactModal__delete__buttons"},u.a.createElement(E.a,{outline:!0,color:"secondary",onClick:n},"Cancel"),u.a.createElement(E.a,{outline:!0,color:"danger",onClick:l},"Delete"))))},I=a(419),S=a(57),L=a(58),_=a.n(L),j=function(e){var t=JSON.parse(localStorage.getItem("ph-admin-user-data")).id,a=e.pageSize,n=e.page,o=e.filtered,l=e.sorted,r={where:{},limit:a,skip:n*a,order:"id DESC"};return o.forEach(function(e){"id"===e.id?r.where[e.id]=e.value:r.where[e.id]={like:"%"+e.value+"%"}}),l.forEach(function(e){var t=e.desc?"DESC":"ASC";r.order="".concat(e.id," ").concat(t)}),_.a.get("".concat(S.a,"/").concat(S.b,"/companies"),{params:{filter:r},headers:{Authorization:t}})},M=function(e){var t=JSON.parse(localStorage.getItem("ph-admin-user-data")).id,a=e.filtered,n={};return a.forEach(function(e){"id"===e.id?n[e.id]=e.value:n[e.id]={like:"%"+e.value+"%"}}),_.a.get("".concat(S.a,"/").concat(S.b,"/companies/count"),{params:{where:n},headers:{Authorization:t}})},k=function(e,t,a,n,o,l){var r=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return _.a.post("".concat(S.a,"/").concat(S.b,"/companies"),{name:e,domain:t,slug:a,weight:n,logo:o,cover:l},{headers:{Authorization:r}})},w=function(e,t,a,n,o,l){var r=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return _.a.patch("".concat(S.a,"/").concat(S.b,"/companies/").concat(e),{name:t,domain:a,slug:n,logo:o,cover:l},{headers:{Authorization:r}})},x=function(e){var t=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return _.a.delete("".concat(S.a,"/").concat(S.b,"/companies/").concat(e),{headers:{Authorization:t}})},U=function(e){var t=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return _.a.post("".concat(S.a,"/").concat(S.b,"/vacancies/logo"),e,{headers:{Authorization:t}})},R=function(e){var t=JSON.parse(localStorage.getItem("ph-admin-user-data")).id;return _.a.post("".concat(S.a,"/").concat(S.b,"/vacancies/cover"),e,{headers:{Authorization:t}})},T=a(475),F=a(542),D=a.n(F),B=[{Header:"Id",accessor:"id",width:60,style:{textAlign:"right"},Cell:function(e){var t=e.original;return u.a.createElement("div",null,t.id||"")},Filter:function(e){var t=e.filter,a=e.onChange;return Object(T.a)(t,a)}},{Header:"Company name",accessor:"name",style:{fontWeight:"bold"},Cell:function(e){var t=e.original;return u.a.createElement("div",null,u.a.createElement("img",{src:t.logo||D.a,width:20,height:20,style:{objectFit:"cover"}}),"\xa0\xa0",u.a.createElement("span",null,t.name||""))},Filter:function(e){var t=e.filter,a=e.onChange;return Object(T.a)(t,a)}},{Header:"Domain",accessor:"domain",Cell:function(e){var t=e.original;return t.domain?u.a.createElement("a",{href:"http://".concat(t.domain),target:"_blank",rel:"noopener noreferrer"},t.domain):""},Filter:function(e){var t=e.filter,a=e.onChange;return Object(T.a)(t,a)}},{Header:"Slug",accessor:"slug",Cell:function(e){var t=e.original;return u.a.createElement("div",null,t.slug||"")},Filter:function(e){var t=e.filter,a=e.onChange;return Object(T.a)(t,a)}}],Q=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).fileInputLogo=u.a.createRef(),a.fileInputCover=u.a.createRef(),a.state={companies:[],companiesCount:null,tableLoading:!1,original:{},count:null,alertIsOpen:!1,alertType:"",alertErrorText:"",errorAlertIsOpen:!1,addModalIsOpen:!1,editModalIsOpen:!1,deleteModalIsOpen:!1,modalLoading:!1,id:null,name:"",slug:"",domain:"",weight:null,logo:"",logoLoading:!1,cover:"",coverLoading:!1},a.onChange=function(e){return a.setState(Object(o.a)({},e.target.name,e.target.value))},a.catchErrors=function(e){401===e.response.status?(localStorage.removeItem("ph-admin-user-data"),a.props.history.push("/login")):a.setState({errorAlertIsOpen:!0,modalLoading:!1,logoLoading:!1,coverLoading:!1,alertType:"error",alertIsOpen:!0,alertErrorText:"".concat(e,", ").concat(e.response.data.error.sqlMessage)})},a.onUploadLogo=function(e){e.preventDefault(),a.setState({logoLoading:!0});var t=new FormData,n=a.fileInputLogo.current.files[0];t.append("file",n),U(t).then(function(e){a.setState({logo:"".concat(S.a,"/").concat(S.b,"/containers/logo/download/").concat(e.data.name),logoLoading:!1})}).catch(function(e){return a.catchErrors(e)})},a.onUploadCover=function(e){e.preventDefault(),a.setState({coverLoading:!0});var t=new FormData,n=a.fileInputCover.current.files[0];t.append("file",n),R(t).then(function(e){a.setState({cover:"".concat(S.a,"/").concat(S.b,"/containers/cover/download/").concat(e.data.name),coverLoading:!1})}).catch(function(e){return a.catchErrors(e)})},a.addClick=function(){a.setState({addModalIsOpen:!0,alertIsOpen:!1,name:"",domain:"",slug:"",weight:null,logo:"",cover:"",logoLoading:!1,coverLoading:!1})},a.addSubmit=function(e){e.preventDefault(),a.setState({modalLoading:!0,errorAlertIsOpen:!1});var t=a.state,n=t.name,o=t.domain,l=t.slug,r=t.weight,i=t.logo,c=t.cover,s=t.companies;k(n,o,l,r,i,c).then(function(e){var t=[e.data].concat(s);a.setState({modalLoading:!1,addModalIsOpen:!1,alertType:"add",alertIsOpen:!0,companies:t}),setTimeout(function(){a.setState({alertIsOpen:!1})},2e3)}).catch(function(e){return a.catchErrors(e)})},a.editClick=function(e){return function(t){t.stopPropagation(),a.setState({original:e,alertIsOpen:!1,editModalIsOpen:!0,logoLoading:!1,coverLoading:!1,id:e.id,name:e.name,domain:e.domain,slug:e.slug,logo:e.logo,cover:e.cover})}},a.editSubmit=function(e){e.preventDefault(),a.setState({modalLoading:!0,errorAlertIsOpen:!1});var t=a.state,n=t.id,o=t.name,l=t.domain,r=t.slug,i=t.logo,c=t.cover;w(n,o,l,r,i,c).then(function(){for(var e=a.state.companies,t=0;t<e.length;t++)e[t].id===n&&(e[t]={id:n,name:o,domain:l,slug:r,logo:i,cover:c});a.setState({companies:e,modalLoading:!1,editModalIsOpen:!1,alertType:"edit",alertIsOpen:!0}),setTimeout(function(){a.setState({alertIsOpen:!1})},2e3)}).catch(function(e){return a.catchErrors(e)})},a.deleteClick=function(e){return function(t){t.stopPropagation(),a.setState({original:e,deleteModalIsOpen:!0,alertIsOpen:!1})}},a.deleteSubmit=function(){var e=[],t=a.state,n=t.companies,o=t.original.id;a.setState({modalLoading:!0,errorAlertIsOpen:!1}),x(o).then(function(){for(var t=0;t<n.length;t++)n[t].id!==o&&e.push(n[t]);a.setState({companies:e,editModalIsOpen:!1,deleteModalIsOpen:!1,modalLoading:!1,alertType:"delete",alertIsOpen:!0}),setTimeout(function(){a.setState({alertIsOpen:!1})},2e3)}).catch(function(e){return a.catchErrors(e)})},a.deleteLogo=function(){return a.setState({logo:""})},a.deleteCover=function(){return a.setState({cover:""})},a.closeAddModal=function(){return!a.state.modalLoading&&a.setState({addModalIsOpen:!1})},a.closeEditModal=function(){return!a.state.modalLoading&&a.setState({editModalIsOpen:!1})},a.closeDeleteModal=function(){return!a.state.modalLoading&&a.setState({deleteModalIsOpen:!1})},a.closeErrorAlert=function(){return a.setState({errorAlertIsOpen:!1})},a.generateSlug=function(){var e=a.state.name;a.setState({slug:p()(e,{replacement:"-",lower:!0})})},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){this.props.setHeaderTitle("Companies")}},{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keyup",function(t){return 27===t.keyCode&&e.closeEditModal()})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",function(e){return 27===e.keyCode})}},{key:"render",value:function(){var e,t=this,a=this.state,l=a.tableLoading,r=a.original,i=a.companies,c=a.companiesCount,s=a.name,d=a.domain,m=a.slug,p=a.weight,A=a.logo,h=a.cover,E=a.logoLoading,C=a.coverLoading,N=a.addModalIsOpen,I=a.editModalIsOpen,S=a.modalLoading,L=a.deleteModalIsOpen,_=a.alertIsOpen,k=a.alertType,w=a.alertErrorText,x=a.errorAlertIsOpen,U=[{Header:"",width:65,sortable:!1,filterable:!1,Cell:function(e){var a=e.original;return u.a.createElement("div",{className:"rt-custom__controls"},u.a.createElement("i",{className:"ion-android-delete",onClick:t.deleteClick(a)}),u.a.createElement("i",{className:"ion-edit",onClick:t.editClick(a)}))}}];return u.a.createElement("div",{className:"companies-page"},u.a.createElement("p",{className:"md-lg"},"Total records:\xa0",u.a.createElement("b",null,(this.state.count||"").toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),_&&u.a.createElement(f.a,{type:k,original:r,errorText:w,errorAlertIsOpen:x,closeErrorAlert:this.closeErrorAlert}),u.a.createElement(v.a,{text:"company",loading:S,addClick:this.addClick}),u.a.createElement(y,{isOpen:L,modalLoading:S,closeModal:this.closeDeleteModal,original:r,deleteSubmit:this.deleteSubmit}),u.a.createElement(b,(e={name:s,domain:d,slug:m,weight:p,logo:A,cover:h},Object(o.a)(e,"logo",A),Object(o.a)(e,"logoLoading",E),Object(o.a)(e,"fileInputLogo",this.fileInputLogo),Object(o.a)(e,"onUploadLogo",this.onUploadLogo),Object(o.a)(e,"cover",h),Object(o.a)(e,"coverLoading",C),Object(o.a)(e,"fileInputCover",this.fileInputCover),Object(o.a)(e,"onUploadCover",this.onUploadCover),Object(o.a)(e,"isOpen",N),Object(o.a)(e,"modalLoading",S),Object(o.a)(e,"closeModal",this.closeAddModal),Object(o.a)(e,"onChange",this.onChange),Object(o.a)(e,"onSubmit",this.addSubmit),Object(o.a)(e,"deleteLogo",this.deleteLogo),Object(o.a)(e,"deleteCover",this.deleteCover),Object(o.a)(e,"generateSlug",this.generateSlug),e)),u.a.createElement(O,{original:r,name:s,domain:d,slug:m,logo:A,logoLoading:E,fileInputLogo:this.fileInputLogo,onUploadLogo:this.onUploadLogo,cover:h,coverLoading:C,fileInputCover:this.fileInputCover,onUploadCover:this.onUploadCover,isOpen:I,modalLoading:S,closeModal:this.closeEditModal,onChange:this.onChange,onSubmit:this.editSubmit,deleteClick:this.deleteClick(r),deleteLogo:this.deleteLogo,deleteCover:this.deleteCover,generateSlug:this.generateSlug}),u.a.createElement(g.a,{manual:!0,data:i,pages:c,loading:l,columns:[].concat(Object(n.a)(B),U),getTdProps:function(e,a,n,o){return{onClick:function(e){if(void 0!==a){var n=a.original;return t.editClick(n)(e)}return null}}},onFetchData:function(e){t.setState({tableLoading:!0}),M(e).then(function(a){t.setState({count:a.data.count,companiesCount:Math.ceil(a.data.count/e.pageSize)}),j(e).then(function(e){return t.setState({companies:e.data,tableLoading:!1})}).catch(function(e){return t.catchErrors(e)})}).catch(function(e){return t.catchErrors(e)})}}))}}]),t}(u.a.Component);t.default=Object(I.a)(Q)}}]);
//# sourceMappingURL=3.6451bba9.chunk.js.map