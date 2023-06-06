var e=require("react"),t=require("tinykeys"),n=require("ts-storage");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}}),t.default=e,t}var u=/*#__PURE__*/r(e),i=/*#__PURE__*/o(e),a=/*#__PURE__*/r(t),s=/*#__PURE__*/o(n);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)t.indexOf(n=u[r])>=0||(o[n]=e[n]);return o}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function v(t,n){var r=e.useRef(n);return e.useEffect(function(){r.current=t}),r.current}var p,m=["children"];exports.AnimaState=void 0,(p=exports.AnimaState||(exports.AnimaState={})).appearing="appearing",p.appeared="appeared",p.hidding="hidding",p.hidden="hidden";var h=/*#__PURE__*/function(){function e(){}return e.format=function(e){var t=Math.floor(e/60),n=e%60;return String(t).padStart(2,"0")+":"+String(n).padStart(2,"0")},e}();function g(t,n){var r="function"==typeof n?n():n,o=e.useState(r),u=o[1];return{value:o[0],set:u,clear:function(){u(r)},label:{props:{htmlFor:t}},input:{props:{id:t,name:t}}}}function x(e){u.default.useEffect(function(){var t;e.condition&&(null==(t=e.ref.current)||t.focus())},[e.condition])}function y(){if("undefined"!=typeof window)return window}function b(){var t=e.useState({width:void 0,height:void 0}),n=t[0],r=t[1];return e.useEffect(function(){var e=y();if(e)return e.addEventListener("resize",t),t(),function(){return e.removeEventListener("resize",t)};function t(){r({width:null==e?void 0:e.innerWidth,height:null==e?void 0:e.innerHeight})}},[]),n}var w=/*#__PURE__*/function(){function e(e){this.value=void 0,this.value=e}var t=e.prototype;return t.toHours=function(){return this.value*e.hours},t.toMinutes=function(){return this.value*e.minutes},t.toSeconds=function(){return this.value*e.seconds},t.toMs=function(){return this.value*e.ms},e}();w.hours=24,w.minutes=1440,w.seconds=86400,w.ms=864e5;var S=/*#__PURE__*/function(){function e(e){this.value=void 0,this.value=e}var t=e.prototype;return t.toMinutes=function(){return this.value*e.minutes},t.toSeconds=function(){return this.value*e.seconds},t.toMs=function(){return this.value*e.ms},e}();S.minutes=60,S.seconds=3600,S.ms=36e5;var E=/*#__PURE__*/function(){function e(e){this.value=void 0,this.value=e}var t=e.prototype;return t.toSeconds=function(){return this.value*e.seconds},t.toMs=function(){return this.value*e.ms},e}();E.seconds=60,E.ms=6e4;var L=/*#__PURE__*/function(){function e(e){this.value=void 0,this.value=e}return e.prototype.toMs=function(){return this.value*e.ms},e}();L.ms=1e3;var T,U,F=/*#__PURE__*/function(){function e(e){this.value=void 0,this.value=e}return e.prototype.toMs=function(){return this.value},e}(),M={Days:w,Hours:S,Minutes:E,Seconds:L};function A(){return Date.now()}function O(){}function P(t){var n,r,o,u,i=null!=(n=t.defaultQuery)?n:void 0,a=null!=(r=t.currentQuery)?r:void 0,s=null!=(o=t.filterFn)?o:function(e){return void 0===d||d===String(e)},l=Object.keys(t.enum),c=null!=(u=null==t?void 0:t.onUpdate)?u:O,f=e.useState(null!=a?a:i),d=f[0],p=f[1],m=v(d);return e.useEffect(function(){c(d,m)},[m,d]),{query:d,clear:function(){p(i)},onChange:function(e){var n=e.currentTarget.value,r=Boolean(t.enum[String(n)]);p(r?n:void 0)},filterFn:s,options:l,onUpdate:c,label:t.label}}function C(t){void 0===t&&(t=!1);var n=e.useState(t),r=n[0],o=n[1];return{on:r,off:!r,enable:function(){return o(!0)},disable:function(){return o(!1)},toggle:function(){return o(function(e){return!e})}}}exports.UseExpandableListState=void 0,(T=exports.UseExpandableListState||(exports.UseExpandableListState={})).contracted="contracted",T.expanded="expanded",exports.UseFileState=void 0,(U=exports.UseFileState||(exports.UseFileState={})).idle="idle",U.selected="selected",U.error="error";var I,j=function(e){try{if(!e)return Promise.resolve(D);var t=document.createElement("img"),n=new Promise(function(e,n){t.onload=function(){return e({width:t.width,height:t.height})},t.onerror=n});return t.src=e,Promise.resolve(n)}catch(e){return Promise.reject(e)}},D={width:null,height:null},k=function(){var e=C("undefined"==typeof navigator||"boolean"!=typeof navigator.onLine||navigator.onLine);return u.default.useEffect(function(){function t(){e.enable()}function n(){e.disable()}return window.addEventListener("online",t),window.addEventListener("offline",n),function(){window.removeEventListener("online",t),window.removeEventListener("offline",n)}},[]),e.on},_={threshold:0,root:null,rootMargin:"0%",ref:{current:null}};function R(){return"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype}function H(e){u.default.useEffect(function(){var t=a.default(window,e);return function(){return t()}},[e])}function N(t){var n,r,o=null!=(n=null==t?void 0:t.defaultItems)?n:[],u=null!=(r=null==t?void 0:t.comparisonFn)?r:function(e,t){return e===t},i=e.useState(o),a=i[0],s=i[1];function l(e){s(function(t){return Array.isArray(e)?[].concat(t,e):[].concat(t,[e])})}function c(e){s(function(t){return t.filter(function(t){return!u(t,e)})})}function f(e){return a.some(function(t){return u(t,e)})}return[a,{clear:function(){s([])},add:l,remove:c,toggle:function(e){f(e)?c(e):l(e)},isAdded:f,update:s}]}exports.KeyNameEnum=void 0,(I=exports.KeyNameEnum||(exports.KeyNameEnum={})).Enter="Enter",I.Space=" ";var B=/*#__PURE__*/function(){function e(){}return e.get=function(e,t){return s.get(e,t).value},e.set=function(e,t){s.set(e,t)},e}(),z=/*#__PURE__*/function(){function e(e){this.lastInvocationTimestamp=null,this.options=void 0,this.options=e}return e.prototype.verify=function(e){if(!this.lastInvocationTimestamp)return this.lastInvocationTimestamp=e,{allowed:!0};var t=this.lastInvocationTimestamp+this.options.limitMs;return t<=e?(this.lastInvocationTimestamp=e,{allowed:!0}):{allowed:!1,remainingMs:t-e}},e}();function q(t){void 0===t&&(t=!0),e.useLayoutEffect(function(){if(t){var e=document.querySelector("html"),n=document.body,r=window.getComputedStyle(n).overflow,o=window.getComputedStyle(e).overflow;return n.style.overflow="hidden",e.style.overflow="hidden",function(){n.style.overflow=r,e.style.overflow=o}}},[t])}var K=["disable","enable","on","off","toggle"],Q=["as"],V=function(e){return console.warn("Copying to clipboard not supported")},W=/*#__PURE__*/function(){function e(){}return e.datetime=function(e,t){return void 0===t&&(t="N/A"),e?new Date(e).toLocaleString():t},e.monthDay=function(t){var n=new Date(t),r=e._pad(n.getDay());return e._pad(n.getMonth())+"/"+r},e.form=function(t){return t?e._pad(t.getFullYear())+"-"+e._pad(t.getMonth()+1)+"-"+e._pad(t.getDate()):e.form(new Date)},e.clockUTC=function(t){var n=new Date(t);return e._pad(n.getUTCHours())+":"+e._pad(n.getUTCMinutes())+":"+e._pad(n.getUTCSeconds())},e.clockLocal=function(t){var n=new Date(t);return e._pad(n.getHours())+":"+e._pad(n.getMinutes())+":"+e._pad(n.getSeconds())},e.countdown=function(t){var n=new Date(t);return e._pad(n.getHours())+":"+e._pad(n.getMinutes())+":"+e._pad(n.getSeconds())},e._pad=function(e){return String(e).padStart(2,"0")},e}(),Y=/*#__PURE__*/function(){function e(e,t){this.value=void 0;var n=new URLSearchParams(this.getNonEmptyFilters(t));this.value=""!==n.toString()?e+"?"+n.toString():e}return e.prototype.getNonEmptyFilters=function(e){return void 0===e?{}:Object.fromEntries(Object.entries(e).filter(function(e){return void 0!==e[1]}))},e}(),$=/*#__PURE__*/function(){function e(){}return e.extract=function(e){var t,n,r;return null!=(t=null==(n=e.data)||null==(r=n.pages)?void 0:r.flat().map(function(e){return e.result}).flat())?t:[]},e}();function G(e){var t;if("en"!==e.language)return console.warn("[@bgord/frontend] missing pluralization fuction for language "+e.language+"."),e.singular;var n=null!=(t=e.plural)?t:e.singular+"s";return 1===e.value?e.singular:n}$.empty={result:[],meta:{exhausted:!0}};var J=/*#__PURE__*/function(){function e(e){this.message=void 0,this._known=!0,this.message=e.message}return e.isServerError=function(e){return!!(e&&"object"==typeof e&&e===Object(e)&&e.hasOwnProperty("_known")&&e.hasOwnProperty("message"))},e.extract=function(t){try{return t.ok?Promise.resolve(t):Promise.resolve(t.json()).then(function(t){var n=e.isServerError(t)?t.message:"app.error.general";throw new e({message:n})})}catch(e){return Promise.reject(e)}},e.handle=function(t){try{throw new e({message:e.isServerError(t)?t.message:"app.error.general"})}catch(e){return Promise.reject(e)}},e}(),X=u.default.createContext(void 0);function Z(){var e=u.default.useContext(X);if(void 0===e)throw new Error("useToasts must be used within the ToastsContextProvider");return e}var ee=u.default.createContext({translations:{},language:"en"});function te(){var e=u.default.useContext(ee);if(void 0===e)throw new Error("useLanguage must be used within the TranslationsContext");return e.language}exports.AUDIO_DEFAULT_VOLUME=1,exports.Anima=function(e){var t,n=null!=(t=e.duration)?t:300,r=u.default.useState(function(){return e.visible?e.isInitial?exports.AnimaState.appeared:exports.AnimaState.appearing:exports.AnimaState.hidden}),o=r[0],i=r[1],a=v(o);return u.default.useEffect(function(){if(!e.isInitial)if(e.visible)i(exports.AnimaState.appearing),setTimeout(function(){return i(exports.AnimaState.appeared)},100);else{if(!a)return;i(exports.AnimaState.hidding),setTimeout(function(){return i(exports.AnimaState.hidden)},n)}},[e.visible]),o===exports.AnimaState.hidden?null:u.default.cloneElement(e.children,{"data-anima":o,"data-anima-effect":e.effect,style:l({"--duration":n+"ms"},e.children.props.style)})},exports.AnimaList=function(e){var t=c(e,m),n=u.default.useState(!0),r=n[0],o=n[1];return u.default.useEffect(function(){return o(!1)},[]),u.default.createElement("ul",l({},t),e.children.map(function(e){return u.default.cloneElement(e,{isInitial:r})}))},exports.DateFormatter=W,exports.Days=w,exports.Dialog=function(e){var t=e.disable,n=c(e,K),r=u.default.useRef(null);return u.default.useEffect(function(){var t,n;e.on?null==(t=r.current)||t.showModal():null==(n=r.current)||n.close()},[e.on]),H({Escape:t}),x({ref:r,condition:e.on}),q(e.on),u.default.createElement("dialog",l({ref:r,tabIndex:0,"data-display":e.on?"flex":"none","data-direction":"column","data-mx":"auto","data-p":"24","data-position":"absolute","data-z":"2","data-bg":"white","data-br":"4","data-bc":"gray-300","data-bw":"1","data-backdrop":"black"},n))},exports.DurationFormatter=h,exports.FilterUrl=Y,exports.Hours=S,exports.MiliSeconds=F,exports.Minutes=E,exports.OfflineIndicator=function(e){return k()?null:u.default.createElement(u.default.Fragment,null,e.children)},exports.OutboundLink=function(e){var t=e.as,n=c(e,Q);return u.default.createElement(t||"a",l({target:"_blank",rel:"noreferer noopener"},n))},exports.Pagination=$,exports.SafeLocalStorage=B,exports.Seconds=L,exports.ServerError=J,exports.Time=M,exports.ToastsContextProvider=function(e){var t,n,r,o,i=(n=null!=(t=null==e?void 0:e.timeout)?t:5e3,r=N({comparisonFn:function(e,t){return e.id===t.id}}),o=r[1],[[].concat(r[0]).reverse(),{add:function(e){var t=l({},e,{id:String(Date.now())});o.add(t),setTimeout(function(){return o.remove(t)},n)},remove:o.remove,clear:o.clear}]);return u.default.createElement(X.Provider,{value:[i[0],i[1]]},e.children)},exports.TranslationsContextProvider=function(e){return u.default.createElement(ee.Provider,{value:e.value},e.children)},exports.copyToClipboard=function(e){try{var t,n,r=null!=(t=e.onFailure)?t:V,o=null!=(n=e.onSuccess)?n:O;navigator.clipboard||r();var u=function(t,n){try{var r=Promise.resolve(navigator.clipboard.writeText(e.text)).then(function(){o()})}catch(e){return n(e)}return r&&r.then?r.then(void 0,n):r}(0,function(e){r(e)});return Promise.resolve(u&&u.then?u.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},exports.defaultUseIsVisibleConfig=_,exports.emptyImageResolution=D,exports.getAnimaProps=function(e){return{"data-anima":e["data-anima"],"data-anima-effect":e["data-anima-effect"],style:e.style}},exports.getCurrentTimestamp=A,exports.getImageResolution=j,exports.getSafeWindow=y,exports.isClient=function(){return!y()},exports.isIntersectionObserverSupported=R,exports.noop=O,exports.pluralize=G,exports.useAnimaList=function(e,t){for(var n,r,o=null!=(n=null==t?void 0:t.direction)?n:"head",i=u.default.useState(e.map(function(e){return{item:e,props:{visible:!0}}})),a=i[0],s=i[1],c=[],f=function(){var e=r.value;!a.map(function(e){return e.item}).some(function(t){return e.id===t.id})&&c.push(e)},v=d(e);!(r=v()).done;)f();u.default.useEffect(function(){0!==c.length&&(s("head"===o?function(e){return[].concat(c.map(function(e){return{item:e,props:{visible:!0}}}),e)}:function(e){return[].concat(e,c.map(function(e){return{item:e,props:{visible:!0}}}))}),c=[])},[c.length,o]);for(var p,m=[],h=function(){var t=p.value.item;e.every(function(e){return e.id!==t.id})&&m.push(t)},g=d(a);!(p=g()).done;)h();return u.default.useEffect(function(){0!==m.length&&(s(function(e){return e.map(function(e){return m.some(function(t){return t.id===e.item.id})?l({},e,{props:{visible:!1}}):e})}),m=[])},[m.length]),{items:a.map(function(t){var n=e.find(function(e){return e.id===t.item.id});return n?l({},t,{item:n}):t}),count:a.filter(function(e){return e.props.visible}).length}},exports.useAudio=function(e){var t=i.useState("initial"),n=t[0],r=t[1],o=i.useRef(null),u=g("duration",0),a=g("currentTime",0),s=g("volume",1),l=0===s.value,c=0===u.value?0:Math.round(a.value/u.value*100);function f(e){var t=e.currentTarget;o.current&&(o.current.currentTime=t.valueAsNumber,a.set(t.valueAsNumber))}function d(e){var t=e.currentTarget;o.current&&(o.current.volume=t.valueAsNumber,s.set(t.valueAsNumber))}return{props:{audio:{src:e,onTimeUpdate:function(e){a.set(Math.round(e.target.currentTime))},onLoadedMetadata:function(e){var t=e.currentTarget;o.current=t,u.set(Math.round(t.duration)),a.set(t.currentTime),s.set(t.volume),r("ready")},onEnded:function(){r("paused")},controls:!1},player:{min:0,step:1,max:u.value,value:a.value,onInput:f,style:{"--percentage":c+"%"}},volume:{min:0,max:1,value:s.value,onInput:d,style:{"--percentage":Math.floor(100*s.value)+"%"}}},actions:{play:function(){o.current&&(o.current.play(),r("playing"))},pause:function(){o.current&&(o.current.pause(),r("paused"))},mute:function(){o.current&&(o.current.volume=0,s.set(0))},unmute:function(){o.current&&(o.current.volume=1,s.set(1))},reset:function(){o.current&&(o.current.currentTime=0,o.current.pause(),a.set(0),r("paused"))},seek:f,changeVolume:d},meta:{state:n,percentage:{raw:c,formatted:c+"%"},currentTime:{raw:a.value,formatted:h.format(a.value)},duration:{raw:u.value,formatted:h.format(u.value)},volume:{value:s.value,raw:Math.floor(100*s.value),formatted:Math.floor(100*s.value)+"%"},muted:l}}},exports.useAutofocus=x,exports.useBreakpoint=function(e){var t,n=b();return(null!=(t=null==n?void 0:n.width)?t:0)<=e},exports.useClickOutside=function(e,t,n){u.default.useEffect(function(){if(e.current)return document.addEventListener("mousedown",r),function(){return document.removeEventListener("mousedown",r)};function r(r){var o;null!=(o=e.current)&&o.contains(r.target)||(null==n?void 0:n.some(function(e){var t;return null==(t=e.current)?void 0:t.contains(r.target)}))||t()}},[t,e,n])},exports.useClientSearch=function(){var t=e.useState(""),n=t[0],r=t[1];return{query:n,clear:function(){r("")},onChange:function(e){r(e.currentTarget.value)},filterFn:function(e){return""===n||(null==e?void 0:e.toLowerCase().includes(n.toLowerCase()))}}},exports.useCurrentTimestamp=function(){var t=e.useState(A),n=t[0],r=t[1];return e.useEffect(function(){var e=setInterval(function(){return r(A())},new M.Seconds(1).toMs());return function(){return clearInterval(e)}},[]),n},exports.useDebounce=function(e){var t=u.default.useState(e.value),n=t[0],r=t[1];return u.default.useEffect(function(){var t=setTimeout(function(){return r(e.value)},e.delayMs);return function(){return clearTimeout(t)}},[e.value,e.delayMs]),n},exports.useDisablePullToRefresh=function(t){void 0===t&&(t=!0),e.useLayoutEffect(function(){if(t){var e=document.querySelector("html"),n=document.body,r=window.getComputedStyle(e).overscrollBehavior,o=window.getComputedStyle(n).overscrollBehavior;return n.style.overscrollBehavior="none",e.style.overscrollBehavior="none",function(){n.style.overscrollBehavior=o,e.style.overscrollBehavior=r}}},[t])},exports.useDocumentTitle=function(e){u.default.useEffect(function(){document.title=e},[e])},exports.useExpandableList=function(t){var n=t.length-t.max,r=t.length>t.max;function o(){return r?exports.UseExpandableListState.contracted:exports.UseExpandableListState.expanded}var u=e.useState(o),i=u[0],a=u[1];return e.useEffect(function(){return a(o())},[t.length,t.max]),{state:i,displayShowMore:i===exports.UseExpandableListState.contracted,displayShowLess:i===exports.UseExpandableListState.expanded&&r,showMore:function(){i===exports.UseExpandableListState.contracted&&a(exports.UseExpandableListState.expanded)},showLess:function(){i===exports.UseExpandableListState.expanded&&a(exports.UseExpandableListState.contracted)},numberOfExcessiveElements:n,filterFn:function(e,n){return i===exports.UseExpandableListState.expanded||n<t.max}}},exports.useField=g,exports.useFile=function(t){var n,r=null!=(n=null==t?void 0:t.maxSize)?n:Infinity,o=e.useState(exports.UseFileState.idle),u=o[0],i=o[1],a=e.useState(null),s=a[0],l=a[1];function c(e){var t=e.currentTarget.files;if(t&&t[0]){var n=t[0];if(!(n.size>r))return l(n),i(exports.UseFileState.selected),n;i(exports.UseFileState.error)}}function f(){l(null),i(exports.UseFileState.idle)}return u===exports.UseFileState.idle?{state:u,data:null,actions:{selectFile:c,clearFile:f}}:u===exports.UseFileState.selected?{state:u,data:s,actions:{selectFile:c,clearFile:f,previewFile:function(){if(s)return URL.createObjectURL(s)}}}:{state:u,data:null,actions:{selectFile:c,clearFile:f}}},exports.useFilter=P,exports.useHover=function(){var e=u.default.useRef(null),t=C(!1),n=t.enable,r=t.disable;return u.default.useEffect(function(){var t=e.current;return t&&(t.addEventListener("mouseenter",n),t.addEventListener("mouseleave",r)),function(){t&&(t.removeEventListener("mouseenter",n),t.removeEventListener("mouseleave",r))}},[]),{attach:{ref:e},isHovering:t.on}},exports.useImageFileResolution=function(e){var t,n=g("resolution",D);return i.useEffect(function(){!function(){try{var t,r=function(r){if(t)return r;[exports.UseFileState.error,exports.UseFileState.idle].includes(e.state)&&null!==n.value.width&&null!==n.value.height&&n.clear()},o=function(){if(e.state===exports.UseFileState.selected)return function(r,o){try{var u=Promise.resolve(j(e.actions.previewFile())).then(function(e){var r=n.set(e);return t=1,r})}catch(e){return o()}return u&&u.then?u.then(void 0,o):u}(0,function(){var e=n.clear();return t=1,e})}();Promise.resolve(o&&o.then?o.then(r):r(o))}catch(e){return Promise.reject(e)}}()},[e.state,null==(t=e.data)?void 0:t.name]),n.value},exports.useIsOnline=k,exports.useIsVisible=function(t){void 0===t&&(t=_);var n=e.useState(!1),r=n[0],o=n[1];return e.useEffect(function(){var e=t.ref.current;if(R()&&e){var n=new IntersectionObserver(function(e){var t;return o(Boolean(null==(t=e[0])?void 0:t.isIntersecting))},t);return n.observe(e),function(){return n.unobserve(e)}}},[]),r},exports.useKeyHandler=function(e){var t=Object.keys(e);return function(n){var r=n.key,o=e[r];t.includes(n.key)&&e[r]&&o&&o()}},exports.useKeyboardShortcurts=H,exports.useLanguage=te,exports.useLeavingPrompt=function(e){void 0===e&&(e=!1),u.default.useEffect(function(){if(e)return window.addEventListener("beforeunload",t),function(){return window.removeEventListener("beforeunload",t)};function t(e){e.preventDefault()}},[e])},exports.useList=N,exports.usePersistentToggle=function(e,t){void 0===t&&(t=!1);var n=C(B.get(e,t));return i.useEffect(function(){return B.set(e,n.on)},[e,n.on]),n},exports.usePluralize=function(){var e=te();return function(t){return G(l({},t,{language:e}))}},exports.usePreviousValue=v,exports.useRateLimiter=function(t){var n=e.useRef(new z(t));return function(){var e=Date.now(),r=n.current.verify(e);return r.allowed?t.action():null==t.fallback?void 0:t.fallback(r.remainingMs)}},exports.useScroll=function(){var e=y(),t=u.default.useState(0),n=t[0],r=t[1],o=C(!1);return u.default.useLayoutEffect(function(){function t(){e&&(r(null==e?void 0:e.scrollY),e.document.body.clientHeight<e.document.body.scrollHeight?o.enable():o.disable())}return null==e||e.addEventListener("scroll",t),function(){return null==e?void 0:e.removeEventListener("scroll",t)}},[]),{actions:{goToTop:function(){e&&e.scrollTo({top:0,left:0,behavior:"smooth"})}},position:{value:n,isInitial:0===n,hasChanged:n>0},visible:o.on,hidden:o.off}},exports.useScrollLock=q,exports.useSound=function(e){var t=new Audio(e);return{play:t.play.bind(t)}},exports.useToastTrigger=function(){return Z()[1].add},exports.useToastsContext=Z,exports.useToggle=C,exports.useTranslations=function(){var e=u.default.useContext(ee);if(void 0===e)throw new Error("useTranslations must be used within the TranslationsContext");return function(t,n){var r=e.translations[t];return r?n?Object.entries(n).reduce(function(e,t){return e.replace("{{"+t[0]+"}}",String(t[1]))},r):r:(console.warn("[@bgord/frontend] missing translation for key: "+t),t)}},exports.useUrlFilter=function(e){var t,n=y(),r=null!=(t=new URLSearchParams(null==n?void 0:n.location.search).get(e.label))?t:void 0;return P(l({onUpdate:function(t,r){if(n){var o=new URL(n.location.toString()),u=new URLSearchParams(o.search);void 0===t?u.delete(e.label):u.set(e.label,t),t!==r&&t!==r&&(o.search=u.toString(),history.pushState({},"",o.toString()))}}},e,{defaultQuery:e.defaultQuery,currentQuery:r}))},exports.useWindowDimensions=b;
//# sourceMappingURL=bgord-frontend.cjs.map
