(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e1c22"],{"7c99":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("sd-container",{attrs:{type:"card"}},[a("template",{slot:"header"},[e._v("导出表格")]),a("div",{staticClass:"sd-mb"},[a("el-button",{attrs:{type:"primary"},on:{click:e.exportCsv}},[a("sd-icon",{attrs:{name:"download"}}),e._v(" 导出 CSV ")],1),a("el-button",{attrs:{type:"primary"},on:{click:e.exportExcel}},[a("sd-icon",{attrs:{name:"download"}}),e._v(" 导出 Excel ")],1)],1),a("el-table",e._b({staticStyle:{width:"100%"}},"el-table",e.table,!1),e._l(e.table.columns,(function(e,t){return a("el-table-column",{key:t,attrs:{prop:e.prop,label:e.label}})})),1)],2)},s=[],n=a("a026"),r=a("e96c"),o=a.n(r);n["default"].use(o.a);var c={data:function(){return{table:{columns:[{label:"ID",prop:"id"},{label:"名称",prop:"name"},{label:"创建日期",prop:"creatDate"},{label:"地址",prop:"address"},{label:"邮编",prop:"zip"}],data:[{id:1,name:"Lucy",creatDate:"2020-05-07",address:"Address",zip:"000000"}],size:"mini",stripe:!0,border:!0}}},methods:{exportCsv:function(){var e=this;this.$export.csv({columns:this.table.columns,data:this.table.data}).then((function(){e.$message("导出CSV成功")}))},exportExcel:function(){var e=this;this.$export.excel({columns:this.table.columns,data:this.table.data,header:"导出 Excel",merges:["A1","E1"]}).then((function(){e.$message("导出表格成功")}))}}},i=c,p=a("2877"),d=Object(p["a"])(i,l,s,!1,null,null,null);t["default"]=d.exports}}]);