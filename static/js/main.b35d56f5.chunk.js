(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),o=n(7),i=n.n(o),a=(n(13),n(8)),r=n(4),u=n(3),d=(n(14),n(0)),l=function(t){var e=t.addNewTask,n=Object(c.useState)(""),s=Object(u.a)(n,2),o=s[0],i=s[1];return Object(d.jsxs)("form",{className:"section__form",onSubmit:function(t){t.preventDefault(),e(o.trim()),i("")},children:[Object(d.jsx)("input",{name:"section__newTaskButton",className:"section__input",placeholder:"Co jest do zrobienia?",autoFocus:!0,required:!0,value:o,onChange:function(t){var e=t.target;return i(e.value)}}),Object(d.jsx)("button",{className:"section__newTaskButton",children:"Dodaj zadanie"})]})},j=(n(16),function(t){var e=t.tasks,n=t.hideDone,c=t.removeTask,s=t.toggleTaskDone;return Object(d.jsx)("div",{className:"section__tasksContainer",children:Object(d.jsx)("ul",{className:"section__tasksList",children:e.map((function(t){var e=t.done,o=t.content,i=t.id;return Object(d.jsxs)("li",{className:"section__tasksListItem ".concat(e&&n?"section__tasksListItem--hidden":""),children:[Object(d.jsx)("button",{className:"section__taskButton section__taskButton--checked",onClick:function(){return s(i)},children:e?"\u2714":""}),Object(d.jsx)("span",{className:"section__task ".concat(e?"section__task--completed":""),children:o}),Object(d.jsx)("button",{className:"section__taskButton section__taskButton--deleted",onClick:function(){return c(i)},children:"\ud83d\uddd1"})]},i)}))})})}),b=(n(17),function(t){var e=t.tasks,n=t.hideDone,c=t.toggleHideDone,s=t.setAllDone;return e.length>0&&Object(d.jsxs)("div",{className:"section__buttonsContainer",children:[Object(d.jsx)("button",{onClick:c,className:"section__buttons section__buttons--leftButton",children:!0===n?"Poka\u017c uko\u0144czone":"Ukryj uko\u0144czone"}),Object(d.jsx)("button",{className:"section__buttons section__buttons--rightButton",disabled:e.every((function(t){return t.done})),onClick:function(){return s()},children:"Uko\u0144cz wszystkie"})]})}),f=(n(18),function(t){var e=t.header,n=t.buttonsContainer,c=t.formContainer,s=t.tasksContainer;return Object(d.jsxs)("section",{className:"section",children:[Object(d.jsxs)("div",{className:"section__container",children:[Object(d.jsx)("h2",{className:"section__header",children:e}),n]}),c,s]})}),h=(n(19),function(t){var e=t.children;return Object(d.jsx)("main",{className:"container",children:e})}),_=function(t){var e=t.title;return Object(d.jsx)("header",{children:Object(d.jsx)("h1",{children:e})})};var O=function(){var t=Object(c.useState)(!1),e=Object(u.a)(t,2),n=e[0],s=e[1],o=Object(c.useState)([]),i=Object(u.a)(o,2),O=i[0],k=i[1];return Object(d.jsxs)(h,{children:[Object(d.jsx)(_,{title:"Lista zada\u0144"}),Object(d.jsx)(f,{header:"Dodaj nowe zadanie",formContainer:Object(d.jsx)(l,{addNewTask:function(t){k((function(e){return[].concat(Object(a.a)(e),[{content:t,done:!1,id:e.length?e[e.length-1].id+1:1}])}))}})}),Object(d.jsx)(f,{header:"Lista zada\u0144",buttonsContainer:Object(d.jsx)(b,{tasks:O,hideDone:n,toggleHideDone:function(){s((function(t){return!t}))},setAllDone:function(){k((function(t){return t.map((function(t){return Object(r.a)(Object(r.a)({},t),{},{done:!0})}))}))}}),tasksContainer:Object(d.jsx)(j,{tasks:O,hideDone:n,removeTask:function(t){k((function(e){return e.filter((function(e){return e.id!==t}))}))},toggleTaskDone:function(t){k((function(e){return e.map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{done:!e.done}):e}))}))}})})]})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),c(t),s(t),o(t),i(t)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),k()}],[[20,1,2]]]);
//# sourceMappingURL=main.b35d56f5.chunk.js.map