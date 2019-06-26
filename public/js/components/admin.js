(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{106:function(t,e,s){"use strict";s.r(e);var r=s(14),n=s(22),a={name:"Dashboard",components:{Header:r.a,Sidebar:n.a}},i=s(0),o=Object(i.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Header"),this._v(" "),e("div",{staticClass:"d-flex"},[e("Sidebar",{staticClass:"sidebar"}),this._v(" "),e("router-view",{staticClass:"container content"})],1)],1)},[],!1,null,"26ce84e8",null);e.default=o.exports},14:function(t,e,s){"use strict";var r={name:"Header",components:{FeatherIcon:s(19).a},methods:{logout:function(){this.$auth.logout({makeRequest:!0,success:function(){this.$store.dispatch("clearCurrentUser").then(function(){})},error:function(){}})}}},n=(s(64),s(0)),a=Object(n.a)(r,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("header",{staticClass:"blog-header py-3"},[s("div",{staticClass:"row flex-nowrap justify-content-between align-items-center"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"col-4 d-flex justify-content-end align-items-center"},[s("a",{staticClass:"text-muted",attrs:{href:"#"}},[s("svg",{staticClass:"mx-3",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",role:"img",viewBox:"0 0 24 24",focusable:"false"}},[s("title",[t._v("Pesquisar")]),t._v(" "),s("circle",{attrs:{cx:"10.5",cy:"10.5",r:"7.5"}}),t._v(" "),s("path",{attrs:{d:"M21 21l-5.2-5.2"}})])]),t._v(" "),t.$auth.check()?s("a",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.logout()}}},[t._v("Logout")]):s("router-link",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{to:"/login"}},[t._v("Login")])],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-4 pt-1"},[e("a",{staticClass:"text-muted",attrs:{href:"#"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-4 text-center"},[e("a",{staticClass:"header-logo text-dark",attrs:{href:"#"}},[this._v("Nparts")])])}],!1,null,"002176b5",null);e.a=a.exports},18:function(t,e,s){var r=s(65);"string"==typeof r&&(r=[[t.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};s(25)(r,n);r.locals&&(t.exports=r.locals)},19:function(t,e,s){"use strict";var r=s(26),n=s.n(r);function a(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},r=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),r.forEach(function(e){i(t,e,s[e])})}return t}function i(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var o={name:"FeatherIcon",props:{fill:{type:String,default:"none"},size:{type:[Number,String],default:24},stroke:{type:String,default:"currentColor"},strokeLinecap:{type:String,default:"round"},strokeLinejoin:{type:String,default:"round"},strokeWidth:{type:[Number,String],default:2},tag:{type:String,default:"i"},type:{type:String,required:!0,validator:function(t){if(!n.a.icons[t])throw new Error('"'.concat(t,'" is not an available icon type.'));return!0}}},render:function(t){var e=this.size,s=this.type,r=n.a.icons[s];if(r)return t("svg",{attrs:a({},r.attrs,{fill:this.fill,height:e,stroke:this.stroke,"stroke-linecap":this.strokeLinecap,"stroke-linejoin":this.strokeLinejoin,"stroke-width":this.strokeWidth,width:e}),class:[r.attrs.class,"feather__content"],domProps:{innerHTML:r.contents}})}},l=s(0),c=Object(l.a)(o,void 0,void 0,!1,null,"3a4d5f2a",null);e.a=c.exports},22:function(t,e,s){"use strict";var r={name:"Menu",components:{FeatherIcon:s(19).a},computed:{routes:function(){},route:function(){return this.$route},username:function(){return this.$store.state.user.currentUser.name},type:function(){return this.$store.state.user.currentUser.type}},methods:{setActiveClass:function(t){if(this.route.name===t)return"router-link-exact-active"},literalUserType:function(t){return 1===t?"Administrador":2===t?"Pessoa Física":"Pessoa Jurídica"}}},n=s(0),a=Object(n.a)(r,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"sidebar"},[s("figure",{staticClass:"user"},[s("div",{staticClass:"user-details"},[s("p",[t._v("Seja bem vindo "),s("span",{staticClass:"name"},[t._v(t._s(t.username))])]),t._v(" "),s("p",{staticClass:"user-type"},[t._v(t._s(this.literalUserType(t.type)))])])]),t._v(" "),s("ul",{staticClass:"sidebar-menu"},[s("li",{staticClass:"sidebar-menu-item"},[s("router-link",{staticClass:"d-flex align-items-center",attrs:{to:"/admin"}},[s("FeatherIcon",{attrs:{type:"home"}}),t._v("\n                Home\n            ")],1)],1),t._v(" "),s("li",{staticClass:"sidebar-menu-item"},[s("router-link",{staticClass:"d-flex align-items-center",class:t.setActiveClass("users"),attrs:{to:"/admin/users"}},[s("FeatherIcon",{attrs:{type:"users"}}),t._v("\n                Usuários\n            ")],1)],1),t._v(" "),s("li",{staticClass:"sidebar-menu-item"},[s("a",{attrs:{href:"#"}},[s("FeatherIcon",{attrs:{type:"settings"}}),t._v("\n                Clientes\n            ")],1),t._v(" "),s("ul",[s("li",[s("router-link",{staticClass:"d-flex align-items-center",attrs:{to:"/admin/customers/natural"}},[t._v("\n                        Pessoa Física\n                    ")])],1),t._v(" "),s("li",[s("router-link",{staticClass:"d-flex align-items-center",attrs:{to:"/admin/customers/legal"}},[t._v("\n                        Pessoa Jurídica\n                    ")])],1)])])])])},[],!1,null,"61f2ced6",null);e.a=a.exports},64:function(t,e,s){"use strict";var r=s(18);s.n(r).a},65:function(t,e,s){(t.exports=s(24)(!1)).push([t.i,'.blog-header[data-v-002176b5] {\n  line-height: 1;\n  border-bottom: 1px solid #e5e5e5;\n}\n.blog-header .header-logo[data-v-002176b5] {\n  font-family: "Playfair Display", Georgia, "Times New Roman", serif;\n  font-size: 2.25rem;\n}',""])}}]);