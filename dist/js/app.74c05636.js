(function(e){function t(t){for(var o,u,d=t[0],i=t[1],l=t[2],f=0,s=[];f<d.length;f++)u=d[f],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&s.push(r[u][0]),r[u]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);a&&a(t);while(s.length)s.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,d=1;d<n.length;d++){var i=n[d];0!==r[i]&&(o=!1)}o&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},c=[];function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],i=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var a=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0382":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r=(n("4de4"),{class:"container"}),c=Object(o["f"])("h1",null,"欢迎使用 Feng 待办事项！",-1);function u(e,t){var n=Object(o["l"])("todo-add"),u=Object(o["l"])("todo-filter"),d=Object(o["l"])("todo-list");return Object(o["h"])(),Object(o["d"])("main",null,[Object(o["f"])("div",r,[c,Object(o["f"])(n,{tid:e.todos.length,"onAdd-todo":e.addTodo},null,8,["tid","onAdd-todo"]),Object(o["f"])(u,{selected:e.filter,"onChange-filter":t[1]||(t[1]=function(t){return e.filter=t})},null,8,["selected"]),Object(o["f"])(d,{todos:e.filteredTodos},null,8,["todos"])])])}var d={class:"input-add"},i=Object(o["f"])("i",{class:"plus"},null,-1);function l(e,t){return Object(o["h"])(),Object(o["d"])("div",d,[Object(o["o"])(Object(o["f"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.todoContent=t}),onKeyup:t[2]||(t[2]=Object(o["p"])((function(){return e.emitAddTodo.apply(e,arguments)}),["enter"]))},null,544),[[o["n"],e.todoContent]]),Object(o["f"])("button",{onClick:t[3]||(t[3]=function(){return e.emitAddTodo.apply(e,arguments)})},[i])])}var a={name:"TodoAdd",props:["tid"],setup:function(e,t){return f(e.tid,t.emit)}};function f(e,t){var n=Object(o["j"])(""),r=function(){if(""===n.value)alert("输入不能为空！");else{var o={id:e,content:n.value,completed:!1};t("add-todo",o),n.value=""}};return{todoContent:n,emitAddTodo:r}}n("72eb");a.render=l;var s=a,p={class:"filters"};function b(e,t){return Object(o["h"])(),Object(o["d"])("div",p,[(Object(o["h"])(!0),Object(o["d"])(o["a"],null,Object(o["k"])(e.filters,(function(t){return Object(o["h"])(),Object(o["d"])("span",{key:t.value,onClick:function(n){return e.$emit("change-filter",t.value)},class:["filter",{active:e.selected==t.value}]},Object(o["m"])(t.label),11,["onClick"])})),128))])}var j={name:"TodoFilter",props:["selected"],setup:function(){var e=Object(o["i"])([{label:"全部",value:"all"},{label:"已完成",value:"done"},{label:"未完成",value:"todo"}]);return{filters:e}}};n("eabe");j.render=b;var v=j,O={class:"todo-list"};function m(e,t){var n=Object(o["l"])("todo-list-item");return Object(o["h"])(),Object(o["d"])("div",O,[(Object(o["h"])(!0),Object(o["d"])(o["a"],null,Object(o["k"])(e.todos,(function(e){return Object(o["h"])(),Object(o["d"])(n,{key:e.id,"onChange-state":function(t){return e.completed=t.target.checked},"todo-item":e},null,8,["onChange-state","todo-item"])})),128))])}var h=Object(o["f"])("span",{class:"check-button"},null,-1);function y(e,t){return Object(o["h"])(),Object(o["d"])("div",{class:["todo-item",{done:e.todoItem.completed}]},[Object(o["f"])("label",null,[Object(o["f"])("input",{type:"checkbox",checked:e.todoItem.completed,onClick:t[1]||(t[1]=function(t){return e.$emit("change-state",t)})},null,8,["checked"]),Object(o["e"])(" "+Object(o["m"])(e.todoItem.content)+" ",1),h])],2)}var g={name:"TodoListItem",props:["todoItem"]};n("af01");g.render=y;var T=g,w={name:"TodoList",components:{TodoListItem:T},props:["todos"]};n("b40c");w.render=m;var k=w,x=(n("d81d"),n("96cf"),n("1da1"));function C(){var e=Object(o["j"])([]),t=function(t){e.value.push(t),window.android.pushNotestodo(t.completed)},n=function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,window.android.getNotesJson();case 2:n=t.sent,o=JSON.parse(n),e.value=o.map((function(e){return{id:e.id,content:e.title,completed:e.completed}}));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(o["g"])((function(){n()})),{todos:e,addTodo:t}}function A(e){var t=Object(o["j"])("all"),n=Object(o["b"])((function(){switch(t.value){case"done":return e.value.filter((function(e){return e.completed}));case"todo":return e.value.filter((function(e){return!e.completed}));default:return e.value}}));return{filter:t,filteredTodos:n}}var P={name:"App",components:{TodoAdd:s,TodoFilter:v,TodoList:k},setup:function(){var e=C(),t=e.todos,n=e.addTodo,o=A(t),r=o.filter,c=o.filteredTodos;return{todos:t,filter:r,addTodo:n,filteredTodos:c}}};n("64be");P.render=u;var I=P;Object(o["c"])(I).mount("#app")},"572e":function(e,t,n){},"64be":function(e,t,n){"use strict";n("c894")},"6bf6":function(e,t,n){},"72eb":function(e,t,n){"use strict";n("572e")},af01:function(e,t,n){"use strict";n("f0c1")},b40c:function(e,t,n){"use strict";n("6bf6")},c894:function(e,t,n){},eabe:function(e,t,n){"use strict";n("0382")},f0c1:function(e,t,n){}});
//# sourceMappingURL=app.74c05636.js.map