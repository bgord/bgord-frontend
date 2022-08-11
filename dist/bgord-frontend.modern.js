import e,{useRef as t,useEffect as n,useState as r,useLayoutEffect as o}from"react";import i from"tinykeys";function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(o[n]=e[n]);return o}function u(e,r){const o=t(r);return n(()=>{o.current=e}),o.current}const l=["children"];var c,d,f;function v(t){var n;const r=null!=(n=t.duration)?n:300,[o,i]=e.useState(function(){return t.visible?t.isInitial?c.appeared:c.appearing:c.hidden}),s=u(o);return e.useEffect(()=>{if(!t.isInitial)if(t.visible)i(c.appearing),setTimeout(()=>i(c.appeared),100);else{if(!s)return;i(c.hidding),setTimeout(()=>i(c.hidden),r)}},[t.visible]),o===c.hidden?null:e.cloneElement(t.children,{"data-anima":o,"data-anima-effect":t.effect,style:a({"--duration":`${r}ms`},t.children.props.style)})}function m(e){return{"data-anima":e["data-anima"],"data-anima-effect":e["data-anima-effect"],style:e.style}}function h(t){const n=s(t,l),[r,o]=e.useState(!0);return e.useEffect(()=>o(!1),[]),e.createElement("ul",a({},n),t.children.map(t=>e.cloneElement(t,{isInitial:r})))}function p(t,n){var r;const o=null!=(r=null==n?void 0:n.direction)?r:"head",[i,s]=e.useState(t.map(e=>({item:e,props:{visible:!0}})));let u=[];for(const e of t)!i.map(e=>e.item).some(t=>e.id===t.id)&&u.push(e);e.useEffect(()=>{0!==u.length&&(s("head"===o?e=>[...u.map(e=>({item:e,props:{visible:!0}})),...e]:e=>[...e,...u.map(e=>({item:e,props:{visible:!0}}))]),u=[])},[u.length,o]);let l=[];for(const{item:e}of i)t.every(t=>t.id!==e.id)&&l.push(e);return e.useEffect(()=>{0!==l.length&&(s(e=>e.map(e=>l.some(t=>t.id===e.item.id)?a({},e,{props:{visible:!1}}):e)),l=[])},[l.length]),{items:i.map(e=>{const n=t.find(t=>t.id===e.item.id);return n?a({},e,{item:n}):e}),count:i.filter(e=>e.props.visible).length}}function g(t){e.useEffect(()=>{var e;t.condition&&(null==(e=t.ref.current)||e.focus())},[t.condition])}function w(){if("undefined"!=typeof window)return window}function y(){const[e,t]=r({width:void 0,height:void 0});return n(()=>{const e=w();if(e)return e.addEventListener("resize",n),n(),()=>e.removeEventListener("resize",n);function n(){t({width:null==e?void 0:e.innerWidth,height:null==e?void 0:e.innerHeight})}},[]),e}function b(e){var t;const n=y();return(null!=(t=null==n?void 0:n.width)?t:0)<=e}function E(t,n,r){e.useEffect(()=>{if(t.current)return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e);function e(e){var o;null!=(o=t.current)&&o.contains(e.target)||(null==r?void 0:r.some(t=>{var n;return null==(n=t.current)?void 0:n.contains(e.target)}))||n()}},[n,t,r])}function S(){const[e,t]=r("");return{query:e,clear:function(){t("")},onChange:function(e){t(e.currentTarget.value)},filterFn:function(t){return""===e||(null==t?void 0:t.toLowerCase().includes(e.toLowerCase()))}}}function x(t){e.useEffect(()=>{document.title=t},[t])}function L(e){const t=e.length-e.max,o=e.length>e.max;function i(){return o?d.contracted:d.expanded}const[a,s]=r(i);return n(()=>s(i()),[e.length,e.max]),{state:a,displayShowMore:a===d.contracted,displayShowLess:a===d.expanded&&o,showMore:function(){a===d.contracted&&s(d.expanded)},showLess:function(){a===d.expanded&&s(d.contracted)},numberOfExcessiveElements:t,filterFn:function(t,n){return a===d.expanded||n<e.max}}}function O(e){const[t,o]=r(e),i="function"==typeof e?e():e;return n(()=>{o(i)},[i]),{value:t,set:o,clear:function(){o(e)}}}function C(e){var t;const n=null!=(t=null==e?void 0:e.maxSize)?t:Infinity,[o,i]=r(f.idle),[a,s]=r(null),u={selectFile:function(e){const t=e.currentTarget.files;if(!t||!t[0])return;const r=t[0];if(r.size>n)return i(f.error);s(r),i(f.selected)},clearFile:function(){s(null),i(f.idle)}};return o===f.idle?{state:o,data:null,actions:u}:o===f.selected?{state:o,data:a,actions:u}:{state:o,data:null,actions:u}}function F(){}function T(e){var t,o,i;const a=null!=(t=e.defaultQuery)?t:void 0,s=null!=(o=e.filterFn)?o:function(e){return void 0===d||d===String(e)},l=Object.keys(e.enum),c=null!=(i=null==e?void 0:e.onUpdate)?i:F,[d,f]=r(a),v=u(d);return n(()=>{c(d,v)},[v,d]),{query:d,clear:function(){f(a)},onChange:function(t){const n=t.currentTarget.value,r=Boolean(e.enum[String(n)]);f(r?n:void 0)},filterFn:s,options:l,onUpdate:c}}function j(t){e.useEffect(()=>{const e=i(window,t);return()=>e()},[t])}function k(t=!1){e.useEffect(()=>{if(t)return window.addEventListener("beforeunload",e),()=>window.removeEventListener("beforeunload",e);function e(e){e.preventDefault()}},[t])}function M(e){var t,n;const o=null!=(t=null==e?void 0:e.defaultItems)?t:[],i=null!=(n=null==e?void 0:e.comparisonFn)?n:(e,t)=>e===t,[a,s]=r(o);function u(e){s(t=>Array.isArray(e)?[...t,...e]:[...t,e])}function l(e){s(t=>t.filter(t=>!i(t,e)))}function c(e){return a.some(t=>i(t,e))}return[a,{clear:function(){s([])},add:u,remove:l,toggle:function(e){c(e)?l(e):u(e)},isAdded:c,update:s}]}function P(e=!0){o(()=>{if(!e)return;const t=document.querySelector("html"),n=document.body,r=window.getComputedStyle(n).overflow,o=window.getComputedStyle(t).overflow;return n.style.overflow="hidden",t.style.overflow="hidden",()=>{n.style.overflow=r,t.style.overflow=o}},[e])}function U(e=!1){const[t,n]=r(e);return{on:t,off:!t,enable:()=>n(!0),disable:()=>n(!1),toggle:()=>n(e=>!e)}}function z(e){var t;const n=w(),r=null!=(t=new URLSearchParams(null==n?void 0:n.location.search).get(e.label))?t:void 0;return T(a({onUpdate:(t,r)=>{if(!n)return;const o=new URL(n.location.toString()),i=new URLSearchParams(o.search);void 0===t?i.delete(e.label):i.set(e.label,t),t!==r&&t!==r&&(o.search=i.toString(),history.pushState({},"",o.toString()))}},e,{defaultQuery:null!=r?r:e.defaultQuery}))}!function(e){e.appearing="appearing",e.appeared="appeared",e.hidding="hidding",e.hidden="hidden"}(c||(c={})),function(e){e.contracted="contracted",e.expanded="expanded"}(d||(d={})),function(e){e.idle="idle",e.selected="selected",e.error="error"}(f||(f={}));const D=["DialogOverlay","disable","enable","on","off","toggle"];function I(t){const{DialogOverlay:n,disable:r}=t,o=s(t,D),i=e.useRef(null);return j({Escape:r}),E(i,r),g({ref:i,condition:t.on}),P(t.on),t.off?null:e.createElement(e.Fragment,null,null!=n?n:e.createElement(R,null),e.createElement("dialog",a({ref:i,tabIndex:0,open:t.on,"data-display":"flex","data-direction":"column","data-position":"absolute","data-z":"2","data-bg":"white","data-br":"4","data-bc":"gray-300","data-bw":"1","data-p":"24","data-mx":"auto"},o)))}function R(t){return e.createElement("div",a({"data-position":"absolute","data-inset":"0","data-display":"flex","data-main":"cross","data-cross":"center","data-z":"2",style:{background:"rgb(0, 0, 0, 0.75)"}},t))}const A=["as"];function $(t){const{as:n}=t,r=s(t,A);return e.createElement(n||"a",a({target:"_blank",rel:"noreferer noopener"},r))}class q{static datetime(e,t="N/A"){return e?new Date(e).toLocaleString():t}}class H{constructor(e,t){this.value=void 0;const n=new URLSearchParams(this.getNonEmptyFilters(t));this.value=""!==n.toString()?`${e}?${n.toString()}`:e}getNonEmptyFilters(e){return void 0===e?{}:Object.fromEntries(Object.entries(e).filter(([e,t])=>void 0!==t))}}class N{constructor(e){this.message=void 0,this._known=!0,this.message=e.message}static isServerError(e){return!!(e&&"object"==typeof e&&e===Object(e)&&e.hasOwnProperty("_known")&&e.hasOwnProperty("message"))}static async extract(e){if(e.ok)return e;const t=await e.json(),n=N.isServerError(t)?t.message:"app.error.general";throw new N({message:n})}static async handle(e){throw new N({message:N.isServerError(e)?e.message:"app.error.general"})}}class Q{constructor(e){this.value=void 0,this.value=e}toHours(){return 24*this.value}toMinutes(){return 24*this.value*60}toSeconds(){return 24*this.value*60*60}toMs(){return 24*this.value*60*60*1e3}}class _{constructor(e){this.value=void 0,this.value=e}toMinutes(){return 60*this.value}toSeconds(){return 60*this.value*60}toMs(){return 60*this.value*60*1e3}}class B{constructor(e){this.value=void 0,this.value=e}toSeconds(){return 60*this.value}toMs(){return 60*this.value*1e3}}class W{constructor(e){this.value=void 0,this.value=e}toMs(){return 1e3*this.value}}const G={Days:Q,Hours:_,Minutes:B,Seconds:W},J=e.createContext(void 0);function K(t){const[n,r]=function(){var e;const n=null!=(e=null==t?void 0:t.timeout)?e:5e3,[r,o]=M({comparisonFn:(e,t)=>e.id===t.id});return[[...r].reverse(),{add:function(e){const t=a({},e,{id:String(Date.now())});o.add(t),setTimeout(()=>o.remove(t),n)},remove:o.remove,clear:o.clear}]}();return e.createElement(J.Provider,{value:[n,r]},t.children)}function V(){const t=e.useContext(J);if(void 0===t)throw new Error("useToasts must be used within the ToastsContextProvider");return t}function X(){const[,e]=V();return e.add}const Y=e.createContext({});function Z(t){return e.createElement(Y.Provider,{value:t.translations},t.children)}function ee(){const t=e.useContext(Y);if(void 0===t)throw new Error("useTranslations must be used within the TranslationsContext");return function(e){const n=t[e];return n||console.warn(`[@bgord/frontend] missing translation for key ${e}.`),null!=n?n:e}}export{v as Anima,h as AnimaList,c as AnimaState,q as DateFormatter,Q as Days,R as DefaultDialogOverlay,I as Dialog,H as FilterUrl,_ as Hours,B as Minutes,$ as OutboundLink,W as Seconds,N as ServerError,G as Time,K as ToastsContextProvider,Z as TranslationsContextProvider,d as UseExpandableListState,f as UseFileState,m as getAnimaProps,w as getSafeWindow,F as noop,p as useAnimaList,g as useAutofocus,b as useBreakpoint,E as useClickOutside,S as useClientSearch,x as useDocumentTitle,L as useExpandableList,O as useField,C as useFile,T as useFilter,j as useKeyboardShortcurts,k as useLeavingPrompt,M as useList,u as usePreviousValue,P as useScrollLock,X as useToastTrigger,V as useToastsContext,U as useToggle,ee as useTranslations,z as useUrlFilter,y as useWindowDimensions};
//# sourceMappingURL=bgord-frontend.modern.js.map
