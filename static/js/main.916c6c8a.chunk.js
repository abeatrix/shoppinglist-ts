(this["webpackJsonptodo-ts"]=this["webpackJsonptodo-ts"]||[]).push([[0],{15:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var o=c(0),n=c(1),r=c.n(n),s=c(8),i=c.n(s),a=(c(15),c(9)),j=c(6),d=c(4),l=function(t){var e=t.addTodo,c=Object(n.useState)(""),r=Object(d.a)(c,2),s=r[0],i=r[1];return Object(o.jsxs)("form",{children:[Object(o.jsx)("input",{type:"text",value:s,onChange:function(t){i(t.target.value)}}),Object(o.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),e(s),i("")},children:"Add"})]})},u=(c(7),function(t){var e=t.todo,c=t.toggleTodo;return Object(o.jsx)("li",{className:"list",children:Object(o.jsxs)("label",{className:e.complete?"completed":void 0,children:[Object(o.jsx)("input",{type:"checkbox",checked:e.complete,onChange:function(){return c(e)}}),e.text]})})}),b=function(t){var e=t.todos,c=t.toggleTodo;return Object(o.jsx)("ul",{children:e.map((function(t){return Object(o.jsx)(u,{todo:t,toggleTodo:c},t.text)}))})},p=[{text:"egg",complete:!0},{text:"milk",complete:!1}],x=function(){var t=Object(n.useState)(p),e=Object(d.a)(t,2),c=e[0],r=e[1];return Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)("h1",{children:"Shopping List"}),Object(o.jsx)(l,{addTodo:function(t){""!==t.trim()&&r([].concat(Object(a.a)(c),[{text:t,complete:!1}]))}}),Object(o.jsx)(b,{todos:c,toggleTodo:function(t){var e=c.map((function(e){return e===t?Object(j.a)(Object(j.a)({},e),{},{complete:!e.complete}):e}));r(e)}})]})})};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root"))},7:function(t,e,c){}},[[16,1,2]]]);
//# sourceMappingURL=main.916c6c8a.chunk.js.map