import*as e from"react";import n,{useRef as t,useEffect as r,useState as u,useLayoutEffect as a,useMemo as i}from"react";import o from"tinykeys";import l from"js-cookie";import{polishPlurals as c}from"polish-plurals";import*as s from"ts-storage";function f(){return f=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},f.apply(this,arguments)}function d(e,n){if(null==e)return{};var t,r,u={},a=Object.keys(e);for(r=0;r<a.length;r++)n.indexOf(t=a[r])>=0||(u[t]=e[t]);return u}function v(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function m(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return v(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?v(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(e,n){var u=t(n);return r(function(){u.current=e}),u.current}var h,g=["children"];function w(e){var t,r=null!=(t=e.duration)?t:300,u=n.useState(function(){return e.visible?e.isInitial?h.appeared:h.appearing:h.hidden}),a=u[0],i=u[1],o=p(a);return n.useEffect(function(){if(!e.isInitial)if(e.visible)i(h.appearing),setTimeout(function(){return i(h.appeared)},100);else{if(!o)return;i(h.hiding),setTimeout(function(){return i(h.hidden)},r)}},[e.visible]),a===h.hidden?null:n.cloneElement(e.children,{"data-anima":a,"data-anima-effect":e.effect,style:f({"--duration":r+"ms"},e.children.props.style)})}function y(e){return{"data-anima":e["data-anima"],"data-anima-effect":e["data-anima-effect"],style:e.style}}function b(e){var t=d(e,g),r=n.useState(!0),u=r[0],a=r[1];return n.useEffect(function(){return a(!1)},[]),n.createElement("ul",f({},t),e.children.map(function(e){return n.cloneElement(e,{isInitial:u})}))}function E(e,t){for(var r,u,a=null!=(r=null==t?void 0:t.direction)?r:"head",i=n.useState(e.map(function(e){return{item:e,props:{visible:!0}}})),o=i[0],l=i[1],c=[],s=function(){var e=u.value;!o.map(function(e){return e.item}).some(function(n){return e.id===n.id})&&c.push(e)},d=m(e);!(u=d()).done;)s();n.useEffect(function(){0!==c.length&&(l("head"===a?function(e){return[].concat(c.map(function(e){return{item:e,props:{visible:!0}}}),e)}:function(e){return[].concat(e,c.map(function(e){return{item:e,props:{visible:!0}}}))}),c=[])},[c.length,a]);for(var v,p=[],h=function(){var n=v.value.item;e.every(function(e){return e.id!==n.id})&&p.push(n)},g=m(o);!(v=g()).done;)h();return n.useEffect(function(){0!==p.length&&(l(function(e){return e.map(function(e){return p.some(function(n){return n.id===e.item.id})?f({},e,{props:{visible:!1}}):e})}),p=[])},[p.length]),{items:o.map(function(n){var t=e.find(function(e){return e.id===n.item.id});return t?f({},n,{item:t}):n}),count:o.filter(function(e){return e.props.visible}).length}}!function(e){e.appearing="appearing",e.appeared="appeared",e.hiding="hiding",e.hidden="hidden"}(h||(h={}));var x=/*#__PURE__*/function(){function e(e){this.message=void 0,this._known=!0,this.message=e.message}return e.isServerError=function(e){return!!(e&&"object"==typeof e&&e===Object(e)&&e.hasOwnProperty("_known")&&e.hasOwnProperty("message"))},e.extract=function(n){try{return n.ok?Promise.resolve(n):Promise.resolve(n.json()).then(function(n){var t=e.isServerError(n)?n.message:"app.error.general";throw new e({message:t})})}catch(e){return Promise.reject(e)}},e.handle=function(n){try{throw new e({message:e.isServerError(n)?n.message:"app.error.general"})}catch(e){return Promise.reject(e)}},e}(),S=function(e,n){return fetch(e,f({mode:"same-origin",headers:{"Content-Type":"application/json","time-zone-offset":(new Date).getTimezoneOffset().toString()},redirect:"follow"},n)).then(x.extract).catch(x.handle)},T=/*#__PURE__*/function(){function e(){}return e.format=function(e){var n=Math.floor(e/60),t=e%60;return String(n).padStart(2,"0")+":"+String(t).padStart(2,"0")},e}();function P(e,n){var t="function"==typeof n?n():n,a=u(t),i=a[0],o=a[1];return r(function(){return o(t)},[t]),{value:i,set:o,clear:function(){o(t)},label:{props:{htmlFor:e}},input:{props:{id:e,name:e}},changed:i!==t,unchanged:i==t}}var M,D=1;function I(n){var t=e.useState(M.initial),r=t[0],u=t[1],a=e.useRef(null),i=P("duration",0),o=P("currentTime",0),l=P("volume",1),c=0===l.value,s=0===i.value?0:Math.round(o.value/i.value*100);function f(e){var n=e.currentTarget;a.current&&(a.current.currentTime=n.valueAsNumber,o.set(n.valueAsNumber))}function d(e){var n=e.currentTarget;a.current&&(a.current.volume=n.valueAsNumber,l.set(n.valueAsNumber))}return{props:{audio:{src:n,onTimeUpdate:function(e){o.set(Math.round(e.target.currentTime))},onLoadedMetadata:function(e){var n=e.currentTarget;a.current=n,i.set(Math.round(n.duration)),o.set(n.currentTime),l.set(n.volume),u(M.ready)},onEnded:function(){u(M.paused)},controls:!1},player:{min:0,step:1,max:i.value,value:o.value,onInput:f,style:{"--percentage":s+"%"}},volume:{min:0,max:1,step:.01,value:l.value,onInput:d,style:{"--percentage":Math.floor(100*l.value)+"%"}}},actions:{play:function(){a.current&&(a.current.play(),u(M.playing))},pause:function(){a.current&&(a.current.pause(),u(M.paused))},mute:function(){a.current&&(a.current.volume=0,l.set(0))},unmute:function(){a.current&&(a.current.volume=1,l.set(1))},reset:function(){a.current&&(a.current.currentTime=0,a.current.pause(),o.set(0),u(M.paused))},seek:f,changeVolume:d},meta:{state:r,isInitial:r===M.initial,isReady:r===M.ready,isPlaying:r===M.playing,isPaused:r===M.paused,matches:function(e){return e.some(function(e){return e===r})},percentage:{raw:s,formatted:s+"%"},currentTime:{raw:o.value,formatted:T.format(o.value)},duration:{raw:i.value,formatted:T.format(i.value)},volume:{value:l.value,raw:Math.floor(100*l.value),formatted:Math.floor(100*l.value)+"%"},muted:c}}}function L(e){n.useEffect(function(){var n;e.condition&&(null==(n=e.ref.current)||n.focus())},[e.condition])}function F(){if("undefined"!=typeof window)return window}function C(){var e=u({width:void 0,height:void 0}),n=e[0],t=e[1];return r(function(){var e=F();if(e)return e.addEventListener("resize",n),n(),function(){return e.removeEventListener("resize",n)};function n(){t({width:null==e?void 0:e.innerWidth,height:null==e?void 0:e.innerHeight})}},[]),n}function O(e){var n,t=C();return(null!=(n=null==t?void 0:t.width)?n:0)<=e}function A(e,t,r){n.useEffect(function(){if(e.current)return document.addEventListener("mousedown",n),function(){return document.removeEventListener("mousedown",n)};function n(n){var u;null!=(u=e.current)&&u.contains(n.target)||(null==r?void 0:r.some(function(e){var t;return null==(t=e.current)?void 0:t.contains(n.target)}))||t()}},[t,e,r])}function k(){var e=u(""),n=e[0],t=e[1];return{query:n,clear:function(){t("")},onChange:function(e){t(e.currentTarget.value)},filterFn:function(e){return""===n||(null==e?void 0:e.toLowerCase().includes(n.toLowerCase()))},changed:""!==n,unchanged:""===n}}function j(e){return{value:e,hours:24*e,minutes:24*e*60,seconds:24*e*60*60,ms:24*e*60*60*1e3}}function U(e){return{value:e,minutes:60*e,seconds:60*e*60,ms:60*e*60*1e3}}function _(e){return{value:e,seconds:60*e,ms:60*e*1e3}}function N(e){return{value:e,ms:1e3*e}}!function(e){e.initial="initial",e.ready="ready",e.playing="playing",e.paused="paused"}(M||(M={}));var R,H,B={Days:j,Hours:U,Minutes:_,Seconds:N};function z(){return Date.now()}function W(){var e=u(z),n=e[0],t=e[1];return r(function(){var e=setInterval(function(){return t(z())},B.Seconds(1).ms);return function(){return clearInterval(e)}},[]),n}function q(e){var t=n.useState(e.value),r=t[0],u=t[1];return n.useEffect(function(){var n=setTimeout(function(){return u(e.value)},e.delayMs);return function(){return clearTimeout(n)}},[e.value,e.delayMs]),r}function Q(e){void 0===e&&(e=!1);var n=u(e),t=n[0],r=n[1];return{on:t,off:!t,enable:function(){return r(!0)},disable:function(){return r(!1)},toggle:function(){return r(function(e){return!e})}}}function V(e){var n=Q(e),t=F();return r(function(){t&&(t.document.designMode=n.on?"on":"off")},[n.on]),n}function Y(e){void 0===e&&(e=!0),a(function(){if(e){var n=document.querySelector("html"),t=document.body,r=window.getComputedStyle(n).overscrollBehavior,u=window.getComputedStyle(t).overscrollBehavior;return t.style.overscrollBehavior="none",n.style.overscrollBehavior="none",function(){t.style.overscrollBehavior=u,n.style.overscrollBehavior=r}}},[e])}function J(e){n.useEffect(function(){document.title=e},[e])}function $(e){var n=e.length-e.max,t=e.length>e.max;function a(){return t?R.contracted:R.expanded}var i=u(a),o=i[0],l=i[1];return r(function(){return l(a())},[e.length,e.max]),{state:o,displayShowMore:o===R.contracted,displayShowLess:o===R.expanded&&t,actions:{showMore:function(){o===R.contracted&&l(R.expanded)},showLess:function(){o===R.expanded&&l(R.contracted)}},numberOfExcessiveElements:n,filterFn:function(n,t){return o===R.expanded||t<e.max}}}function G(e,n){var t,r=null!=(t=null==n?void 0:n.maxSize)?t:Infinity,a=u(0),o=a[0],l=a[1],c=u(H.idle),s=c[0],f=c[1],d=u(null),v=d[0],m=d[1];function p(e){var n=e.currentTarget.files;if(n&&n[0]){var t=n[0];if(!(t.size>r))return m(t),f(H.selected),t;f(H.error)}}function h(){l(function(e){return e+1}),m(null),f(H.idle)}var g=i(function(){return v?URL.createObjectURL(v):void 0},[v]);function w(e){return e.some(function(e){return e===s})}return s===H.idle?{state:s,matches:w,isIdle:!0,isSelected:!1,isError:!1,data:null,actions:{selectFile:p,clearFile:h},label:{props:{htmlFor:e}},input:{props:{id:e,name:e,multiple:!1,key:o}}}:s===H.selected?{state:s,matches:w,data:v,isIdle:!1,isSelected:!0,isError:!1,actions:{selectFile:p,clearFile:h},preview:g,label:{props:{htmlFor:e}},input:{props:{id:e,name:e,multiple:!1,key:o}}}:{state:s,matches:w,data:null,isIdle:!1,isSelected:!1,isError:!0,actions:{selectFile:p,clearFile:h},label:{props:{htmlFor:e}},input:{props:{id:e,name:e,multiple:!1,key:o}}}}function K(){}function X(e){var n,t,a,i,o=null!=(n=e.defaultQuery)?n:void 0,l=null!=(t=e.currentQuery)?t:void 0,c=null!=(a=e.filterFn)?a:function(e){return void 0===v||v===String(e)},s=Object.keys(e.enum),f=null!=(i=null==e?void 0:e.onUpdate)?i:K,d=u(null!=l?l:o),v=d[0],m=d[1],h=p(v);return r(function(){f(v,h)},[h,v]),{query:v,clear:function(){m(o)},onChange:function(n){var t=n.currentTarget.value,r=Boolean(e.enum[String(t)]);m(r?t:void 0)},filterFn:c,options:s,onUpdate:f,name:e.name,changed:v!==o,unchanged:v===o,label:{props:{htmlFor:e.name}},input:{props:{id:e.name,name:e.name}}}}function Z(e){var t,r=null==(t=null==e?void 0:e.enabled)||t,u=n.useRef(null),a=Q(!1),i=a.enable,o=a.disable;return n.useEffect(function(){var e=u.current;return e&&r&&(e.addEventListener("mouseenter",i),e.addEventListener("mouseleave",o)),function(){e&&r&&(e.removeEventListener("mouseenter",i),e.removeEventListener("mouseleave",o))}},[]),{attach:{ref:u},isHovering:a.on&&r}}!function(e){e.contracted="contracted",e.expanded="expanded"}(R||(R={})),function(e){e.idle="idle",e.selected="selected",e.error="error"}(H||(H={}));var ee=function(e){try{if(!e)return Promise.resolve(ne);var n=document.createElement("img"),t=new Promise(function(e,t){n.onload=function(){return e({width:n.width,height:n.height})},n.onerror=t});return n.src=e,Promise.resolve(t)}catch(e){return Promise.reject(e)}},ne={width:null,height:null};function te(n){var t,r=P("resolution",ne);return e.useEffect(function(){!function(){try{var e,t=function(t){if(e)return t;[H.error,H.idle].includes(n.state)&&null!==r.value.width&&null!==r.value.height&&r.clear()},u=function(){if(n.state===H.selected)return function(t,u){try{var a=Promise.resolve(ee(n.preview)).then(function(n){var t=r.set(n);return e=1,t})}catch(e){return u()}return a&&a.then?a.then(void 0,u):a}(0,function(){var n=r.clear();return e=1,n})}();Promise.resolve(u&&u.then?u.then(t):t(u))}catch(e){return Promise.reject(e)}}()},[n.state,null==(t=n.data)?void 0:t.name]),r.value}var re,ue,ae=function(){var e=Q("undefined"==typeof navigator||"boolean"!=typeof navigator.onLine||navigator.onLine);return n.useEffect(function(){function n(){e.enable()}function t(){e.disable()}return window.addEventListener("online",n),window.addEventListener("offline",t),function(){window.removeEventListener("online",n),window.removeEventListener("offline",t)}},[]),e.on},ie={threshold:0,root:null,rootMargin:"0%",ref:{current:null}};function oe(){return"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype}function le(e){void 0===e&&(e=ie);var n=u(!1),t=n[0],a=n[1];return r(function(){var n=e.ref.current;if(oe()&&n){var t=new IntersectionObserver(function(e){var n;return a(Boolean(null==(n=e[0])?void 0:n.isIntersecting))},e);return t.observe(n),function(){return t.unobserve(n)}}},[]),t}function ce(e,n){return e===n}function se(e){var n,t,r=null!=(n=null==e?void 0:e.comparisonFn)?n:ce,a=u(null!=(t=null==e?void 0:e.defaultItem)?t:null),i=a[0],o=a[1];return{clear:function(){return o(null)},set:function(e){return o(e)},toggle:function(e){return o(function(n){return null===n?e:r(n,e)?null:e})},value:i,isDefault:r(i,null),exists:!r(i,null),compare:function(e){return r(i,e)}}}function fe(e){var n=Object.keys(e);return function(t){var r=t.key,u=e[r];n.includes(t.key)&&e[r]&&u&&u()}}function de(e){n.useEffect(function(){var n=o(window,e);return function(){return n()}},[e])}function ve(e){if(e.language===ue.en){var n,t=null!=(n=e.plural)?n:e.singular+"s";return 1===e.value?e.singular:t}if(e.language===ue.pl){var r,u=null!=(r=e.value)?r:1;return 1===u?e.singular:c(e.singular,String(e.plural),String(e.genitive),u)}return console.warn("[@bgord/frontend] missing pluralization function for language "+e.language+"."),e.singular}!function(e){e.Enter="Enter",e.Space=" "}(re||(re={})),function(e){e.en="en",e.pl="pl"}(ue||(ue={}));var me=n.createContext({translations:{},language:"en"});function pe(e){return n.createElement(me.Provider,{value:e.value},e.children)}function he(){var e=n.useContext(me);if(void 0===e)throw new Error("useTranslations must be used within the TranslationsContext");return function(n,t){var r=e.translations[n];return r?t?Object.entries(t).reduce(function(e,n){return e.replace("{{"+n[0]+"}}",String(n[1]))},r):r:(console.warn("[@bgord/frontend] missing translation for key: "+n),n)}}function ge(){var e=n.useContext(me);if(void 0===e)throw new Error("useLanguage must be used within the TranslationsContext");return e.language}function we(){var e=ge();return function(n){return ve(f({},n,{language:e}))}}function ye(e){return X({enum:e,currentQuery:ge(),name:"language",onUpdate:function(e,n){var t=F();t&&e&&n&&n!==e&&(l.set("accept-language",e),t.document.location.reload())}})}function be(e){void 0===e&&(e=!1),n.useEffect(function(){if(e)return window.addEventListener("beforeunload",n),function(){return window.removeEventListener("beforeunload",n)};function n(e){e.preventDefault()}},[e])}function Ee(e){var n,t,r=null!=(n=null==e?void 0:e.defaultItems)?n:[],a=null!=(t=null==e?void 0:e.comparisonFn)?t:function(e,n){return e===n},i=u(r),o=i[0],l=i[1];function c(e){l(function(n){return Array.isArray(e)?[].concat(n,e):[].concat(n,[e])})}function s(e){l(function(n){return n.filter(function(n){return!a(n,e)})})}function f(e){return o.some(function(n){return a(n,e)})}return[o,{clear:function(){l([])},add:c,remove:s,toggle:function(e){f(e)?s(e):c(e)},isAdded:f,update:l}]}function xe(){var e,n,t,r=P("meta",null),u=null==(e=r.value)?void 0:e.previousPage,a=null==(n=r.value)?void 0:n.nextPage,i=null==(t=r.value)?void 0:t.lastPage,o=P("page",1);return{current:o.value,last:i,controls:{firstPage:{active:!u,disabled:!1,exists:!0,go:function(){return o.set(1)},value:1},previousPage:{active:!1,disabled:!u,exists:Boolean(u),go:function(){return o.set(null!=u?u:o.value)},value:u},nextPage:{active:!1,disabled:!a,exists:Boolean(a),go:function(){return o.set(null!=a?a:o.value)},value:a},lastPage:{active:o.value===i,disabled:!a,exists:!0,go:function(){return o.set(null!=i?i:o.value)},value:i}},update:function(e){return r.set(e)}}}var Se=/*#__PURE__*/function(){function e(){}return e.get=function(e,n){return s.get(e,n).value},e.set=function(e,n){s.set(e,n)},e.clear=function(e){s.remove(e)},e}();function Te(n,t){void 0===t&&(t=!1);var r=Q(Se.get(n,t));return e.useEffect(function(){return Se.set(n,r.on)},[n,r.on]),f({},r,{clear:function(){return Se.clear(n)}})}var Pe=/*#__PURE__*/function(){function e(e){this.lastInvocationTimestamp=null,this.options=void 0,this.options=e}return e.prototype.verify=function(e){if(!this.lastInvocationTimestamp)return this.lastInvocationTimestamp=e,{allowed:!0};var n=this.lastInvocationTimestamp+this.options.limitMs;return n<=e?(this.lastInvocationTimestamp=e,{allowed:!0}):{allowed:!1,remainingMs:n-e}},e}();function Me(e){var n=t(new Pe(e));return function(){var t=Date.now(),r=n.current.verify(t);return r.allowed?e.action.apply(e,[].slice.call(arguments)):null==e.fallback?void 0:e.fallback(r.remainingMs)}}function De(){var e=F(),t=n.useState(0),r=t[0],u=t[1],a=Q(!1);return n.useLayoutEffect(function(){function n(){e&&(u(null==e?void 0:e.scrollY),e.document.body.clientHeight<e.document.body.scrollHeight?a.enable():a.disable())}return null==e||e.addEventListener("scroll",n),function(){return null==e?void 0:e.removeEventListener("scroll",n)}},[]),{actions:{goToTop:function(){e&&e.scrollTo({top:0,left:0,behavior:"smooth"})}},position:{value:r,isInitial:0===r,hasChanged:r>0},visible:a.on,hidden:a.off}}function Ie(e){void 0===e&&(e=!0),a(function(){if(e){var n=document.querySelector("html"),t=document.body,r=window.getComputedStyle(t).overflow,u=window.getComputedStyle(n).overflow;return t.style.overflow="hidden",n.style.overflow="hidden",function(){t.style.overflow=r,n.style.overflow=u}}},[e])}function Le(e){var n=new Audio(e);return{play:n.play.bind(n)}}function Fe(e){var n,t=F(),r=null!=(n=new URLSearchParams(null==t?void 0:t.location.search).get(e.name))?n:void 0;return X(f({onUpdate:function(n,r){if(t){var u=new URL(t.location.toString()),a=new URLSearchParams(u.search);void 0===n?a.delete(e.name):a.set(e.name,n),n!==r&&n!==r&&(u.search=a.toString(),history.pushState({},"",u.toString()))}}},e,{defaultQuery:e.defaultQuery,currentQuery:r}))}var Ce,Oe=1;function Ae(n){var t=e.useState(Ce.initial),r=t[0],u=t[1],a=e.useRef(null),i=P("duration",0),o=P("currentTime",0),l=P("volume",1),c=0===l.value,s=0===i.value?0:Math.round(o.value/i.value*100);function f(e){var n=e.currentTarget;a.current&&(a.current.currentTime=n.valueAsNumber,o.set(n.valueAsNumber))}function d(e){var n=e.currentTarget;a.current&&(a.current.volume=n.valueAsNumber,l.set(n.valueAsNumber))}return{props:{video:{src:n,onTimeUpdate:function(e){o.set(Math.round(e.target.currentTime))},onLoadedMetadata:function(e){var n=e.currentTarget;a.current=n,i.set(Math.round(n.duration)),o.set(n.currentTime),l.set(n.volume),u(Ce.ready)},onEnded:function(){u(Ce.paused)},controls:!1},player:{min:0,step:1,max:i.value,value:o.value,onInput:f,style:{"--percentage":s+"%"}},volume:{min:0,max:1,step:.01,value:l.value,onInput:d,style:{"--percentage":Math.floor(100*l.value)+"%"}}},actions:{play:function(){a.current&&(a.current.play(),u(Ce.playing))},pause:function(){a.current&&(a.current.pause(),u(Ce.paused))},mute:function(){a.current&&(a.current.volume=0,l.set(0))},unmute:function(){a.current&&(a.current.volume=1,l.set(1))},reset:function(){a.current&&(a.current.currentTime=0,a.current.pause(),o.set(0),u(Ce.paused))},seek:f,changeVolume:d,triggerFullscreen:function(){a.current&&a.current.requestFullscreen()}},meta:{state:r,isInitial:r===Ce.initial,isReady:r===Ce.ready,isPlaying:r===Ce.playing,isPaused:r===Ce.paused,matches:function(e){return e.some(function(e){return e===r})},percentage:{raw:s,formatted:s+"%"},currentTime:{raw:o.value,formatted:T.format(o.value)},duration:{raw:i.value,formatted:T.format(i.value)},volume:{value:l.value,raw:Math.floor(100*l.value),formatted:Math.floor(100*l.value)+"%"},muted:c}}}!function(e){e.initial="initial",e.ready="ready",e.playing="playing",e.paused="paused"}(Ce||(Ce={}));var ke=["disable","enable","on","off","toggle"];function je(e){var t=e.disable,r=d(e,ke),u=n.useRef(null);return n.useEffect(function(){var n,t;e.on?null==(n=u.current)||n.showModal():null==(t=u.current)||t.close()},[e.on]),de({Escape:t}),L({ref:u,condition:e.on}),Ie(e.on),A(u,t),n.createElement("dialog",f({ref:u,tabIndex:0,"data-display":e.on?"flex":"none","data-direction":"column","data-mx":"auto","data-p":"24","data-position":"absolute","data-z":"2","data-bg":"white","data-br":"4","data-bc":"gray-300","data-bw":"1","data-backdrop":"black"},r))}function Ue(e){return ae()?null:n.createElement(n.Fragment,null,e.children)}var _e=["as"];function Ne(e){var t=e.as,r=d(e,_e);return n.createElement(t||"a",f({target:"_blank",rel:"noreferer noopener"},r))}function Re(e){return function(){e.forEach(function(e){return e()})}}var He={Dimensions:function(e){var t=C();return n.createElement("div",f({"data-fs":"12"},e),t.width," x ",t.height)},Truncates:function(){var e=Q(),t=P("length",128),r=n.useState(new Map),u=r[0],a=r[1];return n.createElement("div",{"data-display":"flex","data-cross":"center","data-gap":"6"},n.createElement("label",f({className:"c-label"},t.label.props),"Length"),n.createElement("input",f({className:"c-input",type:"number",value:t.value,onChange:function(e){return t.set(e.currentTarget.valueAsNumber)}},t.input.props)),n.createElement("button",{className:"c-button","data-variant":"bare",type:"button",onClick:Re([function(){return e=document.querySelectorAll('[data-transform="truncate"]'),n=new Map(u),e.forEach(function(e){var r=e.textContent;n.has(e)?(e.textContent=n.get(e),n.delete(e)):(n.set(e,r),e.textContent="x".repeat(t.value))}),void a(n);var e,n},e.toggle])},e.on?"Hide truncates":"Expand truncates"))}},Be=function(e){try{var n,t,r=null!=(n=e.onFailure)?n:ze,u=null!=(t=e.onSuccess)?t:K;navigator.clipboard||r();var a=function(n,t){try{var r=Promise.resolve(navigator.clipboard.writeText(e.text)).then(function(){u()})}catch(e){return t(e)}return r&&r.then?r.then(void 0,t):r}(0,function(e){r(e)});return Promise.resolve(a&&a.then?a.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},ze=function(e){return console.warn("Copying to clipboard not supported")},We=/*#__PURE__*/function(){function e(){}return e.datetime=function(e,n){return void 0===n&&(n="N/A"),e?new Date(e).toLocaleString():n},e.monthDay=function(n){var t=new Date(n),r=e._padDatePart(t.getDate());return e._padDatePart(t.getMonth()+1)+"/"+r},e.form=function(n){return n?e._padDatePart(n.getFullYear())+"-"+e._padDatePart(n.getMonth()+1)+"-"+e._padDatePart(n.getDate()):e.form(new Date)},e.clockUTC=function(n){var t=new Date(n);return e._padDatePart(t.getUTCHours())+":"+e._padDatePart(t.getUTCMinutes())+":"+e._padDatePart(t.getUTCSeconds())},e.clockLocal=function(n){var t=new Date(n);return e._padDatePart(t.getHours())+":"+e._padDatePart(t.getMinutes())+":"+e._padDatePart(t.getSeconds())},e.countdown=function(n){var t=new Date(n);return e._padDatePart(t.getHours())+":"+e._padDatePart(t.getMinutes())+":"+e._padDatePart(t.getSeconds())},e.formDatetimeLocal=function(e){var n=e-_((new Date).getTimezoneOffset()).ms;return new Date(n).toISOString().slice(0,16)},e._padDatePart=function(e){return String(e).padStart(2,"0")},e}(),qe=/*#__PURE__*/function(){function e(){}return e.convertUtcToLocal=function(e){var n=(new Date).getTimezoneOffset(),t=(U(e).minutes-n)/60%24;return{value:t,label:String(t).padStart(2,"0")+":00"}},e}(),Qe=n.createContext({});function Ve(e){return n.createElement(Qe.Provider,{value:e.value},e.children)}function Ye(){var e=n.useContext(Qe);if(void 0===e)throw new Error("useFeatureFlags must be used within the FeatureFlagsContext");return e}function Je(e){var t=n.useContext(Qe);if(void 0===t)throw new Error("useFeatureFlag must be used within the FeatureFlagsContext");return"yes"===t[e]}var $e=/*#__PURE__*/function(){function e(e,n){this.value=void 0;var t=this.getNonEmptyFilters(n),r=new URLSearchParams(t);this.value=""!==r.toString()?e+"?"+r.toString():e}return e.prototype.getNonEmptyFilters=function(e){return void 0===e?{}:Object.fromEntries(Object.entries(e).filter(function(e){return void 0!==e[1]}))},e}();function Ge(){return!F()}var Ke=/*#__PURE__*/function(){function e(){}return e.float=function(e,n){return void 0===n&&(n=2),parseFloat(e.toFixed(n))},e}(),Xe=/*#__PURE__*/function(){function e(e){var n,t,r,u;this.min=void 0,this.max=void 0,this.lower=void 0,this.upper=void 0;var a=null!=(n=null==(t=e.bound)?void 0:t.lower)?n:0,i=null!=(r=null==(u=e.bound)?void 0:u.upper)?r:1;if(e.max-e.min<0)throw new Error("Invalid MinMaxScaler min-max config");if(i-a<=0)throw new Error("Invalid MinMaxScaler bound config");this.min=e.min,this.max=e.max,this.lower=a,this.upper=i}var n=e.prototype;return n.scale=function(e){var n=this.min,t=this.max,r=this.lower,u=this.upper;if(e<n||e>t)throw new Error("Value out of min/max range");return n===t?{original:e,scaled:(r+u)/2,isMin:e===n,isMax:e===t}:{original:e,scaled:Ke.float((e-n)/(t-n)*(u-r)+r,2),isMin:e===n,isMax:e===t}},n.descale=function(e){var n=this.min,t=this.max,r=this.lower,u=this.upper;if(e<r||e>u)throw new Error("Scaled value out of bounds");return{original:Ke.float((e-r)/(u-r)*(t-n)+n,2),scaled:e,isLowerBound:e===r,isUpperBound:e===u}},e.getMinMax=function(e){if(0===e.length)throw new Error("An empty array supplied");return{min:Math.min.apply(Math,e),max:Math.max.apply(Math,e)}},e}(),Ze=/*#__PURE__*/function(){function e(){}return e.infinite=function(e){var n,t,r;return null!=(n=null==(t=e.data)||null==(r=t.pages)?void 0:r.flat().map(function(e){return e.result}).flat())?n:[]},e}();function en(e){var t,r=null==(t=e.enabled)||t,u=n.useState(e.initialItems),a=u[0],i=u[1];n.useEffect(function(){return i(e.initialItems)},[JSON.stringify(e.initialItems)]);var o=n.useRef(null),l=n.useState(null),c=l[0],s=l[1],f=n.useState(null),d=f[0],v=f[1];function m(e){return function(n){var t;s(e),o.current=null!=(t=a[e])?t:null,null!=n&&n.dataTransfer&&!n.currentTarget.parentNode&&(n.dataTransfer.effectAllowed="move",n.dataTransfer.setData("text/html",n.currentTarget.parentNode),n.dataTransfer.setDragImage(n.currentTarget.parentNode,20,20))}}function p(e){return function(n){n.preventDefault();var t=a[e];if(v(e),o.current!==t&&o.current){var r=a.filter(function(e){return e!==o.current});r.splice(e,0,o.current),i(r)}}}function h(n){return function(t){var r;null!==c&&null!==d&&c!==d&&e.callback({correlationId:e.correlationId,id:null==(r=a[n])?void 0:r.id,item:a[n],to:d}),s(null),o.current=null,v(null)}}var g=r?o.current?"grabbing":"grab":"auto";return{items:a,enabled:r,props:{item:function(e){return{onDragOver:p(e)}},handle:function(e){return{onDragStart:m(e),onDragEnd:h(e),draggable:r,style:{cursor:g}}}}}}function nn(e){return void 0===e&&(e=12),{times:function(n){var t=e*n,r={height:{height:tn(t)},minHeight:{minHeight:tn(t)},maxHeight:{maxHeight:tn(t)},width:{width:tn(t)},minWidth:{minWidth:tn(t)},maxWidth:{maxWidth:tn(t)},square:{height:tn(t),width:tn(t)}},u={height:{style:{height:tn(t)}},minHeight:{style:{minHeight:tn(t)}},maxHeight:{style:{maxHeight:tn(t)}},width:{style:{width:tn(t)}},minWidth:{style:{minWidth:tn(t)}},maxWidth:{style:{maxWidth:tn(t)}},square:{style:{height:tn(t),width:tn(t)}}};return f({px:tn(t),raw:t,style:u},r)}}}function tn(e){return e+"px"}Ze.empty={result:[],meta:{exhausted:!0}};var rn=/*#__PURE__*/function(){function e(){}return e.format=function(n,t){return void 0===t&&(t=e.DEFAULT_SEPARATOR),n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,t)},e}();rn.DEFAULT_SEPARATOR=" ";var un=n.createContext(void 0);function an(e){var t,r,u,a,i=(r=null!=(t=null==e?void 0:e.timeout)?t:5e3,u=Ee({comparisonFn:function(e,n){return e.id===n.id}}),a=u[1],[[].concat(u[0]).reverse(),{add:function(e){var n=f({},e,{id:String(Date.now())});a.add(n),setTimeout(function(){return a.remove(n)},r)},remove:a.remove,clear:a.clear}]);return n.createElement(un.Provider,{value:[i[0],i[1]]},e.children)}function on(){var e=n.useContext(un);if(void 0===e)throw new Error("useToasts must be used within the ToastsContextProvider");return e}function ln(){return on()[1].add}export{S as API,D as AUDIO_DEFAULT_VOLUME,w as Anima,b as AnimaList,h as AnimaState,Ke as Approximation,We as DateFormatter,j as Days,He as DevTools,je as Dialog,T as DurationFormatter,Ve as FeatureFlagsContextProvider,$e as FilterUrl,qe as HourFormatter,U as Hours,re as KeyNameEnum,Xe as MinMaxScaler,_ as Minutes,Ue as OfflineIndicator,Ne as OutboundLink,Ze as Pagination,nn as Rhythm,Se as SafeLocalStorage,N as Seconds,x as ServerError,rn as ThousandsSeparator,B as Time,an as ToastsContextProvider,pe as TranslationsContextProvider,M as UseAudioState,R as UseExpandableListState,H as UseFileState,Ce as UseVideoState,Oe as VIDEO_DEFAULT_VOLUME,Be as copyToClipboard,ie as defaultUseIsVisibleConfig,ne as emptyImageResolution,Re as exec,y as getAnimaProps,z as getCurrentTimestamp,ee as getImageResolution,F as getSafeWindow,Ge as isClient,oe as isIntersectionObserverSupported,K as noop,ve as pluralize,E as useAnimaList,I as useAudio,L as useAutofocus,O as useBreakpoint,A as useClickOutside,k as useClientSearch,W as useCurrentTimestamp,q as useDebounce,V as useDesignMode,Y as useDisablePullToRefresh,J as useDocumentTitle,$ as useExpandableList,Je as useFeatureFlag,Ye as useFeatureFlags,P as useField,G as useFile,X as useFilter,Z as useHover,te as useImageFileResolution,ae as useIsOnline,le as useIsVisible,se as useItem,fe as useKeyHandler,de as useKeyboardShortcuts,ge as useLanguage,ye as useLanguageSelector,be as useLeavingPrompt,Ee as useList,xe as usePagination,Te as usePersistentToggle,we as usePluralize,p as usePreviousValue,Me as useRateLimiter,en as useReordering,De as useScroll,Ie as useScrollLock,Le as useSound,ln as useToastTrigger,on as useToastsContext,Q as useToggle,he as useTranslations,Fe as useUrlFilter,Ae as useVideo,C as useWindowDimensions};
//# sourceMappingURL=bgord-frontend.module.js.map
