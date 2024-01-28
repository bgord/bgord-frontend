import*as e from"react";import t,{useRef as n,useEffect as r,useState as a,useLayoutEffect as o,useMemo as i,Fragment as u}from"react";import l from"tinykeys";import s from"js-cookie";import{polishPlurals as c}from"polish-plurals";import*as d from"ts-storage";function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(a[n]=e[n]);return a}function v(e,t){const a=n(t);return r(()=>{a.current=e}),a.current}const p=["children"];var g;function h(e){var n;const r=null!=(n=e.duration)?n:300,[a,o]=t.useState(function(){return e.visible?e.isInitial?g.appeared:g.appearing:g.hidden}),i=v(a);return t.useEffect(()=>{if(!e.isInitial)if(e.visible)o(g.appearing),setTimeout(()=>o(g.appeared),100);else{if(!i)return;o(g.hiding),setTimeout(()=>o(g.hidden),r)}},[e.visible]),a===g.hidden?null:t.cloneElement(e.children,{"data-anima":a,"data-anima-effect":e.effect,style:f({"--duration":`${r}ms`},e.children.props.style)})}function w(e){return{"data-anima":e["data-anima"],"data-anima-effect":e["data-anima-effect"],style:e.style}}function y(e){const n=m(e,p),[r,a]=t.useState(!0);return t.useEffect(()=>a(!1),[]),t.createElement("ul",f({},n),e.children.map(e=>t.cloneElement(e,{isInitial:r})))}function b(e,n){var r;const a=null!=(r=null==n?void 0:n.direction)?r:"head",[o,i]=t.useState(e.map(e=>({item:e,props:{visible:!0}})));let u=[];for(const t of e)!o.map(e=>e.item).some(e=>t.id===e.id)&&u.push(t);t.useEffect(()=>{0!==u.length&&(i("head"===a?e=>[...u.map(e=>({item:e,props:{visible:!0}})),...e]:e=>[...e,...u.map(e=>({item:e,props:{visible:!0}}))]),u=[])},[u.length,a]);let l=[];for(const{item:t}of o)e.every(e=>e.id!==t.id)&&l.push(t);return t.useEffect(()=>{0!==l.length&&(i(e=>e.map(e=>l.some(t=>t.id===e.item.id)?f({},e,{props:{visible:!1}}):e)),l=[])},[l.length]),{items:o.map(t=>{const n=e.find(e=>e.id===t.item.id);return n?f({},t,{item:n}):t}),count:o.filter(e=>e.props.visible).length}}!function(e){e.appearing="appearing",e.appeared="appeared",e.hiding="hiding",e.hidden="hidden"}(g||(g={}));class E{constructor(e){this.message=void 0,this._known=!0,this.message=e.message}static isServerError(e){return!!(e&&"object"==typeof e&&e===Object(e)&&e.hasOwnProperty("_known")&&e.hasOwnProperty("message"))}static async extract(e){if(e.ok)return e;const t=await e.json(),n=E.isServerError(t)?t.message:"app.error.general";throw new E({message:n})}static async handle(e){throw new E({message:E.isServerError(e)?e.message:"app.error.general"})}}const x=(e,t)=>fetch(e,f({mode:"same-origin",redirect:"follow"},t,{headers:f({"Content-Type":"application/json","time-zone-offset":(new Date).getTimezoneOffset().toString()},null==t?void 0:t.headers)})).then(E.extract).catch(E.handle);class T{static format(e){const t=Math.floor(e/60),n=e%60;return`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`}}const S=["value","set","clear","label","input","changed","unchanged","handleChange"];function M(e,t){const n="function"==typeof t?t():t,[o,i]=a(n);return r(()=>i(n),[n]),{value:o,set:i,handleChange:e=>i(e.currentTarget.value),clear:()=>i(n),label:{props:{htmlFor:e}},input:{props:{id:e,name:e}},changed:o!==n,unchanged:o==n}}function D(e){const{value:t,set:n,clear:r,label:a,input:o,changed:i,unchanged:u,handleChange:l}=e;return{field:{value:t,set:n,clear:r,label:a,input:o,changed:i,unchanged:u,handleChange:l},rest:m(e,S)}}const L=1;var C;function F(t){const[n,r]=e.useState(C.initial),a=e.useRef(null),o=M("duration",0),i=M("currentTime",0),u=M("volume",1),l=0===u.value,s=0===o.value?0:Math.round(i.value/o.value*100);function c(e){const t=e.currentTarget;a.current&&(a.current.currentTime=t.valueAsNumber,i.set(t.valueAsNumber))}function d(e){const t=e.currentTarget;a.current&&(a.current.volume=t.valueAsNumber,u.set(t.valueAsNumber))}return{props:{audio:{src:t,onTimeUpdate:function(e){i.set(Math.round(e.target.currentTime))},onLoadedMetadata:function(e){const t=e.currentTarget;a.current=t,o.set(Math.round(t.duration)),i.set(t.currentTime),u.set(t.volume),r(C.ready)},onEnded:function(){r(C.paused)},controls:!1},player:{min:0,step:1,max:o.value,value:i.value,onInput:c,style:{"--percentage":`${s}%`}},volume:{min:0,max:1,step:.01,value:u.value,onInput:d,style:{"--percentage":`${Math.floor(100*u.value)}%`}}},actions:{play:function(){a.current&&(a.current.play(),r(C.playing))},pause:function(){a.current&&(a.current.pause(),r(C.paused))},mute:function(){a.current&&(a.current.volume=0,u.set(0))},unmute:function(){a.current&&(a.current.volume=1,u.set(1))},reset:function(){a.current&&(a.current.currentTime=0,a.current.pause(),i.set(0),r(C.paused))},seek:c,changeVolume:d},meta:{state:n,isInitial:n===C.initial,isReady:n===C.ready,isPlaying:n===C.playing,isPaused:n===C.paused,matches:e=>e.some(e=>e===n),percentage:{raw:s,formatted:`${s}%`},currentTime:{raw:i.value,formatted:T.format(i.value)},duration:{raw:o.value,formatted:T.format(o.value)},volume:{value:u.value,raw:Math.floor(100*u.value),formatted:`${Math.floor(100*u.value)}%`},muted:l}}}function P(e){t.useEffect(()=>{var t;e.condition&&(null==(t=e.ref.current)||t.focus())},[e.condition])}function I(){if("undefined"!=typeof window)return window}function $(){const[e,t]=a({width:void 0,height:void 0});return r(()=>{const e=I();if(e)return e.addEventListener("resize",n),n(),()=>e.removeEventListener("resize",n);function n(){t({width:null==e?void 0:e.innerWidth,height:null==e?void 0:e.innerHeight})}},[]),e}function A(e){var t;const n=$();return(null!=(t=null==n?void 0:n.width)?t:0)<=e}function k(e,n,r){t.useEffect(()=>{if(e.current)return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t);function t(t){var a;null!=(a=e.current)&&a.contains(t.target)||(null==r?void 0:r.some(e=>{var n;return null==(n=e.current)?void 0:n.contains(t.target)}))||n()}},[n,e,r])}function O(){}function R(e){var t,n,o,i;const u=null!=(t=e.defaultQuery)?t:void 0,l=null!=(n=e.currentQuery)?n:void 0,s=null!=(o=e.filterFn)?o:function(e){return void 0===f||f===String(e)},c=Object.keys(e.enum),d=null!=(i=null==e?void 0:e.onUpdate)?i:O,[f,m]=a(null!=l?l:u),p=v(f);return r(()=>d(f,p),[p,f]),{query:f,clear:function(){m(u)},onChange:function(t){const n=t.currentTarget.value,r=Boolean(e.enum[String(n)]);m(r?n:void 0)},filterFn:s,options:c,onUpdate:d,name:e.name,changed:f!==u,unchanged:f===u,label:{props:{htmlFor:e.name}},input:{props:{id:e.name,name:e.name}}}}function N(){const[e,t]=a("");return{query:e,clear:function(){t("")},onChange:function(e){t(e.currentTarget.value)},filterFn:function(t){return""===e||(null==t?void 0:t.toLowerCase().includes(e.toLowerCase()))},changed:""!==e,unchanged:""===e}}!function(e){e.initial="initial",e.ready="ready",e.playing="playing",e.paused="paused"}(C||(C={}));const U=()=>0;function _(e,t){var n;const r=M(e,t.enum.default);return f(r.value===t.enum.default?{sortFn:U,options:Object.keys(t.options)}:{sortFn:null!=(n=t.options[r.value])?n:U,options:Object.keys(t.options)},r,{handleChange:function(e){const n=e.currentTarget.value,a=Boolean(t.enum[String(n)]);r.set(a?n:t.enum.default)}})}function j(e){return{value:e,hours:24*e,minutes:24*e*60,seconds:24*e*60*60,ms:24*e*60*60*1e3}}function H(e){return{value:e,minutes:60*e,seconds:60*e*60,ms:60*e*60*1e3}}function B(e){return{value:e,seconds:60*e,ms:60*e*1e3}}function q(e){return{value:e,ms:1e3*e}}const z={Days:j,Hours:H,Minutes:B,Seconds:q};function W(){return Date.now()}function Q(){const[e,t]=a(W);return r(()=>{const e=setInterval(()=>t(W()),z.Seconds(1).ms);return()=>clearInterval(e)},[]),e}function V(e){const[n,r]=t.useState(e.value);return t.useEffect(()=>{const t=setTimeout(()=>r(e.value),e.delayMs);return()=>clearTimeout(t)},[e.value,e.delayMs]),n}const K=["on","off","enable","disable","toggle"];function Y(e=!1){const[t,n]=a(e);return{on:t,off:!t,enable:()=>n(!0),disable:()=>n(!1),toggle:()=>n(e=>!e)}}function J(e){const{on:t,off:n,enable:r,disable:a,toggle:o}=e;return{toggle:{on:t,off:n,enable:r,disable:a,toggle:o},rest:m(e,K)}}function Z(e,t=500){const n=Y(),a=Y();let o;return r(()=>(o=setTimeout(a.enable,t),()=>clearTimeout(o)),[]),r(()=>{if(!a.off)return e.isLoading?n.enable():n.disable()},[e.isLoading,a.on]),n}function G(e){const t=Y(e),n=I();return r(()=>{n&&(n.document.designMode=t.on?"on":"off")},[t.on]),t}function X(e=!0){o(()=>{if(!e)return;const t=document.querySelector("html"),n=document.body,r=window.getComputedStyle(t).overscrollBehavior,a=window.getComputedStyle(n).overscrollBehavior;return n.style.overscrollBehavior="none",t.style.overscrollBehavior="none",()=>{n.style.overscrollBehavior=a,t.style.overscrollBehavior=r}},[e])}function ee(e){t.useEffect(()=>{document.title=e},[e])}var te,ne;function re(e){const t=e.length-e.max,n=e.length>e.max;function o(){return n?te.contracted:te.expanded}const[i,u]=a(o);return r(()=>u(o()),[e.length,e.max]),{state:i,displayShowMore:i===te.contracted,displayShowLess:i===te.expanded&&n,actions:{showMore:function(){i===te.contracted&&u(te.expanded)},showLess:function(){i===te.expanded&&u(te.contracted)}},numberOfExcessiveElements:t,filterFn:function(t,n){return i===te.expanded||n<e.max}}}function ae(e,t){var n;const r=null!=(n=null==t?void 0:t.maxSize)?n:Infinity,[o,u]=a(0),[l,s]=a(ne.idle),[c,d]=a(null);function f(e){const t=e.currentTarget.files;if(!t||!t[0])return;const n=t[0];if(!(n.size>r))return d(n),s(ne.selected),n;s(ne.error)}function m(){u(e=>e+1),d(null),s(ne.idle)}const v=i(()=>c?URL.createObjectURL(c):void 0,[c]);function p(e){return e.some(e=>e===l)}return l===ne.idle?{state:l,matches:p,isIdle:!0,isSelected:!1,isError:!1,data:null,actions:{selectFile:f,clearFile:m},label:{props:{htmlFor:e}},input:{props:{id:e,name:e,multiple:!1,key:o}}}:l===ne.selected?{state:l,matches:p,data:c,isIdle:!1,isSelected:!0,isError:!1,actions:{selectFile:f,clearFile:m},preview:v,label:{props:{htmlFor:e}},input:{props:{id:e,name:e,multiple:!1,key:o}}}:{state:l,matches:p,data:null,isIdle:!1,isSelected:!1,isError:!0,actions:{selectFile:f,clearFile:m},label:{props:{htmlFor:e}},input:{props:{id:e,name:e,multiple:!1,key:o}}}}function oe(e,n){var r;const a=null==(r=null==n?void 0:n.enabled)||r;t.useEffect(()=>{if(!a)return;const t=l(window,e);return()=>t()},[e,a])}function ie(e){const t=n(null);return oe({[e]:()=>{var e;return null==(e=t.current)?void 0:e.focus()}}),t}function ue(e){var n;const r=null==(n=null==e?void 0:e.enabled)||n,a=t.useRef(null),o=Y(!1),i=o.enable,u=o.disable;return t.useEffect(()=>{const e=a.current;return e&&r&&(e.addEventListener("mouseenter",i),e.addEventListener("mouseleave",u)),()=>{e&&r&&(e.removeEventListener("mouseenter",i),e.removeEventListener("mouseleave",u))}},[]),{attach:{ref:a},isHovering:o.on&&r}}!function(e){e.contracted="contracted",e.expanded="expanded"}(te||(te={})),function(e){e.idle="idle",e.selected="selected",e.error="error"}(ne||(ne={}));const le={width:null,height:null};async function se(e){if(!e)return le;const t=document.createElement("img"),n=new Promise((e,n)=>{t.onload=()=>e({width:t.width,height:t.height}),t.onerror=n});return t.src=e,n}function ce(t){var n;const r=M("resolution",le);return e.useEffect(()=>{!async function(){if(t.state===ne.selected)try{const e=await se(t.preview);return r.set(e)}catch(e){return r.clear()}[ne.error,ne.idle].includes(t.state)&&null!==r.value.width&&null!==r.value.height&&r.clear()}()},[t.state,null==(n=t.data)?void 0:n.name]),r.value}const de=()=>{const e=Y("undefined"==typeof navigator||"boolean"!=typeof navigator.onLine||navigator.onLine);return t.useEffect(()=>{function t(){e.enable()}function n(){e.disable()}return window.addEventListener("online",t),window.addEventListener("offline",n),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",n)}},[]),e.on},fe={threshold:0,root:null,rootMargin:"0%",ref:{current:null}};function me(){return"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype}function ve(e=fe){const[t,n]=a(!1);return r(()=>{const t=e.ref.current;if(!me()||!t)return;const r=new IntersectionObserver(e=>{var t;return n(Boolean(null==(t=e[0])?void 0:t.isIntersecting))},e);return r.observe(t),()=>r.unobserve(t)},[]),t}function pe(e,t){return e===t}function ge(e){var t,n;const r=null!=(t=null==e?void 0:e.comparisonFn)?t:pe,[o,i]=a(null!=(n=null==e?void 0:e.defaultItem)?n:null);return{clear:()=>i(null),set:e=>i(e),toggle:e=>i(t=>null===t?e:r(t,e)?null:e),value:o,isDefault:r(o,null),exists:!r(o,null),compare:e=>r(o,e)}}var he,we;function ye(e){const t=Object.keys(e);return function(n){const r=n.key,a=e[r];t.includes(n.key)&&e[r]&&a&&a()}}function be(e){if(e.language===we.en){var t;const n=null!=(t=e.plural)?t:`${e.singular}s`;return 1===e.value?e.singular:n}if(e.language===we.pl){var n;const t=null!=(n=e.value)?n:1;return 1===t?e.singular:c(e.singular,String(e.plural),String(e.genitive),t)}return console.warn(`[@bgord/frontend] missing pluralization function for language ${e.language}.`),e.singular}!function(e){e.Enter="Enter",e.Space=" "}(he||(he={})),function(e){e.en="en",e.pl="pl"}(we||(we={}));const Ee=t.createContext({translations:{},language:"en"});function xe(e){return t.createElement(Ee.Provider,{value:e.value},e.children)}function Te(){const e=t.useContext(Ee);if(void 0===e)throw new Error("useTranslations must be used within the TranslationsContext");return function(t,n){const r=e.translations[t];return r?n?Object.entries(n).reduce((e,[t,n])=>e.replace(`{{${t}}}`,String(n)),r):r:(console.warn(`[@bgord/frontend] missing translation for key: ${t}`),t)}}function Se(){const e=t.useContext(Ee);if(void 0===e)throw new Error("useLanguage must be used within the TranslationsContext");return e.language}function Me(){const e=Se();return t=>be(f({},t,{language:e}))}function De(e){return R({enum:e,currentQuery:Se(),name:"language",onUpdate:(e,t)=>{const n=I();n&&e&&t&&t!==e&&(s.set("accept-language",e),n.document.location.reload())}})}function Le(e=!1){t.useEffect(()=>{if(e)return window.addEventListener("beforeunload",t),()=>window.removeEventListener("beforeunload",t);function t(e){e.preventDefault()}},[e])}function Ce(e){var t,n;const r=null!=(t=null==e?void 0:e.defaultItems)?t:[],o=null!=(n=null==e?void 0:e.comparisonFn)?n:(e,t)=>e===t,[i,u]=a(r);function l(e){u(t=>Array.isArray(e)?[...t,...e]:[...t,e])}function s(e){u(t=>t.filter(t=>!o(t,e)))}function c(e){return i.some(t=>o(t,e))}return[i,{clear:function(){u([])},add:l,remove:s,toggle:function(e){c(e)?s(e):l(e)},isAdded:c,update:u}]}function Fe(){return{onKeyDown:e=>{var t;"Enter"===e.key&&e.metaKey&&(null==(t=e.currentTarget.form)||t.dispatchEvent(new Event("submit",{cancelable:!0})))}}}function Pe(){var e,t,n;const r=M("meta",null),a=null==(e=r.value)?void 0:e.previousPage,o=null==(t=r.value)?void 0:t.nextPage,i=(null==(n=r.value)?void 0:n.lastPage)||1,u=M("page",1);return{current:u.value,last:i,controls:{firstPage:{active:!a,disabled:!1,exists:!0,go:()=>u.set(1),value:1},previousPage:{active:!1,disabled:!a,exists:Boolean(a),go:()=>u.set(null!=a?a:u.value),value:a},nextPage:{active:!1,disabled:!o,exists:Boolean(o),go:()=>u.set(null!=o?o:u.value),value:o},lastPage:{active:u.value===i,disabled:!o,exists:!0,go:()=>u.set(null!=i?i:u.value),value:i}},update:e=>r.set(e)}}class Ie{static get(e,t){return d.get(e,t).value}static set(e,t){d.set(e,t)}static clear(e){d.remove(e)}}function $e(t,n=!1){const r=Y(Ie.get(t,n));return e.useEffect(()=>Ie.set(t,r.on),[t,r.on]),f({},r,{clear:()=>Ie.clear(t)})}class Ae{constructor(e){this.lastInvocationTimestamp=null,this.options=void 0,this.options=e}verify(e){if(!this.lastInvocationTimestamp)return this.lastInvocationTimestamp=e,{allowed:!0};const t=this.lastInvocationTimestamp+this.options.limitMs;return t<=e?(this.lastInvocationTimestamp=e,{allowed:!0}):{allowed:!1,remainingMs:t-e}}}function ke(e){const t=n(new Ae(e));return function(...n){const r=Date.now(),a=t.current.verify(r);return a.allowed?e.action(...n):null==e.fallback?void 0:e.fallback(a.remainingMs)}}function Oe(){const e=I(),[n,r]=t.useState(0),a=Y(!1);return t.useLayoutEffect(()=>{function t(){e&&(r(null==e?void 0:e.scrollY),e.document.body.clientHeight<e.document.body.scrollHeight?a.enable():a.disable())}return null==e||e.addEventListener("scroll",t),()=>null==e?void 0:e.removeEventListener("scroll",t)},[]),{actions:{goToTop:function(){e&&e.scrollTo({top:0,left:0,behavior:"smooth"})}},position:{value:n,isInitial:0===n,hasChanged:n>0},visible:a.on,hidden:a.off}}function Re(e=!0){r(()=>{if(!e)return;const t=document.querySelector("html"),n=window.getComputedStyle(t).overflow;return t.style.overflow="hidden",()=>{t.style.overflow=n}},[e])}function Ne(e){const t=new Audio(e);return{play:t.play.bind(t)}}function Ue(e){var t;const n=I(),r=null!=(t=new URLSearchParams(null==n?void 0:n.location.search).get(e.name))?t:void 0;return R(f({onUpdate:(t,r)=>{if(!n)return;const a=new URL(n.location.toString()),o=new URLSearchParams(a.search);void 0===t?o.delete(e.name):o.set(e.name,t),t!==r&&t!==r&&(a.search=o.toString(),history.pushState({},"",a.toString()))}},e,{defaultQuery:e.defaultQuery,currentQuery:r}))}const _e=1;var je;function He(t){const[n,r]=e.useState(je.initial),a=e.useRef(null),o=M("duration",0),i=M("currentTime",0),u=M("volume",1),l=0===u.value,s=0===o.value?0:Math.round(i.value/o.value*100);function c(e){const t=e.currentTarget;a.current&&(a.current.currentTime=t.valueAsNumber,i.set(t.valueAsNumber))}function d(e){const t=e.currentTarget;a.current&&(a.current.volume=t.valueAsNumber,u.set(t.valueAsNumber))}return{props:{video:{src:t,onTimeUpdate:function(e){i.set(Math.round(e.target.currentTime))},onLoadedMetadata:function(e){const t=e.currentTarget;a.current=t,o.set(Math.round(t.duration)),i.set(t.currentTime),u.set(t.volume),r(je.ready)},onEnded:function(){r(je.paused)},controls:!1},player:{min:0,step:1,max:o.value,value:i.value,onInput:c,style:{"--percentage":`${s}%`}},volume:{min:0,max:1,step:.01,value:u.value,onInput:d,style:{"--percentage":`${Math.floor(100*u.value)}%`}}},actions:{play:function(){a.current&&(a.current.play(),r(je.playing))},pause:function(){a.current&&(a.current.pause(),r(je.paused))},mute:function(){a.current&&(a.current.volume=0,u.set(0))},unmute:function(){a.current&&(a.current.volume=1,u.set(1))},reset:function(){a.current&&(a.current.currentTime=0,a.current.pause(),i.set(0),r(je.paused))},seek:c,changeVolume:d,triggerFullscreen:function(){a.current&&a.current.requestFullscreen()}},meta:{state:n,isInitial:n===je.initial,isReady:n===je.ready,isPlaying:n===je.playing,isPaused:n===je.paused,matches:e=>e.some(e=>e===n),percentage:{raw:s,formatted:`${s}%`},currentTime:{raw:i.value,formatted:T.format(i.value)},duration:{raw:o.value,formatted:T.format(o.value)},volume:{value:u.value,raw:Math.floor(100*u.value),formatted:`${Math.floor(100*u.value)}%`},muted:l}}}function Be(e){const{toggle:n,rest:r}=J(e),a=t.useRef(null);return t.useEffect(()=>{var t,n;e.on?null==(t=a.current)||t.showModal():null==(n=a.current)||n.close()},[e.on]),oe({Escape:n.disable}),P({ref:a,condition:e.on}),Re(e.on),k(a,n.disable),t.createElement("dialog",f({ref:a,tabIndex:0,"data-display":e.on?"flex":"none","data-direction":"column","data-mx":"auto","data-p":"24","data-position":"fixed","data-z":"2","data-bg":"white","data-br":"4","data-bc":"gray-300","data-bw":"1","data-backdrop":"black"},r))}function qe(e){return de()?null:t.createElement(t.Fragment,null,e.children)}!function(e){e.initial="initial",e.ready="ready",e.playing="playing",e.paused="paused"}(je||(je={}));const ze=["as"];function We(e){const{as:n}=e,r=m(e,ze);return t.createElement(n||"a",f({target:"_blank",rel:"noreferer noopener"},r))}function Qe(e){return function(){e.forEach(e=>e())}}const Ve={Dimensions:function(e){const n=$();return t.createElement("div",f({"data-fs":"12"},e),n.width," x ",n.height)},Truncates:function(){const e=Y(),n=M("length",128),[r,a]=t.useState(new Map);return t.createElement("div",{"data-display":"flex","data-cross":"center","data-gap":"6"},t.createElement("label",f({className:"c-label"},n.label.props),"Length"),t.createElement("input",f({className:"c-input",type:"number",value:n.value,onChange:e=>n.set(e.currentTarget.valueAsNumber)},n.input.props)),t.createElement("button",{className:"c-button","data-variant":"bare",type:"button",onClick:Qe([()=>(()=>{const e=document.querySelectorAll('[data-transform="truncate"]'),t=new Map(r);e.forEach(e=>{const r=e.textContent;t.has(e)?(e.textContent=t.get(e),t.delete(e)):(t.set(e,r),e.textContent="x".repeat(n.value))}),a(t)})(),e.toggle])},e.on?"Hide truncates":"Expand truncates"))}};function Ke(e){const{field:n,rest:r}=D(e);return t.createElement(u,null,t.createElement("input",f({className:"c-switch-checkbox c-visually-hidden",type:"checkbox",checked:n.value,onChange:e=>n.set(e.currentTarget.checked)},n.input.props,r)),t.createElement("label",f({className:"c-switch-label"},n.label.props),t.createElement("div",{className:"c-switch-slider"})))}const Ye=e=>console.warn("Copying to clipboard not supported");async function Je(e){var t,n;const r=null!=(t=e.onFailure)?t:Ye,a=null!=(n=e.onSuccess)?n:O;navigator.clipboard||r();try{await navigator.clipboard.writeText(e.text),a()}catch(e){r(e)}}class Ze{static datetime(e,t="N/A"){return e?new Date(e).toLocaleString():t}static monthDay(e){const t=new Date(e);return`${Ze._padDatePart(t.getDate())}/${Ze._padDatePart(t.getMonth()+1)}`}static form(e){return e?`${Ze._padDatePart(e.getFullYear())}-${Ze._padDatePart(e.getMonth()+1)}-${Ze._padDatePart(e.getDate())}`:Ze.form(new Date)}static clockUTC(e){const t=new Date(e);return`${Ze._padDatePart(t.getUTCHours())}:${Ze._padDatePart(t.getUTCMinutes())}:${Ze._padDatePart(t.getUTCSeconds())}`}static clockLocal(e){const t=new Date(e);return`${Ze._padDatePart(t.getHours())}:${Ze._padDatePart(t.getMinutes())}:${Ze._padDatePart(t.getSeconds())}`}static countdown(e){const t=new Date(e);return`${Ze._padDatePart(t.getHours())}:${Ze._padDatePart(t.getMinutes())}:${Ze._padDatePart(t.getSeconds())}`}static formDatetimeLocal(e){const t=e-B((new Date).getTimezoneOffset()).ms;return new Date(t).toISOString().slice(0,16)}static _padDatePart(e){return String(e).padStart(2,"0")}}class Ge{static convertUtcToLocal(e){const t=(new Date).getTimezoneOffset(),n=(H(e).minutes-t)/60%24;return{value:n,label:`${String(n).padStart(2,"0")}:00`}}}class Xe{static fromRevision(e){return{"if-match":String(e)}}}class et{static fromRevision(e){return{"if-match":`W/${e}`}}}const tt=t.createContext({});function nt(e){return t.createElement(tt.Provider,{value:e.value},e.children)}function rt(){const e=t.useContext(tt);if(void 0===e)throw new Error("useFeatureFlags must be used within the FeatureFlagsContext");return e}function at(e){const n=t.useContext(tt);if(void 0===n)throw new Error("useFeatureFlag must be used within the FeatureFlagsContext");return"yes"===n[e]}class ot{constructor(e,t){this.value=void 0;const n=this.getNonEmptyFilters(t),r=new URLSearchParams(n);this.value=""!==r.toString()?`${e}?${r.toString()}`:e}getNonEmptyFilters(e){return void 0===e?{}:Object.fromEntries(Object.entries(e).filter(([e,t])=>void 0!==t))}}class it{static pattern(e){var t;const n=null==(t=e.required)||t;return e.min&&!e.max?{pattern:`.{${e.min}}`,required:n}:e.min&&e.max?{pattern:`.{${e.min},${e.max}}`,required:n}:!e.min&&e.max?{pattern:`.{,${e.max}}`,required:n}:{pattern:void 0,required:n}}}function ut(){return!I()}function lt(e=2){return{"data-transform":"line-clamp",style:{"--lines":e}}}class st{static float(e,t=2){return parseFloat(e.toFixed(t))}}class ct{constructor(e){var t,n,r,a;this.min=void 0,this.max=void 0,this.lower=void 0,this.upper=void 0;const o=null!=(t=null==(n=e.bound)?void 0:n.lower)?t:0,i=null!=(r=null==(a=e.bound)?void 0:a.upper)?r:1;if(e.max-e.min<0)throw new Error("Invalid MinMaxScaler min-max config");if(i-o<=0)throw new Error("Invalid MinMaxScaler bound config");this.min=e.min,this.max=e.max,this.lower=o,this.upper=i}scale(e){const{min:t,max:n,lower:r,upper:a}=this;if(e<t||e>n)throw new Error("Value out of min/max range");return t===n?{original:e,scaled:(r+a)/2,isMin:e===t,isMax:e===n}:{original:e,scaled:st.float((e-t)/(n-t)*(a-r)+r,2),isMin:e===t,isMax:e===n}}descale(e){const{min:t,max:n,lower:r,upper:a}=this;if(e<r||e>a)throw new Error("Scaled value out of bounds");return{original:st.float((e-r)/(a-r)*(n-t)+t,2),scaled:e,isLowerBound:e===r,isUpperBound:e===a}}static getMinMax(e){if(0===e.length)throw new Error("An empty array supplied");return{min:Math.min(...e),max:Math.max(...e)}}}class dt{static infinite(e){var t,n,r;return null!=(t=null==(n=e.data)||null==(r=n.pages)?void 0:r.flat().map(e=>e.result).flat())?t:[]}}function ft(e){var n;const r=null==(n=e.enabled)||n,[a,o]=t.useState(e.initialItems);t.useEffect(()=>o(e.initialItems),[JSON.stringify(e.initialItems)]);const i=t.useRef(null),[u,l]=t.useState(null),[s,c]=t.useState(null);function d(e){return function(t){var n;l(e),i.current=null!=(n=a[e])?n:null,null!=t&&t.dataTransfer&&!t.currentTarget.parentNode&&(t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("text/html",t.currentTarget.parentNode),t.dataTransfer.setDragImage(t.currentTarget.parentNode,20,20))}}function f(e){return function(t){t.preventDefault();const n=a[e];c(e),i.current!==n&&i.current&&o(a.filter(e=>e!==i.current).toSpliced(e,0,i.current))}}function m(t){return function(n){var r;null!==u&&null!==s&&u!==s&&e.callback({correlationId:e.correlationId,id:null==(r=a[t])?void 0:r.id,item:a[t],to:s}),l(null),i.current=null,c(null)}}const v=r?i.current?"grabbing":"grab":"auto";return{items:a,enabled:r,props:{item:e=>({onDragOver:f(e)}),handle:e=>({onDragStart:d(e),onDragEnd:m(e),draggable:r,style:{cursor:v}})}}}function mt(e=12){return{times(t){const n=e*t,r={height:{height:vt(n)},minHeight:{minHeight:vt(n)},maxHeight:{maxHeight:vt(n)},width:{width:vt(n)},minWidth:{minWidth:vt(n)},maxWidth:{maxWidth:vt(n)},square:{height:vt(n),width:vt(n)}},a={height:{style:{height:vt(n)}},minHeight:{style:{minHeight:vt(n)}},maxHeight:{style:{maxHeight:vt(n)}},width:{style:{width:vt(n)}},minWidth:{style:{minWidth:vt(n)}},maxWidth:{style:{maxWidth:vt(n)}},square:{style:{height:vt(n),width:vt(n)}}};return f({px:vt(n),raw:n,style:a},r)}}}function vt(e){return`${e}px`}dt.empty={result:[],meta:{exhausted:!0}};class pt{static updatedAtMostRecent(e,t){return pt.descending(e.updatedAt.raw,t.updatedAt.raw)}static updatedAtLeastRecent(e,t){return pt.ascending(e.updatedAt.raw,t.updatedAt.raw)}static createdAtMostRecent(e,t){return pt.descending(e.createdAt.raw,t.createdAt.raw)}static createdAtLeastRecent(e,t){return pt.ascending(e.createdAt.raw,t.createdAt.raw)}static aToZ(e,t){return e.localeCompare(t)}static zToA(e,t){return t.localeCompare(e)}static ascending(e,t){return e>t?1:0}static descending(e,t){return e<t?1:0}}class gt{static format(e,t=gt.DEFAULT_SEPARATOR){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,t)}}gt.DEFAULT_SEPARATOR=" ";const ht=t.createContext(void 0);function wt(e){const[n,r]=function(){var t;const n=null!=(t=null==e?void 0:e.timeout)?t:5e3,[r,a]=Ce({comparisonFn:(e,t)=>e.id===t.id});return[r.toReversed(),{add:function(e){const t=f({},e,{id:String(Date.now())});a.add(t),setTimeout(()=>a.remove(t),n)},remove:a.remove,clear:a.clear}]}();return t.createElement(ht.Provider,{value:[n,r]},e.children)}function yt(){const e=t.useContext(ht);if(void 0===e)throw new Error("useToasts must be used within the ToastsContextProvider");return e}function bt(){const[,e]=yt();return e.add}export{x as API,L as AUDIO_DEFAULT_VOLUME,h as Anima,y as AnimaList,g as AnimaState,st as Approximation,Ze as DateFormatter,j as Days,Ve as DevTools,Be as Dialog,T as DurationFormatter,Xe as ETag,nt as FeatureFlagsContextProvider,ot as FilterUrl,it as Form,Ge as HourFormatter,H as Hours,he as KeyNameEnum,lt as LineClamp,ct as MinMaxScaler,B as Minutes,qe as OfflineIndicator,We as OutboundLink,dt as Pagination,mt as Rhythm,Ie as SafeLocalStorage,q as Seconds,E as ServerError,pt as Sorts,Ke as Switch,gt as ThousandsSeparator,z as Time,wt as ToastsContextProvider,xe as TranslationsContextProvider,C as UseAudioState,te as UseExpandableListState,ne as UseFileState,je as UseVideoState,_e as VIDEO_DEFAULT_VOLUME,et as WeakETag,Je as copyToClipboard,U as defaultSortFn,fe as defaultUseIsVisibleConfig,le as emptyImageResolution,Qe as exec,D as extractUseField,J as extractUseToggle,w as getAnimaProps,W as getCurrentTimestamp,se as getImageResolution,I as getSafeWindow,ut as isClient,me as isIntersectionObserverSupported,O as noop,be as pluralize,b as useAnimaList,F as useAudio,P as useAutofocus,A as useBreakpoint,k as useClickOutside,R as useClientFilter,N as useClientSearch,_ as useClientSort,Q as useCurrentTimestamp,V as useDebounce,Z as useDelayedLoader,G as useDesignMode,X as useDisablePullToRefresh,ee as useDocumentTitle,re as useExpandableList,at as useFeatureFlag,rt as useFeatureFlags,M as useField,ae as useFile,ie as useFocusKeyboardShortcut,ue as useHover,ce as useImageFileResolution,de as useIsOnline,ve as useIsVisible,ge as useItem,ye as useKeyHandler,oe as useKeyboardShortcuts,Se as useLanguage,De as useLanguageSelector,Le as useLeavingPrompt,Ce as useList,Fe as useMetaEnterSubmit,Pe as usePagination,$e as usePersistentToggle,Me as usePluralize,v as usePreviousValue,ke as useRateLimiter,ft as useReordering,Oe as useScroll,Re as useScrollLock,Ne as useSound,bt as useToastTrigger,yt as useToastsContext,Y as useToggle,Te as useTranslations,Ue as useUrlFilter,He as useVideo,$ as useWindowDimensions};
//# sourceMappingURL=bgord-frontend.modern.js.map
