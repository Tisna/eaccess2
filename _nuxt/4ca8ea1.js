(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{433:function(t,e,n){var content=n(434);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("2065bca8",content,!0,{sourceMap:!1})},434:function(t,e,n){var o=n(12)(!1);o.push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__text{padding:0 24px 15px}.v-dialog>.v-card>.v-card__subtitle{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),t.exports=o},457:function(t,e,n){var content=n(458);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("dc0628f2",content,!0,{sourceMap:!1})},458:function(t,e,n){var o=n(12)(!1);o.push([t.i,".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:1;pointer-events:none}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}",""]),t.exports=o},466:function(t,e,n){"use strict";n(195);var o=n(196);e.a=Object(o.a)("flex")},467:function(t,e,n){"use strict";var o=n(116),r=n(2),l=(n(25),n(59),n(56),n(47),n(57),n(115),n(9),n(5),n(7),n(14),n(8),n(15),n(433),n(715)),c=n(437),d=n(197),h=n(463),v=n(202),f=n(464),m=n(462),x=n(53),y=n(200),_=n(11),w=n(6),O=n(1);function A(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function S(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?A(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):A(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var k=Object(_.a)(c.a,d.a,h.a,v.a,f.a,m.a,x.a);e.a=k.extend({name:"v-dialog",directives:{ClickOutside:y.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(r.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(r.a)(t,"v-dialog--active",this.isActive),Object(r.a)(t,"v-dialog--persistent",this.persistent),Object(r.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(r.a)(t,"v-dialog--scrollable",this.scrollable),Object(r.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(w.e)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):v.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===O.y.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),r=Object(o.a)(n).find((function(t){return!t.hasAttribute("disabled")}));r&&r.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(l.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:S({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=S(S({},data.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(O.h)(this.maxWidth),width:"auto"===this.width?void 0:Object(O.h)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},474:function(t,e,n){"use strict";n(195);var o=n(196);e.a=Object(o.a)("layout")},483:function(t,e,n){"use strict";var o=n(2),r=(n(25),n(457),n(437)),l=n(29),c=n(475),d=n(197),h=n(476),v=n(53),f=n(1),m=n(6),x=n(11);e.a=Object(x.a)(l.a,c.a,d.a,h.a,v.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!(this.bottom||this.left||this.top||this.right),o=!1!==this.attach?e.offsetLeft:e.left,r=0;return this.top||this.bottom||n?r=o+e.width/2-content.width/2:(this.left||this.right)&&(r=o+(this.right?e.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(r-=parseInt(this.nudgeLeft)),this.nudgeRight&&(r+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(r,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!1!==this.attach?e.offsetTop:e.top,o=0;return this.top||this.bottom?o=n+(this.bottom?e.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(o=n+e.height/2-content.height/2),this.nudgeTop&&(o-=parseInt(this.nudgeTop)),this.nudgeBottom&&(o+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(o+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(f.h)(this.maxWidth),minWidth:Object(f.h)(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(f.u)(this,"activator",!0)&&Object(m.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=r.a.options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===f.y.esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var content=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[content]):content},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(o.a)(t,this.contentClass,!0),Object(o.a)(t,"menuable__content__active",this.isActive),Object(o.a)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},734:function(t,e,n){"use strict";n.r(e);n(33),n(198),n(7);var o={name:"Reservation",data:function(){return{totalData:0,allData:[],dataFilter:[],searchStatus:"All",documentStatus:[],counter:0,loading:!0,dialogLoading:!1,dialogFilter:!1,options:{},itemSearch:[],search:"",searchItem:"",loadNewBtn:!1,headers:[{text:"",value:"Action",sortable:!1,filterable:!1},{text:"DocNum",value:"DocNum",sortable:!1,filterable:!1},{text:"DocDate",value:"DocDate",sortable:!1,filterable:!1},{text:"WH",value:"WhsCode",sortable:!1,filterable:!1},{text:"ReqType",value:"RequestType",sortable:!1,filterable:!1},{text:"ItemType",value:"ItemType",sortable:!1,filterable:!1},{text:"Remarks",value:"Memo",sortable:!1,filterable:!1},{text:"ReqDate",value:"RequiredDate",sortable:!1,filterable:!1},{text:"Requester",value:"RequestName",sortable:!1,filterable:!1},{text:"Status",value:"DocumentStatus",sortable:!1,filterable:!1},{text:"App Status",value:"AppStatus",sortable:!1,filterable:!1},{text:"GIR NO",value:"SAP_GIRNo",sortable:!1,filterable:!1},{text:"PR NO",value:"SAP_PRNo",sortable:!1,filterable:!1},{text:"PO NO",value:"PONum",sortable:!1,filterable:!1},{text:"GRPO NO",value:"GRPONum",sortable:!1,filterable:!1},{text:"GI NO",value:"SAP_GINo",sortable:!1,filterable:!1},{text:"Transfer NO",value:"SAP_TrfNo",sortable:!1,filterable:!1},{text:"Created By",value:"CreatedName",sortable:!1,filterable:!1},{text:"",value:"ApprovalStatus",sortable:!1,filterable:!1}]}},head:function(){return{title:"Reservation Request"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0},search:function(){this.getDataFromApi()}},mounted:function(){},methods:{emitData:function(data){this.documentStatus=data.documentStatus,this.itemSearch=data.itemSearch,this.searchStatus=data.searchStatus,this.searchItem=data.searchItem,this.search=data.search,this.getDataFromApi()},itemRowBackground:function(t){switch(t.DocumentStatus){case"Open":return"bg-orange";case"Cancel":return"bg-red";case"Closed":return"bg-green";default:return"bg-white"}},getDataFromApi:function(){var t=this;this.loading=!0;var e=this;this.$axios.get("/api/reservation/master",{params:{options:e.options,search:e.search,searchItem:e.searchItem,searchStatus:e.searchStatus}}).then((function(e){t.loading=!1,t.allData=e.data.rows,t.totalData=e.data.total,t.itemSearch=e.data.filter,t.documentStatus=e.data.status})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message}),t.loading=!1}))},nextPages:function(t){this.dialogLoading=!0,this.$router.push({path:"/reservation/form",query:{id:t.U_DocEntry,status:"update"}})},newData:function(){var t=this;this.loadNewBtn=!0,this.$axios.get("/api/reservation/max-doc-resv").then((function(e){t.loadNewBtn=!1,t.$router.push({path:"/reservation/form",query:{id:e.data.max_num.DocEntry,status:"add"}})})).catch((function(e){t.loadNewBtn=!1}))},deleteItem:function(t){var e=this;this.$swal({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(n){n.isConfirmed&&e.$axios.delete("/api/reservation/"+t.U_DocEntry).then((function(t){t.data.error?e.$swal("Error!",t.data.message,"error"):(e.$swal("Deleted!","Data has been deleted.","success"),e.getDataFromApi())}))}))}}},r=n(52),l=n(71),c=n.n(l),d=n(203),h=n(440),v=n(424),f=n(717),m=n(467),x=n(412),y=n(466),_=n(180),w=n(474),O=n(422),A=n(45),S=n(117),k=n(483),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",[n("v-flex",{attrs:{sm12:""}},[n("v-toolbar",{attrs:{flat:"",color:"white",dense:""}},[n("v-toolbar-title",[t._v("\n        Reservation Request\n      ")]),t._v(" "),n("v-divider",{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-dialog",{attrs:{persistent:"","max-width":"400px"},model:{value:t.dialogFilter,callback:function(e){t.dialogFilter=e},expression:"dialogFilter"}},[n("v-card",[n("v-card-title",[t._v("Filter Form")]),t._v(" "),n("v-card-text",[n("LazyTableFilter",{staticClass:"hidden-sm-and-up",attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search},on:{getDataFromApi:t.emitData}})],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:"",small:""},on:{click:function(e){t.dialogFilter=!1}}},[t._v("\n              Close\n            ")])],1)],1)],1),t._v(" "),n("LazyTableFilter",{staticClass:"hidden-sm-and-down",attrs:{"document-status":t.documentStatus,"search-status":t.searchStatus,"item-search":t.itemSearch,"search-item":t.searchItem,search:t.search},on:{getDataFromApi:t.emitData}}),t._v(" "),n("v-btn",{staticClass:"d-md-none d-lg-none d-sm-flex d-xs-flex",attrs:{icon:"",color:"green",dark:""},on:{click:function(e){t.dialogFilter=!0}}},[n("v-icon",[t._v("mdi-filter-variant")])],1),t._v(" "),n("v-btn",{attrs:{icon:"",loading:t.loadNewBtn,color:"green",dark:""},on:{click:t.newData}},[n("v-icon",[t._v("mdi-plus-circle")])],1),t._v(" "),n("v-btn",{attrs:{loading:t.loading,icon:""},on:{click:t.getDataFromApi}},[n("v-icon",[t._v("mdi-refresh")])],1)],1),t._v(" "),n("div",{staticClass:"mt-2"},[n("v-data-table",{staticClass:"elevation-1",attrs:{dense:"","mobile-breakpoint":0,headers:t.headers,items:t.allData,"items-per-page":15,options:t.options,"server-items-length":t.totalData,loading:t.loading,"item-class":t.itemRowBackground,"footer-props":{"items-per-page-options":[15,50,100,-1]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.Action",fn:function(e){var o=e.item;return[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,l=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",l,!1),r),[n("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(e){return t.nextPages(o)}}},[t._v("\n                  mdi-arrow-right-bold\n                ")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("Open details")])])]}},{key:"item.ApprovalStatus",fn:function(e){var o=e.item;return[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,l=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",l,!1),r),[n("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(e){return t.$refs.approvalStages.openApprovalStages(o)}}},[t._v("\n                  mdi-format-line-weight\n                ")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("Approval Details")])])]}}],null,!0)})],1)],1),t._v(" "),t.dialogLoading?n("LazySpinnerLoading",{ref:"spinnerLoadingImport"}):t._e(),t._v(" "),n("LazyResvApprovalDetails",{ref:"approvalStages"})],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:h.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c,VDataTable:f.a,VDialog:m.a,VDivider:x.a,VFlex:y.a,VIcon:_.a,VLayout:w.a,VSpacer:O.a,VToolbar:A.a,VToolbarTitle:S.a,VTooltip:k.a})}}]);