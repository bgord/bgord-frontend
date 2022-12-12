var e=require("react"),t=require("tinykeys");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function r(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}}),t.default=e,t}var o=/*#__PURE__*/n(e),u=/*#__PURE__*/r(e),i=/*#__PURE__*/n(t);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)t.indexOf(n=u[r])>=0||(o[n]=e[n]);return o}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t,n){var r=e.useRef(n);return e.useEffect(function(){r.current=t}),r.current}var d,v=["children"];exports.AnimaState=void 0,(d=exports.AnimaState||(exports.AnimaState={})).appearing="appearing",d.appeared="appeared",d.hidding="hidding",d.hidden="hidden";var p=/*#__PURE__*/function(){function e(){}return e.format=function(e){var t=Math.floor(e/60),n=e%60;return String(t).padStart(2,"0")+":"+String(n).padStart(2,"0")},e}();function m(t){var n="function"==typeof t?t():t,r=e.useState(n),o=r[1];return{value:r[0],set:o,clear:function(){o(n)}}}function h(e){o.default.useEffect(function(){var t;e.condition&&(null==(t=e.ref.current)||t.focus())},[e.condition])}function g(){if("undefined"!=typeof window)return window}function x(){var t=e.useState({width:void 0,height:void 0}),n=t[0],r=t[1];return e.useEffect(function(){var e=g();if(e)return e.addEventListener("resize",t),t(),function(){return e.removeEventListener("resize",t)};function t(){r({width:null==e?void 0:e.innerWidth,height:null==e?void 0:e.innerHeight})}},[]),n}var w=/*#__PURE__*/function(){function e(e){this.value=void 0,this.value=e}var t=e.prototype;return t.toHours=function(){return this.value*e.hours},t.toMinutes=function(){return this.value*e.minutes},t.toSeconds=function(){return this.value*e.seconds},t.toMs=function(){return this.value*e.ms},e}();w.hours=24,w.minutes=1440,w.seconds=86400,w.ms=864e5;var y=/*#__PURE__*/function(){function e(e){this.value=void 0,this.value=e}var t=e.prototype;return t.toMinutes=function(){return this.value*e.minutes},t.toSeconds=function(){return this.value*e.seconds},t.toMs=function(){return this.value*e.ms},e}();y.minutes=60,y.seconds=3600,y.ms=36e5;var S=/*#__PURE__*/function(){function e(e){this.value=void 0,this.value=e}var t=e.prototype;return t.toSeconds=function(){return this.value*e.seconds},t.toMs=function(){return this.value*e.ms},e}();S.seconds=60,S.ms=6e4;var b=/*#__PURE__*/function(){function e(e){this.value=void 0,this.value=e}return e.prototype.toMs=function(){return this.value*e.ms},e}();b.ms=1e3;var E,L,U=/*#__PURE__*/function(){function e(e){this.value=void 0,this.value=e}return e.prototype.toMs=function(){return this.value},e}(),F={Days:w,Hours:y,Minutes:S,Seconds:b};function T(){return Date.now()}function A(){}function P(t){var n,r,o,u=null!=(n=t.defaultQuery)?n:void 0,i=null!=(r=t.filterFn)?r:function(e){return void 0===c||c===String(e)},a=Object.keys(t.enum),s=null!=(o=null==t?void 0:t.onUpdate)?o:A,l=e.useState(u),c=l[0],d=l[1],v=f(c);return e.useEffect(function(){s(c,v)},[v,c]),{query:c,clear:function(){d(u)},onChange:function(e){var n=e.currentTarget.value,r=Boolean(t.enum[String(n)]);d(r?n:void 0)},filterFn:i,options:a,onUpdate:s}}exports.UseExpandableListState=void 0,(E=exports.UseExpandableListState||(exports.UseExpandableListState={})).contracted="contracted",E.expanded="expanded",exports.UseFileState=void 0,(L=exports.UseFileState||(exports.UseFileState={})).idle="idle",L.selected="selected",L.error="error";var O=function(e){try{if(!e)return Promise.resolve(M);var t=document.createElement("img"),n=new Promise(function(e,n){t.onload=function(){return e({width:t.width,height:t.height})},t.onerror=n});return t.src=e,Promise.resolve(n)}catch(e){return Promise.reject(e)}},M={width:null,height:null};function C(t){void 0===t&&(t=!1);var n=e.useState(t),r=n[0],o=n[1];return{on:r,off:!r,enable:function(){return o(!0)},disable:function(){return o(!1)},toggle:function(){return o(function(e){return!e})}}}var I=function(){var e=C("undefined"==typeof navigator||"boolean"!=typeof navigator.onLine||navigator.onLine);return o.default.useEffect(function(){function t(){e.enable()}function n(){e.disable()}return window.addEventListener("online",t),window.addEventListener("offline",n),function(){window.removeEventListener("online",t),window.removeEventListener("offline",n)}},[]),e.on},j={threshold:0,root:null,rootMargin:"0%",ref:{current:null}};function D(){return"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype}function k(e){o.default.useEffect(function(){var t=i.default(window,e);return function(){return t()}},[e])}function _(t){var n,r,o=null!=(n=null==t?void 0:t.defaultItems)?n:[],u=null!=(r=null==t?void 0:t.comparisonFn)?r:function(e,t){return e===t},i=e.useState(o),a=i[0],s=i[1];function l(e){s(function(t){return Array.isArray(e)?[].concat(t,e):[].concat(t,[e])})}function c(e){s(function(t){return t.filter(function(t){return!u(t,e)})})}function f(e){return a.some(function(t){return u(t,e)})}return[a,{clear:function(){s([])},add:l,remove:c,toggle:function(e){f(e)?c(e):l(e)},isAdded:f,update:s}]}function R(t){void 0===t&&(t=!0),e.useLayoutEffect(function(){if(t){var e=document.querySelector("html"),n=document.body,r=window.getComputedStyle(n).overflow,o=window.getComputedStyle(e).overflow;return n.style.overflow="hidden",e.style.overflow="hidden",function(){n.style.overflow=r,e.style.overflow=o}}},[t])}var B=["disable","enable","on","off","toggle"],z=["as"],N=function(e){return console.warn("Copying to clipboard not supported")},q=/*#__PURE__*/function(){function e(){}return e.datetime=function(e,t){return void 0===t&&(t="N/A"),e?new Date(e).toLocaleString():t},e.form=function(t){return t?e._pad(t.getFullYear())+"-"+e._pad(t.getMonth()+1)+"-"+e._pad(t.getDate()):e.form(new Date)},e.clock=function(t){var n=new Date(t);return e._pad(n.getHours())+":"+e._pad(n.getMinutes())+":"+e._pad(n.getSeconds())},e.countdown=function(t){var n=new Date(t);return e._pad(n.getHours())+":"+e._pad(n.getMinutes())+":"+e._pad(n.getSeconds())},e._pad=function(e){return String(e).padStart(2,"0")},e}(),H=/*#__PURE__*/function(){function e(e,t){this.value=void 0;var n=new URLSearchParams(this.getNonEmptyFilters(t));this.value=""!==n.toString()?e+"?"+n.toString():e}return e.prototype.getNonEmptyFilters=function(e){return void 0===e?{}:Object.fromEntries(Object.entries(e).filter(function(e){return void 0!==e[1]}))},e}(),V=/*#__PURE__*/function(){function e(){}return e.extract=function(e){var t,n,r;return null!=(t=null==(n=e.data)||null==(r=n.pages)?void 0:r.flat().map(function(e){return e.result}).flat())?t:[]},e}();function Q(e){var t;if("en"!==e.language)return console.warn("[@bgord/frontend] missing pluralization fuction for language "+e.language+"."),e.singular;var n=null!=(t=e.plural)?t:e.singular+"s";return 1===e.value?e.singular:n}V.empty={result:[],meta:{exhausted:!0}};var W=/*#__PURE__*/function(){function e(e){this.message=void 0,this._known=!0,this.message=e.message}return e.isServerError=function(e){return!!(e&&"object"==typeof e&&e===Object(e)&&e.hasOwnProperty("_known")&&e.hasOwnProperty("message"))},e.extract=function(t){try{return t.ok?Promise.resolve(t):Promise.resolve(t.json()).then(function(t){var n=e.isServerError(t)?t.message:"app.error.general";throw new e({message:n})})}catch(e){return Promise.reject(e)}},e.handle=function(t){try{throw new e({message:e.isServerError(t)?t.message:"app.error.general"})}catch(e){return Promise.reject(e)}},e}(),K=o.default.createContext(void 0);function Y(){var e=o.default.useContext(K);if(void 0===e)throw new Error("useToasts must be used within the ToastsContextProvider");return e}var $=o.default.createContext({translations:{},language:"en"});function G(){var e=o.default.useContext($);if(void 0===e)throw new Error("useLanguage must be used within the TranslationsContext");return e.language}exports.AUDIO_DEFAULT_VOLUME=1,exports.Anima=function(e){var t,n=null!=(t=e.duration)?t:300,r=o.default.useState(function(){return e.visible?e.isInitial?exports.AnimaState.appeared:exports.AnimaState.appearing:exports.AnimaState.hidden}),u=r[0],i=r[1],s=f(u);return o.default.useEffect(function(){if(!e.isInitial)if(e.visible)i(exports.AnimaState.appearing),setTimeout(function(){return i(exports.AnimaState.appeared)},100);else{if(!s)return;i(exports.AnimaState.hidding),setTimeout(function(){return i(exports.AnimaState.hidden)},n)}},[e.visible]),u===exports.AnimaState.hidden?null:o.default.cloneElement(e.children,{"data-anima":u,"data-anima-effect":e.effect,style:a({"--duration":n+"ms"},e.children.props.style)})},exports.AnimaList=function(e){var t=s(e,v),n=o.default.useState(!0),r=n[0],u=n[1];return o.default.useEffect(function(){return u(!1)},[]),o.default.createElement("ul",a({},t),e.children.map(function(e){return o.default.cloneElement(e,{isInitial:r})}))},exports.DateFormatter=q,exports.Days=w,exports.Dialog=function(e){var t=e.disable,n=s(e,B),r=o.default.useRef(null);return o.default.useEffect(function(){var t,n;e.on?null==(t=r.current)||t.showModal():null==(n=r.current)||n.close()},[e.on]),k({Escape:t}),h({ref:r,condition:e.on}),R(e.on),o.default.createElement("dialog",a({ref:r,tabIndex:0,"data-display":e.on?"flex":"none","data-direction":"column","data-mx":"auto","data-p":"24","data-position":"absolute","data-z":"2","data-bg":"white","data-br":"4","data-bc":"gray-300","data-bw":"1","data-backdrop":"black"},n))},exports.DurationFormatter=p,exports.FilterUrl=H,exports.Hours=y,exports.MiliSeconds=U,exports.Minutes=S,exports.OfflineIndicator=function(e){return I()?null:o.default.createElement(o.default.Fragment,null,e.children)},exports.OutboundLink=function(e){var t=e.as,n=s(e,z);return o.default.createElement(t||"a",a({target:"_blank",rel:"noreferer noopener"},n))},exports.Pagination=V,exports.Seconds=b,exports.ServerError=W,exports.Time=F,exports.ToastsContextProvider=function(e){var t,n,r,u,i=(n=null!=(t=null==e?void 0:e.timeout)?t:5e3,r=_({comparisonFn:function(e,t){return e.id===t.id}}),u=r[1],[[].concat(r[0]).reverse(),{add:function(e){var t=a({},e,{id:String(Date.now())});u.add(t),setTimeout(function(){return u.remove(t)},n)},remove:u.remove,clear:u.clear}]);return o.default.createElement(K.Provider,{value:[i[0],i[1]]},e.children)},exports.TranslationsContextProvider=function(e){return o.default.createElement($.Provider,{value:e.value},e.children)},exports.copyToClipboard=function(e){try{var t,n,r=null!=(t=e.onFailure)?t:N,o=null!=(n=e.onSuccess)?n:A;navigator.clipboard||r();var u=function(t,n){try{var r=Promise.resolve(navigator.clipboard.writeText(e.text)).then(function(){o()})}catch(e){return n(e)}return r&&r.then?r.then(void 0,n):r}(0,function(e){r(e)});return Promise.resolve(u&&u.then?u.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},exports.defaultUseIsVisibleConfig=j,exports.emptyImageResolution=M,exports.getAnimaProps=function(e){return{"data-anima":e["data-anima"],"data-anima-effect":e["data-anima-effect"],style:e.style}},exports.getCurrentTimestamp=T,exports.getImageResolution=O,exports.getSafeWindow=g,exports.isClient=function(){return!g()},exports.isIntersectionObserverSupported=D,exports.noop=A,exports.pluralize=Q,exports.useAnimaList=function(e,t){for(var n,r,u=null!=(n=null==t?void 0:t.direction)?n:"head",i=o.default.useState(e.map(function(e){return{item:e,props:{visible:!0}}})),s=i[0],l=i[1],f=[],d=function(){var e=r.value;!s.map(function(e){return e.item}).some(function(t){return e.id===t.id})&&f.push(e)},v=c(e);!(r=v()).done;)d();o.default.useEffect(function(){0!==f.length&&(l("head"===u?function(e){return[].concat(f.map(function(e){return{item:e,props:{visible:!0}}}),e)}:function(e){return[].concat(e,f.map(function(e){return{item:e,props:{visible:!0}}}))}),f=[])},[f.length,u]);for(var p,m=[],h=function(){var t=p.value.item;e.every(function(e){return e.id!==t.id})&&m.push(t)},g=c(s);!(p=g()).done;)h();return o.default.useEffect(function(){0!==m.length&&(l(function(e){return e.map(function(e){return m.some(function(t){return t.id===e.item.id})?a({},e,{props:{visible:!1}}):e})}),m=[])},[m.length]),{items:s.map(function(t){var n=e.find(function(e){return e.id===t.item.id});return n?a({},t,{item:n}):t}),count:s.filter(function(e){return e.props.visible}).length}},exports.useAudio=function(e){var t=u.useState("initial"),n=t[0],r=t[1],o=u.useRef(null),i=m(0),a=m(0),s=m(1),l=0===s.value,c=0===i.value?0:Math.round(a.value/i.value*100);function f(e){var t=e.currentTarget;o.current&&(o.current.currentTime=t.valueAsNumber,a.set(t.valueAsNumber))}function d(e){var t=e.currentTarget;o.current&&(o.current.volume=t.valueAsNumber,s.set(t.valueAsNumber))}return{props:{audio:{src:e,onTimeUpdate:function(e){a.set(Math.round(e.target.currentTime))},onLoadedMetadata:function(e){var t=e.currentTarget;o.current=t,i.set(Math.round(t.duration)),a.set(t.currentTime),s.set(t.volume),r("ready")},onEnded:function(){r("paused")},controls:!1},player:{min:0,step:1,max:i.value,value:a.value,onInput:f,style:{"--percentage":c+"%"}},volume:{min:0,max:1,value:s.value,onInput:d,style:{"--percentage":Math.floor(100*s.value)+"%"}}},actions:{play:function(){o.current&&(o.current.play(),r("playing"))},pause:function(){o.current&&(o.current.pause(),r("paused"))},mute:function(){o.current&&(o.current.volume=0,s.set(0))},unmute:function(){o.current&&(o.current.volume=1,s.set(1))},reset:function(){o.current&&(o.current.currentTime=0,o.current.pause(),a.set(0),r("paused"))},seek:f,changeVolume:d},meta:{state:n,percentage:{raw:c,formatted:c+"%"},currentTime:{raw:a.value,formatted:p.format(a.value)},duration:{raw:i.value,formatted:p.format(i.value)},volume:{value:s.value,raw:Math.floor(100*s.value),formatted:Math.floor(100*s.value)+"%"},muted:l}}},exports.useAutofocus=h,exports.useBreakpoint=function(e){var t,n=x();return(null!=(t=null==n?void 0:n.width)?t:0)<=e},exports.useClickOutside=function(e,t,n){o.default.useEffect(function(){if(e.current)return document.addEventListener("mousedown",r),function(){return document.removeEventListener("mousedown",r)};function r(r){var o;null!=(o=e.current)&&o.contains(r.target)||(null==n?void 0:n.some(function(e){var t;return null==(t=e.current)?void 0:t.contains(r.target)}))||t()}},[t,e,n])},exports.useClientSearch=function(){var t=e.useState(""),n=t[0],r=t[1];return{query:n,clear:function(){r("")},onChange:function(e){r(e.currentTarget.value)},filterFn:function(e){return""===n||(null==e?void 0:e.toLowerCase().includes(n.toLowerCase()))}}},exports.useCurrentTimestamp=function(){var t=e.useState(T),n=t[0],r=t[1];return e.useEffect(function(){var e=setInterval(function(){return r(T())},new F.Seconds(1).toMs());return function(){return clearInterval(e)}},[]),n},exports.useDisablePullToRefresh=function(t){void 0===t&&(t=!0),e.useLayoutEffect(function(){if(t){var e=document.querySelector("html"),n=document.body,r=window.getComputedStyle(e).overscrollBehavior,o=window.getComputedStyle(n).overscrollBehavior;return n.style.overscrollBehavior="none",e.style.overscrollBehavior="none",function(){n.style.overscrollBehavior=o,e.style.overscrollBehavior=r}}},[t])},exports.useDocumentTitle=function(e){o.default.useEffect(function(){document.title=e},[e])},exports.useExpandableList=function(t){var n=t.length-t.max,r=t.length>t.max;function o(){return r?exports.UseExpandableListState.contracted:exports.UseExpandableListState.expanded}var u=e.useState(o),i=u[0],a=u[1];return e.useEffect(function(){return a(o())},[t.length,t.max]),{state:i,displayShowMore:i===exports.UseExpandableListState.contracted,displayShowLess:i===exports.UseExpandableListState.expanded&&r,showMore:function(){i===exports.UseExpandableListState.contracted&&a(exports.UseExpandableListState.expanded)},showLess:function(){i===exports.UseExpandableListState.expanded&&a(exports.UseExpandableListState.contracted)},numberOfExcessiveElements:n,filterFn:function(e,n){return i===exports.UseExpandableListState.expanded||n<t.max}}},exports.useField=m,exports.useFile=function(t){var n,r=null!=(n=null==t?void 0:t.maxSize)?n:Infinity,o=e.useState(exports.UseFileState.idle),u=o[0],i=o[1],a=e.useState(null),s=a[0],l=a[1];function c(e){var t=e.currentTarget.files;if(t&&t[0]){var n=t[0];if(!(n.size>r))return l(n),i(exports.UseFileState.selected),n;i(exports.UseFileState.error)}}function f(){l(null),i(exports.UseFileState.idle)}return u===exports.UseFileState.idle?{state:u,data:null,actions:{selectFile:c,clearFile:f}}:u===exports.UseFileState.selected?{state:u,data:s,actions:{selectFile:c,clearFile:f,previewFile:function(){if(s)return URL.createObjectURL(s)}}}:{state:u,data:null,actions:{selectFile:c,clearFile:f}}},exports.useFilter=P,exports.useImageFileResolution=function(e){var t,n=m(M);return u.useEffect(function(){!function(){try{var t,r=function(r){if(t)return r;[exports.UseFileState.error,exports.UseFileState.idle].includes(e.state)&&null!==n.value.width&&null!==n.value.height&&n.clear()},o=function(){if(e.state===exports.UseFileState.selected)return function(r,o){try{var u=Promise.resolve(O(e.actions.previewFile())).then(function(e){var r=n.set(e);return t=1,r})}catch(e){return o()}return u&&u.then?u.then(void 0,o):u}(0,function(){var e=n.clear();return t=1,e})}();Promise.resolve(o&&o.then?o.then(r):r(o))}catch(e){return Promise.reject(e)}}()},[e.state,null==(t=e.data)?void 0:t.name]),n.value},exports.useIsOnline=I,exports.useIsVisible=function(t){void 0===t&&(t=j);var n=e.useState(!1),r=n[0],o=n[1];return e.useEffect(function(){var e=t.ref.current;if(D()&&e){var n=new IntersectionObserver(function(e){var t;return o(Boolean(null==(t=e[0])?void 0:t.isIntersecting))},t);return n.observe(e),function(){return n.unobserve(e)}}},[]),r},exports.useKeyboardShortcurts=k,exports.useLanguage=G,exports.useLeavingPrompt=function(e){void 0===e&&(e=!1),o.default.useEffect(function(){if(e)return window.addEventListener("beforeunload",t),function(){return window.removeEventListener("beforeunload",t)};function t(e){e.preventDefault()}},[e])},exports.useList=_,exports.usePluralize=function(){var e=G();return function(t){return Q(a({},t,{language:e}))}},exports.usePreviousValue=f,exports.useScrollLock=R,exports.useSound=function(e){var t=new Audio(e);return{play:t.play.bind(t)}},exports.useToastTrigger=function(){return Y()[1].add},exports.useToastsContext=Y,exports.useToggle=C,exports.useTranslations=function(){var e=o.default.useContext($);if(void 0===e)throw new Error("useTranslations must be used within the TranslationsContext");return function(t){var n=e.translations[t];return n||console.warn("[@bgord/frontend] missing translation for key "+t+"."),null!=n?n:t}},exports.useUrlFilter=function(e){var t=g();return new URLSearchParams(null==t?void 0:t.location.search).get(e.label),P(a({onUpdate:function(n,r){if(t){var o=new URL(t.location.toString()),u=new URLSearchParams(o.search);void 0===n?u.delete(e.label):u.set(e.label,n),n!==r&&n!==r&&(o.search=u.toString(),history.pushState({},"",o.toString()))}}},e,{defaultQuery:e.defaultQuery}))},exports.useWindowDimensions=x;
//# sourceMappingURL=bgord-frontend.cjs.map
