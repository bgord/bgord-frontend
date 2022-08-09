var e=require("react"),t=require("tinykeys");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=/*#__PURE__*/n(e),o=/*#__PURE__*/n(t);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(o[n]=e[n]);return o}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t,n){var r=e.useRef(n);return e.useEffect(function(){r.current=t}),r.current}var c,f=["children"];exports.AnimaState=void 0,(c=exports.AnimaState||(exports.AnimaState={})).appearing="appearing",c.appeared="appeared",c.hidding="hidding",c.hidden="hidden";var d,p,v=["as"],m=/*#__PURE__*/function(){function e(){}return e.datetime=function(e,t){return void 0===t&&(t="N/A"),e?new Date(e).toLocaleString():t},e}(),x=/*#__PURE__*/function(){function e(e,t){this.value=void 0;var n=new URLSearchParams(this.getNonEmptyFilters(t));this.value=""!==n.toString()?e+"?"+n.toString():e}return e.prototype.getNonEmptyFilters=function(e){return void 0===e?{}:Object.fromEntries(Object.entries(e).filter(function(e){return void 0!==e[1]}))},e}();function h(){if("undefined"!=typeof window)return window}function S(){var t=e.useState({width:void 0,height:void 0}),n=t[0],r=t[1];return e.useEffect(function(){var e=h();if(e)return e.addEventListener("resize",t),t(),function(){return e.removeEventListener("resize",t)};function t(){r({width:null==e?void 0:e.innerWidth,height:null==e?void 0:e.innerHeight})}},[]),n}function g(){}function y(t){var n,r,o,i=null!=(n=t.defaultQuery)?n:void 0,u=null!=(r=t.filterFn)?r:function(e){return void 0===f||f===String(e)},a=Object.keys(t.enum),s=null!=(o=null==t?void 0:t.onUpdate)?o:g,c=e.useState(i),f=c[0],d=c[1],p=l(f);return e.useEffect(function(){s(f,p)},[p,f]),{query:f,clear:function(){d(i)},onChange:function(e){var n=e.currentTarget.value,r=Boolean(t.enum[String(n)]);d(r?n:void 0)},filterFn:u,options:a,onUpdate:s}}function b(t){var n,r,o=null!=(n=null==t?void 0:t.defaultItems)?n:[],i=null!=(r=null==t?void 0:t.comparisonFn)?r:function(e,t){return e===t},u=e.useState(o),a=u[0],s=u[1];function l(e){s(function(t){return Array.isArray(e)?[].concat(t,e):[].concat(t,[e])})}function c(e){s(function(t){return t.filter(function(t){return!i(t,e)})})}function f(e){return a.some(function(t){return i(t,e)})}return[a,{clear:function(){s([])},add:l,remove:c,toggle:function(e){f(e)?c(e):l(e)},isAdded:f,update:s}]}exports.UseExpandableListState=void 0,(d=exports.UseExpandableListState||(exports.UseExpandableListState={})).contracted="contracted",d.expanded="expanded",exports.UseFileState=void 0,(p=exports.UseFileState||(exports.UseFileState={})).idle="idle",p.selected="selected",p.error="error";var w=/*#__PURE__*/function(){function e(e){this.message=void 0,this._known=!0,this.message=e.message}return e.isServerError=function(e){return!!(e&&"object"==typeof e&&e===Object(e)&&e.hasOwnProperty("_known")&&e.hasOwnProperty("message"))},e.extract=function(t){try{return t.ok?Promise.resolve(t):Promise.resolve(t.json()).then(function(t){var n=e.isServerError(t)?t.message:"app.error.general";throw new e({message:n})})}catch(e){return Promise.reject(e)}},e.handle=function(t){try{throw new e({message:e.isServerError(t)?t.message:"app.error.general"})}catch(e){return Promise.reject(e)}},e}(),E=/*#__PURE__*/function(){function e(e){this.value=void 0,this.value=e}var t=e.prototype;return t.toHours=function(){return 24*this.value},t.toMinutes=function(){return 24*this.value*60},t.toSeconds=function(){return 24*this.value*60*60},t.toMs=function(){return 24*this.value*60*60*1e3},e}(),L=/*#__PURE__*/function(){function e(e){this.value=void 0,this.value=e}var t=e.prototype;return t.toMinutes=function(){return 60*this.value},t.toSeconds=function(){return 60*this.value*60},t.toMs=function(){return 60*this.value*60*1e3},e}(),U=/*#__PURE__*/function(){function e(e){this.value=void 0,this.value=e}var t=e.prototype;return t.toSeconds=function(){return 60*this.value},t.toMs=function(){return 60*this.value*1e3},e}(),A=/*#__PURE__*/function(){function e(e){this.value=void 0,this.value=e}return e.prototype.toMs=function(){return 1e3*this.value},e}(),F={Days:E,Hours:L,Minutes:U,Seconds:A},T=r.default.createContext(void 0);function C(){var e=r.default.useContext(T);if(void 0===e)throw new Error("useToasts must be used within the ToastsContextProvider");return e}var P=r.default.createContext({});exports.Anima=function(e){var t,n=null!=(t=e.duration)?t:300,o=r.default.useState(function(){return e.visible?e.isInitial?exports.AnimaState.appeared:exports.AnimaState.appearing:exports.AnimaState.hidden}),u=o[0],a=o[1],s=l(u);return r.default.useEffect(function(){if(!e.isInitial)if(e.visible)a(exports.AnimaState.appearing),setTimeout(function(){return a(exports.AnimaState.appeared)},100);else{if(!s)return;a(exports.AnimaState.hidding),setTimeout(function(){return a(exports.AnimaState.hidden)},n)}},[e.visible]),u===exports.AnimaState.hidden?null:r.default.cloneElement(e.children,{"data-anima":u,"data-anima-effect":e.effect,style:i({"--duration":n+"ms"},e.children.props.style)})},exports.AnimaList=function(e){var t=u(e,f),n=r.default.useState(!0),o=n[0],a=n[1];return r.default.useEffect(function(){return a(!1)},[]),r.default.createElement("ul",i({},t),e.children.map(function(e){return r.default.cloneElement(e,{isInitial:o})}))},exports.DateFormatter=m,exports.Days=E,exports.FilterUrl=x,exports.Hours=L,exports.Minutes=U,exports.OutboundLink=function(e){var t=e.as,n=u(e,v);return r.default.createElement(t||"a",i({target:"_blank",rel:"noreferer noopener"},n))},exports.Seconds=A,exports.ServerError=w,exports.Time=F,exports.ToastsContextProvider=function(e){var t,n,o,u,a=(n=null!=(t=null==e?void 0:e.timeout)?t:5e3,o=b({comparisonFn:function(e,t){return e.id===t.id}}),u=o[1],[[].concat(o[0]).reverse(),{add:function(e){var t=i({},e,{id:String(Date.now())});u.add(t),setTimeout(function(){return u.remove(t)},n)},remove:u.remove,clear:u.clear}]);return r.default.createElement(T.Provider,{value:[a[0],a[1]]},e.children)},exports.TranslationsContextProvider=function(e){return r.default.createElement(P.Provider,{value:e.translations},e.children)},exports.getAnimaProps=function(e){return{"data-anima":e["data-anima"],"data-anima-effect":e["data-anima-effect"],style:e.style}},exports.getSafeWindow=h,exports.noop=g,exports.useAnimaList=function(e,t){for(var n,o,u=null!=(n=null==t?void 0:t.direction)?n:"head",a=r.default.useState(e.map(function(e){return{item:e,props:{visible:!0}}})),l=a[0],c=a[1],f=[],d=function(){var e=o.value;!l.map(function(e){return e.item}).some(function(t){return e.id===t.id})&&f.push(e)},p=s(e);!(o=p()).done;)d();r.default.useEffect(function(){0!==f.length&&(c("head"===u?function(e){return[].concat(f.map(function(e){return{item:e,props:{visible:!0}}}),e)}:function(e){return[].concat(e,f.map(function(e){return{item:e,props:{visible:!0}}}))}),f=[])},[f.length,u]);for(var v,m=[],x=function(){var t=v.value.item;e.every(function(e){return e.id!==t.id})&&m.push(t)},h=s(l);!(v=h()).done;)x();return r.default.useEffect(function(){0!==m.length&&(c(function(e){return e.map(function(e){return m.some(function(t){return t.id===e.item.id})?i({},e,{props:{visible:!1}}):e})}),m=[])},[m.length]),{items:l.map(function(t){var n=e.find(function(e){return e.id===t.item.id});return n?i({},t,{item:n}):t}),count:l.filter(function(e){return e.props.visible}).length}},exports.useAutofocus=function(e){r.default.useEffect(function(){var t;e.condition&&(null==(t=e.ref.current)||t.focus())},[e.condition])},exports.useBreakpoint=function(e){var t,n=S();return(null!=(t=null==n?void 0:n.width)?t:0)<=e},exports.useClickOutside=function(e,t,n){r.default.useEffect(function(){if(e.current)return document.addEventListener("mousedown",r),function(){return document.removeEventListener("mousedown",r)};function r(r){var o;null!=(o=e.current)&&o.contains(r.target)||(null==n?void 0:n.some(function(e){var t;return null==(t=e.current)?void 0:t.contains(r.target)}))||t()}},[t,e,n])},exports.useClientSearch=function(){var t=e.useState(""),n=t[0],r=t[1];return{query:n,clear:function(){r("")},onChange:function(e){r(e.currentTarget.value)},filterFn:function(e){return""===n||(null==e?void 0:e.toLowerCase().includes(n.toLowerCase()))}}},exports.useExpandableList=function(t){var n=t.length-t.max,r=t.length>t.max;function o(){return r?exports.UseExpandableListState.contracted:exports.UseExpandableListState.expanded}var i=e.useState(o),u=i[0],a=i[1];return e.useEffect(function(){return a(o())},[t.length,t.max]),{state:u,displayShowMore:u===exports.UseExpandableListState.contracted,displayShowLess:u===exports.UseExpandableListState.expanded&&r,showMore:function(){u===exports.UseExpandableListState.contracted&&a(exports.UseExpandableListState.expanded)},showLess:function(){u===exports.UseExpandableListState.expanded&&a(exports.UseExpandableListState.contracted)},numberOfExcessiveElements:n,filterFn:function(e,n){return u===exports.UseExpandableListState.expanded||n<t.max}}},exports.useField=function(t){var n=e.useState(t),r=n[0],o=n[1],i="function"==typeof t?t():t;return e.useEffect(function(){o(i)},[i]),{value:r,set:o,clear:function(){o(t)}}},exports.useFile=function(t){var n,r=null!=(n=null==t?void 0:t.maxSize)?n:Infinity,o=e.useState(exports.UseFileState.idle),i=o[0],u=o[1],a=e.useState(null),s=a[1],l={selectFile:function(e){var t=e.currentTarget.files;if(t&&t[0]){var n=t[0];if(n.size>r)return u(exports.UseFileState.error);s(n),u(exports.UseFileState.selected)}},clearFile:function(){s(null),u(exports.UseFileState.idle)}};return i===exports.UseFileState.idle?{state:i,data:null,actions:l}:i===exports.UseFileState.selected?{state:i,data:a[0],actions:l}:{state:i,data:null,actions:l}},exports.useFilter=y,exports.useKeyboardShortcurts=function(e){r.default.useEffect(function(){var t=o.default(window,e);return function(){return t()}},[e])},exports.useList=b,exports.usePreviousValue=l,exports.useScrollLock=function(t){void 0===t&&(t=!0),e.useLayoutEffect(function(){if(t){var e=document.querySelector("html"),n=document.body,r=window.getComputedStyle(n).overflow,o=window.getComputedStyle(e).overflow;return n.style.overflow="hidden",e.style.overflow="hidden",function(){n.style.overflow=r,e.style.overflow=o}}},[t])},exports.useToastTrigger=function(){return C()[1].add},exports.useToastsContext=C,exports.useToggle=function(t){void 0===t&&(t=!1);var n=e.useState(t),r=n[0],o=n[1];return{on:r,off:!r,enable:function(){return o(!0)},disable:function(){return o(!1)},toggle:function(){return o(function(e){return!e})}}},exports.useTranslations=function(){var e=r.default.useContext(P);if(void 0===e)throw new Error("useTranslations must be used within the TranslationsContext");return function(t){var n=e[t];return n||console.warn("[@bgord/frontend] missing translation for key "+t+"."),null!=n?n:t}},exports.useUrlFilter=function(e){var t,n=h(),r=null!=(t=new URLSearchParams(null==n?void 0:n.location.search).get(e.label))?t:void 0;return y(i({onUpdate:function(t,r){if(n){var o=new URL(n.location.toString()),i=new URLSearchParams(o.search);void 0===t?i.delete(e.label):i.set(e.label,t),t!==r&&t!==r&&(o.search=i.toString(),history.pushState({},"",o.toString()))}}},e,{defaultQuery:null!=r?r:e.defaultQuery}))},exports.useWindowDimensions=S;
//# sourceMappingURL=bgord-frontend.cjs.map
