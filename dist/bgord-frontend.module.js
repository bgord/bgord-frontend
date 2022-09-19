import n,{useRef as e,useEffect as t,useState as r,useLayoutEffect as o}from"react";import i from"tinykeys";function u(){return u=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},u.apply(this,arguments)}function a(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)e.indexOf(t=i[r])>=0||(o[t]=n[t]);return o}function c(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function l(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(t)return(t=t.call(n)).next.bind(t);if(Array.isArray(n)||(t=function(n,e){if(n){if("string"==typeof n)return c(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(n,e):void 0}}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0;return function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(n,r){var o=e(r);return t(function(){o.current=n}),o.current}var s,d,v,m=["children"];function h(e){var t,r=null!=(t=e.duration)?t:300,o=n.useState(function(){return e.visible?e.isInitial?s.appeared:s.appearing:s.hidden}),i=o[0],a=o[1],c=f(i);return n.useEffect(function(){if(!e.isInitial)if(e.visible)a(s.appearing),setTimeout(function(){return a(s.appeared)},100);else{if(!c)return;a(s.hidding),setTimeout(function(){return a(s.hidden)},r)}},[e.visible]),i===s.hidden?null:n.cloneElement(e.children,{"data-anima":i,"data-anima-effect":e.effect,style:u({"--duration":r+"ms"},e.children.props.style)})}function p(n){return{"data-anima":n["data-anima"],"data-anima-effect":n["data-anima-effect"],style:n.style}}function g(e){var t=a(e,m),r=n.useState(!0),o=r[0],i=r[1];return n.useEffect(function(){return i(!1)},[]),n.createElement("ul",u({},t),e.children.map(function(e){return n.cloneElement(e,{isInitial:o})}))}function w(e,t){for(var r,o,i=null!=(r=null==t?void 0:t.direction)?r:"head",a=n.useState(e.map(function(n){return{item:n,props:{visible:!0}}})),c=a[0],f=a[1],s=[],d=function(){var n=o.value;!c.map(function(n){return n.item}).some(function(e){return n.id===e.id})&&s.push(n)},v=l(e);!(o=v()).done;)d();n.useEffect(function(){0!==s.length&&(f("head"===i?function(n){return[].concat(s.map(function(n){return{item:n,props:{visible:!0}}}),n)}:function(n){return[].concat(n,s.map(function(n){return{item:n,props:{visible:!0}}}))}),s=[])},[s.length,i]);for(var m,h=[],p=function(){var n=m.value.item;e.every(function(e){return e.id!==n.id})&&h.push(n)},g=l(c);!(m=g()).done;)p();return n.useEffect(function(){0!==h.length&&(f(function(n){return n.map(function(n){return h.some(function(e){return e.id===n.item.id})?u({},n,{props:{visible:!1}}):n})}),h=[])},[h.length]),{items:c.map(function(n){var t=e.find(function(e){return e.id===n.item.id});return t?u({},n,{item:t}):n}),count:c.filter(function(n){return n.props.visible}).length}}function y(e){n.useEffect(function(){var n;e.condition&&(null==(n=e.ref.current)||n.focus())},[e.condition])}function b(){if("undefined"!=typeof window)return window}function E(){var n=r({width:void 0,height:void 0}),e=n[0],o=n[1];return t(function(){var n=b();if(n)return n.addEventListener("resize",e),e(),function(){return n.removeEventListener("resize",e)};function e(){o({width:null==n?void 0:n.innerWidth,height:null==n?void 0:n.innerHeight})}},[]),e}function S(n){var e,t=E();return(null!=(e=null==t?void 0:t.width)?e:0)<=n}function x(e,t,r){n.useEffect(function(){if(e.current)return document.addEventListener("mousedown",n),function(){return document.removeEventListener("mousedown",n)};function n(n){var o;null!=(o=e.current)&&o.contains(n.target)||(null==r?void 0:r.some(function(e){var t;return null==(t=e.current)?void 0:t.contains(n.target)}))||t()}},[t,e,r])}function L(){var n=r(""),e=n[0],t=n[1];return{query:e,clear:function(){t("")},onChange:function(n){t(n.currentTarget.value)},filterFn:function(n){return""===e||(null==n?void 0:n.toLowerCase().includes(e.toLowerCase()))}}}function P(e){n.useEffect(function(){document.title=e},[e])}function F(n){var e=n.length-n.max,o=n.length>n.max;function i(){return o?d.contracted:d.expanded}var u=r(i),a=u[0],c=u[1];return t(function(){return c(i())},[n.length,n.max]),{state:a,displayShowMore:a===d.contracted,displayShowLess:a===d.expanded&&o,showMore:function(){a===d.contracted&&c(d.expanded)},showLess:function(){a===d.expanded&&c(d.contracted)},numberOfExcessiveElements:e,filterFn:function(e,t){return a===d.expanded||t<n.max}}}function j(n){var e=r(n),o=e[0],i=e[1],u="function"==typeof n?n():n;return t(function(){i(u)},[u]),{value:o,set:i,clear:function(){i(n)}}}function O(n){var e,t=null!=(e=null==n?void 0:n.maxSize)?e:Infinity,o=r(v.idle),i=o[0],u=o[1],a=r(null),c=a[0],l=a[1];function f(n){var e=n.currentTarget.files;if(e&&e[0]){var r=e[0];if(r.size>t)return u(v.error);l(r),u(v.selected)}}function s(){l(null),u(v.idle)}return i===v.idle?{state:i,data:null,actions:{selectFile:f,clearFile:s}}:i===v.selected?{state:i,data:c,actions:{selectFile:f,clearFile:s,previewFile:function(){if(c)return URL.createObjectURL(c)}}}:{state:i,data:null,actions:{selectFile:f,clearFile:s}}}function C(){}function T(n){var e,o,i,u=null!=(e=n.defaultQuery)?e:void 0,a=null!=(o=n.filterFn)?o:function(n){return void 0===d||d===String(n)},c=Object.keys(n.enum),l=null!=(i=null==n?void 0:n.onUpdate)?i:C,s=r(u),d=s[0],v=s[1],m=f(d);return t(function(){l(d,m)},[m,d]),{query:d,clear:function(){v(u)},onChange:function(e){var t=e.currentTarget.value,r=Boolean(n.enum[String(t)]);v(r?t:void 0)},filterFn:a,options:c,onUpdate:l}}function A(n){void 0===n&&(n=!1);var e=r(n),t=e[0],o=e[1];return{on:t,off:!t,enable:function(){return o(!0)},disable:function(){return o(!1)},toggle:function(){return o(function(n){return!n})}}}!function(n){n.appearing="appearing",n.appeared="appeared",n.hidding="hidding",n.hidden="hidden"}(s||(s={})),function(n){n.contracted="contracted",n.expanded="expanded"}(d||(d={})),function(n){n.idle="idle",n.selected="selected",n.error="error"}(v||(v={}));var M=function(){var e=A("undefined"==typeof navigator||"boolean"!=typeof navigator.onLine||navigator.onLine);return n.useEffect(function(){function n(){e.enable()}function t(){e.disable()}return window.addEventListener("online",n),window.addEventListener("offline",t),function(){window.removeEventListener("online",n),window.removeEventListener("offline",t)}},[]),e.on};function U(e){n.useEffect(function(){var n=i(window,e);return function(){return n()}},[e])}function k(e){void 0===e&&(e=!1),n.useEffect(function(){if(e)return window.addEventListener("beforeunload",n),function(){return window.removeEventListener("beforeunload",n)};function n(n){n.preventDefault()}},[e])}function I(n){var e,t,o=null!=(e=null==n?void 0:n.defaultItems)?e:[],i=null!=(t=null==n?void 0:n.comparisonFn)?t:function(n,e){return n===e},u=r(o),a=u[0],c=u[1];function l(n){c(function(e){return Array.isArray(n)?[].concat(e,n):[].concat(e,[n])})}function f(n){c(function(e){return e.filter(function(e){return!i(e,n)})})}function s(n){return a.some(function(e){return i(e,n)})}return[a,{clear:function(){c([])},add:l,remove:f,toggle:function(n){s(n)?f(n):l(n)},isAdded:s,update:c}]}function z(n){void 0===n&&(n=!0),o(function(){if(n){var e=document.querySelector("html"),t=document.body,r=window.getComputedStyle(t).overflow,o=window.getComputedStyle(e).overflow;return t.style.overflow="hidden",e.style.overflow="hidden",function(){t.style.overflow=r,e.style.overflow=o}}},[n])}function R(n){var e=b();return new URLSearchParams(null==e?void 0:e.location.search).get(n.label),T(u({onUpdate:function(t,r){if(e){var o=new URL(e.location.toString()),i=new URLSearchParams(o.search);void 0===t?i.delete(n.label):i.set(n.label,t),t!==r&&t!==r&&(o.search=i.toString(),history.pushState({},"",o.toString()))}}},n,{defaultQuery:n.defaultQuery}))}var D=["DialogOverlay","disable","enable","on","off","toggle"];function q(e){var t=e.DialogOverlay,r=e.disable,o=a(e,D),i=n.useRef(null);return U({Escape:r}),x(i,r),y({ref:i,condition:e.on}),z(e.on),e.off?null:n.createElement(n.Fragment,null,null!=t?t:n.createElement(H,null),n.createElement("dialog",u({ref:i,tabIndex:0,open:e.on,"data-display":"flex","data-direction":"column","data-position":"absolute","data-z":"2","data-bg":"white","data-br":"4","data-bc":"gray-300","data-bw":"1","data-p":"24","data-mx":"auto"},o)))}function H(e){return n.createElement("div",u({"data-position":"absolute","data-inset":"0","data-display":"flex","data-main":"cross","data-cross":"center","data-z":"2",style:{background:"rgb(0, 0, 0, 0.75)"}},e))}function N(e){return M()?null:n.createElement(n.Fragment,null,e.children)}var Q=["as"];function _(e){var t=e.as,r=a(e,Q);return n.createElement(t||"a",u({target:"_blank",rel:"noreferer noopener"},r))}var B=function(n){try{var e,t,r=null!=(e=n.onFailure)?e:W,o=null!=(t=n.onSuccess)?t:C;navigator.clipboard||r();var i=function(e,t){try{var r=Promise.resolve(navigator.clipboard.writeText(n.text)).then(function(){o()})}catch(n){return t(n)}return r&&r.then?r.then(void 0,t):r}(0,function(n){r(n)});return Promise.resolve(i&&i.then?i.then(function(){}):void 0)}catch(n){return Promise.reject(n)}},W=function(n){return console.warn("Copying to clipboard not supported")},$=/*#__PURE__*/function(){function n(){}return n.datetime=function(n,e){return void 0===e&&(e="N/A"),n?new Date(n).toLocaleString():e},n}(),G=/*#__PURE__*/function(){function n(n,e){this.value=void 0;var t=new URLSearchParams(this.getNonEmptyFilters(e));this.value=""!==t.toString()?n+"?"+t.toString():n}return n.prototype.getNonEmptyFilters=function(n){return void 0===n?{}:Object.fromEntries(Object.entries(n).filter(function(n){return void 0!==n[1]}))},n}(),J=function(n){try{if(!n)return Promise.resolve(K);var e=document.createElement("img"),t=new Promise(function(n,t){e.onload=function(){return n({width:e.width,height:e.height})},e.onerror=t});return e.src=n,Promise.resolve(t)}catch(n){return Promise.reject(n)}},K={width:null,height:null},V=/*#__PURE__*/function(){function n(){}return n.extract=function(n){var e,t,r;return null!=(e=null==(t=n.data)||null==(r=t.pages)?void 0:r.flat().map(function(n){return n.result}).flat())?e:[]},n}();function X(n){var e;if("en"!==n.language)return console.warn("[@bgord/frontend] missing pluralization fuction for language "+n.language+"."),n.singular;var t=null!=(e=n.plural)?e:n.singular+"s";return 1===n.value?n.singular:t}V.empty={result:[],meta:{exhausted:!0}};var Y=/*#__PURE__*/function(){function n(n){this.message=void 0,this._known=!0,this.message=n.message}return n.isServerError=function(n){return!!(n&&"object"==typeof n&&n===Object(n)&&n.hasOwnProperty("_known")&&n.hasOwnProperty("message"))},n.extract=function(e){try{return e.ok?Promise.resolve(e):Promise.resolve(e.json()).then(function(e){var t=n.isServerError(e)?e.message:"app.error.general";throw new n({message:t})})}catch(n){return Promise.reject(n)}},n.handle=function(e){try{throw new n({message:n.isServerError(e)?e.message:"app.error.general"})}catch(n){return Promise.reject(n)}},n}(),Z=/*#__PURE__*/function(){function n(n){this.value=void 0,this.value=n}var e=n.prototype;return e.toHours=function(){return 24*this.value},e.toMinutes=function(){return 24*this.value*60},e.toSeconds=function(){return 24*this.value*60*60},e.toMs=function(){return 24*this.value*60*60*1e3},n}(),nn=/*#__PURE__*/function(){function n(n){this.value=void 0,this.value=n}var e=n.prototype;return e.toMinutes=function(){return 60*this.value},e.toSeconds=function(){return 60*this.value*60},e.toMs=function(){return 60*this.value*60*1e3},n}(),en=/*#__PURE__*/function(){function n(n){this.value=void 0,this.value=n}var e=n.prototype;return e.toSeconds=function(){return 60*this.value},e.toMs=function(){return 60*this.value*1e3},n}(),tn=/*#__PURE__*/function(){function n(n){this.value=void 0,this.value=n}return n.prototype.toMs=function(){return 1e3*this.value},n}(),rn={Days:Z,Hours:nn,Minutes:en,Seconds:tn},on=n.createContext(void 0);function un(e){var t,r,o,i,a=(r=null!=(t=null==e?void 0:e.timeout)?t:5e3,o=I({comparisonFn:function(n,e){return n.id===e.id}}),i=o[1],[[].concat(o[0]).reverse(),{add:function(n){var e=u({},n,{id:String(Date.now())});i.add(e),setTimeout(function(){return i.remove(e)},r)},remove:i.remove,clear:i.clear}]);return n.createElement(on.Provider,{value:[a[0],a[1]]},e.children)}function an(){var e=n.useContext(on);if(void 0===e)throw new Error("useToasts must be used within the ToastsContextProvider");return e}function cn(){return an()[1].add}var ln=n.createContext({translations:{},language:"en"});function fn(e){return n.createElement(ln.Provider,{value:e.value},e.children)}function sn(){var e=n.useContext(ln);if(void 0===e)throw new Error("useTranslations must be used within the TranslationsContext");return function(n){var t=e.translations[n];return t||console.warn("[@bgord/frontend] missing translation for key "+n+"."),null!=t?t:n}}function dn(){var e=n.useContext(ln);if(void 0===e)throw new Error("useLanguage must be used within the TranslationsContext");return e.language}function vn(){var n=dn();return function(e){return X(u({},e,{language:n}))}}export{h as Anima,g as AnimaList,s as AnimaState,$ as DateFormatter,Z as Days,H as DefaultDialogOverlay,q as Dialog,G as FilterUrl,nn as Hours,en as Minutes,N as OfflineIndicator,_ as OutboundLink,V as Pagination,tn as Seconds,Y as ServerError,rn as Time,un as ToastsContextProvider,fn as TranslationsContextProvider,d as UseExpandableListState,v as UseFileState,B as copyToClipboard,p as getAnimaProps,J as getImageResolution,b as getSafeWindow,C as noop,X as pluralize,w as useAnimaList,y as useAutofocus,S as useBreakpoint,x as useClickOutside,L as useClientSearch,P as useDocumentTitle,F as useExpandableList,j as useField,O as useFile,T as useFilter,M as useIsOnline,U as useKeyboardShortcurts,dn as useLanguage,k as useLeavingPrompt,I as useList,vn as usePluralize,f as usePreviousValue,z as useScrollLock,cn as useToastTrigger,an as useToastsContext,A as useToggle,sn as useTranslations,R as useUrlFilter,E as useWindowDimensions};
//# sourceMappingURL=bgord-frontend.module.js.map
