!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("tinykeys")):"function"==typeof define&&define.amd?define(["exports","react","tinykeys"],t):t((e||self).frontend={},e.react,e.tinykeys)}(this,function(e,t,n){function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function u(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}}),t.default=e,t}var o=/*#__PURE__*/r(t),i=/*#__PURE__*/u(t),a=/*#__PURE__*/r(n);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,u={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(u[n]=e[n]);return u}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,n){var r=t.useRef(n);return t.useEffect(function(){r.current=e}),r.current}var v,m=["children"];e.AnimaState=void 0,(v=e.AnimaState||(e.AnimaState={})).appearing="appearing",v.appeared="appeared",v.hidding="hidding",v.hidden="hidden";var p=/*#__PURE__*/function(){function e(){}return e.format=function(e){var t=Math.floor(e/60),n=e%60;return String(t).padStart(2,"0")+":"+String(n).padStart(2,"0")},e}();function h(e,n){var r="function"==typeof n?n():n,u=t.useState(r),o=u[1];return{value:u[0],set:o,clear:function(){o(r)},label:{props:{htmlFor:e}},input:{props:{id:e,name:e}}}}function g(e){o.default.useEffect(function(){var t;e.condition&&(null==(t=e.ref.current)||t.focus())},[e.condition])}function y(){if("undefined"!=typeof window)return window}function b(){var e=t.useState({width:void 0,height:void 0}),n=e[0],r=e[1];return t.useEffect(function(){var e=y();if(e)return e.addEventListener("resize",t),t(),function(){return e.removeEventListener("resize",t)};function t(){r({width:null==e?void 0:e.innerWidth,height:null==e?void 0:e.innerHeight})}},[]),n}var w=/*#__PURE__*/function(){function e(e){this.value=void 0,this.value=e}var t=e.prototype;return t.toHours=function(){return this.value*e.hours},t.toMinutes=function(){return this.value*e.minutes},t.toSeconds=function(){return this.value*e.seconds},t.toMs=function(){return this.value*e.ms},e}();w.hours=24,w.minutes=1440,w.seconds=86400,w.ms=864e5;var S=/*#__PURE__*/function(){function e(e){this.value=void 0,this.value=e}var t=e.prototype;return t.toMinutes=function(){return this.value*e.minutes},t.toSeconds=function(){return this.value*e.seconds},t.toMs=function(){return this.value*e.ms},e}();S.minutes=60,S.seconds=3600,S.ms=36e5;var E=/*#__PURE__*/function(){function e(e){this.value=void 0,this.value=e}var t=e.prototype;return t.toSeconds=function(){return this.value*e.seconds},t.toMs=function(){return this.value*e.ms},e}();E.seconds=60,E.ms=6e4;var L=/*#__PURE__*/function(){function e(e){this.value=void 0,this.value=e}return e.prototype.toMs=function(){return this.value*e.ms},e}();L.ms=1e3;var T,x,U=/*#__PURE__*/function(){function e(e){this.value=void 0,this.value=e}return e.prototype.toMs=function(){return this.value},e}(),F={Days:w,Hours:S,Minutes:E,Seconds:L};function M(){return Date.now()}function A(){}function C(e){var n,r,u,o,i=null!=(n=e.defaultQuery)?n:void 0,a=null!=(r=e.currentQuery)?r:void 0,l=null!=(u=e.filterFn)?u:function(e){return void 0===v||v===String(e)},s=Object.keys(e.enum),c=null!=(o=null==e?void 0:e.onUpdate)?o:A,f=t.useState(null!=a?a:i),v=f[0],m=f[1],p=d(v);return t.useEffect(function(){c(v,p)},[p,v]),{query:v,clear:function(){m(i)},onChange:function(t){var n=t.currentTarget.value,r=Boolean(e.enum[String(n)]);m(r?n:void 0)},filterFn:l,options:s,onUpdate:c,label:e.label}}function I(e){void 0===e&&(e=!1);var n=t.useState(e),r=n[0],u=n[1];return{on:r,off:!r,enable:function(){return u(!0)},disable:function(){return u(!1)},toggle:function(){return u(function(e){return!e})}}}e.UseExpandableListState=void 0,(T=e.UseExpandableListState||(e.UseExpandableListState={})).contracted="contracted",T.expanded="expanded",e.UseFileState=void 0,(x=e.UseFileState||(e.UseFileState={})).idle="idle",x.selected="selected",x.error="error";var O=function(e){try{if(!e)return Promise.resolve(P);var t=document.createElement("img"),n=new Promise(function(e,n){t.onload=function(){return e({width:t.width,height:t.height})},t.onerror=n});return t.src=e,Promise.resolve(n)}catch(e){return Promise.reject(e)}},P={width:null,height:null},j=function(){var e=I("undefined"==typeof navigator||"boolean"!=typeof navigator.onLine||navigator.onLine);return o.default.useEffect(function(){function t(){e.enable()}function n(){e.disable()}return window.addEventListener("online",t),window.addEventListener("offline",n),function(){window.removeEventListener("online",t),window.removeEventListener("offline",n)}},[]),e.on},D={threshold:0,root:null,rootMargin:"0%",ref:{current:null}};function k(){return"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype}function _(e){o.default.useEffect(function(){var t=a.default(window,e);return function(){return t()}},[e])}function R(e){var n,r,u=null!=(n=null==e?void 0:e.defaultItems)?n:[],o=null!=(r=null==e?void 0:e.comparisonFn)?r:function(e,t){return e===t},i=t.useState(u),a=i[0],l=i[1];function s(e){l(function(t){return Array.isArray(e)?[].concat(t,e):[].concat(t,[e])})}function c(e){l(function(t){return t.filter(function(t){return!o(t,e)})})}function f(e){return a.some(function(t){return o(t,e)})}return[a,{clear:function(){l([])},add:s,remove:c,toggle:function(e){f(e)?c(e):s(e)},isAdded:f,update:l}]}var H=/*#__PURE__*/function(){function e(e){this.lastInvocationTimestamp=null,this.options=void 0,this.options=e}return e.prototype.verify=function(e){if(!this.lastInvocationTimestamp)return this.lastInvocationTimestamp=e,{allowed:!0};var t=this.lastInvocationTimestamp+this.options.limitMs;return t<=e?(this.lastInvocationTimestamp=e,{allowed:!0}):{allowed:!1,remainingMs:t-e}},e}();function B(e){void 0===e&&(e=!0),t.useLayoutEffect(function(){if(e){var t=document.querySelector("html"),n=document.body,r=window.getComputedStyle(n).overflow,u=window.getComputedStyle(t).overflow;return n.style.overflow="hidden",t.style.overflow="hidden",function(){n.style.overflow=r,t.style.overflow=u}}},[e])}var z=["disable","enable","on","off","toggle"],N=["as"],q=function(e){return console.warn("Copying to clipboard not supported")},Q=/*#__PURE__*/function(){function e(){}return e.datetime=function(e,t){return void 0===t&&(t="N/A"),e?new Date(e).toLocaleString():t},e.monthDay=function(t){var n=new Date(t),r=e._pad(n.getDay());return e._pad(n.getMonth())+"/"+r},e.form=function(t){return t?e._pad(t.getFullYear())+"-"+e._pad(t.getMonth()+1)+"-"+e._pad(t.getDate()):e.form(new Date)},e.clockUTC=function(t){var n=new Date(t);return e._pad(n.getUTCHours())+":"+e._pad(n.getUTCMinutes())+":"+e._pad(n.getUTCSeconds())},e.clockLocal=function(t){var n=new Date(t);return e._pad(n.getHours())+":"+e._pad(n.getMinutes())+":"+e._pad(n.getSeconds())},e.countdown=function(t){var n=new Date(t);return e._pad(n.getHours())+":"+e._pad(n.getMinutes())+":"+e._pad(n.getSeconds())},e._pad=function(e){return String(e).padStart(2,"0")},e}(),V=/*#__PURE__*/function(){function e(e,t){this.value=void 0;var n=new URLSearchParams(this.getNonEmptyFilters(t));this.value=""!==n.toString()?e+"?"+n.toString():e}return e.prototype.getNonEmptyFilters=function(e){return void 0===e?{}:Object.fromEntries(Object.entries(e).filter(function(e){return void 0!==e[1]}))},e}(),W=/*#__PURE__*/function(){function e(){}return e.extract=function(e){var t,n,r;return null!=(t=null==(n=e.data)||null==(r=n.pages)?void 0:r.flat().map(function(e){return e.result}).flat())?t:[]},e}();function Y(e){var t;if("en"!==e.language)return console.warn("[@bgord/frontend] missing pluralization fuction for language "+e.language+"."),e.singular;var n=null!=(t=e.plural)?t:e.singular+"s";return 1===e.value?e.singular:n}W.empty={result:[],meta:{exhausted:!0}};var K=/*#__PURE__*/function(){function e(e){this.message=void 0,this._known=!0,this.message=e.message}return e.isServerError=function(e){return!!(e&&"object"==typeof e&&e===Object(e)&&e.hasOwnProperty("_known")&&e.hasOwnProperty("message"))},e.extract=function(t){try{return t.ok?Promise.resolve(t):Promise.resolve(t.json()).then(function(t){var n=e.isServerError(t)?t.message:"app.error.general";throw new e({message:n})})}catch(e){return Promise.reject(e)}},e.handle=function(t){try{throw new e({message:e.isServerError(t)?t.message:"app.error.general"})}catch(e){return Promise.reject(e)}},e}(),$=o.default.createContext(void 0);function G(){var e=o.default.useContext($);if(void 0===e)throw new Error("useToasts must be used within the ToastsContextProvider");return e}var J=o.default.createContext({translations:{},language:"en"});function X(){var e=o.default.useContext(J);if(void 0===e)throw new Error("useLanguage must be used within the TranslationsContext");return e.language}e.AUDIO_DEFAULT_VOLUME=1,e.Anima=function(t){var n,r=null!=(n=t.duration)?n:300,u=o.default.useState(function(){return t.visible?t.isInitial?e.AnimaState.appeared:e.AnimaState.appearing:e.AnimaState.hidden}),i=u[0],a=u[1],s=d(i);return o.default.useEffect(function(){if(!t.isInitial)if(t.visible)a(e.AnimaState.appearing),setTimeout(function(){return a(e.AnimaState.appeared)},100);else{if(!s)return;a(e.AnimaState.hidding),setTimeout(function(){return a(e.AnimaState.hidden)},r)}},[t.visible]),i===e.AnimaState.hidden?null:o.default.cloneElement(t.children,{"data-anima":i,"data-anima-effect":t.effect,style:l({"--duration":r+"ms"},t.children.props.style)})},e.AnimaList=function(e){var t=s(e,m),n=o.default.useState(!0),r=n[0],u=n[1];return o.default.useEffect(function(){return u(!1)},[]),o.default.createElement("ul",l({},t),e.children.map(function(e){return o.default.cloneElement(e,{isInitial:r})}))},e.DateFormatter=Q,e.Days=w,e.Dialog=function(e){var t=e.disable,n=s(e,z),r=o.default.useRef(null);return o.default.useEffect(function(){var t,n;e.on?null==(t=r.current)||t.showModal():null==(n=r.current)||n.close()},[e.on]),_({Escape:t}),g({ref:r,condition:e.on}),B(e.on),o.default.createElement("dialog",l({ref:r,tabIndex:0,"data-display":e.on?"flex":"none","data-direction":"column","data-mx":"auto","data-p":"24","data-position":"absolute","data-z":"2","data-bg":"white","data-br":"4","data-bc":"gray-300","data-bw":"1","data-backdrop":"black"},n))},e.DurationFormatter=p,e.FilterUrl=V,e.Hours=S,e.MiliSeconds=U,e.Minutes=E,e.OfflineIndicator=function(e){return j()?null:o.default.createElement(o.default.Fragment,null,e.children)},e.OutboundLink=function(e){var t=e.as,n=s(e,N);return o.default.createElement(t||"a",l({target:"_blank",rel:"noreferer noopener"},n))},e.Pagination=W,e.Seconds=L,e.ServerError=K,e.Time=F,e.ToastsContextProvider=function(e){var t,n,r,u,i=(n=null!=(t=null==e?void 0:e.timeout)?t:5e3,r=R({comparisonFn:function(e,t){return e.id===t.id}}),u=r[1],[[].concat(r[0]).reverse(),{add:function(e){var t=l({},e,{id:String(Date.now())});u.add(t),setTimeout(function(){return u.remove(t)},n)},remove:u.remove,clear:u.clear}]);return o.default.createElement($.Provider,{value:[i[0],i[1]]},e.children)},e.TranslationsContextProvider=function(e){return o.default.createElement(J.Provider,{value:e.value},e.children)},e.copyToClipboard=function(e){try{var t,n,r=null!=(t=e.onFailure)?t:q,u=null!=(n=e.onSuccess)?n:A;navigator.clipboard||r();var o=function(t,n){try{var r=Promise.resolve(navigator.clipboard.writeText(e.text)).then(function(){u()})}catch(e){return n(e)}return r&&r.then?r.then(void 0,n):r}(0,function(e){r(e)});return Promise.resolve(o&&o.then?o.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},e.defaultUseIsVisibleConfig=D,e.emptyImageResolution=P,e.getAnimaProps=function(e){return{"data-anima":e["data-anima"],"data-anima-effect":e["data-anima-effect"],style:e.style}},e.getCurrentTimestamp=M,e.getImageResolution=O,e.getSafeWindow=y,e.isClient=function(){return!y()},e.isIntersectionObserverSupported=k,e.noop=A,e.pluralize=Y,e.useAnimaList=function(e,t){for(var n,r,u=null!=(n=null==t?void 0:t.direction)?n:"head",i=o.default.useState(e.map(function(e){return{item:e,props:{visible:!0}}})),a=i[0],s=i[1],c=[],d=function(){var e=r.value;!a.map(function(e){return e.item}).some(function(t){return e.id===t.id})&&c.push(e)},v=f(e);!(r=v()).done;)d();o.default.useEffect(function(){0!==c.length&&(s("head"===u?function(e){return[].concat(c.map(function(e){return{item:e,props:{visible:!0}}}),e)}:function(e){return[].concat(e,c.map(function(e){return{item:e,props:{visible:!0}}}))}),c=[])},[c.length,u]);for(var m,p=[],h=function(){var t=m.value.item;e.every(function(e){return e.id!==t.id})&&p.push(t)},g=f(a);!(m=g()).done;)h();return o.default.useEffect(function(){0!==p.length&&(s(function(e){return e.map(function(e){return p.some(function(t){return t.id===e.item.id})?l({},e,{props:{visible:!1}}):e})}),p=[])},[p.length]),{items:a.map(function(t){var n=e.find(function(e){return e.id===t.item.id});return n?l({},t,{item:n}):t}),count:a.filter(function(e){return e.props.visible}).length}},e.useAudio=function(e){var t=i.useState("initial"),n=t[0],r=t[1],u=i.useRef(null),o=h("duration",0),a=h("currentTime",0),l=h("volume",1),s=0===l.value,c=0===o.value?0:Math.round(a.value/o.value*100);function f(e){var t=e.currentTarget;u.current&&(u.current.currentTime=t.valueAsNumber,a.set(t.valueAsNumber))}function d(e){var t=e.currentTarget;u.current&&(u.current.volume=t.valueAsNumber,l.set(t.valueAsNumber))}return{props:{audio:{src:e,onTimeUpdate:function(e){a.set(Math.round(e.target.currentTime))},onLoadedMetadata:function(e){var t=e.currentTarget;u.current=t,o.set(Math.round(t.duration)),a.set(t.currentTime),l.set(t.volume),r("ready")},onEnded:function(){r("paused")},controls:!1},player:{min:0,step:1,max:o.value,value:a.value,onInput:f,style:{"--percentage":c+"%"}},volume:{min:0,max:1,value:l.value,onInput:d,style:{"--percentage":Math.floor(100*l.value)+"%"}}},actions:{play:function(){u.current&&(u.current.play(),r("playing"))},pause:function(){u.current&&(u.current.pause(),r("paused"))},mute:function(){u.current&&(u.current.volume=0,l.set(0))},unmute:function(){u.current&&(u.current.volume=1,l.set(1))},reset:function(){u.current&&(u.current.currentTime=0,u.current.pause(),a.set(0),r("paused"))},seek:f,changeVolume:d},meta:{state:n,percentage:{raw:c,formatted:c+"%"},currentTime:{raw:a.value,formatted:p.format(a.value)},duration:{raw:o.value,formatted:p.format(o.value)},volume:{value:l.value,raw:Math.floor(100*l.value),formatted:Math.floor(100*l.value)+"%"},muted:s}}},e.useAutofocus=g,e.useBreakpoint=function(e){var t,n=b();return(null!=(t=null==n?void 0:n.width)?t:0)<=e},e.useClickOutside=function(e,t,n){o.default.useEffect(function(){if(e.current)return document.addEventListener("mousedown",r),function(){return document.removeEventListener("mousedown",r)};function r(r){var u;null!=(u=e.current)&&u.contains(r.target)||(null==n?void 0:n.some(function(e){var t;return null==(t=e.current)?void 0:t.contains(r.target)}))||t()}},[t,e,n])},e.useClientSearch=function(){var e=t.useState(""),n=e[0],r=e[1];return{query:n,clear:function(){r("")},onChange:function(e){r(e.currentTarget.value)},filterFn:function(e){return""===n||(null==e?void 0:e.toLowerCase().includes(n.toLowerCase()))}}},e.useCurrentTimestamp=function(){var e=t.useState(M),n=e[0],r=e[1];return t.useEffect(function(){var e=setInterval(function(){return r(M())},new F.Seconds(1).toMs());return function(){return clearInterval(e)}},[]),n},e.useDebounce=function(e){var t=o.default.useState(e.value),n=t[0],r=t[1];return o.default.useEffect(function(){var t=setTimeout(function(){return r(e.value)},e.delayMs);return function(){return clearTimeout(t)}},[e.value,e.delayMs]),n},e.useDisablePullToRefresh=function(e){void 0===e&&(e=!0),t.useLayoutEffect(function(){if(e){var t=document.querySelector("html"),n=document.body,r=window.getComputedStyle(t).overscrollBehavior,u=window.getComputedStyle(n).overscrollBehavior;return n.style.overscrollBehavior="none",t.style.overscrollBehavior="none",function(){n.style.overscrollBehavior=u,t.style.overscrollBehavior=r}}},[e])},e.useDocumentTitle=function(e){o.default.useEffect(function(){document.title=e},[e])},e.useExpandableList=function(n){var r=n.length-n.max,u=n.length>n.max;function o(){return u?e.UseExpandableListState.contracted:e.UseExpandableListState.expanded}var i=t.useState(o),a=i[0],l=i[1];return t.useEffect(function(){return l(o())},[n.length,n.max]),{state:a,displayShowMore:a===e.UseExpandableListState.contracted,displayShowLess:a===e.UseExpandableListState.expanded&&u,showMore:function(){a===e.UseExpandableListState.contracted&&l(e.UseExpandableListState.expanded)},showLess:function(){a===e.UseExpandableListState.expanded&&l(e.UseExpandableListState.contracted)},numberOfExcessiveElements:r,filterFn:function(t,r){return a===e.UseExpandableListState.expanded||r<n.max}}},e.useField=h,e.useFile=function(n){var r,u=null!=(r=null==n?void 0:n.maxSize)?r:Infinity,o=t.useState(e.UseFileState.idle),i=o[0],a=o[1],l=t.useState(null),s=l[0],c=l[1];function f(t){var n=t.currentTarget.files;if(n&&n[0]){var r=n[0];if(!(r.size>u))return c(r),a(e.UseFileState.selected),r;a(e.UseFileState.error)}}function d(){c(null),a(e.UseFileState.idle)}return i===e.UseFileState.idle?{state:i,data:null,actions:{selectFile:f,clearFile:d}}:i===e.UseFileState.selected?{state:i,data:s,actions:{selectFile:f,clearFile:d,previewFile:function(){if(s)return URL.createObjectURL(s)}}}:{state:i,data:null,actions:{selectFile:f,clearFile:d}}},e.useFilter=C,e.useHover=function(){var e=o.default.useRef(null),t=I(!1),n=t.enable,r=t.disable;return o.default.useEffect(function(){var t=e.current;return t&&(t.addEventListener("mouseenter",n),t.addEventListener("mouseleave",r)),function(){t&&(t.removeEventListener("mouseenter",n),t.removeEventListener("mouseleave",r))}},[]),{attach:{ref:e},isHovering:t.on}},e.useImageFileResolution=function(t){var n,r=h("resolution",P);return i.useEffect(function(){!function(){try{var n,u=function(u){if(n)return u;[e.UseFileState.error,e.UseFileState.idle].includes(t.state)&&null!==r.value.width&&null!==r.value.height&&r.clear()},o=function(){if(t.state===e.UseFileState.selected)return function(e,u){try{var o=Promise.resolve(O(t.actions.previewFile())).then(function(e){var t=r.set(e);return n=1,t})}catch(e){return u()}return o&&o.then?o.then(void 0,u):o}(0,function(){var e=r.clear();return n=1,e})}();Promise.resolve(o&&o.then?o.then(u):u(o))}catch(e){return Promise.reject(e)}}()},[t.state,null==(n=t.data)?void 0:n.name]),r.value},e.useIsOnline=j,e.useIsVisible=function(e){void 0===e&&(e=D);var n=t.useState(!1),r=n[0],u=n[1];return t.useEffect(function(){var t=e.ref.current;if(k()&&t){var n=new IntersectionObserver(function(e){var t;return u(Boolean(null==(t=e[0])?void 0:t.isIntersecting))},e);return n.observe(t),function(){return n.unobserve(t)}}},[]),r},e.useKeyboardShortcurts=_,e.useLanguage=X,e.useLeavingPrompt=function(e){void 0===e&&(e=!1),o.default.useEffect(function(){if(e)return window.addEventListener("beforeunload",t),function(){return window.removeEventListener("beforeunload",t)};function t(e){e.preventDefault()}},[e])},e.useList=R,e.usePluralize=function(){var e=X();return function(t){return Y(l({},t,{language:e}))}},e.usePreviousValue=d,e.useRateLimiter=function(e){var n=t.useRef(new H(e));return function(){var t=Date.now(),r=n.current.verify(t);return r.allowed?e.action():null==e.fallback?void 0:e.fallback(r.remainingMs)}},e.useScroll=function(){var e=y(),t=o.default.useState(0),n=t[0],r=t[1],u=I(!1);return o.default.useLayoutEffect(function(){function t(){e&&(r(null==e?void 0:e.scrollY),e.document.body.clientHeight<e.document.body.scrollHeight?u.enable():u.disable())}return null==e||e.addEventListener("scroll",t),function(){return null==e?void 0:e.removeEventListener("scroll",t)}},[]),{actions:{goToTop:function(){e&&e.scrollTo({top:0,left:0,behavior:"smooth"})}},position:{value:n,isInitial:0===n,hasChanged:n>0},visible:u.on,hidden:u.off}},e.useScrollLock=B,e.useSound=function(e){var t=new Audio(e);return{play:t.play.bind(t)}},e.useToastTrigger=function(){return G()[1].add},e.useToastsContext=G,e.useToggle=I,e.useTranslations=function(){var e=o.default.useContext(J);if(void 0===e)throw new Error("useTranslations must be used within the TranslationsContext");return function(t,n){var r=e.translations[t];return r?n?Object.entries(n).reduce(function(e,t){return e.replace("{{"+t[0]+"}}",String(t[1]))},r):r:(console.warn("[@bgord/frontend] missing translation for key: "+t),t)}},e.useUrlFilter=function(e){var t,n=y(),r=null!=(t=new URLSearchParams(null==n?void 0:n.location.search).get(e.label))?t:void 0;return C(l({onUpdate:function(t,r){if(n){var u=new URL(n.location.toString()),o=new URLSearchParams(u.search);void 0===t?o.delete(e.label):o.set(e.label,t),t!==r&&t!==r&&(u.search=o.toString(),history.pushState({},"",u.toString()))}}},e,{defaultQuery:e.defaultQuery,currentQuery:r}))},e.useWindowDimensions=b});
//# sourceMappingURL=bgord-frontend.umd.js.map
