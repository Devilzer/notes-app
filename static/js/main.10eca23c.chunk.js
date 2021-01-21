(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),i=n(7),o=n.n(i),s=(n(25),n(26),n(2)),l=n(5),j=n(10),d=n(3),b=n(16),u=n.n(b),O=function(e){new u.a({text:e,layout:"bottomRight",theme:"nest",type:"alert",timeout:750}).show()},h=function(e){return{type:"SET_CURRENT_NOTE",payload:e}},x=function(e){return{type:"SET_EDIT",payload:e}};var f=function(){var e=new Date,t=Object(d.c)((function(e){return e})),n=Object(d.b)(),r=Object(a.useState)({title:"",description:"",date:e.getDate()+"-"+(e.getMonth()+1)+"-"+e.getFullYear(),editable:!1,id:Date.now()}),i=Object(j.a)(r,2),o=i[0],b=i[1];return Object(c.jsxs)("div",{className:"input-container",children:[Object(c.jsx)("input",{type:"text",value:o.title,onChange:function(e){return b(Object(s.a)(Object(s.a)({},o),{},{title:e.target.value}))},placeholder:"Title"}),Object(c.jsx)("textarea",{value:o.description,onChange:function(e){return b(Object(s.a)(Object(s.a)({},o),{},{description:e.target.value}))},placeholder:"Type something..."}),Object(c.jsx)("button",{onClick:function(){var c=Object(l.a)(t.note.notes).findIndex((function(e){return e.title===o.title}));""!==o.title&&""!==o.description?-1===c?(n(function(e){return O("Note Created!"),{type:"CREATE_NOTE",payload:e}}(o)),b(Object(s.a)(Object(s.a)({},o),{},{title:"",description:"",date:e.getDate()+"-"+(e.getMonth()+1)+"-"+e.getFullYear(),id:Date.now()}))):O("Title already exists."):O("please fill all details.")},children:"Add"})]})};var p=function(){var e=Object(d.c)((function(e){return e})),t=Object(d.b)();return Object(c.jsx)("div",{className:"search-container",children:Object(c.jsx)("input",{type:"text",value:e.note.search,onChange:function(e){return t({type:"UPDATE_SEARCH",payload:e.target.value})},placeholder:"Search title..."})})};var v=function(e){var t=e.note,n=(e.index,Object(d.b)());return Object(c.jsxs)("div",{className:"note-container",children:[Object(c.jsx)("div",{className:"title",onClick:function(){n(h(t))},children:Object(c.jsx)("h2",{children:t.title})}),Object(c.jsxs)("div",{className:"date-btn",children:[Object(c.jsx)("h4",{children:t.date}),Object(c.jsxs)("div",{className:"btns",children:[Object(c.jsx)("button",{onClick:function(){n(x(t.id)),n(h(t))},children:Object(c.jsx)("i",{className:"fas fa-pencil-alt edit"})}),Object(c.jsx)("button",{onClick:function(){var e;n((e=t.id,O("Note Deleted!"),{type:"DELETE_NOTE",payload:e}))},children:Object(c.jsx)("i",{className:"far fa-trash-alt delete"})})]})]})]})};var E=function(){var e=Object(d.c)((function(e){return e})),t=[];return t=""!==e.note.search?e.note.notes.filter((function(t){return-1!==t.title.toLowerCase().indexOf(e.note.search.toLowerCase())})):Object(l.a)(e.note.notes),Object(c.jsx)("div",{className:"list-container",children:t.map((function(e,t){return Object(c.jsx)(v,{note:e,index:t},t)}))})};var y=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(f,{}),Object(c.jsx)(p,{}),Object(c.jsx)(E,{})]})};var N=function(){var e,t=Object(d.b)(),n=Object(d.c)((function(e){return e})),r=Object(a.useState)({title:n.note.currentnote.title,description:n.note.currentnote.description,date:n.note.currentnote.date,id:n.note.currentnote.id,editable:!1}),i=Object(j.a)(r,2),o=i[0],l=i[1],b=function(){t({type:"RESET_EDIT",payload:n.note.currentnote.id});t(h({}))};return e=n.note.currentnote.editable?Object(c.jsxs)("div",{className:"note-detail-container",children:[Object(c.jsxs)("div",{className:"btns",children:[Object(c.jsx)("button",{onClick:b,children:Object(c.jsx)("i",{className:"fas fa-chevron-left"})}),Object(c.jsx)("button",{onClick:function(){var e;t((e=o,O("Note Updated!"),{type:"EDIT_TODO",payload:e})),l(Object(s.a)(Object(s.a)({},o),{},{editable:!1}))},children:Object(c.jsx)("i",{className:"fas fa-check"})})]}),Object(c.jsxs)("div",{className:"note-details",children:[Object(c.jsx)("input",{type:"text",value:o.title,onChange:function(e){return l(Object(s.a)(Object(s.a)({},o),{},{title:e.target.value}))}}),Object(c.jsx)("h4",{children:"27-2-2021"}),Object(c.jsx)("textarea",{value:o.description,onChange:function(e){return l(Object(s.a)(Object(s.a)({},o),{},{description:e.target.value}))}})]})]}):Object(c.jsxs)("div",{className:"note-detail-container",children:[Object(c.jsxs)("div",{className:"btns",children:[Object(c.jsx)("button",{onClick:b,children:Object(c.jsx)("i",{className:"fas fa-chevron-left"})}),Object(c.jsx)("button",{onClick:function(){t(x(n.note.currentnote.id))},children:Object(c.jsx)("i",{className:"fas fa-pencil-alt edit"})})]}),Object(c.jsxs)("div",{className:"note-details",children:[Object(c.jsx)("h2",{children:n.note.currentnote.title}),Object(c.jsx)("h4",{children:"27-2-2021"}),Object(c.jsx)("p",{children:n.note.currentnote.description})]})]}),Object(c.jsx)(c.Fragment,{children:e})};n(33),n(34);var T=function(){var e,t=Object(d.c)((function(e){return e}));return e=0===Object.keys(t.note.currentnote).length&&t.note.currentnote.constructor===Object?Object(c.jsx)(y,{}):Object(c.jsx)(N,{}),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Notes"}),e]})},m=n(17),g=n(4),C=n(18),D={notes:[],search:"",currentnote:{}},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_NOTE":return Object(s.a)(Object(s.a)({},e),{},{notes:[].concat(Object(l.a)(e.notes),[t.payload])});case"UPDATE_SEARCH":return Object(s.a)(Object(s.a)({},e),{},{search:t.payload});case"DELETE_NOTE":var n=e.notes.findIndex((function(e){return e.id===t.payload})),c=e.notes;return c.splice(n,1),Object(s.a)(Object(s.a)({},e),{},{notes:c});case"SET_CURRENT_NOTE":return Object(s.a)(Object(s.a)({},e),{},{currentnote:t.payload});case"SET_EDIT":var a=e.notes.findIndex((function(e){return e.id===t.payload})),r=e.notes;return r[a].editable=!0,Object(s.a)(Object(s.a)({},e),{},{notes:r});case"RESET_EDIT":var i=e.notes.findIndex((function(e){return e.id===t.payload})),o=e.notes;return o[i].editable=!1,Object(s.a)(Object(s.a)({},e),{},{notes:o});case"EDIT_TODO":var j=e.notes.findIndex((function(e){return e.id===t.payload.id})),d=e.notes;return d[j]=t.payload,Object(s.a)(Object(s.a)({},e),{},{notes:d,currentnote:t.payload});default:return e}},k=n(9),S=n(19),I=n.n(S),R=Object(g.combineReducers)({note:_}),w={key:"root",storage:I.a},A=Object(k.a)(w,R),U=Object(g.createStore)(A,Object(C.composeWithDevTools)()),F=Object(k.b)(U);o.a.render(Object(c.jsx)(d.a,{store:U,children:Object(c.jsx)(m.a,{persistor:F,children:Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(T,{})})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.10eca23c.chunk.js.map