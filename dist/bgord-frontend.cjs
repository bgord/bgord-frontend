var e=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n,r,i=/*#__PURE__*/t(e);function o(t,n){var r=e.useRef(n);return e.useEffect(function(){r.current=t}),r.current}function a(){}function u(t){var n,r,i,u=null!=(n=t.defaultQuery)?n:void 0,s=null!=(r=t.filterFn)?r:function(e){return void 0===f||f===String(e)},l=Object.keys(t.enum),d=null!=(i=null==t?void 0:t.onUpdate)?i:a,c=e.useState(u),f=c[0],p=c[1],v=o(f);return e.useEffect(function(){d(f,v)},[v,f]),{query:f,clear:function(){p(u)},onChange:function(e){var n=e.currentTarget.value,r=Boolean(t.enum[String(n)]);p(r?n:void 0)},filterFn:s,options:l,onUpdate:d}}function s(t){var n,r,i=null!=(n=null==t?void 0:t.defaultItems)?n:[],o=null!=(r=null==t?void 0:t.comparisonFn)?r:function(e,t){return e===t},a=e.useState(i),u=a[0],s=a[1];function l(e){s(function(t){return Array.isArray(e)?[].concat(t,e):[].concat(t,[e])})}function d(e){s(function(t){return t.filter(function(t){return!o(t,e)})})}function c(e){return u.some(function(t){return o(t,e)})}return[u,{clear:function(){s([])},add:l,remove:d,toggle:function(e){c(e)?d(e):l(e)},isAdded:c,update:s}]}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(i[n]=e[n]);return i}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(){if("undefined"!=typeof window)return window}exports.UseExpandableListState=void 0,(n=exports.UseExpandableListState||(exports.UseExpandableListState={})).contracted="contracted",n.expanded="expanded",exports.UseFileState=void 0,(r=exports.UseFileState||(exports.UseFileState={})).idle="idle",r.selected="selected",r.error="error";var v=["as"],m=i.default.createContext(void 0);function x(){var e=i.default.useContext(m);if(void 0===e)throw new Error("useToasts must be used within the ToastsContextProvider");return e}var h,S=i.default.createContext({}),g=["children"];exports.AnimaState=void 0,(h=exports.AnimaState||(exports.AnimaState={})).appearing="appearing",h.appeared="appeared",h.hidding="hidding",h.hidden="hidden";var b=/*#__PURE__*/function(){function e(e,t){this.value=void 0;var n=new URLSearchParams(this.getNonEmptyFilters(t));this.value=""!==n.toString()?e+"?"+n.toString():e}return e.prototype.getNonEmptyFilters=function(e){return void 0===e?{}:Object.fromEntries(Object.entries(e).filter(function(e){return void 0!==e[1]}))},e}();exports.Anima=function(e){var t,n=null!=(t=e.duration)?t:300,r=i.default.useState(function(){return e.visible?e.isInitial?exports.AnimaState.appeared:exports.AnimaState.appearing:exports.AnimaState.hidden}),a=r[0],u=r[1],s=o(a);return i.default.useEffect(function(){if(!e.isInitial)if(e.visible)u(exports.AnimaState.appearing),setTimeout(function(){return u(exports.AnimaState.appeared)},100);else{if(!s)return;u(exports.AnimaState.hidding),setTimeout(function(){return u(exports.AnimaState.hidden)},n)}},[e.visible]),a===exports.AnimaState.hidden?null:i.default.cloneElement(e.children,{"data-anima":a,"data-anima-effect":e.effect,style:l({"--duration":n+"ms"},e.children.props.style)})},exports.AnimaList=function(e){var t=d(e,g),n=i.default.useState(!0),r=n[0],o=n[1];return i.default.useEffect(function(){return o(!1)},[]),i.default.createElement("ul",l({},t),e.children.map(function(e){return i.default.cloneElement(e,{isInitial:r})}))},exports.FilterUrl=b,exports.OutboundLink=function(e){var t=e.as,n=d(e,v);return i.default.createElement(t||"a",l({target:"_blank",rel:"noreferer noopener"},n))},exports.ToastsContextProvider=function(e){var t,n,r,o,a=(n=null!=(t=null==e?void 0:e.timeout)?t:5e3,r=s({comparisonFn:function(e,t){return e.id===t.id}}),o=r[1],[[].concat(r[0]).reverse(),{add:function(e){var t=l({},e,{id:String(Date.now())});o.add(t),setTimeout(function(){return o.remove(t)},n)},remove:o.remove,clear:o.clear}]);return i.default.createElement(m.Provider,{value:[a[0],a[1]]},e.children)},exports.TranslationsContextProvider=function(e){return i.default.createElement(S.Provider,{value:e.translations},e.children)},exports.getAnimaProps=function(e){return{"data-anima":e["data-anima"],"data-anima-effect":e["data-anima-effect"],style:e.style}},exports.getSafeWindow=p,exports.noop=a,exports.useAnimaList=function(e,t){void 0===t&&(t="head");for(var n,r=i.default.useState(e.map(function(e){return{item:e,props:{visible:!0}}})),o=r[0],a=r[1],u=[],s=function(){var e=n.value;!o.map(function(e){return e.item}).some(function(t){return e.id===t.id})&&u.push(e)},d=f(e);!(n=d()).done;)s();i.default.useEffect(function(){0!==u.length&&a("head"===t?function(e){return[].concat(u.map(function(e){return{item:e,props:{visible:!0}}}),e)}:function(e){return[].concat(e,u.map(function(e){return{item:e,props:{visible:!0}}}))})},[u.length,t]);for(var c,p=[],v=function(){var t=c.value.item;e.every(function(e){return e.id!==t.id})&&p.push(t)},m=f(o);!(c=m()).done;)v();return i.default.useEffect(function(){0!==p.length&&a(function(e){return e.map(function(e){return p.some(function(t){return t.id===e.item.id})?l({},e,{props:{visible:!1}}):e})})},[p.length]),{items:o.map(function(t){var n=e.find(function(e){return e.id===t.item.id});return n?l({},t,{item:n}):t}),count:o.filter(function(e){return e.props.visible}).length}},exports.useClientSearch=function(){var t=e.useState(""),n=t[0],r=t[1];return{query:n,clear:function(){r("")},onChange:function(e){r(e.currentTarget.value)},filterFn:function(e){return""===n||(null==e?void 0:e.toLowerCase().includes(n.toLowerCase()))}}},exports.useExpandableList=function(t){var n=t.length-t.max,r=t.length>t.max;function i(){return r?exports.UseExpandableListState.contracted:exports.UseExpandableListState.expanded}var o=e.useState(i),a=o[0],u=o[1];return e.useEffect(function(){return u(i())},[t.length,t.max]),{state:a,displayShowMore:a===exports.UseExpandableListState.contracted,displayShowLess:a===exports.UseExpandableListState.expanded&&r,showMore:function(){a===exports.UseExpandableListState.contracted&&u(exports.UseExpandableListState.expanded)},showLess:function(){a===exports.UseExpandableListState.expanded&&u(exports.UseExpandableListState.contracted)},numberOfExcessiveElements:n,filterFn:function(e,n){return a===exports.UseExpandableListState.expanded||n<t.max}}},exports.useFile=function(t){var n,r=null!=(n=null==t?void 0:t.maxSize)?n:Infinity,i=e.useState(exports.UseFileState.idle),o=i[0],a=i[1],u=e.useState(null),s=u[1],l={selectFile:function(e){var t=e.currentTarget.files;if(t&&t[0]){var n=t[0];if(n.size>r)return a(exports.UseFileState.error);s(n),a(exports.UseFileState.selected)}},clearFile:function(){s(null),a(exports.UseFileState.idle)}};return o===exports.UseFileState.idle?{state:o,data:null,actions:l}:o===exports.UseFileState.selected?{state:o,data:u[0],actions:l}:{state:o,data:null,actions:l}},exports.useFilter=u,exports.useList=s,exports.usePreviousValue=o,exports.useScrollLock=function(t){void 0===t&&(t=!0),e.useLayoutEffect(function(){if(t){var e=document.querySelector("html"),n=document.body,r=window.getComputedStyle(n).overflow,i=window.getComputedStyle(e).overflow;return n.style.overflow="hidden",e.style.overflow="hidden",function(){n.style.overflow=r,e.style.overflow=i}}},[t])},exports.useToastTrigger=function(){return x()[1].add},exports.useToastsContext=x,exports.useToggle=function(t){void 0===t&&(t=!1);var n=e.useState(t),r=n[0],i=n[1];return{on:r,off:!r,enable:function(){return i(!0)},disable:function(){return i(!1)},toggle:function(){return i(function(e){return!e})}}},exports.useTranslations=function(){var e=i.default.useContext(S);if(void 0===e)throw new Error("useTranslations must be used within the TranslationsContext");return function(t){var n=e[t];return n||console.warn("[@bgord/frontend] missing translation for key "+t+"."),null!=n?n:t}},exports.useUrlFilter=function(e){var t,n=p(),r=null!=(t=new URLSearchParams(null==n?void 0:n.location.search).get(e.label))?t:void 0;return u(l({onUpdate:function(t,r){if(n){var i=new URL(n.location.toString()),o=new URLSearchParams(i.search);void 0===t?o.delete(e.label):o.set(e.label,t),t!==r&&t!==r&&(i.search=o.toString(),history.pushState({},"",i.toString()))}}},e,{defaultQuery:null!=r?r:e.defaultQuery}))},exports.useWindowDimensions=function(){var t=e.useState({width:void 0,height:void 0}),n=t[0],r=t[1];return e.useEffect(function(){function e(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}},[]),n};
//# sourceMappingURL=bgord-frontend.cjs.map
