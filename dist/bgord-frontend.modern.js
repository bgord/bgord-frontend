import{useState as e,useEffect as n,useRef as t,useLayoutEffect as o}from"react";var r,i;function c(t){const o=t.length-t.max,i=t.length>t.max;function c(){return i?r.contracted:r.expanded}const[l,d]=e(c);return n(()=>d(c()),[t.length,t.max]),{state:l,displayShowMore:l===r.contracted,displayShowLess:l===r.expanded&&i,showMore:function(){l===r.contracted&&d(r.expanded)},showLess:function(){l===r.expanded&&d(r.contracted)},numberOfExcessiveElements:o,filterFn:function(e,n){return l===r.expanded||n<t.max}}}function l(n){var t;const o=null!=(t=null==n?void 0:n.maxSize)?t:Infinity,[r,c]=e(i.idle),[l,d]=e(null),u={selectFile:function(e){const n=e.currentTarget.files;if(!n||!n[0])return;const t=n[0];if(t.size>o)return c(i.error);d(t),c(i.selected)},clearFile:function(){d(null),c(i.idle)}};return r===i.idle?{state:r,data:null,actions:u}:r===i.selected?{state:r,data:l,actions:u}:{state:r,data:null,actions:u}}function d(n){var t,o;const r=null!=(t=null==n?void 0:n.defaultItems)?t:[],i=null!=(o=null==n?void 0:n.comparisonFn)?o:(e,n)=>e===n,[c,l]=e(r);function d(e){l(n=>Array.isArray(e)?[...n,...e]:[...n,e])}function u(e){l(n=>n.filter(n=>!i(n,e)))}function a(e){return c.some(n=>i(n,e))}return[c,{clear:function(){l([])},add:d,remove:u,toggle:function(e){a(e)?u(e):d(e)},isAdded:a,update:l}]}function u(e){const o=t(null);return n(()=>{o.current=e}),o.current}function a(e=!0){o(()=>{if(!e)return;const n=document.querySelector("html"),t=document.body,o=window.getComputedStyle(t).overflow,r=window.getComputedStyle(n).overflow;return t.style.overflow="hidden",n.style.overflow="hidden",()=>{t.style.overflow=o,n.style.overflow=r}},[e])}function s(){const[n,t]=e("");return{query:n,clear:function(){t("")},onChange:function(e){t(e.currentTarget.value)},filterFn:function(e){return""===n||(null==e?void 0:e.toLowerCase().includes(n.toLowerCase()))}}}function f(n=!1){const[t,o]=e(n);return{on:t,off:!t,enable:()=>o(!0),disable:()=>o(!1),toggle:()=>o(e=>!e)}}function w(){const[t,o]=e({width:void 0,height:void 0});return n(()=>{function e(){o({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),t}!function(e){e.contracted="contracted",e.expanded="expanded"}(r||(r={})),function(e){e.idle="idle",e.selected="selected",e.error="error"}(i||(i={}));export{r as UseExpandableListState,i as UseFileState,c as useExpandableList,l as useFile,d as useList,u as usePreviousValue,a as useScrollLock,s as useSearch,f as useToggle,w as useWindowDimensions};
//# sourceMappingURL=bgord-frontend.modern.js.map
