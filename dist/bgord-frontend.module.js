import{useState as n,useEffect as e}from"react";function t(e){void 0===e&&(e=!1);var t=n(e),i=t[0],r=t[1];return{on:i,off:!i,enable:function(){return r(!0)},disable:function(){return r(!1)},toggle:function(){return r(function(n){return!n})}}}function i(){var t=n({width:void 0,height:void 0}),i=t[0],r=t[1];return e(function(){function n(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",n),n(),function(){return window.removeEventListener("resize",n)}},[]),i}export{t as useToggle,i as useWindowDimensions};
//# sourceMappingURL=bgord-frontend.module.js.map
