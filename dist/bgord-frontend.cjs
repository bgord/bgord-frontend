var e=require("react"),t=require("tinykeys"),n=require("js-cookie"),r=require("polish-plurals"),o=require("ts-storage");function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}}),t.default=e,t}var i=/*#__PURE__*/u(e),s=/*#__PURE__*/a(e),l=/*#__PURE__*/u(t),c=/*#__PURE__*/u(n),d=/*#__PURE__*/a(o);function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)t.indexOf(n=u[r])>=0||(o[n]=e[n]);return o}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function g(t,n){var r=e.useRef(n);return e.useEffect(function(){r.current=t}),r.current}var h,x=["children"];exports.AnimaState=void 0,(h=exports.AnimaState||(exports.AnimaState={})).appearing="appearing",h.appeared="appeared",h.hidding="hidding",h.hidden="hidden";var y,S=/*#__PURE__*/function(){function e(e){this.message=void 0,this._known=!0,this.message=e.message}return e.isServerError=function(e){return!!(e&&"object"==typeof e&&e===Object(e)&&e.hasOwnProperty("_known")&&e.hasOwnProperty("message"))},e.extract=function(t){try{return t.ok?Promise.resolve(t):Promise.resolve(t.json()).then(function(t){var n=e.isServerError(t)?t.message:"app.error.general";throw new e({message:n})})}catch(e){return Promise.reject(e)}},e.handle=function(t){try{throw new e({message:e.isServerError(t)?t.message:"app.error.general"})}catch(e){return Promise.reject(e)}},e}(),w=/*#__PURE__*/function(){function e(){}return e.format=function(e){var t=Math.floor(e/60),n=e%60;return String(t).padStart(2,"0")+":"+String(n).padStart(2,"0")},e}();function b(t,n){var r="function"==typeof n?n():n,o=e.useState(r),u=o[0],a=o[1];return{value:u,set:a,clear:function(){a(r)},label:{props:{htmlFor:t}},input:{props:{id:t,name:t}},changed:u!==r,unchanged:u==r}}function E(e){i.default.useEffect(function(){var t;e.condition&&(null==(t=e.ref.current)||t.focus())},[e.condition])}function U(){if("undefined"!=typeof window)return window}function T(){var t=e.useState({width:void 0,height:void 0}),n=t[0],r=t[1];return e.useEffect(function(){var e=U();if(e)return e.addEventListener("resize",t),t(),function(){return e.removeEventListener("resize",t)};function t(){r({width:null==e?void 0:e.innerWidth,height:null==e?void 0:e.innerHeight})}},[]),n}function L(e,t,n){i.default.useEffect(function(){if(e.current)return document.addEventListener("mousedown",r),function(){return document.removeEventListener("mousedown",r)};function r(r){var o;null!=(o=e.current)&&o.contains(r.target)||(null==n?void 0:n.some(function(e){var t;return null==(t=e.current)?void 0:t.contains(r.target)}))||t()}},[t,e,n])}function P(e){return{value:e,hours:24*e,minutes:24*e*60,seconds:24*e*60*60,ms:24*e*60*60*1e3}}function A(e){return{value:e,minutes:60*e,seconds:60*e*60,ms:60*e*60*1e3}}function D(e){return{value:e,seconds:60*e,ms:60*e*1e3}}function F(e){return{value:e,ms:1e3*e}}exports.UseAudioState=void 0,(y=exports.UseAudioState||(exports.UseAudioState={})).initial="initial",y.ready="ready",y.playing="playing",y.paused="paused";var I,O,M={Days:P,Hours:A,Minutes:D,Seconds:F};function C(){return Date.now()}function j(){}function k(t){var n,r,o,u,a=null!=(n=t.defaultQuery)?n:void 0,i=null!=(r=t.currentQuery)?r:void 0,s=null!=(o=t.filterFn)?o:function(e){return void 0===f||f===String(e)},l=Object.keys(t.enum),c=null!=(u=null==t?void 0:t.onUpdate)?u:j,d=e.useState(null!=i?i:a),f=d[0],p=d[1],v=g(f);return e.useEffect(function(){c(f,v)},[v,f]),{query:f,clear:function(){p(a)},onChange:function(e){var n=e.currentTarget.value,r=Boolean(t.enum[String(n)]);p(r?n:void 0)},filterFn:s,options:l,onUpdate:c,name:t.name,changed:f!==a,unchanged:f===a,label:{props:{htmlFor:t.name}},input:{props:{id:t.name,name:t.name}}}}function _(t){void 0===t&&(t=!1);var n=e.useState(t),r=n[0],o=n[1];return{on:r,off:!r,enable:function(){return o(!0)},disable:function(){return o(!1)},toggle:function(){return o(function(e){return!e})}}}exports.UseExpandableListState=void 0,(I=exports.UseExpandableListState||(exports.UseExpandableListState={})).contracted="contracted",I.expanded="expanded",exports.UseFileState=void 0,(O=exports.UseFileState||(exports.UseFileState={})).idle="idle",O.selected="selected",O.error="error";var V,R,H=function(e){try{if(!e)return Promise.resolve(N);var t=document.createElement("img"),n=new Promise(function(e,n){t.onload=function(){return e({width:t.width,height:t.height})},t.onerror=n});return t.src=e,Promise.resolve(n)}catch(e){return Promise.reject(e)}},N={width:null,height:null},q=function(){var e=_("undefined"==typeof navigator||"boolean"!=typeof navigator.onLine||navigator.onLine);return i.default.useEffect(function(){function t(){e.enable()}function n(){e.disable()}return window.addEventListener("online",t),window.addEventListener("offline",n),function(){window.removeEventListener("online",t),window.removeEventListener("offline",n)}},[]),e.on},z={threshold:0,root:null,rootMargin:"0%",ref:{current:null}};function B(){return"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype}function W(e,t){return e===t}function Q(e){i.default.useEffect(function(){var t=l.default(window,e);return function(){return t()}},[e])}function K(e){if(e.language===R.en){var t,n=null!=(t=e.plural)?t:e.singular+"s";return 1===e.value?e.singular:n}if(e.language===R.pl){var o,u=null!=(o=e.value)?o:1;return 1===u?e.singular:r.polishPlurals(e.singular,String(e.plural),String(e.genitive),u)}return console.warn("[@bgord/frontend] missing pluralization fuction for language "+e.language+"."),e.singular}exports.KeyNameEnum=void 0,(V=exports.KeyNameEnum||(exports.KeyNameEnum={})).Enter="Enter",V.Space=" ",function(e){e.en="en",e.pl="pl"}(R||(R={}));var Y=i.default.createContext({translations:{},language:"en"});function $(){var e=i.default.useContext(Y);if(void 0===e)throw new Error("useLanguage must be used within the TranslationsContext");return e.language}function G(t){var n,r,o=null!=(n=null==t?void 0:t.defaultItems)?n:[],u=null!=(r=null==t?void 0:t.comparisonFn)?r:function(e,t){return e===t},a=e.useState(o),i=a[0],s=a[1];function l(e){s(function(t){return Array.isArray(e)?[].concat(t,e):[].concat(t,[e])})}function c(e){s(function(t){return t.filter(function(t){return!u(t,e)})})}function d(e){return i.some(function(t){return u(t,e)})}return[i,{clear:function(){s([])},add:l,remove:c,toggle:function(e){d(e)?c(e):l(e)},isAdded:d,update:s}]}var J,X=/*#__PURE__*/function(){function e(){}return e.get=function(e,t){return d.get(e,t).value},e.set=function(e,t){d.set(e,t)},e.clear=function(e){d.remove(e)},e}(),Z=/*#__PURE__*/function(){function e(e){this.lastInvocationTimestamp=null,this.options=void 0,this.options=e}return e.prototype.verify=function(e){if(!this.lastInvocationTimestamp)return this.lastInvocationTimestamp=e,{allowed:!0};var t=this.lastInvocationTimestamp+this.options.limitMs;return t<=e?(this.lastInvocationTimestamp=e,{allowed:!0}):{allowed:!1,remainingMs:t-e}},e}();function ee(t){void 0===t&&(t=!0),e.useLayoutEffect(function(){if(t){var e=document.querySelector("html"),n=document.body,r=window.getComputedStyle(n).overflow,o=window.getComputedStyle(e).overflow;return n.style.overflow="hidden",e.style.overflow="hidden",function(){n.style.overflow=r,e.style.overflow=o}}},[t])}exports.UseVideoState=void 0,(J=exports.UseVideoState||(exports.UseVideoState={})).initial="initial",J.ready="ready",J.playing="playing",J.paused="paused";var te=["disable","enable","on","off","toggle"],ne=["as"],re=function(e){return console.warn("Copying to clipboard not supported")},oe=/*#__PURE__*/function(){function e(){}return e.datetime=function(e,t){return void 0===t&&(t="N/A"),e?new Date(e).toLocaleString():t},e.monthDay=function(t){var n=new Date(t),r=e._padDatePart(n.getDate());return e._padDatePart(n.getMonth()+1)+"/"+r},e.form=function(t){return t?e._padDatePart(t.getFullYear())+"-"+e._padDatePart(t.getMonth()+1)+"-"+e._padDatePart(t.getDate()):e.form(new Date)},e.clockUTC=function(t){var n=new Date(t);return e._padDatePart(n.getUTCHours())+":"+e._padDatePart(n.getUTCMinutes())+":"+e._padDatePart(n.getUTCSeconds())},e.clockLocal=function(t){var n=new Date(t);return e._padDatePart(n.getHours())+":"+e._padDatePart(n.getMinutes())+":"+e._padDatePart(n.getSeconds())},e.countdown=function(t){var n=new Date(t);return e._padDatePart(n.getHours())+":"+e._padDatePart(n.getMinutes())+":"+e._padDatePart(n.getSeconds())},e.formDatetimeLocal=function(e){var t=e-D((new Date).getTimezoneOffset()).ms;return new Date(t).toISOString().slice(0,16)},e._padDatePart=function(e){return String(e).padStart(2,"0")},e}(),ue=/*#__PURE__*/function(){function e(){}return e.convertUtcToLocal=function(e){var t=(new Date).getTimezoneOffset(),n=(A(e).minutes-t)/60%24;return{value:n,label:String(n).padStart(2,"0")+":00"}},e}(),ae=/*#__PURE__*/function(){function e(e,t){this.value=void 0;var n=new URLSearchParams(this.getNonEmptyFilters(t));this.value=""!==n.toString()?e+"?"+n.toString():e}return e.prototype.getNonEmptyFilters=function(e){return void 0===e?{}:Object.fromEntries(Object.entries(e).filter(function(e){return void 0!==e[1]}))},e}(),ie=/*#__PURE__*/function(){function e(){}return e.infinite=function(e){var t,n,r;return null!=(t=null==(n=e.data)||null==(r=n.pages)?void 0:r.flat().map(function(e){return e.result}).flat())?t:[]},e}();function se(e){return e+"px"}ie.empty={result:[],meta:{exhausted:!0}};var le=i.default.createContext(void 0);function ce(){var e=i.default.useContext(le);if(void 0===e)throw new Error("useToasts must be used within the ToastsContextProvider");return e}exports.API=function(e,t){return fetch(e,f({mode:"same-origin",headers:{"Content-Type":"application/json","time-zone-offset":(new Date).getTimezoneOffset().toString()},redirect:"follow"},t)).then(S.extract).catch(S.handle)},exports.AUDIO_DEFAULT_VOLUME=1,exports.Anima=function(e){var t,n=null!=(t=e.duration)?t:300,r=i.default.useState(function(){return e.visible?e.isInitial?exports.AnimaState.appeared:exports.AnimaState.appearing:exports.AnimaState.hidden}),o=r[0],u=r[1],a=g(o);return i.default.useEffect(function(){if(!e.isInitial)if(e.visible)u(exports.AnimaState.appearing),setTimeout(function(){return u(exports.AnimaState.appeared)},100);else{if(!a)return;u(exports.AnimaState.hidding),setTimeout(function(){return u(exports.AnimaState.hidden)},n)}},[e.visible]),o===exports.AnimaState.hidden?null:i.default.cloneElement(e.children,{"data-anima":o,"data-anima-effect":e.effect,style:f({"--duration":n+"ms"},e.children.props.style)})},exports.AnimaList=function(e){var t=p(e,x),n=i.default.useState(!0),r=n[0],o=n[1];return i.default.useEffect(function(){return o(!1)},[]),i.default.createElement("ul",f({},t),e.children.map(function(e){return i.default.cloneElement(e,{isInitial:r})}))},exports.DateFormatter=oe,exports.Days=P,exports.Dialog=function(e){var t=e.disable,n=p(e,te),r=i.default.useRef(null);return i.default.useEffect(function(){var t,n;e.on?null==(t=r.current)||t.showModal():null==(n=r.current)||n.close()},[e.on]),Q({Escape:t}),E({ref:r,condition:e.on}),ee(e.on),L(r,t),i.default.createElement("dialog",f({ref:r,tabIndex:0,"data-display":e.on?"flex":"none","data-direction":"column","data-mx":"auto","data-p":"24","data-position":"absolute","data-z":"2","data-bg":"white","data-br":"4","data-bc":"gray-300","data-bw":"1","data-backdrop":"black"},n))},exports.DurationFormatter=w,exports.FilterUrl=ae,exports.HourFormatter=ue,exports.Hours=A,exports.Minutes=D,exports.OfflineIndicator=function(e){return q()?null:i.default.createElement(i.default.Fragment,null,e.children)},exports.OutboundLink=function(e){var t=e.as,n=p(e,ne);return i.default.createElement(t||"a",f({target:"_blank",rel:"noreferer noopener"},n))},exports.Pagination=ie,exports.Rhythm=function(e){return void 0===e&&(e=12),{times:function(t){var n=e*t,r={height:{height:se(n)},minHeight:{minHeight:se(n)},maxHeight:{maxHeight:se(n)},width:{width:se(n)},minWidth:{minWidth:se(n)},maxWidth:{maxWidth:se(n)},square:{height:se(n),width:se(n)}},o={height:{style:{height:se(n)}},minHeight:{style:{minHeight:se(n)}},maxHeight:{style:{maxHeight:se(n)}},width:{style:{width:se(n)}},minWidth:{style:{minWidth:se(n)}},maxWidth:{style:{maxWidth:se(n)}},square:{style:{height:se(n),width:se(n)}}};return f({px:se(n),raw:n,style:o},r)}}},exports.SafeLocalStorage=X,exports.Seconds=F,exports.ServerError=S,exports.Time=M,exports.ToastsContextProvider=function(e){var t,n,r,o,u=(n=null!=(t=null==e?void 0:e.timeout)?t:5e3,r=G({comparisonFn:function(e,t){return e.id===t.id}}),o=r[1],[[].concat(r[0]).reverse(),{add:function(e){var t=f({},e,{id:String(Date.now())});o.add(t),setTimeout(function(){return o.remove(t)},n)},remove:o.remove,clear:o.clear}]);return i.default.createElement(le.Provider,{value:[u[0],u[1]]},e.children)},exports.TranslationsContextProvider=function(e){return i.default.createElement(Y.Provider,{value:e.value},e.children)},exports.VIDEO_DEFAULT_VOLUME=1,exports.copyToClipboard=function(e){try{var t,n,r=null!=(t=e.onFailure)?t:re,o=null!=(n=e.onSuccess)?n:j;navigator.clipboard||r();var u=function(t,n){try{var r=Promise.resolve(navigator.clipboard.writeText(e.text)).then(function(){o()})}catch(e){return n(e)}return r&&r.then?r.then(void 0,n):r}(0,function(e){r(e)});return Promise.resolve(u&&u.then?u.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},exports.defaultUseIsVisibleConfig=z,exports.emptyImageResolution=N,exports.exec=function(e){return function(){e.forEach(function(e){return e()})}},exports.getAnimaProps=function(e){return{"data-anima":e["data-anima"],"data-anima-effect":e["data-anima-effect"],style:e.style}},exports.getCurrentTimestamp=C,exports.getImageResolution=H,exports.getSafeWindow=U,exports.isClient=function(){return!U()},exports.isIntersectionObserverSupported=B,exports.noop=j,exports.pluralize=K,exports.useAnimaList=function(e,t){for(var n,r,o=null!=(n=null==t?void 0:t.direction)?n:"head",u=i.default.useState(e.map(function(e){return{item:e,props:{visible:!0}}})),a=u[0],s=u[1],l=[],c=function(){var e=r.value;!a.map(function(e){return e.item}).some(function(t){return e.id===t.id})&&l.push(e)},d=m(e);!(r=d()).done;)c();i.default.useEffect(function(){0!==l.length&&(s("head"===o?function(e){return[].concat(l.map(function(e){return{item:e,props:{visible:!0}}}),e)}:function(e){return[].concat(e,l.map(function(e){return{item:e,props:{visible:!0}}}))}),l=[])},[l.length,o]);for(var p,v=[],g=function(){var t=p.value.item;e.every(function(e){return e.id!==t.id})&&v.push(t)},h=m(a);!(p=h()).done;)g();return i.default.useEffect(function(){0!==v.length&&(s(function(e){return e.map(function(e){return v.some(function(t){return t.id===e.item.id})?f({},e,{props:{visible:!1}}):e})}),v=[])},[v.length]),{items:a.map(function(t){var n=e.find(function(e){return e.id===t.item.id});return n?f({},t,{item:n}):t}),count:a.filter(function(e){return e.props.visible}).length}},exports.useAudio=function(e){var t=s.useState(exports.UseAudioState.initial),n=t[0],r=t[1],o=s.useRef(null),u=b("duration",0),a=b("currentTime",0),i=b("volume",1),l=0===i.value,c=0===u.value?0:Math.round(a.value/u.value*100);function d(e){var t=e.currentTarget;o.current&&(o.current.currentTime=t.valueAsNumber,a.set(t.valueAsNumber))}function f(e){var t=e.currentTarget;o.current&&(o.current.volume=t.valueAsNumber,i.set(t.valueAsNumber))}return{props:{audio:{src:e,onTimeUpdate:function(e){a.set(Math.round(e.target.currentTime))},onLoadedMetadata:function(e){var t=e.currentTarget;o.current=t,u.set(Math.round(t.duration)),a.set(t.currentTime),i.set(t.volume),r(exports.UseAudioState.ready)},onEnded:function(){r(exports.UseAudioState.paused)},controls:!1},player:{min:0,step:1,max:u.value,value:a.value,onInput:d,style:{"--percentage":c+"%"}},volume:{min:0,max:1,value:i.value,onInput:f,style:{"--percentage":Math.floor(100*i.value)+"%"}}},actions:{play:function(){o.current&&(o.current.play(),r(exports.UseAudioState.playing))},pause:function(){o.current&&(o.current.pause(),r(exports.UseAudioState.paused))},mute:function(){o.current&&(o.current.volume=0,i.set(0))},unmute:function(){o.current&&(o.current.volume=1,i.set(1))},reset:function(){o.current&&(o.current.currentTime=0,o.current.pause(),a.set(0),r(exports.UseAudioState.paused))},seek:d,changeVolume:f},meta:{state:n,isInitial:n===exports.UseAudioState.initial,isReady:n===exports.UseAudioState.ready,isPlaying:n===exports.UseAudioState.playing,isPaused:n===exports.UseAudioState.paused,matches:function(e){return e.some(function(e){return e===n})},percentage:{raw:c,formatted:c+"%"},currentTime:{raw:a.value,formatted:w.format(a.value)},duration:{raw:u.value,formatted:w.format(u.value)},volume:{value:i.value,raw:Math.floor(100*i.value),formatted:Math.floor(100*i.value)+"%"},muted:l}}},exports.useAutofocus=E,exports.useBreakpoint=function(e){var t,n=T();return(null!=(t=null==n?void 0:n.width)?t:0)<=e},exports.useClickOutside=L,exports.useClientSearch=function(){var t=e.useState(""),n=t[0],r=t[1];return{query:n,clear:function(){r("")},onChange:function(e){r(e.currentTarget.value)},filterFn:function(e){return""===n||(null==e?void 0:e.toLowerCase().includes(n.toLowerCase()))}}},exports.useCurrentTimestamp=function(){var t=e.useState(C),n=t[0],r=t[1];return e.useEffect(function(){var e=setInterval(function(){return r(C())},M.Seconds(1).ms);return function(){return clearInterval(e)}},[]),n},exports.useDebounce=function(e){var t=i.default.useState(e.value),n=t[0],r=t[1];return i.default.useEffect(function(){var t=setTimeout(function(){return r(e.value)},e.delayMs);return function(){return clearTimeout(t)}},[e.value,e.delayMs]),n},exports.useDisablePullToRefresh=function(t){void 0===t&&(t=!0),e.useLayoutEffect(function(){if(t){var e=document.querySelector("html"),n=document.body,r=window.getComputedStyle(e).overscrollBehavior,o=window.getComputedStyle(n).overscrollBehavior;return n.style.overscrollBehavior="none",e.style.overscrollBehavior="none",function(){n.style.overscrollBehavior=o,e.style.overscrollBehavior=r}}},[t])},exports.useDocumentTitle=function(e){i.default.useEffect(function(){document.title=e},[e])},exports.useExpandableList=function(t){var n=t.length-t.max,r=t.length>t.max;function o(){return r?exports.UseExpandableListState.contracted:exports.UseExpandableListState.expanded}var u=e.useState(o),a=u[0],i=u[1];return e.useEffect(function(){return i(o())},[t.length,t.max]),{state:a,displayShowMore:a===exports.UseExpandableListState.contracted,displayShowLess:a===exports.UseExpandableListState.expanded&&r,actions:{showMore:function(){a===exports.UseExpandableListState.contracted&&i(exports.UseExpandableListState.expanded)},showLess:function(){a===exports.UseExpandableListState.expanded&&i(exports.UseExpandableListState.contracted)}},numberOfExcessiveElements:n,filterFn:function(e,n){return a===exports.UseExpandableListState.expanded||n<t.max}}},exports.useField=b,exports.useFile=function(t,n){var r,o=null!=(r=null==n?void 0:n.maxSize)?r:Infinity,u=e.useState(exports.UseFileState.idle),a=u[0],i=u[1],s=e.useState(null),l=s[0],c=s[1];function d(e){var t=e.currentTarget.files;if(t&&t[0]){var n=t[0];if(!(n.size>o))return c(n),i(exports.UseFileState.selected),n;i(exports.UseFileState.error)}}function f(){c(null),i(exports.UseFileState.idle)}var p=e.useMemo(function(){return l?URL.createObjectURL(l):void 0},[l]);function v(e){return e.some(function(e){return e===a})}return a===exports.UseFileState.idle?{state:a,matches:v,isIdle:!0,isSelected:!1,isError:!1,data:null,actions:{selectFile:d,clearFile:f},label:{props:{htmlFor:t}},input:{props:{id:t,name:t}}}:a===exports.UseFileState.selected?{state:a,matches:v,data:l,isIdle:!1,isSelected:!0,isError:!1,actions:{selectFile:d,clearFile:f},preview:p,label:{props:{htmlFor:t}},input:{props:{id:t,name:t}}}:{state:a,matches:v,data:null,isIdle:!1,isSelected:!1,isError:!0,actions:{selectFile:d,clearFile:f},label:{props:{htmlFor:t}},input:{props:{id:t,name:t}}}},exports.useFilter=k,exports.useHover=function(){var e=i.default.useRef(null),t=_(!1),n=t.enable,r=t.disable;return i.default.useEffect(function(){var t=e.current;return t&&(t.addEventListener("mouseenter",n),t.addEventListener("mouseleave",r)),function(){t&&(t.removeEventListener("mouseenter",n),t.removeEventListener("mouseleave",r))}},[]),{attach:{ref:e},isHovering:t.on}},exports.useImageFileResolution=function(e){var t,n=b("resolution",N);return s.useEffect(function(){!function(){try{var t,r=function(r){if(t)return r;[exports.UseFileState.error,exports.UseFileState.idle].includes(e.state)&&null!==n.value.width&&null!==n.value.height&&n.clear()},o=function(){if(e.state===exports.UseFileState.selected)return function(r,o){try{var u=Promise.resolve(H(e.preview)).then(function(e){var r=n.set(e);return t=1,r})}catch(e){return o()}return u&&u.then?u.then(void 0,o):u}(0,function(){var e=n.clear();return t=1,e})}();Promise.resolve(o&&o.then?o.then(r):r(o))}catch(e){return Promise.reject(e)}}()},[e.state,null==(t=e.data)?void 0:t.name]),n.value},exports.useIsOnline=q,exports.useIsVisible=function(t){void 0===t&&(t=z);var n=e.useState(!1),r=n[0],o=n[1];return e.useEffect(function(){var e=t.ref.current;if(B()&&e){var n=new IntersectionObserver(function(e){var t;return o(Boolean(null==(t=e[0])?void 0:t.isIntersecting))},t);return n.observe(e),function(){return n.unobserve(e)}}},[]),r},exports.useItem=function(t){var n,r,o=null!=(n=null==t?void 0:t.comparisonFn)?n:W,u=e.useState(null!=(r=null==t?void 0:t.defaultItem)?r:null),a=u[0],i=u[1];return{clear:function(){return i(null)},set:function(e){return i(e)},toggle:function(e){return i(function(t){return null===t?e:o(t,e)?null:e})},value:a,isDefault:o(a,null),exists:!o(a,null),compare:function(e){return o(a,e)}}},exports.useKeyHandler=function(e){var t=Object.keys(e);return function(n){var r=n.key,o=e[r];t.includes(n.key)&&e[r]&&o&&o()}},exports.useKeyboardShortcurts=Q,exports.useLanguage=$,exports.useLanguageSelector=function(e){return k({enum:e,currentQuery:$(),name:"language",onUpdate:function(e,t){var n=U();n&&e&&t&&t!==e&&(c.default.set("accept-language",e),n.document.location.reload())}})},exports.useLeavingPrompt=function(e){void 0===e&&(e=!1),i.default.useEffect(function(){if(e)return window.addEventListener("beforeunload",t),function(){return window.removeEventListener("beforeunload",t)};function t(e){e.preventDefault()}},[e])},exports.useList=G,exports.usePagination=function(){var e,t,n,r=b("meta",null),o=null==(e=r.value)?void 0:e.previousPage,u=null==(t=r.value)?void 0:t.nextPage,a=null==(n=r.value)?void 0:n.lastPage,i=b("page",1);return{current:i.value,last:a,controls:{firstPage:{active:!o,disabled:!1,exists:!0,go:function(){return i.set(1)},value:1},previousPage:{active:!1,disabled:!o,exists:Boolean(o),go:function(){return i.set(null!=o?o:i.value)},value:o},nextPage:{active:!1,disabled:!u,exists:Boolean(u),go:function(){return i.set(null!=u?u:i.value)},value:u},lastPage:{active:i.value===a,disabled:!u,exists:!0,go:function(){return i.set(null!=a?a:i.value)},value:a}},update:function(e){return r.set(e)}}},exports.usePersistentToggle=function(e,t){void 0===t&&(t=!1);var n=_(X.get(e,t));return s.useEffect(function(){return X.set(e,n.on)},[e,n.on]),f({},n,{clear:function(){return X.clear(e)}})},exports.usePluralize=function(){var e=$();return function(t){return K(f({},t,{language:e}))}},exports.usePreviousValue=g,exports.useRateLimiter=function(t){var n=e.useRef(new Z(t));return function(){var e=Date.now(),r=n.current.verify(e);return r.allowed?t.action.apply(t,[].slice.call(arguments)):null==t.fallback?void 0:t.fallback(r.remainingMs)}},exports.useScroll=function(){var e=U(),t=i.default.useState(0),n=t[0],r=t[1],o=_(!1);return i.default.useLayoutEffect(function(){function t(){e&&(r(null==e?void 0:e.scrollY),e.document.body.clientHeight<e.document.body.scrollHeight?o.enable():o.disable())}return null==e||e.addEventListener("scroll",t),function(){return null==e?void 0:e.removeEventListener("scroll",t)}},[]),{actions:{goToTop:function(){e&&e.scrollTo({top:0,left:0,behavior:"smooth"})}},position:{value:n,isInitial:0===n,hasChanged:n>0},visible:o.on,hidden:o.off}},exports.useScrollLock=ee,exports.useSound=function(e){var t=new Audio(e);return{play:t.play.bind(t)}},exports.useToastTrigger=function(){return ce()[1].add},exports.useToastsContext=ce,exports.useToggle=_,exports.useTranslations=function(){var e=i.default.useContext(Y);if(void 0===e)throw new Error("useTranslations must be used within the TranslationsContext");return function(t,n){var r=e.translations[t];return r?n?Object.entries(n).reduce(function(e,t){return e.replace("{{"+t[0]+"}}",String(t[1]))},r):r:(console.warn("[@bgord/frontend] missing translation for key: "+t),t)}},exports.useUrlFilter=function(e){var t,n=U(),r=null!=(t=new URLSearchParams(null==n?void 0:n.location.search).get(e.name))?t:void 0;return k(f({onUpdate:function(t,r){if(n){var o=new URL(n.location.toString()),u=new URLSearchParams(o.search);void 0===t?u.delete(e.name):u.set(e.name,t),t!==r&&t!==r&&(o.search=u.toString(),history.pushState({},"",o.toString()))}}},e,{defaultQuery:e.defaultQuery,currentQuery:r}))},exports.useVideo=function(e){var t=s.useState(exports.UseVideoState.initial),n=t[0],r=t[1],o=s.useRef(null),u=b("duration",0),a=b("currentTime",0),i=b("volume",1),l=0===i.value,c=0===u.value?0:Math.round(a.value/u.value*100);function d(e){var t=e.currentTarget;o.current&&(o.current.currentTime=t.valueAsNumber,a.set(t.valueAsNumber))}function f(e){var t=e.currentTarget;o.current&&(o.current.volume=t.valueAsNumber,i.set(t.valueAsNumber))}return{props:{video:{src:e,onTimeUpdate:function(e){a.set(Math.round(e.target.currentTime))},onLoadedMetadata:function(e){var t=e.currentTarget;o.current=t,u.set(Math.round(t.duration)),a.set(t.currentTime),i.set(t.volume),r(exports.UseVideoState.ready)},onEnded:function(){r(exports.UseVideoState.paused)},controls:!1},player:{min:0,step:1,max:u.value,value:a.value,onInput:d,style:{"--percentage":c+"%"}},volume:{min:0,max:1,value:i.value,onInput:f,style:{"--percentage":Math.floor(100*i.value)+"%"}}},actions:{play:function(){o.current&&(o.current.play(),r(exports.UseVideoState.playing))},pause:function(){o.current&&(o.current.pause(),r(exports.UseVideoState.paused))},mute:function(){o.current&&(o.current.volume=0,i.set(0))},unmute:function(){o.current&&(o.current.volume=1,i.set(1))},reset:function(){o.current&&(o.current.currentTime=0,o.current.pause(),a.set(0),r(exports.UseVideoState.paused))},seek:d,changeVolume:f,triggerFullscreen:function(){o.current&&o.current.requestFullscreen()}},meta:{state:n,isInitial:n===exports.UseVideoState.initial,isReady:n===exports.UseVideoState.ready,isPlaying:n===exports.UseVideoState.playing,isPaused:n===exports.UseVideoState.paused,matches:function(e){return e.some(function(e){return e===n})},percentage:{raw:c,formatted:c+"%"},currentTime:{raw:a.value,formatted:w.format(a.value)},duration:{raw:u.value,formatted:w.format(u.value)},volume:{value:i.value,raw:Math.floor(100*i.value),formatted:Math.floor(100*i.value)+"%"},muted:l}}},exports.useWindowDimensions=T;
//# sourceMappingURL=bgord-frontend.cjs.map
