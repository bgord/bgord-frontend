import*as e from"react";import t,{useRef as n,useEffect as r,useState as a,useLayoutEffect as o,useMemo as i}from"react";import u from"tinykeys";import l from"js-cookie";import{polishPlurals as s}from"polish-plurals";import*as c from"ts-storage";function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(a[n]=e[n]);return a}function m(e,t){const a=n(t);return r(()=>{a.current=e}),a.current}const v=["children"];var p;function g(e){var n;const r=null!=(n=e.duration)?n:300,[a,o]=t.useState(function(){return e.visible?e.isInitial?p.appeared:p.appearing:p.hidden}),i=m(a);return t.useEffect(()=>{if(!e.isInitial)if(e.visible)o(p.appearing),setTimeout(()=>o(p.appeared),100);else{if(!i)return;o(p.hiding),setTimeout(()=>o(p.hidden),r)}},[e.visible]),a===p.hidden?null:t.cloneElement(e.children,{"data-anima":a,"data-anima-effect":e.effect,style:d({"--duration":`${r}ms`},e.children.props.style)})}function h(e){return{"data-anima":e["data-anima"],"data-anima-effect":e["data-anima-effect"],style:e.style}}function w(e){const n=f(e,v),[r,a]=t.useState(!0);return t.useEffect(()=>a(!1),[]),t.createElement("ul",d({},n),e.children.map(e=>t.cloneElement(e,{isInitial:r})))}function y(e,n){var r;const a=null!=(r=null==n?void 0:n.direction)?r:"head",[o,i]=t.useState(e.map(e=>({item:e,props:{visible:!0}})));let u=[];for(const t of e)!o.map(e=>e.item).some(e=>t.id===e.id)&&u.push(t);t.useEffect(()=>{0!==u.length&&(i("head"===a?e=>[...u.map(e=>({item:e,props:{visible:!0}})),...e]:e=>[...e,...u.map(e=>({item:e,props:{visible:!0}}))]),u=[])},[u.length,a]);let l=[];for(const{item:t}of o)e.every(e=>e.id!==t.id)&&l.push(t);return t.useEffect(()=>{0!==l.length&&(i(e=>e.map(e=>l.some(t=>t.id===e.item.id)?d({},e,{props:{visible:!1}}):e)),l=[])},[l.length]),{items:o.map(t=>{const n=e.find(e=>e.id===t.item.id);return n?d({},t,{item:n}):t}),count:o.filter(e=>e.props.visible).length}}!function(e){e.appearing="appearing",e.appeared="appeared",e.hiding="hiding",e.hidden="hidden"}(p||(p={}));class b{constructor(e){this.message=void 0,this._known=!0,this.message=e.message}static isServerError(e){return!!(e&&"object"==typeof e&&e===Object(e)&&e.hasOwnProperty("_known")&&e.hasOwnProperty("message"))}static async extract(e){if(e.ok)return e;const t=await e.json(),n=b.isServerError(t)?t.message:"app.error.general";throw new b({message:n})}static async handle(e){throw new b({message:b.isServerError(e)?e.message:"app.error.general"})}}const E=(e,t)=>fetch(e,d({mode:"same-origin",redirect:"follow"},t,{headers:d({"Content-Type":"application/json","time-zone-offset":(new Date).getTimezoneOffset().toString()},null==t?void 0:t.headers)})).then(b.extract).catch(b.handle);class x{static format(e){const t=Math.floor(e/60),n=e%60;return`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`}}const S=["value","set","clear","label","input","changed","unchanged"];function T(e,t){const n="function"==typeof t?t():t,[o,i]=a(n);return r(()=>i(n),[n]),{value:o,set:i,clear:function(){i(n)},label:{props:{htmlFor:e}},input:{props:{id:e,name:e}},changed:o!==n,unchanged:o==n}}function D(e){const{value:t,set:n,clear:r,label:a,input:o,changed:i,unchanged:u}=e;return{field:{value:t,set:n,clear:r,label:a,input:o,changed:i,unchanged:u},rest:f(e,S)}}const M=1;var L;function P(t){const[n,r]=e.useState(L.initial),a=e.useRef(null),o=T("duration",0),i=T("currentTime",0),u=T("volume",1),l=0===u.value,s=0===o.value?0:Math.round(i.value/o.value*100);function c(e){const t=e.currentTarget;a.current&&(a.current.currentTime=t.valueAsNumber,i.set(t.valueAsNumber))}function d(e){const t=e.currentTarget;a.current&&(a.current.volume=t.valueAsNumber,u.set(t.valueAsNumber))}return{props:{audio:{src:t,onTimeUpdate:function(e){i.set(Math.round(e.target.currentTime))},onLoadedMetadata:function(e){const t=e.currentTarget;a.current=t,o.set(Math.round(t.duration)),i.set(t.currentTime),u.set(t.volume),r(L.ready)},onEnded:function(){r(L.paused)},controls:!1},player:{min:0,step:1,max:o.value,value:i.value,onInput:c,style:{"--percentage":`${s}%`}},volume:{min:0,max:1,step:.01,value:u.value,onInput:d,style:{"--percentage":`${Math.floor(100*u.value)}%`}}},actions:{play:function(){a.current&&(a.current.play(),r(L.playing))},pause:function(){a.current&&(a.current.pause(),r(L.paused))},mute:function(){a.current&&(a.current.volume=0,u.set(0))},unmute:function(){a.current&&(a.current.volume=1,u.set(1))},reset:function(){a.current&&(a.current.currentTime=0,a.current.pause(),i.set(0),r(L.paused))},seek:c,changeVolume:d},meta:{state:n,isInitial:n===L.initial,isReady:n===L.ready,isPlaying:n===L.playing,isPaused:n===L.paused,matches:e=>e.some(e=>e===n),percentage:{raw:s,formatted:`${s}%`},currentTime:{raw:i.value,formatted:x.format(i.value)},duration:{raw:o.value,formatted:x.format(o.value)},volume:{value:u.value,raw:Math.floor(100*u.value),formatted:`${Math.floor(100*u.value)}%`},muted:l}}}function I(e){t.useEffect(()=>{var t;e.condition&&(null==(t=e.ref.current)||t.focus())},[e.condition])}function F(){if("undefined"!=typeof window)return window}function $(){const[e,t]=a({width:void 0,height:void 0});return r(()=>{const e=F();if(e)return e.addEventListener("resize",n),n(),()=>e.removeEventListener("resize",n);function n(){t({width:null==e?void 0:e.innerWidth,height:null==e?void 0:e.innerHeight})}},[]),e}function C(e){var t;const n=$();return(null!=(t=null==n?void 0:n.width)?t:0)<=e}function O(e,n,r){t.useEffect(()=>{if(e.current)return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t);function t(t){var a;null!=(a=e.current)&&a.contains(t.target)||(null==r?void 0:r.some(e=>{var n;return null==(n=e.current)?void 0:n.contains(t.target)}))||n()}},[n,e,r])}function k(){const[e,t]=a("");return{query:e,clear:function(){t("")},onChange:function(e){t(e.currentTarget.value)},filterFn:function(t){return""===e||(null==t?void 0:t.toLowerCase().includes(e.toLowerCase()))},changed:""!==e,unchanged:""===e}}function A(e){return{value:e,hours:24*e,minutes:24*e*60,seconds:24*e*60*60,ms:24*e*60*60*1e3}}function R(e){return{value:e,minutes:60*e,seconds:60*e*60,ms:60*e*60*1e3}}function U(e){return{value:e,seconds:60*e,ms:60*e*1e3}}function _(e){return{value:e,ms:1e3*e}}!function(e){e.initial="initial",e.ready="ready",e.playing="playing",e.paused="paused"}(L||(L={}));const N={Days:A,Hours:R,Minutes:U,Seconds:_};function H(){return Date.now()}function j(){const[e,t]=a(H);return r(()=>{const e=setInterval(()=>t(H()),N.Seconds(1).ms);return()=>clearInterval(e)},[]),e}function B(e){const[n,r]=t.useState(e.value);return t.useEffect(()=>{const t=setTimeout(()=>r(e.value),e.delayMs);return()=>clearTimeout(t)},[e.value,e.delayMs]),n}const z=["on","off","enable","disable","toggle"];function W(e=!1){const[t,n]=a(e);return{on:t,off:!t,enable:()=>n(!0),disable:()=>n(!1),toggle:()=>n(e=>!e)}}function q(e){const{on:t,off:n,enable:r,disable:a,toggle:o}=e;return{toggle:{on:t,off:n,enable:r,disable:a,toggle:o},rest:f(e,z)}}function Q(e){const t=W(e),n=F();return r(()=>{n&&(n.document.designMode=t.on?"on":"off")},[t.on]),t}function V(e=!0){o(()=>{if(!e)return;const t=document.querySelector("html"),n=document.body,r=window.getComputedStyle(t).overscrollBehavior,a=window.getComputedStyle(n).overscrollBehavior;return n.style.overscrollBehavior="none",t.style.overscrollBehavior="none",()=>{n.style.overscrollBehavior=a,t.style.overscrollBehavior=r}},[e])}function K(e){t.useEffect(()=>{document.title=e},[e])}var Y,J;function G(e){const t=e.length-e.max,n=e.length>e.max;function o(){return n?Y.contracted:Y.expanded}const[i,u]=a(o);return r(()=>u(o()),[e.length,e.max]),{state:i,displayShowMore:i===Y.contracted,displayShowLess:i===Y.expanded&&n,actions:{showMore:function(){i===Y.contracted&&u(Y.expanded)},showLess:function(){i===Y.expanded&&u(Y.contracted)}},numberOfExcessiveElements:t,filterFn:function(t,n){return i===Y.expanded||n<e.max}}}function X(e,t){var n;const r=null!=(n=null==t?void 0:t.maxSize)?n:Infinity,[o,u]=a(0),[l,s]=a(J.idle),[c,d]=a(null);function f(e){const t=e.currentTarget.files;if(!t||!t[0])return;const n=t[0];if(!(n.size>r))return d(n),s(J.selected),n;s(J.error)}function m(){u(e=>e+1),d(null),s(J.idle)}const v=i(()=>c?URL.createObjectURL(c):void 0,[c]);function p(e){return e.some(e=>e===l)}return l===J.idle?{state:l,matches:p,isIdle:!0,isSelected:!1,isError:!1,data:null,actions:{selectFile:f,clearFile:m},label:{props:{htmlFor:e}},input:{props:{id:e,name:e,multiple:!1,key:o}}}:l===J.selected?{state:l,matches:p,data:c,isIdle:!1,isSelected:!0,isError:!1,actions:{selectFile:f,clearFile:m},preview:v,label:{props:{htmlFor:e}},input:{props:{id:e,name:e,multiple:!1,key:o}}}:{state:l,matches:p,data:null,isIdle:!1,isSelected:!1,isError:!0,actions:{selectFile:f,clearFile:m},label:{props:{htmlFor:e}},input:{props:{id:e,name:e,multiple:!1,key:o}}}}function Z(){}function ee(e){var t,n,o,i;const u=null!=(t=e.defaultQuery)?t:void 0,l=null!=(n=e.currentQuery)?n:void 0,s=null!=(o=e.filterFn)?o:function(e){return void 0===f||f===String(e)},c=Object.keys(e.enum),d=null!=(i=null==e?void 0:e.onUpdate)?i:Z,[f,v]=a(null!=l?l:u),p=m(f);return r(()=>{d(f,p)},[p,f]),{query:f,clear:function(){v(u)},onChange:function(t){const n=t.currentTarget.value,r=Boolean(e.enum[String(n)]);v(r?n:void 0)},filterFn:s,options:c,onUpdate:d,name:e.name,changed:f!==u,unchanged:f===u,label:{props:{htmlFor:e.name}},input:{props:{id:e.name,name:e.name}}}}function te(e){var n;const r=null==(n=null==e?void 0:e.enabled)||n,a=t.useRef(null),o=W(!1),i=o.enable,u=o.disable;return t.useEffect(()=>{const e=a.current;return e&&r&&(e.addEventListener("mouseenter",i),e.addEventListener("mouseleave",u)),()=>{e&&r&&(e.removeEventListener("mouseenter",i),e.removeEventListener("mouseleave",u))}},[]),{attach:{ref:a},isHovering:o.on&&r}}!function(e){e.contracted="contracted",e.expanded="expanded"}(Y||(Y={})),function(e){e.idle="idle",e.selected="selected",e.error="error"}(J||(J={}));const ne={width:null,height:null};async function re(e){if(!e)return ne;const t=document.createElement("img"),n=new Promise((e,n)=>{t.onload=()=>e({width:t.width,height:t.height}),t.onerror=n});return t.src=e,n}function ae(t){var n;const r=T("resolution",ne);return e.useEffect(()=>{!async function(){if(t.state===J.selected)try{const e=await re(t.preview);return r.set(e)}catch(e){return r.clear()}[J.error,J.idle].includes(t.state)&&null!==r.value.width&&null!==r.value.height&&r.clear()}()},[t.state,null==(n=t.data)?void 0:n.name]),r.value}const oe=()=>{const e=W("undefined"==typeof navigator||"boolean"!=typeof navigator.onLine||navigator.onLine);return t.useEffect(()=>{function t(){e.enable()}function n(){e.disable()}return window.addEventListener("online",t),window.addEventListener("offline",n),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",n)}},[]),e.on},ie={threshold:0,root:null,rootMargin:"0%",ref:{current:null}};function ue(){return"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype}function le(e=ie){const[t,n]=a(!1);return r(()=>{const t=e.ref.current;if(!ue()||!t)return;const r=new IntersectionObserver(e=>{var t;return n(Boolean(null==(t=e[0])?void 0:t.isIntersecting))},e);return r.observe(t),()=>r.unobserve(t)},[]),t}function se(e,t){return e===t}function ce(e){var t,n;const r=null!=(t=null==e?void 0:e.comparisonFn)?t:se,[o,i]=a(null!=(n=null==e?void 0:e.defaultItem)?n:null);return{clear:()=>i(null),set:e=>i(e),toggle:e=>i(t=>null===t?e:r(t,e)?null:e),value:o,isDefault:r(o,null),exists:!r(o,null),compare:e=>r(o,e)}}var de,fe;function me(e){const t=Object.keys(e);return function(n){const r=n.key,a=e[r];t.includes(n.key)&&e[r]&&a&&a()}}function ve(e){t.useEffect(()=>{const t=u(window,e);return()=>t()},[e])}function pe(e){if(e.language===fe.en){var t;const n=null!=(t=e.plural)?t:`${e.singular}s`;return 1===e.value?e.singular:n}if(e.language===fe.pl){var n;const t=null!=(n=e.value)?n:1;return 1===t?e.singular:s(e.singular,String(e.plural),String(e.genitive),t)}return console.warn(`[@bgord/frontend] missing pluralization function for language ${e.language}.`),e.singular}!function(e){e.Enter="Enter",e.Space=" "}(de||(de={})),function(e){e.en="en",e.pl="pl"}(fe||(fe={}));const ge=t.createContext({translations:{},language:"en"});function he(e){return t.createElement(ge.Provider,{value:e.value},e.children)}function we(){const e=t.useContext(ge);if(void 0===e)throw new Error("useTranslations must be used within the TranslationsContext");return function(t,n){const r=e.translations[t];return r?n?Object.entries(n).reduce((e,[t,n])=>e.replace(`{{${t}}}`,String(n)),r):r:(console.warn(`[@bgord/frontend] missing translation for key: ${t}`),t)}}function ye(){const e=t.useContext(ge);if(void 0===e)throw new Error("useLanguage must be used within the TranslationsContext");return e.language}function be(){const e=ye();return t=>pe(d({},t,{language:e}))}function Ee(e){return ee({enum:e,currentQuery:ye(),name:"language",onUpdate:(e,t)=>{const n=F();n&&e&&t&&t!==e&&(l.set("accept-language",e),n.document.location.reload())}})}function xe(e=!1){t.useEffect(()=>{if(e)return window.addEventListener("beforeunload",t),()=>window.removeEventListener("beforeunload",t);function t(e){e.preventDefault()}},[e])}function Se(e){var t,n;const r=null!=(t=null==e?void 0:e.defaultItems)?t:[],o=null!=(n=null==e?void 0:e.comparisonFn)?n:(e,t)=>e===t,[i,u]=a(r);function l(e){u(t=>Array.isArray(e)?[...t,...e]:[...t,e])}function s(e){u(t=>t.filter(t=>!o(t,e)))}function c(e){return i.some(t=>o(t,e))}return[i,{clear:function(){u([])},add:l,remove:s,toggle:function(e){c(e)?s(e):l(e)},isAdded:c,update:u}]}function Te(){return{onKeyDown:e=>{var t;"Enter"===e.key&&e.metaKey&&(null==(t=e.currentTarget.form)||t.dispatchEvent(new Event("submit",{cancelable:!0})))}}}function De(){var e,t,n;const r=T("meta",null),a=null==(e=r.value)?void 0:e.previousPage,o=null==(t=r.value)?void 0:t.nextPage,i=null==(n=r.value)?void 0:n.lastPage,u=T("page",1);return{current:u.value,last:i,controls:{firstPage:{active:!a,disabled:!1,exists:!0,go:()=>u.set(1),value:1},previousPage:{active:!1,disabled:!a,exists:Boolean(a),go:()=>u.set(null!=a?a:u.value),value:a},nextPage:{active:!1,disabled:!o,exists:Boolean(o),go:()=>u.set(null!=o?o:u.value),value:o},lastPage:{active:u.value===i,disabled:!o,exists:!0,go:()=>u.set(null!=i?i:u.value),value:i}},update:e=>r.set(e)}}class Me{static get(e,t){return c.get(e,t).value}static set(e,t){c.set(e,t)}static clear(e){c.remove(e)}}function Le(t,n=!1){const r=W(Me.get(t,n));return e.useEffect(()=>Me.set(t,r.on),[t,r.on]),d({},r,{clear:()=>Me.clear(t)})}class Pe{constructor(e){this.lastInvocationTimestamp=null,this.options=void 0,this.options=e}verify(e){if(!this.lastInvocationTimestamp)return this.lastInvocationTimestamp=e,{allowed:!0};const t=this.lastInvocationTimestamp+this.options.limitMs;return t<=e?(this.lastInvocationTimestamp=e,{allowed:!0}):{allowed:!1,remainingMs:t-e}}}function Ie(e){const t=n(new Pe(e));return function(...n){const r=Date.now(),a=t.current.verify(r);return a.allowed?e.action(...n):null==e.fallback?void 0:e.fallback(a.remainingMs)}}function Fe(){const e=F(),[n,r]=t.useState(0),a=W(!1);return t.useLayoutEffect(()=>{function t(){e&&(r(null==e?void 0:e.scrollY),e.document.body.clientHeight<e.document.body.scrollHeight?a.enable():a.disable())}return null==e||e.addEventListener("scroll",t),()=>null==e?void 0:e.removeEventListener("scroll",t)},[]),{actions:{goToTop:function(){e&&e.scrollTo({top:0,left:0,behavior:"smooth"})}},position:{value:n,isInitial:0===n,hasChanged:n>0},visible:a.on,hidden:a.off}}function $e(e=!0){r(()=>{if(!e)return;const t=document.querySelector("html"),n=window.getComputedStyle(t).overflow;return t.style.overflow="hidden",()=>{t.style.overflow=n}},[e])}function Ce(e){const t=new Audio(e);return{play:t.play.bind(t)}}function Oe(e){var t;const n=F(),r=null!=(t=new URLSearchParams(null==n?void 0:n.location.search).get(e.name))?t:void 0;return ee(d({onUpdate:(t,r)=>{if(!n)return;const a=new URL(n.location.toString()),o=new URLSearchParams(a.search);void 0===t?o.delete(e.name):o.set(e.name,t),t!==r&&t!==r&&(a.search=o.toString(),history.pushState({},"",a.toString()))}},e,{defaultQuery:e.defaultQuery,currentQuery:r}))}const ke=1;var Ae;function Re(t){const[n,r]=e.useState(Ae.initial),a=e.useRef(null),o=T("duration",0),i=T("currentTime",0),u=T("volume",1),l=0===u.value,s=0===o.value?0:Math.round(i.value/o.value*100);function c(e){const t=e.currentTarget;a.current&&(a.current.currentTime=t.valueAsNumber,i.set(t.valueAsNumber))}function d(e){const t=e.currentTarget;a.current&&(a.current.volume=t.valueAsNumber,u.set(t.valueAsNumber))}return{props:{video:{src:t,onTimeUpdate:function(e){i.set(Math.round(e.target.currentTime))},onLoadedMetadata:function(e){const t=e.currentTarget;a.current=t,o.set(Math.round(t.duration)),i.set(t.currentTime),u.set(t.volume),r(Ae.ready)},onEnded:function(){r(Ae.paused)},controls:!1},player:{min:0,step:1,max:o.value,value:i.value,onInput:c,style:{"--percentage":`${s}%`}},volume:{min:0,max:1,step:.01,value:u.value,onInput:d,style:{"--percentage":`${Math.floor(100*u.value)}%`}}},actions:{play:function(){a.current&&(a.current.play(),r(Ae.playing))},pause:function(){a.current&&(a.current.pause(),r(Ae.paused))},mute:function(){a.current&&(a.current.volume=0,u.set(0))},unmute:function(){a.current&&(a.current.volume=1,u.set(1))},reset:function(){a.current&&(a.current.currentTime=0,a.current.pause(),i.set(0),r(Ae.paused))},seek:c,changeVolume:d,triggerFullscreen:function(){a.current&&a.current.requestFullscreen()}},meta:{state:n,isInitial:n===Ae.initial,isReady:n===Ae.ready,isPlaying:n===Ae.playing,isPaused:n===Ae.paused,matches:e=>e.some(e=>e===n),percentage:{raw:s,formatted:`${s}%`},currentTime:{raw:i.value,formatted:x.format(i.value)},duration:{raw:o.value,formatted:x.format(o.value)},volume:{value:u.value,raw:Math.floor(100*u.value),formatted:`${Math.floor(100*u.value)}%`},muted:l}}}!function(e){e.initial="initial",e.ready="ready",e.playing="playing",e.paused="paused"}(Ae||(Ae={}));const Ue=["disable","enable","on","off","toggle"];function _e(e){const{disable:n}=e,r=f(e,Ue),a=t.useRef(null);return t.useEffect(()=>{var t,n;e.on?null==(t=a.current)||t.showModal():null==(n=a.current)||n.close()},[e.on]),ve({Escape:n}),I({ref:a,condition:e.on}),$e(e.on),O(a,n),t.createElement("dialog",d({ref:a,tabIndex:0,"data-display":e.on?"flex":"none","data-direction":"column","data-mx":"auto","data-p":"24","data-position":"fixed","data-z":"2","data-bg":"white","data-br":"4","data-bc":"gray-300","data-bw":"1","data-backdrop":"black"},r))}function Ne(e){return oe()?null:t.createElement(t.Fragment,null,e.children)}const He=["as"];function je(e){const{as:n}=e,r=f(e,He);return t.createElement(n||"a",d({target:"_blank",rel:"noreferer noopener"},r))}function Be(e){return function(){e.forEach(e=>e())}}const ze={Dimensions:function(e){const n=$();return t.createElement("div",d({"data-fs":"12"},e),n.width," x ",n.height)},Truncates:function(){const e=W(),n=T("length",128),[r,a]=t.useState(new Map);return t.createElement("div",{"data-display":"flex","data-cross":"center","data-gap":"6"},t.createElement("label",d({className:"c-label"},n.label.props),"Length"),t.createElement("input",d({className:"c-input",type:"number",value:n.value,onChange:e=>n.set(e.currentTarget.valueAsNumber)},n.input.props)),t.createElement("button",{className:"c-button","data-variant":"bare",type:"button",onClick:Be([()=>(()=>{const e=document.querySelectorAll('[data-transform="truncate"]'),t=new Map(r);e.forEach(e=>{const r=e.textContent;t.has(e)?(e.textContent=t.get(e),t.delete(e)):(t.set(e,r),e.textContent="x".repeat(n.value))}),a(t)})(),e.toggle])},e.on?"Hide truncates":"Expand truncates"))}},We=e=>console.warn("Copying to clipboard not supported");async function qe(e){var t,n;const r=null!=(t=e.onFailure)?t:We,a=null!=(n=e.onSuccess)?n:Z;navigator.clipboard||r();try{await navigator.clipboard.writeText(e.text),a()}catch(e){r(e)}}class Qe{static datetime(e,t="N/A"){return e?new Date(e).toLocaleString():t}static monthDay(e){const t=new Date(e),n=Qe._padDatePart(t.getDate());return`${Qe._padDatePart(t.getMonth()+1)}/${n}`}static form(e){return e?`${Qe._padDatePart(e.getFullYear())}-${Qe._padDatePart(e.getMonth()+1)}-${Qe._padDatePart(e.getDate())}`:Qe.form(new Date)}static clockUTC(e){const t=new Date(e);return`${Qe._padDatePart(t.getUTCHours())}:${Qe._padDatePart(t.getUTCMinutes())}:${Qe._padDatePart(t.getUTCSeconds())}`}static clockLocal(e){const t=new Date(e);return`${Qe._padDatePart(t.getHours())}:${Qe._padDatePart(t.getMinutes())}:${Qe._padDatePart(t.getSeconds())}`}static countdown(e){const t=new Date(e);return`${Qe._padDatePart(t.getHours())}:${Qe._padDatePart(t.getMinutes())}:${Qe._padDatePart(t.getSeconds())}`}static formDatetimeLocal(e){const t=e-U((new Date).getTimezoneOffset()).ms;return new Date(t).toISOString().slice(0,16)}static _padDatePart(e){return String(e).padStart(2,"0")}}class Ve{static convertUtcToLocal(e){const t=(new Date).getTimezoneOffset(),n=(R(e).minutes-t)/60%24;return{value:n,label:`${String(n).padStart(2,"0")}:00`}}}class Ke{static fromRevision(e){return{"if-match":String(e)}}}class Ye{static fromRevision(e){return{"if-match":`W/${e}`}}}const Je=t.createContext({});function Ge(e){return t.createElement(Je.Provider,{value:e.value},e.children)}function Xe(){const e=t.useContext(Je);if(void 0===e)throw new Error("useFeatureFlags must be used within the FeatureFlagsContext");return e}function Ze(e){const n=t.useContext(Je);if(void 0===n)throw new Error("useFeatureFlag must be used within the FeatureFlagsContext");return"yes"===n[e]}class et{constructor(e,t){this.value=void 0;const n=this.getNonEmptyFilters(t),r=new URLSearchParams(n);this.value=""!==r.toString()?`${e}?${r.toString()}`:e}getNonEmptyFilters(e){return void 0===e?{}:Object.fromEntries(Object.entries(e).filter(([e,t])=>void 0!==t))}}function tt(){return!F()}class nt{static float(e,t=2){return parseFloat(e.toFixed(t))}}class rt{constructor(e){var t,n,r,a;this.min=void 0,this.max=void 0,this.lower=void 0,this.upper=void 0;const o=null!=(t=null==(n=e.bound)?void 0:n.lower)?t:0,i=null!=(r=null==(a=e.bound)?void 0:a.upper)?r:1;if(e.max-e.min<0)throw new Error("Invalid MinMaxScaler min-max config");if(i-o<=0)throw new Error("Invalid MinMaxScaler bound config");this.min=e.min,this.max=e.max,this.lower=o,this.upper=i}scale(e){const{min:t,max:n,lower:r,upper:a}=this;if(e<t||e>n)throw new Error("Value out of min/max range");return t===n?{original:e,scaled:(r+a)/2,isMin:e===t,isMax:e===n}:{original:e,scaled:nt.float((e-t)/(n-t)*(a-r)+r,2),isMin:e===t,isMax:e===n}}descale(e){const{min:t,max:n,lower:r,upper:a}=this;if(e<r||e>a)throw new Error("Scaled value out of bounds");return{original:nt.float((e-r)/(a-r)*(n-t)+t,2),scaled:e,isLowerBound:e===r,isUpperBound:e===a}}static getMinMax(e){if(0===e.length)throw new Error("An empty array supplied");return{min:Math.min(...e),max:Math.max(...e)}}}class at{static infinite(e){var t,n,r;return null!=(t=null==(n=e.data)||null==(r=n.pages)?void 0:r.flat().map(e=>e.result).flat())?t:[]}}function ot(e){var n;const r=null==(n=e.enabled)||n,[a,o]=t.useState(e.initialItems);t.useEffect(()=>o(e.initialItems),[JSON.stringify(e.initialItems)]);const i=t.useRef(null),[u,l]=t.useState(null),[s,c]=t.useState(null);function d(e){return function(t){var n;l(e),i.current=null!=(n=a[e])?n:null,null!=t&&t.dataTransfer&&!t.currentTarget.parentNode&&(t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("text/html",t.currentTarget.parentNode),t.dataTransfer.setDragImage(t.currentTarget.parentNode,20,20))}}function f(e){return function(t){t.preventDefault();const n=a[e];if(c(e),i.current===n||!i.current)return;let r=a.filter(e=>e!==i.current);r.splice(e,0,i.current),o(r)}}function m(t){return function(n){var r;null!==u&&null!==s&&u!==s&&e.callback({correlationId:e.correlationId,id:null==(r=a[t])?void 0:r.id,item:a[t],to:s}),l(null),i.current=null,c(null)}}const v=r?i.current?"grabbing":"grab":"auto";return{items:a,enabled:r,props:{item:e=>({onDragOver:f(e)}),handle:e=>({onDragStart:d(e),onDragEnd:m(e),draggable:r,style:{cursor:v}})}}}function it(e=12){return{times(t){const n=e*t,r={height:{height:ut(n)},minHeight:{minHeight:ut(n)},maxHeight:{maxHeight:ut(n)},width:{width:ut(n)},minWidth:{minWidth:ut(n)},maxWidth:{maxWidth:ut(n)},square:{height:ut(n),width:ut(n)}},a={height:{style:{height:ut(n)}},minHeight:{style:{minHeight:ut(n)}},maxHeight:{style:{maxHeight:ut(n)}},width:{style:{width:ut(n)}},minWidth:{style:{minWidth:ut(n)}},maxWidth:{style:{maxWidth:ut(n)}},square:{style:{height:ut(n),width:ut(n)}}};return d({px:ut(n),raw:n,style:a},r)}}}function ut(e){return`${e}px`}at.empty={result:[],meta:{exhausted:!0}};class lt{static format(e,t=lt.DEFAULT_SEPARATOR){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,t)}}lt.DEFAULT_SEPARATOR=" ";const st=t.createContext(void 0);function ct(e){const[n,r]=function(){var t;const n=null!=(t=null==e?void 0:e.timeout)?t:5e3,[r,a]=Se({comparisonFn:(e,t)=>e.id===t.id});return[[...r].reverse(),{add:function(e){const t=d({},e,{id:String(Date.now())});a.add(t),setTimeout(()=>a.remove(t),n)},remove:a.remove,clear:a.clear}]}();return t.createElement(st.Provider,{value:[n,r]},e.children)}function dt(){const e=t.useContext(st);if(void 0===e)throw new Error("useToasts must be used within the ToastsContextProvider");return e}function ft(){const[,e]=dt();return e.add}export{E as API,M as AUDIO_DEFAULT_VOLUME,g as Anima,w as AnimaList,p as AnimaState,nt as Approximation,Qe as DateFormatter,A as Days,ze as DevTools,_e as Dialog,x as DurationFormatter,Ke as ETag,Ge as FeatureFlagsContextProvider,et as FilterUrl,Ve as HourFormatter,R as Hours,de as KeyNameEnum,rt as MinMaxScaler,U as Minutes,Ne as OfflineIndicator,je as OutboundLink,at as Pagination,it as Rhythm,Me as SafeLocalStorage,_ as Seconds,b as ServerError,lt as ThousandsSeparator,N as Time,ct as ToastsContextProvider,he as TranslationsContextProvider,L as UseAudioState,Y as UseExpandableListState,J as UseFileState,Ae as UseVideoState,ke as VIDEO_DEFAULT_VOLUME,Ye as WeakETag,qe as copyToClipboard,ie as defaultUseIsVisibleConfig,ne as emptyImageResolution,Be as exec,D as extractUseField,q as extractUseToggle,h as getAnimaProps,H as getCurrentTimestamp,re as getImageResolution,F as getSafeWindow,tt as isClient,ue as isIntersectionObserverSupported,Z as noop,pe as pluralize,y as useAnimaList,P as useAudio,I as useAutofocus,C as useBreakpoint,O as useClickOutside,k as useClientSearch,j as useCurrentTimestamp,B as useDebounce,Q as useDesignMode,V as useDisablePullToRefresh,K as useDocumentTitle,G as useExpandableList,Ze as useFeatureFlag,Xe as useFeatureFlags,T as useField,X as useFile,ee as useFilter,te as useHover,ae as useImageFileResolution,oe as useIsOnline,le as useIsVisible,ce as useItem,me as useKeyHandler,ve as useKeyboardShortcuts,ye as useLanguage,Ee as useLanguageSelector,xe as useLeavingPrompt,Se as useList,Te as useMetaEnterSubmit,De as usePagination,Le as usePersistentToggle,be as usePluralize,m as usePreviousValue,Ie as useRateLimiter,ot as useReordering,Fe as useScroll,$e as useScrollLock,Ce as useSound,ft as useToastTrigger,dt as useToastsContext,W as useToggle,we as useTranslations,Oe as useUrlFilter,Re as useVideo,$ as useWindowDimensions};
//# sourceMappingURL=bgord-frontend.modern.js.map
