(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){},23:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n(1),r=n(11),c=n.n(r),i=n(8),l=n(9),s=n(7),u=n(2),d=n(3),h=n(6),b=n(5),j=n(4),m=(n(18),function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props,e=t.toDo,n=t.done;return Object(a.jsxs)("div",{className:"app-header d-flex",children:[Object(a.jsx)("h1",{children:"Todo List"}),Object(a.jsxs)("h2",{children:[e," more to do, ",n," done"]})]})}}]),n}(o.Component)),f=(n(19),function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).state={searchQuery:""},t._onSearchInputChange=t._onSearchInputChange.bind(Object(h.a)(t)),t}return Object(d.a)(n,[{key:"_onSearchInputChange",value:function(t){t.preventDefault();var e=t.target.value;this.setState({searchQuery:e}),this.props.onSearchInputChange(e)}},{key:"render",value:function(){return Object(a.jsx)("input",{type:"text",className:"form-control search-input",placeholder:"Type here to search",value:this.state.searchQuery,onChange:this._onSearchInputChange})}}]),n}(o.Component)),p=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).buttons=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props,e=t.filter,n=t.onFilterChange,o=this.buttons.map((function(t){var o=t.name,r=t.label,c="btn ".concat(e===o?"btn-info":"btn-outline-secondary");return Object(a.jsx)("button",{type:"button",className:c,onClick:function(){return n(o)},children:r},o)}));return Object(a.jsx)("div",{className:"btn-group",children:o})}}]),n}(o.Component),O=n(12),g=(n(20),function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props,e=t.textContent,n=t.isImportant,o=t.isDone,r=t.onDeleteButtonClick,c=t.onImportantToggleClick,i=t.onDoneToggleClick,l="list-group-item todo-list-item ".concat(o?"done":""," ").concat(n?"important":"");return Object(a.jsxs)("li",{className:l,children:[Object(a.jsx)("span",{className:"todo-list-item-label",onClick:i,children:e}),Object(a.jsx)("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:c,children:Object(a.jsx)("i",{className:"fa fa-exclamation"})}),Object(a.jsx)("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:r,children:Object(a.jsx)("i",{className:"fa fa-trash-o"})})]})}}]),n}(o.Component)),v=(n(21),function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props,e=t.todos,n=t.onDeleteButtonClick,o=t.onImportantToggleClick,r=t.onDoneToggleClick,c=e.map((function(t){var e=t.id,c=Object(O.a)(t,["id"]);return Object(a.jsx)(g,Object(s.a)(Object(s.a)({},c),{},{onDeleteButtonClick:function(){return n(e)},onImportantToggleClick:function(){return o(e)},onDoneToggleClick:function(){return r(e)}}),e)}));return Object(a.jsx)("ul",{className:"list-group todo-list",children:c})}}]),n}(o.Component)),C=(n(22),function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).state={textContent:""},t.onAddItemInputChange=t.onAddItemInputChange.bind(Object(h.a)(t)),t.onFormSubmit=t.onFormSubmit.bind(Object(h.a)(t)),t}return Object(d.a)(n,[{key:"onAddItemInputChange",value:function(t){this.setState({textContent:t.target.value})}},{key:"onFormSubmit",value:function(t){t.preventDefault();var e=this.state.textContent;0!==e.length&&(this.props.onAddButtonClick(e),this.setState({textContent:""}))}},{key:"render",value:function(){return Object(a.jsxs)("form",{className:"add-item-form d-flex",children:[Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"What needs to be done?",onChange:this.onAddItemInputChange,value:this.state.textContent}),Object(a.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:this.onFormSubmit,children:"Add item"})]})}}]),n}(o.Component)),I=(n(23),function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this))._idCounter=1,t.state={todoData:[t._createTodoItem("Drink Coffee"),t._createTodoItem("Build React App"),t._createTodoItem("Have a Lunch")],searchQuery:"",currentFilter:"all"},t.deleteListItemHandler=t.deleteListItemHandler.bind(Object(h.a)(t)),t.addListItemHandler=t.addListItemHandler.bind(Object(h.a)(t)),t.doneItemToggleHandler=t.doneItemToggleHandler.bind(Object(h.a)(t)),t.importantItemToggleHandler=t.importantItemToggleHandler.bind(Object(h.a)(t)),t.searchInputChangeHandler=t.searchInputChangeHandler.bind(Object(h.a)(t)),t.filterChangeHandler=t.filterChangeHandler.bind(Object(h.a)(t)),t}return Object(d.a)(n,[{key:"_createTodoItem",value:function(t){return{textContent:t,isImportant:!1,isDone:!1,id:this._idCounter++}}},{key:"_toggleProperty",value:function(t,e,n){var a=t.findIndex((function(t){return t.id===e})),o=t[a],r=Object(s.a)(Object(s.a)({},o),{},Object(l.a)({},n,!o[n]));return[].concat(Object(i.a)(t.slice(0,a)),[r],Object(i.a)(t.slice(a+1)))}},{key:"_searchItems",value:function(t,e){return 0===e.length?t:t.filter((function(t){return t.textContent.toLowerCase().indexOf(e.toLowerCase())>-1}))}},{key:"_filterItems",value:function(t,e){switch(e){case"all":return t;case"active":return t.filter((function(t){return!t.isDone}));case"done":return t.filter((function(t){return t.isDone}));default:return t}}},{key:"searchInputChangeHandler",value:function(t){this.setState({searchQuery:t})}},{key:"filterChangeHandler",value:function(t){this.setState({currentFilter:t})}},{key:"doneItemToggleHandler",value:function(t){var e=this;this.setState((function(n){var a=n.todoData;return{todoData:e._toggleProperty(a,t,"isDone")}}))}},{key:"importantItemToggleHandler",value:function(t){var e=this;this.setState((function(n){var a=n.todoData;return{todoData:e._toggleProperty(a,t,"isImportant")}}))}},{key:"deleteListItemHandler",value:function(t){this.setState((function(e){var n=e.todoData,a=n.findIndex((function(e){return e.id===t}));return{todoData:[].concat(Object(i.a)(n.slice(0,a)),Object(i.a)(n.slice(a+1)))}}))}},{key:"addListItemHandler",value:function(t){var e=this;this.setState((function(n){var a=n.todoData;return{todoData:[].concat(Object(i.a)(a),[e._createTodoItem(t)])}}))}},{key:"render",value:function(){var t=this.state,e=t.todoData,n=t.searchQuery,o=t.currentFilter,r=e.filter((function(t){return t.isDone})).length,c=e.length-r,i=this._filterItems(this._searchItems(e,n),o);return Object(a.jsxs)("div",{className:"todo-app",children:[Object(a.jsx)(m,{toDo:c,done:r}),Object(a.jsxs)("div",{className:"top-panel d-flex",children:[Object(a.jsx)(f,{onSearchInputChange:this.searchInputChangeHandler}),Object(a.jsx)(p,{filter:o,onFilterChange:this.filterChangeHandler})]}),Object(a.jsx)(v,{todos:i,onDeleteButtonClick:this.deleteListItemHandler,onDoneToggleClick:this.doneItemToggleHandler,onImportantToggleClick:this.importantItemToggleHandler}),Object(a.jsx)(C,{onAddButtonClick:this.addListItemHandler})]})}}]),n}(o.Component)),k=document.querySelector("#root");c.a.render(Object(a.jsx)(I,{}),k)}},[[24,1,2]]]);
//# sourceMappingURL=main.851c9427.chunk.js.map