import*as e from"react";import n,{useRef as t,useEffect as r,useState as u,useLayoutEffect as a,useMemo as i,Fragment as o}from"react";import l from"tinykeys";import c from"js-cookie";import{polishPlurals as s}from"polish-plurals";import*as f from"ts-storage";function d(){return d=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},d.apply(this,arguments)}function v(e,n){if(null==e)return{};var t,r,u={},a=Object.keys(e);for(r=0;r<a.length;r++)n.indexOf(t=a[r])>=0||(u[t]=e[t]);return u}function m(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function p(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return m(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?m(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(e,n){var u=t(n);return r(function(){u.current=e}),u.current}var g,w=["children"];function y(e){var t,r=null!=(t=e.duration)?t:300,u=n.useState(function(){return e.visible?e.isInitial?g.appeared:g.appearing:g.hidden}),a=u[0],i=u[1],o=h(a);return n.useEffect(function(){if(!e.isInitial)if(e.visible)i(g.appearing),setTimeout(function(){return i(g.appeared)},100);else{if(!o)return;i(g.hiding),setTimeout(function(){return i(g.hidden)},r)}},[e.visible]),a===g.hidden?null:n.cloneElement(e.children,{"data-anima":a,"data-anima-effect":e.effect,style:d({"--duration":r+"ms"},e.children.props.style)})}function b(e){return{"data-anima":e["data-anima"],"data-anima-effect":e["data-anima-effect"],style:e.style}}function E(e){var t=v(e,w),r=n.useState(!0),u=r[0],a=r[1];return n.useEffect(function(){return a(!1)},[]),n.createElement("ul",d({},t),e.children.map(function(e){return n.cloneElement(e,{isInitial:u})}))}function x(e,t){for(var r,u,a=null!=(r=null==t?void 0:t.direction)?r:"head",i=n.useState(e.map(function(e){return{item:e,props:{visible:!0}}})),o=i[0],l=i[1],c=[],s=function(){var e=u.value;!o.map(function(e){return e.item}).some(function(n){return e.id===n.id})&&c.push(e)},f=p(e);!(u=f()).done;)s();n.useEffect(function(){0!==c.length&&(l("head"===a?function(e){return[].concat(c.map(function(e){return{item:e,props:{visible:!0}}}),e)}:function(e){return[].concat(e,c.map(function(e){return{item:e,props:{visible:!0}}}))}),c=[])},[c.length,a]);for(var v,m=[],h=function(){var n=v.value.item;e.every(function(e){return e.id!==n.id})&&m.push(n)},g=p(o);!(v=g()).done;)h();return n.useEffect(function(){0!==m.length&&(l(function(e){return e.map(function(e){return m.some(function(n){return n.id===e.item.id})?d({},e,{props:{visible:!1}}):e})}),m=[])},[m.length]),{items:o.map(function(n){var t=e.find(function(e){return e.id===n.item.id});return t?d({},n,{item:t}):n}),count:o.filter(function(e){return e.props.visible}).length}}!function(e){e.appearing="appearing",e.appeared="appeared",e.hiding="hiding",e.hidden="hidden"}(g||(g={}));var S=/*#__PURE__*/function(){function e(e){this.message=void 0,this._known=!0,this.message=e.message}return e.isServerError=function(e){return!!(e&&"object"==typeof e&&e===Object(e)&&e.hasOwnProperty("_known")&&e.hasOwnProperty("message"))},e.extract=function(n){try{return n.ok?Promise.resolve(n):Promise.resolve(n.json()).then(function(n){var t=e.isServerError(n)?n.message:"app.error.general";throw new e({message:t})})}catch(e){return Promise.reject(e)}},e.handle=function(n){try{throw new e({message:e.isServerError(n)?n.message:"app.error.general"})}catch(e){return Promise.reject(e)}},e}(),T=function(e,n){return fetch(e,d({mode:"same-origin",redirect:"follow"},n,{headers:d({"Content-Type":"application/json","time-zone-offset":(new Date).getTimezoneOffset().toString()},null==n?void 0:n.headers)})).then(S.extract).catch(S.handle)},P=/*#__PURE__*/function(){function e(){}return e.format=function(e){var n=Math.floor(e/60),t=e%60;return String(n).padStart(2,"0")+":"+String(t).padStart(2,"0")},e}(),M=["value","set","clear","label","input","changed","unchanged","handleChange"];function D(e,n){var t="function"==typeof n?n():n,a=u(t),i=a[0],o=a[1];return r(function(){return o(t)},[t]),{value:i,set:o,handleChange:function(e){return o(e.currentTarget.value)},clear:function(){return o(t)},label:{props:{htmlFor:e}},input:{props:{id:e,name:e}},changed:i!==t,unchanged:i==t}}function A(e){return{field:{value:e.value,set:e.set,clear:e.clear,label:e.label,input:e.input,changed:e.changed,unchanged:e.unchanged,handleChange:e.handleChange},rest:v(e,M)}}var L,C=1;function I(n){var t=e.useState(L.initial),r=t[0],u=t[1],a=e.useRef(null),i=D("duration",0),o=D("currentTime",0),l=D("volume",1),c=0===l.value,s=0===i.value?0:Math.round(o.value/i.value*100);function f(e){var n=e.currentTarget;a.current&&(a.current.currentTime=n.valueAsNumber,o.set(n.valueAsNumber))}function d(e){var n=e.currentTarget;a.current&&(a.current.volume=n.valueAsNumber,l.set(n.valueAsNumber))}return{props:{audio:{src:n,onTimeUpdate:function(e){o.set(Math.round(e.target.currentTime))},onLoadedMetadata:function(e){var n=e.currentTarget;a.current=n,i.set(Math.round(n.duration)),o.set(n.currentTime),l.set(n.volume),u(L.ready)},onEnded:function(){u(L.paused)},controls:!1},player:{min:0,step:1,max:i.value,value:o.value,onInput:f,style:{"--percentage":s+"%"}},volume:{min:0,max:1,step:.01,value:l.value,onInput:d,style:{"--percentage":Math.floor(100*l.value)+"%"}}},actions:{play:function(){a.current&&(a.current.play(),u(L.playing))},pause:function(){a.current&&(a.current.pause(),u(L.paused))},mute:function(){a.current&&(a.current.volume=0,l.set(0))},unmute:function(){a.current&&(a.current.volume=1,l.set(1))},reset:function(){a.current&&(a.current.currentTime=0,a.current.pause(),o.set(0),u(L.paused))},seek:f,changeVolume:d},meta:{state:r,isInitial:r===L.initial,isReady:r===L.ready,isPlaying:r===L.playing,isPaused:r===L.paused,matches:function(e){return e.some(function(e){return e===r})},percentage:{raw:s,formatted:s+"%"},currentTime:{raw:o.value,formatted:P.format(o.value)},duration:{raw:i.value,formatted:P.format(i.value)},volume:{value:l.value,raw:Math.floor(100*l.value),formatted:Math.floor(100*l.value)+"%"},muted:c}}}function F(e){n.useEffect(function(){var n;e.condition&&(null==(n=e.ref.current)||n.focus())},[e.condition])}function k(){if("undefined"!=typeof window)return window}function O(){var e=u({width:void 0,height:void 0}),n=e[0],t=e[1];return r(function(){var e=k();if(e)return e.addEventListener("resize",n),n(),function(){return e.removeEventListener("resize",n)};function n(){t({width:null==e?void 0:e.innerWidth,height:null==e?void 0:e.innerHeight})}},[]),n}function j(e){var n,t=O();return(null!=(n=null==t?void 0:t.width)?n:0)<=e}function R(e,t,r){n.useEffect(function(){if(e.current)return document.addEventListener("mousedown",n),function(){return document.removeEventListener("mousedown",n)};function n(n){var u;null!=(u=e.current)&&u.contains(n.target)||(null==r?void 0:r.some(function(e){var t;return null==(t=e.current)?void 0:t.contains(n.target)}))||t()}},[t,e,r])}function N(){}function U(e){var n,t,a,i,o=null!=(n=e.defaultQuery)?n:void 0,l=null!=(t=e.currentQuery)?t:void 0,c=null!=(a=e.filterFn)?a:function(e){return void 0===v||v===String(e)},s=Object.keys(e.enum),f=null!=(i=null==e?void 0:e.onUpdate)?i:N,d=u(null!=l?l:o),v=d[0],m=d[1],p=h(v);return r(function(){return f(v,p)},[p,v]),{query:v,clear:function(){m(o)},onChange:function(n){var t=n.currentTarget.value,r=Boolean(e.enum[String(t)]);m(r?t:void 0)},filterFn:c,options:s,onUpdate:f,name:e.name,changed:v!==o,unchanged:v===o,label:{props:{htmlFor:e.name}},input:{props:{id:e.name,name:e.name}}}}function _(){var e=u(""),n=e[0],t=e[1];return{query:n,clear:function(){t("")},onChange:function(e){t(e.currentTarget.value)},filterFn:function(e){return""===n||(null==e?void 0:e.toLowerCase().includes(n.toLowerCase()))},changed:""!==n,unchanged:""===n}}!function(e){e.initial="initial",e.ready="ready",e.playing="playing",e.paused="paused"}(L||(L={}));var H=function(){return 0};function B(e,n){var t,r=D(e,n.enum.default);return d(r.value===n.enum.default?{sortFn:H,options:Object.keys(n.options)}:{sortFn:null!=(t=n.options[r.value])?t:H,options:Object.keys(n.options)},r,{handleChange:function(e){var t=e.currentTarget.value,u=Boolean(n.enum[String(t)]);r.set(u?t:n.enum.default)}})}function q(e){return{value:e,hours:24*e,minutes:24*e*60,seconds:24*e*60*60,ms:24*e*60*60*1e3}}function z(e){return{value:e,minutes:60*e,seconds:60*e*60,ms:60*e*60*1e3}}function W(e){return{value:e,seconds:60*e,ms:60*e*1e3}}function Q(e){return{value:e,ms:1e3*e}}var V={Days:q,Hours:z,Minutes:W,Seconds:Q};function K(){return Date.now()}function Y(){var e=u(K),n=e[0],t=e[1];return r(function(){var e=setInterval(function(){return t(K())},V.Seconds(1).ms);return function(){return clearInterval(e)}},[]),n}function J(e){var t=n.useState(e.value),r=t[0],u=t[1];return n.useEffect(function(){var n=setTimeout(function(){return u(e.value)},e.delayMs);return function(){return clearTimeout(n)}},[e.value,e.delayMs]),r}var Z,$,G=["on","off","enable","disable","toggle"];function X(e){void 0===e&&(e=!1);var n=u(e),t=n[0],r=n[1];return{on:t,off:!t,enable:function(){return r(!0)},disable:function(){return r(!1)},toggle:function(){return r(function(e){return!e})}}}function ee(e){return{toggle:{on:e.on,off:e.off,enable:e.enable,disable:e.disable,toggle:e.toggle},rest:v(e,G)}}function ne(e){var n=X(e),t=k();return r(function(){t&&(t.document.designMode=n.on?"on":"off")},[n.on]),n}function te(e){void 0===e&&(e=!0),a(function(){if(e){var n=document.querySelector("html"),t=document.body,r=window.getComputedStyle(n).overscrollBehavior,u=window.getComputedStyle(t).overscrollBehavior;return t.style.overscrollBehavior="none",n.style.overscrollBehavior="none",function(){t.style.overscrollBehavior=u,n.style.overscrollBehavior=r}}},[e])}function re(e){n.useEffect(function(){document.title=e},[e])}function ue(e){var n=e.length-e.max,t=e.length>e.max;function a(){return t?Z.contracted:Z.expanded}var i=u(a),o=i[0],l=i[1];return r(function(){return l(a())},[e.length,e.max]),{state:o,displayShowMore:o===Z.contracted,displayShowLess:o===Z.expanded&&t,actions:{showMore:function(){o===Z.contracted&&l(Z.expanded)},showLess:function(){o===Z.expanded&&l(Z.contracted)}},numberOfExcessiveElements:n,filterFn:function(n,t){return o===Z.expanded||t<e.max}}}function ae(e,n){var t,r=null!=(t=null==n?void 0:n.maxSize)?t:Infinity,a=u(0),o=a[0],l=a[1],c=u($.idle),s=c[0],f=c[1],d=u(null),v=d[0],m=d[1];function p(e){var n=e.currentTarget.files;if(n&&n[0]){var t=n[0];if(!(t.size>r))return m(t),f($.selected),t;f($.error)}}function h(){l(function(e){return e+1}),m(null),f($.idle)}var g=i(function(){return v?URL.createObjectURL(v):void 0},[v]);function w(e){return e.some(function(e){return e===s})}return s===$.idle?{state:s,matches:w,isIdle:!0,isSelected:!1,isError:!1,data:null,actions:{selectFile:p,clearFile:h},label:{props:{htmlFor:e}},input:{props:{id:e,name:e,multiple:!1,key:o}}}:s===$.selected?{state:s,matches:w,data:v,isIdle:!1,isSelected:!0,isError:!1,actions:{selectFile:p,clearFile:h},preview:g,label:{props:{htmlFor:e}},input:{props:{id:e,name:e,multiple:!1,key:o}}}:{state:s,matches:w,data:null,isIdle:!1,isSelected:!1,isError:!0,actions:{selectFile:p,clearFile:h},label:{props:{htmlFor:e}},input:{props:{id:e,name:e,multiple:!1,key:o}}}}function ie(e){var t,r=null==(t=null==e?void 0:e.enabled)||t,u=n.useRef(null),a=X(!1),i=a.enable,o=a.disable;return n.useEffect(function(){var e=u.current;return e&&r&&(e.addEventListener("mouseenter",i),e.addEventListener("mouseleave",o)),function(){e&&r&&(e.removeEventListener("mouseenter",i),e.removeEventListener("mouseleave",o))}},[]),{attach:{ref:u},isHovering:a.on&&r}}!function(e){e.contracted="contracted",e.expanded="expanded"}(Z||(Z={})),function(e){e.idle="idle",e.selected="selected",e.error="error"}($||($={}));var oe=function(e){try{if(!e)return Promise.resolve(le);var n=document.createElement("img"),t=new Promise(function(e,t){n.onload=function(){return e({width:n.width,height:n.height})},n.onerror=t});return n.src=e,Promise.resolve(t)}catch(e){return Promise.reject(e)}},le={width:null,height:null};function ce(n){var t,r=D("resolution",le);return e.useEffect(function(){!function(){try{var e,t=function(t){if(e)return t;[$.error,$.idle].includes(n.state)&&null!==r.value.width&&null!==r.value.height&&r.clear()},u=function(){if(n.state===$.selected)return function(t,u){try{var a=Promise.resolve(oe(n.preview)).then(function(n){var t=r.set(n);return e=1,t})}catch(e){return u()}return a&&a.then?a.then(void 0,u):a}(0,function(){var n=r.clear();return e=1,n})}();Promise.resolve(u&&u.then?u.then(t):t(u))}catch(e){return Promise.reject(e)}}()},[n.state,null==(t=n.data)?void 0:t.name]),r.value}var se,fe,de=function(){var e=X("undefined"==typeof navigator||"boolean"!=typeof navigator.onLine||navigator.onLine);return n.useEffect(function(){function n(){e.enable()}function t(){e.disable()}return window.addEventListener("online",n),window.addEventListener("offline",t),function(){window.removeEventListener("online",n),window.removeEventListener("offline",t)}},[]),e.on},ve={threshold:0,root:null,rootMargin:"0%",ref:{current:null}};function me(){return"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype}function pe(e){void 0===e&&(e=ve);var n=u(!1),t=n[0],a=n[1];return r(function(){var n=e.ref.current;if(me()&&n){var t=new IntersectionObserver(function(e){var n;return a(Boolean(null==(n=e[0])?void 0:n.isIntersecting))},e);return t.observe(n),function(){return t.unobserve(n)}}},[]),t}function he(e,n){return e===n}function ge(e){var n,t,r=null!=(n=null==e?void 0:e.comparisonFn)?n:he,a=u(null!=(t=null==e?void 0:e.defaultItem)?t:null),i=a[0],o=a[1];return{clear:function(){return o(null)},set:function(e){return o(e)},toggle:function(e){return o(function(n){return null===n?e:r(n,e)?null:e})},value:i,isDefault:r(i,null),exists:!r(i,null),compare:function(e){return r(i,e)}}}function we(e){var n=Object.keys(e);return function(t){var r=t.key,u=e[r];n.includes(t.key)&&e[r]&&u&&u()}}function ye(e,t){var r,u=null==(r=null==t?void 0:t.enabled)||r;n.useEffect(function(){if(u){var n=l(window,e);return function(){return n()}}},[e,u])}function be(e){if(e.language===fe.en){var n,t=null!=(n=e.plural)?n:e.singular+"s";return 1===e.value?e.singular:t}if(e.language===fe.pl){var r,u=null!=(r=e.value)?r:1;return 1===u?e.singular:s(e.singular,String(e.plural),String(e.genitive),u)}return console.warn("[@bgord/frontend] missing pluralization function for language "+e.language+"."),e.singular}!function(e){e.Enter="Enter",e.Space=" "}(se||(se={})),function(e){e.en="en",e.pl="pl"}(fe||(fe={}));var Ee=n.createContext({translations:{},language:"en"});function xe(e){return n.createElement(Ee.Provider,{value:e.value},e.children)}function Se(){var e=n.useContext(Ee);if(void 0===e)throw new Error("useTranslations must be used within the TranslationsContext");return function(n,t){var r=e.translations[n];return r?t?Object.entries(t).reduce(function(e,n){return e.replace("{{"+n[0]+"}}",String(n[1]))},r):r:(console.warn("[@bgord/frontend] missing translation for key: "+n),n)}}function Te(){var e=n.useContext(Ee);if(void 0===e)throw new Error("useLanguage must be used within the TranslationsContext");return e.language}function Pe(){var e=Te();return function(n){return be(d({},n,{language:e}))}}function Me(e){return U({enum:e,currentQuery:Te(),name:"language",onUpdate:function(e,n){var t=k();t&&e&&n&&n!==e&&(c.set("accept-language",e),t.document.location.reload())}})}function De(e){void 0===e&&(e=!1),n.useEffect(function(){if(e)return window.addEventListener("beforeunload",n),function(){return window.removeEventListener("beforeunload",n)};function n(e){e.preventDefault()}},[e])}function Ae(e){var n,t,r=null!=(n=null==e?void 0:e.defaultItems)?n:[],a=null!=(t=null==e?void 0:e.comparisonFn)?t:function(e,n){return e===n},i=u(r),o=i[0],l=i[1];function c(e){l(function(n){return Array.isArray(e)?[].concat(n,e):[].concat(n,[e])})}function s(e){l(function(n){return n.filter(function(n){return!a(n,e)})})}function f(e){return o.some(function(n){return a(n,e)})}return[o,{clear:function(){l([])},add:c,remove:s,toggle:function(e){f(e)?s(e):c(e)},isAdded:f,update:l}]}function Le(){return{onKeyDown:function(e){var n;"Enter"===e.key&&e.metaKey&&(null==(n=e.currentTarget.form)||n.dispatchEvent(new Event("submit",{cancelable:!0})))}}}function Ce(){var e,n,t,r=D("meta",null),u=null==(e=r.value)?void 0:e.previousPage,a=null==(n=r.value)?void 0:n.nextPage,i=(null==(t=r.value)?void 0:t.lastPage)||1,o=D("page",1);return{current:o.value,last:i,controls:{firstPage:{active:!u,disabled:!1,exists:!0,go:function(){return o.set(1)},value:1},previousPage:{active:!1,disabled:!u,exists:Boolean(u),go:function(){return o.set(null!=u?u:o.value)},value:u},nextPage:{active:!1,disabled:!a,exists:Boolean(a),go:function(){return o.set(null!=a?a:o.value)},value:a},lastPage:{active:o.value===i,disabled:!a,exists:!0,go:function(){return o.set(null!=i?i:o.value)},value:i}},update:function(e){return r.set(e)}}}var Ie=/*#__PURE__*/function(){function e(){}return e.get=function(e,n){return f.get(e,n).value},e.set=function(e,n){f.set(e,n)},e.clear=function(e){f.remove(e)},e}();function Fe(n,t){void 0===t&&(t=!1);var r=X(Ie.get(n,t));return e.useEffect(function(){return Ie.set(n,r.on)},[n,r.on]),d({},r,{clear:function(){return Ie.clear(n)}})}var ke=/*#__PURE__*/function(){function e(e){this.lastInvocationTimestamp=null,this.options=void 0,this.options=e}return e.prototype.verify=function(e){if(!this.lastInvocationTimestamp)return this.lastInvocationTimestamp=e,{allowed:!0};var n=this.lastInvocationTimestamp+this.options.limitMs;return n<=e?(this.lastInvocationTimestamp=e,{allowed:!0}):{allowed:!1,remainingMs:n-e}},e}();function Oe(e){var n=t(new ke(e));return function(){var t=Date.now(),r=n.current.verify(t);return r.allowed?e.action.apply(e,[].slice.call(arguments)):null==e.fallback?void 0:e.fallback(r.remainingMs)}}function je(){var e=k(),t=n.useState(0),r=t[0],u=t[1],a=X(!1);return n.useLayoutEffect(function(){function n(){e&&(u(null==e?void 0:e.scrollY),e.document.body.clientHeight<e.document.body.scrollHeight?a.enable():a.disable())}return null==e||e.addEventListener("scroll",n),function(){return null==e?void 0:e.removeEventListener("scroll",n)}},[]),{actions:{goToTop:function(){e&&e.scrollTo({top:0,left:0,behavior:"smooth"})}},position:{value:r,isInitial:0===r,hasChanged:r>0},visible:a.on,hidden:a.off}}function Re(e){void 0===e&&(e=!0),r(function(){if(e){var n=document.querySelector("html"),t=window.getComputedStyle(n).overflow;return n.style.overflow="hidden",function(){n.style.overflow=t}}},[e])}function Ne(e){var n=new Audio(e);return{play:n.play.bind(n)}}function Ue(e){var n,t=k(),r=null!=(n=new URLSearchParams(null==t?void 0:t.location.search).get(e.name))?n:void 0;return U(d({onUpdate:function(n,r){if(t){var u=new URL(t.location.toString()),a=new URLSearchParams(u.search);void 0===n?a.delete(e.name):a.set(e.name,n),n!==r&&n!==r&&(u.search=a.toString(),history.pushState({},"",u.toString()))}}},e,{defaultQuery:e.defaultQuery,currentQuery:r}))}var _e,He=1;function Be(n){var t=e.useState(_e.initial),r=t[0],u=t[1],a=e.useRef(null),i=D("duration",0),o=D("currentTime",0),l=D("volume",1),c=0===l.value,s=0===i.value?0:Math.round(o.value/i.value*100);function f(e){var n=e.currentTarget;a.current&&(a.current.currentTime=n.valueAsNumber,o.set(n.valueAsNumber))}function d(e){var n=e.currentTarget;a.current&&(a.current.volume=n.valueAsNumber,l.set(n.valueAsNumber))}return{props:{video:{src:n,onTimeUpdate:function(e){o.set(Math.round(e.target.currentTime))},onLoadedMetadata:function(e){var n=e.currentTarget;a.current=n,i.set(Math.round(n.duration)),o.set(n.currentTime),l.set(n.volume),u(_e.ready)},onEnded:function(){u(_e.paused)},controls:!1},player:{min:0,step:1,max:i.value,value:o.value,onInput:f,style:{"--percentage":s+"%"}},volume:{min:0,max:1,step:.01,value:l.value,onInput:d,style:{"--percentage":Math.floor(100*l.value)+"%"}}},actions:{play:function(){a.current&&(a.current.play(),u(_e.playing))},pause:function(){a.current&&(a.current.pause(),u(_e.paused))},mute:function(){a.current&&(a.current.volume=0,l.set(0))},unmute:function(){a.current&&(a.current.volume=1,l.set(1))},reset:function(){a.current&&(a.current.currentTime=0,a.current.pause(),o.set(0),u(_e.paused))},seek:f,changeVolume:d,triggerFullscreen:function(){a.current&&a.current.requestFullscreen()}},meta:{state:r,isInitial:r===_e.initial,isReady:r===_e.ready,isPlaying:r===_e.playing,isPaused:r===_e.paused,matches:function(e){return e.some(function(e){return e===r})},percentage:{raw:s,formatted:s+"%"},currentTime:{raw:o.value,formatted:P.format(o.value)},duration:{raw:i.value,formatted:P.format(i.value)},volume:{value:l.value,raw:Math.floor(100*l.value),formatted:Math.floor(100*l.value)+"%"},muted:c}}}function qe(e){var t=ee(e),r=t.toggle,u=t.rest,a=n.useRef(null);return n.useEffect(function(){var n,t;e.on?null==(n=a.current)||n.showModal():null==(t=a.current)||t.close()},[e.on]),ye({Escape:r.disable}),F({ref:a,condition:e.on}),Re(e.on),R(a,r.disable),n.createElement("dialog",d({ref:a,tabIndex:0,"data-display":e.on?"flex":"none","data-direction":"column","data-mx":"auto","data-p":"24","data-position":"fixed","data-z":"2","data-bg":"white","data-br":"4","data-bc":"gray-300","data-bw":"1","data-backdrop":"black"},u))}function ze(e){return de()?null:n.createElement(n.Fragment,null,e.children)}!function(e){e.initial="initial",e.ready="ready",e.playing="playing",e.paused="paused"}(_e||(_e={}));var We=["as"];function Qe(e){var t=e.as,r=v(e,We);return n.createElement(t||"a",d({target:"_blank",rel:"noreferer noopener"},r))}function Ve(e){return function(){e.forEach(function(e){return e()})}}var Ke={Dimensions:function(e){var t=O();return n.createElement("div",d({"data-fs":"12"},e),t.width," x ",t.height)},Truncates:function(){var e=X(),t=D("length",128),r=n.useState(new Map),u=r[0],a=r[1];return n.createElement("div",{"data-display":"flex","data-cross":"center","data-gap":"6"},n.createElement("label",d({className:"c-label"},t.label.props),"Length"),n.createElement("input",d({className:"c-input",type:"number",value:t.value,onChange:function(e){return t.set(e.currentTarget.valueAsNumber)}},t.input.props)),n.createElement("button",{className:"c-button","data-variant":"bare",type:"button",onClick:Ve([function(){return e=document.querySelectorAll('[data-transform="truncate"]'),n=new Map(u),e.forEach(function(e){var r=e.textContent;n.has(e)?(e.textContent=n.get(e),n.delete(e)):(n.set(e,r),e.textContent="x".repeat(t.value))}),void a(n);var e,n},e.toggle])},e.on?"Hide truncates":"Expand truncates"))}};function Ye(e){var t=A(e),r=t.field;return n.createElement(o,null,n.createElement("input",d({className:"c-switch-checkbox c-visually-hidden",type:"checkbox",checked:r.value,onChange:function(e){return r.set(e.currentTarget.checked)}},r.input.props,t.rest)),n.createElement("label",d({className:"c-switch-label"},r.label.props),n.createElement("div",{className:"c-switch-slider"})))}var Je=function(e){try{var n,t,r=null!=(n=e.onFailure)?n:Ze,u=null!=(t=e.onSuccess)?t:N;navigator.clipboard||r();var a=function(n,t){try{var r=Promise.resolve(navigator.clipboard.writeText(e.text)).then(function(){u()})}catch(e){return t(e)}return r&&r.then?r.then(void 0,t):r}(0,function(e){r(e)});return Promise.resolve(a&&a.then?a.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},Ze=function(e){return console.warn("Copying to clipboard not supported")},$e=/*#__PURE__*/function(){function e(){}return e.datetime=function(e,n){return void 0===n&&(n="N/A"),e?new Date(e).toLocaleString():n},e.monthDay=function(n){var t=new Date(n);return e._padDatePart(t.getDate())+"/"+e._padDatePart(t.getMonth()+1)},e.form=function(n){return n?e._padDatePart(n.getFullYear())+"-"+e._padDatePart(n.getMonth()+1)+"-"+e._padDatePart(n.getDate()):e.form(new Date)},e.clockUTC=function(n){var t=new Date(n);return e._padDatePart(t.getUTCHours())+":"+e._padDatePart(t.getUTCMinutes())+":"+e._padDatePart(t.getUTCSeconds())},e.clockLocal=function(n){var t=new Date(n);return e._padDatePart(t.getHours())+":"+e._padDatePart(t.getMinutes())+":"+e._padDatePart(t.getSeconds())},e.countdown=function(n){var t=new Date(n);return e._padDatePart(t.getHours())+":"+e._padDatePart(t.getMinutes())+":"+e._padDatePart(t.getSeconds())},e.formDatetimeLocal=function(e){var n=e-W((new Date).getTimezoneOffset()).ms;return new Date(n).toISOString().slice(0,16)},e._padDatePart=function(e){return String(e).padStart(2,"0")},e}(),Ge=/*#__PURE__*/function(){function e(){}return e.convertUtcToLocal=function(e){var n=(new Date).getTimezoneOffset(),t=(z(e).minutes-n)/60%24;return{value:t,label:String(t).padStart(2,"0")+":00"}},e}(),Xe=/*#__PURE__*/function(){function e(){}return e.fromRevision=function(e){return{"if-match":String(e)}},e}(),en=/*#__PURE__*/function(){function e(){}return e.fromRevision=function(e){return{"if-match":"W/"+e}},e}(),nn=n.createContext({});function tn(e){return n.createElement(nn.Provider,{value:e.value},e.children)}function rn(){var e=n.useContext(nn);if(void 0===e)throw new Error("useFeatureFlags must be used within the FeatureFlagsContext");return e}function un(e){var t=n.useContext(nn);if(void 0===t)throw new Error("useFeatureFlag must be used within the FeatureFlagsContext");return"yes"===t[e]}var an=/*#__PURE__*/function(){function e(e,n){this.value=void 0;var t=this.getNonEmptyFilters(n),r=new URLSearchParams(t);this.value=""!==r.toString()?e+"?"+r.toString():e}return e.prototype.getNonEmptyFilters=function(e){return void 0===e?{}:Object.fromEntries(Object.entries(e).filter(function(e){return void 0!==e[1]}))},e}(),on=/*#__PURE__*/function(){function e(){}return e.pattern=function(e){var n,t=null==(n=e.required)||n;return e.min&&!e.max?{pattern:".{"+e.min+"}",required:t}:e.min&&e.max?{pattern:".{"+e.min+","+e.max+"}",required:t}:!e.min&&e.max?{pattern:".{,"+e.max+"}",required:t}:{pattern:void 0,required:t}},e}();function ln(){return!k()}function cn(e){return void 0===e&&(e=2),{"data-transform":"line-clamp",style:{"--lines":e}}}var sn=/*#__PURE__*/function(){function e(){}return e.float=function(e,n){return void 0===n&&(n=2),parseFloat(e.toFixed(n))},e}(),fn=/*#__PURE__*/function(){function e(e){var n,t,r,u;this.min=void 0,this.max=void 0,this.lower=void 0,this.upper=void 0;var a=null!=(n=null==(t=e.bound)?void 0:t.lower)?n:0,i=null!=(r=null==(u=e.bound)?void 0:u.upper)?r:1;if(e.max-e.min<0)throw new Error("Invalid MinMaxScaler min-max config");if(i-a<=0)throw new Error("Invalid MinMaxScaler bound config");this.min=e.min,this.max=e.max,this.lower=a,this.upper=i}var n=e.prototype;return n.scale=function(e){var n=this.min,t=this.max,r=this.lower,u=this.upper;if(e<n||e>t)throw new Error("Value out of min/max range");return n===t?{original:e,scaled:(r+u)/2,isMin:e===n,isMax:e===t}:{original:e,scaled:sn.float((e-n)/(t-n)*(u-r)+r,2),isMin:e===n,isMax:e===t}},n.descale=function(e){var n=this.min,t=this.max,r=this.lower,u=this.upper;if(e<r||e>u)throw new Error("Scaled value out of bounds");return{original:sn.float((e-r)/(u-r)*(t-n)+n,2),scaled:e,isLowerBound:e===r,isUpperBound:e===u}},e.getMinMax=function(e){if(0===e.length)throw new Error("An empty array supplied");return{min:Math.min.apply(Math,e),max:Math.max.apply(Math,e)}},e}(),dn=/*#__PURE__*/function(){function e(){}return e.infinite=function(e){var n,t,r;return null!=(n=null==(t=e.data)||null==(r=t.pages)?void 0:r.flat().map(function(e){return e.result}).flat())?n:[]},e}();function vn(e){var t,r=null==(t=e.enabled)||t,u=n.useState(e.initialItems),a=u[0],i=u[1];n.useEffect(function(){return i(e.initialItems)},[JSON.stringify(e.initialItems)]);var o=n.useRef(null),l=n.useState(null),c=l[0],s=l[1],f=n.useState(null),d=f[0],v=f[1];function m(e){return function(n){var t;s(e),o.current=null!=(t=a[e])?t:null,null!=n&&n.dataTransfer&&!n.currentTarget.parentNode&&(n.dataTransfer.effectAllowed="move",n.dataTransfer.setData("text/html",n.currentTarget.parentNode),n.dataTransfer.setDragImage(n.currentTarget.parentNode,20,20))}}function p(e){return function(n){n.preventDefault();var t=a[e];v(e),o.current!==t&&o.current&&i(a.filter(function(e){return e!==o.current}).toSpliced(e,0,o.current))}}function h(n){return function(t){var r;null!==c&&null!==d&&c!==d&&e.callback({correlationId:e.correlationId,id:null==(r=a[n])?void 0:r.id,item:a[n],to:d}),s(null),o.current=null,v(null)}}var g=r?o.current?"grabbing":"grab":"auto";return{items:a,enabled:r,props:{item:function(e){return{onDragOver:p(e)}},handle:function(e){return{onDragStart:m(e),onDragEnd:h(e),draggable:r,style:{cursor:g}}}}}}function mn(e){return void 0===e&&(e=12),{times:function(n){var t=e*n,r={height:{height:pn(t)},minHeight:{minHeight:pn(t)},maxHeight:{maxHeight:pn(t)},width:{width:pn(t)},minWidth:{minWidth:pn(t)},maxWidth:{maxWidth:pn(t)},square:{height:pn(t),width:pn(t)}},u={height:{style:{height:pn(t)}},minHeight:{style:{minHeight:pn(t)}},maxHeight:{style:{maxHeight:pn(t)}},width:{style:{width:pn(t)}},minWidth:{style:{minWidth:pn(t)}},maxWidth:{style:{maxWidth:pn(t)}},square:{style:{height:pn(t),width:pn(t)}}};return d({px:pn(t),raw:t,style:u},r)}}}function pn(e){return e+"px"}dn.empty={result:[],meta:{exhausted:!0}};var hn=/*#__PURE__*/function(){function e(){}return e.updatedAtMostRecent=function(n,t){return e.descending(n.updatedAt.raw,t.updatedAt.raw)},e.updatedAtLeastRecent=function(n,t){return e.ascending(n.updatedAt.raw,t.updatedAt.raw)},e.createdAtMostRecent=function(n,t){return e.descending(n.createdAt.raw,t.createdAt.raw)},e.createdAtLeastRecent=function(n,t){return e.ascending(n.createdAt.raw,t.createdAt.raw)},e.aToZ=function(e,n){return e.localeCompare(n)},e.zToA=function(e,n){return n.localeCompare(e)},e.ascending=function(e,n){return e>n?1:0},e.descending=function(e,n){return e<n?1:0},e}(),gn=/*#__PURE__*/function(){function e(){}return e.format=function(n,t){return void 0===t&&(t=e.DEFAULT_SEPARATOR),n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,t)},e}();gn.DEFAULT_SEPARATOR=" ";var wn=n.createContext(void 0);function yn(e){var t,r,u,a,i=(r=null!=(t=null==e?void 0:e.timeout)?t:5e3,u=Ae({comparisonFn:function(e,n){return e.id===n.id}}),a=u[1],[u[0].toReversed(),{add:function(e){var n=d({},e,{id:String(Date.now())});a.add(n),setTimeout(function(){return a.remove(n)},r)},remove:a.remove,clear:a.clear}]);return n.createElement(wn.Provider,{value:[i[0],i[1]]},e.children)}function bn(){var e=n.useContext(wn);if(void 0===e)throw new Error("useToasts must be used within the ToastsContextProvider");return e}function En(){return bn()[1].add}export{T as API,C as AUDIO_DEFAULT_VOLUME,y as Anima,E as AnimaList,g as AnimaState,sn as Approximation,$e as DateFormatter,q as Days,Ke as DevTools,qe as Dialog,P as DurationFormatter,Xe as ETag,tn as FeatureFlagsContextProvider,an as FilterUrl,on as Form,Ge as HourFormatter,z as Hours,se as KeyNameEnum,cn as LineClamp,fn as MinMaxScaler,W as Minutes,ze as OfflineIndicator,Qe as OutboundLink,dn as Pagination,mn as Rhythm,Ie as SafeLocalStorage,Q as Seconds,S as ServerError,hn as Sorts,Ye as Switch,gn as ThousandsSeparator,V as Time,yn as ToastsContextProvider,xe as TranslationsContextProvider,L as UseAudioState,Z as UseExpandableListState,$ as UseFileState,_e as UseVideoState,He as VIDEO_DEFAULT_VOLUME,en as WeakETag,Je as copyToClipboard,H as defaultSortFn,ve as defaultUseIsVisibleConfig,le as emptyImageResolution,Ve as exec,A as extractUseField,ee as extractUseToggle,b as getAnimaProps,K as getCurrentTimestamp,oe as getImageResolution,k as getSafeWindow,ln as isClient,me as isIntersectionObserverSupported,N as noop,be as pluralize,x as useAnimaList,I as useAudio,F as useAutofocus,j as useBreakpoint,R as useClickOutside,U as useClientFilter,_ as useClientSearch,B as useClientSort,Y as useCurrentTimestamp,J as useDebounce,ne as useDesignMode,te as useDisablePullToRefresh,re as useDocumentTitle,ue as useExpandableList,un as useFeatureFlag,rn as useFeatureFlags,D as useField,ae as useFile,ie as useHover,ce as useImageFileResolution,de as useIsOnline,pe as useIsVisible,ge as useItem,we as useKeyHandler,ye as useKeyboardShortcuts,Te as useLanguage,Me as useLanguageSelector,De as useLeavingPrompt,Ae as useList,Le as useMetaEnterSubmit,Ce as usePagination,Fe as usePersistentToggle,Pe as usePluralize,h as usePreviousValue,Oe as useRateLimiter,vn as useReordering,je as useScroll,Re as useScrollLock,Ne as useSound,En as useToastTrigger,bn as useToastsContext,X as useToggle,Se as useTranslations,Ue as useUrlFilter,Be as useVideo,O as useWindowDimensions};
//# sourceMappingURL=bgord-frontend.module.js.map
