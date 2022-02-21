import n,{useState as e,useEffect as t,useRef as r,useLayoutEffect as o}from"react";var i,u;function c(n){var r=n.length-n.max,o=n.length>n.max;function u(){return o?i.contracted:i.expanded}var c=e(u),a=c[0],d=c[1];return t(function(){return d(u())},[n.length,n.max]),{state:a,displayShowMore:a===i.contracted,displayShowLess:a===i.expanded&&o,showMore:function(){a===i.contracted&&d(i.expanded)},showLess:function(){a===i.expanded&&d(i.contracted)},numberOfExcessiveElements:r,filterFn:function(e,t){return a===i.expanded||t<n.max}}}function a(n){var t,r=null!=(t=null==n?void 0:n.maxSize)?t:Infinity,o=e(u.idle),i=o[0],c=o[1],a=e(null),d=a[1],l={selectFile:function(n){var e=n.currentTarget.files;if(e&&e[0]){var t=e[0];if(t.size>r)return c(u.error);d(t),c(u.selected)}},clearFile:function(){d(null),c(u.idle)}};return i===u.idle?{state:i,data:null,actions:l}:i===u.selected?{state:i,data:a[0],actions:l}:{state:i,data:null,actions:l}}function d(n){var t,r,o=null!=(t=null==n?void 0:n.defaultItems)?t:[],i=null!=(r=null==n?void 0:n.comparisonFn)?r:function(n,e){return n===e},u=e(o),c=u[0],a=u[1];function d(n){a(function(e){return Array.isArray(n)?[].concat(e,n):[].concat(e,[n])})}function l(n){a(function(e){return e.filter(function(e){return!i(e,n)})})}function f(n){return c.some(function(e){return i(e,n)})}return[c,{clear:function(){a([])},add:d,remove:l,toggle:function(n){f(n)?l(n):d(n)},isAdded:f,update:a}]}function l(n){var e=r(null);return t(function(){e.current=n}),e.current}function f(n){void 0===n&&(n=!0),o(function(){if(n){var e=document.querySelector("html"),t=document.body,r=window.getComputedStyle(t).overflow,o=window.getComputedStyle(e).overflow;return t.style.overflow="hidden",e.style.overflow="hidden",function(){t.style.overflow=r,e.style.overflow=o}}},[n])}function s(){var n=e(""),t=n[0],r=n[1];return{query:t,clear:function(){r("")},onChange:function(n){r(n.currentTarget.value)},filterFn:function(n){return""===t||(null==n?void 0:n.toLowerCase().includes(t.toLowerCase()))}}}function v(n){void 0===n&&(n=!1);var t=e(n),r=t[0],o=t[1];return{on:r,off:!r,enable:function(){return o(!0)},disable:function(){return o(!1)},toggle:function(){return o(function(n){return!n})}}}function w(){var n=e({width:void 0,height:void 0}),r=n[0],o=n[1];return t(function(){function n(){o({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",n),n(),function(){return window.removeEventListener("resize",n)}},[]),r}function m(){return m=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},m.apply(this,arguments)}!function(n){n.contracted="contracted",n.expanded="expanded"}(i||(i={})),function(n){n.idle="idle",n.selected="selected",n.error="error"}(u||(u={}));var h=n.createContext(void 0);function p(e){var t,r,o,i,u=(r=null!=(t=null==e?void 0:e.timeout)?t:5e3,o=d({comparisonFn:function(n,e){return n.id===e.id}}),i=o[1],[[].concat(o[0]).reverse(),{add:function(n){var e=m({},n,{id:String(Date.now())});i.add(e),setTimeout(function(){return i.remove(e)},r)},remove:i.remove,clear:i.clear}]);return n.createElement(h.Provider,{value:[u[0],u[1]]},e.children)}function g(){var e=n.useContext(h);if(void 0===e)throw new Error("useToasts must be used within the ToastsContextProvider");return e}function x(){return g()[1].add}export{p as ToastsContextProvider,i as UseExpandableListState,u as UseFileState,c as useExpandableList,a as useFile,d as useList,l as usePreviousValue,f as useScrollLock,s as useSearch,x as useToastTrigger,g as useToastsContext,v as useToggle,w as useWindowDimensions};
//# sourceMappingURL=bgord-frontend.module.js.map
