(function(e){function t(t){for(var o,a,u=t[0],c=t[1],l=t[2],p=0,f=[];p<u.length;p++)a=u[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);s&&s(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,u=1;u<n.length;u++){var c=n[u];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={index:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"title"}},[n("h1",[e._v("Hello, world")])])}],a={name:"App",components:{},data:function(){return{view:"top",articlePath:"",isColorEdit:!1,scrollParam:{}}},methods:{windowLoad:function(){}},mounted:function(){window.addEventListener("load",this.windowLoad,{once:!0,passive:!0}),dispatchEvent(new PopStateEvent("popstate",{}))},destroyed:function(){window.removeEventListener("load",this.windowLoad,{once:!0,passive:!0})}},u=a,c=(n("034f"),n("2877")),l=Object(c["a"])(u,r,i,!1,null,null,null),s=l.exports,p=n("4f96"),f=(n("4de4"),n("d81d"),n("ac1f"),n("1276"),n("841c"),n("fb6a"),n("159b"),{install:function(e,t){window.addEventListener("popstate",(function(){var e=window.location.search.split("/").map((function(e,t){return 0==t?e.substr(1):e})).filter((function(e){return e})),n=Object(p["a"])(e),o=n[0],r=n.slice(1);t.query.forEach((function(e){e(o,r)}))}),{once:!1,passive:!0}),e.prototype.$go=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;history.pushState(n,t,e),dispatchEvent(new PopStateEvent("popstate",{}))}}});o["a"].config.productionTip=!1;var d={query:[]};o["a"].use(f,d),o["a"].prototype.$queryCallback=d.query,new o["a"]({render:function(e){return e(s)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=index.995fd1db.js.map