var e=require("react"),t=require("tinykeys"),n=require("js-cookie"),r=require("polish-plurals"),a=require("ts-storage");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function u(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}}),t.default=e,t}var i=/*#__PURE__*/o(e),s=/*#__PURE__*/u(e),l=/*#__PURE__*/o(t),c=/*#__PURE__*/o(n),d=/*#__PURE__*/u(a);function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(a[n]=e[n]);return a}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function g(t,n){var r=e.useRef(n);return e.useEffect(function(){r.current=t}),r.current}var h,x=["children"];exports.AnimaState=void 0,(h=exports.AnimaState||(exports.AnimaState={})).appearing="appearing",h.appeared="appeared",h.hiding="hiding",h.hidden="hidden";var y,S=/*#__PURE__*/function(){function e(e){this.message=void 0,this._known=!0,this.message=e.message}return e.isServerError=function(e){return!!(e&&"object"==typeof e&&e===Object(e)&&e.hasOwnProperty("_known")&&e.hasOwnProperty("message"))},e.extract=function(t){try{return t.ok?Promise.resolve(t):Promise.resolve(t.json()).then(function(t){var n=e.isServerError(t)?t.message:"app.error.general";throw new e({message:n})})}catch(e){return Promise.reject(e)}},e.handle=function(t){try{throw new e({message:e.isServerError(t)?t.message:"app.error.general"})}catch(e){return Promise.reject(e)}},e}(),w=/*#__PURE__*/function(){function e(){}return e.format=function(e){var t=Math.floor(e/60),n=e%60;return String(t).padStart(2,"0")+":"+String(n).padStart(2,"0")},e}();function b(t,n){var r="function"==typeof n?n():n,a=e.useState(r),o=a[0],u=a[1];return e.useEffect(function(){return u(r)},[r]),{value:o,set:u,clear:function(){u(r)},label:{props:{htmlFor:t}},input:{props:{id:t,name:t}},changed:o!==r,unchanged:o==r}}function E(e){i.default.useEffect(function(){var t;e.condition&&(null==(t=e.ref.current)||t.focus())},[e.condition])}function T(){if("undefined"!=typeof window)return window}function U(){var t=e.useState({width:void 0,height:void 0}),n=t[0],r=t[1];return e.useEffect(function(){var e=T();if(e)return e.addEventListener("resize",t),t(),function(){return e.removeEventListener("resize",t)};function t(){r({width:null==e?void 0:e.innerWidth,height:null==e?void 0:e.innerHeight})}},[]),n}function L(e,t,n){i.default.useEffect(function(){if(e.current)return document.addEventListener("mousedown",r),function(){return document.removeEventListener("mousedown",r)};function r(r){var a;null!=(a=e.current)&&a.contains(r.target)||(null==n?void 0:n.some(function(e){var t;return null==(t=e.current)?void 0:t.contains(r.target)}))||t()}},[t,e,n])}function P(e){return{value:e,hours:24*e,minutes:24*e*60,seconds:24*e*60*60,ms:24*e*60*60*1e3}}function F(e){return{value:e,minutes:60*e,seconds:60*e*60,ms:60*e*60*1e3}}function A(e){return{value:e,seconds:60*e,ms:60*e*1e3}}function D(e){return{value:e,ms:1e3*e}}exports.UseAudioState=void 0,(y=exports.UseAudioState||(exports.UseAudioState={})).initial="initial",y.ready="ready",y.playing="playing",y.paused="paused";var M,I,C={Days:P,Hours:F,Minutes:A,Seconds:D};function O(){return Date.now()}function k(t){void 0===t&&(t=!1);var n=e.useState(t),r=n[0],a=n[1];return{on:r,off:!r,enable:function(){return a(!0)},disable:function(){return a(!1)},toggle:function(){return a(function(e){return!e})}}}function j(){}function R(t){var n,r,a,o,u=null!=(n=t.defaultQuery)?n:void 0,i=null!=(r=t.currentQuery)?r:void 0,s=null!=(a=t.filterFn)?a:function(e){return void 0===f||f===String(e)},l=Object.keys(t.enum),c=null!=(o=null==t?void 0:t.onUpdate)?o:j,d=e.useState(null!=i?i:u),f=d[0],p=d[1],v=g(f);return e.useEffect(function(){c(f,v)},[v,f]),{query:f,clear:function(){p(u)},onChange:function(e){var n=e.currentTarget.value,r=Boolean(t.enum[String(n)]);p(r?n:void 0)},filterFn:s,options:l,onUpdate:c,name:t.name,changed:f!==u,unchanged:f===u,label:{props:{htmlFor:t.name}},input:{props:{id:t.name,name:t.name}}}}exports.UseExpandableListState=void 0,(M=exports.UseExpandableListState||(exports.UseExpandableListState={})).contracted="contracted",M.expanded="expanded",exports.UseFileState=void 0,(I=exports.UseFileState||(exports.UseFileState={})).idle="idle",I.selected="selected",I.error="error";var _,N,V=function(e){try{if(!e)return Promise.resolve(H);var t=document.createElement("img"),n=new Promise(function(e,n){t.onload=function(){return e({width:t.width,height:t.height})},t.onerror=n});return t.src=e,Promise.resolve(n)}catch(e){return Promise.reject(e)}},H={width:null,height:null},q=function(){var e=k("undefined"==typeof navigator||"boolean"!=typeof navigator.onLine||navigator.onLine);return i.default.useEffect(function(){function t(){e.enable()}function n(){e.disable()}return window.addEventListener("online",t),window.addEventListener("offline",n),function(){window.removeEventListener("online",t),window.removeEventListener("offline",n)}},[]),e.on},z={threshold:0,root:null,rootMargin:"0%",ref:{current:null}};function B(){return"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype}function W(e,t){return e===t}function Q(e){i.default.useEffect(function(){var t=l.default(window,e);return function(){return t()}},[e])}function K(e){if(e.language===N.en){var t,n=null!=(t=e.plural)?t:e.singular+"s";return 1===e.value?e.singular:n}if(e.language===N.pl){var a,o=null!=(a=e.value)?a:1;return 1===o?e.singular:r.polishPlurals(e.singular,String(e.plural),String(e.genitive),o)}return console.warn("[@bgord/frontend] missing pluralization function for language "+e.language+"."),e.singular}exports.KeyNameEnum=void 0,(_=exports.KeyNameEnum||(exports.KeyNameEnum={})).Enter="Enter",_.Space=" ",function(e){e.en="en",e.pl="pl"}(N||(N={}));var Y=i.default.createContext({translations:{},language:"en"});function J(){var e=i.default.useContext(Y);if(void 0===e)throw new Error("useLanguage must be used within the TranslationsContext");return e.language}function $(t){var n,r,a=null!=(n=null==t?void 0:t.defaultItems)?n:[],o=null!=(r=null==t?void 0:t.comparisonFn)?r:function(e,t){return e===t},u=e.useState(a),i=u[0],s=u[1];function l(e){s(function(t){return Array.isArray(e)?[].concat(t,e):[].concat(t,[e])})}function c(e){s(function(t){return t.filter(function(t){return!o(t,e)})})}function d(e){return i.some(function(t){return o(t,e)})}return[i,{clear:function(){s([])},add:l,remove:c,toggle:function(e){d(e)?c(e):l(e)},isAdded:d,update:s}]}var G,X=/*#__PURE__*/function(){function e(){}return e.get=function(e,t){return d.get(e,t).value},e.set=function(e,t){d.set(e,t)},e.clear=function(e){d.remove(e)},e}(),Z=/*#__PURE__*/function(){function e(e){this.lastInvocationTimestamp=null,this.options=void 0,this.options=e}return e.prototype.verify=function(e){if(!this.lastInvocationTimestamp)return this.lastInvocationTimestamp=e,{allowed:!0};var t=this.lastInvocationTimestamp+this.options.limitMs;return t<=e?(this.lastInvocationTimestamp=e,{allowed:!0}):{allowed:!1,remainingMs:t-e}},e}();function ee(t){void 0===t&&(t=!0),e.useLayoutEffect(function(){if(t){var e=document.querySelector("html"),n=document.body,r=window.getComputedStyle(n).overflow,a=window.getComputedStyle(e).overflow;return n.style.overflow="hidden",e.style.overflow="hidden",function(){n.style.overflow=r,e.style.overflow=a}}},[t])}exports.UseVideoState=void 0,(G=exports.UseVideoState||(exports.UseVideoState={})).initial="initial",G.ready="ready",G.playing="playing",G.paused="paused";var te=["disable","enable","on","off","toggle"],ne=["as"];function re(e){return function(){e.forEach(function(e){return e()})}}var ae={Dimensions:function(e){var t=U();return i.default.createElement("div",f({"data-fs":"12"},e),t.width," x ",t.height)},Truncates:function(){var e=k(),t=b("length",128),n=i.default.useState(new Map),r=n[0],a=n[1];return i.default.createElement("div",{"data-display":"flex","data-cross":"center","data-gap":"6"},i.default.createElement("label",f({className:"c-label"},t.label.props),"Length"),i.default.createElement("input",f({className:"c-input",type:"number",value:t.value,onChange:function(e){return t.set(e.currentTarget.valueAsNumber)}},t.input.props)),i.default.createElement("button",{className:"c-button","data-variant":"bare",type:"button",onClick:re([function(){return e=document.querySelectorAll('[data-transform="truncate"]'),n=new Map(r),e.forEach(function(e){var r=e.textContent;n.has(e)?(e.textContent=n.get(e),n.delete(e)):(n.set(e,r),e.textContent="x".repeat(t.value))}),void a(n);var e,n},e.toggle])},e.on?"Hide truncates":"Expand truncates"))}},oe=function(e){return console.warn("Copying to clipboard not supported")},ue=/*#__PURE__*/function(){function e(){}return e.datetime=function(e,t){return void 0===t&&(t="N/A"),e?new Date(e).toLocaleString():t},e.monthDay=function(t){var n=new Date(t),r=e._padDatePart(n.getDate());return e._padDatePart(n.getMonth()+1)+"/"+r},e.form=function(t){return t?e._padDatePart(t.getFullYear())+"-"+e._padDatePart(t.getMonth()+1)+"-"+e._padDatePart(t.getDate()):e.form(new Date)},e.clockUTC=function(t){var n=new Date(t);return e._padDatePart(n.getUTCHours())+":"+e._padDatePart(n.getUTCMinutes())+":"+e._padDatePart(n.getUTCSeconds())},e.clockLocal=function(t){var n=new Date(t);return e._padDatePart(n.getHours())+":"+e._padDatePart(n.getMinutes())+":"+e._padDatePart(n.getSeconds())},e.countdown=function(t){var n=new Date(t);return e._padDatePart(n.getHours())+":"+e._padDatePart(n.getMinutes())+":"+e._padDatePart(n.getSeconds())},e.formDatetimeLocal=function(e){var t=e-A((new Date).getTimezoneOffset()).ms;return new Date(t).toISOString().slice(0,16)},e._padDatePart=function(e){return String(e).padStart(2,"0")},e}(),ie=/*#__PURE__*/function(){function e(){}return e.convertUtcToLocal=function(e){var t=(new Date).getTimezoneOffset(),n=(F(e).minutes-t)/60%24;return{value:n,label:String(n).padStart(2,"0")+":00"}},e}(),se=i.default.createContext({}),le=/*#__PURE__*/function(){function e(e,t){this.value=void 0;var n=this.getNonEmptyFilters(t),r=new URLSearchParams(n);this.value=""!==r.toString()?e+"?"+r.toString():e}return e.prototype.getNonEmptyFilters=function(e){return void 0===e?{}:Object.fromEntries(Object.entries(e).filter(function(e){return void 0!==e[1]}))},e}(),ce=/*#__PURE__*/function(){function e(e){var t,n,r,a;this.min=void 0,this.max=void 0,this.lower=void 0,this.upper=void 0;var o=null!=(t=null==(n=e.bound)?void 0:n.lower)?t:0,u=null!=(r=null==(a=e.bound)?void 0:a.upper)?r:1;if(e.max-e.min<0)throw new Error("Invalid MinMaxScaler min-max config");if(u-o<=0)throw new Error("Invalid MinMaxScaler bound config");this.min=e.min,this.max=e.max,this.lower=o,this.upper=u}return e.prototype.scale=function(e){var t=this.min,n=this.max,r=this.lower,a=this.upper;if(e<t||e>n)throw new Error("Value out of min/max range");return t===n?{actual:e,scaled:(r+a)/2,isMin:e===t,isMax:e===n}:{actual:e,scaled:Number(((e-t)/(n-t)*(a-r)+r).toFixed(2)),isMin:e===t,isMax:e===n}},e.getMinMax=function(e){if(0===e.length)throw new Error("An empty array supplied");return{min:Math.min.apply(Math,e),max:Math.max.apply(Math,e)}},e}(),de=/*#__PURE__*/function(){function e(){}return e.infinite=function(e){var t,n,r;return null!=(t=null==(n=e.data)||null==(r=n.pages)?void 0:r.flat().map(function(e){return e.result}).flat())?t:[]},e}();function fe(e){return e+"px"}de.empty={result:[],meta:{exhausted:!0}};var pe=/*#__PURE__*/function(){function e(){}return e.format=function(t,n){return void 0===n&&(n=e.DEFAULT_SEPARATOR),t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,n)},e}();pe.DEFAULT_SEPARATOR=" ";var ve=i.default.createContext(void 0);function me(){var e=i.default.useContext(ve);if(void 0===e)throw new Error("useToasts must be used within the ToastsContextProvider");return e}exports.API=function(e,t){return fetch(e,f({mode:"same-origin",headers:{"Content-Type":"application/json","time-zone-offset":(new Date).getTimezoneOffset().toString()},redirect:"follow"},t)).then(S.extract).catch(S.handle)},exports.AUDIO_DEFAULT_VOLUME=1,exports.Anima=function(e){var t,n=null!=(t=e.duration)?t:300,r=i.default.useState(function(){return e.visible?e.isInitial?exports.AnimaState.appeared:exports.AnimaState.appearing:exports.AnimaState.hidden}),a=r[0],o=r[1],u=g(a);return i.default.useEffect(function(){if(!e.isInitial)if(e.visible)o(exports.AnimaState.appearing),setTimeout(function(){return o(exports.AnimaState.appeared)},100);else{if(!u)return;o(exports.AnimaState.hiding),setTimeout(function(){return o(exports.AnimaState.hidden)},n)}},[e.visible]),a===exports.AnimaState.hidden?null:i.default.cloneElement(e.children,{"data-anima":a,"data-anima-effect":e.effect,style:f({"--duration":n+"ms"},e.children.props.style)})},exports.AnimaList=function(e){var t=p(e,x),n=i.default.useState(!0),r=n[0],a=n[1];return i.default.useEffect(function(){return a(!1)},[]),i.default.createElement("ul",f({},t),e.children.map(function(e){return i.default.cloneElement(e,{isInitial:r})}))},exports.DateFormatter=ue,exports.Days=P,exports.DevTools=ae,exports.Dialog=function(e){var t=e.disable,n=p(e,te),r=i.default.useRef(null);return i.default.useEffect(function(){var t,n;e.on?null==(t=r.current)||t.showModal():null==(n=r.current)||n.close()},[e.on]),Q({Escape:t}),E({ref:r,condition:e.on}),ee(e.on),L(r,t),i.default.createElement("dialog",f({ref:r,tabIndex:0,"data-display":e.on?"flex":"none","data-direction":"column","data-mx":"auto","data-p":"24","data-position":"absolute","data-z":"2","data-bg":"white","data-br":"4","data-bc":"gray-300","data-bw":"1","data-backdrop":"black"},n))},exports.DurationFormatter=w,exports.FeatureFlagsContextProvider=function(e){return i.default.createElement(se.Provider,{value:e.value},e.children)},exports.FilterUrl=le,exports.HourFormatter=ie,exports.Hours=F,exports.MinMaxScaler=ce,exports.Minutes=A,exports.OfflineIndicator=function(e){return q()?null:i.default.createElement(i.default.Fragment,null,e.children)},exports.OutboundLink=function(e){var t=e.as,n=p(e,ne);return i.default.createElement(t||"a",f({target:"_blank",rel:"noreferer noopener"},n))},exports.Pagination=de,exports.Rhythm=function(e){return void 0===e&&(e=12),{times:function(t){var n=e*t,r={height:{height:fe(n)},minHeight:{minHeight:fe(n)},maxHeight:{maxHeight:fe(n)},width:{width:fe(n)},minWidth:{minWidth:fe(n)},maxWidth:{maxWidth:fe(n)},square:{height:fe(n),width:fe(n)}},a={height:{style:{height:fe(n)}},minHeight:{style:{minHeight:fe(n)}},maxHeight:{style:{maxHeight:fe(n)}},width:{style:{width:fe(n)}},minWidth:{style:{minWidth:fe(n)}},maxWidth:{style:{maxWidth:fe(n)}},square:{style:{height:fe(n),width:fe(n)}}};return f({px:fe(n),raw:n,style:a},r)}}},exports.SafeLocalStorage=X,exports.Seconds=D,exports.ServerError=S,exports.ThousandsSeparator=pe,exports.Time=C,exports.ToastsContextProvider=function(e){var t,n,r,a,o=(n=null!=(t=null==e?void 0:e.timeout)?t:5e3,r=$({comparisonFn:function(e,t){return e.id===t.id}}),a=r[1],[[].concat(r[0]).reverse(),{add:function(e){var t=f({},e,{id:String(Date.now())});a.add(t),setTimeout(function(){return a.remove(t)},n)},remove:a.remove,clear:a.clear}]);return i.default.createElement(ve.Provider,{value:[o[0],o[1]]},e.children)},exports.TranslationsContextProvider=function(e){return i.default.createElement(Y.Provider,{value:e.value},e.children)},exports.VIDEO_DEFAULT_VOLUME=1,exports.copyToClipboard=function(e){try{var t,n,r=null!=(t=e.onFailure)?t:oe,a=null!=(n=e.onSuccess)?n:j;navigator.clipboard||r();var o=function(t,n){try{var r=Promise.resolve(navigator.clipboard.writeText(e.text)).then(function(){a()})}catch(e){return n(e)}return r&&r.then?r.then(void 0,n):r}(0,function(e){r(e)});return Promise.resolve(o&&o.then?o.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},exports.defaultUseIsVisibleConfig=z,exports.emptyImageResolution=H,exports.exec=re,exports.getAnimaProps=function(e){return{"data-anima":e["data-anima"],"data-anima-effect":e["data-anima-effect"],style:e.style}},exports.getCurrentTimestamp=O,exports.getImageResolution=V,exports.getSafeWindow=T,exports.isClient=function(){return!T()},exports.isIntersectionObserverSupported=B,exports.noop=j,exports.pluralize=K,exports.useAnimaList=function(e,t){for(var n,r,a=null!=(n=null==t?void 0:t.direction)?n:"head",o=i.default.useState(e.map(function(e){return{item:e,props:{visible:!0}}})),u=o[0],s=o[1],l=[],c=function(){var e=r.value;!u.map(function(e){return e.item}).some(function(t){return e.id===t.id})&&l.push(e)},d=m(e);!(r=d()).done;)c();i.default.useEffect(function(){0!==l.length&&(s("head"===a?function(e){return[].concat(l.map(function(e){return{item:e,props:{visible:!0}}}),e)}:function(e){return[].concat(e,l.map(function(e){return{item:e,props:{visible:!0}}}))}),l=[])},[l.length,a]);for(var p,v=[],g=function(){var t=p.value.item;e.every(function(e){return e.id!==t.id})&&v.push(t)},h=m(u);!(p=h()).done;)g();return i.default.useEffect(function(){0!==v.length&&(s(function(e){return e.map(function(e){return v.some(function(t){return t.id===e.item.id})?f({},e,{props:{visible:!1}}):e})}),v=[])},[v.length]),{items:u.map(function(t){var n=e.find(function(e){return e.id===t.item.id});return n?f({},t,{item:n}):t}),count:u.filter(function(e){return e.props.visible}).length}},exports.useAudio=function(e){var t=s.useState(exports.UseAudioState.initial),n=t[0],r=t[1],a=s.useRef(null),o=b("duration",0),u=b("currentTime",0),i=b("volume",1),l=0===i.value,c=0===o.value?0:Math.round(u.value/o.value*100);function d(e){var t=e.currentTarget;a.current&&(a.current.currentTime=t.valueAsNumber,u.set(t.valueAsNumber))}function f(e){var t=e.currentTarget;a.current&&(a.current.volume=t.valueAsNumber,i.set(t.valueAsNumber))}return{props:{audio:{src:e,onTimeUpdate:function(e){u.set(Math.round(e.target.currentTime))},onLoadedMetadata:function(e){var t=e.currentTarget;a.current=t,o.set(Math.round(t.duration)),u.set(t.currentTime),i.set(t.volume),r(exports.UseAudioState.ready)},onEnded:function(){r(exports.UseAudioState.paused)},controls:!1},player:{min:0,step:1,max:o.value,value:u.value,onInput:d,style:{"--percentage":c+"%"}},volume:{min:0,max:1,step:.01,value:i.value,onInput:f,style:{"--percentage":Math.floor(100*i.value)+"%"}}},actions:{play:function(){a.current&&(a.current.play(),r(exports.UseAudioState.playing))},pause:function(){a.current&&(a.current.pause(),r(exports.UseAudioState.paused))},mute:function(){a.current&&(a.current.volume=0,i.set(0))},unmute:function(){a.current&&(a.current.volume=1,i.set(1))},reset:function(){a.current&&(a.current.currentTime=0,a.current.pause(),u.set(0),r(exports.UseAudioState.paused))},seek:d,changeVolume:f},meta:{state:n,isInitial:n===exports.UseAudioState.initial,isReady:n===exports.UseAudioState.ready,isPlaying:n===exports.UseAudioState.playing,isPaused:n===exports.UseAudioState.paused,matches:function(e){return e.some(function(e){return e===n})},percentage:{raw:c,formatted:c+"%"},currentTime:{raw:u.value,formatted:w.format(u.value)},duration:{raw:o.value,formatted:w.format(o.value)},volume:{value:i.value,raw:Math.floor(100*i.value),formatted:Math.floor(100*i.value)+"%"},muted:l}}},exports.useAutofocus=E,exports.useBreakpoint=function(e){var t,n=U();return(null!=(t=null==n?void 0:n.width)?t:0)<=e},exports.useClickOutside=L,exports.useClientSearch=function(){var t=e.useState(""),n=t[0],r=t[1];return{query:n,clear:function(){r("")},onChange:function(e){r(e.currentTarget.value)},filterFn:function(e){return""===n||(null==e?void 0:e.toLowerCase().includes(n.toLowerCase()))},changed:""!==n,unchanged:""===n}},exports.useCurrentTimestamp=function(){var t=e.useState(O),n=t[0],r=t[1];return e.useEffect(function(){var e=setInterval(function(){return r(O())},C.Seconds(1).ms);return function(){return clearInterval(e)}},[]),n},exports.useDebounce=function(e){var t=i.default.useState(e.value),n=t[0],r=t[1];return i.default.useEffect(function(){var t=setTimeout(function(){return r(e.value)},e.delayMs);return function(){return clearTimeout(t)}},[e.value,e.delayMs]),n},exports.useDesignMode=function(t){var n=k(t),r=T();return e.useEffect(function(){r&&(r.document.designMode=n.on?"on":"off")},[n.on]),n},exports.useDisablePullToRefresh=function(t){void 0===t&&(t=!0),e.useLayoutEffect(function(){if(t){var e=document.querySelector("html"),n=document.body,r=window.getComputedStyle(e).overscrollBehavior,a=window.getComputedStyle(n).overscrollBehavior;return n.style.overscrollBehavior="none",e.style.overscrollBehavior="none",function(){n.style.overscrollBehavior=a,e.style.overscrollBehavior=r}}},[t])},exports.useDocumentTitle=function(e){i.default.useEffect(function(){document.title=e},[e])},exports.useExpandableList=function(t){var n=t.length-t.max,r=t.length>t.max;function a(){return r?exports.UseExpandableListState.contracted:exports.UseExpandableListState.expanded}var o=e.useState(a),u=o[0],i=o[1];return e.useEffect(function(){return i(a())},[t.length,t.max]),{state:u,displayShowMore:u===exports.UseExpandableListState.contracted,displayShowLess:u===exports.UseExpandableListState.expanded&&r,actions:{showMore:function(){u===exports.UseExpandableListState.contracted&&i(exports.UseExpandableListState.expanded)},showLess:function(){u===exports.UseExpandableListState.expanded&&i(exports.UseExpandableListState.contracted)}},numberOfExcessiveElements:n,filterFn:function(e,n){return u===exports.UseExpandableListState.expanded||n<t.max}}},exports.useFeatureFlag=function(e){var t=i.default.useContext(se);if(void 0===t)throw new Error("useFeatureFlag must be used within the FeatureFlagsContext");return"yes"===t[e]},exports.useFeatureFlags=function(){var e=i.default.useContext(se);if(void 0===e)throw new Error("useFeatureFlags must be used within the FeatureFlagsContext");return e},exports.useField=b,exports.useFile=function(t,n){var r,a=null!=(r=null==n?void 0:n.maxSize)?r:Infinity,o=e.useState(0),u=o[0],i=o[1],s=e.useState(exports.UseFileState.idle),l=s[0],c=s[1],d=e.useState(null),f=d[0],p=d[1];function v(e){var t=e.currentTarget.files;if(t&&t[0]){var n=t[0];if(!(n.size>a))return p(n),c(exports.UseFileState.selected),n;c(exports.UseFileState.error)}}function m(){i(function(e){return e+1}),p(null),c(exports.UseFileState.idle)}var g=e.useMemo(function(){return f?URL.createObjectURL(f):void 0},[f]);function h(e){return e.some(function(e){return e===l})}return l===exports.UseFileState.idle?{state:l,matches:h,isIdle:!0,isSelected:!1,isError:!1,data:null,actions:{selectFile:v,clearFile:m},label:{props:{htmlFor:t}},input:{props:{id:t,name:t,multiple:!1,key:u}}}:l===exports.UseFileState.selected?{state:l,matches:h,data:f,isIdle:!1,isSelected:!0,isError:!1,actions:{selectFile:v,clearFile:m},preview:g,label:{props:{htmlFor:t}},input:{props:{id:t,name:t,multiple:!1,key:u}}}:{state:l,matches:h,data:null,isIdle:!1,isSelected:!1,isError:!0,actions:{selectFile:v,clearFile:m},label:{props:{htmlFor:t}},input:{props:{id:t,name:t,multiple:!1,key:u}}}},exports.useFilter=R,exports.useHover=function(e){var t,n=null==(t=null==e?void 0:e.enabled)||t,r=i.default.useRef(null),a=k(!1),o=a.enable,u=a.disable;return i.default.useEffect(function(){var e=r.current;return e&&n&&(e.addEventListener("mouseenter",o),e.addEventListener("mouseleave",u)),function(){e&&n&&(e.removeEventListener("mouseenter",o),e.removeEventListener("mouseleave",u))}},[]),{attach:{ref:r},isHovering:a.on&&n}},exports.useImageFileResolution=function(e){var t,n=b("resolution",H);return s.useEffect(function(){!function(){try{var t,r=function(r){if(t)return r;[exports.UseFileState.error,exports.UseFileState.idle].includes(e.state)&&null!==n.value.width&&null!==n.value.height&&n.clear()},a=function(){if(e.state===exports.UseFileState.selected)return function(r,a){try{var o=Promise.resolve(V(e.preview)).then(function(e){var r=n.set(e);return t=1,r})}catch(e){return a()}return o&&o.then?o.then(void 0,a):o}(0,function(){var e=n.clear();return t=1,e})}();Promise.resolve(a&&a.then?a.then(r):r(a))}catch(e){return Promise.reject(e)}}()},[e.state,null==(t=e.data)?void 0:t.name]),n.value},exports.useIsOnline=q,exports.useIsVisible=function(t){void 0===t&&(t=z);var n=e.useState(!1),r=n[0],a=n[1];return e.useEffect(function(){var e=t.ref.current;if(B()&&e){var n=new IntersectionObserver(function(e){var t;return a(Boolean(null==(t=e[0])?void 0:t.isIntersecting))},t);return n.observe(e),function(){return n.unobserve(e)}}},[]),r},exports.useItem=function(t){var n,r,a=null!=(n=null==t?void 0:t.comparisonFn)?n:W,o=e.useState(null!=(r=null==t?void 0:t.defaultItem)?r:null),u=o[0],i=o[1];return{clear:function(){return i(null)},set:function(e){return i(e)},toggle:function(e){return i(function(t){return null===t?e:a(t,e)?null:e})},value:u,isDefault:a(u,null),exists:!a(u,null),compare:function(e){return a(u,e)}}},exports.useKeyHandler=function(e){var t=Object.keys(e);return function(n){var r=n.key,a=e[r];t.includes(n.key)&&e[r]&&a&&a()}},exports.useKeyboardShortcuts=Q,exports.useLanguage=J,exports.useLanguageSelector=function(e){return R({enum:e,currentQuery:J(),name:"language",onUpdate:function(e,t){var n=T();n&&e&&t&&t!==e&&(c.default.set("accept-language",e),n.document.location.reload())}})},exports.useLeavingPrompt=function(e){void 0===e&&(e=!1),i.default.useEffect(function(){if(e)return window.addEventListener("beforeunload",t),function(){return window.removeEventListener("beforeunload",t)};function t(e){e.preventDefault()}},[e])},exports.useList=$,exports.usePagination=function(){var e,t,n,r=b("meta",null),a=null==(e=r.value)?void 0:e.previousPage,o=null==(t=r.value)?void 0:t.nextPage,u=null==(n=r.value)?void 0:n.lastPage,i=b("page",1);return{current:i.value,last:u,controls:{firstPage:{active:!a,disabled:!1,exists:!0,go:function(){return i.set(1)},value:1},previousPage:{active:!1,disabled:!a,exists:Boolean(a),go:function(){return i.set(null!=a?a:i.value)},value:a},nextPage:{active:!1,disabled:!o,exists:Boolean(o),go:function(){return i.set(null!=o?o:i.value)},value:o},lastPage:{active:i.value===u,disabled:!o,exists:!0,go:function(){return i.set(null!=u?u:i.value)},value:u}},update:function(e){return r.set(e)}}},exports.usePersistentToggle=function(e,t){void 0===t&&(t=!1);var n=k(X.get(e,t));return s.useEffect(function(){return X.set(e,n.on)},[e,n.on]),f({},n,{clear:function(){return X.clear(e)}})},exports.usePluralize=function(){var e=J();return function(t){return K(f({},t,{language:e}))}},exports.usePreviousValue=g,exports.useRateLimiter=function(t){var n=e.useRef(new Z(t));return function(){var e=Date.now(),r=n.current.verify(e);return r.allowed?t.action.apply(t,[].slice.call(arguments)):null==t.fallback?void 0:t.fallback(r.remainingMs)}},exports.useReordering=function(e){var t,n=null==(t=e.enabled)||t,r=i.default.useState(e.initialItems),a=r[0],o=r[1];i.default.useEffect(function(){return o(e.initialItems)},[JSON.stringify(e.initialItems)]);var u=i.default.useRef(null),s=i.default.useState(null),l=s[0],c=s[1],d=i.default.useState(null),f=d[0],p=d[1];function v(e){return function(t){var n;c(e),u.current=null!=(n=a[e])?n:null,null!=t&&t.dataTransfer&&!t.currentTarget.parentNode&&(t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("text/html",t.currentTarget.parentNode),t.dataTransfer.setDragImage(t.currentTarget.parentNode,20,20))}}function m(e){return function(t){t.preventDefault();var n=a[e];if(p(e),u.current!==n&&u.current){var r=a.filter(function(e){return e!==u.current});r.splice(e,0,u.current),o(r)}}}function g(t){return function(n){var r;null!==l&&null!==f&&l!==f&&e.callback({correlationId:e.correlationId,id:null==(r=a[t])?void 0:r.id,item:a[t],to:f}),c(null),u.current=null,p(null)}}var h=n?u.current?"grabbing":"grab":"auto";return{items:a,enabled:n,props:{item:function(e){return{onDragOver:m(e)}},handle:function(e){return{onDragStart:v(e),onDragEnd:g(e),draggable:n,style:{cursor:h}}}}}},exports.useScroll=function(){var e=T(),t=i.default.useState(0),n=t[0],r=t[1],a=k(!1);return i.default.useLayoutEffect(function(){function t(){e&&(r(null==e?void 0:e.scrollY),e.document.body.clientHeight<e.document.body.scrollHeight?a.enable():a.disable())}return null==e||e.addEventListener("scroll",t),function(){return null==e?void 0:e.removeEventListener("scroll",t)}},[]),{actions:{goToTop:function(){e&&e.scrollTo({top:0,left:0,behavior:"smooth"})}},position:{value:n,isInitial:0===n,hasChanged:n>0},visible:a.on,hidden:a.off}},exports.useScrollLock=ee,exports.useSound=function(e){var t=new Audio(e);return{play:t.play.bind(t)}},exports.useToastTrigger=function(){return me()[1].add},exports.useToastsContext=me,exports.useToggle=k,exports.useTranslations=function(){var e=i.default.useContext(Y);if(void 0===e)throw new Error("useTranslations must be used within the TranslationsContext");return function(t,n){var r=e.translations[t];return r?n?Object.entries(n).reduce(function(e,t){return e.replace("{{"+t[0]+"}}",String(t[1]))},r):r:(console.warn("[@bgord/frontend] missing translation for key: "+t),t)}},exports.useUrlFilter=function(e){var t,n=T(),r=null!=(t=new URLSearchParams(null==n?void 0:n.location.search).get(e.name))?t:void 0;return R(f({onUpdate:function(t,r){if(n){var a=new URL(n.location.toString()),o=new URLSearchParams(a.search);void 0===t?o.delete(e.name):o.set(e.name,t),t!==r&&t!==r&&(a.search=o.toString(),history.pushState({},"",a.toString()))}}},e,{defaultQuery:e.defaultQuery,currentQuery:r}))},exports.useVideo=function(e){var t=s.useState(exports.UseVideoState.initial),n=t[0],r=t[1],a=s.useRef(null),o=b("duration",0),u=b("currentTime",0),i=b("volume",1),l=0===i.value,c=0===o.value?0:Math.round(u.value/o.value*100);function d(e){var t=e.currentTarget;a.current&&(a.current.currentTime=t.valueAsNumber,u.set(t.valueAsNumber))}function f(e){var t=e.currentTarget;a.current&&(a.current.volume=t.valueAsNumber,i.set(t.valueAsNumber))}return{props:{video:{src:e,onTimeUpdate:function(e){u.set(Math.round(e.target.currentTime))},onLoadedMetadata:function(e){var t=e.currentTarget;a.current=t,o.set(Math.round(t.duration)),u.set(t.currentTime),i.set(t.volume),r(exports.UseVideoState.ready)},onEnded:function(){r(exports.UseVideoState.paused)},controls:!1},player:{min:0,step:1,max:o.value,value:u.value,onInput:d,style:{"--percentage":c+"%"}},volume:{min:0,max:1,step:.01,value:i.value,onInput:f,style:{"--percentage":Math.floor(100*i.value)+"%"}}},actions:{play:function(){a.current&&(a.current.play(),r(exports.UseVideoState.playing))},pause:function(){a.current&&(a.current.pause(),r(exports.UseVideoState.paused))},mute:function(){a.current&&(a.current.volume=0,i.set(0))},unmute:function(){a.current&&(a.current.volume=1,i.set(1))},reset:function(){a.current&&(a.current.currentTime=0,a.current.pause(),u.set(0),r(exports.UseVideoState.paused))},seek:d,changeVolume:f,triggerFullscreen:function(){a.current&&a.current.requestFullscreen()}},meta:{state:n,isInitial:n===exports.UseVideoState.initial,isReady:n===exports.UseVideoState.ready,isPlaying:n===exports.UseVideoState.playing,isPaused:n===exports.UseVideoState.paused,matches:function(e){return e.some(function(e){return e===n})},percentage:{raw:c,formatted:c+"%"},currentTime:{raw:u.value,formatted:w.format(u.value)},duration:{raw:o.value,formatted:w.format(o.value)},volume:{value:i.value,raw:Math.floor(100*i.value),formatted:Math.floor(100*i.value)+"%"},muted:l}}},exports.useWindowDimensions=U;
//# sourceMappingURL=bgord-frontend.cjs.map
