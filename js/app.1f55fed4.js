(function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],d=0,l=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(l.length)l.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({"main~sql":"main~sql",main:"main",sql:"sql"}[e]||e)+"."+{"main~sql":"e790a499",main:"7f8fd1cd",sql:"c1f76a4b","chunk-2d216214":"9ebff182","chunk-2d216257":"256ee085","chunk-aeaa2a86":"1ae133be"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"main~sql":1,main:1,sql:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({"main~sql":"main~sql",main:"main",sql:"sql"}[e]||e)+"."+{"main~sql":"138af52c",main:"31b85913",sql:"623fac6d","chunk-2d216214":"31d6cfe0","chunk-2d216257":"31d6cfe0","chunk-aeaa2a86":"31d6cfe0"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===o))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){u=l[s],d=u.getAttribute("data-href");if(d===r||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/code-shelf/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"17e1":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("159b"),n("99af"),n("a15b"),n("b64b"),n("d81d"),n("07ac"),n("d3b7");var r=[{categoryID:2,description:"Sweet and savory sauces relishes spreads and seasonings",name:"Condiments"},{categoryID:1,description:"Soft drinks coffees teas beers and ales",name:"Beverages"},{categoryID:3,description:"Desserts candies and sweet breads",name:"Confections"},{categoryID:4,description:"Cheeses",name:"Dairy Products"},{categoryID:5,description:"Breads crackers pasta and cereal",name:"Grains/Cereals"},{categoryID:6,description:"Prepared meats",name:"Meat/Poultry"},{categoryID:7,description:"Dried fruit and bean curd",name:"Produce"},{categoryID:8,description:"Seaweed and fish",name:"Seafood"}],a=openDatabase("p","1.0","NorthWind",4e6);function o(e){return new Promise((function(t,n){e?a.transaction((function(r){r.executeSql(e,[],(function(e,n){var r=JSON.parse(JSON.stringify(n.rows));console.log({obj:r}),t(Object.values(r))}),(function(){n()}))})):t(null)}))}a.transaction((function(e){e.executeSql("CREATE TABLE IF NOT EXISTS categories (categoryID unique, description, name)"),e.executeSql("CREATE TABLE IF NOT EXISTS customers (customerID unique, companyName, contactName, contactTitle, address)"),e.executeSql("CREATE TABLE IF NOT EXISTS employees (employeeID unique, lastName, firstName, title, titleOfCourtesy, birthDate, hireDate, address, notes, reportsTo, territoryIDs)"),e.executeSql("CREATE TABLE IF NOT EXISTS orders (orderID unique, customerID, employeeID, orderDate, requiredDate, shippedDate, shipVia, freight, shipName, shipAddress, details)"),e.executeSql("CREATE TABLE IF NOT EXISTS products (productID unique, supplierID, categoryID, quantityPerUnit, unitPrice, unitsInStock, unitsOnOrder, reorderLevel, discontinued, name)"),e.executeSql("CREATE TABLE IF NOT EXISTS regions (regionID unique, name, territories)"),e.executeSql("CREATE TABLE IF NOT EXISTS shippers (shipperID unique, companyName, phone)"),e.executeSql("CREATE TABLE IF NOT EXISTS suppliers (supplierID unique, companyName, contactName, contactTitle, address)"),r.forEach((function(t){e.executeSql("INSERT INTO categories (".concat(Object.keys(t).join(", "),") VALUES (").concat(Object.values(t).map((function(e){return'"'.concat(e,'"')})).join(", "),")"))}))})),o("SELECT * FROM categories")},4360:function(e,t,n){"use strict";var r=n("2b0e"),a=n("2f62"),o=function(){return{editor_windows:[],base_edit_window:{code:"SELECT * FROM categories",result:[],id:null,active:!1}}},i=o(),s=i,c=n("5530"),u=(n("c740"),n("a434"),function(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t="",n=0;n<5;n++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}),d={ADD_WINDOW:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.editor_windows.push(Object.assign({},Object(c["a"])({},e.base_edit_window),{id:u()},Object(c["a"])({},t)))},REMOVE_WINDOW:function(e,t){var n=e.editor_windows.findIndex((function(e){return e.id===t}));-1!==n&&e.editor_windows.splice(n,1)},REMOVE_ALL_WINDOWS:function(e){r["a"].set(e,"editor_windows",[])},SET_CODE:function(e,t){var n=t.window_id,a=t.code,o=e.editor_windows.findIndex((function(e){return e.id===n}));-1!==o&&r["a"].set(e.editor_windows[o],"code",a)},SET_RESULT:function(e,t){var n=t.window_id,a=t.result,o=e.editor_windows.findIndex((function(e){return e.id===n}));-1!==o&&r["a"].set(e.editor_windows[o],"result",a)}},l=n("17e1"),f={execute_query:function(e,t){var n=e.commit,r=t.code,a=t.window;Object(l["a"])(r).then((function(e){n("SET_RESULT",{window_id:a.id,result:e})}))}},p={get_active_windows:function(e){return e.editor_windows}},m={namespaced:!0,state:s,getters:p,mutations:d,actions:f},h=m;r["a"].use(a["a"]);t["a"]=new a["a"].Store({modules:{sql:h},state:{notification:{message:"",show:!1}},getters:{to_show_notification:function(e){return e.notification.show},get_notification_message:function(e){return e.notification.message}},mutations:{SET_NOTIFICATION:function(e,t){r["a"].set(e,"notification",t)}},actions:{show_notification:function(e,t){var n=e.commit,r=t.message;n("SET_NOTIFICATION",{show:!0,message:r})},hide_notification:function(e){var t=e.commit;t("SET_NOTIFICATION",{show:!1})}}})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("v-toolbar-title",{staticStyle:{width:"150px"}},[e._v(" "+e._s(e.app_title)+" ")]),n("v-spacer")],1),n("v-main",[n("router-view")],1)],1)},o=[],i={name:"App",data:function(){return{app_title:"<CodeShelf/>",language_options:["sql"],language:"sql"}}},s=i,c=n("2877"),u=n("6544"),d=n.n(u),l=n("7496"),f=n("40dc"),p=n("f6c4"),m=n("2fa4"),h=n("2a7f"),g=Object(c["a"])(s,a,o,!1,null,null,null),w=g.exports;d()(g,{VApp:l["a"],VAppBar:f["a"],VMain:p["a"],VSpacer:m["a"],VToolbarTitle:h["a"]});var v=n("2909"),E=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),T={home:"home"},b=[{path:"/",component:function(){return Promise.all([n.e("main~sql"),n.e("sql")]).then(n.bind(null,"5169"))}}];r["a"].use(E["a"]);var y=[{path:"/",name:T.home,component:function(){return Promise.all([n.e("main~sql"),n.e("main")]).then(n.bind(null,"cd56"))},children:Object(v["a"])(b)}],S=new E["a"]({mode:"history",base:"/code-shelf/",routes:y}),I=S,_=n("4360"),O=(n("17e1"),n("f309"));r["a"].use(O["a"]);var q=new O["a"]({theme:{dark:!0,themes:{light:{primary:"#3f51b5",secondary:"white",accent:"#3f51b5",error:"#b71c1c"},dark:{primary:"#080D15",secondary:"#161B22",accent:"#2FC1FF",error:"#CF6679",warning:"#CF6679",info:"#FFE926",success:"#6FCF97"}}}});r["a"].config.productionTip=!1,new r["a"]({router:I,store:_["a"],vuetify:q,render:function(e){return e(w)}}).$mount("#app")}});
//# sourceMappingURL=app.1f55fed4.js.map