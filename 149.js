webpackJsonp([149,91],{1:function(t,e){t.exports=function(t,e,n,o){var i,c=t=t||{},s=typeof t["default"];"object"!==s&&"function"!==s||(i=t,c=t["default"]);var r="function"==typeof c?c.options:c;if(e&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns),n&&(r._scopeId=n),o){var a=Object.create(r.computed||null);Object.keys(o).forEach(function(t){var e=o[t];a[t]=function(){return e}}),r.computed=a}return{esModule:i,exports:c,options:r}}},414:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={methods:{openNotification:function(){this.$notification.open({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification."})}}},t.exports=e["default"]},1225:function(t,e,n){var o=n(1)(n(414),n(1304),null,null);t.exports=o.exports},1304:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("v-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.openNotification(e)}}},[t._v("Display normal message")])],1)},staticRenderFns:[]}}});