import e,{useState as n,useEffect as t,useRef as r,useLayoutEffect as o}from"react";function i(){const[e,t]=n("");return{query:e,clear:function(){t("")},onChange:function(e){t(e.currentTarget.value)},filterFn:function(n){return""===e||(null==n?void 0:n.toLowerCase().includes(e.toLowerCase()))}}}var a,s;function c(e){const r=e.length-e.max,o=e.length>e.max;function i(){return o?a.contracted:a.expanded}const[s,c]=n(i);return t(()=>c(i()),[e.length,e.max]),{state:s,displayShowMore:s===a.contracted,displayShowLess:s===a.expanded&&o,showMore:function(){s===a.contracted&&c(a.expanded)},showLess:function(){s===a.expanded&&c(a.contracted)},numberOfExcessiveElements:r,filterFn:function(n,t){return s===a.expanded||t<e.max}}}function u(e){const[r,o]=n(e),i="function"==typeof e?e():e;return t(()=>{o(i)},[i]),{value:r,set:o,clear:function(){o(e)}}}function l(e){var t;const r=null!=(t=null==e?void 0:e.maxSize)?t:Infinity,[o,i]=n(s.idle),[a,c]=n(null),u={selectFile:function(e){const n=e.currentTarget.files;if(!n||!n[0])return;const t=n[0];if(t.size>r)return i(s.error);c(t),i(s.selected)},clearFile:function(){c(null),i(s.idle)}};return o===s.idle?{state:o,data:null,actions:u}:o===s.selected?{state:o,data:a,actions:u}:{state:o,data:null,actions:u}}function d(e,n){const o=r(n);return t(()=>{o.current=e}),o.current}function f(){}function m(e){var r,o,i;const a=null!=(r=e.defaultQuery)?r:void 0,s=null!=(o=e.filterFn)?o:function(e){return void 0===l||l===String(e)},c=Object.keys(e.enum),u=null!=(i=null==e?void 0:e.onUpdate)?i:f,[l,m]=n(a),p=d(l);return t(()=>{u(l,p)},[p,l]),{query:l,clear:function(){m(a)},onChange:function(n){const t=n.currentTarget.value,r=Boolean(e.enum[String(t)]);m(r?t:void 0)},filterFn:s,options:c,onUpdate:u}}function p(e){var t,r;const o=null!=(t=null==e?void 0:e.defaultItems)?t:[],i=null!=(r=null==e?void 0:e.comparisonFn)?r:(e,n)=>e===n,[a,s]=n(o);function c(e){s(n=>Array.isArray(e)?[...n,...e]:[...n,e])}function u(e){s(n=>n.filter(n=>!i(n,e)))}function l(e){return a.some(n=>i(n,e))}return[a,{clear:function(){s([])},add:c,remove:u,toggle:function(e){l(e)?u(e):c(e)},isAdded:l,update:s}]}function h(e=!0){o(()=>{if(!e)return;const n=document.querySelector("html"),t=document.body,r=window.getComputedStyle(t).overflow,o=window.getComputedStyle(n).overflow;return t.style.overflow="hidden",n.style.overflow="hidden",()=>{t.style.overflow=r,n.style.overflow=o}},[e])}function v(e=!1){const[t,r]=n(e);return{on:t,off:!t,enable:()=>r(!0),disable:()=>r(!1),toggle:()=>r(e=>!e)}}function g(){return g=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},g.apply(this,arguments)}function w(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n.indexOf(t=i[r])>=0||(o[t]=e[t]);return o}function y(){if("undefined"!=typeof window)return window}function b(e){var n;const t=y(),r=null!=(n=new URLSearchParams(null==t?void 0:t.location.search).get(e.label))?n:void 0;return m(g({onUpdate:(n,r)=>{if(!t)return;const o=new URL(t.location.toString()),i=new URLSearchParams(o.search);void 0===n?i.delete(e.label):i.set(e.label,n),n!==r&&n!==r&&(o.search=i.toString(),history.pushState({},"",o.toString()))}},e,{defaultQuery:null!=r?r:e.defaultQuery}))}function S(){const[e,r]=n({width:void 0,height:void 0});return t(()=>{function e(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),e}!function(e){e.contracted="contracted",e.expanded="expanded"}(a||(a={})),function(e){e.idle="idle",e.selected="selected",e.error="error"}(s||(s={}));const x=["as"];function E(n){const{as:t}=n,r=w(n,x);return e.createElement(t||"a",g({target:"_blank",rel:"noreferer noopener"},r))}const C=e.createContext(void 0);function O(n){const[t,r]=function(){var e;const t=null!=(e=null==n?void 0:n.timeout)?e:5e3,[r,o]=p({comparisonFn:(e,n)=>e.id===n.id});return[[...r].reverse(),{add:function(e){const n=g({},e,{id:String(Date.now())});o.add(n),setTimeout(()=>o.remove(n),t)},remove:o.remove,clear:o.clear}]}();return e.createElement(C.Provider,{value:[t,r]},n.children)}function F(){const n=e.useContext(C);if(void 0===n)throw new Error("useToasts must be used within the ToastsContextProvider");return n}function L(){const[,e]=F();return e.add}const T=e.createContext({});function j(n){return e.createElement(T.Provider,{value:n.translations},n.children)}function P(){const n=e.useContext(T);if(void 0===n)throw new Error("useTranslations must be used within the TranslationsContext");return function(e){const t=n[e];return t||console.warn(`[@bgord/frontend] missing translation for key ${e}.`),null!=t?t:e}}const k=["children"];var U;function I(n){var t;const r=null!=(t=n.duration)?t:300,[o,i]=e.useState(function(){return n.visible?n.isInitial?U.appeared:U.appearing:U.hidden}),a=d(o);return e.useEffect(()=>{if(!n.isInitial)if(n.visible)i(U.appearing),setTimeout(()=>i(U.appeared),100);else{if(!a)return;i(U.hidding),setTimeout(()=>i(U.hidden),r)}},[n.visible]),o===U.hidden?null:e.cloneElement(n.children,{"data-anima":o,"data-anima-effect":n.effect,style:g({"--duration":`${r}ms`},n.children.props.style)})}function z(e){return{"data-anima":e["data-anima"],"data-anima-effect":e["data-anima-effect"],style:e.style}}function R(n){const t=w(n,k),[r,o]=e.useState(!0);return e.useEffect(()=>o(!1),[]),e.createElement("ul",g({},t),n.children.map(n=>e.cloneElement(n,{isInitial:r})))}function $(n,t){var r;const o=null!=(r=null==t?void 0:t.direction)?r:"head",[i,a]=e.useState(n.map(e=>({item:e,props:{visible:!0}})));let s=[];for(const e of n)!i.map(e=>e.item).some(n=>e.id===n.id)&&s.push(e);e.useEffect(()=>{0!==s.length&&(a("head"===o?e=>[...s.map(e=>({item:e,props:{visible:!0}})),...e]:e=>[...e,...s.map(e=>({item:e,props:{visible:!0}}))]),s=[])},[s.length,o]);let c=[];for(const{item:e}of i)n.every(n=>n.id!==e.id)&&c.push(e);return e.useEffect(()=>{0!==c.length&&(a(e=>e.map(e=>c.some(n=>n.id===e.item.id)?g({},e,{props:{visible:!1}}):e)),c=[])},[c.length]),{items:i.map(e=>{const t=n.find(n=>n.id===e.item.id);return t?g({},e,{item:t}):e}),count:i.filter(e=>e.props.visible).length}}!function(e){e.appearing="appearing",e.appeared="appeared",e.hidding="hidding",e.hidden="hidden"}(U||(U={}));class q{constructor(e,n){this.value=void 0;const t=new URLSearchParams(this.getNonEmptyFilters(n));this.value=""!==t.toString()?`${e}?${t.toString()}`:e}getNonEmptyFilters(e){return void 0===e?{}:Object.fromEntries(Object.entries(e).filter(([e,n])=>void 0!==n))}}class A{constructor(e){this.message=void 0,this._known=!0,this.message=e.message}static isServerError(e){return!!(e&&"object"==typeof e&&e===Object(e)&&e.hasOwnProperty("_known")&&e.hasOwnProperty("message"))}static async extract(e){if(e.ok)return e;const n=await e.json(),t=A.isServerError(n)?n.message:"app.error.general";throw new A({message:t})}static async handle(e){throw new A({message:A.isServerError(e)?e.message:"app.error.general"})}}export{I as Anima,R as AnimaList,U as AnimaState,q as FilterUrl,E as OutboundLink,A as ServerError,O as ToastsContextProvider,j as TranslationsContextProvider,a as UseExpandableListState,s as UseFileState,z as getAnimaProps,y as getSafeWindow,f as noop,$ as useAnimaList,i as useClientSearch,c as useExpandableList,u as useField,l as useFile,m as useFilter,p as useList,d as usePreviousValue,h as useScrollLock,L as useToastTrigger,F as useToastsContext,v as useToggle,P as useTranslations,b as useUrlFilter,S as useWindowDimensions};
//# sourceMappingURL=bgord-frontend.modern.js.map
