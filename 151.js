webpackJsonp([151,91],{1:function(e,t){e.exports=function(e,t,n,o){var i,s=e=e||{},r=typeof e["default"];"object"!==r&&"function"!==r||(i=e,s=e["default"]);var c="function"==typeof s?s.options:s;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns),n&&(c._scopeId=n),o){var a=Object.create(c.computed||null);Object.keys(o).forEach(function(e){var t=o[e];a[e]=function(){return t}}),c.computed=a}return{esModule:i,exports:s,options:c}}},411:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){var e=this.$createElement;return{footer:[e("v-button",{attrs:{size:"large"},nativeOn:{click:this.onCancel}},["return"]),e("v-button",{attrs:{type:"primary",size:"large"},nativeOn:{click:this.onCancel}},["ok"])],visible:!1}},methods:{showModal:function(){this.visible=!0},onOk:function(e){this.visible=!1},onCancel:function(e){this.visible=!1}}},e.exports=t["default"]},1222:function(e,t,n){var o=n(1)(n(411),n(1375),null,null);e.exports=o.exports},1375:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("v-button",{attrs:{type:"primary"},nativeOn:{click:function(t){e.showModal(t)}}},[e._v("Open a modal dialog")]),n("v-modal",{attrs:{title:"Basic Modal",footer:e.footer},on:{onOk:e.onOk,onCancel:e.onCancel},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[n("p",[e._v("some contents...")]),n("p",[e._v("some contents...")]),n("p",[e._v("some contents...")])])],1)},staticRenderFns:[]}}});