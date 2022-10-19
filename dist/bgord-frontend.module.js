import*as n from"react";import e,{useRef as t,useEffect as r,useState as i,useLayoutEffect as o}from"react";import u from"tinykeys";function a(){return a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},a.apply(this,arguments)}function c(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e.indexOf(t=o[r])>=0||(i[t]=n[t]);return i}function l(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function f(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(t)return(t=t.call(n)).next.bind(t);if(Array.isArray(n)||(t=function(n,e){if(n){if("string"==typeof n)return l(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?l(n,e):void 0}}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0;return function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(n,e){var i=t(e);return r(function(){i.current=n}),i.current}var d,v,m,h=["children"];function p(n){var t,r=null!=(t=n.duration)?t:300,i=e.useState(function(){return n.visible?n.isInitial?d.appeared:d.appearing:d.hidden}),o=i[0],u=i[1],c=s(o);return e.useEffect(function(){if(!n.isInitial)if(n.visible)u(d.appearing),setTimeout(function(){return u(d.appeared)},100);else{if(!c)return;u(d.hidding),setTimeout(function(){return u(d.hidden)},r)}},[n.visible]),o===d.hidden?null:e.cloneElement(n.children,{"data-anima":o,"data-anima-effect":n.effect,style:a({"--duration":r+"ms"},n.children.props.style)})}function g(n){return{"data-anima":n["data-anima"],"data-anima-effect":n["data-anima-effect"],style:n.style}}function w(n){var t=c(n,h),r=e.useState(!0),i=r[0],o=r[1];return e.useEffect(function(){return o(!1)},[]),e.createElement("ul",a({},t),n.children.map(function(n){return e.cloneElement(n,{isInitial:i})}))}function y(n,t){for(var r,i,o=null!=(r=null==t?void 0:t.direction)?r:"head",u=e.useState(n.map(function(n){return{item:n,props:{visible:!0}}})),c=u[0],l=u[1],s=[],d=function(){var n=i.value;!c.map(function(n){return n.item}).some(function(e){return n.id===e.id})&&s.push(n)},v=f(n);!(i=v()).done;)d();e.useEffect(function(){0!==s.length&&(l("head"===o?function(n){return[].concat(s.map(function(n){return{item:n,props:{visible:!0}}}),n)}:function(n){return[].concat(n,s.map(function(n){return{item:n,props:{visible:!0}}}))}),s=[])},[s.length,o]);for(var m,h=[],p=function(){var e=m.value.item;n.every(function(n){return n.id!==e.id})&&h.push(e)},g=f(c);!(m=g()).done;)p();return e.useEffect(function(){0!==h.length&&(l(function(n){return n.map(function(n){return h.some(function(e){return e.id===n.item.id})?a({},n,{props:{visible:!1}}):n})}),h=[])},[h.length]),{items:c.map(function(e){var t=n.find(function(n){return n.id===e.item.id});return t?a({},e,{item:t}):e}),count:c.filter(function(n){return n.props.visible}).length}}function b(n){e.useEffect(function(){var e;n.condition&&(null==(e=n.ref.current)||e.focus())},[n.condition])}function E(){if("undefined"!=typeof window)return window}function S(){var n=i({width:void 0,height:void 0}),e=n[0],t=n[1];return r(function(){var n=E();if(n)return n.addEventListener("resize",e),e(),function(){return n.removeEventListener("resize",e)};function e(){t({width:null==n?void 0:n.innerWidth,height:null==n?void 0:n.innerHeight})}},[]),e}function x(n){var e,t=S();return(null!=(e=null==t?void 0:t.width)?e:0)<=n}function L(n,t,r){e.useEffect(function(){if(n.current)return document.addEventListener("mousedown",e),function(){return document.removeEventListener("mousedown",e)};function e(e){var i;null!=(i=n.current)&&i.contains(e.target)||(null==r?void 0:r.some(function(n){var t;return null==(t=n.current)?void 0:t.contains(e.target)}))||t()}},[t,n,r])}function P(){var n=i(""),e=n[0],t=n[1];return{query:e,clear:function(){t("")},onChange:function(n){t(n.currentTarget.value)},filterFn:function(n){return""===e||(null==n?void 0:n.toLowerCase().includes(e.toLowerCase()))}}}function F(n){e.useEffect(function(){document.title=n},[n])}function j(n){var e=n.length-n.max,t=n.length>n.max;function o(){return t?v.contracted:v.expanded}var u=i(o),a=u[0],c=u[1];return r(function(){return c(o())},[n.length,n.max]),{state:a,displayShowMore:a===v.contracted,displayShowLess:a===v.expanded&&t,showMore:function(){a===v.contracted&&c(v.expanded)},showLess:function(){a===v.expanded&&c(v.contracted)},numberOfExcessiveElements:e,filterFn:function(e,t){return a===v.expanded||t<n.max}}}function O(n){var e="function"==typeof n?n():n,t=i(e),r=t[1];return{value:t[0],set:r,clear:function(){r(e)}}}function C(n){var e,t=null!=(e=null==n?void 0:n.maxSize)?e:Infinity,r=i(m.idle),o=r[0],u=r[1],a=i(null),c=a[0],l=a[1];function f(n){var e=n.currentTarget.files;if(e&&e[0]){var r=e[0];if(!(r.size>t))return l(r),u(m.selected),r;u(m.error)}}function s(){l(null),u(m.idle)}return o===m.idle?{state:o,data:null,actions:{selectFile:f,clearFile:s}}:o===m.selected?{state:o,data:c,actions:{selectFile:f,clearFile:s,previewFile:function(){if(c)return URL.createObjectURL(c)}}}:{state:o,data:null,actions:{selectFile:f,clearFile:s}}}function T(){}function M(n){var e,t,o,u=null!=(e=n.defaultQuery)?e:void 0,a=null!=(t=n.filterFn)?t:function(n){return void 0===d||d===String(n)},c=Object.keys(n.enum),l=null!=(o=null==n?void 0:n.onUpdate)?o:T,f=i(u),d=f[0],v=f[1],m=s(d);return r(function(){l(d,m)},[m,d]),{query:d,clear:function(){v(u)},onChange:function(e){var t=e.currentTarget.value,r=Boolean(n.enum[String(t)]);v(r?t:void 0)},filterFn:a,options:c,onUpdate:l}}function A(n){void 0===n&&(n=!1);var e=i(n),t=e[0],r=e[1];return{on:t,off:!t,enable:function(){return r(!0)},disable:function(){return r(!1)},toggle:function(){return r(function(n){return!n})}}}!function(n){n.appearing="appearing",n.appeared="appeared",n.hidding="hidding",n.hidden="hidden"}(d||(d={})),function(n){n.contracted="contracted",n.expanded="expanded"}(v||(v={})),function(n){n.idle="idle",n.selected="selected",n.error="error"}(m||(m={}));var U=function(){var n=A("undefined"==typeof navigator||"boolean"!=typeof navigator.onLine||navigator.onLine);return e.useEffect(function(){function e(){n.enable()}function t(){n.disable()}return window.addEventListener("online",e),window.addEventListener("offline",t),function(){window.removeEventListener("online",e),window.removeEventListener("offline",t)}},[]),n.on};function k(n){e.useEffect(function(){var e=u(window,n);return function(){return e()}},[n])}function I(n){void 0===n&&(n=!1),e.useEffect(function(){if(n)return window.addEventListener("beforeunload",e),function(){return window.removeEventListener("beforeunload",e)};function e(n){n.preventDefault()}},[n])}function D(n){var e,t,r=null!=(e=null==n?void 0:n.defaultItems)?e:[],o=null!=(t=null==n?void 0:n.comparisonFn)?t:function(n,e){return n===e},u=i(r),a=u[0],c=u[1];function l(n){c(function(e){return Array.isArray(n)?[].concat(e,n):[].concat(e,[n])})}function f(n){c(function(e){return e.filter(function(e){return!o(e,n)})})}function s(n){return a.some(function(e){return o(e,n)})}return[a,{clear:function(){c([])},add:l,remove:f,toggle:function(n){s(n)?f(n):l(n)},isAdded:s,update:c}]}function z(n){void 0===n&&(n=!0),o(function(){if(n){var e=document.querySelector("html"),t=document.body,r=window.getComputedStyle(t).overflow,i=window.getComputedStyle(e).overflow;return t.style.overflow="hidden",e.style.overflow="hidden",function(){t.style.overflow=r,e.style.overflow=i}}},[n])}function R(n){var e=E();return new URLSearchParams(null==e?void 0:e.location.search).get(n.label),M(a({onUpdate:function(t,r){if(e){var i=new URL(e.location.toString()),o=new URLSearchParams(i.search);void 0===t?o.delete(n.label):o.set(n.label,t),t!==r&&t!==r&&(i.search=o.toString(),history.pushState({},"",i.toString()))}}},n,{defaultQuery:n.defaultQuery}))}var q=function(n){try{if(!n)return Promise.resolve(H);var e=document.createElement("img"),t=new Promise(function(n,t){e.onload=function(){return n({width:e.width,height:e.height})},e.onerror=t});return e.src=n,Promise.resolve(t)}catch(n){return Promise.reject(n)}},H={width:null,height:null};function N(e){var t=O(H);return n.useEffect(function(){!function(){try{var n,r=function(r){if(n)return r;[m.error,m.idle].includes(e.state)&&null!==t.value.width&&null!==t.value.height&&t.clear()},i=function(){if(e.state===m.selected)return function(r,i){try{var o=Promise.resolve(q(e.actions.previewFile())).then(function(e){var r=t.set(e);return n=1,r})}catch(n){return i()}return o&&o.then?o.then(void 0,i):o}(0,function(){var e=t.clear();return n=1,e})}();Promise.resolve(i&&i.then?i.then(r):r(i))}catch(n){return Promise.reject(n)}}()},[e.state]),t.value}var Q=["DialogOverlay","disable","enable","on","off","toggle"];function _(n){var t=n.DialogOverlay,r=n.disable,i=c(n,Q),o=e.useRef(null);return k({Escape:r}),L(o,r),b({ref:o,condition:n.on}),z(n.on),n.off?null:e.createElement(e.Fragment,null,null!=t?t:e.createElement(B,null),e.createElement("dialog",a({ref:o,tabIndex:0,open:n.on,"data-display":"flex","data-direction":"column","data-position":"absolute","data-z":"2","data-bg":"white","data-br":"4","data-bc":"gray-300","data-bw":"1","data-p":"24","data-mx":"auto"},i)))}function B(n){return e.createElement("div",a({"data-position":"absolute","data-inset":"0","data-display":"flex","data-main":"cross","data-cross":"center","data-z":"2",style:{background:"rgb(0, 0, 0, 0.75)"}},n))}function W(n){return U()?null:e.createElement(e.Fragment,null,n.children)}var Y=["as"];function $(n){var t=n.as,r=c(n,Y);return e.createElement(t||"a",a({target:"_blank",rel:"noreferer noopener"},r))}var G=function(n){try{var e,t,r=null!=(e=n.onFailure)?e:J,i=null!=(t=n.onSuccess)?t:T;navigator.clipboard||r();var o=function(e,t){try{var r=Promise.resolve(navigator.clipboard.writeText(n.text)).then(function(){i()})}catch(n){return t(n)}return r&&r.then?r.then(void 0,t):r}(0,function(n){r(n)});return Promise.resolve(o&&o.then?o.then(function(){}):void 0)}catch(n){return Promise.reject(n)}},J=function(n){return console.warn("Copying to clipboard not supported")},K=/*#__PURE__*/function(){function n(){}return n.datetime=function(n,e){return void 0===e&&(e="N/A"),n?new Date(n).toLocaleString():e},n.form=function(e){return e?String(e.getFullYear()).padStart(2,"0")+"-"+String(e.getMonth()+1).padStart(2,"0")+"-"+String(e.getDate()).padStart(2,"0"):n.form(new Date)},n}(),V=/*#__PURE__*/function(){function n(n,e){this.value=void 0;var t=new URLSearchParams(this.getNonEmptyFilters(e));this.value=""!==t.toString()?n+"?"+t.toString():n}return n.prototype.getNonEmptyFilters=function(n){return void 0===n?{}:Object.fromEntries(Object.entries(n).filter(function(n){return void 0!==n[1]}))},n}();function X(){return!E()}var Z=/*#__PURE__*/function(){function n(){}return n.extract=function(n){var e,t,r;return null!=(e=null==(t=n.data)||null==(r=t.pages)?void 0:r.flat().map(function(n){return n.result}).flat())?e:[]},n}();function nn(n){var e;if("en"!==n.language)return console.warn("[@bgord/frontend] missing pluralization fuction for language "+n.language+"."),n.singular;var t=null!=(e=n.plural)?e:n.singular+"s";return 1===n.value?n.singular:t}Z.empty={result:[],meta:{exhausted:!0}};var en=/*#__PURE__*/function(){function n(n){this.message=void 0,this._known=!0,this.message=n.message}return n.isServerError=function(n){return!!(n&&"object"==typeof n&&n===Object(n)&&n.hasOwnProperty("_known")&&n.hasOwnProperty("message"))},n.extract=function(e){try{return e.ok?Promise.resolve(e):Promise.resolve(e.json()).then(function(e){var t=n.isServerError(e)?e.message:"app.error.general";throw new n({message:t})})}catch(n){return Promise.reject(n)}},n.handle=function(e){try{throw new n({message:n.isServerError(e)?e.message:"app.error.general"})}catch(n){return Promise.reject(n)}},n}(),tn=/*#__PURE__*/function(){function n(n){this.value=void 0,this.value=n}var e=n.prototype;return e.toHours=function(){return 24*this.value},e.toMinutes=function(){return 24*this.value*60},e.toSeconds=function(){return 24*this.value*60*60},e.toMs=function(){return 24*this.value*60*60*1e3},n}(),rn=/*#__PURE__*/function(){function n(n){this.value=void 0,this.value=n}var e=n.prototype;return e.toMinutes=function(){return 60*this.value},e.toSeconds=function(){return 60*this.value*60},e.toMs=function(){return 60*this.value*60*1e3},n}(),on=/*#__PURE__*/function(){function n(n){this.value=void 0,this.value=n}var e=n.prototype;return e.toSeconds=function(){return 60*this.value},e.toMs=function(){return 60*this.value*1e3},n}(),un=/*#__PURE__*/function(){function n(n){this.value=void 0,this.value=n}return n.prototype.toMs=function(){return 1e3*this.value},n}(),an={Days:tn,Hours:rn,Minutes:on,Seconds:un},cn=e.createContext(void 0);function ln(n){var t,r,i,o,u=(r=null!=(t=null==n?void 0:n.timeout)?t:5e3,i=D({comparisonFn:function(n,e){return n.id===e.id}}),o=i[1],[[].concat(i[0]).reverse(),{add:function(n){var e=a({},n,{id:String(Date.now())});o.add(e),setTimeout(function(){return o.remove(e)},r)},remove:o.remove,clear:o.clear}]);return e.createElement(cn.Provider,{value:[u[0],u[1]]},n.children)}function fn(){var n=e.useContext(cn);if(void 0===n)throw new Error("useToasts must be used within the ToastsContextProvider");return n}function sn(){return fn()[1].add}var dn=e.createContext({translations:{},language:"en"});function vn(n){return e.createElement(dn.Provider,{value:n.value},n.children)}function mn(){var n=e.useContext(dn);if(void 0===n)throw new Error("useTranslations must be used within the TranslationsContext");return function(e){var t=n.translations[e];return t||console.warn("[@bgord/frontend] missing translation for key "+e+"."),null!=t?t:e}}function hn(){var n=e.useContext(dn);if(void 0===n)throw new Error("useLanguage must be used within the TranslationsContext");return n.language}function pn(){var n=hn();return function(e){return nn(a({},e,{language:n}))}}export{p as Anima,w as AnimaList,d as AnimaState,K as DateFormatter,tn as Days,B as DefaultDialogOverlay,_ as Dialog,V as FilterUrl,rn as Hours,on as Minutes,W as OfflineIndicator,$ as OutboundLink,Z as Pagination,un as Seconds,en as ServerError,an as Time,ln as ToastsContextProvider,vn as TranslationsContextProvider,v as UseExpandableListState,m as UseFileState,G as copyToClipboard,H as emptyImageResolution,g as getAnimaProps,q as getImageResolution,E as getSafeWindow,X as isClient,T as noop,nn as pluralize,y as useAnimaList,b as useAutofocus,x as useBreakpoint,L as useClickOutside,P as useClientSearch,F as useDocumentTitle,j as useExpandableList,O as useField,C as useFile,M as useFilter,N as useImageFileResolution,U as useIsOnline,k as useKeyboardShortcurts,hn as useLanguage,I as useLeavingPrompt,D as useList,pn as usePluralize,s as usePreviousValue,z as useScrollLock,sn as useToastTrigger,fn as useToastsContext,A as useToggle,mn as useTranslations,R as useUrlFilter,S as useWindowDimensions};
//# sourceMappingURL=bgord-frontend.module.js.map
