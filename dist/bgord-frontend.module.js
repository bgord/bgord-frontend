import e,{useState as n,useEffect as t,useRef as r,useLayoutEffect as i}from"react";function o(){var e=n(""),t=e[0],r=e[1];return{query:t,clear:function(){r("")},onChange:function(e){r(e.currentTarget.value)},filterFn:function(e){return""===t||(null==e?void 0:e.toLowerCase().includes(t.toLowerCase()))}}}var u,a;function c(e){var r=e.length-e.max,i=e.length>e.max;function o(){return i?u.contracted:u.expanded}var a=n(o),c=a[0],l=a[1];return t(function(){return l(o())},[e.length,e.max]),{state:c,displayShowMore:c===u.contracted,displayShowLess:c===u.expanded&&i,showMore:function(){c===u.contracted&&l(u.expanded)},showLess:function(){c===u.expanded&&l(u.contracted)},numberOfExcessiveElements:r,filterFn:function(n,t){return c===u.expanded||t<e.max}}}function l(e){var t,r=null!=(t=null==e?void 0:e.maxSize)?t:Infinity,i=n(a.idle),o=i[0],u=i[1],c=n(null),l=c[1],f={selectFile:function(e){var n=e.currentTarget.files;if(n&&n[0]){var t=n[0];if(t.size>r)return u(a.error);l(t),u(a.selected)}},clearFile:function(){l(null),u(a.idle)}};return o===a.idle?{state:o,data:null,actions:f}:o===a.selected?{state:o,data:c[0],actions:f}:{state:o,data:null,actions:f}}function f(e,n){var i=r(n);return t(function(){i.current=e}),i.current}function d(){}function s(e){var r,i,o,u=null!=(r=e.defaultQuery)?r:void 0,a=null!=(i=e.filterFn)?i:function(e){return void 0===v||v===String(e)},c=Object.keys(e.enum),l=null!=(o=null==e?void 0:e.onUpdate)?o:d,s=n(u),v=s[0],m=s[1],p=f(v);return t(function(){l(v,p)},[p,v]),{query:v,clear:function(){m(u)},onChange:function(n){var t=n.currentTarget.value,r=Boolean(e.enum[String(t)]);m(r?t:void 0)},filterFn:a,options:c,onUpdate:l}}function v(e){var t,r,i=null!=(t=null==e?void 0:e.defaultItems)?t:[],o=null!=(r=null==e?void 0:e.comparisonFn)?r:function(e,n){return e===n},u=n(i),a=u[0],c=u[1];function l(e){c(function(n){return Array.isArray(e)?[].concat(n,e):[].concat(n,[e])})}function f(e){c(function(n){return n.filter(function(n){return!o(n,e)})})}function d(e){return a.some(function(n){return o(n,e)})}return[a,{clear:function(){c([])},add:l,remove:f,toggle:function(e){d(e)?f(e):l(e)},isAdded:d,update:c}]}function m(e){void 0===e&&(e=!0),i(function(){if(e){var n=document.querySelector("html"),t=document.body,r=window.getComputedStyle(t).overflow,i=window.getComputedStyle(n).overflow;return t.style.overflow="hidden",n.style.overflow="hidden",function(){t.style.overflow=r,n.style.overflow=i}}},[e])}function p(e){void 0===e&&(e=!1);var t=n(e),r=t[0],i=t[1];return{on:r,off:!r,enable:function(){return i(!0)},disable:function(){return i(!1)},toggle:function(){return i(function(e){return!e})}}}function h(){return h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},h.apply(this,arguments)}function g(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n.indexOf(t=o[r])>=0||(i[t]=e[t]);return i}function w(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function y(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return w(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?w(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function b(){if("undefined"!=typeof window)return window}function S(e){var n,t=b(),r=null!=(n=new URLSearchParams(null==t?void 0:t.location.search).get(e.label))?n:void 0;return s(h({onUpdate:function(n,r){if(t){var i=new URL(t.location.toString()),o=new URLSearchParams(i.search);void 0===n?o.delete(e.label):o.set(e.label,n),n!==r&&n!==r&&(i.search=o.toString(),history.pushState({},"",i.toString()))}}},e,{defaultQuery:null!=r?r:e.defaultQuery}))}function x(){var e=n({width:void 0,height:void 0}),r=e[0],i=e[1];return t(function(){function e(){i({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}},[]),r}!function(e){e.contracted="contracted",e.expanded="expanded"}(u||(u={})),function(e){e.idle="idle",e.selected="selected",e.error="error"}(a||(a={}));var E=["as"];function j(n){var t=n.as,r=g(n,E);return e.createElement(t||"a",h({target:"_blank",rel:"noreferer noopener"},r))}var O=e.createContext(void 0);function C(n){var t,r,i,o,u=(r=null!=(t=null==n?void 0:n.timeout)?t:5e3,i=v({comparisonFn:function(e,n){return e.id===n.id}}),o=i[1],[[].concat(i[0]).reverse(),{add:function(e){var n=h({},e,{id:String(Date.now())});o.add(n),setTimeout(function(){return o.remove(n)},r)},remove:o.remove,clear:o.clear}]);return e.createElement(O.Provider,{value:[u[0],u[1]]},n.children)}function P(){var n=e.useContext(O);if(void 0===n)throw new Error("useToasts must be used within the ToastsContextProvider");return n}function T(){return P()[1].add}var F=e.createContext({});function L(n){return e.createElement(F.Provider,{value:n.translations},n.children)}function A(){var n=e.useContext(F);if(void 0===n)throw new Error("useTranslations must be used within the TranslationsContext");return function(e){var t=n[e];return t||console.warn("[@bgord/frontend] missing translation for key "+e+"."),null!=t?t:e}}var I,U=["children"];function k(n){var t,r=null!=(t=n.duration)?t:300,i=e.useState(function(){return n.visible?n.isInitial?I.appeared:I.appearing:I.hidden}),o=i[0],u=i[1],a=f(o);return e.useEffect(function(){if(!n.isInitial)if(n.visible)u(I.appearing),setTimeout(function(){return u(I.appeared)},100);else{if(!a)return;u(I.hidding),setTimeout(function(){return u(I.hidden)},r)}},[n.visible]),o===I.hidden?null:e.cloneElement(n.children,{"data-anima":o,"data-anima-effect":n.effect,style:h({"--duration":r+"ms"},n.children.props.style)})}function z(e){return{"data-anima":e["data-anima"],"data-anima-effect":e["data-anima-effect"],style:e.style}}function R(n){var t=g(n,U),r=e.useState(!0),i=r[0],o=r[1];return e.useEffect(function(){return o(!1)},[]),e.createElement("ul",h({},t),n.children.map(function(n){return e.cloneElement(n,{isInitial:i})}))}function q(n,t){for(var r,i,o,u=null!=(r=null==t?void 0:t.duration)?r:300,a=null!=(i=null==t?void 0:t.direction)?i:"head",c=e.useState(n.map(function(e){return{item:e,props:{visible:!0}}})),l=c[0],f=c[1],d=[],s=function(){var e=o.value;!l.map(function(e){return e.item}).some(function(n){return e.id===n.id})&&d.push(e)},v=y(n);!(o=v()).done;)s();e.useEffect(function(){0!==d.length&&(f("head"===a?function(e){return[].concat(d.map(function(e){return{item:e,props:{visible:!0}}}),e)}:function(e){return[].concat(e,d.map(function(e){return{item:e,props:{visible:!0}}}))}),d=[])},[d.length,a]);for(var m,p=[],g=function(){var e=m.value.item;n.every(function(n){return n.id!==e.id})&&p.push(e)},w=y(l);!(m=w()).done;)g();return e.useEffect(function(){0!==p.length&&(f(function(e){return e.map(function(e){return p.some(function(n){return n.id===e.item.id})?h({},e,{props:{visible:!1}}):e})}),setTimeout(function(){return f(n.map(function(e){return{item:e,props:{visible:!0}}}))},u+25),p=[])},[p.length]),{items:l.map(function(e){var t=n.find(function(n){return n.id===e.item.id});return t?h({},e,{item:t}):e}),count:l.filter(function(e){return e.props.visible}).length}}!function(e){e.appearing="appearing",e.appeared="appeared",e.hidding="hidding",e.hidden="hidden"}(I||(I={}));var M=/*#__PURE__*/function(){function e(e,n){this.value=void 0;var t=new URLSearchParams(this.getNonEmptyFilters(n));this.value=""!==t.toString()?e+"?"+t.toString():e}return e.prototype.getNonEmptyFilters=function(e){return void 0===e?{}:Object.fromEntries(Object.entries(e).filter(function(e){return void 0!==e[1]}))},e}(),Q=/*#__PURE__*/function(){function e(e){this.message=void 0,this._known=!0,this.message=e.message}return e.isServerError=function(e){return!!(e&&"object"==typeof e&&e===Object(e)&&e.hasOwnProperty("_known")&&e.hasOwnProperty("message"))},e.extract=function(n){try{return n.ok?Promise.resolve(n):Promise.resolve(n.json()).then(function(n){var t=e.isServerError(n)?n.message:"app.error.general";throw new e({message:t})})}catch(e){return Promise.reject(e)}},e.handle=function(n){try{throw new e({message:e.isServerError(n)?n.message:"app.error.general"})}catch(e){return Promise.reject(e)}},e}();export{k as Anima,R as AnimaList,I as AnimaState,M as FilterUrl,j as OutboundLink,Q as ServerError,C as ToastsContextProvider,L as TranslationsContextProvider,u as UseExpandableListState,a as UseFileState,z as getAnimaProps,b as getSafeWindow,d as noop,q as useAnimaList,o as useClientSearch,c as useExpandableList,l as useFile,s as useFilter,v as useList,f as usePreviousValue,m as useScrollLock,T as useToastTrigger,P as useToastsContext,p as useToggle,A as useTranslations,S as useUrlFilter,x as useWindowDimensions};
//# sourceMappingURL=bgord-frontend.module.js.map
