!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t((e||self).frontend={},e.react)}(this,function(e,t){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r,i,a=/*#__PURE__*/n(t);function o(e,n){var r=t.useRef(n);return t.useEffect(function(){r.current=e}),r.current}function u(){}function l(e){var n,r,i,a=null!=(n=e.defaultQuery)?n:void 0,l=null!=(r=e.filterFn)?r:function(e){return void 0===c||c===String(e)},s=Object.keys(e.enum),d=null!=(i=null==e?void 0:e.onUpdate)?i:u,f=t.useState(a),c=f[0],v=f[1],p=o(c);return t.useEffect(function(){d(c,p)},[p,c]),{query:c,clear:function(){v(a)},onChange:function(t){var n=t.currentTarget.value,r=Boolean(e.enum[String(n)]);v(r?n:void 0)},filterFn:l,options:s,onUpdate:d}}function s(e){var n,r,i=null!=(n=null==e?void 0:e.defaultItems)?n:[],a=null!=(r=null==e?void 0:e.comparisonFn)?r:function(e,t){return e===t},o=t.useState(i),u=o[0],l=o[1];function s(e){l(function(t){return Array.isArray(e)?[].concat(t,e):[].concat(t,[e])})}function d(e){l(function(t){return t.filter(function(t){return!a(t,e)})})}function f(e){return u.some(function(t){return a(t,e)})}return[u,{clear:function(){l([])},add:s,remove:d,toggle:function(e){f(e)?d(e):s(e)},isAdded:f,update:l}]}function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(i[n]=e[n]);return i}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(){if("undefined"!=typeof window)return window}e.UseExpandableListState=void 0,(r=e.UseExpandableListState||(e.UseExpandableListState={})).contracted="contracted",r.expanded="expanded",e.UseFileState=void 0,(i=e.UseFileState||(e.UseFileState={})).idle="idle",i.selected="selected",i.error="error";var m=["as"],h=a.default.createContext(void 0);function S(){var e=a.default.useContext(h);if(void 0===e)throw new Error("useToasts must be used within the ToastsContextProvider");return e}var g,b=a.default.createContext({}),y=["children"];e.AnimaState=void 0,(g=e.AnimaState||(e.AnimaState={})).appearing="appearing",g.appeared="appeared",g.hidding="hidding",g.hidden="hidden";var w=/*#__PURE__*/function(){function e(e,t){this.value=void 0;var n=new URLSearchParams(this.getNonEmptyFilters(t));this.value=""!==n.toString()?e+"?"+n.toString():e}return e.prototype.getNonEmptyFilters=function(e){return void 0===e?{}:Object.fromEntries(Object.entries(e).filter(function(e){return void 0!==e[1]}))},e}();e.Anima=function(t){var n,r=null!=(n=t.duration)?n:300,i=a.default.useState(function(){return t.visible?t.isInitial?e.AnimaState.appeared:e.AnimaState.appearing:e.AnimaState.hidden}),u=i[0],l=i[1],s=o(u);return a.default.useEffect(function(){if(!t.isInitial)if(t.visible)l(e.AnimaState.appearing),setTimeout(function(){return l(e.AnimaState.appeared)},100);else{if(!s)return;l(e.AnimaState.hidding),setTimeout(function(){return l(e.AnimaState.hidden)},r)}},[t.visible]),u===e.AnimaState.hidden?null:a.default.cloneElement(t.children,{"data-anima":u,"data-anima-effect":t.effect,style:d({"--duration":r+"ms"},t.children.props.style)})},e.AnimaList=function(e){var t=f(e,y),n=a.default.useState(!0),r=n[0],i=n[1];return a.default.useEffect(function(){return i(!1)},[]),a.default.createElement("ul",d({},t),e.children.map(function(e){return a.default.cloneElement(e,{isInitial:r})}))},e.FilterUrl=w,e.OutboundLink=function(e){var t=e.as,n=f(e,m);return a.default.createElement(t||"a",d({target:"_blank",rel:"noreferer noopener"},n))},e.ToastsContextProvider=function(e){var t,n,r,i,o=(n=null!=(t=null==e?void 0:e.timeout)?t:5e3,r=s({comparisonFn:function(e,t){return e.id===t.id}}),i=r[1],[[].concat(r[0]).reverse(),{add:function(e){var t=d({},e,{id:String(Date.now())});i.add(t),setTimeout(function(){return i.remove(t)},n)},remove:i.remove,clear:i.clear}]);return a.default.createElement(h.Provider,{value:[o[0],o[1]]},e.children)},e.TranslationsContextProvider=function(e){return a.default.createElement(b.Provider,{value:e.translations},e.children)},e.getAnimaProps=function(e){return{"data-anima":e["data-anima"],"data-anima-effect":e["data-anima-effect"],style:e.style}},e.getSafeWindow=p,e.noop=u,e.useAnimaList=function(e,t){for(var n,r,i,o=null!=(n=null==t?void 0:t.duration)?n:300,u=null!=(r=t.direction)?r:"head",l=a.default.useState(e.map(function(e){return{item:e,props:{visible:!0}}})),s=l[0],f=l[1],c=[],p=function(){var e=i.value;!s.map(function(e){return e.item}).some(function(t){return e.id===t.id})&&c.push(e)},m=v(e);!(i=m()).done;)p();a.default.useEffect(function(){0!==c.length&&(f("head"===u?function(e){return[].concat(c.map(function(e){return{item:e,props:{visible:!0}}}),e)}:function(e){return[].concat(e,c.map(function(e){return{item:e,props:{visible:!0}}}))}),c=[])},[c.length,u]);for(var h,S=[],g=function(){var t=h.value.item;e.every(function(e){return e.id!==t.id})&&S.push(t)},b=v(s);!(h=b()).done;)g();return a.default.useEffect(function(){0!==S.length&&(f(function(e){return e.map(function(e){return S.some(function(t){return t.id===e.item.id})?d({},e,{props:{visible:!1}}):e})}),setTimeout(function(){return f(e.map(function(e){return{item:e,props:{visible:!0}}}))},o+25),S=[])},[S.length]),{items:s.map(function(t){var n=e.find(function(e){return e.id===t.item.id});return n?d({},t,{item:n}):t}),count:s.filter(function(e){return e.props.visible}).length}},e.useClientSearch=function(){var e=t.useState(""),n=e[0],r=e[1];return{query:n,clear:function(){r("")},onChange:function(e){r(e.currentTarget.value)},filterFn:function(e){return""===n||(null==e?void 0:e.toLowerCase().includes(n.toLowerCase()))}}},e.useExpandableList=function(n){var r=n.length-n.max,i=n.length>n.max;function a(){return i?e.UseExpandableListState.contracted:e.UseExpandableListState.expanded}var o=t.useState(a),u=o[0],l=o[1];return t.useEffect(function(){return l(a())},[n.length,n.max]),{state:u,displayShowMore:u===e.UseExpandableListState.contracted,displayShowLess:u===e.UseExpandableListState.expanded&&i,showMore:function(){u===e.UseExpandableListState.contracted&&l(e.UseExpandableListState.expanded)},showLess:function(){u===e.UseExpandableListState.expanded&&l(e.UseExpandableListState.contracted)},numberOfExcessiveElements:r,filterFn:function(t,r){return u===e.UseExpandableListState.expanded||r<n.max}}},e.useFile=function(n){var r,i=null!=(r=null==n?void 0:n.maxSize)?r:Infinity,a=t.useState(e.UseFileState.idle),o=a[0],u=a[1],l=t.useState(null),s=l[1],d={selectFile:function(t){var n=t.currentTarget.files;if(n&&n[0]){var r=n[0];if(r.size>i)return u(e.UseFileState.error);s(r),u(e.UseFileState.selected)}},clearFile:function(){s(null),u(e.UseFileState.idle)}};return o===e.UseFileState.idle?{state:o,data:null,actions:d}:o===e.UseFileState.selected?{state:o,data:l[0],actions:d}:{state:o,data:null,actions:d}},e.useFilter=l,e.useList=s,e.usePreviousValue=o,e.useScrollLock=function(e){void 0===e&&(e=!0),t.useLayoutEffect(function(){if(e){var t=document.querySelector("html"),n=document.body,r=window.getComputedStyle(n).overflow,i=window.getComputedStyle(t).overflow;return n.style.overflow="hidden",t.style.overflow="hidden",function(){n.style.overflow=r,t.style.overflow=i}}},[e])},e.useToastTrigger=function(){return S()[1].add},e.useToastsContext=S,e.useToggle=function(e){void 0===e&&(e=!1);var n=t.useState(e),r=n[0],i=n[1];return{on:r,off:!r,enable:function(){return i(!0)},disable:function(){return i(!1)},toggle:function(){return i(function(e){return!e})}}},e.useTranslations=function(){var e=a.default.useContext(b);if(void 0===e)throw new Error("useTranslations must be used within the TranslationsContext");return function(t){var n=e[t];return n||console.warn("[@bgord/frontend] missing translation for key "+t+"."),null!=n?n:t}},e.useUrlFilter=function(e){var t,n=p(),r=null!=(t=new URLSearchParams(null==n?void 0:n.location.search).get(e.label))?t:void 0;return l(d({onUpdate:function(t,r){if(n){var i=new URL(n.location.toString()),a=new URLSearchParams(i.search);void 0===t?a.delete(e.label):a.set(e.label,t),t!==r&&t!==r&&(i.search=a.toString(),history.pushState({},"",i.toString()))}}},e,{defaultQuery:null!=r?r:e.defaultQuery}))},e.useWindowDimensions=function(){var e=t.useState({width:void 0,height:void 0}),n=e[0],r=e[1];return t.useEffect(function(){function e(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}},[]),n}});
//# sourceMappingURL=bgord-frontend.umd.js.map
