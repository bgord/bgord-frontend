!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("tinykeys")):"function"==typeof define&&define.amd?define(["exports","react","tinykeys"],t):t((e||self).frontend={},e.react,e.tinykeys)}(this,function(e,t,n){function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=/*#__PURE__*/r(t),o=/*#__PURE__*/r(n);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(i[n]=e[n]);return i}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,n){var r=t.useRef(n);return t.useEffect(function(){r.current=e}),r.current}var f,d,v,m=["children"];function p(e){i.default.useEffect(function(){var t;e.condition&&(null==(t=e.ref.current)||t.focus())},[e.condition])}function h(){if("undefined"!=typeof window)return window}function g(){var e=t.useState({width:void 0,height:void 0}),n=e[0],r=e[1];return t.useEffect(function(){var e=h();if(e)return e.addEventListener("resize",t),t(),function(){return e.removeEventListener("resize",t)};function t(){r({width:null==e?void 0:e.innerWidth,height:null==e?void 0:e.innerHeight})}},[]),n}function y(e,t,n){i.default.useEffect(function(){if(e.current)return document.addEventListener("mousedown",r),function(){return document.removeEventListener("mousedown",r)};function r(r){var i;null!=(i=e.current)&&i.contains(r.target)||(null==n?void 0:n.some(function(e){var t;return null==(t=e.current)?void 0:t.contains(r.target)}))||t()}},[t,e,n])}function S(){}function b(e){var n,r,i,o=null!=(n=e.defaultQuery)?n:void 0,a=null!=(r=e.filterFn)?r:function(e){return void 0===f||f===String(e)},u=Object.keys(e.enum),l=null!=(i=null==e?void 0:e.onUpdate)?i:S,s=t.useState(o),f=s[0],d=s[1],v=c(f);return t.useEffect(function(){l(f,v)},[v,f]),{query:f,clear:function(){d(o)},onChange:function(t){var n=t.currentTarget.value,r=Boolean(e.enum[String(n)]);d(r?n:void 0)},filterFn:a,options:u,onUpdate:l}}function w(e){void 0===e&&(e=!1);var n=t.useState(e),r=n[0],i=n[1];return{on:r,off:!r,enable:function(){return i(!0)},disable:function(){return i(!1)},toggle:function(){return i(function(e){return!e})}}}e.AnimaState=void 0,(f=e.AnimaState||(e.AnimaState={})).appearing="appearing",f.appeared="appeared",f.hidding="hidding",f.hidden="hidden",e.UseExpandableListState=void 0,(d=e.UseExpandableListState||(e.UseExpandableListState={})).contracted="contracted",d.expanded="expanded",e.UseFileState=void 0,(v=e.UseFileState||(e.UseFileState={})).idle="idle",v.selected="selected",v.error="error";var E=function(){var e=w("undefined"==typeof navigator||"boolean"!=typeof navigator.onLine||navigator.onLine);return i.default.useEffect(function(){function t(){e.enable()}function n(){e.disable()}return window.addEventListener("online",t),window.addEventListener("offline",n),function(){window.removeEventListener("online",t),window.removeEventListener("offline",n)}},[]),e.on};function x(e){i.default.useEffect(function(){var t=o.default(window,e);return function(){return t()}},[e])}function L(e){var n,r,i=null!=(n=null==e?void 0:e.defaultItems)?n:[],o=null!=(r=null==e?void 0:e.comparisonFn)?r:function(e,t){return e===t},a=t.useState(i),u=a[0],l=a[1];function s(e){l(function(t){return Array.isArray(e)?[].concat(t,e):[].concat(t,[e])})}function c(e){l(function(t){return t.filter(function(t){return!o(t,e)})})}function f(e){return u.some(function(t){return o(t,e)})}return[u,{clear:function(){l([])},add:s,remove:c,toggle:function(e){f(e)?c(e):s(e)},isAdded:f,update:l}]}function F(e){void 0===e&&(e=!0),t.useLayoutEffect(function(){if(e){var t=document.querySelector("html"),n=document.body,r=window.getComputedStyle(n).overflow,i=window.getComputedStyle(t).overflow;return n.style.overflow="hidden",t.style.overflow="hidden",function(){n.style.overflow=r,t.style.overflow=i}}},[e])}var U=["DialogOverlay","disable","enable","on","off","toggle"];function P(e){return i.default.createElement("div",a({"data-position":"absolute","data-inset":"0","data-display":"flex","data-main":"cross","data-cross":"center","data-z":"2",style:{background:"rgb(0, 0, 0, 0.75)"}},e))}var A=["as"],T=function(e){return console.warn("Copying to clipboard not supported")},C=/*#__PURE__*/function(){function e(){}return e.datetime=function(e,t){return void 0===t&&(t="N/A"),e?new Date(e).toLocaleString():t},e}(),O=/*#__PURE__*/function(){function e(e,t){this.value=void 0;var n=new URLSearchParams(this.getNonEmptyFilters(t));this.value=""!==n.toString()?e+"?"+n.toString():e}return e.prototype.getNonEmptyFilters=function(e){return void 0===e?{}:Object.fromEntries(Object.entries(e).filter(function(e){return void 0!==e[1]}))},e}(),j={width:null,height:null},k=/*#__PURE__*/function(){function e(){}return e.extract=function(e){var t,n,r;return null!=(t=null==(n=e.data)||null==(r=n.pages)?void 0:r.flat().map(function(e){return e.result}).flat())?t:[]},e}();function D(e){var t;if("en"!==e.language)return console.warn("[@bgord/frontend] missing pluralization fuction for language "+e.language+"."),e.singular;var n=null!=(t=e.plural)?t:e.singular+"s";return 1===e.value?e.singular:n}k.empty={result:[],meta:{exhausted:!0}};var I=/*#__PURE__*/function(){function e(e){this.message=void 0,this._known=!0,this.message=e.message}return e.isServerError=function(e){return!!(e&&"object"==typeof e&&e===Object(e)&&e.hasOwnProperty("_known")&&e.hasOwnProperty("message"))},e.extract=function(t){try{return t.ok?Promise.resolve(t):Promise.resolve(t.json()).then(function(t){var n=e.isServerError(t)?t.message:"app.error.general";throw new e({message:n})})}catch(e){return Promise.reject(e)}},e.handle=function(t){try{throw new e({message:e.isServerError(t)?t.message:"app.error.general"})}catch(e){return Promise.reject(e)}},e}(),M=/*#__PURE__*/function(){function e(e){this.value=void 0,this.value=e}var t=e.prototype;return t.toHours=function(){return 24*this.value},t.toMinutes=function(){return 24*this.value*60},t.toSeconds=function(){return 24*this.value*60*60},t.toMs=function(){return 24*this.value*60*60*1e3},e}(),z=/*#__PURE__*/function(){function e(e){this.value=void 0,this.value=e}var t=e.prototype;return t.toMinutes=function(){return 60*this.value},t.toSeconds=function(){return 60*this.value*60},t.toMs=function(){return 60*this.value*60*1e3},e}(),R=/*#__PURE__*/function(){function e(e){this.value=void 0,this.value=e}var t=e.prototype;return t.toSeconds=function(){return 60*this.value},t.toMs=function(){return 60*this.value*1e3},e}(),q=/*#__PURE__*/function(){function e(e){this.value=void 0,this.value=e}return e.prototype.toMs=function(){return 1e3*this.value},e}(),H={Days:M,Hours:z,Minutes:R,Seconds:q},N=i.default.createContext(void 0);function Q(){var e=i.default.useContext(N);if(void 0===e)throw new Error("useToasts must be used within the ToastsContextProvider");return e}var W=i.default.createContext({translations:{},language:"en"});function _(){var e=i.default.useContext(W);if(void 0===e)throw new Error("useLanguage must be used within the TranslationsContext");return e.language}e.Anima=function(t){var n,r=null!=(n=t.duration)?n:300,o=i.default.useState(function(){return t.visible?t.isInitial?e.AnimaState.appeared:e.AnimaState.appearing:e.AnimaState.hidden}),u=o[0],l=o[1],s=c(u);return i.default.useEffect(function(){if(!t.isInitial)if(t.visible)l(e.AnimaState.appearing),setTimeout(function(){return l(e.AnimaState.appeared)},100);else{if(!s)return;l(e.AnimaState.hidding),setTimeout(function(){return l(e.AnimaState.hidden)},r)}},[t.visible]),u===e.AnimaState.hidden?null:i.default.cloneElement(t.children,{"data-anima":u,"data-anima-effect":t.effect,style:a({"--duration":r+"ms"},t.children.props.style)})},e.AnimaList=function(e){var t=u(e,m),n=i.default.useState(!0),r=n[0],o=n[1];return i.default.useEffect(function(){return o(!1)},[]),i.default.createElement("ul",a({},t),e.children.map(function(e){return i.default.cloneElement(e,{isInitial:r})}))},e.DateFormatter=C,e.Days=M,e.DefaultDialogOverlay=P,e.Dialog=function(e){var t=e.DialogOverlay,n=e.disable,r=u(e,U),o=i.default.useRef(null);return x({Escape:n}),y(o,n),p({ref:o,condition:e.on}),F(e.on),e.off?null:i.default.createElement(i.default.Fragment,null,null!=t?t:i.default.createElement(P,null),i.default.createElement("dialog",a({ref:o,tabIndex:0,open:e.on,"data-display":"flex","data-direction":"column","data-position":"absolute","data-z":"2","data-bg":"white","data-br":"4","data-bc":"gray-300","data-bw":"1","data-p":"24","data-mx":"auto"},r)))},e.FilterUrl=O,e.Hours=z,e.Minutes=R,e.OfflineIndicator=function(e){return E()?null:i.default.createElement(i.default.Fragment,null,e.children)},e.OutboundLink=function(e){var t=e.as,n=u(e,A);return i.default.createElement(t||"a",a({target:"_blank",rel:"noreferer noopener"},n))},e.Pagination=k,e.Seconds=q,e.ServerError=I,e.Time=H,e.ToastsContextProvider=function(e){var t,n,r,o,u=(n=null!=(t=null==e?void 0:e.timeout)?t:5e3,r=L({comparisonFn:function(e,t){return e.id===t.id}}),o=r[1],[[].concat(r[0]).reverse(),{add:function(e){var t=a({},e,{id:String(Date.now())});o.add(t),setTimeout(function(){return o.remove(t)},n)},remove:o.remove,clear:o.clear}]);return i.default.createElement(N.Provider,{value:[u[0],u[1]]},e.children)},e.TranslationsContextProvider=function(e){return i.default.createElement(W.Provider,{value:e.value},e.children)},e.copyToClipboard=function(e){try{var t,n,r=null!=(t=e.onFailure)?t:T,i=null!=(n=e.onSuccess)?n:S;navigator.clipboard||r();var o=function(t,n){try{var r=Promise.resolve(navigator.clipboard.writeText(e.text)).then(function(){i()})}catch(e){return n(e)}return r&&r.then?r.then(void 0,n):r}(0,function(e){r(e)});return Promise.resolve(o&&o.then?o.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},e.getAnimaProps=function(e){return{"data-anima":e["data-anima"],"data-anima-effect":e["data-anima-effect"],style:e.style}},e.getImageResolution=function(e){try{if(!e)return Promise.resolve(j);var t=document.createElement("img"),n=new Promise(function(e,n){t.onload=function(){return e({width:t.width,height:t.height})},t.onerror=n});return t.src=e,Promise.resolve(n)}catch(e){return Promise.reject(e)}},e.getSafeWindow=h,e.noop=S,e.pluralize=D,e.useAnimaList=function(e,t){for(var n,r,o=null!=(n=null==t?void 0:t.direction)?n:"head",u=i.default.useState(e.map(function(e){return{item:e,props:{visible:!0}}})),l=u[0],c=u[1],f=[],d=function(){var e=r.value;!l.map(function(e){return e.item}).some(function(t){return e.id===t.id})&&f.push(e)},v=s(e);!(r=v()).done;)d();i.default.useEffect(function(){0!==f.length&&(c("head"===o?function(e){return[].concat(f.map(function(e){return{item:e,props:{visible:!0}}}),e)}:function(e){return[].concat(e,f.map(function(e){return{item:e,props:{visible:!0}}}))}),f=[])},[f.length,o]);for(var m,p=[],h=function(){var t=m.value.item;e.every(function(e){return e.id!==t.id})&&p.push(t)},g=s(l);!(m=g()).done;)h();return i.default.useEffect(function(){0!==p.length&&(c(function(e){return e.map(function(e){return p.some(function(t){return t.id===e.item.id})?a({},e,{props:{visible:!1}}):e})}),p=[])},[p.length]),{items:l.map(function(t){var n=e.find(function(e){return e.id===t.item.id});return n?a({},t,{item:n}):t}),count:l.filter(function(e){return e.props.visible}).length}},e.useAutofocus=p,e.useBreakpoint=function(e){var t,n=g();return(null!=(t=null==n?void 0:n.width)?t:0)<=e},e.useClickOutside=y,e.useClientSearch=function(){var e=t.useState(""),n=e[0],r=e[1];return{query:n,clear:function(){r("")},onChange:function(e){r(e.currentTarget.value)},filterFn:function(e){return""===n||(null==e?void 0:e.toLowerCase().includes(n.toLowerCase()))}}},e.useDocumentTitle=function(e){i.default.useEffect(function(){document.title=e},[e])},e.useExpandableList=function(n){var r=n.length-n.max,i=n.length>n.max;function o(){return i?e.UseExpandableListState.contracted:e.UseExpandableListState.expanded}var a=t.useState(o),u=a[0],l=a[1];return t.useEffect(function(){return l(o())},[n.length,n.max]),{state:u,displayShowMore:u===e.UseExpandableListState.contracted,displayShowLess:u===e.UseExpandableListState.expanded&&i,showMore:function(){u===e.UseExpandableListState.contracted&&l(e.UseExpandableListState.expanded)},showLess:function(){u===e.UseExpandableListState.expanded&&l(e.UseExpandableListState.contracted)},numberOfExcessiveElements:r,filterFn:function(t,r){return u===e.UseExpandableListState.expanded||r<n.max}}},e.useField=function(e){var n=t.useState(e),r=n[0],i=n[1],o="function"==typeof e?e():e;return t.useEffect(function(){i(o)},[o]),{value:r,set:i,clear:function(){i(e)}}},e.useFile=function(n){var r,i=null!=(r=null==n?void 0:n.maxSize)?r:Infinity,o=t.useState(e.UseFileState.idle),a=o[0],u=o[1],l=t.useState(null),s=l[0],c=l[1];function f(t){var n=t.currentTarget.files;if(n&&n[0]){var r=n[0];if(r.size>i)return u(e.UseFileState.error);c(r),u(e.UseFileState.selected)}}function d(){c(null),u(e.UseFileState.idle)}return a===e.UseFileState.idle?{state:a,data:null,actions:{selectFile:f,clearFile:d}}:a===e.UseFileState.selected?{state:a,data:s,actions:{selectFile:f,clearFile:d,previewFile:function(){if(s)return URL.createObjectURL(s)}}}:{state:a,data:null,actions:{selectFile:f,clearFile:d}}},e.useFilter=b,e.useIsOnline=E,e.useKeyboardShortcurts=x,e.useLanguage=_,e.useLeavingPrompt=function(e){void 0===e&&(e=!1),i.default.useEffect(function(){if(e)return window.addEventListener("beforeunload",t),function(){return window.removeEventListener("beforeunload",t)};function t(e){e.preventDefault()}},[e])},e.useList=L,e.usePluralize=function(){var e=_();return function(t){return D(a({},t,{language:e}))}},e.usePreviousValue=c,e.useScrollLock=F,e.useToastTrigger=function(){return Q()[1].add},e.useToastsContext=Q,e.useToggle=w,e.useTranslations=function(){var e=i.default.useContext(W);if(void 0===e)throw new Error("useTranslations must be used within the TranslationsContext");return function(t){var n=e.translations[t];return n||console.warn("[@bgord/frontend] missing translation for key "+t+"."),null!=n?n:t}},e.useUrlFilter=function(e){var t=h();return new URLSearchParams(null==t?void 0:t.location.search).get(e.label),b(a({onUpdate:function(n,r){if(t){var i=new URL(t.location.toString()),o=new URLSearchParams(i.search);void 0===n?o.delete(e.label):o.set(e.label,n),n!==r&&n!==r&&(i.search=o.toString(),history.pushState({},"",i.toString()))}}},e,{defaultQuery:e.defaultQuery}))},e.useWindowDimensions=g});
//# sourceMappingURL=bgord-frontend.umd.js.map
