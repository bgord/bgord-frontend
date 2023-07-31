!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("tinykeys"),require("js-cookie"),require("polish-plurals"),require("ts-storage")):"function"==typeof define&&define.amd?define(["exports","react","tinykeys","js-cookie","polish-plurals","ts-storage"],t):t((e||self).frontend={},e.react,e.tinykeys,e.jsCookie,e.polishPlurals,e.tsStorage)}(this,function(e,t,n,r,a,u){function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}}),t.default=e,t}var l=/*#__PURE__*/i(t),s=/*#__PURE__*/o(t),c=/*#__PURE__*/i(n),d=/*#__PURE__*/i(r),f=/*#__PURE__*/o(u);function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)t.indexOf(n=u[r])>=0||(a[n]=e[n]);return a}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function g(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(e,n){var r=t.useRef(n);return t.useEffect(function(){r.current=e}),r.current}var y,S=["children"];e.AnimaState=void 0,(y=e.AnimaState||(e.AnimaState={})).appearing="appearing",y.appeared="appeared",y.hidding="hidding",y.hidden="hidden";var w,b=/*#__PURE__*/function(){function e(e){this.message=void 0,this._known=!0,this.message=e.message}return e.isServerError=function(e){return!!(e&&"object"==typeof e&&e===Object(e)&&e.hasOwnProperty("_known")&&e.hasOwnProperty("message"))},e.extract=function(t){try{return t.ok?Promise.resolve(t):Promise.resolve(t.json()).then(function(t){var n=e.isServerError(t)?t.message:"app.error.general";throw new e({message:n})})}catch(e){return Promise.reject(e)}},e.handle=function(t){try{throw new e({message:e.isServerError(t)?t.message:"app.error.general"})}catch(e){return Promise.reject(e)}},e}(),E=/*#__PURE__*/function(){function e(){}return e.format=function(e){var t=Math.floor(e/60),n=e%60;return String(t).padStart(2,"0")+":"+String(n).padStart(2,"0")},e}();function U(e,n){var r="function"==typeof n?n():n,a=t.useState(r),u=a[0],i=a[1];return{value:u,set:i,clear:function(){i(r)},label:{props:{htmlFor:e}},input:{props:{id:e,name:e}},changed:u!==r,unchanged:u==r}}function x(e){l.default.useEffect(function(){var t;e.condition&&(null==(t=e.ref.current)||t.focus())},[e.condition])}function T(){if("undefined"!=typeof window)return window}function L(){var e=t.useState({width:void 0,height:void 0}),n=e[0],r=e[1];return t.useEffect(function(){var e=T();if(e)return e.addEventListener("resize",t),t(),function(){return e.removeEventListener("resize",t)};function t(){r({width:null==e?void 0:e.innerWidth,height:null==e?void 0:e.innerHeight})}},[]),n}function P(e,t,n){l.default.useEffect(function(){if(e.current)return document.addEventListener("mousedown",r),function(){return document.removeEventListener("mousedown",r)};function r(r){var a;null!=(a=e.current)&&a.contains(r.target)||(null==n?void 0:n.some(function(e){var t;return null==(t=e.current)?void 0:t.contains(r.target)}))||t()}},[t,e,n])}function A(e){return{value:e,hours:24*e,minutes:24*e*60,seconds:24*e*60*60,ms:24*e*60*60*1e3}}function D(e){return{value:e,minutes:60*e,seconds:60*e*60,ms:60*e*60*1e3}}function F(e){return{value:e,seconds:60*e,ms:60*e*1e3}}function I(e){return{value:e,ms:1e3*e}}e.UseAudioState=void 0,(w=e.UseAudioState||(e.UseAudioState={})).initial="initial",w.ready="ready",w.playing="playing",w.paused="paused";var O,M,C={Days:A,Hours:D,Minutes:F,Seconds:I};function j(){return Date.now()}function k(){}function _(e){var n,r,a,u,i=null!=(n=e.defaultQuery)?n:void 0,o=null!=(r=e.currentQuery)?r:void 0,l=null!=(a=e.filterFn)?a:function(e){return void 0===f||f===String(e)},s=Object.keys(e.enum),c=null!=(u=null==e?void 0:e.onUpdate)?u:k,d=t.useState(null!=o?o:i),f=d[0],v=d[1],m=h(f);return t.useEffect(function(){c(f,m)},[m,f]),{query:f,clear:function(){v(i)},onChange:function(t){var n=t.currentTarget.value,r=Boolean(e.enum[String(n)]);v(r?n:void 0)},filterFn:l,options:s,onUpdate:c,name:e.name,changed:f!==i,unchanged:f===i,label:{props:{htmlFor:e.name}},input:{props:{id:e.name,name:e.name}}}}function V(e){void 0===e&&(e=!1);var n=t.useState(e),r=n[0],a=n[1];return{on:r,off:!r,enable:function(){return a(!0)},disable:function(){return a(!1)},toggle:function(){return a(function(e){return!e})}}}e.UseExpandableListState=void 0,(O=e.UseExpandableListState||(e.UseExpandableListState={})).contracted="contracted",O.expanded="expanded",e.UseFileState=void 0,(M=e.UseFileState||(e.UseFileState={})).idle="idle",M.selected="selected",M.error="error";var R=function(e){try{if(!e)return Promise.resolve(H);var t=document.createElement("img"),n=new Promise(function(e,n){t.onload=function(){return e({width:t.width,height:t.height})},t.onerror=n});return t.src=e,Promise.resolve(n)}catch(e){return Promise.reject(e)}},H={width:null,height:null},N=function(){var e=V("undefined"==typeof navigator||"boolean"!=typeof navigator.onLine||navigator.onLine);return l.default.useEffect(function(){function t(){e.enable()}function n(){e.disable()}return window.addEventListener("online",t),window.addEventListener("offline",n),function(){window.removeEventListener("online",t),window.removeEventListener("offline",n)}},[]),e.on},q={threshold:0,root:null,rootMargin:"0%",ref:{current:null}};function z(){return"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype}function B(e,t){return e===t}var W,Q,K=null;function Y(e){l.default.useEffect(function(){var t=c.default(window,e);return function(){return t()}},[e])}function $(e){if(e.language===Q.en){var t,n=null!=(t=e.plural)?t:e.singular+"s";return 1===e.value?e.singular:n}if(e.language===Q.pl){var r,u=null!=(r=e.value)?r:1;return 1===u?e.singular:a.polishPlurals(e.singular,String(e.plural),String(e.genitive),u)}return console.warn("[@bgord/frontend] missing pluralization fuction for language "+e.language+"."),e.singular}e.KeyNameEnum=void 0,(W=e.KeyNameEnum||(e.KeyNameEnum={})).Enter="Enter",W.Space=" ",function(e){e.en="en",e.pl="pl"}(Q||(Q={}));var G=l.default.createContext({translations:{},language:"en"});function J(){var e=l.default.useContext(G);if(void 0===e)throw new Error("useLanguage must be used within the TranslationsContext");return e.language}function X(e){var n,r,a=null!=(n=null==e?void 0:e.defaultItems)?n:[],u=null!=(r=null==e?void 0:e.comparisonFn)?r:function(e,t){return e===t},i=t.useState(a),o=i[0],l=i[1];function s(e){l(function(t){return Array.isArray(e)?[].concat(t,e):[].concat(t,[e])})}function c(e){l(function(t){return t.filter(function(t){return!u(t,e)})})}function d(e){return o.some(function(t){return u(t,e)})}return[o,{clear:function(){l([])},add:s,remove:c,toggle:function(e){d(e)?c(e):s(e)},isAdded:d,update:l}]}var Z,ee=/*#__PURE__*/function(){function e(){}return e.get=function(e,t){return f.get(e,t).value},e.set=function(e,t){f.set(e,t)},e.clear=function(e){f.remove(e)},e}(),te=/*#__PURE__*/function(){function e(e){this.lastInvocationTimestamp=null,this.options=void 0,this.options=e}return e.prototype.verify=function(e){if(!this.lastInvocationTimestamp)return this.lastInvocationTimestamp=e,{allowed:!0};var t=this.lastInvocationTimestamp+this.options.limitMs;return t<=e?(this.lastInvocationTimestamp=e,{allowed:!0}):{allowed:!1,remainingMs:t-e}},e}();function ne(e){void 0===e&&(e=!0),t.useLayoutEffect(function(){if(e){var t=document.querySelector("html"),n=document.body,r=window.getComputedStyle(n).overflow,a=window.getComputedStyle(t).overflow;return n.style.overflow="hidden",t.style.overflow="hidden",function(){n.style.overflow=r,t.style.overflow=a}}},[e])}e.UseVideoState=void 0,(Z=e.UseVideoState||(e.UseVideoState={})).initial="initial",Z.ready="ready",Z.playing="playing",Z.paused="paused";var re=["disable","enable","on","off","toggle"],ae=["as"],ue=function(e){return console.warn("Copying to clipboard not supported")},ie=/*#__PURE__*/function(){function e(){}return e.datetime=function(e,t){return void 0===t&&(t="N/A"),e?new Date(e).toLocaleString():t},e.monthDay=function(t){var n=new Date(t),r=e._padDatePart(n.getDate());return e._padDatePart(n.getMonth()+1)+"/"+r},e.form=function(t){return t?e._padDatePart(t.getFullYear())+"-"+e._padDatePart(t.getMonth()+1)+"-"+e._padDatePart(t.getDate()):e.form(new Date)},e.clockUTC=function(t){var n=new Date(t);return e._padDatePart(n.getUTCHours())+":"+e._padDatePart(n.getUTCMinutes())+":"+e._padDatePart(n.getUTCSeconds())},e.clockLocal=function(t){var n=new Date(t);return e._padDatePart(n.getHours())+":"+e._padDatePart(n.getMinutes())+":"+e._padDatePart(n.getSeconds())},e.countdown=function(t){var n=new Date(t);return e._padDatePart(n.getHours())+":"+e._padDatePart(n.getMinutes())+":"+e._padDatePart(n.getSeconds())},e.formDatetimeLocal=function(e){var t=e-F((new Date).getTimezoneOffset()).ms;return new Date(t).toISOString().slice(0,16)},e._padDatePart=function(e){return String(e).padStart(2,"0")},e}(),oe=/*#__PURE__*/function(){function e(){}return e.convertUtcToLocal=function(e){var t=(new Date).getTimezoneOffset(),n=(D(e).minutes-t)/60%24;return{value:n,label:String(n).padStart(2,"0")+":00"}},e}(),le=/*#__PURE__*/function(){function e(e,t){this.value=void 0;var n=new URLSearchParams(this.getNonEmptyFilters(t));this.value=""!==n.toString()?e+"?"+n.toString():e}return e.prototype.getNonEmptyFilters=function(e){return void 0===e?{}:Object.fromEntries(Object.entries(e).filter(function(e){return void 0!==e[1]}))},e}(),se=/*#__PURE__*/function(){function e(){}return e.infinite=function(e){var t,n,r;return null!=(t=null==(n=e.data)||null==(r=n.pages)?void 0:r.flat().map(function(e){return e.result}).flat())?t:[]},e}();function ce(e){return e+"px"}se.empty={result:[],meta:{exhausted:!0}};var de=l.default.createContext(void 0);function fe(){var e=l.default.useContext(de);if(void 0===e)throw new Error("useToasts must be used within the ToastsContextProvider");return e}e.API=function(e,t){return fetch(e,v({mode:"same-origin",headers:{"Content-Type":"application/json","time-zone-offset":(new Date).getTimezoneOffset().toString()},redirect:"follow"},t)).then(b.extract).catch(b.handle)},e.AUDIO_DEFAULT_VOLUME=1,e.Anima=function(t){var n,r=null!=(n=t.duration)?n:300,a=l.default.useState(function(){return t.visible?t.isInitial?e.AnimaState.appeared:e.AnimaState.appearing:e.AnimaState.hidden}),u=a[0],i=a[1],o=h(u);return l.default.useEffect(function(){if(!t.isInitial)if(t.visible)i(e.AnimaState.appearing),setTimeout(function(){return i(e.AnimaState.appeared)},100);else{if(!o)return;i(e.AnimaState.hidding),setTimeout(function(){return i(e.AnimaState.hidden)},r)}},[t.visible]),u===e.AnimaState.hidden?null:l.default.cloneElement(t.children,{"data-anima":u,"data-anima-effect":t.effect,style:v({"--duration":r+"ms"},t.children.props.style)})},e.AnimaList=function(e){var t=m(e,S),n=l.default.useState(!0),r=n[0],a=n[1];return l.default.useEffect(function(){return a(!1)},[]),l.default.createElement("ul",v({},t),e.children.map(function(e){return l.default.cloneElement(e,{isInitial:r})}))},e.DateFormatter=ie,e.Days=A,e.Dialog=function(e){var t=e.disable,n=m(e,re),r=l.default.useRef(null);return l.default.useEffect(function(){var t,n;e.on?null==(t=r.current)||t.showModal():null==(n=r.current)||n.close()},[e.on]),Y({Escape:t}),x({ref:r,condition:e.on}),ne(e.on),P(r,t),l.default.createElement("dialog",v({ref:r,tabIndex:0,"data-display":e.on?"flex":"none","data-direction":"column","data-mx":"auto","data-p":"24","data-position":"absolute","data-z":"2","data-bg":"white","data-br":"4","data-bc":"gray-300","data-bw":"1","data-backdrop":"black"},n))},e.DurationFormatter=E,e.FilterUrl=le,e.HourFormatter=oe,e.Hours=D,e.Minutes=F,e.OfflineIndicator=function(e){return N()?null:l.default.createElement(l.default.Fragment,null,e.children)},e.OutboundLink=function(e){var t=e.as,n=m(e,ae);return l.default.createElement(t||"a",v({target:"_blank",rel:"noreferer noopener"},n))},e.Pagination=se,e.Rhythm=function(e){return void 0===e&&(e=12),{times:function(t){var n=e*t,r={height:{height:ce(n)},minHeight:{minHeight:ce(n)},maxHeight:{maxHeight:ce(n)},width:{width:ce(n)},minWidth:{minWidth:ce(n)},maxWidth:{maxWidth:ce(n)},square:{height:ce(n),width:ce(n)}},a={height:{style:{height:ce(n)}},minHeight:{style:{minHeight:ce(n)}},maxHeight:{style:{maxHeight:ce(n)}},width:{style:{width:ce(n)}},minWidth:{style:{minWidth:ce(n)}},maxWidth:{style:{maxWidth:ce(n)}},square:{style:{height:ce(n),width:ce(n)}}};return v({px:ce(n),raw:n,style:a},r)}}},e.SafeLocalStorage=ee,e.Seconds=I,e.ServerError=b,e.Time=C,e.ToastsContextProvider=function(e){var t,n,r,a,u=(n=null!=(t=null==e?void 0:e.timeout)?t:5e3,r=X({comparisonFn:function(e,t){return e.id===t.id}}),a=r[1],[[].concat(r[0]).reverse(),{add:function(e){var t=v({},e,{id:String(Date.now())});a.add(t),setTimeout(function(){return a.remove(t)},n)},remove:a.remove,clear:a.clear}]);return l.default.createElement(de.Provider,{value:[u[0],u[1]]},e.children)},e.TranslationsContextProvider=function(e){return l.default.createElement(G.Provider,{value:e.value},e.children)},e.VIDEO_DEFAULT_VOLUME=1,e.copyToClipboard=function(e){try{var t,n,r=null!=(t=e.onFailure)?t:ue,a=null!=(n=e.onSuccess)?n:k;navigator.clipboard||r();var u=function(t,n){try{var r=Promise.resolve(navigator.clipboard.writeText(e.text)).then(function(){a()})}catch(e){return n(e)}return r&&r.then?r.then(void 0,n):r}(0,function(e){r(e)});return Promise.resolve(u&&u.then?u.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},e.defaultUseIsVisibleConfig=q,e.emptyImageResolution=H,e.exec=function(e){return function(){e.forEach(function(e){return e()})}},e.getAnimaProps=function(e){return{"data-anima":e["data-anima"],"data-anima-effect":e["data-anima-effect"],style:e.style}},e.getCurrentTimestamp=j,e.getImageResolution=R,e.getSafeWindow=T,e.isClient=function(){return!T()},e.isIntersectionObserverSupported=z,e.noop=k,e.pluralize=$,e.useAnimaList=function(e,t){for(var n,r,a=null!=(n=null==t?void 0:t.direction)?n:"head",u=l.default.useState(e.map(function(e){return{item:e,props:{visible:!0}}})),i=u[0],o=u[1],s=[],c=function(){var e=r.value;!i.map(function(e){return e.item}).some(function(t){return e.id===t.id})&&s.push(e)},d=g(e);!(r=d()).done;)c();l.default.useEffect(function(){0!==s.length&&(o("head"===a?function(e){return[].concat(s.map(function(e){return{item:e,props:{visible:!0}}}),e)}:function(e){return[].concat(e,s.map(function(e){return{item:e,props:{visible:!0}}}))}),s=[])},[s.length,a]);for(var f,m=[],p=function(){var t=f.value.item;e.every(function(e){return e.id!==t.id})&&m.push(t)},h=g(i);!(f=h()).done;)p();return l.default.useEffect(function(){0!==m.length&&(o(function(e){return e.map(function(e){return m.some(function(t){return t.id===e.item.id})?v({},e,{props:{visible:!1}}):e})}),m=[])},[m.length]),{items:i.map(function(t){var n=e.find(function(e){return e.id===t.item.id});return n?v({},t,{item:n}):t}),count:i.filter(function(e){return e.props.visible}).length}},e.useAudio=function(t){var n=s.useState(e.UseAudioState.initial),r=n[0],a=n[1],u=s.useRef(null),i=U("duration",0),o=U("currentTime",0),l=U("volume",1),c=0===l.value,d=0===i.value?0:Math.round(o.value/i.value*100);function f(e){var t=e.currentTarget;u.current&&(u.current.currentTime=t.valueAsNumber,o.set(t.valueAsNumber))}function v(e){var t=e.currentTarget;u.current&&(u.current.volume=t.valueAsNumber,l.set(t.valueAsNumber))}return{props:{audio:{src:t,onTimeUpdate:function(e){o.set(Math.round(e.target.currentTime))},onLoadedMetadata:function(t){var n=t.currentTarget;u.current=n,i.set(Math.round(n.duration)),o.set(n.currentTime),l.set(n.volume),a(e.UseAudioState.ready)},onEnded:function(){a(e.UseAudioState.paused)},controls:!1},player:{min:0,step:1,max:i.value,value:o.value,onInput:f,style:{"--percentage":d+"%"}},volume:{min:0,max:1,value:l.value,onInput:v,style:{"--percentage":Math.floor(100*l.value)+"%"}}},actions:{play:function(){u.current&&(u.current.play(),a(e.UseAudioState.playing))},pause:function(){u.current&&(u.current.pause(),a(e.UseAudioState.paused))},mute:function(){u.current&&(u.current.volume=0,l.set(0))},unmute:function(){u.current&&(u.current.volume=1,l.set(1))},reset:function(){u.current&&(u.current.currentTime=0,u.current.pause(),o.set(0),a(e.UseAudioState.paused))},seek:f,changeVolume:v},meta:{state:r,isInitial:r===e.UseAudioState.initial,isReady:r===e.UseAudioState.ready,isPlaying:r===e.UseAudioState.playing,isPaused:r===e.UseAudioState.paused,matches:function(e){return e.some(function(e){return e===r})},percentage:{raw:d,formatted:d+"%"},currentTime:{raw:o.value,formatted:E.format(o.value)},duration:{raw:i.value,formatted:E.format(i.value)},volume:{value:l.value,raw:Math.floor(100*l.value),formatted:Math.floor(100*l.value)+"%"},muted:c}}},e.useAutofocus=x,e.useBreakpoint=function(e){var t,n=L();return(null!=(t=null==n?void 0:n.width)?t:0)<=e},e.useClickOutside=P,e.useClientSearch=function(){var e=t.useState(""),n=e[0],r=e[1];return{query:n,clear:function(){r("")},onChange:function(e){r(e.currentTarget.value)},filterFn:function(e){return""===n||(null==e?void 0:e.toLowerCase().includes(n.toLowerCase()))}}},e.useCurrentTimestamp=function(){var e=t.useState(j),n=e[0],r=e[1];return t.useEffect(function(){var e=setInterval(function(){return r(j())},C.Seconds(1).ms);return function(){return clearInterval(e)}},[]),n},e.useDebounce=function(e){var t=l.default.useState(e.value),n=t[0],r=t[1];return l.default.useEffect(function(){var t=setTimeout(function(){return r(e.value)},e.delayMs);return function(){return clearTimeout(t)}},[e.value,e.delayMs]),n},e.useDisablePullToRefresh=function(e){void 0===e&&(e=!0),t.useLayoutEffect(function(){if(e){var t=document.querySelector("html"),n=document.body,r=window.getComputedStyle(t).overscrollBehavior,a=window.getComputedStyle(n).overscrollBehavior;return n.style.overscrollBehavior="none",t.style.overscrollBehavior="none",function(){n.style.overscrollBehavior=a,t.style.overscrollBehavior=r}}},[e])},e.useDocumentTitle=function(e){l.default.useEffect(function(){document.title=e},[e])},e.useExpandableList=function(n){var r=n.length-n.max,a=n.length>n.max;function u(){return a?e.UseExpandableListState.contracted:e.UseExpandableListState.expanded}var i=t.useState(u),o=i[0],l=i[1];return t.useEffect(function(){return l(u())},[n.length,n.max]),{state:o,displayShowMore:o===e.UseExpandableListState.contracted,displayShowLess:o===e.UseExpandableListState.expanded&&a,showMore:function(){o===e.UseExpandableListState.contracted&&l(e.UseExpandableListState.expanded)},showLess:function(){o===e.UseExpandableListState.expanded&&l(e.UseExpandableListState.contracted)},numberOfExcessiveElements:r,filterFn:function(t,r){return o===e.UseExpandableListState.expanded||r<n.max}}},e.useField=U,e.useFile=function(n,r){var a,u=null!=(a=null==r?void 0:r.maxSize)?a:Infinity,i=t.useState(e.UseFileState.idle),o=i[0],l=i[1],s=t.useState(null),c=s[0],d=s[1];function f(t){var n=t.currentTarget.files;if(n&&n[0]){var r=n[0];if(!(r.size>u))return d(r),l(e.UseFileState.selected),r;l(e.UseFileState.error)}}function v(){d(null),l(e.UseFileState.idle)}var m=t.useMemo(function(){return c?URL.createObjectURL(c):void 0},[c]);function p(e){return e.some(function(e){return e===o})}return o===e.UseFileState.idle?{state:o,matches:p,isIdle:!0,isSelected:!1,isError:!1,data:null,actions:{selectFile:f,clearFile:v},label:{props:{htmlFor:n}},input:{props:{id:n,name:n}}}:o===e.UseFileState.selected?{state:o,matches:p,data:c,isIdle:!1,isSelected:!0,isError:!1,actions:{selectFile:f,clearFile:v},preview:m,label:{props:{htmlFor:n}},input:{props:{id:n,name:n}}}:{state:o,matches:p,data:null,isIdle:!1,isSelected:!1,isError:!0,actions:{selectFile:f,clearFile:v},label:{props:{htmlFor:n}},input:{props:{id:n,name:n}}}},e.useFilter=_,e.useHover=function(){var e=l.default.useRef(null),t=V(!1),n=t.enable,r=t.disable;return l.default.useEffect(function(){var t=e.current;return t&&(t.addEventListener("mouseenter",n),t.addEventListener("mouseleave",r)),function(){t&&(t.removeEventListener("mouseenter",n),t.removeEventListener("mouseleave",r))}},[]),{attach:{ref:e},isHovering:t.on}},e.useImageFileResolution=function(t){var n,r=U("resolution",H);return s.useEffect(function(){!function(){try{var n,a=function(a){if(n)return a;[e.UseFileState.error,e.UseFileState.idle].includes(t.state)&&null!==r.value.width&&null!==r.value.height&&r.clear()},u=function(){if(t.state===e.UseFileState.selected)return function(e,a){try{var u=Promise.resolve(R(t.preview)).then(function(e){var t=r.set(e);return n=1,t})}catch(e){return a()}return u&&u.then?u.then(void 0,a):u}(0,function(){var e=r.clear();return n=1,e})}();Promise.resolve(u&&u.then?u.then(a):a(u))}catch(e){return Promise.reject(e)}}()},[t.state,null==(n=t.data)?void 0:n.name]),r.value},e.useIsOnline=N,e.useIsVisible=function(e){void 0===e&&(e=q);var n=t.useState(!1),r=n[0],a=n[1];return t.useEffect(function(){var t=e.ref.current;if(z()&&t){var n=new IntersectionObserver(function(e){var t;return a(Boolean(null==(t=e[0])?void 0:t.isIntersecting))},e);return n.observe(t),function(){return n.unobserve(t)}}},[]),r},e.useItem=function(e){var n,r,a=null!=(n=null==e?void 0:e.comparisonFn)?n:B,u=t.useState(null!=(r=null==e?void 0:e.defaultItem)?r:K),i=u[0],o=u[1];return{clear:function(){return o(K)},set:function(e){return o(e)},toggle:function(e){return o(function(t){return t===K?e:a(t,e)?K:e})},value:i,isDefault:a(i,K),exists:!a(i,K),compare:function(e){return a(i,e)}}},e.useKeyHandler=function(e){var t=Object.keys(e);return function(n){var r=n.key,a=e[r];t.includes(n.key)&&e[r]&&a&&a()}},e.useKeyboardShortcurts=Y,e.useLanguage=J,e.useLanguageSelector=function(e){return _({enum:e,currentQuery:J(),name:"language",onUpdate:function(e,t){var n=T();n&&e&&t&&t!==e&&(d.default.set("accept-language",e),n.document.location.reload())}})},e.useLeavingPrompt=function(e){void 0===e&&(e=!1),l.default.useEffect(function(){if(e)return window.addEventListener("beforeunload",t),function(){return window.removeEventListener("beforeunload",t)};function t(e){e.preventDefault()}},[e])},e.useList=X,e.usePagination=function(){var e,t,n,r=U("meta",null),a=null==(e=r.value)?void 0:e.previousPage,u=null==(t=r.value)?void 0:t.nextPage,i=null==(n=r.value)?void 0:n.lastPage,o=U("page",1);return{current:o.value,last:i,controls:{firstPage:{active:!a,disabled:!1,exists:!0,go:function(){return o.set(1)},value:1},previousPage:{active:!1,disabled:!a,exists:Boolean(a),go:function(){return o.set(null!=a?a:o.value)},value:a},nextPage:{active:!1,disabled:!u,exists:Boolean(u),go:function(){return o.set(null!=u?u:o.value)},value:u},lastPage:{active:o.value===i,disabled:!u,exists:!0,go:function(){return o.set(null!=i?i:o.value)},value:i}},update:function(e){return r.set(e)}}},e.usePersistentToggle=function(e,t){void 0===t&&(t=!1);var n=V(ee.get(e,t));return s.useEffect(function(){return ee.set(e,n.on)},[e,n.on]),v({},n,{clear:function(){return ee.clear(e)}})},e.usePluralize=function(){var e=J();return function(t){return $(v({},t,{language:e}))}},e.usePreviousValue=h,e.useRateLimiter=function(e){var n=t.useRef(new te(e));return function(){var t=Date.now(),r=n.current.verify(t);return r.allowed?e.action.apply(e,[].slice.call(arguments)):null==e.fallback?void 0:e.fallback(r.remainingMs)}},e.useScroll=function(){var e=T(),t=l.default.useState(0),n=t[0],r=t[1],a=V(!1);return l.default.useLayoutEffect(function(){function t(){e&&(r(null==e?void 0:e.scrollY),e.document.body.clientHeight<e.document.body.scrollHeight?a.enable():a.disable())}return null==e||e.addEventListener("scroll",t),function(){return null==e?void 0:e.removeEventListener("scroll",t)}},[]),{actions:{goToTop:function(){e&&e.scrollTo({top:0,left:0,behavior:"smooth"})}},position:{value:n,isInitial:0===n,hasChanged:n>0},visible:a.on,hidden:a.off}},e.useScrollLock=ne,e.useSound=function(e){var t=new Audio(e);return{play:t.play.bind(t)}},e.useToastTrigger=function(){return fe()[1].add},e.useToastsContext=fe,e.useToggle=V,e.useTranslations=function(){var e=l.default.useContext(G);if(void 0===e)throw new Error("useTranslations must be used within the TranslationsContext");return function(t,n){var r=e.translations[t];return r?n?Object.entries(n).reduce(function(e,t){return e.replace("{{"+t[0]+"}}",String(t[1]))},r):r:(console.warn("[@bgord/frontend] missing translation for key: "+t),t)}},e.useUrlFilter=function(e){var t,n=T(),r=null!=(t=new URLSearchParams(null==n?void 0:n.location.search).get(e.name))?t:void 0;return _(v({onUpdate:function(t,r){if(n){var a=new URL(n.location.toString()),u=new URLSearchParams(a.search);void 0===t?u.delete(e.name):u.set(e.name,t),t!==r&&t!==r&&(a.search=u.toString(),history.pushState({},"",a.toString()))}}},e,{defaultQuery:e.defaultQuery,currentQuery:r}))},e.useVideo=function(t){var n=s.useState(e.UseVideoState.initial),r=n[0],a=n[1],u=s.useRef(null),i=U("duration",0),o=U("currentTime",0),l=U("volume",1),c=0===l.value,d=0===i.value?0:Math.round(o.value/i.value*100);function f(e){var t=e.currentTarget;u.current&&(u.current.currentTime=t.valueAsNumber,o.set(t.valueAsNumber))}function v(e){var t=e.currentTarget;u.current&&(u.current.volume=t.valueAsNumber,l.set(t.valueAsNumber))}return{props:{video:{src:t,onTimeUpdate:function(e){o.set(Math.round(e.target.currentTime))},onLoadedMetadata:function(t){var n=t.currentTarget;u.current=n,i.set(Math.round(n.duration)),o.set(n.currentTime),l.set(n.volume),a(e.UseVideoState.ready)},onEnded:function(){a(e.UseVideoState.paused)},controls:!1},player:{min:0,step:1,max:i.value,value:o.value,onInput:f,style:{"--percentage":d+"%"}},volume:{min:0,max:1,value:l.value,onInput:v,style:{"--percentage":Math.floor(100*l.value)+"%"}}},actions:{play:function(){u.current&&(u.current.play(),a(e.UseVideoState.playing))},pause:function(){u.current&&(u.current.pause(),a(e.UseVideoState.paused))},mute:function(){u.current&&(u.current.volume=0,l.set(0))},unmute:function(){u.current&&(u.current.volume=1,l.set(1))},reset:function(){u.current&&(u.current.currentTime=0,u.current.pause(),o.set(0),a(e.UseVideoState.paused))},seek:f,changeVolume:v,triggerFullscreen:function(){u.current&&u.current.requestFullscreen()}},meta:{state:r,isInitial:r===e.UseVideoState.initial,isReady:r===e.UseVideoState.ready,isPlaying:r===e.UseVideoState.playing,isPaused:r===e.UseVideoState.paused,matches:function(e){return e.some(function(e){return e===r})},percentage:{raw:d,formatted:d+"%"},currentTime:{raw:o.value,formatted:E.format(o.value)},duration:{raw:i.value,formatted:E.format(i.value)},volume:{value:l.value,raw:Math.floor(100*l.value),formatted:Math.floor(100*l.value)+"%"},muted:c}}},e.useWindowDimensions=L});
//# sourceMappingURL=bgord-frontend.umd.js.map
