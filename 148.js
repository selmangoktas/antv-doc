webpackJsonp([148,91],{1:function(t,e){t.exports=function(t,e,n,o){var i,c=t=t||{},r=typeof t["default"];"object"!==r&&"function"!==r||(i=t,c=t["default"]);var s="function"==typeof c?c.options:c;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),n&&(s._scopeId=n),o){var a=Object.create(s.computed||null);Object.keys(o).forEach(function(t){var e=o[t];a[t]=function(){return e}}),s.computed=a}return{esModule:i,exports:c,options:s}}},415:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={methods:{openNotification:function(){var t=this.$createElement;this.$notification.open({icon:t("v-icon",{attrs:{type:"smile-circle"},style:"color: rgb(16, 142, 233);"}),message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification."})}}},t.exports=e["default"]},1226:function(t,e,n){var o=n(1)(n(415),n(1326),null,null);t.exports=o.exports},1326:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("v-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.openNotification(e)}}},[t._v("Display normal message")])],1)},staticRenderFns:[]}}});