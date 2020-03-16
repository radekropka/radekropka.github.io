(function(t){function e(e){for(var r,a,o=e[0],c=e[1],u=e[2],l=0,d=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},s={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var p=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0a67":function(t,e,n){"use strict";var r=n("0a6b"),s=n.n(r);s.a},"0a6b":function(t,e,n){},"13ad":function(t,e,n){"use strict";var r=n("7021"),s=n.n(r);s.a},"1be1":function(t,e,n){},"21bb":function(t,e,n){"use strict";var r=n("7a98"),s=n.n(r);s.a},"287b":function(t,e,n){"use strict";var r=n("1be1"),s=n.n(r);s.a},4042:function(t,e,n){"use strict";var r=n("74b5"),s=n.n(r);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],a=(n("5c0b"),n("2877")),o={},c=Object(a["a"])(o,s,i,!1,null,null,null),u=c.exports,p=n("8c4f"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"controls"}),n("div",{staticClass:"controls"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.pat,expression:"pat"}],attrs:{id:"pat",type:"text",placeholder:"Access token"},domProps:{value:t.pat},on:{input:function(e){e.target.composing||(t.pat=e.target.value)}}}),t.pat?n("div",{staticClass:"separator"},[t.queries.length?t._e():n("button",{on:{click:t.mapQueriesFromAPI}},[t._v("Get all queries")]),t.queries.length?n("select",{directives:[{name:"model",rawName:"v-model",value:t.queryId,expression:"queryId"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.queryId=e.target.multiple?n:n[0]}}},t._l(t.queries,(function(e){return n("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])})),0):t._e(),t.queryId?n("button",{on:{click:t.mapPBIsFromAPI}},[t._v("Get selected query")]):t._e()]):t._e(),t.pat?n("div",{staticClass:"separator"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.item,expression:"item"}],attrs:{id:"item",type:"text"},domProps:{value:t.item},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addItem(e)},input:function(e){e.target.composing||(t.item=e.target.value)}}}),n("button",{on:{click:t.addItem}},[t._v("Add item")])]):t._e(),n("div",{staticClass:"separator"},[n("button",{on:{click:t.addPbi}},[t._v("Add empty PBI")]),n("button",{on:{click:t.addBug}},[t._v("Add empty bug")])]),n("div",{staticClass:"separator"},[n("button",{on:{click:t.removeAll}},[t._v("Remove all")])]),n("div",{staticClass:"stats right"},[n("span",[t._v("Display: ")]),n("span",{staticClass:"stat",on:{click:function(e){t.displayPbis=!t.displayPbis}}},[n("span",{staticClass:"tick"},[t.displayPbis?n("span"):t._e()]),n("span",[t._v(t._s(t.pbis.length)+" PBIs")]),t.pbis.length%4&&t.displayPbis?n("span",{staticClass:"red"},[t._v("("+t._s(-(4-t.pbis.length%4))+")")]):t._e()]),n("span",[t._v(", ")]),n("span",{staticClass:"stat",on:{click:function(e){t.displayBugs=!t.displayBugs}}},[n("span",{staticClass:"tick"},[t.displayBugs?n("span"):t._e()]),n("span",[t._v(t._s(t.bugs.length)+" Bugs")]),t.bugs.length%4&&t.displayBugs?n("span",{staticClass:"red"},[t._v("("+t._s(-(4-t.bugs.length%4))+")")]):t._e()]),n("span",[t._v(", ")]),n("span",{staticClass:"stat",on:{click:function(e){t.displaySprint=!t.displaySprint}}},[n("span",{staticClass:"tick"},[t.displaySprint?n("span"):t._e()]),n("span",[t._v("Sprint")])]),n("span",[t._v(", ")]),n("span",{staticClass:"stat",on:{click:function(e){t.printBackground=!t.printBackground}}},[n("span",{staticClass:"tick"},[t.printBackground?n("span"):t._e()]),n("span",[t._v("Print background")])])])]),t.displayPbis?n("div",{staticClass:"home"},t._l(t.pbis,(function(e){return n("card-container",{key:e.key,attrs:{type:"PBI"},on:{remove:function(n){return t.removePbi(e.key)}}},[n("pbi-card",{attrs:{"display-sprint":t.displaySprint,pbi:e,"print-background":t.printBackground}})],1)})),1):t._e(),t.displayBugs?n("div",{staticClass:"home"},t._l(t.bugs,(function(e){return n("card-container",{key:e.key,attrs:{type:"Bug"},on:{remove:function(n){return t.removeBug(e.key)}}},[n("bug-card",{attrs:{"display-sprint":t.displaySprint,bug:e,"print-background":t.printBackground}})],1)})),1):t._e(),t.loading?n("div",{attrs:{id:"loading"}},[t._v("Loading...")]):t._e()])},d=[],f=(n("28a5"),n("7f7f"),n("75fc")),m=(n("7514"),n("96cf"),n("3b8d")),h=(n("20d6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-pbi",class:{"print-background":t.printBackground}},[n("div",{staticClass:"card-pbi-item"},[n("Resizer",{attrs:{content:t.pbi.id+(t.pbi.id?":":"")+" "+t.pbi.name,"max-font-size":35}})],1),n("div",{staticClass:"card-pbi-feature"},[t.pbi.feature?n("Resizer",{attrs:{content:t.pbi.feature.id+": "+t.pbi.feature.name,"max-font-size":25}}):n("Resizer",{attrs:{content:"","max-font-size":25}})],1),n("div",{staticClass:"card-pbi-team"},[n("Resizer",{attrs:{content:t.pbi.team,"max-font-size":25}})],1),n("div",{staticClass:"card-pbi-effort"},[n("Resizer",{attrs:{content:t.pbi.effort,"max-font-size":25}})],1),n("div",{staticClass:"card-pbi-effort-dev"},[n("Resizer",{attrs:{content:t.pbi.devEffort,"max-font-size":15}})],1),n("div",{staticClass:"card-pbi-effort-test"},[n("Resizer",{attrs:{content:t.pbi.testEffort,"max-font-size":15}})],1),n("div",{staticClass:"card-pbi-sprint"},[n("Resizer",{attrs:{content:t.displaySprint?t.pbi.sprint:"","max-font-size":25}})],1),n("div",{staticClass:"card-pbi-notes"},[n("Resizer",{attrs:{content:t.pbi.notes,"max-font-size":25}})],1)])}),b=[],v=(n("6762"),n("2fdb"),n("d225")),g=function t(e,n,r,s,i,a,o,c,u){Object(v["a"])(this,t),this.id=e,this.name=n,this.feature=r,this.team=s.split("\\").pop(),"Assure"===s&&(this.team=""),this.sprint=i.split(" ").pop(),i.includes(".")||(this.sprint=""),this.effort=a,this.notes=o,this.key=e?e+""+Date.now():Math.floor(1e5*Math.random())+""+Date.now(),this.devEffort=c,this.testEffort=u},y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"container",staticClass:"container"},[n("div",{ref:"body",staticClass:"body",style:{fontSize:t.computedFontSize+"px"},attrs:{contenteditable:"true"},on:{input:t.resize}},[t._v(t._s(t.content))])])},k=[],x={name:"Resizer",props:["content","maxFontSize"],data:function(){return{computedFontSize:this.maxFontSize}},mounted:function(){this.$nextTick(this.resize())},updated:function(){this.$nextTick(this.resize())},methods:{resize:function(){(this.$refs.body.clientHeight>this.$refs.container.clientHeight||this.$refs.body.clientWidth>this.$refs.container.clientWidth)&&(this.computedFontSize=this.computedFontSize-.5)}}},w=x,_=(n("0a67"),Object(a["a"])(w,y,k,!1,null,"e353f670",null)),C=_.exports,z={name:"PbiCard",props:{pbi:g,displaySprint:Boolean,printBackground:Boolean},data:function(){return{styleObject:{transform:"rotate(".concat(3*(Math.random()-.5),"deg) translate(").concat(7.5*(Math.random()-.5),"mm,").concat(7.5*(Math.random()-.5),"mm)")}}},components:{Resizer:C}},S=z,P=(n("4042"),Object(a["a"])(S,h,b,!1,null,null,null)),I=P.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-bug",class:{"print-background":t.printBackground}},[n("div",{staticClass:"card-bug-item"},[n("Resizer",{attrs:{content:t.bug.id+(t.bug.id?":":"")+" "+t.bug.name,"max-font-size":35}})],1),n("div",{staticClass:"card-bug-team"},[n("Resizer",{attrs:{content:t.bug.team,"max-font-size":25}})],1),n("div",{staticClass:"card-bug-effort"},[n("Resizer",{attrs:{content:t.bug.effort,"max-font-size":25}})],1),n("div",{staticClass:"card-bug-effort-dev"},[n("Resizer",{attrs:{content:t.bug.devEffort,"max-font-size":15}})],1),n("div",{staticClass:"card-bug-effort-test"},[n("Resizer",{attrs:{content:t.bug.testEffort,"max-font-size":15}})],1),n("div",{staticClass:"card-bug-sprint"},[n("Resizer",{attrs:{content:t.displaySprint?t.bug.sprint:"","max-font-size":25}})],1),n("div",{staticClass:"card-bug-notes"},[n("Resizer",{attrs:{content:t.bug.notes,"max-font-size":25}})],1),n("div",{staticClass:"card-bug-severity"},[n("Resizer",{attrs:{content:t.bug.severity,"max-font-size":25}})],1)])},j=[],R=function t(e,n,r,s,i,a,o,c,u){Object(v["a"])(this,t),this.id=e,this.name=n,this.team=r.split("\\").pop(),"Assure"===r&&(this.team=""),this.sprint=s.split(" ").pop(),s.includes(".")||(this.sprint=""),this.effort=i,this.notes=a,this.severity=o,this.key=e?e+""+Date.now():Math.floor(1e5*Math.random())+""+Date.now(),this.devEffort=c,this.testEffort=u},O={name:"PbiCard",props:{bug:R,displaySprint:Boolean,printBackground:Boolean},data:function(){return{styleObject:{transform:"rotate(".concat(3*(Math.random()-.5),"deg) translate(").concat(7.5*(Math.random()-.5),"mm,").concat(7.5*(Math.random()-.5),"mm)")}}},components:{Resizer:C}},A=O,T=(n("287b"),Object(a["a"])(A,B,j,!1,null,null,null)),F=T.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{class:{bug:"PBI"!=t.type},style:t.styleObject},[n("div",{staticClass:"card-container"},[t._t("default")],2),n("button",{staticClass:"remove",on:{click:t.remove}},[t._v("X")])])},E=[],q={name:"CardContainer",props:["type"],data:function(){return{styleObject:{transform:"rotate(".concat(3*(Math.random()-.5),"deg) translate(").concat(7.5*(Math.random()-.5),"mm,").concat(7.5*(Math.random()-.5),"mm)")}}},methods:{remove:function(){this.$emit("remove")}}},$=q,D=(n("13ad"),Object(a["a"])($,M,E,!1,null,"2cc9f438",null)),J=D.exports,W=function t(e,n){Object(v["a"])(this,t),this.id=e,this.name=n},Q=n("369b"),H=n.n(Q),N={name:"home",components:{PbiCard:I,CardContainer:J,BugCard:F},data:function(){return{loading:!1,queries:[],queryId:"",pbis:[],bugs:[],features:[],pat:"",item:"",displayBugs:!0,displayPbis:!0,displaySprint:!1,printBackground:!1}},watch:{pat:function(t){t&&"undefined"!==typeof Storage&&window.localStorage.setItem("pat",t)}},created:function(){this.pat||"undefined"!==typeof Storage&&(this.pat=window.localStorage.getItem("pat"),this.pat||(this.pat=""))},methods:{removeAll:function(){this.pbis.splice(0),this.bugs.splice(0)},addPbi:function(){this.pbis.unshift(new g("","","","","","",""))},removePbi:function(t){this.pbis.splice(this.pbis.findIndex((function(e){return e.key==t})),1)},addBug:function(){this.bugs.unshift(new R("","","","","","",""))},addItem:function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.item){t.next=9;break}return this.loading=!0,t.next=4,this.getFeaturesFromAPI();case 4:return t.next=6,this.getPBIsFromAPI([this.item]);case 6:if(!t.sent){t.next=8;break}this.item="";case 8:this.loading=!1;case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),removeBug:function(t){this.bugs.splice(this.bugs.find((function(e){return e.key==t})),1)},mapCsv:function(t){var e=this,n=t.target.files[0];if(n){var r=new FileReader;r.onload=function(){for(var t=r.result,n=H.a.parse(t),s=0;s<n.data.length;s++){var i=n.data[s];if("Feature"===i[0]){var a=new W(i[2],i[3]);e.features.push(a)}else if("Product Backlog Item"===i[0]){var o=new g(i[2],""===i[3]?i[4]:i[3],""===i[3]?e.features[e.features.length-1]:void 0,i[7],i[6],i[5]);e.pbis.push(o)}}},r.readAsText(n)}},getJson:function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,{headers:{authorization:"Basic ".concat(btoa(":".concat(this.pat)))}});case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getQueriesFromAPI:function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getJson("https://dev.azure.com/shesoftware/Assure/_apis/wit/queries?api-version=5.1&$depth=1");case 2:e=t.sent,this.queries=[].concat(Object(f["a"])(e.value[0].children.filter((function(t){return!t.isFolder&&"flat"==t.queryType})).map((function(t){return{id:t.id,name:t.name}}))),Object(f["a"])(e.value[1].children.filter((function(t){return!t.isFolder&&"flat"==t.queryType})).map((function(t){return{id:t.id,name:t.name}}))));case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getWorkItemDetailsBatched:function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n){t.next=6;break}return t.next=3,this.getJson("https://dev.azure.com/shesoftware/Assure/_apis/wit/workitems?ids=".concat(e.join(","),"&api-version=5.1&fields=").concat(n.join(",")));case 3:r=t.sent,t.next=9;break;case 6:return t.next=8,this.getJson("https://dev.azure.com/shesoftware/Assure/_apis/wit/workitems?ids=".concat(e.join(","),"&api-version=5.1&$expand=relations"));case 8:r=t.sent;case 9:return t.abrupt("return",r.value);case 10:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}(),getFeaturesFromAPI:function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(){var e,n,r,s,i,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.features.length){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,this.getJson("https://dev.azure.com/shesoftware/Assure/Assure%20Team/_apis/work/backlogs/Microsoft.FeatureCategory/workItems?api-version=5.1-preview.1");case 4:e=t.sent,n=e.workItems.map((function(t){return t.target.id})),r=Math.floor(n.length/200)+1,s=0;case 8:if(!(s<r)){t.next=17;break}return t.next=11,this.getWorkItemDetailsBatched(n.slice(200*s,200*(s+1)));case 11:a=t.sent,o=a.map((function(t){return new W(t.id,t.fields["System.Title"])})),(i=this.features).push.apply(i,Object(f["a"])(o));case 14:s++,t.next=8;break;case 17:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getPBIsFromAPI:function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(e){var n,r,s,i,a,o,c,u,p,l=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e,e){t.next=8;break}return t.next=4,this.getJson("https://dev.azure.com/shesoftware/Assure/Assure%20Team/_apis/wit/wiql/".concat(this.queryId,"?api-version=5.1"));case 4:if(r=t.sent,r){t.next=7;break}return t.abrupt("return",!1);case 7:n=r.workItems.map((function(t){return t.id}));case 8:if(s=Math.floor(n.length/200)+1,n.length){t.next=11;break}return t.abrupt("return",!1);case 11:i=0;case 12:if(!(i<s)){t.next=25;break}return t.next=15,this.getWorkItemDetailsBatched(n.slice(200*i,200*(i+1)));case 15:if(c=t.sent,c){t.next=18;break}return t.abrupt("return");case 18:u=c.filter((function(t){return"Product Backlog Item"===t.fields["System.WorkItemType"]})).map((function(t){var e=t.relations?t.relations.find((function(t){return"System.LinkTypes.Hierarchy-Reverse"===t.rel})):void 0,n=void 0;return e&&(n=e.url.split("/").pop()),new g(t.id,t.fields["System.Title"],n?l.features.find((function(t){return"".concat(t.id)===n})):n,t.fields["System.AreaPath"],t.fields["System.IterationPath"],t.fields["Microsoft.VSTS.Scheduling.Effort"],t.fields["System.Tags"]&&t.fields["System.Tags"].length?t.fields["System.Tags"]:"",t.fields["Custom.DevEffort"],t.fields["Custom.TestEffort"])})),(a=this.pbis).unshift.apply(a,Object(f["a"])(u)),p=c.filter((function(t){return"Bug"===t.fields["System.WorkItemType"]})).map((function(t){return new R(t.id,t.fields["System.Title"],t.fields["System.AreaPath"],t.fields["System.IterationPath"],t.fields["Microsoft.VSTS.Scheduling.Effort"],t.fields["System.Tags"]&&t.fields["System.Tags"].length?t.fields["System.Tags"]:"",t.fields["Microsoft.VSTS.Common.Severity"],t.fields["Custom.DevEffort"],t.fields["Custom.TestEffort"])})),(o=this.bugs).unshift.apply(o,Object(f["a"])(p));case 22:i++,t.next=12;break;case 25:return t.abrupt("return",!0);case 26:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),mapPBIsFromAPI:function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.getFeaturesFromAPI();case 3:return t.next=5,this.getPBIsFromAPI();case 5:this.loading=!1;case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),mapQueriesFromAPI:function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.getQueriesFromAPI();case 3:this.loading=!1;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},V=N,G=(n("21bb"),Object(a["a"])(V,l,d,!1,null,null,null)),L=G.exports;r["a"].use(p["a"]);var X=new p["a"]({routes:[{path:"/",name:"home",component:L}]});r["a"].config.productionTip=!1,new r["a"]({router:X,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("e332"),s=n.n(r);s.a},7021:function(t,e,n){},"74b5":function(t,e,n){},"7a98":function(t,e,n){},e332:function(t,e,n){}});
//# sourceMappingURL=app.e59d6221.js.map