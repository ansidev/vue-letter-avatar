!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueLetterAvatar=t():e.VueLetterAvatar=t()}(window,function(){return function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(e,t,n,r,o,i,a,u){var s,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=s):o&&(s=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),s)if(c.functional){c._injectStyles=s;var l=c.render;c.render=function(e,t){return s.call(t),l(e,t)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,s):[s]}return{exports:e,options:c}}({props:{size:{type:String,default:"50"},rounded:{type:Boolean,default:!1},name:{type:String,required:!0}},computed:{avatarLetter:function(){return this.name[0].toUpperCase()},svgStyle:function(){var e=this.avatarLetter.charCodeAt()-64,t="hsl(".concat(360/26*e,", 68%, 48%)");return{width:"".concat(this.size,"px"),height:"".concat(this.size,"px"),borderRadius:this.rounded?"100%":"0",background:t}},textStyle:function(){return{fill:"rgba(255, 255, 255, .7)",fontFamily:"'Lucida Console', Monaco, monospace",fontSize:"".concat(.65*this.size,"px")}}}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{style:e.svgStyle},[n("text",{style:e.textStyle,attrs:{x:"50%",y:"50%","text-anchor":"middle","dominant-baseline":"central"}},[e._v("\n    "+e._s(e.avatarLetter)+"\n  ")])])},[],!1,null,null,null);r.options.__file="Avatar.vue";var o=r.exports,i={install:function(e){e.component("vue-letter-avatar",o)}};t.default=i}])});
//# sourceMappingURL=index.js.map