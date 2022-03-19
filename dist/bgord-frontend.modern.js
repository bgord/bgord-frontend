import e,{useState as n,useEffect as t,useRef as r,useLayoutEffect as i}from"react";function o(){const[e,t]=n("");return{query:e,clear:function(){t("")},onChange:function(e){t(e.currentTarget.value)},filterFn:function(n){return""===e||(null==n?void 0:n.toLowerCase().includes(e.toLowerCase()))}}}var a,u;function l(e){const r=e.length-e.max,i=e.length>e.max;function o(){return i?a.contracted:a.expanded}const[u,l]=n(o);return t(()=>l(o()),[e.length,e.max]),{state:u,displayShowMore:u===a.contracted,displayShowLess:u===a.expanded&&i,showMore:function(){u===a.contracted&&l(a.expanded)},showLess:function(){u===a.expanded&&l(a.contracted)},numberOfExcessiveElements:r,filterFn:function(n,t){return u===a.expanded||t<e.max}}}function s(e){var t;const r=null!=(t=null==e?void 0:e.maxSize)?t:Infinity,[i,o]=n(u.idle),[a,l]=n(null),s={selectFile:function(e){const n=e.currentTarget.files;if(!n||!n[0])return;const t=n[0];if(t.size>r)return o(u.error);l(t),o(u.selected)},clearFile:function(){l(null),o(u.idle)}};return i===u.idle?{state:i,data:null,actions:s}:i===u.selected?{state:i,data:a,actions:s}:{state:i,data:null,actions:s}}function c(e,n){const i=r(n);return t(()=>{i.current=e}),i.current}function d(){}function f(e){var r,i,o;const a=null!=(r=e.defaultQuery)?r:void 0,u=null!=(i=e.filterFn)?i:function(e){return void 0===f||f===String(e)},l=Object.keys(e.enum),s=null!=(o=null==e?void 0:e.onUpdate)?o:d,[f,m]=n(a),p=c(f);return t(()=>{s(f,p)},[p,f]),{query:f,clear:function(){m(a)},onChange:function(n){const t=n.currentTarget.value,r=Boolean(e.enum[String(t)]);m(r?t:void 0)},filterFn:u,options:l,onUpdate:s}}function m(e){var t,r;const i=null!=(t=null==e?void 0:e.defaultItems)?t:[],o=null!=(r=null==e?void 0:e.comparisonFn)?r:(e,n)=>e===n,[a,u]=n(i);function l(e){u(n=>Array.isArray(e)?[...n,...e]:[...n,e])}function s(e){u(n=>n.filter(n=>!o(n,e)))}function c(e){return a.some(n=>o(n,e))}return[a,{clear:function(){u([])},add:l,remove:s,toggle:function(e){c(e)?s(e):l(e)},isAdded:c,update:u}]}function p(e=!0){i(()=>{if(!e)return;const n=document.querySelector("html"),t=document.body,r=window.getComputedStyle(t).overflow,i=window.getComputedStyle(n).overflow;return t.style.overflow="hidden",n.style.overflow="hidden",()=>{t.style.overflow=r,n.style.overflow=i}},[e])}function v(e=!1){const[t,r]=n(e);return{on:t,off:!t,enable:()=>r(!0),disable:()=>r(!1),toggle:()=>r(e=>!e)}}function h(){return h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},h.apply(this,arguments)}function g(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n.indexOf(t=o[r])>=0||(i[t]=e[t]);return i}function w(){if("undefined"!=typeof window)return window}function y(e){var n;const t=w(),r=null!=(n=new URLSearchParams(null==t?void 0:t.location.search).get(e.label))?n:void 0;return f(h({onUpdate:(n,r)=>{if(!t)return;const i=new URL(t.location.toString()),o=new URLSearchParams(i.search);void 0===n?o.delete(e.label):o.set(e.label,n),n!==r&&n!==r&&(i.search=o.toString(),history.pushState({},"",i.toString()))}},e,{defaultQuery:null!=r?r:e.defaultQuery}))}function b(){const[e,r]=n({width:void 0,height:void 0});return t(()=>{function e(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),e}!function(e){e.contracted="contracted",e.expanded="expanded"}(a||(a={})),function(e){e.idle="idle",e.selected="selected",e.error="error"}(u||(u={}));const x=["as"];function S(n){const{as:t}=n,r=g(n,x);return e.createElement(t||"a",h({target:"_blank",rel:"noreferer noopener"},r))}const E=e.createContext(void 0);function C(n){const[t,r]=function(){var e;const t=null!=(e=null==n?void 0:n.timeout)?e:5e3,[r,i]=m({comparisonFn:(e,n)=>e.id===n.id});return[[...r].reverse(),{add:function(e){const n=h({},e,{id:String(Date.now())});i.add(n),setTimeout(()=>i.remove(n),t)},remove:i.remove,clear:i.clear}]}();return e.createElement(E.Provider,{value:[t,r]},n.children)}function F(){const n=e.useContext(E);if(void 0===n)throw new Error("useToasts must be used within the ToastsContextProvider");return n}function L(){const[,e]=F();return e.add}const T=e.createContext({});function O(n){return e.createElement(T.Provider,{value:n.translations},n.children)}function P(){const n=e.useContext(T);if(void 0===n)throw new Error("useTranslations must be used within the TranslationsContext");return function(e){const t=n[e];return t||console.warn(`[@bgord/frontend] missing translation for key ${e}.`),null!=t?t:e}}const U=["children"];var j;function I(n){var t;const r=null!=(t=n.duration)?t:300,[i,o]=e.useState(function(){return n.visible?n.isInitial?j.appeared:j.appearing:j.hidden}),a=c(i);return e.useEffect(()=>{if(!n.isInitial)if(n.visible)o(j.appearing),setTimeout(()=>o(j.appeared),100);else{if(!a)return;o(j.hidding),setTimeout(()=>o(j.hidden),r)}},[n.visible]),i===j.hidden?null:e.cloneElement(n.children,{"data-anima":i,"data-anima-effect":n.effect,style:h({"--duration":`${r}ms`},n.children.props.style)})}function k(e){return{"data-anima":e["data-anima"],"data-anima-effect":e["data-anima-effect"],style:e.style}}function z(n){const t=g(n,U),[r,i]=e.useState(!0);return e.useEffect(()=>i(!1),[]),e.createElement("ul",h({},t),n.children.map(n=>e.cloneElement(n,{isInitial:r})))}function R(n,t="head"){const[r,i]=e.useState(n.map(e=>({item:e,props:{visible:!0}}))),o=[];for(const e of n)!r.map(e=>e.item).some(n=>e.id===n.id)&&o.push(e);e.useEffect(()=>{0!==o.length&&i("head"===t?e=>[...o.map(e=>({item:e,props:{visible:!0}})),...e]:e=>[...e,...o.map(e=>({item:e,props:{visible:!0}}))])},[o.length,t]);const a=[];for(const{item:e}of r)n.every(n=>n.id!==e.id)&&a.push(e);return e.useEffect(()=>{0!==a.length&&i(e=>e.map(e=>a.some(n=>n.id===e.item.id)?h({},e,{props:{visible:!1}}):e))},[a.length]),{items:r.map(e=>{const t=n.find(n=>n.id===e.item.id);return t?h({},e,{item:t}):e}),count:r.filter(e=>e.props.visible).length}}!function(e){e.appearing="appearing",e.appeared="appeared",e.hidding="hidding",e.hidden="hidden"}(j||(j={}));class ${constructor(e,n){this.value=void 0;const t=new URLSearchParams(this.getNonEmptyFilters(n));this.value=""!==t.toString()?`${e}?${t.toString()}`:e}getNonEmptyFilters(e){return void 0===e?{}:Object.fromEntries(Object.entries(e).filter(([e,n])=>void 0!==n))}}export{I as Anima,z as AnimaList,j as AnimaState,$ as FilterUrl,S as OutboundLink,C as ToastsContextProvider,O as TranslationsContextProvider,a as UseExpandableListState,u as UseFileState,k as getAnimaProps,w as getSafeWindow,d as noop,R as useAnimaList,o as useClientSearch,l as useExpandableList,s as useFile,f as useFilter,m as useList,c as usePreviousValue,p as useScrollLock,L as useToastTrigger,F as useToastsContext,v as useToggle,P as useTranslations,y as useUrlFilter,b as useWindowDimensions};
//# sourceMappingURL=bgord-frontend.modern.js.map
