!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("tinykeys"),require("ts-storage")):"function"==typeof define&&define.amd?define(["exports","react","tinykeys","ts-storage"],t):t((e||self).frontend={},e.react,e.tinykeys,e.tsStorage)}(this,function(e,t,n,r){function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}}),t.default=e,t}var i=/*#__PURE__*/u(t),a=/*#__PURE__*/o(t),l=/*#__PURE__*/u(n),c=/*#__PURE__*/o(r);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,u={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(u[n]=e[n]);return u}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,n){var r=t.useRef(n);return t.useEffect(function(){r.current=e}),r.current}var p,g=["children"];e.AnimaState=void 0,(p=e.AnimaState||(e.AnimaState={})).appearing="appearing",p.appeared="appeared",p.hidding="hidding",p.hidden="hidden";var h=/*#__PURE__*/function(){function e(e){this.message=void 0,this._known=!0,this.message=e.message}return e.isServerError=function(e){return!!(e&&"object"==typeof e&&e===Object(e)&&e.hasOwnProperty("_known")&&e.hasOwnProperty("message"))},e.extract=function(t){try{return t.ok?Promise.resolve(t):Promise.resolve(t.json()).then(function(t){var n=e.isServerError(t)?t.message:"app.error.general";throw new e({message:n})})}catch(e){return Promise.reject(e)}},e.handle=function(t){try{throw new e({message:e.isServerError(t)?t.message:"app.error.general"})}catch(e){return Promise.reject(e)}},e}(),y=/*#__PURE__*/function(){function e(){}return e.format=function(e){var t=Math.floor(e/60),n=e%60;return String(t).padStart(2,"0")+":"+String(n).padStart(2,"0")},e}();function b(e,n){var r="function"==typeof n?n():n,u=t.useState(r),o=u[0],i=u[1];return{value:o,set:i,clear:function(){i(r)},label:{props:{htmlFor:e}},input:{props:{id:e,name:e}},changed:o!==r,unchanged:o==r}}function w(e){i.default.useEffect(function(){var t;e.condition&&(null==(t=e.ref.current)||t.focus())},[e.condition])}function S(){if("undefined"!=typeof window)return window}function E(){var e=t.useState({width:void 0,height:void 0}),n=e[0],r=e[1];return t.useEffect(function(){var e=S();if(e)return e.addEventListener("resize",t),t(),function(){return e.removeEventListener("resize",t)};function t(){r({width:null==e?void 0:e.innerWidth,height:null==e?void 0:e.innerHeight})}},[]),n}function x(e){return{value:e,toHours:function(){return 24*e},toMinutes:function(){return 24*e*60},toSeconds:function(){return 24*e*60*60},toMs:function(){return 24*e*60*60*1e3}}}function L(e){return{value:e,toMinutes:function(){return 60*e},toSeconds:function(){return 60*e*60},toMs:function(){return 60*e*60*1e3}}}function T(e){return{value:e,toSeconds:function(){return 60*e},toMs:function(){return 60*e*1e3}}}function P(e){return{value:e,toMs:function(){return 1e3*e}}}var U,F,D={Days:x,Hours:L,Minutes:T,Seconds:P};function I(){return Date.now()}function O(){}function A(e){var n,r,u,o,i=null!=(n=e.defaultQuery)?n:void 0,a=null!=(r=e.currentQuery)?r:void 0,l=null!=(u=e.filterFn)?u:function(e){return void 0===d||d===String(e)},c=Object.keys(e.enum),s=null!=(o=null==e?void 0:e.onUpdate)?o:O,f=t.useState(null!=a?a:i),d=f[0],v=f[1],p=m(d);return t.useEffect(function(){s(d,p)},[p,d]),{query:d,clear:function(){v(i)},onChange:function(t){var n=t.currentTarget.value,r=Boolean(e.enum[String(n)]);v(r?n:void 0)},filterFn:l,options:c,onUpdate:s,label:e.label}}function M(e){void 0===e&&(e=!1);var n=t.useState(e),r=n[0],u=n[1];return{on:r,off:!r,enable:function(){return u(!0)},disable:function(){return u(!1)},toggle:function(){return u(function(e){return!e})}}}e.UseExpandableListState=void 0,(U=e.UseExpandableListState||(e.UseExpandableListState={})).contracted="contracted",U.expanded="expanded",e.UseFileState=void 0,(F=e.UseFileState||(e.UseFileState={})).idle="idle",F.selected="selected",F.error="error";var C,j=function(e){try{if(!e)return Promise.resolve(k);var t=document.createElement("img"),n=new Promise(function(e,n){t.onload=function(){return e({width:t.width,height:t.height})},t.onerror=n});return t.src=e,Promise.resolve(n)}catch(e){return Promise.reject(e)}},k={width:null,height:null},_=function(){var e=M("undefined"==typeof navigator||"boolean"!=typeof navigator.onLine||navigator.onLine);return i.default.useEffect(function(){function t(){e.enable()}function n(){e.disable()}return window.addEventListener("online",t),window.addEventListener("offline",n),function(){window.removeEventListener("online",t),window.removeEventListener("offline",n)}},[]),e.on},R={threshold:0,root:null,rootMargin:"0%",ref:{current:null}};function H(){return"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype}function z(e){i.default.useEffect(function(){var t=l.default(window,e);return function(){return t()}},[e])}function N(e){var n,r,u=null!=(n=null==e?void 0:e.defaultItems)?n:[],o=null!=(r=null==e?void 0:e.comparisonFn)?r:function(e,t){return e===t},i=t.useState(u),a=i[0],l=i[1];function c(e){l(function(t){return Array.isArray(e)?[].concat(t,e):[].concat(t,[e])})}function s(e){l(function(t){return t.filter(function(t){return!o(t,e)})})}function f(e){return a.some(function(t){return o(t,e)})}return[a,{clear:function(){l([])},add:c,remove:s,toggle:function(e){f(e)?s(e):c(e)},isAdded:f,update:l}]}e.KeyNameEnum=void 0,(C=e.KeyNameEnum||(e.KeyNameEnum={})).Enter="Enter",C.Space=" ";var B=/*#__PURE__*/function(){function e(){}return e.get=function(e,t){return c.get(e,t).value},e.set=function(e,t){c.set(e,t)},e.clear=function(e){c.remove(e)},e}(),q=/*#__PURE__*/function(){function e(e){this.lastInvocationTimestamp=null,this.options=void 0,this.options=e}return e.prototype.verify=function(e){if(!this.lastInvocationTimestamp)return this.lastInvocationTimestamp=e,{allowed:!0};var t=this.lastInvocationTimestamp+this.options.limitMs;return t<=e?(this.lastInvocationTimestamp=e,{allowed:!0}):{allowed:!1,remainingMs:t-e}},e}();function W(e){void 0===e&&(e=!0),t.useLayoutEffect(function(){if(e){var t=document.querySelector("html"),n=document.body,r=window.getComputedStyle(n).overflow,u=window.getComputedStyle(t).overflow;return n.style.overflow="hidden",t.style.overflow="hidden",function(){n.style.overflow=r,t.style.overflow=u}}},[e])}var K=["disable","enable","on","off","toggle"],Q=["as"],V=function(e){return console.warn("Copying to clipboard not supported")},Y=/*#__PURE__*/function(){function e(){}return e.datetime=function(e,t){return void 0===t&&(t="N/A"),e?new Date(e).toLocaleString():t},e.monthDay=function(t){var n=new Date(t),r=e._padDatePart(n.getDate());return e._padDatePart(n.getMonth()+1)+"/"+r},e.form=function(t){return t?e._padDatePart(t.getFullYear())+"-"+e._padDatePart(t.getMonth()+1)+"-"+e._padDatePart(t.getDate()):e.form(new Date)},e.clockUTC=function(t){var n=new Date(t);return e._padDatePart(n.getUTCHours())+":"+e._padDatePart(n.getUTCMinutes())+":"+e._padDatePart(n.getUTCSeconds())},e.clockLocal=function(t){var n=new Date(t);return e._padDatePart(n.getHours())+":"+e._padDatePart(n.getMinutes())+":"+e._padDatePart(n.getSeconds())},e.countdown=function(t){var n=new Date(t);return e._padDatePart(n.getHours())+":"+e._padDatePart(n.getMinutes())+":"+e._padDatePart(n.getSeconds())},e._padDatePart=function(e){return String(e).padStart(2,"0")},e}(),$=/*#__PURE__*/function(){function e(){}return e.convertUtcToLocal=function(e){var t=(new Date).getTimezoneOffset(),n=(L(e).toMinutes()-t)/60%24;return{value:n,label:String(n).padStart(2,"0")+":00"}},e}(),G=/*#__PURE__*/function(){function e(e,t){this.value=void 0;var n=new URLSearchParams(this.getNonEmptyFilters(t));this.value=""!==n.toString()?e+"?"+n.toString():e}return e.prototype.getNonEmptyFilters=function(e){return void 0===e?{}:Object.fromEntries(Object.entries(e).filter(function(e){return void 0!==e[1]}))},e}(),J=/*#__PURE__*/function(){function e(){}return e.extract=function(e){var t,n,r;return null!=(t=null==(n=e.data)||null==(r=n.pages)?void 0:r.flat().map(function(e){return e.result}).flat())?t:[]},e}();function X(e){var t;if("en"!==e.language)return console.warn("[@bgord/frontend] missing pluralization fuction for language "+e.language+"."),e.singular;var n=null!=(t=e.plural)?t:e.singular+"s";return 1===e.value?e.singular:n}J.empty={result:[],meta:{exhausted:!0}};var Z=/*#__PURE__*/function(){function e(){}return e.base=function(e){return void 0===e&&(e=12),{times:function(t){var n=e*t;return{px:n+"px",raw:n,height:{height:n+"px"},minHeight:{minHeight:n+"px"},maxHeight:{maxHeight:n+"px"},width:{width:n+"px"},minWidth:{minWidth:n+"px"},maxWidth:{maxWidth:n+"px"}}}}},e}(),ee=i.default.createContext(void 0);function te(){var e=i.default.useContext(ee);if(void 0===e)throw new Error("useToasts must be used within the ToastsContextProvider");return e}var ne=i.default.createContext({translations:{},language:"en"});function re(){var e=i.default.useContext(ne);if(void 0===e)throw new Error("useLanguage must be used within the TranslationsContext");return e.language}e.API=function(e,t){return fetch(e,s({mode:"same-origin",headers:{"Content-Type":"application/json","time-zone-offset":(new Date).getTimezoneOffset().toString()},redirect:"follow"},t)).then(h.extract).catch(h.handle)},e.AUDIO_DEFAULT_VOLUME=1,e.Anima=function(t){var n,r=null!=(n=t.duration)?n:300,u=i.default.useState(function(){return t.visible?t.isInitial?e.AnimaState.appeared:e.AnimaState.appearing:e.AnimaState.hidden}),o=u[0],a=u[1],l=m(o);return i.default.useEffect(function(){if(!t.isInitial)if(t.visible)a(e.AnimaState.appearing),setTimeout(function(){return a(e.AnimaState.appeared)},100);else{if(!l)return;a(e.AnimaState.hidding),setTimeout(function(){return a(e.AnimaState.hidden)},r)}},[t.visible]),o===e.AnimaState.hidden?null:i.default.cloneElement(t.children,{"data-anima":o,"data-anima-effect":t.effect,style:s({"--duration":r+"ms"},t.children.props.style)})},e.AnimaList=function(e){var t=f(e,g),n=i.default.useState(!0),r=n[0],u=n[1];return i.default.useEffect(function(){return u(!1)},[]),i.default.createElement("ul",s({},t),e.children.map(function(e){return i.default.cloneElement(e,{isInitial:r})}))},e.DateFormatter=Y,e.Days=x,e.Dialog=function(e){var t=e.disable,n=f(e,K),r=i.default.useRef(null);return i.default.useEffect(function(){var t,n;e.on?null==(t=r.current)||t.showModal():null==(n=r.current)||n.close()},[e.on]),z({Escape:t}),w({ref:r,condition:e.on}),W(e.on),i.default.createElement("dialog",s({ref:r,tabIndex:0,"data-display":e.on?"flex":"none","data-direction":"column","data-mx":"auto","data-p":"24","data-position":"absolute","data-z":"2","data-bg":"white","data-br":"4","data-bc":"gray-300","data-bw":"1","data-backdrop":"black"},n))},e.DurationFormatter=y,e.FilterUrl=G,e.HourFormatter=$,e.Hours=L,e.Minutes=T,e.OfflineIndicator=function(e){return _()?null:i.default.createElement(i.default.Fragment,null,e.children)},e.OutboundLink=function(e){var t=e.as,n=f(e,Q);return i.default.createElement(t||"a",s({target:"_blank",rel:"noreferer noopener"},n))},e.Pagination=J,e.Rhythm=Z,e.SafeLocalStorage=B,e.Seconds=P,e.ServerError=h,e.Time=D,e.ToastsContextProvider=function(e){var t,n,r,u,o=(n=null!=(t=null==e?void 0:e.timeout)?t:5e3,r=N({comparisonFn:function(e,t){return e.id===t.id}}),u=r[1],[[].concat(r[0]).reverse(),{add:function(e){var t=s({},e,{id:String(Date.now())});u.add(t),setTimeout(function(){return u.remove(t)},n)},remove:u.remove,clear:u.clear}]);return i.default.createElement(ee.Provider,{value:[o[0],o[1]]},e.children)},e.TranslationsContextProvider=function(e){return i.default.createElement(ne.Provider,{value:e.value},e.children)},e.copyToClipboard=function(e){try{var t,n,r=null!=(t=e.onFailure)?t:V,u=null!=(n=e.onSuccess)?n:O;navigator.clipboard||r();var o=function(t,n){try{var r=Promise.resolve(navigator.clipboard.writeText(e.text)).then(function(){u()})}catch(e){return n(e)}return r&&r.then?r.then(void 0,n):r}(0,function(e){r(e)});return Promise.resolve(o&&o.then?o.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},e.defaultUseIsVisibleConfig=R,e.emptyImageResolution=k,e.exec=function(e){return function(){e.forEach(function(e){return e()})}},e.getAnimaProps=function(e){return{"data-anima":e["data-anima"],"data-anima-effect":e["data-anima-effect"],style:e.style}},e.getCurrentTimestamp=I,e.getImageResolution=j,e.getSafeWindow=S,e.isClient=function(){return!S()},e.isIntersectionObserverSupported=H,e.noop=O,e.pluralize=X,e.useAnimaList=function(e,t){for(var n,r,u=null!=(n=null==t?void 0:t.direction)?n:"head",o=i.default.useState(e.map(function(e){return{item:e,props:{visible:!0}}})),a=o[0],l=o[1],c=[],f=function(){var e=r.value;!a.map(function(e){return e.item}).some(function(t){return e.id===t.id})&&c.push(e)},d=v(e);!(r=d()).done;)f();i.default.useEffect(function(){0!==c.length&&(l("head"===u?function(e){return[].concat(c.map(function(e){return{item:e,props:{visible:!0}}}),e)}:function(e){return[].concat(e,c.map(function(e){return{item:e,props:{visible:!0}}}))}),c=[])},[c.length,u]);for(var m,p=[],g=function(){var t=m.value.item;e.every(function(e){return e.id!==t.id})&&p.push(t)},h=v(a);!(m=h()).done;)g();return i.default.useEffect(function(){0!==p.length&&(l(function(e){return e.map(function(e){return p.some(function(t){return t.id===e.item.id})?s({},e,{props:{visible:!1}}):e})}),p=[])},[p.length]),{items:a.map(function(t){var n=e.find(function(e){return e.id===t.item.id});return n?s({},t,{item:n}):t}),count:a.filter(function(e){return e.props.visible}).length}},e.useAudio=function(e){var t=a.useState("initial"),n=t[0],r=t[1],u=a.useRef(null),o=b("duration",0),i=b("currentTime",0),l=b("volume",1),c=0===l.value,s=0===o.value?0:Math.round(i.value/o.value*100);function f(e){var t=e.currentTarget;u.current&&(u.current.currentTime=t.valueAsNumber,i.set(t.valueAsNumber))}function d(e){var t=e.currentTarget;u.current&&(u.current.volume=t.valueAsNumber,l.set(t.valueAsNumber))}return{props:{audio:{src:e,onTimeUpdate:function(e){i.set(Math.round(e.target.currentTime))},onLoadedMetadata:function(e){var t=e.currentTarget;u.current=t,o.set(Math.round(t.duration)),i.set(t.currentTime),l.set(t.volume),r("ready")},onEnded:function(){r("paused")},controls:!1},player:{min:0,step:1,max:o.value,value:i.value,onInput:f,style:{"--percentage":s+"%"}},volume:{min:0,max:1,value:l.value,onInput:d,style:{"--percentage":Math.floor(100*l.value)+"%"}}},actions:{play:function(){u.current&&(u.current.play(),r("playing"))},pause:function(){u.current&&(u.current.pause(),r("paused"))},mute:function(){u.current&&(u.current.volume=0,l.set(0))},unmute:function(){u.current&&(u.current.volume=1,l.set(1))},reset:function(){u.current&&(u.current.currentTime=0,u.current.pause(),i.set(0),r("paused"))},seek:f,changeVolume:d},meta:{state:n,percentage:{raw:s,formatted:s+"%"},currentTime:{raw:i.value,formatted:y.format(i.value)},duration:{raw:o.value,formatted:y.format(o.value)},volume:{value:l.value,raw:Math.floor(100*l.value),formatted:Math.floor(100*l.value)+"%"},muted:c}}},e.useAutofocus=w,e.useBreakpoint=function(e){var t,n=E();return(null!=(t=null==n?void 0:n.width)?t:0)<=e},e.useClickOutside=function(e,t,n){i.default.useEffect(function(){if(e.current)return document.addEventListener("mousedown",r),function(){return document.removeEventListener("mousedown",r)};function r(r){var u;null!=(u=e.current)&&u.contains(r.target)||(null==n?void 0:n.some(function(e){var t;return null==(t=e.current)?void 0:t.contains(r.target)}))||t()}},[t,e,n])},e.useClientSearch=function(){var e=t.useState(""),n=e[0],r=e[1];return{query:n,clear:function(){r("")},onChange:function(e){r(e.currentTarget.value)},filterFn:function(e){return""===n||(null==e?void 0:e.toLowerCase().includes(n.toLowerCase()))}}},e.useCurrentTimestamp=function(){var e=t.useState(I),n=e[0],r=e[1];return t.useEffect(function(){var e=setInterval(function(){return r(I())},D.Seconds(1).toMs());return function(){return clearInterval(e)}},[]),n},e.useDebounce=function(e){var t=i.default.useState(e.value),n=t[0],r=t[1];return i.default.useEffect(function(){var t=setTimeout(function(){return r(e.value)},e.delayMs);return function(){return clearTimeout(t)}},[e.value,e.delayMs]),n},e.useDisablePullToRefresh=function(e){void 0===e&&(e=!0),t.useLayoutEffect(function(){if(e){var t=document.querySelector("html"),n=document.body,r=window.getComputedStyle(t).overscrollBehavior,u=window.getComputedStyle(n).overscrollBehavior;return n.style.overscrollBehavior="none",t.style.overscrollBehavior="none",function(){n.style.overscrollBehavior=u,t.style.overscrollBehavior=r}}},[e])},e.useDocumentTitle=function(e){i.default.useEffect(function(){document.title=e},[e])},e.useExpandableList=function(n){var r=n.length-n.max,u=n.length>n.max;function o(){return u?e.UseExpandableListState.contracted:e.UseExpandableListState.expanded}var i=t.useState(o),a=i[0],l=i[1];return t.useEffect(function(){return l(o())},[n.length,n.max]),{state:a,displayShowMore:a===e.UseExpandableListState.contracted,displayShowLess:a===e.UseExpandableListState.expanded&&u,showMore:function(){a===e.UseExpandableListState.contracted&&l(e.UseExpandableListState.expanded)},showLess:function(){a===e.UseExpandableListState.expanded&&l(e.UseExpandableListState.contracted)},numberOfExcessiveElements:r,filterFn:function(t,r){return a===e.UseExpandableListState.expanded||r<n.max}}},e.useField=b,e.useFile=function(n){var r,u=null!=(r=null==n?void 0:n.maxSize)?r:Infinity,o=t.useState(e.UseFileState.idle),i=o[0],a=o[1],l=t.useState(null),c=l[0],s=l[1];function f(t){var n=t.currentTarget.files;if(n&&n[0]){var r=n[0];if(!(r.size>u))return s(r),a(e.UseFileState.selected),r;a(e.UseFileState.error)}}function d(){s(null),a(e.UseFileState.idle)}return i===e.UseFileState.idle?{state:i,data:null,actions:{selectFile:f,clearFile:d}}:i===e.UseFileState.selected?{state:i,data:c,actions:{selectFile:f,clearFile:d,previewFile:function(){if(c)return URL.createObjectURL(c)}}}:{state:i,data:null,actions:{selectFile:f,clearFile:d}}},e.useFilter=A,e.useHover=function(){var e=i.default.useRef(null),t=M(!1),n=t.enable,r=t.disable;return i.default.useEffect(function(){var t=e.current;return t&&(t.addEventListener("mouseenter",n),t.addEventListener("mouseleave",r)),function(){t&&(t.removeEventListener("mouseenter",n),t.removeEventListener("mouseleave",r))}},[]),{attach:{ref:e},isHovering:t.on}},e.useImageFileResolution=function(t){var n,r=b("resolution",k);return a.useEffect(function(){!function(){try{var n,u=function(u){if(n)return u;[e.UseFileState.error,e.UseFileState.idle].includes(t.state)&&null!==r.value.width&&null!==r.value.height&&r.clear()},o=function(){if(t.state===e.UseFileState.selected)return function(e,u){try{var o=Promise.resolve(j(t.actions.previewFile())).then(function(e){var t=r.set(e);return n=1,t})}catch(e){return u()}return o&&o.then?o.then(void 0,u):o}(0,function(){var e=r.clear();return n=1,e})}();Promise.resolve(o&&o.then?o.then(u):u(o))}catch(e){return Promise.reject(e)}}()},[t.state,null==(n=t.data)?void 0:n.name]),r.value},e.useIsOnline=_,e.useIsVisible=function(e){void 0===e&&(e=R);var n=t.useState(!1),r=n[0],u=n[1];return t.useEffect(function(){var t=e.ref.current;if(H()&&t){var n=new IntersectionObserver(function(e){var t;return u(Boolean(null==(t=e[0])?void 0:t.isIntersecting))},e);return n.observe(t),function(){return n.unobserve(t)}}},[]),r},e.useItem=function(e){var n,r,u=null!=(n=null==e?void 0:e.comparisonFn)?n:function(e,t){return e===t},o=t.useState(null!=(r=e.defaultItem)?r:null),i=o[1];return{clear:function(){return i(null)},set:function(e){return i(e)},toggle:function(e){return i(function(t){return null===t?e:u(t,e)?null:e})},value:o[0]}},e.useKeyHandler=function(e){var t=Object.keys(e);return function(n){var r=n.key,u=e[r];t.includes(n.key)&&e[r]&&u&&u()}},e.useKeyboardShortcurts=z,e.useLanguage=re,e.useLeavingPrompt=function(e){void 0===e&&(e=!1),i.default.useEffect(function(){if(e)return window.addEventListener("beforeunload",t),function(){return window.removeEventListener("beforeunload",t)};function t(e){e.preventDefault()}},[e])},e.useList=N,e.usePersistentToggle=function(e,t){void 0===t&&(t=!1);var n=M(B.get(e,t));return a.useEffect(function(){return B.set(e,n.on)},[e,n.on]),s({},n,{clear:function(){return B.clear(e)}})},e.usePluralize=function(){var e=re();return function(t){return X(s({},t,{language:e}))}},e.usePreviousValue=m,e.useRateLimiter=function(e){var n=t.useRef(new q(e));return function(){var t=Date.now(),r=n.current.verify(t);return r.allowed?e.action.apply(e,[].slice.call(arguments)):null==e.fallback?void 0:e.fallback(r.remainingMs)}},e.useScroll=function(){var e=S(),t=i.default.useState(0),n=t[0],r=t[1],u=M(!1);return i.default.useLayoutEffect(function(){function t(){e&&(r(null==e?void 0:e.scrollY),e.document.body.clientHeight<e.document.body.scrollHeight?u.enable():u.disable())}return null==e||e.addEventListener("scroll",t),function(){return null==e?void 0:e.removeEventListener("scroll",t)}},[]),{actions:{goToTop:function(){e&&e.scrollTo({top:0,left:0,behavior:"smooth"})}},position:{value:n,isInitial:0===n,hasChanged:n>0},visible:u.on,hidden:u.off}},e.useScrollLock=W,e.useSound=function(e){var t=new Audio(e);return{play:t.play.bind(t)}},e.useToastTrigger=function(){return te()[1].add},e.useToastsContext=te,e.useToggle=M,e.useTranslations=function(){var e=i.default.useContext(ne);if(void 0===e)throw new Error("useTranslations must be used within the TranslationsContext");return function(t,n){var r=e.translations[t];return r?n?Object.entries(n).reduce(function(e,t){return e.replace("{{"+t[0]+"}}",String(t[1]))},r):r:(console.warn("[@bgord/frontend] missing translation for key: "+t),t)}},e.useUrlFilter=function(e){var t,n=S(),r=null!=(t=new URLSearchParams(null==n?void 0:n.location.search).get(e.label))?t:void 0;return A(s({onUpdate:function(t,r){if(n){var u=new URL(n.location.toString()),o=new URLSearchParams(u.search);void 0===t?o.delete(e.label):o.set(e.label,t),t!==r&&t!==r&&(u.search=o.toString(),history.pushState({},"",u.toString()))}}},e,{defaultQuery:e.defaultQuery,currentQuery:r}))},e.useWindowDimensions=E});
//# sourceMappingURL=bgord-frontend.umd.js.map
