import*as e from"react";import t,{useRef as n,useEffect as r,useState as o,useLayoutEffect as a}from"react";import i from"tinykeys";import*as u from"ts-storage";function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(o[n]=e[n]);return o}function c(e,t){const o=n(t);return r(()=>{o.current=e}),o.current}const d=["children"];var f;function v(e){var n;const r=null!=(n=e.duration)?n:300,[o,a]=t.useState(function(){return e.visible?e.isInitial?f.appeared:f.appearing:f.hidden}),i=c(o);return t.useEffect(()=>{if(!e.isInitial)if(e.visible)a(f.appearing),setTimeout(()=>a(f.appeared),100);else{if(!i)return;a(f.hidding),setTimeout(()=>a(f.hidden),r)}},[e.visible]),o===f.hidden?null:t.cloneElement(e.children,{"data-anima":o,"data-anima-effect":e.effect,style:s({"--duration":`${r}ms`},e.children.props.style)})}function m(e){return{"data-anima":e["data-anima"],"data-anima-effect":e["data-anima-effect"],style:e.style}}function p(e){const n=l(e,d),[r,o]=t.useState(!0);return t.useEffect(()=>o(!1),[]),t.createElement("ul",s({},n),e.children.map(e=>t.cloneElement(e,{isInitial:r})))}function g(e,n){var r;const o=null!=(r=null==n?void 0:n.direction)?r:"head",[a,i]=t.useState(e.map(e=>({item:e,props:{visible:!0}})));let u=[];for(const t of e)!a.map(e=>e.item).some(e=>t.id===e.id)&&u.push(t);t.useEffect(()=>{0!==u.length&&(i("head"===o?e=>[...u.map(e=>({item:e,props:{visible:!0}})),...e]:e=>[...e,...u.map(e=>({item:e,props:{visible:!0}}))]),u=[])},[u.length,o]);let l=[];for(const{item:t}of a)e.every(e=>e.id!==t.id)&&l.push(t);return t.useEffect(()=>{0!==l.length&&(i(e=>e.map(e=>l.some(t=>t.id===e.item.id)?s({},e,{props:{visible:!1}}):e)),l=[])},[l.length]),{items:a.map(t=>{const n=e.find(e=>e.id===t.item.id);return n?s({},t,{item:n}):t}),count:a.filter(e=>e.props.visible).length}}!function(e){e.appearing="appearing",e.appeared="appeared",e.hidding="hidding",e.hidden="hidden"}(f||(f={}));class h{constructor(e){this.message=void 0,this._known=!0,this.message=e.message}static isServerError(e){return!!(e&&"object"==typeof e&&e===Object(e)&&e.hasOwnProperty("_known")&&e.hasOwnProperty("message"))}static async extract(e){if(e.ok)return e;const t=await e.json(),n=h.isServerError(t)?t.message:"app.error.general";throw new h({message:n})}static async handle(e){throw new h({message:h.isServerError(e)?e.message:"app.error.general"})}}const w=(e,t)=>fetch(e,s({mode:"same-origin",headers:{"Content-Type":"application/json","time-zone-offset":(new Date).getTimezoneOffset().toString()},redirect:"follow"},t)).then(h.extract).catch(h.handle);class b{static format(e){const t=Math.floor(e/60),n=e%60;return`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`}}function y(e,t){const n="function"==typeof t?t():t,[r,a]=o(n);return{value:r,set:a,clear:function(){a(n)},label:{props:{htmlFor:e}},input:{props:{id:e,name:e}},changed:r!==n,unchanged:r==n}}const E=1;function S(t){const[n,r]=e.useState("initial"),o=e.useRef(null),a=y("duration",0),i=y("currentTime",0),u=y("volume",1),s=0===u.value,l=0===a.value?0:Math.round(i.value/a.value*100);function c(e){const t=e.currentTarget;o.current&&(o.current.currentTime=t.valueAsNumber,i.set(t.valueAsNumber))}function d(e){const t=e.currentTarget;o.current&&(o.current.volume=t.valueAsNumber,u.set(t.valueAsNumber))}return{props:{audio:{src:t,onTimeUpdate:function(e){i.set(Math.round(e.target.currentTime))},onLoadedMetadata:function(e){const t=e.currentTarget;o.current=t,a.set(Math.round(t.duration)),i.set(t.currentTime),u.set(t.volume),r("ready")},onEnded:function(){r("paused")},controls:!1},player:{min:0,step:1,max:a.value,value:i.value,onInput:c,style:{"--percentage":`${l}%`}},volume:{min:0,max:1,value:u.value,onInput:d,style:{"--percentage":`${Math.floor(100*u.value)}%`}}},actions:{play:function(){o.current&&(o.current.play(),r("playing"))},pause:function(){o.current&&(o.current.pause(),r("paused"))},mute:function(){o.current&&(o.current.volume=0,u.set(0))},unmute:function(){o.current&&(o.current.volume=1,u.set(1))},reset:function(){o.current&&(o.current.currentTime=0,o.current.pause(),i.set(0),r("paused"))},seek:c,changeVolume:d},meta:{state:n,percentage:{raw:l,formatted:`${l}%`},currentTime:{raw:i.value,formatted:b.format(i.value)},duration:{raw:a.value,formatted:b.format(a.value)},volume:{value:u.value,raw:Math.floor(100*u.value),formatted:`${Math.floor(100*u.value)}%`},muted:s}}}function x(e){t.useEffect(()=>{var t;e.condition&&(null==(t=e.ref.current)||t.focus())},[e.condition])}function T(){if("undefined"!=typeof window)return window}function L(){const[e,t]=o({width:void 0,height:void 0});return r(()=>{const e=T();if(e)return e.addEventListener("resize",n),n(),()=>e.removeEventListener("resize",n);function n(){t({width:null==e?void 0:e.innerWidth,height:null==e?void 0:e.innerHeight})}},[]),e}function D(e){var t;const n=L();return(null!=(t=null==n?void 0:n.width)?t:0)<=e}function P(e,n,r){t.useEffect(()=>{if(e.current)return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t);function t(t){var o;null!=(o=e.current)&&o.contains(t.target)||(null==r?void 0:r.some(e=>{var n;return null==(n=e.current)?void 0:n.contains(t.target)}))||n()}},[n,e,r])}function $(){const[e,t]=o("");return{query:e,clear:function(){t("")},onChange:function(e){t(e.currentTarget.value)},filterFn:function(t){return""===e||(null==t?void 0:t.toLowerCase().includes(e.toLowerCase()))}}}function F(e){return{value:e,hours:24*e,minutes:24*e*60,seconds:24*e*60*60,ms:24*e*60*60*1e3}}function C(e){return{value:e,minutes:60*e,seconds:60*e*60,ms:60*e*60*1e3}}function M(e){return{value:e,seconds:60*e,ms:60*e*1e3}}function I(e){return{value:e,ms:1e3*e}}const O={Days:F,Hours:C,Minutes:M,Seconds:I};function _(){return Date.now()}function k(){const[e,t]=o(_);return r(()=>{const e=setInterval(()=>t(_()),O.Seconds(1).ms);return()=>clearInterval(e)},[]),e}function U(e){const[n,r]=t.useState(e.value);return t.useEffect(()=>{const t=setTimeout(()=>r(e.value),e.delayMs);return()=>clearTimeout(t)},[e.value,e.delayMs]),n}function j(e=!0){a(()=>{if(!e)return;const t=document.querySelector("html"),n=document.body,r=window.getComputedStyle(t).overscrollBehavior,o=window.getComputedStyle(n).overscrollBehavior;return n.style.overscrollBehavior="none",t.style.overscrollBehavior="none",()=>{n.style.overscrollBehavior=o,t.style.overscrollBehavior=r}},[e])}function A(e){t.useEffect(()=>{document.title=e},[e])}var B,H;function R(e){const t=e.length-e.max,n=e.length>e.max;function a(){return n?B.contracted:B.expanded}const[i,u]=o(a);return r(()=>u(a()),[e.length,e.max]),{state:i,displayShowMore:i===B.contracted,displayShowLess:i===B.expanded&&n,showMore:function(){i===B.contracted&&u(B.expanded)},showLess:function(){i===B.expanded&&u(B.contracted)},numberOfExcessiveElements:t,filterFn:function(t,n){return i===B.expanded||n<e.max}}}function z(e,t){var n;const r=null!=(n=null==t?void 0:t.maxSize)?n:Infinity,[a,i]=o(H.idle),[u,s]=o(null);function l(e){const t=e.currentTarget.files;if(!t||!t[0])return;const n=t[0];if(!(n.size>r))return s(n),i(H.selected),n;i(H.error)}function c(){s(null),i(H.idle)}return a===H.idle?{state:a,data:null,actions:{selectFile:l,clearFile:c},label:{props:{htmlFor:e}},input:{props:{id:e,name:e}}}:a===H.selected?{state:a,data:u,actions:{selectFile:l,clearFile:c,previewFile:function(){if(u)return URL.createObjectURL(u)}},label:{props:{htmlFor:e}},input:{props:{id:e,name:e}}}:{state:a,data:null,actions:{selectFile:l,clearFile:c},label:{props:{htmlFor:e}},input:{props:{id:e,name:e}}}}function N(){}function q(e){var t,n,a,i;const u=null!=(t=e.defaultQuery)?t:void 0,s=null!=(n=e.currentQuery)?n:void 0,l=null!=(a=e.filterFn)?a:function(e){return void 0===v||v===String(e)},d=Object.keys(e.enum),f=null!=(i=null==e?void 0:e.onUpdate)?i:N,[v,m]=o(null!=s?s:u),p=c(v);return r(()=>{f(v,p)},[p,v]),{query:v,clear:function(){m(u)},onChange:function(t){const n=t.currentTarget.value,r=Boolean(e.enum[String(n)]);m(r?n:void 0)},filterFn:l,options:d,onUpdate:f,label:e.label}}function Q(e=!1){const[t,n]=o(e);return{on:t,off:!t,enable:()=>n(!0),disable:()=>n(!1),toggle:()=>n(e=>!e)}}function W(){const e=t.useRef(null),n=Q(!1),r=n.enable,o=n.disable;return t.useEffect(()=>{const t=e.current;return t&&(t.addEventListener("mouseenter",r),t.addEventListener("mouseleave",o)),()=>{t&&(t.removeEventListener("mouseenter",r),t.removeEventListener("mouseleave",o))}},[]),{attach:{ref:e},isHovering:n.on}}!function(e){e.contracted="contracted",e.expanded="expanded"}(B||(B={})),function(e){e.idle="idle",e.selected="selected",e.error="error"}(H||(H={}));const X={width:null,height:null};async function Y(e){if(!e)return X;const t=document.createElement("img"),n=new Promise((e,n)=>{t.onload=()=>e({width:t.width,height:t.height}),t.onerror=n});return t.src=e,n}function V(t){var n;const r=y("resolution",X);return e.useEffect(()=>{!async function(){if(t.state===H.selected)try{const e=await Y(t.actions.previewFile());return r.set(e)}catch(e){return r.clear()}[H.error,H.idle].includes(t.state)&&null!==r.value.width&&null!==r.value.height&&r.clear()}()},[t.state,null==(n=t.data)?void 0:n.name]),r.value}const G=()=>{const e=Q("undefined"==typeof navigator||"boolean"!=typeof navigator.onLine||navigator.onLine);return t.useEffect(()=>{function t(){e.enable()}function n(){e.disable()}return window.addEventListener("online",t),window.addEventListener("offline",n),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",n)}},[]),e.on},J={threshold:0,root:null,rootMargin:"0%",ref:{current:null}};function K(){return"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype}function Z(e=J){const[t,n]=o(!1);return r(()=>{const t=e.ref.current;if(!K()||!t)return;const r=new IntersectionObserver(e=>{var t;return n(Boolean(null==(t=e[0])?void 0:t.isIntersecting))},e);return r.observe(t),()=>r.unobserve(t)},[]),t}function ee(e,t){return e===t}function te(e){var t,n;const r=null!=(t=null==e?void 0:e.comparisonFn)?t:ee,[a,i]=o(null!=(n=null==e?void 0:e.defaultItem)?n:null);return{clear:()=>i(null),set:e=>i(e),toggle:e=>i(t=>null===t?e:r(t,e)?null:e),value:a,isDefault:r(a,null),exists:!r(a,null),compare:e=>r(a,e)}}var ne;function re(e){const t=Object.keys(e);return function(n){const r=n.key,o=e[r];t.includes(n.key)&&e[r]&&o&&o()}}function oe(e){t.useEffect(()=>{const t=i(window,e);return()=>t()},[e])}function ae(e=!1){t.useEffect(()=>{if(e)return window.addEventListener("beforeunload",t),()=>window.removeEventListener("beforeunload",t);function t(e){e.preventDefault()}},[e])}function ie(e){var t,n;const r=null!=(t=null==e?void 0:e.defaultItems)?t:[],a=null!=(n=null==e?void 0:e.comparisonFn)?n:(e,t)=>e===t,[i,u]=o(r);function s(e){u(t=>Array.isArray(e)?[...t,...e]:[...t,e])}function l(e){u(t=>t.filter(t=>!a(t,e)))}function c(e){return i.some(t=>a(t,e))}return[i,{clear:function(){u([])},add:s,remove:l,toggle:function(e){c(e)?l(e):s(e)},isAdded:c,update:u}]}!function(e){e.Enter="Enter",e.Space=" "}(ne||(ne={}));class ue{static get(e,t){return u.get(e,t).value}static set(e,t){u.set(e,t)}static clear(e){u.remove(e)}}function se(t,n=!1){const r=Q(ue.get(t,n));return e.useEffect(()=>ue.set(t,r.on),[t,r.on]),s({},r,{clear:()=>ue.clear(t)})}class le{constructor(e){this.lastInvocationTimestamp=null,this.options=void 0,this.options=e}verify(e){if(!this.lastInvocationTimestamp)return this.lastInvocationTimestamp=e,{allowed:!0};const t=this.lastInvocationTimestamp+this.options.limitMs;return t<=e?(this.lastInvocationTimestamp=e,{allowed:!0}):{allowed:!1,remainingMs:t-e}}}function ce(e){const t=n(new le(e));return function(...n){const r=Date.now(),o=t.current.verify(r);return o.allowed?e.action(...n):null==e.fallback?void 0:e.fallback(o.remainingMs)}}function de(){const e=T(),[n,r]=t.useState(0),o=Q(!1);return t.useLayoutEffect(()=>{function t(){e&&(r(null==e?void 0:e.scrollY),e.document.body.clientHeight<e.document.body.scrollHeight?o.enable():o.disable())}return null==e||e.addEventListener("scroll",t),()=>null==e?void 0:e.removeEventListener("scroll",t)},[]),{actions:{goToTop:function(){e&&e.scrollTo({top:0,left:0,behavior:"smooth"})}},position:{value:n,isInitial:0===n,hasChanged:n>0},visible:o.on,hidden:o.off}}function fe(e=!0){a(()=>{if(!e)return;const t=document.querySelector("html"),n=document.body,r=window.getComputedStyle(n).overflow,o=window.getComputedStyle(t).overflow;return n.style.overflow="hidden",t.style.overflow="hidden",()=>{n.style.overflow=r,t.style.overflow=o}},[e])}function ve(e){const t=new Audio(e);return{play:t.play.bind(t)}}function me(e){var t;const n=T(),r=null!=(t=new URLSearchParams(null==n?void 0:n.location.search).get(e.label))?t:void 0;return q(s({onUpdate:(t,r)=>{if(!n)return;const o=new URL(n.location.toString()),a=new URLSearchParams(o.search);void 0===t?a.delete(e.label):a.set(e.label,t),t!==r&&t!==r&&(o.search=a.toString(),history.pushState({},"",o.toString()))}},e,{defaultQuery:e.defaultQuery,currentQuery:r}))}function pe(){var e,t,n;const r=y("meta",null),o=null==(e=r.value)?void 0:e.previousPage,a=null==(t=r.value)?void 0:t.nextPage,i=null==(n=r.value)?void 0:n.lastPage,u=y("page",1);return{current:u.value,last:i,controls:{firstPage:{active:!o,disabled:!1,exists:!0,go:()=>u.set(1),value:1},previousPage:{active:!1,disabled:!o,exists:Boolean(o),go:()=>u.set(null!=o?o:u.value),value:o},nextPage:{active:!1,disabled:!a,exists:Boolean(a),go:()=>u.set(null!=a?a:u.value),value:a},lastPage:{active:u.value===i,disabled:!a,exists:!0,go:()=>u.set(null!=i?i:u.value),value:i}},update:e=>r.set(e)}}const ge=["disable","enable","on","off","toggle"];function he(e){const{disable:n}=e,r=l(e,ge),o=t.useRef(null);return t.useEffect(()=>{var t,n;e.on?null==(t=o.current)||t.showModal():null==(n=o.current)||n.close()},[e.on]),oe({Escape:n}),x({ref:o,condition:e.on}),fe(e.on),t.createElement("dialog",s({ref:o,tabIndex:0,"data-display":e.on?"flex":"none","data-direction":"column","data-mx":"auto","data-p":"24","data-position":"absolute","data-z":"2","data-bg":"white","data-br":"4","data-bc":"gray-300","data-bw":"1","data-backdrop":"black"},r))}function we(e){return G()?null:t.createElement(t.Fragment,null,e.children)}const be=["as"];function ye(e){const{as:n}=e,r=l(e,be);return t.createElement(n||"a",s({target:"_blank",rel:"noreferer noopener"},r))}const Ee=e=>console.warn("Copying to clipboard not supported");async function Se(e){var t,n;const r=null!=(t=e.onFailure)?t:Ee,o=null!=(n=e.onSuccess)?n:N;navigator.clipboard||r();try{await navigator.clipboard.writeText(e.text),o()}catch(e){r(e)}}class xe{static datetime(e,t="N/A"){return e?new Date(e).toLocaleString():t}static monthDay(e){const t=new Date(e),n=xe._padDatePart(t.getDate());return`${xe._padDatePart(t.getMonth()+1)}/${n}`}static form(e){return e?`${xe._padDatePart(e.getFullYear())}-${xe._padDatePart(e.getMonth()+1)}-${xe._padDatePart(e.getDate())}`:xe.form(new Date)}static clockUTC(e){const t=new Date(e);return`${xe._padDatePart(t.getUTCHours())}:${xe._padDatePart(t.getUTCMinutes())}:${xe._padDatePart(t.getUTCSeconds())}`}static clockLocal(e){const t=new Date(e);return`${xe._padDatePart(t.getHours())}:${xe._padDatePart(t.getMinutes())}:${xe._padDatePart(t.getSeconds())}`}static countdown(e){const t=new Date(e);return`${xe._padDatePart(t.getHours())}:${xe._padDatePart(t.getMinutes())}:${xe._padDatePart(t.getSeconds())}`}static _padDatePart(e){return String(e).padStart(2,"0")}}class Te{static convertUtcToLocal(e){const t=(new Date).getTimezoneOffset(),n=(C(e).minutes-t)/60%24;return{value:n,label:`${String(n).padStart(2,"0")}:00`}}}function Le(e){return function(){e.forEach(e=>e())}}class De{constructor(e,t){this.value=void 0;const n=new URLSearchParams(this.getNonEmptyFilters(t));this.value=""!==n.toString()?`${e}?${n.toString()}`:e}getNonEmptyFilters(e){return void 0===e?{}:Object.fromEntries(Object.entries(e).filter(([e,t])=>void 0!==t))}}function Pe(){return!T()}class $e{static infinite(e){var t,n,r;return null!=(t=null==(n=e.data)||null==(r=n.pages)?void 0:r.flat().map(e=>e.result).flat())?t:[]}}function Fe(e){var t;if("en"!==e.language)return console.warn(`[@bgord/frontend] missing pluralization fuction for language ${e.language}.`),e.singular;const n=null!=(t=e.plural)?t:`${e.singular}s`;return 1===e.value?e.singular:n}$e.empty={result:[],meta:{exhausted:!0}};class Ce{static base(e=Ce.DEFAULT_BASE_PX){return{times(t){const n=e*t;return{px:Me(n),raw:n,height:{height:Me(n)},minHeight:{minHeight:Me(n)},maxHeight:{maxHeight:Me(n)},width:{width:Me(n)},minWidth:{minWidth:Me(n)},maxWidth:{maxWidth:Me(n)},square:{height:Me(n),width:Me(n)}}}}}}function Me(e){return`${e}px`}Ce.DEFAULT_BASE_PX=12;const Ie=t.createContext(void 0);function Oe(e){const[n,r]=function(){var t;const n=null!=(t=null==e?void 0:e.timeout)?t:5e3,[r,o]=ie({comparisonFn:(e,t)=>e.id===t.id});return[[...r].reverse(),{add:function(e){const t=s({},e,{id:String(Date.now())});o.add(t),setTimeout(()=>o.remove(t),n)},remove:o.remove,clear:o.clear}]}();return t.createElement(Ie.Provider,{value:[n,r]},e.children)}function _e(){const e=t.useContext(Ie);if(void 0===e)throw new Error("useToasts must be used within the ToastsContextProvider");return e}function ke(){const[,e]=_e();return e.add}const Ue=t.createContext({translations:{},language:"en"});function je(e){return t.createElement(Ue.Provider,{value:e.value},e.children)}function Ae(){const e=t.useContext(Ue);if(void 0===e)throw new Error("useTranslations must be used within the TranslationsContext");return function(t,n){const r=e.translations[t];return r?n?Object.entries(n).reduce((e,[t,n])=>e.replace(`{{${t}}}`,String(n)),r):r:(console.warn(`[@bgord/frontend] missing translation for key: ${t}`),t)}}function Be(){const e=t.useContext(Ue);if(void 0===e)throw new Error("useLanguage must be used within the TranslationsContext");return e.language}function He(){const e=Be();return t=>Fe(s({},t,{language:e}))}export{w as API,E as AUDIO_DEFAULT_VOLUME,v as Anima,p as AnimaList,f as AnimaState,xe as DateFormatter,F as Days,he as Dialog,b as DurationFormatter,De as FilterUrl,Te as HourFormatter,C as Hours,ne as KeyNameEnum,M as Minutes,we as OfflineIndicator,ye as OutboundLink,$e as Pagination,Ce as Rhythm,ue as SafeLocalStorage,I as Seconds,h as ServerError,O as Time,Oe as ToastsContextProvider,je as TranslationsContextProvider,B as UseExpandableListState,H as UseFileState,Se as copyToClipboard,J as defaultUseIsVisibleConfig,X as emptyImageResolution,Le as exec,m as getAnimaProps,_ as getCurrentTimestamp,Y as getImageResolution,T as getSafeWindow,Pe as isClient,K as isIntersectionObserverSupported,N as noop,Fe as pluralize,g as useAnimaList,S as useAudio,x as useAutofocus,D as useBreakpoint,P as useClickOutside,$ as useClientSearch,k as useCurrentTimestamp,U as useDebounce,j as useDisablePullToRefresh,A as useDocumentTitle,R as useExpandableList,y as useField,z as useFile,q as useFilter,W as useHover,V as useImageFileResolution,G as useIsOnline,Z as useIsVisible,te as useItem,re as useKeyHandler,oe as useKeyboardShortcurts,Be as useLanguage,ae as useLeavingPrompt,ie as useList,pe as usePagination,se as usePersistentToggle,He as usePluralize,c as usePreviousValue,ce as useRateLimiter,de as useScroll,fe as useScrollLock,ve as useSound,ke as useToastTrigger,_e as useToastsContext,Q as useToggle,Ae as useTranslations,me as useUrlFilter,L as useWindowDimensions};
//# sourceMappingURL=bgord-frontend.modern.js.map
