(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["documentation"],{"0a93":function(t,e,n){"use strict";var a=n("6b1a"),s=n.n(a);s.a},3069:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"documentation flex flex-1 pos-r"},[n("MazSidebar",{attrs:{width:250},model:{value:t.hasLeftSidebarOpen,callback:function(e){t.hasLeftSidebarOpen=e},expression:"hasLeftSidebarOpen"}},[n("LeftSidebarContent")],1),n("div",{staticClass:"documentation__container flex flex-direction-column flex-1"},["Install"!==t.$route.name&&"GetStarted"!==t.$route.name?n("div",{staticClass:"flex justify-content-between px-5 py-3 align-center"},[n("h2",[t._v(" "+t._s(t._f("capitalize")(t.currentComponent))+" ")]),n("MazBtn",{on:{click:t.showOptions}},[t._v(" Show options ")])],1):t._e(),n("router-view",{staticClass:"px-5 py-3 flex-1"}),n("NavFooter")],1),"Install"!==t.$route.name&&"GetStarted"!==t.$route.name?n("MazSidebar",{attrs:{width:500,right:"",absolute:"","no-close-btn":""},model:{value:t.hasRightSidebarOpen,callback:function(e){t.hasRightSidebarOpen=e},expression:"hasRightSidebarOpen"}},[n("RightSidebarContent",{on:{close:function(e){t.hasRightSidebarOpen=!t.hasRightSidebarOpen}}})],1):t._e()],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"left-sidebar-content p-4 h-100"},[n("h3",{staticClass:"mb-3"},[t._v(" Development ")]),t._l(t.routesStartedDoc,(function(e){return n("router-link",{key:e.name,staticClass:"menu-item btn btn--white mb-2 w-100",attrs:{to:{name:e.name}}},[t._v(" "+t._s(t._f("capitalize")(t.getRouteName(e.path)))+" ")])})),n("h3",{staticClass:"my-3"},[t._v(" Components ")]),n("div",{staticClass:"left-sidebar-content__content"},t._l(t.routesComponents,(function(e){return n("router-link",{key:e.name,staticClass:"menu-item btn btn--white mb-2 w-100",attrs:{to:{name:e.name}}},[t._v(" "+t._s(t._f("capitalize")(t.getRouteName(e.path)))+" ")])})),1)],2)},i=[],r=n("ed08"),c={name:"LeftSidebarContent",computed:{routesStartedDoc:function(){return this.$router.options.routes.filter((function(t){return"/documentation"===t.path}))[0].children.filter((function(t){return"Install"===t.name||"GetStarted"===t.name}))},routesComponents:function(){return this.$router.options.routes.filter((function(t){return"/documentation"===t.path}))[0].children.filter((function(t){return"Install"!==t.name&&"GetStarted"!==t.name}))}},methods:{getRouteName:function(t){return Object(r["b"])(t,"-"," ")}}},l=c,u=(n("0a93"),n("2877")),f=Object(u["a"])(l,o,i,!1,null,"43fb3e7b",null),d=f.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"right-sidebar-content p-2"},[n("div",{staticClass:"flex justify-content-between"},[n("h3",{staticClass:"mb-2"},[t._v(" "+t._s(t._f("capitalize")(t.currentComponent))+" ")]),n("MazBtn",{attrs:{rounded:"",outline:"",size:"sm"},on:{click:function(e){return t.$emit("close")}}},[t._v(" X ")])],1),t.currentProps.length?n("div",{staticClass:"props-api"},[n("h4",{staticClass:"mb-2"},[t._v(" Props API ")]),n("table",{staticClass:"md"},[t._m(0),t._l(t.currentProps,(function(e,a){return n("tr",{key:a,staticClass:"prop"},[n("td",[t._v(t._s(t._f("kebab")(e[0])))]),n("td",[t._v(t._s(e[1].type.name))]),n("td",{class:{"text-muted":!1!==e[1].default&&!e[1].default}},[t._v(" "+t._s(("function"===typeof e[1].default?e[1].default.name:!1===e[1].default?"false":e[1].default)||"null")+" ")]),n("td",{class:{"text-muted":!e[1].required}},[t._v(" "+t._s(e[1].required||"false")+" ")])])}))],2)]):n("div",[t._v(" No option ")])])},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("Props")]),n("th",[t._v("Type")]),n("th",[t._v("Default")]),n("th",[t._v("Required")])])}],h=n("34e9"),b={name:"RightSidebarContent",components:{MazBtn:h["a"],MazInput:h["e"],MazPhoneNumberInput:h["g"],MazSelect:h["h"],MazSwitch:h["k"],MazCheckbox:h["b"],MazDialog:h["d"],MazLoader:h["f"],MazSidebar:h["i"],MazSpinner:h["j"],MazTransitionExpand:h["l"],MazCollapse:h["c"]},computed:{currentComponent:function(){return this.$route.name.slice(0,-3)},currentProps:function(){var t=this.$options.components[this.currentComponent].props;return t?Object.entries(t):[]}}},_=b,v=(n("4946"),Object(u["a"])(_,m,p,!1,null,"076ddf20",null)),C=v.exports,S=n("cef0"),g={name:"Documentation",components:{LeftSidebarContent:d,RightSidebarContent:C,NavFooter:S["a"]},data:function(){return{hasLeftSidebarOpen:!0,hasRightSidebarOpen:!1}},computed:{currentComponent:function(){return this.$route.name.slice(0,-3)}},methods:{showOptions:function(){this.hasRightSidebarOpen=!this.hasRightSidebarOpen}}},x=g,w=(n("90fa"),Object(u["a"])(x,a,s,!1,null,"1a764805",null));e["default"]=w.exports},4946:function(t,e,n){"use strict";var a=n("e698"),s=n.n(a);s.a},"6b1a":function(t,e,n){},"70bb":function(t,e,n){},"90fa":function(t,e,n){"use strict";var a=n("70bb"),s=n.n(a);s.a},"93ac":function(t,e,n){"use strict";var a=n("d7de"),s=n.n(a);s.a},cef0:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"nav-footer flex-fixed",attrs:{role:"contentinfo"}},[n("nav",{staticClass:"nav-footer-content container flex align-center justify-content-between py-4"},[n("div",{staticClass:"flex"},[n("RouterLink",{staticClass:"mr-3",attrs:{to:{name:"Home"}}},[t._v(" Home ")]),n("RouterLink",{attrs:{to:{name:"Documentation"}}},[t._v(" Documentation ")])],1),t._m(0),n("div",{staticClass:"flex align-center"},[n("SocialButtons"),n("VersionNumber")],1)]),t._m(1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-footer-content__logo"},[a("img",{staticClass:"nav-footer-content__logo__img",attrs:{src:n("4ffd"),alt:"logo-loic-mazuel"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-footer-subs py-2"},[n("div",{staticClass:"container flex flex-end"},[n("a",{staticClass:"flex align-center",attrs:{href:"https://www.loicmazuel.com/",target:"_blank"}},[n("p",{staticClass:"fs-14"},[t._v(" © Loïc Mazuel | Website made with VueJS ")])])])])}],o=n("2eb3"),i=n("54de"),r={name:"NavFooter",components:{SocialButtons:o["a"],VersionNumber:i["a"]}},c=r,l=(n("93ac"),n("2877")),u=Object(l["a"])(c,a,s,!1,null,"b0af52e8",null);e["a"]=u.exports},d7de:function(t,e,n){},e698:function(t,e,n){}}]);
//# sourceMappingURL=documentation.86d769c2.js.map