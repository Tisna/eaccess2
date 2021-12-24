(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{547:function(t,e){function o(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}o.keys=function(){return[]},o.resolve=o,t.exports=o,o.id=547},756:function(t,e,o){"use strict";o.r(e);var r=o(17),n=(o(56),o(8),o(546)),d=(o(548),{name:"GuestVisit",components:{HotTable:n.a},data:function(){return{httpMethod:"",countAttachment:0,detailsRoot:"detailsRoot",settings:{licenseKey:"non-commercial-and-evaluation",startRows:1}}},computed:{checkIsDataSet:function(){return this.isDataSet}},watch:{checkIsDataSet:function(){if(this.checkIsDataSet){var data=JSON.parse(localStorage.getItem("approvalDetails"));this.setDataToDetails(data)}}},created:function(){this.instance()},methods:{getDetailSourceData:function(){return this.$refs.details.hotInstance.getSourceData()},checkEmptyRow:function(t){return this.$refs.details.hotInstance.isEmptyRow(t)},insertRow:function(t,form){var e=form.total_guest;this.$refs.details.hotInstance.loadData([]),this.$refs.details.hotInstance.alter("insert_row",t,e);for(var o=this.$refs.details.hotInstance.countRows(),i=0;i<o;i++)this.$refs.details.hotInstance.setDataAtRowProp([[i,"arrival_date",form.date_in],[i,"departure_date",form.date_out]])},instance:function(){window.details=this},countDetailsRows:function(){return this.$refs.details.hotInstance.countRows()},addLine:function(){var t=this.$refs.details.hotInstance.countRows();this.$refs.details.hotInstance.alter("insert_row",t+1),this.$refs.details.hotInstance.setDataAtRowProp([[t,"ReqDate",this.form.DocDate],[t,"WhsCode",this.form.WhsCode]])},getAddData:function(){return this.$refs.details.hotInstance.getSourceData()},checkIfEmptyRow:function(t){return this.$refs.details.hotInstance.isEmptyRow(t)},getDataAtRowPropDetails:function(t,e){return this.$refs.details.hotInstance.getDataAtRowProp(t,e)},setDataToHttpMethod:function(t){this.httpMethod=t},setDataToDetails:function(data){var t=this;this.updateTableSettings(),setTimeout((function(){t.$refs.details.hotInstance.loadData(data)}),300)},removeData:function(t){var e=this;this.$axios.delete("/api/reservation/master/1",{params:{doc_entry:t}}).then((function(t){e.$swal({type:"success",title:"Success!",text:t.data.message}),e.$emit("getData")})).catch((function(t){e.$swal({type:"error",title:"Error",text:t.response.data.message}),e.$emit("getData")}))},setCountAttachment:function(t,e){this.$refs.details.hotInstance.setDataAtRowProp(e,"CountAttachment",t)},updateTableSettings:function(){this.$refs.details.hotInstance.updateSettings({colHeaders:["Title","Name","Position","Body Wt.","Departing City","Arriving Date","Flight No","Arriving Time","Departing Date","Flight No","Departing Time","Destination City","Transport To IMIP","Transport From IMIP","Notes"],columns:[{data:"name_title",width:50,height:26,wordWrap:!1,type:"dropdown",source:["Mr.","Mrs.","Ms."]},{data:"name",width:220,height:26,wordWrap:!1,type:"autocomplete",strict:!1,filter:!0,allowInvalid:!0,source:function(t,e){e(window.details.$auth.$storage.getState("employee_pluck"))}},{data:"position",width:130,height:26,wordWrap:!1},{data:"body_weight",width:70,height:26,wordWrap:!1},{data:"departing_city",width:100,height:26,wordWrap:!1},{data:"arrival_date",width:100,height:26,wordWrap:!1,type:"date",dateFormat:"MM/DD/YYYY",correctFormat:!0},{data:"arrival_flight_no",width:100,height:26,wordWrap:!1},{data:"arrival_time",width:100,height:26,wordWrap:!1,type:"time",timeFormat:"H:mm:ss",correctFormat:!0},{data:"departure_date",width:100,height:26,wordWrap:!1,type:"date",dateFormat:"MM/DD/YYYY",correctFormat:!0},{data:"departure_flight_no",width:100,height:26,wordWrap:!1},{data:"departure_time",width:100,height:26,wordWrap:!1,type:"time",timeFormat:"H:mm:ss",correctFormat:!0},{data:"destination_city",width:100,height:26,wordWrap:!1},{data:"transport_to",width:120,height:26,wordWrap:!1,type:"dropdown",source:["Land","Sea","Air"]},{data:"transport_from",width:120,height:26,wordWrap:!1,type:"dropdown",source:["Land","Sea","Air"]},{data:"notes",width:150,height:26,wordWrap:!1}],currentRowClassName:"currentRow",currentColClassName:"currentCol",startRows:0,manualColumnFreeze:!0,currData:{},rowHeaders:!0,manualColumnResize:!0,manualRowResize:!0,filters:!0,autoRowSize:!1,autoColumnSize:!1,viewportRowRenderingOffset:1e3,viewportColumnRenderingOffset:100,colWidths:80,dropdownMenu:!0,columnSorting:!0,rowHeights:23,persistentState:!0,width:"100%",beforeRemoveRow:function(t,e,o,source){var r=window.details,n=prompt("Do you want to delete a row? Type y to remove"),d=[];return"y"===n&&(o.forEach((function(t,e){var o=r.$refs.details.hotInstance.getDataAtRowProp(t,"LineEntry");o&&d.push(o)})),d.length>0&&r.removeData(d),!0)},dataSchema:{name_title:"Mr."},afterChange:function(t,source){var e=window.details;t&&("edit"!==source&&"autofill"!==source&&"paste"!==source||t.forEach((function(t){var o=Object(r.a)(t,4),n=o[0],d=o[1],c=(o[2],o[3]);"name"===d&&e.$axios.get("/api/master/employee-by-name",{params:{name:c}}).then((function(t){t.data&&e.$refs.details.hotInstance.setDataAtRowProp(n,"position",t.data.JobPosition)}))})))},cells:function(t,col,e){var o={},r=window.details;if("patch"===r.httpMethod){for(var i=0;i<=20;i++)col===i&&(o.readOnly=!0);for(var n=6;n<=6;n++)col===n&&r.$gates.hasAnyRole("I-Tracc")&&(o.readOnly=!1)}return o},contextMenu:{callback:function(t,e){var o=window.details;"remove_row"===t&&(o.isInvDetailChanges=!0,o.isInvChanges=!0)}},hiddenColumns:{copyPasteEnabled:!1,indicator:!1,columns:[17,18,19,20,21,22,24]}})}}}),c=o(52),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("HotTable",{ref:"details",attrs:{root:t.detailsRoot,settings:t.settings}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);