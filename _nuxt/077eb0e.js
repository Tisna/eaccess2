(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{750:function(t,e,o){"use strict";o.r(e);o(19),o(36),o(37),o(289),o(56),o(32),o(59),o(211),o(62);var n={name:"ExportFilter",data:function(){return{menu:"",menu2:"",url:"",loading:!1,dialog:!1,form:{date_from:null,date_to:null}}},methods:{openDialog:function(t){this.url=t,this.loading=!1,this.dialog=!0},exportData:function(){var t=this;this.loading=!0,this.$axios.get(this.url,{params:{form:this.form},responseType:"arraybuffer"}).then((function(e){t.loading=!1;var o=new Blob([e.data],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;"}),n=window.URL.createObjectURL(o),link=document.createElement("a");link.href=window.URL.createObjectURL(o),link.download=t.sanitizeTitle(t.form.date_from)+"-"+t.sanitizeTitle(t.form.date_to)+".xlsx",document.body.appendChild(link),link.click(),setTimeout((function(){document.body.removeChild(link),window.URL.revokeObjectURL(n)}),100)})).catch((function(e){t.loading=!1,t.$swal({type:"error",title:"Error",text:"Some error occurred!"})}))},sanitizeTitle:function(t){t=(t=t.replace(/^\s+|\s+$/g,"")).toLowerCase();for(var e="àáäâèéëêìíïîòóöôùúüûñç·/_,:;",i=0,o=e.length;i<o;i++)t=t.replace(new RegExp(e.charAt(i),"g"),"aaaaeeeeiiiioooouuuunc------".charAt(i));return t=t.replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},r=o(52),l=o(71),c=o.n(l),d=o(209),m=o(443),f=o(426),v=o(502),_=o(533),x=o(474),h=o(476),k=o(180),w=o(484),y=o(623),V=o(503),C=o(424),T=o(505),D=o(487),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{persistent:"","max-width":"400"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-card-title",[o("span",{staticClass:"text-subtitle-2"},[t._v("Export Data")])]),t._v(" "),o("v-card-text",[o("v-form",{nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.exportData.apply(null,arguments)}}},[o("v-layout",{attrs:{wrap:""}},[o("v-row",[o("v-col",{staticClass:"mt-2 pa-1",attrs:{cols:"12"}},[o("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-text-field",t._g(t._b({attrs:{placeholder:"Date From","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.date_from,callback:function(e){t.$set(t.form,"date_from",e)},expression:"form.date_from"}},"v-text-field",r,!1),n))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),o("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.menu=!1}},model:{value:t.form.date_from,callback:function(e){t.$set(t.form,"date_from",e)},expression:"form.date_from"}})],1)],1),t._v(" "),o("v-col",{staticClass:"mt-0 pa-1",attrs:{cols:"12"}},[o("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-text-field",t._g(t._b({attrs:{placeholder:"Date To","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",solo:"",dense:"","hide-details":"auto"},model:{value:t.form.date_to,callback:function(e){t.$set(t.form,"date_to",e)},expression:"form.date_to"}},"v-text-field",r,!1),n))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[t._v(" "),o("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.menu2=!1}},model:{value:t.form.date_to,callback:function(e){t.$set(t.form,"date_to",e)},expression:"form.date_to"}})],1)],1)],1)],1)],1)],1),t._v(" "),o("v-card-actions",[o("v-btn",{attrs:{color:"red darken-1",text:"",small:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n        Close\n      ")]),t._v(" "),o("v-spacer"),t._v(" "),o("v-tooltip",{staticStyle:{"margin-top":"4px"},attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-btn",t._g(t._b({staticClass:"white--text ml-1",attrs:{small:"",elevation:"3",color:"success",loading:t.loading},on:{click:function(e){return t.exportData()}}},"v-btn",r,!1),n),[o("v-icon",{attrs:{small:""}},[t._v("\n              mdi-check\n            ")])],1)]}}])},[t._v(" "),o("span",[t._v("Export")])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:m.a,VCardActions:f.a,VCardText:f.b,VCardTitle:f.c,VCol:v.a,VDatePicker:_.a,VDialog:x.a,VForm:h.a,VIcon:k.a,VLayout:w.a,VMenu:y.a,VRow:V.a,VSpacer:C.a,VTextField:T.a,VTooltip:D.a})}}]);