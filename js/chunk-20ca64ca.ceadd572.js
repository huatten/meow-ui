(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20ca64ca"],{"013d":function(e,o,t){},"9dd2":function(e,o,t){"use strict";t("013d")},bfad:function(e,o,t){"use strict";t.r(o);var s=function(){var e=this,o=e._self._c;return o("div",{staticClass:"action-sheet"},[o("section",[o("mw-button",{attrs:{type:"info",inline:!1},on:{click:function(o){e.demo1.show=!0}}},[e._v("基本")]),o("mw-action-sheet",{attrs:{actions:e.demo1.actions},on:{selected:e.selected},model:{value:e.demo1.show,callback:function(o){e.$set(e.demo1,"show",o)},expression:"demo1.show"}})],1),o("section",[o("mw-button",{attrs:{type:"info",inline:!1},on:{click:function(o){e.demo2.show=!0}}},[e._v("安卓风格")]),o("mw-action-sheet",{attrs:{actions:e.demo2.actions,position:e.demo2.position},on:{selected:e.selected},model:{value:e.demo2.show,callback:function(o){e.$set(e.demo2,"show",o)},expression:"demo2.show"}})],1),o("section",[o("mw-button",{attrs:{type:"info",inline:!1},on:{click:function(o){e.demo3.show=!0}}},[e._v("显示取消按钮")]),o("mw-action-sheet",{attrs:{"show-cancel":e.demo3.showCancel,actions:e.demo3.actions},on:{selected:e.selected},model:{value:e.demo3.show,callback:function(o){e.$set(e.demo3,"show",o)},expression:"demo3.show"}})],1),o("section",[o("mw-button",{attrs:{type:"info",inline:!1},on:{click:function(o){e.demo4.show=!0}}},[e._v("显示选项状态")]),o("mw-action-sheet",{attrs:{"show-cancel":e.demo4.showCancel,actions:e.demo4.actions},on:{selected:e.selected},model:{value:e.demo4.show,callback:function(o){e.$set(e.demo4,"show",o)},expression:"demo4.show"}})],1),o("section",[o("mw-button",{attrs:{type:"info",inline:!1},on:{click:function(o){e.demo5.show=!0}}},[e._v("使用header插槽")]),o("mw-action-sheet",{attrs:{"show-cancel":e.demo5.showCancel,actions:e.demo5.actions},on:{selected:e.$_delete},model:{value:e.demo5.show,callback:function(o){e.$set(e.demo5,"show",o)},expression:"demo5.show"}},[o("template",{slot:"header"},[o("div",{staticClass:"header"},[o("h2",[e._v("确定吗？")]),o("p",[e._v("删除后就无法找回了呀")])])])],2)],1)])},n=[],l={data(){return{demo1:{show:!1,actions:[{label:"设置备注和标签",value:0},{label:"把他推荐给朋友",value:1},{label:"加入黑名单",value:2}]},demo2:{show:!1,position:"center",actions:[{label:"设置备注和标签",value:0},{label:"把他推荐给朋友",value:1},{label:"加入黑名单",value:2}]},demo3:{show:!1,showCancel:!0,actions:[{label:"设置备注和标签",value:0},{label:"把他推荐给朋友",value:1},{label:"加入黑名单",value:2}]},demo4:{show:!1,showCancel:!0,actions:[{label:"设置备注和标签",value:0},{label:"把他推荐给朋友",value:1,loading:!0},{label:"加入黑名单",value:2,disabled:!0},{label:"删除",value:3,color:"#f00"}]},demo5:{show:!1,showCancel:!0,actions:[{label:"删除",value:"del",color:"#f00"}]}}},methods:{selected(e){this.$dialog({content:""+JSON.stringify(e)})},$_delete(e){"del"===e.value&&this.$toast("删除成功")}}},a=l,c=(t("9dd2"),t("2877")),i=Object(c["a"])(a,s,n,!1,null,"054da18c",null);o["default"]=i.exports}}]);