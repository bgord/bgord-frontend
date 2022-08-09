import e,{useRef as t,useEffect as n,useState as r,useLayoutEffect as o}from"react";import i from"tinykeys";function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(o[n]=e[n]);return o}function u(e,r){const o=t(r);return n(()=>{o.current=e}),o.current}const l=["children"];var c;function d(t){var n;const r=null!=(n=t.duration)?n:300,[o,i]=e.useState(function(){return t.visible?t.isInitial?c.appeared:c.appearing:c.hidden}),a=u(o);return e.useEffect(()=>{if(!t.isInitial)if(t.visible)i(c.appearing),setTimeout(()=>i(c.appeared),100);else{if(!a)return;i(c.hidding),setTimeout(()=>i(c.hidden),r)}},[t.visible]),o===c.hidden?null:e.cloneElement(t.children,{"data-anima":o,"data-anima-effect":t.effect,style:s({"--duration":`${r}ms`},t.children.props.style)})}function f(e){return{"data-anima":e["data-anima"],"data-anima-effect":e["data-anima-effect"],style:e.style}}function v(t){const n=a(t,l),[r,o]=e.useState(!0);return e.useEffect(()=>o(!1),[]),e.createElement("ul",s({},n),t.children.map(t=>e.cloneElement(t,{isInitial:r})))}function h(t,n){var r;const o=null!=(r=null==n?void 0:n.direction)?r:"head",[i,a]=e.useState(t.map(e=>({item:e,props:{visible:!0}})));let u=[];for(const e of t)!i.map(e=>e.item).some(t=>e.id===t.id)&&u.push(e);e.useEffect(()=>{0!==u.length&&(a("head"===o?e=>[...u.map(e=>({item:e,props:{visible:!0}})),...e]:e=>[...e,...u.map(e=>({item:e,props:{visible:!0}}))]),u=[])},[u.length,o]);let l=[];for(const{item:e}of i)t.every(t=>t.id!==e.id)&&l.push(e);return e.useEffect(()=>{0!==l.length&&(a(e=>e.map(e=>l.some(t=>t.id===e.item.id)?s({},e,{props:{visible:!1}}):e)),l=[])},[l.length]),{items:i.map(e=>{const n=t.find(t=>t.id===e.item.id);return n?s({},e,{item:n}):e}),count:i.filter(e=>e.props.visible).length}}!function(e){e.appearing="appearing",e.appeared="appeared",e.hidding="hidding",e.hidden="hidden"}(c||(c={}));const m=["as"];function p(t){const{as:n}=t,r=a(t,m);return e.createElement(n||"a",s({target:"_blank",rel:"noreferer noopener"},r))}class g{static datetime(e,t="N/A"){return e?new Date(e).toLocaleString():t}}class w{constructor(e,t){this.value=void 0;const n=new URLSearchParams(this.getNonEmptyFilters(t));this.value=""!==n.toString()?`${e}?${n.toString()}`:e}getNonEmptyFilters(e){return void 0===e?{}:Object.fromEntries(Object.entries(e).filter(([e,t])=>void 0!==t))}}function y(){if("undefined"!=typeof window)return window}function S(){const[e,t]=r({width:void 0,height:void 0});return n(()=>{const e=y();if(e)return e.addEventListener("resize",n),n(),()=>e.removeEventListener("resize",n);function n(){t({width:null==e?void 0:e.innerWidth,height:null==e?void 0:e.innerHeight})}},[]),e}function b(e){var t;const n=S();return(null!=(t=null==n?void 0:n.width)?t:0)<=e}function E(t,n,r){e.useEffect(()=>{if(t.current)return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e);function e(e){var o;null!=(o=t.current)&&o.contains(e.target)||(null==r?void 0:r.some(t=>{var n;return null==(n=t.current)?void 0:n.contains(e.target)}))||n()}},[n,t,r])}function x(){const[e,t]=r("");return{query:e,clear:function(){t("")},onChange:function(e){t(e.currentTarget.value)},filterFn:function(t){return""===e||(null==t?void 0:t.toLowerCase().includes(e.toLowerCase()))}}}var L,C;function O(e){const t=e.length-e.max,o=e.length>e.max;function i(){return o?L.contracted:L.expanded}const[s,a]=r(i);return n(()=>a(i()),[e.length,e.max]),{state:s,displayShowMore:s===L.contracted,displayShowLess:s===L.expanded&&o,showMore:function(){s===L.contracted&&a(L.expanded)},showLess:function(){s===L.expanded&&a(L.contracted)},numberOfExcessiveElements:t,filterFn:function(t,n){return s===L.expanded||n<e.max}}}function F(e){const[t,o]=r(e),i="function"==typeof e?e():e;return n(()=>{o(i)},[i]),{value:t,set:o,clear:function(){o(e)}}}function T(e){var t;const n=null!=(t=null==e?void 0:e.maxSize)?t:Infinity,[o,i]=r(C.idle),[s,a]=r(null),u={selectFile:function(e){const t=e.currentTarget.files;if(!t||!t[0])return;const r=t[0];if(r.size>n)return i(C.error);a(r),i(C.selected)},clearFile:function(){a(null),i(C.idle)}};return o===C.idle?{state:o,data:null,actions:u}:o===C.selected?{state:o,data:s,actions:u}:{state:o,data:null,actions:u}}function j(){}function M(e){var t,o,i;const s=null!=(t=e.defaultQuery)?t:void 0,a=null!=(o=e.filterFn)?o:function(e){return void 0===d||d===String(e)},l=Object.keys(e.enum),c=null!=(i=null==e?void 0:e.onUpdate)?i:j,[d,f]=r(s),v=u(d);return n(()=>{c(d,v)},[v,d]),{query:d,clear:function(){f(s)},onChange:function(t){const n=t.currentTarget.value,r=Boolean(e.enum[String(n)]);f(r?n:void 0)},filterFn:a,options:l,onUpdate:c}}function P(t){e.useEffect(()=>{const e=i(window,t);return()=>e()},[t])}function k(e){var t,n;const o=null!=(t=null==e?void 0:e.defaultItems)?t:[],i=null!=(n=null==e?void 0:e.comparisonFn)?n:(e,t)=>e===t,[s,a]=r(o);function u(e){a(t=>Array.isArray(e)?[...t,...e]:[...t,e])}function l(e){a(t=>t.filter(t=>!i(t,e)))}function c(e){return s.some(t=>i(t,e))}return[s,{clear:function(){a([])},add:u,remove:l,toggle:function(e){c(e)?l(e):u(e)},isAdded:c,update:a}]}function U(e=!0){o(()=>{if(!e)return;const t=document.querySelector("html"),n=document.body,r=window.getComputedStyle(n).overflow,o=window.getComputedStyle(t).overflow;return n.style.overflow="hidden",t.style.overflow="hidden",()=>{n.style.overflow=r,t.style.overflow=o}},[e])}function I(e=!1){const[t,n]=r(e);return{on:t,off:!t,enable:()=>n(!0),disable:()=>n(!1),toggle:()=>n(e=>!e)}}function z(e){var t;const n=y(),r=null!=(t=new URLSearchParams(null==n?void 0:n.location.search).get(e.label))?t:void 0;return M(s({onUpdate:(t,r)=>{if(!n)return;const o=new URL(n.location.toString()),i=new URLSearchParams(o.search);void 0===t?i.delete(e.label):i.set(e.label,t),t!==r&&t!==r&&(o.search=i.toString(),history.pushState({},"",o.toString()))}},e,{defaultQuery:null!=r?r:e.defaultQuery}))}!function(e){e.contracted="contracted",e.expanded="expanded"}(L||(L={})),function(e){e.idle="idle",e.selected="selected",e.error="error"}(C||(C={}));class A{constructor(e){this.message=void 0,this._known=!0,this.message=e.message}static isServerError(e){return!!(e&&"object"==typeof e&&e===Object(e)&&e.hasOwnProperty("_known")&&e.hasOwnProperty("message"))}static async extract(e){if(e.ok)return e;const t=await e.json(),n=A.isServerError(t)?t.message:"app.error.general";throw new A({message:n})}static async handle(e){throw new A({message:A.isServerError(e)?e.message:"app.error.general"})}}class R{constructor(e){this.value=void 0,this.value=e}toHours(){return 24*this.value}toMinutes(){return 24*this.value*60}toSeconds(){return 24*this.value*60*60}toMs(){return 24*this.value*60*60*1e3}}class ${constructor(e){this.value=void 0,this.value=e}toMinutes(){return 60*this.value}toSeconds(){return 60*this.value*60}toMs(){return 60*this.value*60*1e3}}class q{constructor(e){this.value=void 0,this.value=e}toSeconds(){return 60*this.value}toMs(){return 60*this.value*1e3}}class D{constructor(e){this.value=void 0,this.value=e}toMs(){return 1e3*this.value}}const H={Days:R,Hours:$,Minutes:q,Seconds:D},N=e.createContext(void 0);function Q(t){const[n,r]=function(){var e;const n=null!=(e=null==t?void 0:t.timeout)?e:5e3,[r,o]=k({comparisonFn:(e,t)=>e.id===t.id});return[[...r].reverse(),{add:function(e){const t=s({},e,{id:String(Date.now())});o.add(t),setTimeout(()=>o.remove(t),n)},remove:o.remove,clear:o.clear}]}();return e.createElement(N.Provider,{value:[n,r]},t.children)}function _(){const t=e.useContext(N);if(void 0===t)throw new Error("useToasts must be used within the ToastsContextProvider");return t}function B(){const[,e]=_();return e.add}const W=e.createContext({});function G(t){return e.createElement(W.Provider,{value:t.translations},t.children)}function J(){const t=e.useContext(W);if(void 0===t)throw new Error("useTranslations must be used within the TranslationsContext");return function(e){const n=t[e];return n||console.warn(`[@bgord/frontend] missing translation for key ${e}.`),null!=n?n:e}}export{d as Anima,v as AnimaList,c as AnimaState,g as DateFormatter,R as Days,w as FilterUrl,$ as Hours,q as Minutes,p as OutboundLink,D as Seconds,A as ServerError,H as Time,Q as ToastsContextProvider,G as TranslationsContextProvider,L as UseExpandableListState,C as UseFileState,f as getAnimaProps,y as getSafeWindow,j as noop,h as useAnimaList,b as useBreakpoint,E as useClickOutside,x as useClientSearch,O as useExpandableList,F as useField,T as useFile,M as useFilter,P as useKeyboardShortcurts,k as useList,u as usePreviousValue,U as useScrollLock,B as useToastTrigger,_ as useToastsContext,I as useToggle,J as useTranslations,z as useUrlFilter,S as useWindowDimensions};
//# sourceMappingURL=bgord-frontend.modern.js.map
