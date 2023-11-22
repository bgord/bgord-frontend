import*as e from"react";import n,{useRef as t,useEffect as r,useState as u,useLayoutEffect as i,useMemo as a}from"react";import o from"tinykeys";import l from"js-cookie";import{polishPlurals as c}from"polish-plurals";import*as s from"ts-storage";function f(){return f=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},f.apply(this,arguments)}function d(e,n){if(null==e)return{};var t,r,u={},i=Object.keys(e);for(r=0;r<i.length;r++)n.indexOf(t=i[r])>=0||(u[t]=e[t]);return u}function v(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function m(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return v(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?v(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(e,n){var u=t(n);return r(function(){u.current=e}),u.current}var h,g=["children"];function y(e){var t,r=null!=(t=e.duration)?t:300,u=n.useState(function(){return e.visible?e.isInitial?h.appeared:h.appearing:h.hidden}),i=u[0],a=u[1],o=p(i);return n.useEffect(function(){if(!e.isInitial)if(e.visible)a(h.appearing),setTimeout(function(){return a(h.appeared)},100);else{if(!o)return;a(h.hiding),setTimeout(function(){return a(h.hidden)},r)}},[e.visible]),i===h.hidden?null:n.cloneElement(e.children,{"data-anima":i,"data-anima-effect":e.effect,style:f({"--duration":r+"ms"},e.children.props.style)})}function w(e){return{"data-anima":e["data-anima"],"data-anima-effect":e["data-anima-effect"],style:e.style}}function b(e){var t=d(e,g),r=n.useState(!0),u=r[0],i=r[1];return n.useEffect(function(){return i(!1)},[]),n.createElement("ul",f({},t),e.children.map(function(e){return n.cloneElement(e,{isInitial:u})}))}function E(e,t){for(var r,u,i=null!=(r=null==t?void 0:t.direction)?r:"head",a=n.useState(e.map(function(e){return{item:e,props:{visible:!0}}})),o=a[0],l=a[1],c=[],s=function(){var e=u.value;!o.map(function(e){return e.item}).some(function(n){return e.id===n.id})&&c.push(e)},d=m(e);!(u=d()).done;)s();n.useEffect(function(){0!==c.length&&(l("head"===i?function(e){return[].concat(c.map(function(e){return{item:e,props:{visible:!0}}}),e)}:function(e){return[].concat(e,c.map(function(e){return{item:e,props:{visible:!0}}}))}),c=[])},[c.length,i]);for(var v,p=[],h=function(){var n=v.value.item;e.every(function(e){return e.id!==n.id})&&p.push(n)},g=m(o);!(v=g()).done;)h();return n.useEffect(function(){0!==p.length&&(l(function(e){return e.map(function(e){return p.some(function(n){return n.id===e.item.id})?f({},e,{props:{visible:!1}}):e})}),p=[])},[p.length]),{items:o.map(function(n){var t=e.find(function(e){return e.id===n.item.id});return t?f({},n,{item:t}):n}),count:o.filter(function(e){return e.props.visible}).length}}!function(e){e.appearing="appearing",e.appeared="appeared",e.hiding="hiding",e.hidden="hidden"}(h||(h={}));var x=/*#__PURE__*/function(){function e(e){this.message=void 0,this._known=!0,this.message=e.message}return e.isServerError=function(e){return!!(e&&"object"==typeof e&&e===Object(e)&&e.hasOwnProperty("_known")&&e.hasOwnProperty("message"))},e.extract=function(n){try{return n.ok?Promise.resolve(n):Promise.resolve(n.json()).then(function(n){var t=e.isServerError(n)?n.message:"app.error.general";throw new e({message:t})})}catch(e){return Promise.reject(e)}},e.handle=function(n){try{throw new e({message:e.isServerError(n)?n.message:"app.error.general"})}catch(e){return Promise.reject(e)}},e}(),S=function(e,n){return fetch(e,f({mode:"same-origin",redirect:"follow"},n,{headers:f({"Content-Type":"application/json","time-zone-offset":(new Date).getTimezoneOffset().toString()},null==n?void 0:n.headers)})).then(x.extract).catch(x.handle)},T=/*#__PURE__*/function(){function e(){}return e.format=function(e){var n=Math.floor(e/60),t=e%60;return String(n).padStart(2,"0")+":"+String(t).padStart(2,"0")},e}();function P(e,n){var t="function"==typeof n?n():n,i=u(t),a=i[0],o=i[1];return r(function(){return o(t)},[t]),{value:a,set:o,clear:function(){o(t)},label:{props:{htmlFor:e}},input:{props:{id:e,name:e}},changed:a!==t,unchanged:a==t}}var M,D=1;function I(n){var t=e.useState(M.initial),r=t[0],u=t[1],i=e.useRef(null),a=P("duration",0),o=P("currentTime",0),l=P("volume",1),c=0===l.value,s=0===a.value?0:Math.round(o.value/a.value*100);function f(e){var n=e.currentTarget;i.current&&(i.current.currentTime=n.valueAsNumber,o.set(n.valueAsNumber))}function d(e){var n=e.currentTarget;i.current&&(i.current.volume=n.valueAsNumber,l.set(n.valueAsNumber))}return{props:{audio:{src:n,onTimeUpdate:function(e){o.set(Math.round(e.target.currentTime))},onLoadedMetadata:function(e){var n=e.currentTarget;i.current=n,a.set(Math.round(n.duration)),o.set(n.currentTime),l.set(n.volume),u(M.ready)},onEnded:function(){u(M.paused)},controls:!1},player:{min:0,step:1,max:a.value,value:o.value,onInput:f,style:{"--percentage":s+"%"}},volume:{min:0,max:1,step:.01,value:l.value,onInput:d,style:{"--percentage":Math.floor(100*l.value)+"%"}}},actions:{play:function(){i.current&&(i.current.play(),u(M.playing))},pause:function(){i.current&&(i.current.pause(),u(M.paused))},mute:function(){i.current&&(i.current.volume=0,l.set(0))},unmute:function(){i.current&&(i.current.volume=1,l.set(1))},reset:function(){i.current&&(i.current.currentTime=0,i.current.pause(),o.set(0),u(M.paused))},seek:f,changeVolume:d},meta:{state:r,isInitial:r===M.initial,isReady:r===M.ready,isPlaying:r===M.playing,isPaused:r===M.paused,matches:function(e){return e.some(function(e){return e===r})},percentage:{raw:s,formatted:s+"%"},currentTime:{raw:o.value,formatted:T.format(o.value)},duration:{raw:a.value,formatted:T.format(a.value)},volume:{value:l.value,raw:Math.floor(100*l.value),formatted:Math.floor(100*l.value)+"%"},muted:c}}}function L(e){n.useEffect(function(){var n;e.condition&&(null==(n=e.ref.current)||n.focus())},[e.condition])}function F(){if("undefined"!=typeof window)return window}function C(){var e=u({width:void 0,height:void 0}),n=e[0],t=e[1];return r(function(){var e=F();if(e)return e.addEventListener("resize",n),n(),function(){return e.removeEventListener("resize",n)};function n(){t({width:null==e?void 0:e.innerWidth,height:null==e?void 0:e.innerHeight})}},[]),n}function O(e){var n,t=C();return(null!=(n=null==t?void 0:t.width)?n:0)<=e}function A(e,t,r){n.useEffect(function(){if(e.current)return document.addEventListener("mousedown",n),function(){return document.removeEventListener("mousedown",n)};function n(n){var u;null!=(u=e.current)&&u.contains(n.target)||(null==r?void 0:r.some(function(e){var t;return null==(t=e.current)?void 0:t.contains(n.target)}))||t()}},[t,e,r])}function k(){var e=u(""),n=e[0],t=e[1];return{query:n,clear:function(){t("")},onChange:function(e){t(e.currentTarget.value)},filterFn:function(e){return""===n||(null==e?void 0:e.toLowerCase().includes(n.toLowerCase()))},changed:""!==n,unchanged:""===n}}function j(e){return{value:e,hours:24*e,minutes:24*e*60,seconds:24*e*60*60,ms:24*e*60*60*1e3}}function U(e){return{value:e,minutes:60*e,seconds:60*e*60,ms:60*e*60*1e3}}function R(e){return{value:e,seconds:60*e,ms:60*e*1e3}}function _(e){return{value:e,ms:1e3*e}}!function(e){e.initial="initial",e.ready="ready",e.playing="playing",e.paused="paused"}(M||(M={}));var N,H,B={Days:j,Hours:U,Minutes:R,Seconds:_};function z(){return Date.now()}function W(){var e=u(z),n=e[0],t=e[1];return r(function(){var e=setInterval(function(){return t(z())},B.Seconds(1).ms);return function(){return clearInterval(e)}},[]),n}function q(e){var t=n.useState(e.value),r=t[0],u=t[1];return n.useEffect(function(){var n=setTimeout(function(){return u(e.value)},e.delayMs);return function(){return clearTimeout(n)}},[e.value,e.delayMs]),r}function Q(e){void 0===e&&(e=!1);var n=u(e),t=n[0],r=n[1];return{on:t,off:!t,enable:function(){return r(!0)},disable:function(){return r(!1)},toggle:function(){return r(function(e){return!e})}}}function V(e){var n=Q(e),t=F();return r(function(){t&&(t.document.designMode=n.on?"on":"off")},[n.on]),n}function K(e){void 0===e&&(e=!0),i(function(){if(e){var n=document.querySelector("html"),t=document.body,r=window.getComputedStyle(n).overscrollBehavior,u=window.getComputedStyle(t).overscrollBehavior;return t.style.overscrollBehavior="none",n.style.overscrollBehavior="none",function(){t.style.overscrollBehavior=u,n.style.overscrollBehavior=r}}},[e])}function Y(e){n.useEffect(function(){document.title=e},[e])}function J(e){var n=e.length-e.max,t=e.length>e.max;function i(){return t?N.contracted:N.expanded}var a=u(i),o=a[0],l=a[1];return r(function(){return l(i())},[e.length,e.max]),{state:o,displayShowMore:o===N.contracted,displayShowLess:o===N.expanded&&t,actions:{showMore:function(){o===N.contracted&&l(N.expanded)},showLess:function(){o===N.expanded&&l(N.contracted)}},numberOfExcessiveElements:n,filterFn:function(n,t){return o===N.expanded||t<e.max}}}function $(e,n){var t,r=null!=(t=null==n?void 0:n.maxSize)?t:Infinity,i=u(0),o=i[0],l=i[1],c=u(H.idle),s=c[0],f=c[1],d=u(null),v=d[0],m=d[1];function p(e){var n=e.currentTarget.files;if(n&&n[0]){var t=n[0];if(!(t.size>r))return m(t),f(H.selected),t;f(H.error)}}function h(){l(function(e){return e+1}),m(null),f(H.idle)}var g=a(function(){return v?URL.createObjectURL(v):void 0},[v]);function y(e){return e.some(function(e){return e===s})}return s===H.idle?{state:s,matches:y,isIdle:!0,isSelected:!1,isError:!1,data:null,actions:{selectFile:p,clearFile:h},label:{props:{htmlFor:e}},input:{props:{id:e,name:e,multiple:!1,key:o}}}:s===H.selected?{state:s,matches:y,data:v,isIdle:!1,isSelected:!0,isError:!1,actions:{selectFile:p,clearFile:h},preview:g,label:{props:{htmlFor:e}},input:{props:{id:e,name:e,multiple:!1,key:o}}}:{state:s,matches:y,data:null,isIdle:!1,isSelected:!1,isError:!0,actions:{selectFile:p,clearFile:h},label:{props:{htmlFor:e}},input:{props:{id:e,name:e,multiple:!1,key:o}}}}function G(){}function X(e){var n,t,i,a,o=null!=(n=e.defaultQuery)?n:void 0,l=null!=(t=e.currentQuery)?t:void 0,c=null!=(i=e.filterFn)?i:function(e){return void 0===v||v===String(e)},s=Object.keys(e.enum),f=null!=(a=null==e?void 0:e.onUpdate)?a:G,d=u(null!=l?l:o),v=d[0],m=d[1],h=p(v);return r(function(){f(v,h)},[h,v]),{query:v,clear:function(){m(o)},onChange:function(n){var t=n.currentTarget.value,r=Boolean(e.enum[String(t)]);m(r?t:void 0)},filterFn:c,options:s,onUpdate:f,name:e.name,changed:v!==o,unchanged:v===o,label:{props:{htmlFor:e.name}},input:{props:{id:e.name,name:e.name}}}}function Z(e){var t,r=null==(t=null==e?void 0:e.enabled)||t,u=n.useRef(null),i=Q(!1),a=i.enable,o=i.disable;return n.useEffect(function(){var e=u.current;return e&&r&&(e.addEventListener("mouseenter",a),e.addEventListener("mouseleave",o)),function(){e&&r&&(e.removeEventListener("mouseenter",a),e.removeEventListener("mouseleave",o))}},[]),{attach:{ref:u},isHovering:i.on&&r}}!function(e){e.contracted="contracted",e.expanded="expanded"}(N||(N={})),function(e){e.idle="idle",e.selected="selected",e.error="error"}(H||(H={}));var ee=function(e){try{if(!e)return Promise.resolve(ne);var n=document.createElement("img"),t=new Promise(function(e,t){n.onload=function(){return e({width:n.width,height:n.height})},n.onerror=t});return n.src=e,Promise.resolve(t)}catch(e){return Promise.reject(e)}},ne={width:null,height:null};function te(n){var t,r=P("resolution",ne);return e.useEffect(function(){!function(){try{var e,t=function(t){if(e)return t;[H.error,H.idle].includes(n.state)&&null!==r.value.width&&null!==r.value.height&&r.clear()},u=function(){if(n.state===H.selected)return function(t,u){try{var i=Promise.resolve(ee(n.preview)).then(function(n){var t=r.set(n);return e=1,t})}catch(e){return u()}return i&&i.then?i.then(void 0,u):i}(0,function(){var n=r.clear();return e=1,n})}();Promise.resolve(u&&u.then?u.then(t):t(u))}catch(e){return Promise.reject(e)}}()},[n.state,null==(t=n.data)?void 0:t.name]),r.value}var re,ue,ie=function(){var e=Q("undefined"==typeof navigator||"boolean"!=typeof navigator.onLine||navigator.onLine);return n.useEffect(function(){function n(){e.enable()}function t(){e.disable()}return window.addEventListener("online",n),window.addEventListener("offline",t),function(){window.removeEventListener("online",n),window.removeEventListener("offline",t)}},[]),e.on},ae={threshold:0,root:null,rootMargin:"0%",ref:{current:null}};function oe(){return"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype}function le(e){void 0===e&&(e=ae);var n=u(!1),t=n[0],i=n[1];return r(function(){var n=e.ref.current;if(oe()&&n){var t=new IntersectionObserver(function(e){var n;return i(Boolean(null==(n=e[0])?void 0:n.isIntersecting))},e);return t.observe(n),function(){return t.unobserve(n)}}},[]),t}function ce(e,n){return e===n}function se(e){var n,t,r=null!=(n=null==e?void 0:e.comparisonFn)?n:ce,i=u(null!=(t=null==e?void 0:e.defaultItem)?t:null),a=i[0],o=i[1];return{clear:function(){return o(null)},set:function(e){return o(e)},toggle:function(e){return o(function(n){return null===n?e:r(n,e)?null:e})},value:a,isDefault:r(a,null),exists:!r(a,null),compare:function(e){return r(a,e)}}}function fe(e){var n=Object.keys(e);return function(t){var r=t.key,u=e[r];n.includes(t.key)&&e[r]&&u&&u()}}function de(e){n.useEffect(function(){var n=o(window,e);return function(){return n()}},[e])}function ve(e){if(e.language===ue.en){var n,t=null!=(n=e.plural)?n:e.singular+"s";return 1===e.value?e.singular:t}if(e.language===ue.pl){var r,u=null!=(r=e.value)?r:1;return 1===u?e.singular:c(e.singular,String(e.plural),String(e.genitive),u)}return console.warn("[@bgord/frontend] missing pluralization function for language "+e.language+"."),e.singular}!function(e){e.Enter="Enter",e.Space=" "}(re||(re={})),function(e){e.en="en",e.pl="pl"}(ue||(ue={}));var me=n.createContext({translations:{},language:"en"});function pe(e){return n.createElement(me.Provider,{value:e.value},e.children)}function he(){var e=n.useContext(me);if(void 0===e)throw new Error("useTranslations must be used within the TranslationsContext");return function(n,t){var r=e.translations[n];return r?t?Object.entries(t).reduce(function(e,n){return e.replace("{{"+n[0]+"}}",String(n[1]))},r):r:(console.warn("[@bgord/frontend] missing translation for key: "+n),n)}}function ge(){var e=n.useContext(me);if(void 0===e)throw new Error("useLanguage must be used within the TranslationsContext");return e.language}function ye(){var e=ge();return function(n){return ve(f({},n,{language:e}))}}function we(e){return X({enum:e,currentQuery:ge(),name:"language",onUpdate:function(e,n){var t=F();t&&e&&n&&n!==e&&(l.set("accept-language",e),t.document.location.reload())}})}function be(e){void 0===e&&(e=!1),n.useEffect(function(){if(e)return window.addEventListener("beforeunload",n),function(){return window.removeEventListener("beforeunload",n)};function n(e){e.preventDefault()}},[e])}function Ee(e){var n,t,r=null!=(n=null==e?void 0:e.defaultItems)?n:[],i=null!=(t=null==e?void 0:e.comparisonFn)?t:function(e,n){return e===n},a=u(r),o=a[0],l=a[1];function c(e){l(function(n){return Array.isArray(e)?[].concat(n,e):[].concat(n,[e])})}function s(e){l(function(n){return n.filter(function(n){return!i(n,e)})})}function f(e){return o.some(function(n){return i(n,e)})}return[o,{clear:function(){l([])},add:c,remove:s,toggle:function(e){f(e)?s(e):c(e)},isAdded:f,update:l}]}function xe(){return{onKeyDown:function(e){var n;"Enter"===e.key&&e.metaKey&&(null==(n=e.currentTarget.form)||n.dispatchEvent(new Event("submit",{cancelable:!0})))}}}function Se(){var e,n,t,r=P("meta",null),u=null==(e=r.value)?void 0:e.previousPage,i=null==(n=r.value)?void 0:n.nextPage,a=null==(t=r.value)?void 0:t.lastPage,o=P("page",1);return{current:o.value,last:a,controls:{firstPage:{active:!u,disabled:!1,exists:!0,go:function(){return o.set(1)},value:1},previousPage:{active:!1,disabled:!u,exists:Boolean(u),go:function(){return o.set(null!=u?u:o.value)},value:u},nextPage:{active:!1,disabled:!i,exists:Boolean(i),go:function(){return o.set(null!=i?i:o.value)},value:i},lastPage:{active:o.value===a,disabled:!i,exists:!0,go:function(){return o.set(null!=a?a:o.value)},value:a}},update:function(e){return r.set(e)}}}var Te=/*#__PURE__*/function(){function e(){}return e.get=function(e,n){return s.get(e,n).value},e.set=function(e,n){s.set(e,n)},e.clear=function(e){s.remove(e)},e}();function Pe(n,t){void 0===t&&(t=!1);var r=Q(Te.get(n,t));return e.useEffect(function(){return Te.set(n,r.on)},[n,r.on]),f({},r,{clear:function(){return Te.clear(n)}})}var Me=/*#__PURE__*/function(){function e(e){this.lastInvocationTimestamp=null,this.options=void 0,this.options=e}return e.prototype.verify=function(e){if(!this.lastInvocationTimestamp)return this.lastInvocationTimestamp=e,{allowed:!0};var n=this.lastInvocationTimestamp+this.options.limitMs;return n<=e?(this.lastInvocationTimestamp=e,{allowed:!0}):{allowed:!1,remainingMs:n-e}},e}();function De(e){var n=t(new Me(e));return function(){var t=Date.now(),r=n.current.verify(t);return r.allowed?e.action.apply(e,[].slice.call(arguments)):null==e.fallback?void 0:e.fallback(r.remainingMs)}}function Ie(){var e=F(),t=n.useState(0),r=t[0],u=t[1],i=Q(!1);return n.useLayoutEffect(function(){function n(){e&&(u(null==e?void 0:e.scrollY),e.document.body.clientHeight<e.document.body.scrollHeight?i.enable():i.disable())}return null==e||e.addEventListener("scroll",n),function(){return null==e?void 0:e.removeEventListener("scroll",n)}},[]),{actions:{goToTop:function(){e&&e.scrollTo({top:0,left:0,behavior:"smooth"})}},position:{value:r,isInitial:0===r,hasChanged:r>0},visible:i.on,hidden:i.off}}function Le(e){void 0===e&&(e=!0),r(function(){if(e){var n=document.querySelector("html"),t=window.getComputedStyle(n).overflow;return n.style.overflow="hidden",function(){n.style.overflow=t}}},[e])}function Fe(e){var n=new Audio(e);return{play:n.play.bind(n)}}function Ce(e){var n,t=F(),r=null!=(n=new URLSearchParams(null==t?void 0:t.location.search).get(e.name))?n:void 0;return X(f({onUpdate:function(n,r){if(t){var u=new URL(t.location.toString()),i=new URLSearchParams(u.search);void 0===n?i.delete(e.name):i.set(e.name,n),n!==r&&n!==r&&(u.search=i.toString(),history.pushState({},"",u.toString()))}}},e,{defaultQuery:e.defaultQuery,currentQuery:r}))}var Oe,Ae=1;function ke(n){var t=e.useState(Oe.initial),r=t[0],u=t[1],i=e.useRef(null),a=P("duration",0),o=P("currentTime",0),l=P("volume",1),c=0===l.value,s=0===a.value?0:Math.round(o.value/a.value*100);function f(e){var n=e.currentTarget;i.current&&(i.current.currentTime=n.valueAsNumber,o.set(n.valueAsNumber))}function d(e){var n=e.currentTarget;i.current&&(i.current.volume=n.valueAsNumber,l.set(n.valueAsNumber))}return{props:{video:{src:n,onTimeUpdate:function(e){o.set(Math.round(e.target.currentTime))},onLoadedMetadata:function(e){var n=e.currentTarget;i.current=n,a.set(Math.round(n.duration)),o.set(n.currentTime),l.set(n.volume),u(Oe.ready)},onEnded:function(){u(Oe.paused)},controls:!1},player:{min:0,step:1,max:a.value,value:o.value,onInput:f,style:{"--percentage":s+"%"}},volume:{min:0,max:1,step:.01,value:l.value,onInput:d,style:{"--percentage":Math.floor(100*l.value)+"%"}}},actions:{play:function(){i.current&&(i.current.play(),u(Oe.playing))},pause:function(){i.current&&(i.current.pause(),u(Oe.paused))},mute:function(){i.current&&(i.current.volume=0,l.set(0))},unmute:function(){i.current&&(i.current.volume=1,l.set(1))},reset:function(){i.current&&(i.current.currentTime=0,i.current.pause(),o.set(0),u(Oe.paused))},seek:f,changeVolume:d,triggerFullscreen:function(){i.current&&i.current.requestFullscreen()}},meta:{state:r,isInitial:r===Oe.initial,isReady:r===Oe.ready,isPlaying:r===Oe.playing,isPaused:r===Oe.paused,matches:function(e){return e.some(function(e){return e===r})},percentage:{raw:s,formatted:s+"%"},currentTime:{raw:o.value,formatted:T.format(o.value)},duration:{raw:a.value,formatted:T.format(a.value)},volume:{value:l.value,raw:Math.floor(100*l.value),formatted:Math.floor(100*l.value)+"%"},muted:c}}}!function(e){e.initial="initial",e.ready="ready",e.playing="playing",e.paused="paused"}(Oe||(Oe={}));var je=["disable","enable","on","off","toggle"];function Ue(e){var t=e.disable,r=d(e,je),u=n.useRef(null);return n.useEffect(function(){var n,t;e.on?null==(n=u.current)||n.showModal():null==(t=u.current)||t.close()},[e.on]),de({Escape:t}),L({ref:u,condition:e.on}),Le(e.on),A(u,t),n.createElement("dialog",f({ref:u,tabIndex:0,"data-display":e.on?"flex":"none","data-direction":"column","data-mx":"auto","data-p":"24","data-position":"fixed","data-z":"2","data-bg":"white","data-br":"4","data-bc":"gray-300","data-bw":"1","data-backdrop":"black"},r))}function Re(e){return ie()?null:n.createElement(n.Fragment,null,e.children)}var _e=["as"];function Ne(e){var t=e.as,r=d(e,_e);return n.createElement(t||"a",f({target:"_blank",rel:"noreferer noopener"},r))}function He(e){return function(){e.forEach(function(e){return e()})}}var Be={Dimensions:function(e){var t=C();return n.createElement("div",f({"data-fs":"12"},e),t.width," x ",t.height)},Truncates:function(){var e=Q(),t=P("length",128),r=n.useState(new Map),u=r[0],i=r[1];return n.createElement("div",{"data-display":"flex","data-cross":"center","data-gap":"6"},n.createElement("label",f({className:"c-label"},t.label.props),"Length"),n.createElement("input",f({className:"c-input",type:"number",value:t.value,onChange:function(e){return t.set(e.currentTarget.valueAsNumber)}},t.input.props)),n.createElement("button",{className:"c-button","data-variant":"bare",type:"button",onClick:He([function(){return e=document.querySelectorAll('[data-transform="truncate"]'),n=new Map(u),e.forEach(function(e){var r=e.textContent;n.has(e)?(e.textContent=n.get(e),n.delete(e)):(n.set(e,r),e.textContent="x".repeat(t.value))}),void i(n);var e,n},e.toggle])},e.on?"Hide truncates":"Expand truncates"))}},ze=function(e){try{var n,t,r=null!=(n=e.onFailure)?n:We,u=null!=(t=e.onSuccess)?t:G;navigator.clipboard||r();var i=function(n,t){try{var r=Promise.resolve(navigator.clipboard.writeText(e.text)).then(function(){u()})}catch(e){return t(e)}return r&&r.then?r.then(void 0,t):r}(0,function(e){r(e)});return Promise.resolve(i&&i.then?i.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},We=function(e){return console.warn("Copying to clipboard not supported")},qe=/*#__PURE__*/function(){function e(){}return e.datetime=function(e,n){return void 0===n&&(n="N/A"),e?new Date(e).toLocaleString():n},e.monthDay=function(n){var t=new Date(n),r=e._padDatePart(t.getDate());return e._padDatePart(t.getMonth()+1)+"/"+r},e.form=function(n){return n?e._padDatePart(n.getFullYear())+"-"+e._padDatePart(n.getMonth()+1)+"-"+e._padDatePart(n.getDate()):e.form(new Date)},e.clockUTC=function(n){var t=new Date(n);return e._padDatePart(t.getUTCHours())+":"+e._padDatePart(t.getUTCMinutes())+":"+e._padDatePart(t.getUTCSeconds())},e.clockLocal=function(n){var t=new Date(n);return e._padDatePart(t.getHours())+":"+e._padDatePart(t.getMinutes())+":"+e._padDatePart(t.getSeconds())},e.countdown=function(n){var t=new Date(n);return e._padDatePart(t.getHours())+":"+e._padDatePart(t.getMinutes())+":"+e._padDatePart(t.getSeconds())},e.formDatetimeLocal=function(e){var n=e-R((new Date).getTimezoneOffset()).ms;return new Date(n).toISOString().slice(0,16)},e._padDatePart=function(e){return String(e).padStart(2,"0")},e}(),Qe=/*#__PURE__*/function(){function e(){}return e.convertUtcToLocal=function(e){var n=(new Date).getTimezoneOffset(),t=(U(e).minutes-n)/60%24;return{value:t,label:String(t).padStart(2,"0")+":00"}},e}(),Ve=/*#__PURE__*/function(){function e(){}return e.fromRevision=function(e){return{"if-match":String(e)}},e}(),Ke=/*#__PURE__*/function(){function e(){}return e.fromRevision=function(e){return{"if-match":"W/"+e}},e}(),Ye=n.createContext({});function Je(e){return n.createElement(Ye.Provider,{value:e.value},e.children)}function $e(){var e=n.useContext(Ye);if(void 0===e)throw new Error("useFeatureFlags must be used within the FeatureFlagsContext");return e}function Ge(e){var t=n.useContext(Ye);if(void 0===t)throw new Error("useFeatureFlag must be used within the FeatureFlagsContext");return"yes"===t[e]}var Xe=/*#__PURE__*/function(){function e(e,n){this.value=void 0;var t=this.getNonEmptyFilters(n),r=new URLSearchParams(t);this.value=""!==r.toString()?e+"?"+r.toString():e}return e.prototype.getNonEmptyFilters=function(e){return void 0===e?{}:Object.fromEntries(Object.entries(e).filter(function(e){return void 0!==e[1]}))},e}();function Ze(){return!F()}var en=/*#__PURE__*/function(){function e(){}return e.float=function(e,n){return void 0===n&&(n=2),parseFloat(e.toFixed(n))},e}(),nn=/*#__PURE__*/function(){function e(e){var n,t,r,u;this.min=void 0,this.max=void 0,this.lower=void 0,this.upper=void 0;var i=null!=(n=null==(t=e.bound)?void 0:t.lower)?n:0,a=null!=(r=null==(u=e.bound)?void 0:u.upper)?r:1;if(e.max-e.min<0)throw new Error("Invalid MinMaxScaler min-max config");if(a-i<=0)throw new Error("Invalid MinMaxScaler bound config");this.min=e.min,this.max=e.max,this.lower=i,this.upper=a}var n=e.prototype;return n.scale=function(e){var n=this.min,t=this.max,r=this.lower,u=this.upper;if(e<n||e>t)throw new Error("Value out of min/max range");return n===t?{original:e,scaled:(r+u)/2,isMin:e===n,isMax:e===t}:{original:e,scaled:en.float((e-n)/(t-n)*(u-r)+r,2),isMin:e===n,isMax:e===t}},n.descale=function(e){var n=this.min,t=this.max,r=this.lower,u=this.upper;if(e<r||e>u)throw new Error("Scaled value out of bounds");return{original:en.float((e-r)/(u-r)*(t-n)+n,2),scaled:e,isLowerBound:e===r,isUpperBound:e===u}},e.getMinMax=function(e){if(0===e.length)throw new Error("An empty array supplied");return{min:Math.min.apply(Math,e),max:Math.max.apply(Math,e)}},e}(),tn=/*#__PURE__*/function(){function e(){}return e.infinite=function(e){var n,t,r;return null!=(n=null==(t=e.data)||null==(r=t.pages)?void 0:r.flat().map(function(e){return e.result}).flat())?n:[]},e}();function rn(e){var t,r=null==(t=e.enabled)||t,u=n.useState(e.initialItems),i=u[0],a=u[1];n.useEffect(function(){return a(e.initialItems)},[JSON.stringify(e.initialItems)]);var o=n.useRef(null),l=n.useState(null),c=l[0],s=l[1],f=n.useState(null),d=f[0],v=f[1];function m(e){return function(n){var t;s(e),o.current=null!=(t=i[e])?t:null,null!=n&&n.dataTransfer&&!n.currentTarget.parentNode&&(n.dataTransfer.effectAllowed="move",n.dataTransfer.setData("text/html",n.currentTarget.parentNode),n.dataTransfer.setDragImage(n.currentTarget.parentNode,20,20))}}function p(e){return function(n){n.preventDefault();var t=i[e];if(v(e),o.current!==t&&o.current){var r=i.filter(function(e){return e!==o.current});r.splice(e,0,o.current),a(r)}}}function h(n){return function(t){var r;null!==c&&null!==d&&c!==d&&e.callback({correlationId:e.correlationId,id:null==(r=i[n])?void 0:r.id,item:i[n],to:d}),s(null),o.current=null,v(null)}}var g=r?o.current?"grabbing":"grab":"auto";return{items:i,enabled:r,props:{item:function(e){return{onDragOver:p(e)}},handle:function(e){return{onDragStart:m(e),onDragEnd:h(e),draggable:r,style:{cursor:g}}}}}}function un(e){return void 0===e&&(e=12),{times:function(n){var t=e*n,r={height:{height:an(t)},minHeight:{minHeight:an(t)},maxHeight:{maxHeight:an(t)},width:{width:an(t)},minWidth:{minWidth:an(t)},maxWidth:{maxWidth:an(t)},square:{height:an(t),width:an(t)}},u={height:{style:{height:an(t)}},minHeight:{style:{minHeight:an(t)}},maxHeight:{style:{maxHeight:an(t)}},width:{style:{width:an(t)}},minWidth:{style:{minWidth:an(t)}},maxWidth:{style:{maxWidth:an(t)}},square:{style:{height:an(t),width:an(t)}}};return f({px:an(t),raw:t,style:u},r)}}}function an(e){return e+"px"}tn.empty={result:[],meta:{exhausted:!0}};var on=/*#__PURE__*/function(){function e(){}return e.format=function(n,t){return void 0===t&&(t=e.DEFAULT_SEPARATOR),n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,t)},e}();on.DEFAULT_SEPARATOR=" ";var ln=n.createContext(void 0);function cn(e){var t,r,u,i,a=(r=null!=(t=null==e?void 0:e.timeout)?t:5e3,u=Ee({comparisonFn:function(e,n){return e.id===n.id}}),i=u[1],[[].concat(u[0]).reverse(),{add:function(e){var n=f({},e,{id:String(Date.now())});i.add(n),setTimeout(function(){return i.remove(n)},r)},remove:i.remove,clear:i.clear}]);return n.createElement(ln.Provider,{value:[a[0],a[1]]},e.children)}function sn(){var e=n.useContext(ln);if(void 0===e)throw new Error("useToasts must be used within the ToastsContextProvider");return e}function fn(){return sn()[1].add}export{S as API,D as AUDIO_DEFAULT_VOLUME,y as Anima,b as AnimaList,h as AnimaState,en as Approximation,qe as DateFormatter,j as Days,Be as DevTools,Ue as Dialog,T as DurationFormatter,Ve as ETag,Je as FeatureFlagsContextProvider,Xe as FilterUrl,Qe as HourFormatter,U as Hours,re as KeyNameEnum,nn as MinMaxScaler,R as Minutes,Re as OfflineIndicator,Ne as OutboundLink,tn as Pagination,un as Rhythm,Te as SafeLocalStorage,_ as Seconds,x as ServerError,on as ThousandsSeparator,B as Time,cn as ToastsContextProvider,pe as TranslationsContextProvider,M as UseAudioState,N as UseExpandableListState,H as UseFileState,Oe as UseVideoState,Ae as VIDEO_DEFAULT_VOLUME,Ke as WeakETag,ze as copyToClipboard,ae as defaultUseIsVisibleConfig,ne as emptyImageResolution,He as exec,w as getAnimaProps,z as getCurrentTimestamp,ee as getImageResolution,F as getSafeWindow,Ze as isClient,oe as isIntersectionObserverSupported,G as noop,ve as pluralize,E as useAnimaList,I as useAudio,L as useAutofocus,O as useBreakpoint,A as useClickOutside,k as useClientSearch,W as useCurrentTimestamp,q as useDebounce,V as useDesignMode,K as useDisablePullToRefresh,Y as useDocumentTitle,J as useExpandableList,Ge as useFeatureFlag,$e as useFeatureFlags,P as useField,$ as useFile,X as useFilter,Z as useHover,te as useImageFileResolution,ie as useIsOnline,le as useIsVisible,se as useItem,fe as useKeyHandler,de as useKeyboardShortcuts,ge as useLanguage,we as useLanguageSelector,be as useLeavingPrompt,Ee as useList,xe as useMetaEnterSubmit,Se as usePagination,Pe as usePersistentToggle,ye as usePluralize,p as usePreviousValue,De as useRateLimiter,rn as useReordering,Ie as useScroll,Le as useScrollLock,Fe as useSound,fn as useToastTrigger,sn as useToastsContext,Q as useToggle,he as useTranslations,Ce as useUrlFilter,ke as useVideo,C as useWindowDimensions};
//# sourceMappingURL=bgord-frontend.module.js.map
