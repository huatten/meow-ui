(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6404f2ad"],{"1c07":function(s,e,i){"use strict";i.r(e);var n=function(){var s=this,e=s.$createElement,i=s._self._c||e;return i("div",{staticClass:"switch"},[i("section",[i("h5",[s._v("基础开关")]),i("mw-switch",{model:{value:s.isClose,callback:function(e){s.isClose=e},expression:"isClose"}})],1),i("section",[i("h5",[s._v("禁用开关关闭状态")]),i("mw-switch",{attrs:{disabled:""},model:{value:s.isClose,callback:function(e){s.isClose=e},expression:"isClose"}})],1),i("section",[i("h5",[s._v("禁用开关打开状态")]),i("mw-switch",{attrs:{disabled:""},model:{value:s.isOpen,callback:function(e){s.isOpen=e},expression:"isOpen"}})],1),i("section",[i("h5",[s._v("不同状态下的加载状态")]),i("mw-switch",{attrs:{loading:""},model:{value:s.isClose,callback:function(e){s.isClose=e},expression:"isClose"}})],1),i("section",[i("h5",[s._v("自定义开关大小")]),i("mw-switch",{attrs:{size:"22"},model:{value:s.isClose,callback:function(e){s.isClose=e},expression:"isClose"}})],1),i("section",[i("h5",[s._v("自定义开关颜色")]),i("mw-switch",{attrs:{background:"#3483ff",loading:""},model:{value:s.isOpen,callback:function(e){s.isOpen=e},expression:"isOpen"}})],1),i("section",[i("h5",[s._v("异步控制开关")]),i("mw-switch",{attrs:{value:s.asyncFlag,loading:s.loadFlag},on:{input:s.onInput}})],1)])},l=[],t={data(){return{isClose:!1,isOpen:!0,asyncFlag:!1,loadFlag:!1}},methods:{onInput(s){this.loadFlag=!0,setTimeout(()=>{this.asyncFlag=s,this.loadFlag=!1},2e3)}}},o=t,a=(i("2814"),i("2877")),c=Object(a["a"])(o,n,l,!1,null,"2392c584",null);e["default"]=c.exports},2814:function(s,e,i){"use strict";var n=i("d6d8"),l=i.n(n);l.a},d6d8:function(s,e,i){}}]);