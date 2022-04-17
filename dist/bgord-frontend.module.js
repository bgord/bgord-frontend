import e,{useState as n,useEffect as t,useRef as r,useLayoutEffect as i}from"react";function o(){var e=n(""),t=e[0],r=e[1];return{query:t,clear:function(){r("")},onChange:function(e){r(e.currentTarget.value)},filterFn:function(e){return""===t||(null==e?void 0:e.toLowerCase().includes(t.toLowerCase()))}}}var u,a;function c(e){var r=e.length-e.max,i=e.length>e.max;function o(){return i?u.contracted:u.expanded}var a=n(o),c=a[0],l=a[1];return t(function(){return l(o())},[e.length,e.max]),{state:c,displayShowMore:c===u.contracted,displayShowLess:c===u.expanded&&i,showMore:function(){c===u.contracted&&l(u.expanded)},showLess:function(){c===u.expanded&&l(u.contracted)},numberOfExcessiveElements:r,filterFn:function(n,t){return c===u.expanded||t<e.max}}}function l(e){var r=n(e),i=r[0],o=r[1],u="function"==typeof e?e():e;return t(function(){o(u)},[u]),{value:i,set:o,clear:function(){o(e)}}}function f(e){var t,r=null!=(t=null==e?void 0:e.maxSize)?t:Infinity,i=n(a.idle),o=i[0],u=i[1],c=n(null),l=c[1],f={selectFile:function(e){var n=e.currentTarget.files;if(n&&n[0]){var t=n[0];if(t.size>r)return u(a.error);l(t),u(a.selected)}},clearFile:function(){l(null),u(a.idle)}};return o===a.idle?{state:o,data:null,actions:f}:o===a.selected?{state:o,data:c[0],actions:f}:{state:o,data:null,actions:f}}function d(e,n){var i=r(n);return t(function(){i.current=e}),i.current}function s(){}function v(e){var r,i,o,u=null!=(r=e.defaultQuery)?r:void 0,a=null!=(i=e.filterFn)?i:function(e){return void 0===v||v===String(e)},c=Object.keys(e.enum),l=null!=(o=null==e?void 0:e.onUpdate)?o:s,f=n(u),v=f[0],m=f[1],p=d(v);return t(function(){l(v,p)},[p,v]),{query:v,clear:function(){m(u)},onChange:function(n){var t=n.currentTarget.value,r=Boolean(e.enum[String(t)]);m(r?t:void 0)},filterFn:a,options:c,onUpdate:l}}function m(e){var t,r,i=null!=(t=null==e?void 0:e.defaultItems)?t:[],o=null!=(r=null==e?void 0:e.comparisonFn)?r:function(e,n){return e===n},u=n(i),a=u[0],c=u[1];function l(e){c(function(n){return Array.isArray(e)?[].concat(n,e):[].concat(n,[e])})}function f(e){c(function(n){return n.filter(function(n){return!o(n,e)})})}function d(e){return a.some(function(n){return o(n,e)})}return[a,{clear:function(){c([])},add:l,remove:f,toggle:function(e){d(e)?f(e):l(e)},isAdded:d,update:c}]}function p(e){void 0===e&&(e=!0),i(function(){if(e){var n=document.querySelector("html"),t=document.body,r=window.getComputedStyle(t).overflow,i=window.getComputedStyle(n).overflow;return t.style.overflow="hidden",n.style.overflow="hidden",function(){t.style.overflow=r,n.style.overflow=i}}},[e])}function h(e){void 0===e&&(e=!1);var t=n(e),r=t[0],i=t[1];return{on:r,off:!r,enable:function(){return i(!0)},disable:function(){return i(!1)},toggle:function(){return i(function(e){return!e})}}}function g(){return g=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},g.apply(this,arguments)}function w(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n.indexOf(t=o[r])>=0||(i[t]=e[t]);return i}function y(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function b(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return y(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?y(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function S(){if("undefined"!=typeof window)return window}function x(e){var n,t=S(),r=null!=(n=new URLSearchParams(null==t?void 0:t.location.search).get(e.label))?n:void 0;return v(g({onUpdate:function(n,r){if(t){var i=new URL(t.location.toString()),o=new URLSearchParams(i.search);void 0===n?o.delete(e.label):o.set(e.label,n),n!==r&&n!==r&&(i.search=o.toString(),history.pushState({},"",i.toString()))}}},e,{defaultQuery:null!=r?r:e.defaultQuery}))}function E(){var e=n({width:void 0,height:void 0}),r=e[0],i=e[1];return t(function(){function e(){i({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}},[]),r}!function(e){e.contracted="contracted",e.expanded="expanded"}(u||(u={})),function(e){e.idle="idle",e.selected="selected",e.error="error"}(a||(a={}));var j=["as"];function O(n){var t=n.as,r=w(n,j);return e.createElement(t||"a",g({target:"_blank",rel:"noreferer noopener"},r))}var C=e.createContext(void 0);function P(n){var t,r,i,o,u=(r=null!=(t=null==n?void 0:n.timeout)?t:5e3,i=m({comparisonFn:function(e,n){return e.id===n.id}}),o=i[1],[[].concat(i[0]).reverse(),{add:function(e){var n=g({},e,{id:String(Date.now())});o.add(n),setTimeout(function(){return o.remove(n)},r)},remove:o.remove,clear:o.clear}]);return e.createElement(C.Provider,{value:[u[0],u[1]]},n.children)}function T(){var n=e.useContext(C);if(void 0===n)throw new Error("useToasts must be used within the ToastsContextProvider");return n}function F(){return T()[1].add}var L=e.createContext({});function A(n){return e.createElement(L.Provider,{value:n.translations},n.children)}function I(){var n=e.useContext(L);if(void 0===n)throw new Error("useTranslations must be used within the TranslationsContext");return function(e){var t=n[e];return t||console.warn("[@bgord/frontend] missing translation for key "+e+"."),null!=t?t:e}}var U,k=["children"];function z(n){var t,r=null!=(t=n.duration)?t:300,i=e.useState(function(){return n.visible?n.isInitial?U.appeared:U.appearing:U.hidden}),o=i[0],u=i[1],a=d(o);return e.useEffect(function(){if(!n.isInitial)if(n.visible)u(U.appearing),setTimeout(function(){return u(U.appeared)},100);else{if(!a)return;u(U.hidding),setTimeout(function(){return u(U.hidden)},r)}},[n.visible]),o===U.hidden?null:e.cloneElement(n.children,{"data-anima":o,"data-anima-effect":n.effect,style:g({"--duration":r+"ms"},n.children.props.style)})}function R(e){return{"data-anima":e["data-anima"],"data-anima-effect":e["data-anima-effect"],style:e.style}}function q(n){var t=w(n,k),r=e.useState(!0),i=r[0],o=r[1];return e.useEffect(function(){return o(!1)},[]),e.createElement("ul",g({},t),n.children.map(function(n){return e.cloneElement(n,{isInitial:i})}))}function M(n,t){for(var r,i,o=null!=(r=null==t?void 0:t.direction)?r:"head",u=e.useState(n.map(function(e){return{item:e,props:{visible:!0}}})),a=u[0],c=u[1],l=[],f=function(){var e=i.value;!a.map(function(e){return e.item}).some(function(n){return e.id===n.id})&&l.push(e)},d=b(n);!(i=d()).done;)f();e.useEffect(function(){0!==l.length&&(c("head"===o?function(e){return[].concat(l.map(function(e){return{item:e,props:{visible:!0}}}),e)}:function(e){return[].concat(e,l.map(function(e){return{item:e,props:{visible:!0}}}))}),l=[])},[l.length,o]);for(var s,v=[],m=function(){var e=s.value.item;n.every(function(n){return n.id!==e.id})&&v.push(e)},p=b(a);!(s=p()).done;)m();return e.useEffect(function(){0!==v.length&&(c(function(e){return e.map(function(e){return v.some(function(n){return n.id===e.item.id})?g({},e,{props:{visible:!1}}):e})}),v=[])},[v.length]),{items:a.map(function(e){var t=n.find(function(n){return n.id===e.item.id});return t?g({},e,{item:t}):e}),count:a.filter(function(e){return e.props.visible}).length}}!function(e){e.appearing="appearing",e.appeared="appeared",e.hidding="hidding",e.hidden="hidden"}(U||(U={}));var Q=/*#__PURE__*/function(){function e(e,n){this.value=void 0;var t=new URLSearchParams(this.getNonEmptyFilters(n));this.value=""!==t.toString()?e+"?"+t.toString():e}return e.prototype.getNonEmptyFilters=function(e){return void 0===e?{}:Object.fromEntries(Object.entries(e).filter(function(e){return void 0!==e[1]}))},e}(),_=/*#__PURE__*/function(){function e(e){this.message=void 0,this._known=!0,this.message=e.message}return e.isServerError=function(e){return!!(e&&"object"==typeof e&&e===Object(e)&&e.hasOwnProperty("_known")&&e.hasOwnProperty("message"))},e.extract=function(n){try{return n.ok?Promise.resolve(n):Promise.resolve(n.json()).then(function(n){var t=e.isServerError(n)?n.message:"app.error.general";throw new e({message:t})})}catch(e){return Promise.reject(e)}},e.handle=function(n){try{throw new e({message:e.isServerError(n)?n.message:"app.error.general"})}catch(e){return Promise.reject(e)}},e}();export{z as Anima,q as AnimaList,U as AnimaState,Q as FilterUrl,O as OutboundLink,_ as ServerError,P as ToastsContextProvider,A as TranslationsContextProvider,u as UseExpandableListState,a as UseFileState,R as getAnimaProps,S as getSafeWindow,s as noop,M as useAnimaList,o as useClientSearch,c as useExpandableList,l as useField,f as useFile,v as useFilter,m as useList,d as usePreviousValue,p as useScrollLock,F as useToastTrigger,T as useToastsContext,h as useToggle,I as useTranslations,x as useUrlFilter,E as useWindowDimensions};
//# sourceMappingURL=bgord-frontend.module.js.map
