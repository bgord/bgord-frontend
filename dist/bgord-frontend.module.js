import*as e from"react";import n,{useRef as t,useEffect as r,useState as o,useLayoutEffect as u}from"react";import i from"tinykeys";import*as a from"ts-storage";function c(){return c=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c.apply(this,arguments)}function l(e,n){if(null==e)return{};var t,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n.indexOf(t=u[r])>=0||(o[t]=e[t]);return o}function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function f(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return s(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,n){var o=t(n);return r(function(){o.current=e}),o.current}var v,m=["children"];function p(e){var t,r=null!=(t=e.duration)?t:300,o=n.useState(function(){return e.visible?e.isInitial?v.appeared:v.appearing:v.hidden}),u=o[0],i=o[1],a=d(u);return n.useEffect(function(){if(!e.isInitial)if(e.visible)i(v.appearing),setTimeout(function(){return i(v.appeared)},100);else{if(!a)return;i(v.hidding),setTimeout(function(){return i(v.hidden)},r)}},[e.visible]),u===v.hidden?null:n.cloneElement(e.children,{"data-anima":u,"data-anima-effect":e.effect,style:c({"--duration":r+"ms"},e.children.props.style)})}function h(e){return{"data-anima":e["data-anima"],"data-anima-effect":e["data-anima-effect"],style:e.style}}function g(e){var t=l(e,m),r=n.useState(!0),o=r[0],u=r[1];return n.useEffect(function(){return u(!1)},[]),n.createElement("ul",c({},t),e.children.map(function(e){return n.cloneElement(e,{isInitial:o})}))}function w(e,t){for(var r,o,u=null!=(r=null==t?void 0:t.direction)?r:"head",i=n.useState(e.map(function(e){return{item:e,props:{visible:!0}}})),a=i[0],l=i[1],s=[],d=function(){var e=o.value;!a.map(function(e){return e.item}).some(function(n){return e.id===n.id})&&s.push(e)},v=f(e);!(o=v()).done;)d();n.useEffect(function(){0!==s.length&&(l("head"===u?function(e){return[].concat(s.map(function(e){return{item:e,props:{visible:!0}}}),e)}:function(e){return[].concat(e,s.map(function(e){return{item:e,props:{visible:!0}}}))}),s=[])},[s.length,u]);for(var m,p=[],h=function(){var n=m.value.item;e.every(function(e){return e.id!==n.id})&&p.push(n)},g=f(a);!(m=g()).done;)h();return n.useEffect(function(){0!==p.length&&(l(function(e){return e.map(function(e){return p.some(function(n){return n.id===e.item.id})?c({},e,{props:{visible:!1}}):e})}),p=[])},[p.length]),{items:a.map(function(n){var t=e.find(function(e){return e.id===n.item.id});return t?c({},n,{item:t}):n}),count:a.filter(function(e){return e.props.visible}).length}}!function(e){e.appearing="appearing",e.appeared="appeared",e.hidding="hidding",e.hidden="hidden"}(v||(v={}));var y=/*#__PURE__*/function(){function e(){}return e.format=function(e){var n=Math.floor(e/60),t=e%60;return String(n).padStart(2,"0")+":"+String(t).padStart(2,"0")},e}();function b(e,n){var t="function"==typeof n?n():n,r=o(t),u=r[1];return{value:r[0],set:u,clear:function(){u(t)},label:{props:{htmlFor:e}},input:{props:{id:e,name:e}}}}var E=1;function S(n){var t=e.useState("initial"),r=t[0],o=t[1],u=e.useRef(null),i=b("duration",0),a=b("currentTime",0),c=b("volume",1),l=0===c.value,s=0===i.value?0:Math.round(a.value/i.value*100);function f(e){var n=e.currentTarget;u.current&&(u.current.currentTime=n.valueAsNumber,a.set(n.valueAsNumber))}function d(e){var n=e.currentTarget;u.current&&(u.current.volume=n.valueAsNumber,c.set(n.valueAsNumber))}return{props:{audio:{src:n,onTimeUpdate:function(e){a.set(Math.round(e.target.currentTime))},onLoadedMetadata:function(e){var n=e.currentTarget;u.current=n,i.set(Math.round(n.duration)),a.set(n.currentTime),c.set(n.volume),o("ready")},onEnded:function(){o("paused")},controls:!1},player:{min:0,step:1,max:i.value,value:a.value,onInput:f,style:{"--percentage":s+"%"}},volume:{min:0,max:1,value:c.value,onInput:d,style:{"--percentage":Math.floor(100*c.value)+"%"}}},actions:{play:function(){u.current&&(u.current.play(),o("playing"))},pause:function(){u.current&&(u.current.pause(),o("paused"))},mute:function(){u.current&&(u.current.volume=0,c.set(0))},unmute:function(){u.current&&(u.current.volume=1,c.set(1))},reset:function(){u.current&&(u.current.currentTime=0,u.current.pause(),a.set(0),o("paused"))},seek:f,changeVolume:d},meta:{state:r,percentage:{raw:s,formatted:s+"%"},currentTime:{raw:a.value,formatted:y.format(a.value)},duration:{raw:i.value,formatted:y.format(i.value)},volume:{value:c.value,raw:Math.floor(100*c.value),formatted:Math.floor(100*c.value)+"%"},muted:l}}}function x(e){n.useEffect(function(){var n;e.condition&&(null==(n=e.ref.current)||n.focus())},[e.condition])}function T(){if("undefined"!=typeof window)return window}function P(){var e=o({width:void 0,height:void 0}),n=e[0],t=e[1];return r(function(){var e=T();if(e)return e.addEventListener("resize",n),n(),function(){return e.removeEventListener("resize",n)};function n(){t({width:null==e?void 0:e.innerWidth,height:null==e?void 0:e.innerHeight})}},[]),n}function L(e){var n,t=P();return(null!=(n=null==t?void 0:t.width)?n:0)<=e}function M(e,t,r){n.useEffect(function(){if(e.current)return document.addEventListener("mousedown",n),function(){return document.removeEventListener("mousedown",n)};function n(n){var o;null!=(o=e.current)&&o.contains(n.target)||(null==r?void 0:r.some(function(e){var t;return null==(t=e.current)?void 0:t.contains(n.target)}))||t()}},[t,e,r])}function D(){var e=o(""),n=e[0],t=e[1];return{query:n,clear:function(){t("")},onChange:function(e){t(e.currentTarget.value)},filterFn:function(e){return""===n||(null==e?void 0:e.toLowerCase().includes(n.toLowerCase()))}}}function I(e){return{value:e,toHours:function(){return 24*e},toMinutes:function(){return 24*e*60},toSeconds:function(){return 24*e*60*60},toMs:function(){return 24*e*60*60*1e3}}}function C(e){return{value:e,toMinutes:function(){return 60*e},toSeconds:function(){return 60*e*60},toMs:function(){return 60*e*60*1e3}}}function O(e){return{value:e,toSeconds:function(){return 60*e},toMs:function(){return 60*e*1e3}}}function j(e){return{value:e,toMs:function(){return 1e3*e}}}var F,k,_={Days:I,Hours:C,Minutes:O,Seconds:j};function U(){return Date.now()}function A(){var e=o(U),n=e[0],t=e[1];return r(function(){var e=setInterval(function(){return t(U())},_.Seconds(1).toMs());return function(){return clearInterval(e)}},[]),n}function H(e){var t=n.useState(e.value),r=t[0],o=t[1];return n.useEffect(function(){var n=setTimeout(function(){return o(e.value)},e.delayMs);return function(){return clearTimeout(n)}},[e.value,e.delayMs]),r}function R(e){void 0===e&&(e=!0),u(function(){if(e){var n=document.querySelector("html"),t=document.body,r=window.getComputedStyle(n).overscrollBehavior,o=window.getComputedStyle(t).overscrollBehavior;return t.style.overscrollBehavior="none",n.style.overscrollBehavior="none",function(){t.style.overscrollBehavior=o,n.style.overscrollBehavior=r}}},[e])}function B(e){n.useEffect(function(){document.title=e},[e])}function z(e){var n=e.length-e.max,t=e.length>e.max;function u(){return t?F.contracted:F.expanded}var i=o(u),a=i[0],c=i[1];return r(function(){return c(u())},[e.length,e.max]),{state:a,displayShowMore:a===F.contracted,displayShowLess:a===F.expanded&&t,showMore:function(){a===F.contracted&&c(F.expanded)},showLess:function(){a===F.expanded&&c(F.contracted)},numberOfExcessiveElements:n,filterFn:function(n,t){return a===F.expanded||t<e.max}}}function N(e){var n,t=null!=(n=null==e?void 0:e.maxSize)?n:Infinity,r=o(k.idle),u=r[0],i=r[1],a=o(null),c=a[0],l=a[1];function s(e){var n=e.currentTarget.files;if(n&&n[0]){var r=n[0];if(!(r.size>t))return l(r),i(k.selected),r;i(k.error)}}function f(){l(null),i(k.idle)}return u===k.idle?{state:u,data:null,actions:{selectFile:s,clearFile:f}}:u===k.selected?{state:u,data:c,actions:{selectFile:s,clearFile:f,previewFile:function(){if(c)return URL.createObjectURL(c)}}}:{state:u,data:null,actions:{selectFile:s,clearFile:f}}}function Q(){}function W(e){var n,t,u,i,a=null!=(n=e.defaultQuery)?n:void 0,c=null!=(t=e.currentQuery)?t:void 0,l=null!=(u=e.filterFn)?u:function(e){return void 0===m||m===String(e)},s=Object.keys(e.enum),f=null!=(i=null==e?void 0:e.onUpdate)?i:Q,v=o(null!=c?c:a),m=v[0],p=v[1],h=d(m);return r(function(){f(m,h)},[h,m]),{query:m,clear:function(){p(a)},onChange:function(n){var t=n.currentTarget.value,r=Boolean(e.enum[String(t)]);p(r?t:void 0)},filterFn:l,options:s,onUpdate:f,label:e.label}}function q(e){void 0===e&&(e=!1);var n=o(e),t=n[0],r=n[1];return{on:t,off:!t,enable:function(){return r(!0)},disable:function(){return r(!1)},toggle:function(){return r(function(e){return!e})}}}function Y(){var e=n.useRef(null),t=q(!1),r=t.enable,o=t.disable;return n.useEffect(function(){var n=e.current;return n&&(n.addEventListener("mouseenter",r),n.addEventListener("mouseleave",o)),function(){n&&(n.removeEventListener("mouseenter",r),n.removeEventListener("mouseleave",o))}},[]),{attach:{ref:e},isHovering:t.on}}!function(e){e.contracted="contracted",e.expanded="expanded"}(F||(F={})),function(e){e.idle="idle",e.selected="selected",e.error="error"}(k||(k={}));var V=function(e){try{if(!e)return Promise.resolve($);var n=document.createElement("img"),t=new Promise(function(e,t){n.onload=function(){return e({width:n.width,height:n.height})},n.onerror=t});return n.src=e,Promise.resolve(t)}catch(e){return Promise.reject(e)}},$={width:null,height:null};function G(n){var t,r=b("resolution",$);return e.useEffect(function(){!function(){try{var e,t=function(t){if(e)return t;[k.error,k.idle].includes(n.state)&&null!==r.value.width&&null!==r.value.height&&r.clear()},o=function(){if(n.state===k.selected)return function(t,o){try{var u=Promise.resolve(V(n.actions.previewFile())).then(function(n){var t=r.set(n);return e=1,t})}catch(e){return o()}return u&&u.then?u.then(void 0,o):u}(0,function(){var n=r.clear();return e=1,n})}();Promise.resolve(o&&o.then?o.then(t):t(o))}catch(e){return Promise.reject(e)}}()},[n.state,null==(t=n.data)?void 0:t.name]),r.value}var J,K=function(){var e=q("undefined"==typeof navigator||"boolean"!=typeof navigator.onLine||navigator.onLine);return n.useEffect(function(){function n(){e.enable()}function t(){e.disable()}return window.addEventListener("online",n),window.addEventListener("offline",t),function(){window.removeEventListener("online",n),window.removeEventListener("offline",t)}},[]),e.on},X={threshold:0,root:null,rootMargin:"0%",ref:{current:null}};function Z(){return"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype}function ee(e){void 0===e&&(e=X);var n=o(!1),t=n[0],u=n[1];return r(function(){var n=e.ref.current;if(Z()&&n){var t=new IntersectionObserver(function(e){var n;return u(Boolean(null==(n=e[0])?void 0:n.isIntersecting))},e);return t.observe(n),function(){return t.unobserve(n)}}},[]),t}function ne(e){var n=Object.keys(e);return function(t){var r=t.key,o=e[r];n.includes(t.key)&&e[r]&&o&&o()}}function te(e){n.useEffect(function(){var n=i(window,e);return function(){return n()}},[e])}function re(e){void 0===e&&(e=!1),n.useEffect(function(){if(e)return window.addEventListener("beforeunload",n),function(){return window.removeEventListener("beforeunload",n)};function n(e){e.preventDefault()}},[e])}function oe(e){var n,t,r=null!=(n=null==e?void 0:e.defaultItems)?n:[],u=null!=(t=null==e?void 0:e.comparisonFn)?t:function(e,n){return e===n},i=o(r),a=i[0],c=i[1];function l(e){c(function(n){return Array.isArray(e)?[].concat(n,e):[].concat(n,[e])})}function s(e){c(function(n){return n.filter(function(n){return!u(n,e)})})}function f(e){return a.some(function(n){return u(n,e)})}return[a,{clear:function(){c([])},add:l,remove:s,toggle:function(e){f(e)?s(e):l(e)},isAdded:f,update:c}]}!function(e){e.Enter="Enter",e.Space=" "}(J||(J={}));var ue=/*#__PURE__*/function(){function e(){}return e.get=function(e,n){return a.get(e,n).value},e.set=function(e,n){a.set(e,n)},e}();function ie(n,t){void 0===t&&(t=!1);var r=q(ue.get(n,t));return e.useEffect(function(){return ue.set(n,r.on)},[n,r.on]),r}var ae=/*#__PURE__*/function(){function e(e){this.lastInvocationTimestamp=null,this.options=void 0,this.options=e}return e.prototype.verify=function(e){if(!this.lastInvocationTimestamp)return this.lastInvocationTimestamp=e,{allowed:!0};var n=this.lastInvocationTimestamp+this.options.limitMs;return n<=e?(this.lastInvocationTimestamp=e,{allowed:!0}):{allowed:!1,remainingMs:n-e}},e}();function ce(e){var n=t(new ae(e));return function(){var t=Date.now(),r=n.current.verify(t);return r.allowed?e.action():null==e.fallback?void 0:e.fallback(r.remainingMs)}}function le(){var e=T(),t=n.useState(0),r=t[0],o=t[1],u=q(!1);return n.useLayoutEffect(function(){function n(){e&&(o(null==e?void 0:e.scrollY),e.document.body.clientHeight<e.document.body.scrollHeight?u.enable():u.disable())}return null==e||e.addEventListener("scroll",n),function(){return null==e?void 0:e.removeEventListener("scroll",n)}},[]),{actions:{goToTop:function(){e&&e.scrollTo({top:0,left:0,behavior:"smooth"})}},position:{value:r,isInitial:0===r,hasChanged:r>0},visible:u.on,hidden:u.off}}function se(e){void 0===e&&(e=!0),u(function(){if(e){var n=document.querySelector("html"),t=document.body,r=window.getComputedStyle(t).overflow,o=window.getComputedStyle(n).overflow;return t.style.overflow="hidden",n.style.overflow="hidden",function(){t.style.overflow=r,n.style.overflow=o}}},[e])}function fe(e){var n=new Audio(e);return{play:n.play.bind(n)}}function de(e){var n,t=T(),r=null!=(n=new URLSearchParams(null==t?void 0:t.location.search).get(e.label))?n:void 0;return W(c({onUpdate:function(n,r){if(t){var o=new URL(t.location.toString()),u=new URLSearchParams(o.search);void 0===n?u.delete(e.label):u.set(e.label,n),n!==r&&n!==r&&(o.search=u.toString(),history.pushState({},"",o.toString()))}}},e,{defaultQuery:e.defaultQuery,currentQuery:r}))}var ve=["disable","enable","on","off","toggle"];function me(e){var t=e.disable,r=l(e,ve),o=n.useRef(null);return n.useEffect(function(){var n,t;e.on?null==(n=o.current)||n.showModal():null==(t=o.current)||t.close()},[e.on]),te({Escape:t}),x({ref:o,condition:e.on}),se(e.on),n.createElement("dialog",c({ref:o,tabIndex:0,"data-display":e.on?"flex":"none","data-direction":"column","data-mx":"auto","data-p":"24","data-position":"absolute","data-z":"2","data-bg":"white","data-br":"4","data-bc":"gray-300","data-bw":"1","data-backdrop":"black"},r))}function pe(e){return K()?null:n.createElement(n.Fragment,null,e.children)}var he=["as"];function ge(e){var t=e.as,r=l(e,he);return n.createElement(t||"a",c({target:"_blank",rel:"noreferer noopener"},r))}var we=function(e){try{var n,t,r=null!=(n=e.onFailure)?n:ye,o=null!=(t=e.onSuccess)?t:Q;navigator.clipboard||r();var u=function(n,t){try{var r=Promise.resolve(navigator.clipboard.writeText(e.text)).then(function(){o()})}catch(e){return t(e)}return r&&r.then?r.then(void 0,t):r}(0,function(e){r(e)});return Promise.resolve(u&&u.then?u.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},ye=function(e){return console.warn("Copying to clipboard not supported")},be=/*#__PURE__*/function(){function e(){}return e.datetime=function(e,n){return void 0===n&&(n="N/A"),e?new Date(e).toLocaleString():n},e.monthDay=function(n){var t=new Date(n),r=e._padDatePart(t.getDate());return e._padDatePart(t.getMonth()+1)+"/"+r},e.form=function(n){return n?e._padDatePart(n.getFullYear())+"-"+e._padDatePart(n.getMonth()+1)+"-"+e._padDatePart(n.getDate()):e.form(new Date)},e.clockUTC=function(n){var t=new Date(n);return e._padDatePart(t.getUTCHours())+":"+e._padDatePart(t.getUTCMinutes())+":"+e._padDatePart(t.getUTCSeconds())},e.clockLocal=function(n){var t=new Date(n);return e._padDatePart(t.getHours())+":"+e._padDatePart(t.getMinutes())+":"+e._padDatePart(t.getSeconds())},e.countdown=function(n){var t=new Date(n);return e._padDatePart(t.getHours())+":"+e._padDatePart(t.getMinutes())+":"+e._padDatePart(t.getSeconds())},e._padDatePart=function(e){return String(e).padStart(2,"0")},e}(),Ee=/*#__PURE__*/function(){function e(){}return e.convertUtcToLocal=function(e){var n=(new Date).getTimezoneOffset(),t=(C(e).toMinutes()-n)/60%24;return{value:t,label:String(t).padStart(2,"0")+":00"}},e}(),Se=/*#__PURE__*/function(){function e(e,n){this.value=void 0;var t=new URLSearchParams(this.getNonEmptyFilters(n));this.value=""!==t.toString()?e+"?"+t.toString():e}return e.prototype.getNonEmptyFilters=function(e){return void 0===e?{}:Object.fromEntries(Object.entries(e).filter(function(e){return void 0!==e[1]}))},e}();function xe(){return!T()}var Te=/*#__PURE__*/function(){function e(){}return e.extract=function(e){var n,t,r;return null!=(n=null==(t=e.data)||null==(r=t.pages)?void 0:r.flat().map(function(e){return e.result}).flat())?n:[]},e}();function Pe(e){var n;if("en"!==e.language)return console.warn("[@bgord/frontend] missing pluralization fuction for language "+e.language+"."),e.singular;var t=null!=(n=e.plural)?n:e.singular+"s";return 1===e.value?e.singular:t}Te.empty={result:[],meta:{exhausted:!0}};var Le=/*#__PURE__*/function(){function e(){}return e.base=function(e){return void 0===e&&(e=12),{times:function(n){var t=e*n;return{px:t+"px",raw:t,height:{height:t+"px"},minHeight:{minHeight:t+"px"},maxHeight:{maxHeight:t+"px"},width:{width:t+"px"},minWidth:{minWidth:t+"px"},maxWidth:{maxWidth:t+"px"}}}}},e}(),Me=/*#__PURE__*/function(){function e(e){this.message=void 0,this._known=!0,this.message=e.message}return e.isServerError=function(e){return!!(e&&"object"==typeof e&&e===Object(e)&&e.hasOwnProperty("_known")&&e.hasOwnProperty("message"))},e.extract=function(n){try{return n.ok?Promise.resolve(n):Promise.resolve(n.json()).then(function(n){var t=e.isServerError(n)?n.message:"app.error.general";throw new e({message:t})})}catch(e){return Promise.reject(e)}},e.handle=function(n){try{throw new e({message:e.isServerError(n)?n.message:"app.error.general"})}catch(e){return Promise.reject(e)}},e}(),De=n.createContext(void 0);function Ie(e){var t,r,o,u,i=(r=null!=(t=null==e?void 0:e.timeout)?t:5e3,o=oe({comparisonFn:function(e,n){return e.id===n.id}}),u=o[1],[[].concat(o[0]).reverse(),{add:function(e){var n=c({},e,{id:String(Date.now())});u.add(n),setTimeout(function(){return u.remove(n)},r)},remove:u.remove,clear:u.clear}]);return n.createElement(De.Provider,{value:[i[0],i[1]]},e.children)}function Ce(){var e=n.useContext(De);if(void 0===e)throw new Error("useToasts must be used within the ToastsContextProvider");return e}function Oe(){return Ce()[1].add}var je=n.createContext({translations:{},language:"en"});function Fe(e){return n.createElement(je.Provider,{value:e.value},e.children)}function ke(){var e=n.useContext(je);if(void 0===e)throw new Error("useTranslations must be used within the TranslationsContext");return function(n,t){var r=e.translations[n];return r?t?Object.entries(t).reduce(function(e,n){return e.replace("{{"+n[0]+"}}",String(n[1]))},r):r:(console.warn("[@bgord/frontend] missing translation for key: "+n),n)}}function _e(){var e=n.useContext(je);if(void 0===e)throw new Error("useLanguage must be used within the TranslationsContext");return e.language}function Ue(){var e=_e();return function(n){return Pe(c({},n,{language:e}))}}export{E as AUDIO_DEFAULT_VOLUME,p as Anima,g as AnimaList,v as AnimaState,be as DateFormatter,I as Days,me as Dialog,y as DurationFormatter,Se as FilterUrl,Ee as HourFormatter,C as Hours,J as KeyNameEnum,O as Minutes,pe as OfflineIndicator,ge as OutboundLink,Te as Pagination,Le as Rhythm,ue as SafeLocalStorage,j as Seconds,Me as ServerError,_ as Time,Ie as ToastsContextProvider,Fe as TranslationsContextProvider,F as UseExpandableListState,k as UseFileState,we as copyToClipboard,X as defaultUseIsVisibleConfig,$ as emptyImageResolution,h as getAnimaProps,U as getCurrentTimestamp,V as getImageResolution,T as getSafeWindow,xe as isClient,Z as isIntersectionObserverSupported,Q as noop,Pe as pluralize,w as useAnimaList,S as useAudio,x as useAutofocus,L as useBreakpoint,M as useClickOutside,D as useClientSearch,A as useCurrentTimestamp,H as useDebounce,R as useDisablePullToRefresh,B as useDocumentTitle,z as useExpandableList,b as useField,N as useFile,W as useFilter,Y as useHover,G as useImageFileResolution,K as useIsOnline,ee as useIsVisible,ne as useKeyHandler,te as useKeyboardShortcurts,_e as useLanguage,re as useLeavingPrompt,oe as useList,ie as usePersistentToggle,Ue as usePluralize,d as usePreviousValue,ce as useRateLimiter,le as useScroll,se as useScrollLock,fe as useSound,Oe as useToastTrigger,Ce as useToastsContext,q as useToggle,ke as useTranslations,de as useUrlFilter,P as useWindowDimensions};
//# sourceMappingURL=bgord-frontend.module.js.map
