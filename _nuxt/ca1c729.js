(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{737:function(t,e,n){"use strict";n.r(e);var r={name:"NavDrawer",props:{isFixed:{type:Boolean,default:!0},isTemporary:{type:Boolean,default:!0},isAbsolute:{type:Boolean,default:!1},isPermanent:{type:Boolean,default:!1},items:{type:Array,default:function(){return[]}}},data:function(){return{clipped:!1,fixed:!1,drawer:!1}},methods:{changeDrawer:function(data){this.drawer=data}}},o=n(52),l=n(71),c=n.n(l),d=n(412),m=n(180),v=n(183),f=n(184),w=n(108),y=n(32),_=n(95),x=n(421),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-navigation-drawer",{attrs:{clipped:t.$vuetify.breakpoint.lgAndUp,fixed:t.isFixed,temporary:t.isTemporary,absolute:t.isAbsolute,permanent:t.isPermanent},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("NuxtLink",{attrs:{to:{name:"index"}}},[r("img",{staticClass:"mt-1 ml-15",attrs:{src:n(126),height:"36",alt:"E-KB"}})]),t._v(" "),r("v-divider"),t._v(" "),r("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return r("v-list-group",{key:e.text,attrs:{"prepend-icon":e.icon_alt},scopedSlots:t._u([{key:"activator",fn:function(){return[r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)]},proxy:!0}],null,!0)},[t._v(" "),t._l(e.children,(function(e,i){return r("v-list-item",{key:i,attrs:{link:"",to:e.to}},[r("v-list-item-title",{domProps:{textContent:t._s(e.title)}}),t._v(" "),e.icon?r("v-list-item-icon",[r("v-icon",{domProps:{textContent:t._s(e.icon)}})],1):t._e()],1)}))],2)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VDivider:d.a,VIcon:m.a,VList:v.a,VListGroup:f.a,VListItem:w.a,VListItemContent:y.a,VListItemIcon:_.a,VListItemTitle:y.c,VNavigationDrawer:x.a})}}]);