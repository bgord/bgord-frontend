!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("tinykeys"),require("js-cookie"),require("polish-plurals"),require("ts-storage")):"function"==typeof define&&define.amd?define(["exports","react","tinykeys","js-cookie","polish-plurals","ts-storage"],t):t((e||self).frontend={},e.react,e.tinykeys,e.jsCookie,e.polishPlurals,e.tsStorage)}(this,function(e,t,n,r,a,u){function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}}),t.default=e,t}var l=/*#__PURE__*/i(t),s=/*#__PURE__*/o(t),c=/*#__PURE__*/i(n),d=/*#__PURE__*/i(r),f=/*#__PURE__*/o(u);function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)t.indexOf(n=u[r])>=0||(a[n]=e[n]);return a}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function g(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(e,n){var r=t.useRef(n);return t.useEffect(function(){r.current=e}),r.current}var y,S=["children"];e.AnimaState=void 0,(y=e.AnimaState||(e.AnimaState={})).appearing="appearing",y.appeared="appeared",y.hiding="hiding",y.hidden="hidden";var b,w=/*#__PURE__*/function(){function e(e){this.message=void 0,this._known=!0,this.message=e.message}return e.isServerError=function(e){return!!(e&&"object"==typeof e&&e===Object(e)&&e.hasOwnProperty("_known")&&e.hasOwnProperty("message"))},e.extract=function(t){try{return t.ok?Promise.resolve(t):Promise.resolve(t.json()).then(function(t){var n=e.isServerError(t)?t.message:"app.error.general";throw new e({message:n})})}catch(e){return Promise.reject(e)}},e.handle=function(t){try{throw new e({message:e.isServerError(t)?t.message:"app.error.general"})}catch(e){return Promise.reject(e)}},e}(),E=/*#__PURE__*/function(){function e(){}return e.format=function(e){var t=Math.floor(e/60),n=e%60;return String(t).padStart(2,"0")+":"+String(n).padStart(2,"0")},e}(),x=["value","set","clear","label","input","changed","unchanged","onChange"];function T(e,n){var r="function"==typeof n?n():n,a=t.useState(r),u=a[0],i=a[1];return t.useEffect(function(){return i(r)},[r]),{value:u,set:i,onChange:function(e){return i(e.currentTarget.value)},clear:function(){return i(r)},label:{props:{htmlFor:e}},input:{props:{id:e,name:e}},changed:u!==r,unchanged:u==r}}function U(e){return{field:{value:e.value,set:e.set,clear:e.clear,label:e.label,input:e.input,changed:e.changed,unchanged:e.unchanged,onChange:e.onChange},rest:m(e,x)}}function F(e){l.default.useEffect(function(){var t;e.condition&&(null==(t=e.ref.current)||t.focus())},[e.condition])}function L(){if("undefined"!=typeof window)return window}function P(){var e=t.useState({width:void 0,height:void 0}),n=e[0],r=e[1];return t.useEffect(function(){var e=L();if(e)return e.addEventListener("resize",t),t(),function(){return e.removeEventListener("resize",t)};function t(){r({width:null==e?void 0:e.innerWidth,height:null==e?void 0:e.innerHeight})}},[]),n}function A(e,t,n){l.default.useEffect(function(){if(e.current)return document.addEventListener("mousedown",r),function(){return document.removeEventListener("mousedown",r)};function r(r){var a;null!=(a=e.current)&&a.contains(r.target)||(null==n?void 0:n.some(function(e){var t;return null==(t=e.current)?void 0:t.contains(r.target)}))||t()}},[t,e,n])}function D(){}function M(e){var n,r,a,u,i=null!=(n=e.defaultQuery)?n:void 0,o=null!=(r=e.currentQuery)?r:void 0,l=null!=(a=e.filterFn)?a:function(e){return void 0===f||f===String(e)},s=Object.keys(e.enum),c=null!=(u=null==e?void 0:e.onUpdate)?u:D,d=t.useState(null!=o?o:i),f=d[0],v=d[1],m=h(f);return t.useEffect(function(){return c(f,m)},[m,f]),{query:f,clear:function(){v(i)},onChange:function(t){var n=t.currentTarget.value,r=Boolean(e.enum[String(n)]);v(r?n:void 0)},filterFn:l,options:s,onUpdate:c,name:e.name,changed:f!==i,unchanged:f===i,label:{props:{htmlFor:e.name}},input:{props:{id:e.name,name:e.name}}}}e.UseAudioState=void 0,(b=e.UseAudioState||(e.UseAudioState={})).initial="initial",b.ready="ready",b.playing="playing",b.paused="paused";var C=function(){return 0};function I(e){return{value:e,hours:24*e,minutes:24*e*60,seconds:24*e*60*60,ms:24*e*60*60*1e3}}function O(e){return{value:e,minutes:60*e,seconds:60*e*60,ms:60*e*60*1e3}}function k(e){return{value:e,seconds:60*e,ms:60*e*1e3}}function j(e){return{value:e,ms:1e3*e}}var R={Days:I,Hours:O,Minutes:k,Seconds:j};function _(){return Date.now()}var N,V,H=["on","off","enable","disable","toggle"];function q(e){void 0===e&&(e=!1);var n=t.useState(e),r=n[0],a=n[1];return{on:r,off:!r,enable:function(){return a(!0)},disable:function(){return a(!1)},toggle:function(){return a(function(e){return!e})}}}function B(e){return{toggle:{on:e.on,off:e.off,enable:e.enable,disable:e.disable,toggle:e.toggle},rest:m(e,H)}}e.UseExpandableListState=void 0,(N=e.UseExpandableListState||(e.UseExpandableListState={})).contracted="contracted",N.expanded="expanded",e.UseFileState=void 0,(V=e.UseFileState||(e.UseFileState={})).idle="idle",V.selected="selected",V.error="error";var W=function(e){try{if(!e)return Promise.resolve(z);var t=document.createElement("img"),n=new Promise(function(e,n){t.onload=function(){return e({width:t.width,height:t.height})},t.onerror=n});return t.src=e,Promise.resolve(n)}catch(e){return Promise.reject(e)}},z={width:null,height:null},K=function(){var e=q("undefined"==typeof navigator||"boolean"!=typeof navigator.onLine||navigator.onLine);return l.default.useEffect(function(){function t(){e.enable()}function n(){e.disable()}return window.addEventListener("online",t),window.addEventListener("offline",n),function(){window.removeEventListener("online",t),window.removeEventListener("offline",n)}},[]),e.on},Q={threshold:0,root:null,rootMargin:"0%",ref:{current:null}};function Y(){return"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype}function J(e,t){return e===t}var $,G,X=null;function Z(e){l.default.useEffect(function(){var t=c.default(window,e);return function(){return t()}},[e])}function ee(e){if(e.language===G.en){var t,n=null!=(t=e.plural)?t:e.singular+"s";return 1===e.value?e.singular:n}if(e.language===G.pl){var r,u=null!=(r=e.value)?r:1;return 1===u?e.singular:a.polishPlurals(e.singular,String(e.plural),String(e.genitive),u)}return console.warn("[@bgord/frontend] missing pluralization function for language "+e.language+"."),e.singular}e.KeyNameEnum=void 0,($=e.KeyNameEnum||(e.KeyNameEnum={})).Enter="Enter",$.Space=" ",function(e){e.en="en",e.pl="pl"}(G||(G={}));var te=l.default.createContext({translations:{},language:"en"});function ne(){var e=l.default.useContext(te);if(void 0===e)throw new Error("useLanguage must be used within the TranslationsContext");return e.language}function re(e){var n,r,a=null!=(n=null==e?void 0:e.defaultItems)?n:[],u=null!=(r=null==e?void 0:e.comparisonFn)?r:function(e,t){return e===t},i=t.useState(a),o=i[0],l=i[1];function s(e){l(function(t){return Array.isArray(e)?[].concat(t,e):[].concat(t,[e])})}function c(e){l(function(t){return t.filter(function(t){return!u(t,e)})})}function d(e){return o.some(function(t){return u(t,e)})}return[o,{clear:function(){l([])},add:s,remove:c,toggle:function(e){d(e)?c(e):s(e)},isAdded:d,update:l}]}var ae,ue=/*#__PURE__*/function(){function e(){}return e.get=function(e,t){return f.get(e,t).value},e.set=function(e,t){f.set(e,t)},e.clear=function(e){f.remove(e)},e}(),ie=/*#__PURE__*/function(){function e(e){this.lastInvocationTimestamp=null,this.options=void 0,this.options=e}return e.prototype.verify=function(e){if(!this.lastInvocationTimestamp)return this.lastInvocationTimestamp=e,{allowed:!0};var t=this.lastInvocationTimestamp+this.options.limitMs;return t<=e?(this.lastInvocationTimestamp=e,{allowed:!0}):{allowed:!1,remainingMs:t-e}},e}();function oe(e){void 0===e&&(e=!0),t.useEffect(function(){if(e){var t=document.querySelector("html"),n=window.getComputedStyle(t).overflow;return t.style.overflow="hidden",function(){t.style.overflow=n}}},[e])}e.UseVideoState=void 0,(ae=e.UseVideoState||(e.UseVideoState={})).initial="initial",ae.ready="ready",ae.playing="playing",ae.paused="paused";var le=["as"];function se(e){return function(){e.forEach(function(e){return e()})}}var ce={Dimensions:function(e){var t=P();return l.default.createElement("div",v({"data-fs":"12"},e),t.width," x ",t.height)},Truncates:function(){var e=q(),t=T("length",128),n=l.default.useState(new Map),r=n[0],a=n[1];return l.default.createElement("div",{"data-display":"flex","data-cross":"center","data-gap":"6"},l.default.createElement("label",v({className:"c-label"},t.label.props),"Length"),l.default.createElement("input",v({className:"c-input",type:"number",value:t.value,onChange:function(e){return t.set(e.currentTarget.valueAsNumber)}},t.input.props)),l.default.createElement("button",{className:"c-button","data-variant":"bare",type:"button",onClick:se([function(){return e=document.querySelectorAll('[data-transform="truncate"]'),n=new Map(r),e.forEach(function(e){var r=e.textContent;n.has(e)?(e.textContent=n.get(e),n.delete(e)):(n.set(e,r),e.textContent="x".repeat(t.value))}),void a(n);var e,n},e.toggle])},e.on?"Hide truncates":"Expand truncates"))}},de=function(e){return console.warn("Copying to clipboard not supported")},fe=/*#__PURE__*/function(){function e(){}return e.datetime=function(e,t){return void 0===t&&(t="N/A"),e?new Date(e).toLocaleString():t},e.monthDay=function(t){var n=new Date(t);return e._padDatePart(n.getDate())+"/"+e._padDatePart(n.getMonth()+1)},e.form=function(t){return t?e._padDatePart(t.getFullYear())+"-"+e._padDatePart(t.getMonth()+1)+"-"+e._padDatePart(t.getDate()):e.form(new Date)},e.clockUTC=function(t){var n=new Date(t);return e._padDatePart(n.getUTCHours())+":"+e._padDatePart(n.getUTCMinutes())+":"+e._padDatePart(n.getUTCSeconds())},e.clockLocal=function(t){var n=new Date(t);return e._padDatePart(n.getHours())+":"+e._padDatePart(n.getMinutes())+":"+e._padDatePart(n.getSeconds())},e.countdown=function(t){var n=new Date(t);return e._padDatePart(n.getHours())+":"+e._padDatePart(n.getMinutes())+":"+e._padDatePart(n.getSeconds())},e.formDatetimeLocal=function(e){var t=e-k((new Date).getTimezoneOffset()).ms;return new Date(t).toISOString().slice(0,16)},e._padDatePart=function(e){return String(e).padStart(2,"0")},e}(),ve=/*#__PURE__*/function(){function e(){}return e.convertUtcToLocal=function(e){var t=(new Date).getTimezoneOffset(),n=(O(e).minutes-t)/60%24;return{value:n,label:String(n).padStart(2,"0")+":00"}},e}(),me=/*#__PURE__*/function(){function e(){}return e.fromRevision=function(e){return{"if-match":String(e)}},e}(),pe=/*#__PURE__*/function(){function e(){}return e.fromRevision=function(e){return{"if-match":"W/"+e}},e}(),ge=l.default.createContext({}),he=/*#__PURE__*/function(){function e(e,t){this.value=void 0;var n=this.getNonEmptyFilters(t),r=new URLSearchParams(n);this.value=""!==r.toString()?e+"?"+r.toString():e}return e.prototype.getNonEmptyFilters=function(e){return void 0===e?{}:Object.fromEntries(Object.entries(e).filter(function(e){return void 0!==e[1]}))},e}(),ye=/*#__PURE__*/function(){function e(){}return e.pattern=function(e){var t,n=null==(t=e.required)||t;return e.min&&!e.max?{pattern:".{"+e.min+"}",required:n}:e.min&&e.max?{pattern:".{"+e.min+","+e.max+"}",required:n}:!e.min&&e.max?{pattern:".{,"+e.max+"}",required:n}:{pattern:void 0,required:n}},e}(),Se=/*#__PURE__*/function(){function e(){}return e.float=function(e,t){return void 0===t&&(t=2),parseFloat(e.toFixed(t))},e}(),be=/*#__PURE__*/function(){function e(e){var t,n,r,a;this.min=void 0,this.max=void 0,this.lower=void 0,this.upper=void 0;var u=null!=(t=null==(n=e.bound)?void 0:n.lower)?t:0,i=null!=(r=null==(a=e.bound)?void 0:a.upper)?r:1;if(e.max-e.min<0)throw new Error("Invalid MinMaxScaler min-max config");if(i-u<=0)throw new Error("Invalid MinMaxScaler bound config");this.min=e.min,this.max=e.max,this.lower=u,this.upper=i}var t=e.prototype;return t.scale=function(e){var t=this.min,n=this.max,r=this.lower,a=this.upper;if(e<t||e>n)throw new Error("Value out of min/max range");return t===n?{original:e,scaled:(r+a)/2,isMin:e===t,isMax:e===n}:{original:e,scaled:Se.float((e-t)/(n-t)*(a-r)+r,2),isMin:e===t,isMax:e===n}},t.descale=function(e){var t=this.min,n=this.max,r=this.lower,a=this.upper;if(e<r||e>a)throw new Error("Scaled value out of bounds");return{original:Se.float((e-r)/(a-r)*(n-t)+t,2),scaled:e,isLowerBound:e===r,isUpperBound:e===a}},e.getMinMax=function(e){if(0===e.length)throw new Error("An empty array supplied");return{min:Math.min.apply(Math,e),max:Math.max.apply(Math,e)}},e}(),we=/*#__PURE__*/function(){function e(){}return e.infinite=function(e){var t,n,r;return null!=(t=null==(n=e.data)||null==(r=n.pages)?void 0:r.flat().map(function(e){return e.result}).flat())?t:[]},e}();function Ee(e){return e+"px"}we.empty={result:[],meta:{exhausted:!0}};var xe=/*#__PURE__*/function(){function e(){}return e.format=function(t,n){return void 0===n&&(n=e.DEFAULT_SEPARATOR),t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,n)},e}();xe.DEFAULT_SEPARATOR=" ";var Te=l.default.createContext(void 0);function Ue(){var e=l.default.useContext(Te);if(void 0===e)throw new Error("useToasts must be used within the ToastsContextProvider");return e}e.API=function(e,t){return fetch(e,v({mode:"same-origin",redirect:"follow"},t,{headers:v({"Content-Type":"application/json","time-zone-offset":(new Date).getTimezoneOffset().toString()},null==t?void 0:t.headers)})).then(w.extract).catch(w.handle)},e.AUDIO_DEFAULT_VOLUME=1,e.Anima=function(t){var n,r=null!=(n=t.duration)?n:300,a=l.default.useState(function(){return t.visible?t.isInitial?e.AnimaState.appeared:e.AnimaState.appearing:e.AnimaState.hidden}),u=a[0],i=a[1],o=h(u);return l.default.useEffect(function(){if(!t.isInitial)if(t.visible)i(e.AnimaState.appearing),setTimeout(function(){return i(e.AnimaState.appeared)},100);else{if(!o)return;i(e.AnimaState.hiding),setTimeout(function(){return i(e.AnimaState.hidden)},r)}},[t.visible]),u===e.AnimaState.hidden?null:l.default.cloneElement(t.children,{"data-anima":u,"data-anima-effect":t.effect,style:v({"--duration":r+"ms"},t.children.props.style)})},e.AnimaList=function(e){var t=m(e,S),n=l.default.useState(!0),r=n[0],a=n[1];return l.default.useEffect(function(){return a(!1)},[]),l.default.createElement("ul",v({},t),e.children.map(function(e){return l.default.cloneElement(e,{isInitial:r})}))},e.Approximation=Se,e.DateFormatter=fe,e.Days=I,e.DevTools=ce,e.Dialog=function(e){var t=B(e),n=t.toggle,r=t.rest,a=l.default.useRef(null);return l.default.useEffect(function(){var t,n;e.on?null==(t=a.current)||t.showModal():null==(n=a.current)||n.close()},[e.on]),Z({Escape:n.disable}),F({ref:a,condition:e.on}),oe(e.on),A(a,n.disable),l.default.createElement("dialog",v({ref:a,tabIndex:0,"data-display":e.on?"flex":"none","data-direction":"column","data-mx":"auto","data-p":"24","data-position":"fixed","data-z":"2","data-bg":"white","data-br":"4","data-bc":"gray-300","data-bw":"1","data-backdrop":"black"},r))},e.DurationFormatter=E,e.ETag=me,e.FeatureFlagsContextProvider=function(e){return l.default.createElement(ge.Provider,{value:e.value},e.children)},e.FilterUrl=he,e.Form=ye,e.HourFormatter=ve,e.Hours=O,e.MinMaxScaler=be,e.Minutes=k,e.OfflineIndicator=function(e){return K()?null:l.default.createElement(l.default.Fragment,null,e.children)},e.OutboundLink=function(e){var t=e.as,n=m(e,le);return l.default.createElement(t||"a",v({target:"_blank",rel:"noreferer noopener"},n))},e.Pagination=we,e.Rhythm=function(e){return void 0===e&&(e=12),{times:function(t){var n=e*t,r={height:{height:Ee(n)},minHeight:{minHeight:Ee(n)},maxHeight:{maxHeight:Ee(n)},width:{width:Ee(n)},minWidth:{minWidth:Ee(n)},maxWidth:{maxWidth:Ee(n)},square:{height:Ee(n),width:Ee(n)}},a={height:{style:{height:Ee(n)}},minHeight:{style:{minHeight:Ee(n)}},maxHeight:{style:{maxHeight:Ee(n)}},width:{style:{width:Ee(n)}},minWidth:{style:{minWidth:Ee(n)}},maxWidth:{style:{maxWidth:Ee(n)}},square:{style:{height:Ee(n),width:Ee(n)}}};return v({px:Ee(n),raw:n,style:a},r)}}},e.SafeLocalStorage=ue,e.Seconds=j,e.ServerError=w,e.Switch=function(e){var n=U(e),r=n.field;return l.default.createElement(t.Fragment,null,l.default.createElement("input",v({className:"c-switch-checkbox c-visually-hidden",type:"checkbox",checked:r.value,onChange:function(e){return r.set(e.currentTarget.checked)}},r.input.props,n.rest)),l.default.createElement("label",v({className:"c-switch-label"},r.label.props),l.default.createElement("div",{className:"c-switch-slider"})))},e.ThousandsSeparator=xe,e.Time=R,e.ToastsContextProvider=function(e){var t,n,r,a,u=(n=null!=(t=null==e?void 0:e.timeout)?t:5e3,r=re({comparisonFn:function(e,t){return e.id===t.id}}),a=r[1],[r[0].toReversed(),{add:function(e){var t=v({},e,{id:String(Date.now())});a.add(t),setTimeout(function(){return a.remove(t)},n)},remove:a.remove,clear:a.clear}]);return l.default.createElement(Te.Provider,{value:[u[0],u[1]]},e.children)},e.TranslationsContextProvider=function(e){return l.default.createElement(te.Provider,{value:e.value},e.children)},e.VIDEO_DEFAULT_VOLUME=1,e.WeakETag=pe,e.copyToClipboard=function(e){try{var t,n,r=null!=(t=e.onFailure)?t:de,a=null!=(n=e.onSuccess)?n:D;navigator.clipboard||r();var u=function(t,n){try{var r=Promise.resolve(navigator.clipboard.writeText(e.text)).then(function(){a()})}catch(e){return n(e)}return r&&r.then?r.then(void 0,n):r}(0,function(e){r(e)});return Promise.resolve(u&&u.then?u.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},e.defaultSortFn=C,e.defaultUseIsVisibleConfig=Q,e.emptyImageResolution=z,e.exec=se,e.extractUseField=U,e.extractUseToggle=B,e.getAnimaProps=function(e){return{"data-anima":e["data-anima"],"data-anima-effect":e["data-anima-effect"],style:e.style}},e.getCurrentTimestamp=_,e.getImageResolution=W,e.getSafeWindow=L,e.isClient=function(){return!L()},e.isIntersectionObserverSupported=Y,e.noop=D,e.pluralize=ee,e.useAnimaList=function(e,t){for(var n,r,a=null!=(n=null==t?void 0:t.direction)?n:"head",u=l.default.useState(e.map(function(e){return{item:e,props:{visible:!0}}})),i=u[0],o=u[1],s=[],c=function(){var e=r.value;!i.map(function(e){return e.item}).some(function(t){return e.id===t.id})&&s.push(e)},d=g(e);!(r=d()).done;)c();l.default.useEffect(function(){0!==s.length&&(o("head"===a?function(e){return[].concat(s.map(function(e){return{item:e,props:{visible:!0}}}),e)}:function(e){return[].concat(e,s.map(function(e){return{item:e,props:{visible:!0}}}))}),s=[])},[s.length,a]);for(var f,m=[],p=function(){var t=f.value.item;e.every(function(e){return e.id!==t.id})&&m.push(t)},h=g(i);!(f=h()).done;)p();return l.default.useEffect(function(){0!==m.length&&(o(function(e){return e.map(function(e){return m.some(function(t){return t.id===e.item.id})?v({},e,{props:{visible:!1}}):e})}),m=[])},[m.length]),{items:i.map(function(t){var n=e.find(function(e){return e.id===t.item.id});return n?v({},t,{item:n}):t}),count:i.filter(function(e){return e.props.visible}).length}},e.useAudio=function(t){var n=s.useState(e.UseAudioState.initial),r=n[0],a=n[1],u=s.useRef(null),i=T("duration",0),o=T("currentTime",0),l=T("volume",1),c=0===l.value,d=0===i.value?0:Math.round(o.value/i.value*100);function f(e){var t=e.currentTarget;u.current&&(u.current.currentTime=t.valueAsNumber,o.set(t.valueAsNumber))}function v(e){var t=e.currentTarget;u.current&&(u.current.volume=t.valueAsNumber,l.set(t.valueAsNumber))}return{props:{audio:{src:t,onTimeUpdate:function(e){o.set(Math.round(e.target.currentTime))},onLoadedMetadata:function(t){var n=t.currentTarget;u.current=n,i.set(Math.round(n.duration)),o.set(n.currentTime),l.set(n.volume),a(e.UseAudioState.ready)},onEnded:function(){a(e.UseAudioState.paused)},controls:!1},player:{min:0,step:1,max:i.value,value:o.value,onInput:f,style:{"--percentage":d+"%"}},volume:{min:0,max:1,step:.01,value:l.value,onInput:v,style:{"--percentage":Math.floor(100*l.value)+"%"}}},actions:{play:function(){u.current&&(u.current.play(),a(e.UseAudioState.playing))},pause:function(){u.current&&(u.current.pause(),a(e.UseAudioState.paused))},mute:function(){u.current&&(u.current.volume=0,l.set(0))},unmute:function(){u.current&&(u.current.volume=1,l.set(1))},reset:function(){u.current&&(u.current.currentTime=0,u.current.pause(),o.set(0),a(e.UseAudioState.paused))},seek:f,changeVolume:v},meta:{state:r,isInitial:r===e.UseAudioState.initial,isReady:r===e.UseAudioState.ready,isPlaying:r===e.UseAudioState.playing,isPaused:r===e.UseAudioState.paused,matches:function(e){return e.some(function(e){return e===r})},percentage:{raw:d,formatted:d+"%"},currentTime:{raw:o.value,formatted:E.format(o.value)},duration:{raw:i.value,formatted:E.format(i.value)},volume:{value:l.value,raw:Math.floor(100*l.value),formatted:Math.floor(100*l.value)+"%"},muted:c}}},e.useAutofocus=F,e.useBreakpoint=function(e){var t,n=P();return(null!=(t=null==n?void 0:n.width)?t:0)<=e},e.useClickOutside=A,e.useClientFilter=M,e.useClientSearch=function(){var e=t.useState(""),n=e[0],r=e[1];return{query:n,clear:function(){r("")},onChange:function(e){r(e.currentTarget.value)},filterFn:function(e){return""===n||(null==e?void 0:e.toLowerCase().includes(n.toLowerCase()))},changed:""!==n,unchanged:""===n}},e.useClientSort=function(e,t){var n,r=T(e,t.enum.default);return v(r.value===t.enum.default?{sortFn:C,options:Object.keys(t.options)}:{sortFn:null!=(n=t.options[r.value])?n:C,options:Object.keys(t.options)},r,{onChange:function(e){var n=e.currentTarget.value,a=Boolean(t.enum[String(n)]);r.set(a?n:t.enum.default)}})},e.useCurrentTimestamp=function(){var e=t.useState(_),n=e[0],r=e[1];return t.useEffect(function(){var e=setInterval(function(){return r(_())},R.Seconds(1).ms);return function(){return clearInterval(e)}},[]),n},e.useDebounce=function(e){var t=l.default.useState(e.value),n=t[0],r=t[1];return l.default.useEffect(function(){var t=setTimeout(function(){return r(e.value)},e.delayMs);return function(){return clearTimeout(t)}},[e.value,e.delayMs]),n},e.useDesignMode=function(e){var n=q(e),r=L();return t.useEffect(function(){r&&(r.document.designMode=n.on?"on":"off")},[n.on]),n},e.useDisablePullToRefresh=function(e){void 0===e&&(e=!0),t.useLayoutEffect(function(){if(e){var t=document.querySelector("html"),n=document.body,r=window.getComputedStyle(t).overscrollBehavior,a=window.getComputedStyle(n).overscrollBehavior;return n.style.overscrollBehavior="none",t.style.overscrollBehavior="none",function(){n.style.overscrollBehavior=a,t.style.overscrollBehavior=r}}},[e])},e.useDocumentTitle=function(e){l.default.useEffect(function(){document.title=e},[e])},e.useExpandableList=function(n){var r=n.length-n.max,a=n.length>n.max;function u(){return a?e.UseExpandableListState.contracted:e.UseExpandableListState.expanded}var i=t.useState(u),o=i[0],l=i[1];return t.useEffect(function(){return l(u())},[n.length,n.max]),{state:o,displayShowMore:o===e.UseExpandableListState.contracted,displayShowLess:o===e.UseExpandableListState.expanded&&a,actions:{showMore:function(){o===e.UseExpandableListState.contracted&&l(e.UseExpandableListState.expanded)},showLess:function(){o===e.UseExpandableListState.expanded&&l(e.UseExpandableListState.contracted)}},numberOfExcessiveElements:r,filterFn:function(t,r){return o===e.UseExpandableListState.expanded||r<n.max}}},e.useFeatureFlag=function(e){var t=l.default.useContext(ge);if(void 0===t)throw new Error("useFeatureFlag must be used within the FeatureFlagsContext");return"yes"===t[e]},e.useFeatureFlags=function(){var e=l.default.useContext(ge);if(void 0===e)throw new Error("useFeatureFlags must be used within the FeatureFlagsContext");return e},e.useField=T,e.useFile=function(n,r){var a,u=null!=(a=null==r?void 0:r.maxSize)?a:Infinity,i=t.useState(0),o=i[0],l=i[1],s=t.useState(e.UseFileState.idle),c=s[0],d=s[1],f=t.useState(null),v=f[0],m=f[1];function p(t){var n=t.currentTarget.files;if(n&&n[0]){var r=n[0];if(!(r.size>u))return m(r),d(e.UseFileState.selected),r;d(e.UseFileState.error)}}function g(){l(function(e){return e+1}),m(null),d(e.UseFileState.idle)}var h=t.useMemo(function(){return v?URL.createObjectURL(v):void 0},[v]);function y(e){return e.some(function(e){return e===c})}return c===e.UseFileState.idle?{state:c,matches:y,isIdle:!0,isSelected:!1,isError:!1,data:null,actions:{selectFile:p,clearFile:g},label:{props:{htmlFor:n}},input:{props:{id:n,name:n,multiple:!1,key:o}}}:c===e.UseFileState.selected?{state:c,matches:y,data:v,isIdle:!1,isSelected:!0,isError:!1,actions:{selectFile:p,clearFile:g},preview:h,label:{props:{htmlFor:n}},input:{props:{id:n,name:n,multiple:!1,key:o}}}:{state:c,matches:y,data:null,isIdle:!1,isSelected:!1,isError:!0,actions:{selectFile:p,clearFile:g},label:{props:{htmlFor:n}},input:{props:{id:n,name:n,multiple:!1,key:o}}}},e.useHover=function(e){var t,n=null==(t=null==e?void 0:e.enabled)||t,r=l.default.useRef(null),a=q(!1),u=a.enable,i=a.disable;return l.default.useEffect(function(){var e=r.current;return e&&n&&(e.addEventListener("mouseenter",u),e.addEventListener("mouseleave",i)),function(){e&&n&&(e.removeEventListener("mouseenter",u),e.removeEventListener("mouseleave",i))}},[]),{attach:{ref:r},isHovering:a.on&&n}},e.useImageFileResolution=function(t){var n,r=T("resolution",z);return s.useEffect(function(){!function(){try{var n,a=function(a){if(n)return a;[e.UseFileState.error,e.UseFileState.idle].includes(t.state)&&null!==r.value.width&&null!==r.value.height&&r.clear()},u=function(){if(t.state===e.UseFileState.selected)return function(e,a){try{var u=Promise.resolve(W(t.preview)).then(function(e){var t=r.set(e);return n=1,t})}catch(e){return a()}return u&&u.then?u.then(void 0,a):u}(0,function(){var e=r.clear();return n=1,e})}();Promise.resolve(u&&u.then?u.then(a):a(u))}catch(e){return Promise.reject(e)}}()},[t.state,null==(n=t.data)?void 0:n.name]),r.value},e.useIsOnline=K,e.useIsVisible=function(e){void 0===e&&(e=Q);var n=t.useState(!1),r=n[0],a=n[1];return t.useEffect(function(){var t=e.ref.current;if(Y()&&t){var n=new IntersectionObserver(function(e){var t;return a(Boolean(null==(t=e[0])?void 0:t.isIntersecting))},e);return n.observe(t),function(){return n.unobserve(t)}}},[]),r},e.useItem=function(e){var n,r,a=null!=(n=null==e?void 0:e.comparisonFn)?n:J,u=t.useState(null!=(r=null==e?void 0:e.defaultItem)?r:X),i=u[0],o=u[1];return{clear:function(){return o(X)},set:function(e){return o(e)},toggle:function(e){return o(function(t){return t===X?e:a(t,e)?X:e})},value:i,isDefault:a(i,X),exists:!a(i,X),compare:function(e){return a(i,e)}}},e.useKeyHandler=function(e){var t=Object.keys(e);return function(n){var r=n.key,a=e[r];t.includes(n.key)&&e[r]&&a&&a()}},e.useKeyboardShortcuts=Z,e.useLanguage=ne,e.useLanguageSelector=function(e){return M({enum:e,currentQuery:ne(),name:"language",onUpdate:function(e,t){var n=L();n&&e&&t&&t!==e&&(d.default.set("accept-language",e),n.document.location.reload())}})},e.useLeavingPrompt=function(e){void 0===e&&(e=!1),l.default.useEffect(function(){if(e)return window.addEventListener("beforeunload",t),function(){return window.removeEventListener("beforeunload",t)};function t(e){e.preventDefault()}},[e])},e.useList=re,e.useMetaEnterSubmit=function(){return{onKeyDown:function(e){var t;"Enter"===e.key&&e.metaKey&&(null==(t=e.currentTarget.form)||t.dispatchEvent(new Event("submit",{cancelable:!0})))}}},e.usePagination=function(){var e,t,n,r=T("meta",null),a=null==(e=r.value)?void 0:e.previousPage,u=null==(t=r.value)?void 0:t.nextPage,i=(null==(n=r.value)?void 0:n.lastPage)||1,o=T("page",1);return{current:o.value,last:i,controls:{firstPage:{active:!a,disabled:!1,exists:!0,go:function(){return o.set(1)},value:1},previousPage:{active:!1,disabled:!a,exists:Boolean(a),go:function(){return o.set(null!=a?a:o.value)},value:a},nextPage:{active:!1,disabled:!u,exists:Boolean(u),go:function(){return o.set(null!=u?u:o.value)},value:u},lastPage:{active:o.value===i,disabled:!u,exists:!0,go:function(){return o.set(null!=i?i:o.value)},value:i}},update:function(e){return r.set(e)}}},e.usePersistentToggle=function(e,t){void 0===t&&(t=!1);var n=q(ue.get(e,t));return s.useEffect(function(){return ue.set(e,n.on)},[e,n.on]),v({},n,{clear:function(){return ue.clear(e)}})},e.usePluralize=function(){var e=ne();return function(t){return ee(v({},t,{language:e}))}},e.usePreviousValue=h,e.useRateLimiter=function(e){var n=t.useRef(new ie(e));return function(){var t=Date.now(),r=n.current.verify(t);return r.allowed?e.action.apply(e,[].slice.call(arguments)):null==e.fallback?void 0:e.fallback(r.remainingMs)}},e.useReordering=function(e){var t,n=null==(t=e.enabled)||t,r=l.default.useState(e.initialItems),a=r[0],u=r[1];l.default.useEffect(function(){return u(e.initialItems)},[JSON.stringify(e.initialItems)]);var i=l.default.useRef(null),o=l.default.useState(null),s=o[0],c=o[1],d=l.default.useState(null),f=d[0],v=d[1];function m(e){return function(t){var n;c(e),i.current=null!=(n=a[e])?n:null,null!=t&&t.dataTransfer&&!t.currentTarget.parentNode&&(t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("text/html",t.currentTarget.parentNode),t.dataTransfer.setDragImage(t.currentTarget.parentNode,20,20))}}function p(e){return function(t){t.preventDefault();var n=a[e];v(e),i.current!==n&&i.current&&u(a.filter(function(e){return e!==i.current}).toSpliced(e,0,i.current))}}function g(t){return function(n){var r;null!==s&&null!==f&&s!==f&&e.callback({correlationId:e.correlationId,id:null==(r=a[t])?void 0:r.id,item:a[t],to:f}),c(null),i.current=null,v(null)}}var h=n?i.current?"grabbing":"grab":"auto";return{items:a,enabled:n,props:{item:function(e){return{onDragOver:p(e)}},handle:function(e){return{onDragStart:m(e),onDragEnd:g(e),draggable:n,style:{cursor:h}}}}}},e.useScroll=function(){var e=L(),t=l.default.useState(0),n=t[0],r=t[1],a=q(!1);return l.default.useLayoutEffect(function(){function t(){e&&(r(null==e?void 0:e.scrollY),e.document.body.clientHeight<e.document.body.scrollHeight?a.enable():a.disable())}return null==e||e.addEventListener("scroll",t),function(){return null==e?void 0:e.removeEventListener("scroll",t)}},[]),{actions:{goToTop:function(){e&&e.scrollTo({top:0,left:0,behavior:"smooth"})}},position:{value:n,isInitial:0===n,hasChanged:n>0},visible:a.on,hidden:a.off}},e.useScrollLock=oe,e.useSound=function(e){var t=new Audio(e);return{play:t.play.bind(t)}},e.useToastTrigger=function(){return Ue()[1].add},e.useToastsContext=Ue,e.useToggle=q,e.useTranslations=function(){var e=l.default.useContext(te);if(void 0===e)throw new Error("useTranslations must be used within the TranslationsContext");return function(t,n){var r=e.translations[t];return r?n?Object.entries(n).reduce(function(e,t){return e.replace("{{"+t[0]+"}}",String(t[1]))},r):r:(console.warn("[@bgord/frontend] missing translation for key: "+t),t)}},e.useUrlFilter=function(e){var t,n=L(),r=null!=(t=new URLSearchParams(null==n?void 0:n.location.search).get(e.name))?t:void 0;return M(v({onUpdate:function(t,r){if(n){var a=new URL(n.location.toString()),u=new URLSearchParams(a.search);void 0===t?u.delete(e.name):u.set(e.name,t),t!==r&&t!==r&&(a.search=u.toString(),history.pushState({},"",a.toString()))}}},e,{defaultQuery:e.defaultQuery,currentQuery:r}))},e.useVideo=function(t){var n=s.useState(e.UseVideoState.initial),r=n[0],a=n[1],u=s.useRef(null),i=T("duration",0),o=T("currentTime",0),l=T("volume",1),c=0===l.value,d=0===i.value?0:Math.round(o.value/i.value*100);function f(e){var t=e.currentTarget;u.current&&(u.current.currentTime=t.valueAsNumber,o.set(t.valueAsNumber))}function v(e){var t=e.currentTarget;u.current&&(u.current.volume=t.valueAsNumber,l.set(t.valueAsNumber))}return{props:{video:{src:t,onTimeUpdate:function(e){o.set(Math.round(e.target.currentTime))},onLoadedMetadata:function(t){var n=t.currentTarget;u.current=n,i.set(Math.round(n.duration)),o.set(n.currentTime),l.set(n.volume),a(e.UseVideoState.ready)},onEnded:function(){a(e.UseVideoState.paused)},controls:!1},player:{min:0,step:1,max:i.value,value:o.value,onInput:f,style:{"--percentage":d+"%"}},volume:{min:0,max:1,step:.01,value:l.value,onInput:v,style:{"--percentage":Math.floor(100*l.value)+"%"}}},actions:{play:function(){u.current&&(u.current.play(),a(e.UseVideoState.playing))},pause:function(){u.current&&(u.current.pause(),a(e.UseVideoState.paused))},mute:function(){u.current&&(u.current.volume=0,l.set(0))},unmute:function(){u.current&&(u.current.volume=1,l.set(1))},reset:function(){u.current&&(u.current.currentTime=0,u.current.pause(),o.set(0),a(e.UseVideoState.paused))},seek:f,changeVolume:v,triggerFullscreen:function(){u.current&&u.current.requestFullscreen()}},meta:{state:r,isInitial:r===e.UseVideoState.initial,isReady:r===e.UseVideoState.ready,isPlaying:r===e.UseVideoState.playing,isPaused:r===e.UseVideoState.paused,matches:function(e){return e.some(function(e){return e===r})},percentage:{raw:d,formatted:d+"%"},currentTime:{raw:o.value,formatted:E.format(o.value)},duration:{raw:i.value,formatted:E.format(i.value)},volume:{value:l.value,raw:Math.floor(100*l.value),formatted:Math.floor(100*l.value)+"%"},muted:c}}},e.useWindowDimensions=P});
//# sourceMappingURL=bgord-frontend.umd.js.map
