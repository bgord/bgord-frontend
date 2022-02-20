var e=require("react");exports.useToggle=function(n){void 0===n&&(n=!1);var r=e.useState(n),t=r[0],u=r[1];return{on:t,off:!t,enable:function(){return u(!0)},disable:function(){return u(!1)},toggle:function(){return u(function(e){return!e})}}};
//# sourceMappingURL=bgord-frontend.cjs.map
