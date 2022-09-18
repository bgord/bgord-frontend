var e=require("react"),t=require("tinykeys");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=/*#__PURE__*/n(e),o=/*#__PURE__*/n(t);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(o[n]=e[n]);return o}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t,n){var r=e.useRef(n);return e.useEffect(function(){r.current=t}),r.current}var c,f,d,p=["children"];function v(e){r.default.useEffect(function(){var t;e.condition&&(null==(t=e.ref.current)||t.focus())},[e.condition])}function m(){if("undefined"!=typeof window)return window}function x(){var t=e.useState({width:void 0,height:void 0}),n=t[0],r=t[1];return e.useEffect(function(){var e=m();if(e)return e.addEventListener("resize",t),t(),function(){return e.removeEventListener("resize",t)};function t(){r({width:null==e?void 0:e.innerWidth,height:null==e?void 0:e.innerHeight})}},[]),n}function h(e,t,n){r.default.useEffect(function(){if(e.current)return document.addEventListener("mousedown",r),function(){return document.removeEventListener("mousedown",r)};function r(r){var o;null!=(o=e.current)&&o.contains(r.target)||(null==n?void 0:n.some(function(e){var t;return null==(t=e.current)?void 0:t.contains(r.target)}))||t()}},[t,e,n])}function g(){}function S(t){var n,r,o,i=null!=(n=t.defaultQuery)?n:void 0,a=null!=(r=t.filterFn)?r:function(e){return void 0===f||f===String(e)},u=Object.keys(t.enum),s=null!=(o=null==t?void 0:t.onUpdate)?o:g,c=e.useState(i),f=c[0],d=c[1],p=l(f);return e.useEffect(function(){s(f,p)},[p,f]),{query:f,clear:function(){d(i)},onChange:function(e){var n=e.currentTarget.value,r=Boolean(t.enum[String(n)]);d(r?n:void 0)},filterFn:a,options:u,onUpdate:s}}function y(t){void 0===t&&(t=!1);var n=e.useState(t),r=n[0],o=n[1];return{on:r,off:!r,enable:function(){return o(!0)},disable:function(){return o(!1)},toggle:function(){return o(function(e){return!e})}}}exports.AnimaState=void 0,(c=exports.AnimaState||(exports.AnimaState={})).appearing="appearing",c.appeared="appeared",c.hidding="hidding",c.hidden="hidden",exports.UseExpandableListState=void 0,(f=exports.UseExpandableListState||(exports.UseExpandableListState={})).contracted="contracted",f.expanded="expanded",exports.UseFileState=void 0,(d=exports.UseFileState||(exports.UseFileState={})).idle="idle",d.selected="selected",d.error="error";var b=function(){var e=y("undefined"==typeof navigator||"boolean"!=typeof navigator.onLine||navigator.onLine);return r.default.useEffect(function(){function t(){e.enable()}function n(){e.disable()}return window.addEventListener("online",t),window.addEventListener("offline",n),function(){window.removeEventListener("online",t),window.removeEventListener("offline",n)}},[]),e.on};function w(e){r.default.useEffect(function(){var t=o.default(window,e);return function(){return t()}},[e])}function E(t){var n,r,o=null!=(n=null==t?void 0:t.defaultItems)?n:[],i=null!=(r=null==t?void 0:t.comparisonFn)?r:function(e,t){return e===t},a=e.useState(o),u=a[0],s=a[1];function l(e){s(function(t){return Array.isArray(e)?[].concat(t,e):[].concat(t,[e])})}function c(e){s(function(t){return t.filter(function(t){return!i(t,e)})})}function f(e){return u.some(function(t){return i(t,e)})}return[u,{clear:function(){s([])},add:l,remove:c,toggle:function(e){f(e)?c(e):l(e)},isAdded:f,update:s}]}function L(t){void 0===t&&(t=!0),e.useLayoutEffect(function(){if(t){var e=document.querySelector("html"),n=document.body,r=window.getComputedStyle(n).overflow,o=window.getComputedStyle(e).overflow;return n.style.overflow="hidden",e.style.overflow="hidden",function(){n.style.overflow=r,e.style.overflow=o}}},[t])}var U=["DialogOverlay","disable","enable","on","off","toggle"];function F(e){return r.default.createElement("div",i({"data-position":"absolute","data-inset":"0","data-display":"flex","data-main":"cross","data-cross":"center","data-z":"2",style:{background:"rgb(0, 0, 0, 0.75)"}},e))}var A=["as"],P=function(e){return console.warn("Copying to clipboard not supported")},T=/*#__PURE__*/function(){function e(){}return e.datetime=function(e,t){return void 0===t&&(t="N/A"),e?new Date(e).toLocaleString():t},e}(),C=/*#__PURE__*/function(){function e(e,t){this.value=void 0;var n=new URLSearchParams(this.getNonEmptyFilters(t));this.value=""!==n.toString()?e+"?"+n.toString():e}return e.prototype.getNonEmptyFilters=function(e){return void 0===e?{}:Object.fromEntries(Object.entries(e).filter(function(e){return void 0!==e[1]}))},e}(),O=/*#__PURE__*/function(){function e(){}return e.extract=function(e){var t,n,r;return null!=(t=null==(n=e.data)||null==(r=n.pages)?void 0:r.flat().map(function(e){return e.result}).flat())?t:[]},e}();function j(e){var t;if("en"!==e.language)return console.warn("[@bgord/frontend] missing pluralization fuction for language "+e.language+"."),e.singular;var n=null!=(t=e.plural)?t:e.singular+"s";return 1===e.value?e.singular:n}O.empty={result:[],meta:{exhausted:!0}};var k=/*#__PURE__*/function(){function e(e){this.message=void 0,this._known=!0,this.message=e.message}return e.isServerError=function(e){return!!(e&&"object"==typeof e&&e===Object(e)&&e.hasOwnProperty("_known")&&e.hasOwnProperty("message"))},e.extract=function(t){try{return t.ok?Promise.resolve(t):Promise.resolve(t.json()).then(function(t){var n=e.isServerError(t)?t.message:"app.error.general";throw new e({message:n})})}catch(e){return Promise.reject(e)}},e.handle=function(t){try{throw new e({message:e.isServerError(t)?t.message:"app.error.general"})}catch(e){return Promise.reject(e)}},e}(),D=/*#__PURE__*/function(){function e(e){this.value=void 0,this.value=e}var t=e.prototype;return t.toHours=function(){return 24*this.value},t.toMinutes=function(){return 24*this.value*60},t.toSeconds=function(){return 24*this.value*60*60},t.toMs=function(){return 24*this.value*60*60*1e3},e}(),I=/*#__PURE__*/function(){function e(e){this.value=void 0,this.value=e}var t=e.prototype;return t.toMinutes=function(){return 60*this.value},t.toSeconds=function(){return 60*this.value*60},t.toMs=function(){return 60*this.value*60*1e3},e}(),M=/*#__PURE__*/function(){function e(e){this.value=void 0,this.value=e}var t=e.prototype;return t.toSeconds=function(){return 60*this.value},t.toMs=function(){return 60*this.value*1e3},e}(),z=/*#__PURE__*/function(){function e(e){this.value=void 0,this.value=e}return e.prototype.toMs=function(){return 1e3*this.value},e}(),R={Days:D,Hours:I,Minutes:M,Seconds:z},q=r.default.createContext(void 0);function H(){var e=r.default.useContext(q);if(void 0===e)throw new Error("useToasts must be used within the ToastsContextProvider");return e}var N=r.default.createContext({translations:{},language:"en"});function Q(){var e=r.default.useContext(N);if(void 0===e)throw new Error("useLanguage must be used within the TranslationsContext");return e.language}exports.Anima=function(e){var t,n=null!=(t=e.duration)?t:300,o=r.default.useState(function(){return e.visible?e.isInitial?exports.AnimaState.appeared:exports.AnimaState.appearing:exports.AnimaState.hidden}),a=o[0],u=o[1],s=l(a);return r.default.useEffect(function(){if(!e.isInitial)if(e.visible)u(exports.AnimaState.appearing),setTimeout(function(){return u(exports.AnimaState.appeared)},100);else{if(!s)return;u(exports.AnimaState.hidding),setTimeout(function(){return u(exports.AnimaState.hidden)},n)}},[e.visible]),a===exports.AnimaState.hidden?null:r.default.cloneElement(e.children,{"data-anima":a,"data-anima-effect":e.effect,style:i({"--duration":n+"ms"},e.children.props.style)})},exports.AnimaList=function(e){var t=a(e,p),n=r.default.useState(!0),o=n[0],u=n[1];return r.default.useEffect(function(){return u(!1)},[]),r.default.createElement("ul",i({},t),e.children.map(function(e){return r.default.cloneElement(e,{isInitial:o})}))},exports.DateFormatter=T,exports.Days=D,exports.DefaultDialogOverlay=F,exports.Dialog=function(e){var t=e.DialogOverlay,n=e.disable,o=a(e,U),u=r.default.useRef(null);return w({Escape:n}),h(u,n),v({ref:u,condition:e.on}),L(e.on),e.off?null:r.default.createElement(r.default.Fragment,null,null!=t?t:r.default.createElement(F,null),r.default.createElement("dialog",i({ref:u,tabIndex:0,open:e.on,"data-display":"flex","data-direction":"column","data-position":"absolute","data-z":"2","data-bg":"white","data-br":"4","data-bc":"gray-300","data-bw":"1","data-p":"24","data-mx":"auto"},o)))},exports.FilterUrl=C,exports.Hours=I,exports.Minutes=M,exports.OfflineIndicator=function(e){return b()?null:r.default.createElement(r.default.Fragment,null,e.children)},exports.OutboundLink=function(e){var t=e.as,n=a(e,A);return r.default.createElement(t||"a",i({target:"_blank",rel:"noreferer noopener"},n))},exports.Pagination=O,exports.Seconds=z,exports.ServerError=k,exports.Time=R,exports.ToastsContextProvider=function(e){var t,n,o,a,u=(n=null!=(t=null==e?void 0:e.timeout)?t:5e3,o=E({comparisonFn:function(e,t){return e.id===t.id}}),a=o[1],[[].concat(o[0]).reverse(),{add:function(e){var t=i({},e,{id:String(Date.now())});a.add(t),setTimeout(function(){return a.remove(t)},n)},remove:a.remove,clear:a.clear}]);return r.default.createElement(q.Provider,{value:[u[0],u[1]]},e.children)},exports.TranslationsContextProvider=function(e){return r.default.createElement(N.Provider,{value:e.value},e.children)},exports.copyToClipboard=function(e){try{var t,n,r=null!=(t=e.onFailure)?t:P,o=null!=(n=e.onSuccess)?n:g;navigator.clipboard||r();var i=function(t,n){try{var r=Promise.resolve(navigator.clipboard.writeText(e.text)).then(function(){o()})}catch(e){return n(e)}return r&&r.then?r.then(void 0,n):r}(0,function(e){r(e)});return Promise.resolve(i&&i.then?i.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},exports.getAnimaProps=function(e){return{"data-anima":e["data-anima"],"data-anima-effect":e["data-anima-effect"],style:e.style}},exports.getSafeWindow=m,exports.noop=g,exports.pluralize=j,exports.useAnimaList=function(e,t){for(var n,o,a=null!=(n=null==t?void 0:t.direction)?n:"head",u=r.default.useState(e.map(function(e){return{item:e,props:{visible:!0}}})),l=u[0],c=u[1],f=[],d=function(){var e=o.value;!l.map(function(e){return e.item}).some(function(t){return e.id===t.id})&&f.push(e)},p=s(e);!(o=p()).done;)d();r.default.useEffect(function(){0!==f.length&&(c("head"===a?function(e){return[].concat(f.map(function(e){return{item:e,props:{visible:!0}}}),e)}:function(e){return[].concat(e,f.map(function(e){return{item:e,props:{visible:!0}}}))}),f=[])},[f.length,a]);for(var v,m=[],x=function(){var t=v.value.item;e.every(function(e){return e.id!==t.id})&&m.push(t)},h=s(l);!(v=h()).done;)x();return r.default.useEffect(function(){0!==m.length&&(c(function(e){return e.map(function(e){return m.some(function(t){return t.id===e.item.id})?i({},e,{props:{visible:!1}}):e})}),m=[])},[m.length]),{items:l.map(function(t){var n=e.find(function(e){return e.id===t.item.id});return n?i({},t,{item:n}):t}),count:l.filter(function(e){return e.props.visible}).length}},exports.useAutofocus=v,exports.useBreakpoint=function(e){var t,n=x();return(null!=(t=null==n?void 0:n.width)?t:0)<=e},exports.useClickOutside=h,exports.useClientSearch=function(){var t=e.useState(""),n=t[0],r=t[1];return{query:n,clear:function(){r("")},onChange:function(e){r(e.currentTarget.value)},filterFn:function(e){return""===n||(null==e?void 0:e.toLowerCase().includes(n.toLowerCase()))}}},exports.useDocumentTitle=function(e){r.default.useEffect(function(){document.title=e},[e])},exports.useExpandableList=function(t){var n=t.length-t.max,r=t.length>t.max;function o(){return r?exports.UseExpandableListState.contracted:exports.UseExpandableListState.expanded}var i=e.useState(o),a=i[0],u=i[1];return e.useEffect(function(){return u(o())},[t.length,t.max]),{state:a,displayShowMore:a===exports.UseExpandableListState.contracted,displayShowLess:a===exports.UseExpandableListState.expanded&&r,showMore:function(){a===exports.UseExpandableListState.contracted&&u(exports.UseExpandableListState.expanded)},showLess:function(){a===exports.UseExpandableListState.expanded&&u(exports.UseExpandableListState.contracted)},numberOfExcessiveElements:n,filterFn:function(e,n){return a===exports.UseExpandableListState.expanded||n<t.max}}},exports.useField=function(t){var n=e.useState(t),r=n[0],o=n[1],i="function"==typeof t?t():t;return e.useEffect(function(){o(i)},[i]),{value:r,set:o,clear:function(){o(t)}}},exports.useFile=function(t){var n,r=null!=(n=null==t?void 0:t.maxSize)?n:Infinity,o=e.useState(exports.UseFileState.idle),i=o[0],a=o[1],u=e.useState(null),s=u[1],l={selectFile:function(e){var t=e.currentTarget.files;if(t&&t[0]){var n=t[0];if(n.size>r)return a(exports.UseFileState.error);s(n),a(exports.UseFileState.selected)}},clearFile:function(){s(null),a(exports.UseFileState.idle)}};return i===exports.UseFileState.idle?{state:i,data:null,actions:l}:i===exports.UseFileState.selected?{state:i,data:u[0],actions:l}:{state:i,data:null,actions:l}},exports.useFilter=S,exports.useIsOnline=b,exports.useKeyboardShortcurts=w,exports.useLanguage=Q,exports.useLeavingPrompt=function(e){void 0===e&&(e=!1),r.default.useEffect(function(){if(e)return window.addEventListener("beforeunload",t),function(){return window.removeEventListener("beforeunload",t)};function t(e){e.preventDefault()}},[e])},exports.useList=E,exports.usePluralize=function(){var e=Q();return function(t){return j(i({},t,{language:e}))}},exports.usePreviousValue=l,exports.useScrollLock=L,exports.useToastTrigger=function(){return H()[1].add},exports.useToastsContext=H,exports.useToggle=y,exports.useTranslations=function(){var e=r.default.useContext(N);if(void 0===e)throw new Error("useTranslations must be used within the TranslationsContext");return function(t){var n=e.translations[t];return n||console.warn("[@bgord/frontend] missing translation for key "+t+"."),null!=n?n:t}},exports.useUrlFilter=function(e){var t=m();return new URLSearchParams(null==t?void 0:t.location.search).get(e.label),S(i({onUpdate:function(n,r){if(t){var o=new URL(t.location.toString()),i=new URLSearchParams(o.search);void 0===n?i.delete(e.label):i.set(e.label,n),n!==r&&n!==r&&(o.search=i.toString(),history.pushState({},"",o.toString()))}}},e,{defaultQuery:e.defaultQuery}))},exports.useWindowDimensions=x;
//# sourceMappingURL=bgord-frontend.cjs.map
