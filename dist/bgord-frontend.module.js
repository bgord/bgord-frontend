import n,{useState as e,useEffect as t,useRef as r,useLayoutEffect as i}from"react";var o,u;function a(n){var r=n.length-n.max,i=n.length>n.max;function u(){return i?o.contracted:o.expanded}var a=e(u),c=a[0],l=a[1];return t(function(){return l(u())},[n.length,n.max]),{state:c,displayShowMore:c===o.contracted,displayShowLess:c===o.expanded&&i,showMore:function(){c===o.contracted&&l(o.expanded)},showLess:function(){c===o.expanded&&l(o.contracted)},numberOfExcessiveElements:r,filterFn:function(e,t){return c===o.expanded||t<n.max}}}function c(n){var t,r=null!=(t=null==n?void 0:n.maxSize)?t:Infinity,i=e(u.idle),o=i[0],a=i[1],c=e(null),l=c[1],f={selectFile:function(n){var e=n.currentTarget.files;if(e&&e[0]){var t=e[0];if(t.size>r)return a(u.error);l(t),a(u.selected)}},clearFile:function(){l(null),a(u.idle)}};return o===u.idle?{state:o,data:null,actions:f}:o===u.selected?{state:o,data:c[0],actions:f}:{state:o,data:null,actions:f}}function l(n){var t,r,i=null!=(t=null==n?void 0:n.defaultItems)?t:[],o=null!=(r=null==n?void 0:n.comparisonFn)?r:function(n,e){return n===e},u=e(i),a=u[0],c=u[1];function l(n){c(function(e){return Array.isArray(n)?[].concat(e,n):[].concat(e,[n])})}function f(n){c(function(e){return e.filter(function(e){return!o(e,n)})})}function d(n){return a.some(function(e){return o(e,n)})}return[a,{clear:function(){c([])},add:l,remove:f,toggle:function(n){d(n)?f(n):l(n)},isAdded:d,update:c}]}function f(n){var e=r(null);return t(function(){e.current=n}),e.current}function d(n){void 0===n&&(n=!0),i(function(){if(n){var e=document.querySelector("html"),t=document.body,r=window.getComputedStyle(t).overflow,i=window.getComputedStyle(e).overflow;return t.style.overflow="hidden",e.style.overflow="hidden",function(){t.style.overflow=r,e.style.overflow=i}}},[n])}function s(){var n=e(""),t=n[0],r=n[1];return{query:t,clear:function(){r("")},onChange:function(n){r(n.currentTarget.value)},filterFn:function(n){return""===t||(null==n?void 0:n.toLowerCase().includes(t.toLowerCase()))}}}function v(n){var t,r,i=null!=(t=n.defaultQuery)?t:void 0,o=e(i),u=o[0],a=o[1];return{query:u,clear:function(){a(i)},onChange:function(e){var t=e.currentTarget.value,r=Boolean(n.enum[String(t)]);a(r?t:i)},filterFn:null!=(r=n.filterFn)?r:function(n){return void 0===u||u===String(n)},options:Object.keys(n.enum)}}function m(n){void 0===n&&(n=!1);var t=e(n),r=t[0],i=t[1];return{on:r,off:!r,enable:function(){return i(!0)},disable:function(){return i(!1)},toggle:function(){return i(function(n){return!n})}}}function p(){var n=e({width:void 0,height:void 0}),r=n[0],i=n[1];return t(function(){function n(){i({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",n),n(),function(){return window.removeEventListener("resize",n)}},[]),r}function h(){return h=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},h.apply(this,arguments)}function g(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e.indexOf(t=o[r])>=0||(i[t]=n[t]);return i}function y(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function w(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(t)return(t=t.call(n)).next.bind(t);if(Array.isArray(n)||(t=function(n,e){if(n){if("string"==typeof n)return y(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?y(n,e):void 0}}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0;return function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}!function(n){n.contracted="contracted",n.expanded="expanded"}(o||(o={})),function(n){n.idle="idle",n.selected="selected",n.error="error"}(u||(u={}));var b=["as"];function x(e){var t=e.as,r=g(e,b);return n.createElement(t||"a",h({target:"_blank",rel:"noreferer noopener"},r))}var E=n.createContext(void 0);function S(e){var t,r,i,o,u=(r=null!=(t=null==e?void 0:e.timeout)?t:5e3,i=l({comparisonFn:function(n,e){return n.id===e.id}}),o=i[1],[[].concat(i[0]).reverse(),{add:function(n){var e=h({},n,{id:String(Date.now())});o.add(e),setTimeout(function(){return o.remove(e)},r)},remove:o.remove,clear:o.clear}]);return n.createElement(E.Provider,{value:[u[0],u[1]]},e.children)}function C(){var e=n.useContext(E);if(void 0===e)throw new Error("useToasts must be used within the ToastsContextProvider");return e}function O(){return C()[1].add}var T=n.createContext({});function F(e){return n.createElement(T.Provider,{value:e.translations},e.children)}function j(){var e=n.useContext(T);if(void 0===e)throw new Error("useTranslations must be used within the TranslationsContext");return function(n){var t=e[n];return t||console.warn("[@bgord/frontend] missing translation for key "+n+"."),null!=t?t:n}}var A,I=["children"];function L(e){var t,r=null!=(t=e.duration)?t:300,i=n.useState(function(){return e.visible?e.isInitial?A.appeared:A.appearing:A.hidden}),o=i[0],u=i[1],a=f(o);return n.useEffect(function(){if(!e.isInitial)if(e.visible)u(A.appearing),setTimeout(function(){return u(A.appeared)},100);else{if(!a)return;u(A.hidding),setTimeout(function(){return u(A.hidden)},r)}},[e.visible]),o===A.hidden?null:n.cloneElement(e.children,{"data-anima":o,"data-anima-effect":e.effect,style:h({"--duration":r+"ms"},e.children.props.style)})}function P(n){return{"data-anima":n["data-anima"],"data-anima-effect":n["data-anima-effect"],style:n.style}}function k(e){var t=g(e,I),r=n.useState(!0),i=r[0],o=r[1];return n.useEffect(function(){return o(!1)},[]),n.createElement("ul",h({},t),e.children.map(function(e){return n.cloneElement(e,{isInitial:i})}))}function z(e,t){void 0===t&&(t="head");for(var r,i=n.useState(e.map(function(n){return{item:n,props:{visible:!0}}})),o=i[0],u=i[1],a=[],c=function(){var n=r.value;!o.map(function(n){return n.item}).some(function(e){return n.id===e.id})&&a.push(n)},l=w(e);!(r=l()).done;)c();n.useEffect(function(){0!==a.length&&u("head"===t?function(n){return[].concat(a.map(function(n){return{item:n,props:{visible:!0}}}),n)}:function(n){return[].concat(n,a.map(function(n){return{item:n,props:{visible:!0}}}))})},[a.length,t]);for(var f,d=[],s=function(){var n=f.value.item;e.every(function(e){return e.id!==n.id})&&d.push(n)},v=w(o);!(f=v()).done;)s();return n.useEffect(function(){0!==d.length&&u(function(n){return n.map(function(n){return d.some(function(e){return e.id===n.item.id})?h({},n,{props:{visible:!1}}):n})})},[d.length]),{items:o.map(function(n){var t=e.find(function(e){return e.id===n.item.id});return t?h({},n,{item:t}):n}),count:o.filter(function(n){return n.props.visible}).length}}!function(n){n.appearing="appearing",n.appeared="appeared",n.hidding="hidding",n.hidden="hidden"}(A||(A={}));var q=/*#__PURE__*/function(){function n(n,e){this.value=void 0;var t=new URLSearchParams(this.getNonEmptyFilters(e));this.value=""!==t.toString()?n+"?"+t.toString():n}return n.prototype.getNonEmptyFilters=function(n){return void 0===n?{}:Object.fromEntries(Object.entries(n).filter(function(n){return void 0!==n[1]}))},n}();export{L as Anima,k as AnimaList,A as AnimaState,q as FilterUrl,x as OutboundLink,S as ToastsContextProvider,F as TranslationsContextProvider,o as UseExpandableListState,u as UseFileState,P as getAnimaProps,z as useAnimaList,v as useClientFilter,s as useClientSearch,a as useExpandableList,c as useFile,l as useList,f as usePreviousValue,d as useScrollLock,O as useToastTrigger,C as useToastsContext,m as useToggle,j as useTranslations,p as useWindowDimensions};
//# sourceMappingURL=bgord-frontend.module.js.map
