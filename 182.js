webpackJsonp([182,91],{1:function(e,r){e.exports=function(e,r,n,t){var o,s=e=e||{},i=typeof e["default"];"object"!==i&&"function"!==i||(o=e,s=e["default"]);var c="function"==typeof s?s.options:s;if(r&&(c.render=r.render,c.staticRenderFns=r.staticRenderFns),n&&(c._scopeId=n),t){var a=Object.create(c.computed||null);Object.keys(t).forEach(function(e){var r=t[e];a[e]=function(){return r}}),c.computed=a}return{esModule:o,exports:s,options:c}}},377:function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]={methods:{onClose:function(e){console.log(e,"I was closed.")}}},e.exports=r["default"]},1153:function(e,r,n){var t=n(1)(n(377),n(1288),null,null);e.exports=t.exports},1288:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("section",[n("v-alert",{attrs:{message:"Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text",type:"warning",closable:""},on:{onClose:e.onClose}}),n("v-alert",{attrs:{message:"Error Text",description:"Error Description Error Description Error Description Error Description Error Description Error Description",type:"error",closable:""},on:{onClose:e.onClose}})],1)},staticRenderFns:[]}}});