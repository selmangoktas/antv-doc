webpackJsonp([133,78],{1:function(t,e){t.exports=function(t,e,n,o){var i,c=t=t||{},s=typeof t["default"];"object"!==s&&"function"!==s||(i=t,c=t["default"]);var a="function"==typeof c?c.options:c;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),o){var r=Object.create(a.computed||null);Object.keys(o).forEach(function(t){var e=o[t];r[t]=function(){return e}}),a.computed=r}return{esModule:i,exports:c,options:a}}},377:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{selectValue:"topRight",options:["topLeft","topRight","bottomLeft","bottomRight"]}},methods:{onChange:function(){this.$notification.config({placement:this.selectValue})},openNotification:function(){this.$notification.open({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification."})}}},t.exports=e["default"]},1174:function(t,e,n){var o=n(1)(n(377),n(1268),null,null);t.exports=o.exports},1268:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("v-select",{staticStyle:{width:"120px","margin-right":"10px"},on:{onChange:t.onChange},model:{value:t.selectValue,callback:function(e){t.selectValue=e},expression:"selectValue"}},t._l(t.options,function(e){return n("v-option",{attrs:{value:e}},[t._v(t._s(e))])})),n("v-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.openNotification(e)}}},[t._v("Display normal message")])],1)},staticRenderFns:[]}}});