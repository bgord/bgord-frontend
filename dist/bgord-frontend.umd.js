!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("tinykeys")):"function"==typeof define&&define.amd?define(["exports","react","tinykeys"],t):t((e||self).frontend={},e.react,e.tinykeys)}(this,function(e,t,n){function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=/*#__PURE__*/r(t),o=/*#__PURE__*/r(n);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(i[n]=e[n]);return i}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(e,n){var r=t.useRef(n);return t.useEffect(function(){r.current=e}),r.current}var c,d,v,m=["children"];function p(e){i.default.useEffect(function(){var t;e.condition&&(null==(t=e.ref.current)||t.focus())},[e.condition])}function h(){if("undefined"!=typeof window)return window}function g(){var e=t.useState({width:void 0,height:void 0}),n=e[0],r=e[1];return t.useEffect(function(){var e=h();if(e)return e.addEventListener("resize",t),t(),function(){return e.removeEventListener("resize",t)};function t(){r({width:null==e?void 0:e.innerWidth,height:null==e?void 0:e.innerHeight})}},[]),n}function y(e,t,n){i.default.useEffect(function(){if(e.current)return document.addEventListener("mousedown",r),function(){return document.removeEventListener("mousedown",r)};function r(r){var i;null!=(i=e.current)&&i.contains(r.target)||(null==n?void 0:n.some(function(e){var t;return null==(t=e.current)?void 0:t.contains(r.target)}))||t()}},[t,e,n])}function S(){}function b(e){var n,r,i,o=null!=(n=e.defaultQuery)?n:void 0,a=null!=(r=e.filterFn)?r:function(e){return void 0===c||c===String(e)},u=Object.keys(e.enum),l=null!=(i=null==e?void 0:e.onUpdate)?i:S,s=t.useState(o),c=s[0],d=s[1],v=f(c);return t.useEffect(function(){l(c,v)},[v,c]),{query:c,clear:function(){d(o)},onChange:function(t){var n=t.currentTarget.value,r=Boolean(e.enum[String(n)]);d(r?n:void 0)},filterFn:a,options:u,onUpdate:l}}function w(e){void 0===e&&(e=!1);var n=t.useState(e),r=n[0],i=n[1];return{on:r,off:!r,enable:function(){return i(!0)},disable:function(){return i(!1)},toggle:function(){return i(function(e){return!e})}}}e.AnimaState=void 0,(c=e.AnimaState||(e.AnimaState={})).appearing="appearing",c.appeared="appeared",c.hidding="hidding",c.hidden="hidden",e.UseExpandableListState=void 0,(d=e.UseExpandableListState||(e.UseExpandableListState={})).contracted="contracted",d.expanded="expanded",e.UseFileState=void 0,(v=e.UseFileState||(e.UseFileState={})).idle="idle",v.selected="selected",v.error="error";var E=function(){var e=w("undefined"==typeof navigator||"boolean"!=typeof navigator.onLine||navigator.onLine);return i.default.useEffect(function(){function t(){e.enable()}function n(){e.disable()}return window.addEventListener("online",t),window.addEventListener("offline",n),function(){window.removeEventListener("online",t),window.removeEventListener("offline",n)}},[]),e.on};function x(e){i.default.useEffect(function(){var t=o.default(window,e);return function(){return t()}},[e])}function L(e){var n,r,i=null!=(n=null==e?void 0:e.defaultItems)?n:[],o=null!=(r=null==e?void 0:e.comparisonFn)?r:function(e,t){return e===t},a=t.useState(i),u=a[0],l=a[1];function s(e){l(function(t){return Array.isArray(e)?[].concat(t,e):[].concat(t,[e])})}function f(e){l(function(t){return t.filter(function(t){return!o(t,e)})})}function c(e){return u.some(function(t){return o(t,e)})}return[u,{clear:function(){l([])},add:s,remove:f,toggle:function(e){c(e)?f(e):s(e)},isAdded:c,update:l}]}function U(e){void 0===e&&(e=!0),t.useLayoutEffect(function(){if(e){var t=document.querySelector("html"),n=document.body,r=window.getComputedStyle(n).overflow,i=window.getComputedStyle(t).overflow;return n.style.overflow="hidden",t.style.overflow="hidden",function(){n.style.overflow=r,t.style.overflow=i}}},[e])}var F=["DialogOverlay","disable","enable","on","off","toggle"];function A(e){return i.default.createElement("div",a({"data-position":"absolute","data-inset":"0","data-display":"flex","data-main":"cross","data-cross":"center","data-z":"2",style:{background:"rgb(0, 0, 0, 0.75)"}},e))}var T=["as"],O=/*#__PURE__*/function(){function e(){}return e.datetime=function(e,t){return void 0===t&&(t="N/A"),e?new Date(e).toLocaleString():t},e}(),C=/*#__PURE__*/function(){function e(e,t){this.value=void 0;var n=new URLSearchParams(this.getNonEmptyFilters(t));this.value=""!==n.toString()?e+"?"+n.toString():e}return e.prototype.getNonEmptyFilters=function(e){return void 0===e?{}:Object.fromEntries(Object.entries(e).filter(function(e){return void 0!==e[1]}))},e}(),P=/*#__PURE__*/function(){function e(e){this.message=void 0,this._known=!0,this.message=e.message}return e.isServerError=function(e){return!!(e&&"object"==typeof e&&e===Object(e)&&e.hasOwnProperty("_known")&&e.hasOwnProperty("message"))},e.extract=function(t){try{return t.ok?Promise.resolve(t):Promise.resolve(t.json()).then(function(t){var n=e.isServerError(t)?t.message:"app.error.general";throw new e({message:n})})}catch(e){return Promise.reject(e)}},e.handle=function(t){try{throw new e({message:e.isServerError(t)?t.message:"app.error.general"})}catch(e){return Promise.reject(e)}},e}(),j=/*#__PURE__*/function(){function e(e){this.value=void 0,this.value=e}var t=e.prototype;return t.toHours=function(){return 24*this.value},t.toMinutes=function(){return 24*this.value*60},t.toSeconds=function(){return 24*this.value*60*60},t.toMs=function(){return 24*this.value*60*60*1e3},e}(),k=/*#__PURE__*/function(){function e(e){this.value=void 0,this.value=e}var t=e.prototype;return t.toMinutes=function(){return 60*this.value},t.toSeconds=function(){return 60*this.value*60},t.toMs=function(){return 60*this.value*60*1e3},e}(),D=/*#__PURE__*/function(){function e(e){this.value=void 0,this.value=e}var t=e.prototype;return t.toSeconds=function(){return 60*this.value},t.toMs=function(){return 60*this.value*1e3},e}(),I=/*#__PURE__*/function(){function e(e){this.value=void 0,this.value=e}return e.prototype.toMs=function(){return 1e3*this.value},e}(),M={Days:j,Hours:k,Minutes:D,Seconds:I},z=i.default.createContext(void 0);function R(){var e=i.default.useContext(z);if(void 0===e)throw new Error("useToasts must be used within the ToastsContextProvider");return e}var q=i.default.createContext({});e.Anima=function(t){var n,r=null!=(n=t.duration)?n:300,o=i.default.useState(function(){return t.visible?t.isInitial?e.AnimaState.appeared:e.AnimaState.appearing:e.AnimaState.hidden}),u=o[0],l=o[1],s=f(u);return i.default.useEffect(function(){if(!t.isInitial)if(t.visible)l(e.AnimaState.appearing),setTimeout(function(){return l(e.AnimaState.appeared)},100);else{if(!s)return;l(e.AnimaState.hidding),setTimeout(function(){return l(e.AnimaState.hidden)},r)}},[t.visible]),u===e.AnimaState.hidden?null:i.default.cloneElement(t.children,{"data-anima":u,"data-anima-effect":t.effect,style:a({"--duration":r+"ms"},t.children.props.style)})},e.AnimaList=function(e){var t=u(e,m),n=i.default.useState(!0),r=n[0],o=n[1];return i.default.useEffect(function(){return o(!1)},[]),i.default.createElement("ul",a({},t),e.children.map(function(e){return i.default.cloneElement(e,{isInitial:r})}))},e.DateFormatter=O,e.Days=j,e.DefaultDialogOverlay=A,e.Dialog=function(e){var t=e.DialogOverlay,n=e.disable,r=u(e,F),o=i.default.useRef(null);return x({Escape:n}),y(o,n),p({ref:o,condition:e.on}),U(e.on),e.off?null:i.default.createElement(i.default.Fragment,null,null!=t?t:i.default.createElement(A,null),i.default.createElement("dialog",a({ref:o,tabIndex:0,open:e.on,"data-display":"flex","data-direction":"column","data-position":"absolute","data-z":"2","data-bg":"white","data-br":"4","data-bc":"gray-300","data-bw":"1","data-p":"24","data-mx":"auto"},r)))},e.FilterUrl=C,e.Hours=k,e.Minutes=D,e.OfflineIndicator=function(e){return E()?i.default.createElement(i.default.Fragment,null,e.children):null},e.OutboundLink=function(e){var t=e.as,n=u(e,T);return i.default.createElement(t||"a",a({target:"_blank",rel:"noreferer noopener"},n))},e.Seconds=I,e.ServerError=P,e.Time=M,e.ToastsContextProvider=function(e){var t,n,r,o,u=(n=null!=(t=null==e?void 0:e.timeout)?t:5e3,r=L({comparisonFn:function(e,t){return e.id===t.id}}),o=r[1],[[].concat(r[0]).reverse(),{add:function(e){var t=a({},e,{id:String(Date.now())});o.add(t),setTimeout(function(){return o.remove(t)},n)},remove:o.remove,clear:o.clear}]);return i.default.createElement(z.Provider,{value:[u[0],u[1]]},e.children)},e.TranslationsContextProvider=function(e){return i.default.createElement(q.Provider,{value:e.translations},e.children)},e.getAnimaProps=function(e){return{"data-anima":e["data-anima"],"data-anima-effect":e["data-anima-effect"],style:e.style}},e.getSafeWindow=h,e.noop=S,e.useAnimaList=function(e,t){for(var n,r,o=null!=(n=null==t?void 0:t.direction)?n:"head",u=i.default.useState(e.map(function(e){return{item:e,props:{visible:!0}}})),l=u[0],f=u[1],c=[],d=function(){var e=r.value;!l.map(function(e){return e.item}).some(function(t){return e.id===t.id})&&c.push(e)},v=s(e);!(r=v()).done;)d();i.default.useEffect(function(){0!==c.length&&(f("head"===o?function(e){return[].concat(c.map(function(e){return{item:e,props:{visible:!0}}}),e)}:function(e){return[].concat(e,c.map(function(e){return{item:e,props:{visible:!0}}}))}),c=[])},[c.length,o]);for(var m,p=[],h=function(){var t=m.value.item;e.every(function(e){return e.id!==t.id})&&p.push(t)},g=s(l);!(m=g()).done;)h();return i.default.useEffect(function(){0!==p.length&&(f(function(e){return e.map(function(e){return p.some(function(t){return t.id===e.item.id})?a({},e,{props:{visible:!1}}):e})}),p=[])},[p.length]),{items:l.map(function(t){var n=e.find(function(e){return e.id===t.item.id});return n?a({},t,{item:n}):t}),count:l.filter(function(e){return e.props.visible}).length}},e.useAutofocus=p,e.useBreakpoint=function(e){var t,n=g();return(null!=(t=null==n?void 0:n.width)?t:0)<=e},e.useClickOutside=y,e.useClientSearch=function(){var e=t.useState(""),n=e[0],r=e[1];return{query:n,clear:function(){r("")},onChange:function(e){r(e.currentTarget.value)},filterFn:function(e){return""===n||(null==e?void 0:e.toLowerCase().includes(n.toLowerCase()))}}},e.useDocumentTitle=function(e){i.default.useEffect(function(){document.title=e},[e])},e.useExpandableList=function(n){var r=n.length-n.max,i=n.length>n.max;function o(){return i?e.UseExpandableListState.contracted:e.UseExpandableListState.expanded}var a=t.useState(o),u=a[0],l=a[1];return t.useEffect(function(){return l(o())},[n.length,n.max]),{state:u,displayShowMore:u===e.UseExpandableListState.contracted,displayShowLess:u===e.UseExpandableListState.expanded&&i,showMore:function(){u===e.UseExpandableListState.contracted&&l(e.UseExpandableListState.expanded)},showLess:function(){u===e.UseExpandableListState.expanded&&l(e.UseExpandableListState.contracted)},numberOfExcessiveElements:r,filterFn:function(t,r){return u===e.UseExpandableListState.expanded||r<n.max}}},e.useField=function(e){var n=t.useState(e),r=n[0],i=n[1],o="function"==typeof e?e():e;return t.useEffect(function(){i(o)},[o]),{value:r,set:i,clear:function(){i(e)}}},e.useFile=function(n){var r,i=null!=(r=null==n?void 0:n.maxSize)?r:Infinity,o=t.useState(e.UseFileState.idle),a=o[0],u=o[1],l=t.useState(null),s=l[1],f={selectFile:function(t){var n=t.currentTarget.files;if(n&&n[0]){var r=n[0];if(r.size>i)return u(e.UseFileState.error);s(r),u(e.UseFileState.selected)}},clearFile:function(){s(null),u(e.UseFileState.idle)}};return a===e.UseFileState.idle?{state:a,data:null,actions:f}:a===e.UseFileState.selected?{state:a,data:l[0],actions:f}:{state:a,data:null,actions:f}},e.useFilter=b,e.useIsOnline=E,e.useKeyboardShortcurts=x,e.useLeavingPrompt=function(e){void 0===e&&(e=!1),i.default.useEffect(function(){if(e)return window.addEventListener("beforeunload",t),function(){return window.removeEventListener("beforeunload",t)};function t(e){e.preventDefault()}},[e])},e.useList=L,e.usePreviousValue=f,e.useScrollLock=U,e.useToastTrigger=function(){return R()[1].add},e.useToastsContext=R,e.useToggle=w,e.useTranslations=function(){var e=i.default.useContext(q);if(void 0===e)throw new Error("useTranslations must be used within the TranslationsContext");return function(t){var n=e[t];return n||console.warn("[@bgord/frontend] missing translation for key "+t+"."),null!=n?n:t}},e.useUrlFilter=function(e){var t,n=h(),r=null!=(t=new URLSearchParams(null==n?void 0:n.location.search).get(e.label))?t:void 0;return b(a({onUpdate:function(t,r){if(n){var i=new URL(n.location.toString()),o=new URLSearchParams(i.search);void 0===t?o.delete(e.label):o.set(e.label,t),t!==r&&t!==r&&(i.search=o.toString(),history.pushState({},"",i.toString()))}}},e,{defaultQuery:null!=r?r:e.defaultQuery}))},e.useWindowDimensions=g});
//# sourceMappingURL=bgord-frontend.umd.js.map
