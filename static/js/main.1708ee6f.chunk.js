(this["webpackJsonpmy-project_react-redux"]=this["webpackJsonpmy-project_react-redux"]||[]).push([[0],{18:function(e,t,n){},24:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(11),c=n.n(r),o=(n(24),n(2)),s=n(3),i=n(6),l=n(5),u=n(4),d=(n(18),n(8)),j=n.n(d),b=n(10),h=n(12),m="ADD_TODOS",O="DONE_TODOS",p="DELETE_TODO",f="MAKE_ALL_DONE",v="SEARCH",x=n(1),y=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onAddTask=function(){var e=Object(h.a)(j.a.mark((function e(t){var n,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target,r=n.name,c="checkbox"===n.type?n.checked:n.value,e.next=5,a.setState(Object(b.a)({},r,c));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.onClear=function(){a.setState({name:"",complete:!1})},a.onSubmitHandle=function(){var e=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a.props.onSaveTask(a.state);case 3:a.onClear();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.makeAllDone=function(){a.props.makeAllDone()},a.onSearch=function(){var e=Object(h.a)(j.a.mark((function e(t){var n,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target,r=n.name,c=n.value,e.next=5,a.setState(Object(b.a)({},r,c));case 5:a.props.onSearch(a.state.search);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={name:"",complete:!1,search:""},a}return Object(s.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("form",{className:"form-group",onSubmit:this.onSubmitHandle,children:[Object(x.jsx)("label",{htmlFor:"name",className:"label label label-info",children:"Add Todo"}),Object(x.jsx)("input",{type:"text",name:"name",value:this.state.name,className:"form-control add-todo mb-10",placeholder:"Add todo",onChange:this.onAddTask}),Object(x.jsx)("button",{type:"button",id:"checkAll",className:"btn btn-success",onClick:this.makeAllDone,children:"Mark all as done"}),Object(x.jsx)("button",{type:"submit",className:"btn btn-primary mt-10 ml-10",onClick:this.onAddTask,children:"Add"}),Object(x.jsxs)("div",{className:"mt-20",children:[Object(x.jsx)("label",{htmlFor:"search",className:"label label label-info",children:"Search"}),Object(x.jsx)("input",{type:"text",name:"search",value:this.state.search,className:"form-control add-todo",placeholder:"Search your todo...",onChange:this.onSearch})]})]})}}]),n}(a.Component),g=Object(u.b)(null,(function(e,t){return{onSaveTask:function(t){e(function(e){return{type:m,task:e}}(t))},makeAllDone:function(){e({type:f})},onSearch:function(t){e(function(e){return{type:v,item:e}}(t))}}}))(y),k=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onChange=function(t){e.props.onDoneTask(t)},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props;return Object(x.jsx)("ul",{id:"sortable",className:"list-unstyled",children:Object(x.jsx)("li",{className:"ui-state-default",children:Object(x.jsx)("div",{className:"checkbox",children:Object(x.jsx)("p",{onClick:function(){return e.onChange(t.id)},children:Object(x.jsx)("label",{children:t.name})})})})})}}]),n}(a.Component),S=Object(u.b)(null,(function(e,t){return{onDoneTask:function(t){e(function(e){return{type:O,id:e}}(t))}}}))(k),N=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.items,n=e.search,a=t.filter((function(e){return!e.complete&&e.name.toLowerCase().includes(n)})).length;return Object(x.jsxs)("div",{className:"todo-footer",children:[Object(x.jsx)("strong",{children:Object(x.jsx)("span",{className:"count-todos"})}),a," Items Left"]})}}]),n}(a.Component),D=Object(u.b)((function(e){return{items:e.todoItems,search:e.search}}),null)(N),C=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.todoListAll,n=e.search;console.log(n);var a=t.filter((function(e){return!e.complete&&e.name.toLowerCase().includes(n)})).map((function(e,t){return Object(x.jsx)(S,{id:e.id,name:e.name,complete:e.complete},t)}));return Object(x.jsx)("div",{className:"col-md-6",children:Object(x.jsxs)("div",{className:"todolist not-done",children:[Object(x.jsx)("h1",{children:"Todos"}),Object(x.jsx)(g,{}),Object(x.jsx)("hr",{}),a,Object(x.jsx)(D,{})]})})}}]),n}(a.Component),w=Object(u.b)((function(e){return{todoListAll:e.todoItems,search:e.search}}),null)(C),A=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onDelete=function(t){e.props.onSendDelete(t)},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.task;return Object(x.jsx)("ul",{id:"done-items",className:"list-unstyled",children:Object(x.jsxs)("li",{children:[t.name,Object(x.jsx)("button",{className:"remove-item btn btn-default btn-xs pull-right",onClick:function(){return e.onDelete(t.id)},children:Object(x.jsx)("span",{className:"glyphicon glyphicon-remove"})})]})})}}]),n}(a.Component),T=Object(u.b)(null,(function(e,t){return{onSendDelete:function(t){e(function(e){return{type:p,id:e}}(t))}}}))(A),_=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.tasks.filter((function(e){return e.complete})).map((function(e,t){return Object(x.jsx)(T,{task:e},t)}));return Object(x.jsx)("div",{className:"col-md-6",children:Object(x.jsxs)("div",{className:"todolist",children:[Object(x.jsx)("h1",{children:"Already Done"}),e]})})}}]),n}(a.Component),E=Object(u.b)((function(e){return{tasks:e.todoItems}}),null)(_),I=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{children:Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)(w,{}),Object(x.jsx)(E,{})]})})})}}]),n}(a.Component),L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))},J=n(9),F=n(17),X=n(7);function H(){var e=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}function M(e,t){var n;return e.forEach((function(e,a){if(e.id===t)return n=a})),n}var P=JSON.parse(localStorage.getItem("data")),R=P||[],B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:var n=Object(X.a)(e);if(t.task.name){var a={id:H(),name:t.task.name,complete:t.task.complete};return n.push(a),localStorage.setItem("data",JSON.stringify(n)),n}return alert("Please add your todo"),n;case O:var r=Object(X.a)(e),c=M(r,t.id);return r[c]=Object(F.a)(Object(F.a)({},r[c]),{},{complete:!0}),localStorage.setItem("data",JSON.stringify(r)),r;case p:var o=Object(X.a)(e),s=o.findIndex((function(e){return e.id===t.id}));return o.splice(s,1),localStorage.setItem("data",JSON.stringify(o)),o;case f:var i=Object(X.a)(e);return i.map((function(e){return e.complete=!0})),localStorage.setItem("data",JSON.stringify(i)),i;default:var l=Object(X.a)(e);return l}},U=JSON.parse(localStorage.getItem("data")),V=U||[],K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;t.type;var n=Object(X.a)(e);return n},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return t.item.toLowerCase();default:return e}},z=Object(J.b)({todoItems:B,doneTasks:K,search:q}),G=Object(J.c)(z,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(Object(x.jsxs)(u.a,{store:G,children:[Object(x.jsx)(I,{}),","]}),document.getElementById("root")),L()}},[[33,1,2]]]);
//# sourceMappingURL=main.1708ee6f.chunk.js.map