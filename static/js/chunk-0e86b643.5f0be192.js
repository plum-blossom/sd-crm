(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e86b643"],{"3d7f":function(t,e,n){},"609e":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sd-contentmenu-list",on:{click:t.rowClick}},t._l(t.menulist,(function(e){return n("div",{key:e.value,staticClass:"sd-contentmenu-item",attrs:{"data-value":e.value,flex:"cross:center main:center"}},[e.icon?n("sd-icon",{attrs:{name:e.icon}}):t._e(),n("div",{staticClass:"sd-contentmenu-item-title",attrs:{"flex-box":"1"}},[t._v(" "+t._s(e.title)+" ")])],1)})),0)},i=[],a={name:"sd-contextmenu-list",props:{menulist:{type:Array,default:function(){return[]}}},methods:{rowClick:function(t){var e=t.target;while(!e.dataset.value)e=e.parentNode;this.$emit("rowClick",e.dataset.value)}}},c=a,l=(n("f0b8"),n("2877")),u=Object(l["a"])(c,s,i,!1,null,null,null);e["default"]=u.exports},f0b8:function(t,e,n){"use strict";n("3d7f")}}]);