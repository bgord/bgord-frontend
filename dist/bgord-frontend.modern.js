import*as e from"react";import t,{useRef as n,useEffect as r,useState as o,useLayoutEffect as i}from"react";import a from"tinykeys";function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(o[n]=e[n]);return o}function l(e,t){const o=n(t);return r(()=>{o.current=e}),o.current}const c=["children"];var d;function f(e){var n;const r=null!=(n=e.duration)?n:300,[o,i]=t.useState(function(){return e.visible?e.isInitial?d.appeared:d.appearing:d.hidden}),a=l(o);return t.useEffect(()=>{if(!e.isInitial)if(e.visible)i(d.appearing),setTimeout(()=>i(d.appeared),100);else{if(!a)return;i(d.hidding),setTimeout(()=>i(d.hidden),r)}},[e.visible]),o===d.hidden?null:t.cloneElement(e.children,{"data-anima":o,"data-anima-effect":e.effect,style:u({"--duration":`${r}ms`},e.children.props.style)})}function v(e){return{"data-anima":e["data-anima"],"data-anima-effect":e["data-anima-effect"],style:e.style}}function m(e){const n=s(e,c),[r,o]=t.useState(!0);return t.useEffect(()=>o(!1),[]),t.createElement("ul",u({},n),e.children.map(e=>t.cloneElement(e,{isInitial:r})))}function p(e,n){var r;const o=null!=(r=null==n?void 0:n.direction)?r:"head",[i,a]=t.useState(e.map(e=>({item:e,props:{visible:!0}})));let s=[];for(const t of e)!i.map(e=>e.item).some(e=>t.id===e.id)&&s.push(t);t.useEffect(()=>{0!==s.length&&(a("head"===o?e=>[...s.map(e=>({item:e,props:{visible:!0}})),...e]:e=>[...e,...s.map(e=>({item:e,props:{visible:!0}}))]),s=[])},[s.length,o]);let l=[];for(const{item:t}of i)e.every(e=>e.id!==t.id)&&l.push(t);return t.useEffect(()=>{0!==l.length&&(a(e=>e.map(e=>l.some(t=>t.id===e.item.id)?u({},e,{props:{visible:!1}}):e)),l=[])},[l.length]),{items:i.map(t=>{const n=e.find(e=>e.id===t.item.id);return n?u({},t,{item:n}):t}),count:i.filter(e=>e.props.visible).length}}!function(e){e.appearing="appearing",e.appeared="appeared",e.hidding="hidding",e.hidden="hidden"}(d||(d={}));class h{static format(e){const t=Math.floor(e/60),n=e%60;return`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`}}function g(e,t){const n="function"==typeof t?t():t,[r,i]=o(n);return{value:r,set:i,clear:function(){i(n)},label:{props:{htmlFor:e}},input:{props:{id:e,name:e}}}}const w=1;function y(t){const[n,r]=e.useState("initial"),o=e.useRef(null),i=g("duration",0),a=g("currentTime",0),u=g("volume",1),s=0===u.value,l=0===i.value?0:Math.round(a.value/i.value*100);function c(e){const t=e.currentTarget;o.current&&(o.current.currentTime=t.valueAsNumber,a.set(t.valueAsNumber))}function d(e){const t=e.currentTarget;o.current&&(o.current.volume=t.valueAsNumber,u.set(t.valueAsNumber))}return{props:{audio:{src:t,onTimeUpdate:function(e){a.set(Math.round(e.target.currentTime))},onLoadedMetadata:function(e){const t=e.currentTarget;o.current=t,i.set(Math.round(t.duration)),a.set(t.currentTime),u.set(t.volume),r("ready")},onEnded:function(){r("paused")},controls:!1},player:{min:0,step:1,max:i.value,value:a.value,onInput:c,style:{"--percentage":`${l}%`}},volume:{min:0,max:1,value:u.value,onInput:d,style:{"--percentage":`${Math.floor(100*u.value)}%`}}},actions:{play:function(){o.current&&(o.current.play(),r("playing"))},pause:function(){o.current&&(o.current.pause(),r("paused"))},mute:function(){o.current&&(o.current.volume=0,u.set(0))},unmute:function(){o.current&&(o.current.volume=1,u.set(1))},reset:function(){o.current&&(o.current.currentTime=0,o.current.pause(),a.set(0),r("paused"))},seek:c,changeVolume:d},meta:{state:n,percentage:{raw:l,formatted:`${l}%`},currentTime:{raw:a.value,formatted:h.format(a.value)},duration:{raw:i.value,formatted:h.format(i.value)},volume:{value:u.value,raw:Math.floor(100*u.value),formatted:`${Math.floor(100*u.value)}%`},muted:s}}}function b(e){t.useEffect(()=>{var t;e.condition&&(null==(t=e.ref.current)||t.focus())},[e.condition])}function E(){if("undefined"!=typeof window)return window}function S(){const[e,t]=o({width:void 0,height:void 0});return r(()=>{const e=E();if(e)return e.addEventListener("resize",n),n(),()=>e.removeEventListener("resize",n);function n(){t({width:null==e?void 0:e.innerWidth,height:null==e?void 0:e.innerHeight})}},[]),e}function T(e){var t;const n=S();return(null!=(t=null==n?void 0:n.width)?t:0)<=e}function x(e,n,r){t.useEffect(()=>{if(e.current)return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t);function t(t){var o;null!=(o=e.current)&&o.contains(t.target)||(null==r?void 0:r.some(e=>{var n;return null==(n=e.current)?void 0:n.contains(t.target)}))||n()}},[n,e,r])}function L(){const[e,t]=o("");return{query:e,clear:function(){t("")},onChange:function(e){t(e.currentTarget.value)},filterFn:function(t){return""===e||(null==t?void 0:t.toLowerCase().includes(e.toLowerCase()))}}}class M{constructor(e){this.value=void 0,this.value=e}toHours(){return this.value*M.hours}toMinutes(){return this.value*M.minutes}toSeconds(){return this.value*M.seconds}toMs(){return this.value*M.ms}}M.hours=24,M.minutes=1440,M.seconds=86400,M.ms=864e5;class ${constructor(e){this.value=void 0,this.value=e}toMinutes(){return this.value*$.minutes}toSeconds(){return this.value*$.seconds}toMs(){return this.value*$.ms}}$.minutes=60,$.seconds=3600,$.ms=36e5;class C{constructor(e){this.value=void 0,this.value=e}toSeconds(){return this.value*C.seconds}toMs(){return this.value*C.ms}}C.seconds=60,C.ms=6e4;class I{constructor(e){this.value=void 0,this.value=e}toMs(){return this.value*I.ms}}I.ms=1e3;class F{constructor(e){this.value=void 0,this.value=e}toMs(){return this.value}}const O={Days:M,Hours:$,Minutes:C,Seconds:I};function _(){return Date.now()}function k(){const[e,t]=o(_);return r(()=>{const e=setInterval(()=>t(_()),new O.Seconds(1).toMs());return()=>clearInterval(e)},[]),e}function D(e){const[n,r]=t.useState(e.value);return t.useEffect(()=>{const t=setTimeout(()=>r(e.value),e.delayMs);return()=>clearTimeout(t)},[e.value,e.delayMs]),n}function U(e=!0){i(()=>{if(!e)return;const t=document.querySelector("html"),n=document.body,r=window.getComputedStyle(t).overscrollBehavior,o=window.getComputedStyle(n).overscrollBehavior;return n.style.overscrollBehavior="none",t.style.overscrollBehavior="none",()=>{n.style.overscrollBehavior=o,t.style.overscrollBehavior=r}},[e])}function j(e){t.useEffect(()=>{document.title=e},[e])}var P,R;function A(e){const t=e.length-e.max,n=e.length>e.max;function i(){return n?P.contracted:P.expanded}const[a,u]=o(i);return r(()=>u(i()),[e.length,e.max]),{state:a,displayShowMore:a===P.contracted,displayShowLess:a===P.expanded&&n,showMore:function(){a===P.contracted&&u(P.expanded)},showLess:function(){a===P.expanded&&u(P.contracted)},numberOfExcessiveElements:t,filterFn:function(t,n){return a===P.expanded||n<e.max}}}function H(e){var t;const n=null!=(t=null==e?void 0:e.maxSize)?t:Infinity,[r,i]=o(R.idle),[a,u]=o(null);function s(e){const t=e.currentTarget.files;if(!t||!t[0])return;const r=t[0];if(!(r.size>n))return u(r),i(R.selected),r;i(R.error)}function l(){u(null),i(R.idle)}return r===R.idle?{state:r,data:null,actions:{selectFile:s,clearFile:l}}:r===R.selected?{state:r,data:a,actions:{selectFile:s,clearFile:l,previewFile:function(){if(a)return URL.createObjectURL(a)}}}:{state:r,data:null,actions:{selectFile:s,clearFile:l}}}function B(){}function N(e){var t,n,i,a;const u=null!=(t=e.defaultQuery)?t:void 0,s=null!=(n=e.currentQuery)?n:void 0,c=null!=(i=e.filterFn)?i:function(e){return void 0===v||v===String(e)},d=Object.keys(e.enum),f=null!=(a=null==e?void 0:e.onUpdate)?a:B,[v,m]=o(null!=s?s:u),p=l(v);return r(()=>{f(v,p)},[p,v]),{query:v,clear:function(){m(u)},onChange:function(t){const n=t.currentTarget.value,r=Boolean(e.enum[String(n)]);m(r?n:void 0)},filterFn:c,options:d,onUpdate:f,label:e.label}}function z(e=!1){const[t,n]=o(e);return{on:t,off:!t,enable:()=>n(!0),disable:()=>n(!1),toggle:()=>n(e=>!e)}}function Q(){const e=t.useRef(null),n=z(!1),r=n.enable,o=n.disable;return t.useEffect(()=>{const t=e.current;return t&&(t.addEventListener("mouseenter",r),t.addEventListener("mouseleave",o)),()=>{t&&(t.removeEventListener("mouseenter",r),t.removeEventListener("mouseleave",o))}},[]),{attach:{ref:e},isHovering:n.on}}!function(e){e.contracted="contracted",e.expanded="expanded"}(P||(P={})),function(e){e.idle="idle",e.selected="selected",e.error="error"}(R||(R={}));const q={width:null,height:null};async function Y(e){if(!e)return q;const t=document.createElement("img"),n=new Promise((e,n)=>{t.onload=()=>e({width:t.width,height:t.height}),t.onerror=n});return t.src=e,n}function V(t){var n;const r=g("resolution",q);return e.useEffect(()=>{!async function(){if(t.state===R.selected)try{const e=await Y(t.actions.previewFile());return r.set(e)}catch(e){return r.clear()}[R.error,R.idle].includes(t.state)&&null!==r.value.width&&null!==r.value.height&&r.clear()}()},[t.state,null==(n=t.data)?void 0:n.name]),r.value}const W=()=>{const e=z("undefined"==typeof navigator||"boolean"!=typeof navigator.onLine||navigator.onLine);return t.useEffect(()=>{function t(){e.enable()}function n(){e.disable()}return window.addEventListener("online",t),window.addEventListener("offline",n),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",n)}},[]),e.on},G={threshold:0,root:null,rootMargin:"0%",ref:{current:null}};function J(){return"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype}function K(e=G){const[t,n]=o(!1);return r(()=>{const t=e.ref.current;if(!J()||!t)return;const r=new IntersectionObserver(e=>{var t;return n(Boolean(null==(t=e[0])?void 0:t.isIntersecting))},e);return r.observe(t),()=>r.unobserve(t)},[]),t}function X(e){t.useEffect(()=>{const t=a(window,e);return()=>t()},[e])}function Z(e=!1){t.useEffect(()=>{if(e)return window.addEventListener("beforeunload",t),()=>window.removeEventListener("beforeunload",t);function t(e){e.preventDefault()}},[e])}function ee(e){var t,n;const r=null!=(t=null==e?void 0:e.defaultItems)?t:[],i=null!=(n=null==e?void 0:e.comparisonFn)?n:(e,t)=>e===t,[a,u]=o(r);function s(e){u(t=>Array.isArray(e)?[...t,...e]:[...t,e])}function l(e){u(t=>t.filter(t=>!i(t,e)))}function c(e){return a.some(t=>i(t,e))}return[a,{clear:function(){u([])},add:s,remove:l,toggle:function(e){c(e)?l(e):s(e)},isAdded:c,update:u}]}class te{constructor(e){this.lastInvocationTimestamp=null,this.options=void 0,this.options=e}verify(e){if(!this.lastInvocationTimestamp)return this.lastInvocationTimestamp=e,{allowed:!0};const t=this.lastInvocationTimestamp+this.options.limitMs;return t<=e?(this.lastInvocationTimestamp=e,{allowed:!0}):{allowed:!1,remainingMs:t-e}}}function ne(e){const t=n(new te(e));return function(){const n=Date.now(),r=t.current.verify(n);return r.allowed?e.action():null==e.fallback?void 0:e.fallback(r.remainingMs)}}function re(){const e=E(),[n,r]=t.useState(0),o=z(!1);return t.useLayoutEffect(()=>{function t(){e&&(r(null==e?void 0:e.scrollY),e.document.body.clientHeight<e.document.body.scrollHeight?o.enable():o.disable())}return null==e||e.addEventListener("scroll",t),()=>null==e?void 0:e.removeEventListener("scroll",t)},[]),{actions:{goToTop:function(){e&&e.scrollTo({top:0,left:0,behavior:"smooth"})}},position:{value:n,isInitial:0===n,hasChanged:n>0},visible:o.on,hidden:o.off}}function oe(e=!0){i(()=>{if(!e)return;const t=document.querySelector("html"),n=document.body,r=window.getComputedStyle(n).overflow,o=window.getComputedStyle(t).overflow;return n.style.overflow="hidden",t.style.overflow="hidden",()=>{n.style.overflow=r,t.style.overflow=o}},[e])}function ie(e){const t=new Audio(e);return{play:t.play.bind(t)}}function ae(e){var t;const n=E(),r=null!=(t=new URLSearchParams(null==n?void 0:n.location.search).get(e.label))?t:void 0;return N(u({onUpdate:(t,r)=>{if(!n)return;const o=new URL(n.location.toString()),i=new URLSearchParams(o.search);void 0===t?i.delete(e.label):i.set(e.label,t),t!==r&&t!==r&&(o.search=i.toString(),history.pushState({},"",o.toString()))}},e,{defaultQuery:e.defaultQuery,currentQuery:r}))}const ue=["disable","enable","on","off","toggle"];function se(e){const{disable:n}=e,r=s(e,ue),o=t.useRef(null);return t.useEffect(()=>{var t,n;e.on?null==(t=o.current)||t.showModal():null==(n=o.current)||n.close()},[e.on]),X({Escape:n}),b({ref:o,condition:e.on}),oe(e.on),t.createElement("dialog",u({ref:o,tabIndex:0,"data-display":e.on?"flex":"none","data-direction":"column","data-mx":"auto","data-p":"24","data-position":"absolute","data-z":"2","data-bg":"white","data-br":"4","data-bc":"gray-300","data-bw":"1","data-backdrop":"black"},r))}function le(e){return W()?null:t.createElement(t.Fragment,null,e.children)}const ce=["as"];function de(e){const{as:n}=e,r=s(e,ce);return t.createElement(n||"a",u({target:"_blank",rel:"noreferer noopener"},r))}const fe=e=>console.warn("Copying to clipboard not supported");async function ve(e){var t,n;const r=null!=(t=e.onFailure)?t:fe,o=null!=(n=e.onSuccess)?n:B;navigator.clipboard||r();try{await navigator.clipboard.writeText(e.text),o()}catch(e){r(e)}}class me{static datetime(e,t="N/A"){return e?new Date(e).toLocaleString():t}static monthDay(e){const t=new Date(e),n=me._pad(t.getDay());return`${me._pad(t.getMonth())}/${n}`}static form(e){return e?`${me._pad(e.getFullYear())}-${me._pad(e.getMonth()+1)}-${me._pad(e.getDate())}`:me.form(new Date)}static clockUTC(e){const t=new Date(e);return`${me._pad(t.getUTCHours())}:${me._pad(t.getUTCMinutes())}:${me._pad(t.getUTCSeconds())}`}static clockLocal(e){const t=new Date(e);return`${me._pad(t.getHours())}:${me._pad(t.getMinutes())}:${me._pad(t.getSeconds())}`}static countdown(e){const t=new Date(e);return`${me._pad(t.getHours())}:${me._pad(t.getMinutes())}:${me._pad(t.getSeconds())}`}static _pad(e){return String(e).padStart(2,"0")}}class pe{constructor(e,t){this.value=void 0;const n=new URLSearchParams(this.getNonEmptyFilters(t));this.value=""!==n.toString()?`${e}?${n.toString()}`:e}getNonEmptyFilters(e){return void 0===e?{}:Object.fromEntries(Object.entries(e).filter(([e,t])=>void 0!==t))}}function he(){return!E()}class ge{static extract(e){var t,n,r;return null!=(t=null==(n=e.data)||null==(r=n.pages)?void 0:r.flat().map(e=>e.result).flat())?t:[]}}function we(e){var t;if("en"!==e.language)return console.warn(`[@bgord/frontend] missing pluralization fuction for language ${e.language}.`),e.singular;const n=null!=(t=e.plural)?t:`${e.singular}s`;return 1===e.value?e.singular:n}ge.empty={result:[],meta:{exhausted:!0}};class ye{constructor(e){this.message=void 0,this._known=!0,this.message=e.message}static isServerError(e){return!!(e&&"object"==typeof e&&e===Object(e)&&e.hasOwnProperty("_known")&&e.hasOwnProperty("message"))}static async extract(e){if(e.ok)return e;const t=await e.json(),n=ye.isServerError(t)?t.message:"app.error.general";throw new ye({message:n})}static async handle(e){throw new ye({message:ye.isServerError(e)?e.message:"app.error.general"})}}const be=t.createContext(void 0);function Ee(e){const[n,r]=function(){var t;const n=null!=(t=null==e?void 0:e.timeout)?t:5e3,[r,o]=ee({comparisonFn:(e,t)=>e.id===t.id});return[[...r].reverse(),{add:function(e){const t=u({},e,{id:String(Date.now())});o.add(t),setTimeout(()=>o.remove(t),n)},remove:o.remove,clear:o.clear}]}();return t.createElement(be.Provider,{value:[n,r]},e.children)}function Se(){const e=t.useContext(be);if(void 0===e)throw new Error("useToasts must be used within the ToastsContextProvider");return e}function Te(){const[,e]=Se();return e.add}const xe=t.createContext({translations:{},language:"en"});function Le(e){return t.createElement(xe.Provider,{value:e.value},e.children)}function Me(){const e=t.useContext(xe);if(void 0===e)throw new Error("useTranslations must be used within the TranslationsContext");return function(t,n){const r=e.translations[t];return r?n?Object.entries(n).reduce((e,[t,n])=>e.replace(`{{${t}}}`,String(n)),r):r:(console.warn(`[@bgord/frontend] missing translation for key: ${t}`),t)}}function $e(){const e=t.useContext(xe);if(void 0===e)throw new Error("useLanguage must be used within the TranslationsContext");return e.language}function Ce(){const e=$e();return t=>we(u({},t,{language:e}))}export{w as AUDIO_DEFAULT_VOLUME,f as Anima,m as AnimaList,d as AnimaState,me as DateFormatter,M as Days,se as Dialog,h as DurationFormatter,pe as FilterUrl,$ as Hours,F as MiliSeconds,C as Minutes,le as OfflineIndicator,de as OutboundLink,ge as Pagination,I as Seconds,ye as ServerError,O as Time,Ee as ToastsContextProvider,Le as TranslationsContextProvider,P as UseExpandableListState,R as UseFileState,ve as copyToClipboard,G as defaultUseIsVisibleConfig,q as emptyImageResolution,v as getAnimaProps,_ as getCurrentTimestamp,Y as getImageResolution,E as getSafeWindow,he as isClient,J as isIntersectionObserverSupported,B as noop,we as pluralize,p as useAnimaList,y as useAudio,b as useAutofocus,T as useBreakpoint,x as useClickOutside,L as useClientSearch,k as useCurrentTimestamp,D as useDebounce,U as useDisablePullToRefresh,j as useDocumentTitle,A as useExpandableList,g as useField,H as useFile,N as useFilter,Q as useHover,V as useImageFileResolution,W as useIsOnline,K as useIsVisible,X as useKeyboardShortcurts,$e as useLanguage,Z as useLeavingPrompt,ee as useList,Ce as usePluralize,l as usePreviousValue,ne as useRateLimiter,re as useScroll,oe as useScrollLock,ie as useSound,Te as useToastTrigger,Se as useToastsContext,z as useToggle,Me as useTranslations,ae as useUrlFilter,S as useWindowDimensions};
//# sourceMappingURL=bgord-frontend.modern.js.map
