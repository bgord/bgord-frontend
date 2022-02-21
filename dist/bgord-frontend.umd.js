!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t((e||self).frontend={},e.react)}(this,function(e,t){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r,i,a=/*#__PURE__*/n(t);function o(e){var n,r,i=null!=(n=null==e?void 0:e.defaultItems)?n:[],a=null!=(r=null==e?void 0:e.comparisonFn)?r:function(e,t){return e===t},o=t.useState(i),u=o[0],l=o[1];function d(e){l(function(t){return Array.isArray(e)?[].concat(t,e):[].concat(t,[e])})}function s(e){l(function(t){return t.filter(function(t){return!a(t,e)})})}function f(e){return u.some(function(t){return a(t,e)})}return[u,{clear:function(){l([])},add:d,remove:s,toggle:function(e){f(e)?s(e):d(e)},isAdded:f,update:l}]}function u(e){var n=t.useRef(null);return t.useEffect(function(){n.current=e}),n.current}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(i[n]=e[n]);return i}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}e.UseExpandableListState=void 0,(r=e.UseExpandableListState||(e.UseExpandableListState={})).contracted="contracted",r.expanded="expanded",e.UseFileState=void 0,(i=e.UseFileState||(e.UseFileState={})).idle="idle",i.selected="selected",i.error="error";var c=["as"],p=a.default.createContext(void 0);function m(){var e=a.default.useContext(p);if(void 0===e)throw new Error("useToasts must be used within the ToastsContextProvider");return e}var v,h=["children"];e.AnimaState=void 0,(v=e.AnimaState||(e.AnimaState={})).appearing="appearing",v.appeared="appeared",v.hidding="hidding",v.hidden="hidden",e.Anima=function(t){var n,r=null!=(n=t.duration)?n:300,i=a.default.useState(function(){return t.visible?t.isInitial?e.AnimaState.appeared:e.AnimaState.appearing:e.AnimaState.hidden}),o=i[0],d=i[1],s=u(o);return a.default.useEffect(function(){if(!t.isInitial)if(t.visible)d(e.AnimaState.appearing),setTimeout(function(){return d(e.AnimaState.appeared)},100);else{if(!s)return;d(e.AnimaState.hidding),setTimeout(function(){return d(e.AnimaState.hidden)},r)}},[t.visible]),o===e.AnimaState.hidden?null:a.default.cloneElement(t.children,{"data-anima":o,"data-anima-effect":t.effect,style:l({"--duration":r+"ms"},t.children.props.style)})},e.AnimaList=function(e){var t=d(e,h),n=a.default.useState(!0),r=n[0],i=n[1];return a.default.useEffect(function(){return i(!1)},[]),a.default.createElement("ul",l({},t),e.children.map(function(e){return a.default.cloneElement(e,{isInitial:r})}))},e.Heading=function(e){var t=e.as,n=d(e,c);return a.default.createElement(t||"a",l({target:"_blank",ref:"noreferer noopener"},n))},e.OutboundLinkDefaultElement="a",e.ToastsContextProvider=function(e){var t,n,r,i,u=(n=null!=(t=null==e?void 0:e.timeout)?t:5e3,r=o({comparisonFn:function(e,t){return e.id===t.id}}),i=r[1],[[].concat(r[0]).reverse(),{add:function(e){var t=l({},e,{id:String(Date.now())});i.add(t),setTimeout(function(){return i.remove(t)},n)},remove:i.remove,clear:i.clear}]);return a.default.createElement(p.Provider,{value:[u[0],u[1]]},e.children)},e.getAnimaProps=function(e){return{"data-anima":e["data-anima"],"data-anima-effect":e["data-anima-effect"],style:e.style}},e.useAnimaList=function(e,t){void 0===t&&(t="head");for(var n,r=a.default.useState(e.map(function(e){return{item:e,props:{visible:!0}}})),i=r[0],o=r[1],u=[],d=function(){var e=n.value;!i.map(function(e){return e.item}).some(function(t){return e.id===t.id})&&u.push(e)},s=f(e);!(n=s()).done;)d();a.default.useEffect(function(){0!==u.length&&o("head"===t?function(e){return[].concat(u.map(function(e){return{item:e,props:{visible:!0}}}),e)}:function(e){return[].concat(e,u.map(function(e){return{item:e,props:{visible:!0}}}))})},[u.length,t]);for(var c,p=[],m=function(){var t=c.value.item;e.every(function(e){return e.id!==t.id})&&p.push(t)},v=f(i);!(c=v()).done;)m();return a.default.useEffect(function(){0!==p.length&&o(function(e){return e.map(function(e){return p.some(function(t){return t.id===e.item.id})?l({},e,{props:{visible:!1}}):e})})},[p.length]),{items:i.map(function(t){var n=e.find(function(e){return e.id===t.item.id});return n?l({},t,{item:n}):t}),count:i.filter(function(e){return e.props.visible}).length}},e.useExpandableList=function(n){var r=n.length-n.max,i=n.length>n.max;function a(){return i?e.UseExpandableListState.contracted:e.UseExpandableListState.expanded}var o=t.useState(a),u=o[0],l=o[1];return t.useEffect(function(){return l(a())},[n.length,n.max]),{state:u,displayShowMore:u===e.UseExpandableListState.contracted,displayShowLess:u===e.UseExpandableListState.expanded&&i,showMore:function(){u===e.UseExpandableListState.contracted&&l(e.UseExpandableListState.expanded)},showLess:function(){u===e.UseExpandableListState.expanded&&l(e.UseExpandableListState.contracted)},numberOfExcessiveElements:r,filterFn:function(t,r){return u===e.UseExpandableListState.expanded||r<n.max}}},e.useFile=function(n){var r,i=null!=(r=null==n?void 0:n.maxSize)?r:Infinity,a=t.useState(e.UseFileState.idle),o=a[0],u=a[1],l=t.useState(null),d=l[1],s={selectFile:function(t){var n=t.currentTarget.files;if(n&&n[0]){var r=n[0];if(r.size>i)return u(e.UseFileState.error);d(r),u(e.UseFileState.selected)}},clearFile:function(){d(null),u(e.UseFileState.idle)}};return o===e.UseFileState.idle?{state:o,data:null,actions:s}:o===e.UseFileState.selected?{state:o,data:l[0],actions:s}:{state:o,data:null,actions:s}},e.useList=o,e.usePreviousValue=u,e.useScrollLock=function(e){void 0===e&&(e=!0),t.useLayoutEffect(function(){if(e){var t=document.querySelector("html"),n=document.body,r=window.getComputedStyle(n).overflow,i=window.getComputedStyle(t).overflow;return n.style.overflow="hidden",t.style.overflow="hidden",function(){n.style.overflow=r,t.style.overflow=i}}},[e])},e.useSearch=function(){var e=t.useState(""),n=e[0],r=e[1];return{query:n,clear:function(){r("")},onChange:function(e){r(e.currentTarget.value)},filterFn:function(e){return""===n||(null==e?void 0:e.toLowerCase().includes(n.toLowerCase()))}}},e.useToastTrigger=function(){return m()[1].add},e.useToastsContext=m,e.useToggle=function(e){void 0===e&&(e=!1);var n=t.useState(e),r=n[0],i=n[1];return{on:r,off:!r,enable:function(){return i(!0)},disable:function(){return i(!1)},toggle:function(){return i(function(e){return!e})}}},e.useWindowDimensions=function(){var e=t.useState({width:void 0,height:void 0}),n=e[0],r=e[1];return t.useEffect(function(){function e(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}},[]),n}});
//# sourceMappingURL=bgord-frontend.umd.js.map
