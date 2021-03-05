(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{1445:function(t,s,a){},"54d6":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-page",{staticClass:"q-pa-lg"},[e("div",{staticClass:"dashboard"},[e("div",{staticClass:"welcome"},[e("strong",[t._v("Good "+t._s(t.dayTime)+t._s(t.nickname)+".")]),t._v(" What would you like to do today?")]),e("div",{staticClass:"row"},[e("div",{staticClass:"item"},[e("div",{staticClass:"row flex q-col-gutter-xl"},[e("div",{staticClass:"col-xs-12 col-sm-4 column flex"},[e("div",{staticClass:"text-h6 title"},[t._v("Create or Endorse Proposals")]),e("p",[t._v("Review current proposals and decide which ones you like to endorse. New proposals are are open for voting for a period of 1 week. To create a proposal click on the “+” button.")])]),e("div",{staticClass:"col-xs-12 col-sm-4"},[e("q-card",{staticClass:"item-card"},[e("div",{staticClass:"item-action"},[t.isAuthenticated&&t.isMember?e("q-btn",{staticClass:"q-mb-sm",attrs:{icon:"fas fa-plus",color:"red",size:"10px",rounded:""},on:{click:function(s){return t.displayForm("role")}}},[e("q-tooltip",[t._v("Add a role")])],1):t._e()],1),e("div",{staticClass:"ribbon"},[e("span",{staticClass:"text-white bg-proposal"},[t._v("CREATING")])]),e("q-card-section",{staticClass:"text-center q-pb-sm"},[e("img",{staticClass:"icon",attrs:{src:a("1a02")}})]),e("q-card-section",[e("div",{staticClass:"type"},[t._v("Roles")])]),e("q-card-actions",{staticClass:"q-pa-lg",attrs:{align:"center"}},[e("q-btn",{attrs:{label:"Endorse",color:"proposal",rounded:"",dense:"",unelevated:""},on:{click:function(s){return t.$router.push({path:"/documents-proposals/role"})}}})],1)],1)],1),e("div",{staticClass:"col-xs-12 col-sm-4"},[e("q-card",{staticClass:"item-card"},[e("div",{staticClass:"item-action"},[t.isAuthenticated&&t.isMember?e("q-btn",{staticClass:"q-mb-sm",attrs:{icon:"fas fa-plus",color:"red",size:"10px",rounded:""},on:{click:function(s){return t.displayForm("payout")}}},[e("q-tooltip",[t._v("Add a contribution")])],1):t._e()],1),e("div",{staticClass:"ribbon"},[e("span",{staticClass:"text-white bg-proposal"},[t._v("CREATING")])]),e("q-card-section",{staticClass:"text-center q-pb-sm"},[e("img",{staticClass:"icon",attrs:{src:a("b2cc")}})]),e("q-card-section",[e("div",{staticClass:"type"},[t._v("Contributions")])]),e("q-card-actions",{staticClass:"q-pa-lg",attrs:{align:"center"}},[e("q-btn",{attrs:{label:"Endorse",color:"proposal",rounded:"",dense:"",unelevated:""},on:{click:function(s){return t.$router.push({path:"/documents-proposals/payout"})}}})],1)],1)],1)])]),e("div",{staticClass:"item",staticStyle:{display:"none"},on:{click:function(s){return t.$router.push({path:"/roles"})}}},[e("div",{staticClass:"row flex q-col-gutter-xl"},[e("div",{staticClass:"col-xs-12 col-sm-6 column flex"},[e("div",{staticClass:"text-h6 title"},[t._v("Enroll Applicants")]),e("p",[t._v("Review current applicants and decide which ones you like to endorse. New applications are are open for enrollment for a period of 2 weeks.")])]),e("div",{staticClass:"col-xs-12 col-sm-6"},[e("q-card",{staticClass:"item-card"},[e("div",{staticClass:"ribbon"},[e("span",{staticClass:"text-white bg-hire"},[t._v("APPLYING")])]),e("q-card-section",{staticClass:"text-center q-pb-sm"},[e("img",{staticClass:"icon",attrs:{src:a("1a02")}})]),e("q-card-section",[e("div",{staticClass:"type"},[t._v("Roles")])]),e("q-card-actions",{staticClass:"q-pa-lg",attrs:{align:"center"}},[e("q-btn",{attrs:{label:"Enroll",color:"hire",rounded:"",dense:"",unelevated:""}})],1)],1)],1)])]),e("div",{staticClass:"item",staticStyle:{"max-width":"450px"},on:{click:function(s){return t.$router.push({path:"/roles"})}}},[e("div",{staticClass:"row flex q-col-gutter-xl"},[e("div",{staticClass:"col-xs-12 col-sm-6 column flex"},[e("div",{staticClass:"text-h6 title"},[t._v("Apply for a Role")]),e("p",[t._v("Review open roles and decide if you want to apply (you can always commit to a partial role). Once you are enrolled, claim your salary at the end of a lunar cycle.")])]),e("div",{staticClass:"col-xs-12 col-sm-6"},[e("q-card",{staticClass:"item-card"},[e("div",{staticClass:"ribbon"},[e("span",{staticClass:"text-white bg-hire"},[t._v("NOW  HIRING")])]),e("q-card-section",{staticClass:"text-center q-pb-sm"},[e("img",{staticClass:"icon",attrs:{src:a("1a02")}})]),e("q-card-section",[e("div",{staticClass:"type"},[t._v("Roles")])]),e("q-card-actions",{staticClass:"q-pa-lg",attrs:{align:"center"}},[e("q-btn",{attrs:{label:"Apply",color:"hire",rounded:"",dense:"",unelevated:""}})],1)],1)],1)])]),e("div",{staticClass:"item",staticStyle:{display:"none"}},[e("div",{staticClass:"row flex q-col-gutter-xl"},[e("div",{staticClass:"col-xs-12 col-sm-6 column flex"},[e("div",{staticClass:"text-h6 title"},[t._v("Claim your Salary")]),e("p",[t._v("Claim your salary at the end of a lunar cycle and receive payouts in Seeds, HVoice, Hypha and HUSD.")])]),e("div",{staticClass:"col-xs-12 col-sm-6"},[e("q-card",{staticClass:"item-card"},[e("div",{staticClass:"ribbon"},[e("span",{staticClass:"text-white bg-assignment"},[t._v("NOW PAYING")])]),e("q-card-section",{staticClass:"text-center q-pb-sm"},[e("img",{staticClass:"icon",attrs:{src:a("dd15")}})]),e("q-card-section",[e("div",{staticClass:"type"},[t._v("Assignments")])]),e("q-card-actions",{staticClass:"q-pa-lg",attrs:{align:"center"}},[e("q-btn",{attrs:{label:"Claim",color:"assignment",rounded:"",dense:"",unelevated:""}})],1)],1)],1)])])])])])},i=[],c=(a("e6cf"),a("ded3")),o=a.n(c),l=a("2f62"),r={name:"dashboard",data(){return{dayTime:"evening",nickname:null}},computed:o()({},Object(l["c"])("accounts",["isAuthenticated","account","isMember"])),methods:o()(o()(o()({},Object(l["b"])("profiles",["getPublicProfile"])),Object(l["d"])("layout",["setShowRightSidebar","setRightSidebarType","setBreadcrumbs"])),{},{displayForm(t){this.setShowRightSidebar(!0),this.setRightSidebarType(t+"Form")}}),async created(){this.setBreadcrumbs([{title:"Home"}]);const t=(new Date).getHours();t>=5&&t<12?this.dayTime="morning":t>=12&&t<17&&(this.dayTime="afternoon");const s=await this.getPublicProfile(this.account);s&&s.publicData.nickname&&(this.nickname=", "+s.publicData.nickname)}},n=r,d=(a("fc7b"),a("2877")),p=a("9989"),u=a("f09f"),m=a("a370"),C=a("4b7e"),v=a("9c40"),b=a("05c0"),h=a("eebe"),q=a.n(h),f=Object(d["a"])(n,e,i,!1,null,"60e00326",null);s["default"]=f.exports;q()(f,"components",{QPage:p["a"],QCard:u["a"],QCardSection:m["a"],QCardActions:C["a"],QBtn:v["a"],QTooltip:b["a"]})},fc7b:function(t,s,a){"use strict";var e=a("1445"),i=a.n(e);i.a}}]);