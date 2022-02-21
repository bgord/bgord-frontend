!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t((e||self).frontend={},e.react)}(this,function(e,t){var n,i;e.UseExpandableListState=void 0,(n=e.UseExpandableListState||(e.UseExpandableListState={})).contracted="contracted",n.expanded="expanded",e.UseFileState=void 0,(i=e.UseFileState||(e.UseFileState={})).idle="idle",i.selected="selected",i.error="error",e.useExpandableList=function(n){var i=n.length-n.max,r=n.length>n.max;function a(){return r?e.UseExpandableListState.contracted:e.UseExpandableListState.expanded}var o=t.useState(a),u=o[0],s=o[1];return t.useEffect(function(){return s(a())},[n.length,n.max]),{state:u,displayShowMore:u===e.UseExpandableListState.contracted,displayShowLess:u===e.UseExpandableListState.expanded&&r,showMore:function(){u===e.UseExpandableListState.contracted&&s(e.UseExpandableListState.expanded)},showLess:function(){u===e.UseExpandableListState.expanded&&s(e.UseExpandableListState.contracted)},numberOfExcessiveElements:i,filterFn:function(t,i){return u===e.UseExpandableListState.expanded||i<n.max}}},e.useFile=function(n){var i,r=null!=(i=null==n?void 0:n.maxSize)?i:Infinity,a=t.useState(e.UseFileState.idle),o=a[0],u=a[1],s=t.useState(null),l=s[1],d={selectFile:function(t){var n=t.currentTarget.files;if(n&&n[0]){var i=n[0];if(i.size>r)return u(e.UseFileState.error);l(i),u(e.UseFileState.selected)}},clearFile:function(){l(null),u(e.UseFileState.idle)}};return o===e.UseFileState.idle?{state:o,data:null,actions:d}:o===e.UseFileState.selected?{state:o,data:s[0],actions:d}:{state:o,data:null,actions:d}},e.useList=function(e){var n,i,r=null!=(n=null==e?void 0:e.defaultItems)?n:[],a=null!=(i=null==e?void 0:e.comparisonFn)?i:function(e,t){return e===t},o=t.useState(r),u=o[0],s=o[1];function l(e){s(function(t){return Array.isArray(e)?[].concat(t,e):[].concat(t,[e])})}function d(e){s(function(t){return t.filter(function(t){return!a(t,e)})})}function c(e){return u.some(function(t){return a(t,e)})}return[u,{clear:function(){s([])},add:l,remove:d,toggle:function(e){c(e)?d(e):l(e)},isAdded:c,update:s}]},e.usePreviousValue=function(e){var n=t.useRef(null);return t.useEffect(function(){n.current=e}),n.current},e.useScrollLock=function(e){void 0===e&&(e=!0),t.useLayoutEffect(function(){if(e){var t=document.querySelector("html"),n=document.body,i=window.getComputedStyle(n).overflow,r=window.getComputedStyle(t).overflow;return n.style.overflow="hidden",t.style.overflow="hidden",function(){n.style.overflow=i,t.style.overflow=r}}},[e])},e.useSearch=function(){var e=t.useState(""),n=e[0],i=e[1];return{query:n,clear:function(){i("")},onChange:function(e){i(e.currentTarget.value)},filterFn:function(e){return""===n||(null==e?void 0:e.toLowerCase().includes(n.toLowerCase()))}}},e.useToggle=function(e){void 0===e&&(e=!1);var n=t.useState(e),i=n[0],r=n[1];return{on:i,off:!i,enable:function(){return r(!0)},disable:function(){return r(!1)},toggle:function(){return r(function(e){return!e})}}},e.useWindowDimensions=function(){var e=t.useState({width:void 0,height:void 0}),n=e[0],i=e[1];return t.useEffect(function(){function e(){i({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}},[]),n}});
//# sourceMappingURL=bgord-frontend.umd.js.map
