!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],n):n((e||self).frontend={},e.react)}(this,function(e,n){e.useToggle=function(e){void 0===e&&(e=!1);var t=n.useState(e),o=t[0],f=t[1];return{on:o,off:!o,enable:function(){return f(!0)},disable:function(){return f(!1)},toggle:function(){return f(function(e){return!e})}}}});
//# sourceMappingURL=bgord-frontend.umd.js.map
