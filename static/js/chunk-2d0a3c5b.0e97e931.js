(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3c5b"],{"0434":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("sd-container",{attrs:{type:"card"}},[a("template",{slot:"header"},[a("el-button",{on:{click:t.download}},[a("sd-icon",{attrs:{name:"download"}}),t._v(" 下载演示 .xlsx 表格 ")],1)],1),a("div",{staticClass:"sd-mb"},[a("el-upload",{attrs:{"before-upload":t.handleUpload,action:"default"}},[a("el-button",{attrs:{type:"success"}},[a("sd-icon",{attrs:{name:"file-o"}}),t._v(" 选择要导入的 .xlsx 表格 ")],1)],1)],1),a("el-table",t._b({},"el-table",t.table,!1),t._l(t.table.columns,(function(t,e){return a("el-table-column",{key:e,attrs:{prop:t.prop,label:t.label}})})),1)],2)},n=[],o=(a("d81d"),a("a026")),s=a("a260"),d=a.n(s);o["default"].use(d.a);var r={data:function(){return{table:{columns:[],data:[],size:"mini",stripe:!0,border:!0}}},methods:{handleUpload:function(t){var e=this;return this.$import.xlsx(t).then((function(t){var a=t.header,l=t.results;e.table.columns=a.map((function(t){return{label:t,prop:t}})),e.table.data=l})),!1},download:function(){this.$open("https://cdn.d2.pub/files/sd-admin/demo-table.xlsx")}}},u=r,c=a("2877"),i=Object(c["a"])(u,l,n,!1,null,null,null);e["default"]=i.exports}}]);