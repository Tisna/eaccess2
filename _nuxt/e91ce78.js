(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{282:function(t,e,r){"use strict";var n=r(209);e.a=n.a},426:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return f}));var n=r(443),o=r(1),l=Object(o.j)("v-card__actions"),d=Object(o.j)("v-card__subtitle"),c=Object(o.j)("v-card__text"),f=Object(o.j)("v-card__title");n.a},430:function(t,e,r){"use strict";var n=r(438),o=r(439);t.exports=n("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},438:function(t,e,r){"use strict";var n=r(4),o=r(16),l=r(118),d=r(41),c=r(284),f=r(283),v=r(153),m=r(23),h=r(10),_=r(201),x=r(86),y=r(204);t.exports=function(t,e,r){var k=-1!==t.indexOf("Map"),w=-1!==t.indexOf("Weak"),O=k?"set":"add",j=o[t],C=j&&j.prototype,S=j,D={},$=function(t){var e=C[t];d(C,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(w&&!m(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return w&&!m(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(w&&!m(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})};if(l(t,"function"!=typeof j||!(w||C.forEach&&!h((function(){(new j).entries().next()})))))S=r.getConstructor(e,t,k,O),c.enable();else if(l(t,!0)){var P=new S,V=P[O](w?{}:-0,1)!=P,B=h((function(){P.has(1)})),E=_((function(t){new j(t)})),A=!w&&h((function(){for(var t=new j,e=5;e--;)t[O](e,e);return!t.has(-0)}));E||((S=e((function(e,r){v(e,S,t);var n=y(new j,e,S);return null!=r&&f(r,n[O],{that:n,AS_ENTRIES:k}),n}))).prototype=C,C.constructor=S),(B||A)&&($("delete"),$("has"),k&&$("get")),(A||V)&&$(O),w&&C.clear&&delete C.clear}return D[t]=S,n({global:!0,forced:S!=j},D),x(S,t),w||r.setStrong(S,t,k),S}},439:function(t,e,r){"use strict";var n=r(39).f,o=r(79),l=r(200),d=r(85),c=r(153),f=r(283),v=r(202),m=r(203),h=r(34),_=r(284).fastKey,x=r(63),y=x.set,k=x.getterFor;t.exports={getConstructor:function(t,e,r,v){var m=t((function(t,n){c(t,m,e),y(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),h||(t.size=0),null!=n&&f(n,t[v],{that:t,AS_ENTRIES:r})})),x=k(e),w=function(t,e,r){var n,o,l=x(t),d=O(t,e);return d?d.value=r:(l.last=d={index:o=_(e,!0),key:e,value:r,previous:n=l.last,next:void 0,removed:!1},l.first||(l.first=d),n&&(n.next=d),h?l.size++:t.size++,"F"!==o&&(l.index[o]=d)),t},O=function(t,e){var r,n=x(t),o=_(e);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==e)return r};return l(m.prototype,{clear:function(){for(var t=x(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,h?t.size=0:this.size=0},delete:function(t){var e=this,r=x(e),n=O(e,t);if(n){var o=n.next,l=n.previous;delete r.index[n.index],n.removed=!0,l&&(l.next=o),o&&(o.previous=l),r.first==n&&(r.first=o),r.last==n&&(r.last=l),h?r.size--:e.size--}return!!n},forEach:function(t){for(var e,r=x(this),n=d(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:r.first;)for(n(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!O(this,t)}}),l(m.prototype,r?{get:function(t){var e=O(this,t);return e&&e.value},set:function(t,e){return w(this,0===t?0:t,e)}}:{add:function(t){return w(this,t=0===t?0:t,t)}}),h&&n(m.prototype,"size",{get:function(){return x(this).size}}),m},setStrong:function(t,e,r){var n=e+" Iterator",o=k(e),l=k(n);v(t,e,(function(t,e){y(this,{type:n,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=l(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),m(e)}}},443:function(t,e,r){"use strict";r(9),r(5),r(7),r(14),r(8),r(15);var n=r(2),o=(r(25),r(205),r(449),r(212)),l=r(483),d=r(82),c=r(11);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(l.a,d.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return v(v({"v-card":!0},d.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=v({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},449:function(t,e,r){var content=r(450);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("e23b7040",content,!0,{sourceMap:!1})},450:function(t,e,r){var n=r(12)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},471:function(t,e,r){"use strict";r(196);var n=r(197);e.a=Object(n.a)("flex")},476:function(t,e,r){"use strict";var n=r(2),o=(r(47),r(57),r(206),r(7),r(8),r(56),r(115),r(9),r(5),r(14),r(15),r(11)),l=r(87),d=r(119);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(d.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},524:function(t,e,r){"use strict";r.r(e);r(434),r(19),r(37),r(47),r(57),r(56);var n={name:"FormRapidOut",props:{formTitle:{type:String,default:""},alias:{type:String,default:""},itemYesNo:{type:Array,default:function(){return[]}},itemBilling:{type:Array,default:function(){return[]}},employee:{type:Array,default:function(){return[]}}},data:function(){return{dialog:!1,loading:!1,submitLoad:!1,menu3:"",menu2:"",menu1:"",url:"",httpMethod:"get",form:{},attachment:[],defaultForm:{},isLoading:!1,model:null,model2:null,search:null,entries:this.employee,disabled:!0,display:!1,leaveLists:[]}},methods:{formatCurrentDate:function(t){var e=new Date(t),dd=String(e.getDate()).padStart(2,"0"),r=String(e.getMonth()+1).padStart(2,"0"),n=e.getFullYear();return e=n+"-"+r+"-"+dd},checkSwabDate:function(t){var e=new Date,dd=String(e.getDate()).padStart(2,"0"),r=String(e.getMonth()+1).padStart(2,"0"),n=e.getFullYear();e=n+"-"+r+"-"+dd;var o=new Date(e);return new Date(t)>=o},changeSelect:function(t){t?(this.disabled=!1,this.display=!0):this.display=!1},checkClinic:function(t){return this.$gates.hasAnyRole("Superuser|Admin Klinik")},checkDisabled:function(){return!this.$gates.hasAnyRole("Superuser|Admin Klinik")&&this.disabled},getDataEmployee:function(){var t=this;this.isLoading=!0,this.$axios.get("/api/employees",{params:{alias:this.alias}}).then((function(e){t.entries=e.data.rows})).catch((function(e){t.$swal({type:"error",title:"Error",text:e.response.data.message})})).finally((function(){return t.isLoading=!1}))},changeData:function(){this.form.user_name=this.model.Name,this.form.id_card=this.model.Nik,this.form.ktp=this.model.IdNumber,this.form.occupation=this.model.JobPosition,this.form.department=this.model.Department,this.form.company=this.model.Company,this.form.no_hp=this.model.MobilePhone,this.form.address=this.model.AlamatKTP,this.form.name_boss=this.model.DirectSuperiorName,this.form.nik_boss=this.model.DirectSuperiorNIK,this.form.position_boss=this.model.DirectSuperiorPosition,this.form.work_location=this.model.WorkLocation,this.$emit("leaveList",this.form.id_card)},changeDataLeave:function(){this.form.leave_from_to=this.model2.date_from_to,this.form.reference_number=this.model2.DocumentReferenceNumber,this.model2.jenisCuti.includes("Cuti Family Visit")?this.form.payment="Ditagihkan kepada User/Departemen/Perusahaan":this.form.payment="Dibayar Tunai"},setLeaveList:function(data){this.leaveLists=data},setForm:function(form,t,e){var r=this;if(this.httpMethod=t,this.disabled="patch"===t,this.form=Object.assign({},form),"post"===t){this.display=!0,this.form.payment="Dibayar Tunai";var n=new Date,dd=String(n.getDate()).padStart(2,"0"),o=String(n.getMonth()+1).padStart(2,"0"),l=n.getFullYear();n=l+"-"+o+"-"+dd,this.form.paper_date=n,this.form.for_self=e}else this.display=!0,this.$emit("leaveList",this.form.id_card),setTimeout((function(){r.form=Object.assign({},form),r.form.for_self=e}),300)},close:function(){this.$emit("close")},save:function(){this.$emit("save",{form:this.form,defaultForm:this.defaultForm})}}},o=r(52),l=r(71),d=r.n(l),c=r(209),f=r(443),v=r(426),m=r(533),h=r(471),_=r(476),x=r(484),y=r(623),k=r(490),w=r(424),O=r(505),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",[r("span",{staticClass:"text-subtitle-2",domProps:{textContent:t._s(t.formTitle)}})]),t._v(" "),r("v-card-text",[r("v-form",[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{staticClass:"d-flex",attrs:{md12:""}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[r("v-menu",{ref:"menu2",attrs:{disabled:t.disabled,"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-text-field",t._g(t._b({attrs:{label:"Tanggal Surat","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.paper_date,callback:function(e){t.$set(t.form,"paper_date",e)},expression:"form.paper_date"}},"v-text-field",o,!1),n))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[t._v(" "),r("v-date-picker",{attrs:{readonly:t.disabled,"no-title":""},on:{input:function(e){t.menu2=!1}},model:{value:t.form.paper_date,callback:function(e){t.$set(t.form,"paper_date",e)},expression:"form.paper_date"}})],1)],1),t._v(" "),r("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{xs12:""}},[r("v-text-field",{attrs:{label:"Nama",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.user_name,callback:function(e){t.$set(t.form,"user_name",e)},expression:"form.user_name"}})],1),t._v(" "),r("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[r("v-text-field",{attrs:{disabled:t.disabled,label:"No. ID Card",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.id_card,callback:function(e){t.$set(t.form,"id_card",e)},expression:"form.id_card"}})],1),t._v(" "),r("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[r("v-text-field",{attrs:{disabled:t.disabled,label:"NIK KTP",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.ktp,callback:function(e){t.$set(t.form,"ktp",e)},expression:"form.ktp"}})],1),t._v(" "),r("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[r("v-text-field",{attrs:{disabled:t.disabled,label:"Departemen",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.department,callback:function(e){t.$set(t.form,"department",e)},expression:"form.department"}})],1),t._v(" "),r("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[r("v-text-field",{attrs:{disabled:t.disabled,label:"Perusahaan",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.company,callback:function(e){t.$set(t.form,"company",e)},expression:"form.company"}})],1),t._v(" "),r("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[r("v-text-field",{attrs:{disabled:t.disabled,label:"Jabatan",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.occupation,callback:function(e){t.$set(t.form,"occupation",e)},expression:"form.occupation"}})],1),t._v(" "),r("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[r("v-text-field",{attrs:{disabled:t.disabled,label:"Nomor Telepon Aktif",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.no_hp,callback:function(e){t.$set(t.form,"no_hp",e)},expression:"form.no_hp"}})],1),t._v(" "),r("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md12:"",sm12:"",xs12:""}},[r("v-text-field",{attrs:{disabled:t.disabled,label:"Alamat Domisili",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1),t._v(" "),r("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md12:"",sm12:"",xs12:""}},[r("v-select",{attrs:{disabled:t.disabled,items:t.itemBilling,label:"Penagihan dilakukan melalui ?","item-text":"text","item-value":"Value",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.payment,callback:function(e){t.$set(t.form,"payment",e)},expression:"form.payment"}})],1),t._v(" "),r("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[r("v-text-field",{attrs:{disabled:t.disabled,label:"Nama Atasan",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.name_boss,callback:function(e){t.$set(t.form,"name_boss",e)},expression:"form.name_boss"}})],1),t._v(" "),r("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[r("v-text-field",{attrs:{disabled:t.disabled,label:"Jabatan Atasan",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.position_boss,callback:function(e){t.$set(t.form,"position_boss",e)},expression:"form.position_boss"}})],1),t._v(" "),r("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[r("v-text-field",{attrs:{disabled:t.disabled,label:"NIK Atasan",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.nik_boss,callback:function(e){t.$set(t.form,"nik_boss",e)},expression:"form.nik_boss"}})],1),t._v(" "),r("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[r("v-menu",{ref:"menu3",attrs:{disabled:t.disabled,"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-text-field",t._g(t._b({attrs:{label:"Tanggal Swab","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.swab_date,callback:function(e){t.$set(t.form,"swab_date",e)},expression:"form.swab_date"}},"v-text-field",o,!1),n))]}}]),model:{value:t.menu3,callback:function(e){t.menu3=e},expression:"menu3"}},[t._v(" "),r("v-date-picker",{attrs:{readonly:t.disabled,"no-title":""},on:{input:function(e){t.menu3=!1}},model:{value:t.form.swab_date,callback:function(e){t.$set(t.form,"swab_date",e)},expression:"form.swab_date"}})],1)],1),t._v(" "),t.checkSwabDate(t.form.swab_date)?r("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[r("v-text-field",{attrs:{disabled:t.disabled,label:"Keterangan",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.reason_swab,callback:function(e){t.$set(t.form,"reason_swab",e)},expression:"form.reason_swab"}})],1):t._e(),t._v(" "),"active"===t.form.status?r("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[t.checkClinic()?r("v-select",{attrs:{items:["Positif","Negatif"],label:"Response Dari Klinik",outlined:"",dense:"","hide-details":"auto"},model:{value:t.form.clinic_response,callback:function(e){t.$set(t.form,"clinic_response",e)},expression:"form.clinic_response"}}):t._e()],1):t._e(),t._v(" "),r("v-flex",{staticClass:"pt-2 pl-1 pr-1 pb-1",attrs:{md6:"",xs12:""}},[r("v-btn",{staticClass:"white--text",attrs:{color:"orange darken-1",small:""},on:{click:function(e){return t.$emit("openAttachment",t.form)}}},[t._v("\n                Upload Attachment\n              ")])],1)],1)],1)],1)],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"red darken-1",text:"",small:""},on:{click:function(e){return t.close()}}},[t._v("\n      Close\n    ")]),t._v(" "),r("v-btn",{attrs:{color:"green darken-1",small:"",dark:"",disabled:t.checkDisabled(),loading:t.submitLoad},on:{click:function(e){return t.save()}}},[t._v("\n      Save\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:c.a,VCard:f.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c,VDatePicker:m.a,VFlex:h.a,VForm:_.a,VLayout:x.a,VMenu:y.a,VSelect:k.a,VSpacer:w.a,VTextField:O.a})}}]);