(this.webpackJsonpreact_todo_app=this.webpackJsonpreact_todo_app||[]).push([[0],{110:function(e,t,a){e.exports=a(122)},115:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),i=a.n(r),c=(a(115),a(15)),l=a(13),s=a(14),d=a(17),u=a(16),p=a(154),m=a(156),g=a(157),f=a(158),h=a(85),E=Object(p.a)({root:{background:"#EAF0F1"},brand:{},name:{color:"#3C64B1",fontWeight:"bold"}}),y=function(e){var t=E();return o.a.createElement("div",null,o.a.createElement(m.a,{className:t.root},o.a.createElement(g.a,{className:t.brand},o.a.createElement(f.a,null,o.a.createElement(h.a,{variant:"h6",className:t.name},"TODO APP HEADER")))))},b=Object(p.a)({root:{background:"#EAF0F1"},brand:{},name:{color:"#3C64B1",fontWeight:"bold",margin:"auto"}}),O=function(e){var t=b();return o.a.createElement("div",null,o.a.createElement(m.a,{position:"static",className:t.root},o.a.createElement(g.a,{className:t.brand},o.a.createElement(h.a,{variant:"h6",className:t.name},"TODO APP FOOTER"))))},v=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={},e}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(y,null),this.props.children,o.a.createElement(O,null))}}]),a}(n.Component),D=a(43),T=a(173),j=a(162),k=a(124),C="https://node-personal-assistant.herokuapp.com/api/",N=a(31),x=a.n(N),_=a(52);function I(){return A.apply(this,arguments)}function A(){return(A=Object(_.a)(x.a.mark((function e(){var t,a,n=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"",e.next=3,fetch(t,{method:"GET",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer"});case 3:return a=e.sent,e.abrupt("return",a.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(_.a)(x.a.mark((function e(){var t,a,n,o=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"",a=o.length>1&&void 0!==o[1]?o[1]:{},e.next=4,fetch(t,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(a)});case 4:return n=e.sent,e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(_.a)(x.a.mark((function e(){var t,a,n,o=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"",a=o.length>1&&void 0!==o[1]?o[1]:{},e.next=4,fetch(t,{method:"PUT",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(a)});case 4:return n=e.sent,e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){return(R=Object(_.a)(x.a.mark((function e(){var t,a,n=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"",n.length>1&&void 0!==n[1]?n[1]:"",e.next=4,fetch(t,{method:"DELETE",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer"});case 4:return a=e.sent,e.abrupt("return",a.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=a(126),L=a(131),P=a(130),G=a(177),W=a(129),M=a(161),B=a(4),U=function(e){return{box:{display:"flex"},category:{flexGrow:1,background:"#EAF0F1",padding:"6px 16px"},gridroot:{display:"flex",flexDirection:"column"},gridcardcategory:{background:"#EAF0F1",padding:"6px 16px"},gridcardbody:{flex:"1 0 auto"},gridcardcontent:{display:"flex",flexDirection:"column",flex:"1 0 auto"},gridcard:{display:"flex",flexDirection:"column",flex:"1 0 auto"},cardactions:{display:"flex"},input:{display:"flex",margin:"0 8px"},formControl:{minWidth:120},txtarea:{marginLeft:"6px",marginBottom:"20px",flexGrow:1}}},z=Object(B.a)(U)((function(e){var t=e.classes;return o.a.createElement(T.a,{className:t.input},o.a.createElement(F.a,{error:!!e.categoryError,variant:"outlined",className:t.formControl},o.a.createElement(L.a,{id:"categorylabel"},"Category"),o.a.createElement(P.a,{labelId:"categorylabel",name:"category",value:e.categoryName,onChange:e.handleChange,label:"Category"},e.categories.map((function(e){return o.a.createElement(G.a,{key:e.id,value:e.name},e.name)}))),o.a.createElement(W.a,null,e.categoryError)),o.a.createElement(M.a,{id:"outlined-multiline-static",multiline:!0,rows:1,label:"ToDo message here..",variant:"outlined",className:t.txtarea,name:"body",value:e.body,onChange:e.handleChange,helperText:e.bodyError,error:!!e.bodyError}))})),H=a(75),V=a.n(H),X={category:"",body:"",categoryError:"",bodyError:""},J=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state=X,e.handleChange=function(t){e.setState(Object(D.a)({},t.target.name,t.target.value))},e.validate=function(){var t="",a="";return e.state.category||(t="Please select a category"),e.state.body.trim().length||(a="Task description is required"),!t&&!a||(e.setState({categoryError:t,bodyError:a}),!1)},e.onSubmit=function(t){if(t.preventDefault(),e.validate()){var a={categoryName:e.state.category,body:e.state.body,done:!1};e.setState(X),e.props.AddToDo(a)}},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(T.a,{className:e.root},o.a.createElement(T.a,{className:e.box},o.a.createElement(T.a,{className:e.welcome},o.a.createElement("div",{className:V.a.greeting},"React ToDo App, React Redux, Material UI and Higher Order Components")),o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement(T.a,{className:e.box},o.a.createElement(z,{categories:this.props.categories,categoryName:this.state.category,categoryError:this.state.categoryError,body:this.state.body,bodyError:this.state.bodyError,handleChange:this.handleChange}),o.a.createElement(j.a,{variant:"outlined",color:"primary",className:e.btn,type:"submit"},"Pin To Board")))))}}]),a}(n.Component),q=Object(k.a)((function(e){return{root:{height:560,backgroundColor:"#EAF0F1",display:"flex"},box:{maxWidth:730,margin:"auto",display:"flex",flexDirection:"column"},welcome:{marginBottom:"20px"},btn:{margin:"auto",width:140,padding:"8px 0px",fontWeight:"bold",marginBottom:"20px"}}}))(Object(c.b)(null,{AddToDo:function(e){return function(t){(function(){return w.apply(this,arguments)})(C+"todos",e).then((function(e){return t({type:"ADD_TODO",payload:e})}),(function(e){return console.log("ERROR:",e)}))}}})(J)),Y=a(175),K=a(163),Q=a(77),Z=a.n(Q),$=a(78),ee=a.n($),te=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={view:""},e.handleClick=function(t){e.setState({view:t}),e.props.ToDoViewMode(t)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return o.a.createElement("div",null,o.a.createElement(f.a,{className:t.control},o.a.createElement(h.a,{variant:"h5",className:t.hot},"TODOs BOARD"),o.a.createElement(Y.a,{title:"Grid"},o.a.createElement("div",{onClick:function(t){return e.handleClick("grid")}},o.a.createElement(K.a,null,o.a.createElement(Z.a,{fontSize:"large",className:t.icon})))),o.a.createElement(Y.a,{title:"List"},o.a.createElement("div",{onClick:function(t){return e.handleClick("list")}},o.a.createElement(K.a,null,o.a.createElement(ee.a,{fontSize:"large",className:t.icon}))))))}}]),a}(n.Component),ae=Object(c.b)(null,{ToDoViewMode:function(e){return function(t){return t({type:"TODO_VIEW_MODE",payload:e})}}})(Object(B.a)((function(e){return{control:{display:"flex",margin:"5px auto"},hot:{flexGrow:1,fontWeight:"bold",margin:"auto 0"},icon:{}}}))(te)),ne=function(e){return{root:{marginBottom:"20px"},text:{fontWeight:"350"}}},oe=a(167),re=a(165),ie=a(166),ce=a(164),le=a(60),se=a(79),de=a.n(se),ue=a(80),pe=a.n(ue),me=a(81),ge=a.n(me),fe=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleClick=function(t,a){switch(a){case"edit":e.props.DialogEditToDo(t);break;case"delete":e.props.OpenDialog(t);break;case"done":e.props.ToggleToDoDone(t)}},e}return Object(s.a)(a,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){"delete"===e.dialog.action&&(this.props.DeleteToDo(e.dialog.id),e.dialog.action="")}},{key:"render",value:function(){var e=this,t=this.props.todo,a=t.done?le.a[500]:"inherit";return o.a.createElement(ce.a,null,o.a.createElement(Y.a,{title:"Edit"},o.a.createElement("div",{onClick:function(a){return e.handleClick(t.id,"edit")}},o.a.createElement(K.a,{size:"small"},o.a.createElement(de.a,{fontSize:"small"})))),o.a.createElement(Y.a,{title:"Delete"},o.a.createElement("div",{onClick:function(a){return e.handleClick(t.id,"delete")}},o.a.createElement(K.a,{size:"small"},o.a.createElement(pe.a,{fontSize:"small"})))),o.a.createElement(Y.a,{title:"Done"},o.a.createElement("div",{onClick:function(a){return e.handleClick(t.id,"done")}},o.a.createElement(K.a,{size:"small"},o.a.createElement(ge.a,{style:{color:a},fontSize:"small"})))))}}]),a}(n.Component),he=Object(B.a)(U)(Object(c.b)((function(e){return{toggleId:e.ToDo.toggleId,dialog:e.ToDo.dialog}}),{DeleteToDo:function(e){return function(t){(function(){return R.apply(this,arguments)})(C+"todos/".concat(e)).then((function(e){return t({type:"DELETE_TODO",payload:e.id},(function(e){return console.log("ERROR:",e)}))}))}},ToggleToDoDone:function(e){return function(t){return t({type:"TOGGLE_TODO_DONE",payload:{id:e,flag:Math.floor(10*Math.random())}})}},OpenDialog:function(e){return function(t){return t({type:"OPEN_DIALOG",payload:{open:!0,id:e}})}},DialogEditToDo:function(e){return function(t){return t({type:"DIALOG_EDIT_TODO",payload:e})}}})(fe)),Ee=Object(k.a)(U)((function(e){var t=e.todo,a=e.classes;return o.a.createElement(re.a,{className:a.card},o.a.createElement(T.a,{className:a.box},o.a.createElement(ie.a,{className:a.category},o.a.createElement(h.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.categoryName)),o.a.createElement(he,{todo:t})),o.a.createElement(ie.a,null,o.a.createElement(h.a,{variant:"body1",color:"textSecondary",component:"p"},t.body)))})),ye=Object(k.a)(U)((function(e){var t=e.todo,a=e.classes;return o.a.createElement(oe.a,{lg:3,md:4,sm:6,xs:12,className:a.gridroot,item:!0},o.a.createElement(re.a,{className:a.gridcard},o.a.createElement(ie.a,{className:a.gridcardcategory},o.a.createElement(h.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.categoryName)),o.a.createElement(ie.a,{className:a.gridcardcontent},o.a.createElement(h.a,{variant:"body1",color:"textSecondary",component:"p",className:a.gridcardbody},t.body)),o.a.createElement(T.a,{justifyContent:"flex-end",className:a.cardactions},o.a.createElement(he,{todo:t}))))})),be=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).renderToDos=function(){return void 0===e.props.todos||0===e.props.todos.length?o.a.createElement(h.a,{align:"center",variant:"h6",component:"p",className:e.props.classes.text},"No Tasks Available for Display"):"list"===e.props.viewMode?e.props.todos.map((function(e,t){return o.a.createElement("div",{key:t},o.a.createElement(Ee,{todo:e}))})):o.a.createElement(oe.a,{container:!0,spacing:1},e.props.todos.map((function(e,t){return o.a.createElement(o.a.Fragment,{key:t},o.a.createElement(ye,{todo:e}))})))},e}return Object(s.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){this.props.FetchToDos()}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){if(Object.entries(e.newTodo).length){var t=this.props.todos.findIndex((function(t){return t.id===e.newTodo.id}));t>-1?(this.props.todos[t].categoryName=e.newTodo.categoryName,this.props.todos[t].body=e.newTodo.body):this.props.todos.unshift(e.newTodo)}if(e.deleteId.length>0){var a=this.props.todos.findIndex((function(t){return t.id===e.deleteId}));this.props.todos.splice(a,1)}if(e.editId.length>0){var n=this.props.todos.findIndex((function(t){return t.id===e.editId})),o=this.props.todos[n];this.props.OpenEditDialog(o)}if(Object.entries(e.toggleId).length){var r=this.props.todos.findIndex((function(t){return t.id===e.toggleId.id}));this.props.todos[r].done=!this.props.todos[r].done;var i=this.props.todos[r];this.props.EditToDo(i.id,i)}if(Object.entries(e.editDialog).length>0&&"edit"===e.editDialog.action){var c=this.props.todos.findIndex((function(t){return t.id===e.editDialog.task.id}));if(c>-1&&(this.props.todos[c].categoryName!==e.editDialog.task.categoryName||this.props.todos[c].body!==e.editDialog.task.body)){var l=e.editDialog.task;this.props.EditToDo(l.id,l)}}}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.root},this.renderToDos())}}]),a}(n.Component),Oe=Object(B.a)(ne)(Object(c.b)((function(e){return{todos:e.ToDo.items,newTodo:e.ToDo.item,viewMode:e.ToDo.viewMode,deleteId:e.ToDo.deleteId,toggleId:e.ToDo.toggleId,editId:e.ToDo.editId,editDialog:e.ToDo.editDialogAction}}),{FetchToDos:function(){return function(e){I(C+"todos").then((function(t){return e({type:"FETCH_TODOS",payload:t})}),(function(e){console.log("ERROR:",e)}))}},OpenEditDialog:function(e){return function(t){return t({type:"OPEN_EDIT_DIALOG",payload:{open:!0,task:e}})}},EditToDo:function(e,t){return function(a){(function(){return S.apply(this,arguments)})(C+"todos/".concat(e),t).then((function(e){return a({type:"EDIT_TODO",payload:t},(function(e){return console.log("ERROR:",e)}))}))}}})(be)),ve=a(176),De=a(172),Te=a(170),je=a(171),ke=a(169),Ce=a(168),Ne=o.a.forwardRef((function(e,t){return o.a.createElement(Ce.a,Object.assign({direction:"up",ref:t},e))})),xe=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleClose=function(t){e.props.DialogAction(e.props.dialog.id,t)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return void 0===this.props.dialog.open&&(this.props.dialog.open=!1),o.a.createElement("div",null,o.a.createElement(ve.a,{open:this.props.dialog.open,TransitionComponent:Ne,keepMounted:!0,onClose:function(){return e.handleClose("cancel")},"aria-labelledby":"dialog-title","aria-describedby":"dialog-description"},o.a.createElement(ke.a,{id:"dialog-title"},"Delete Task"),o.a.createElement(Te.a,null,o.a.createElement(je.a,{id:"dialog-description"},"You're about to delete a Task, Are you sure?")),o.a.createElement(De.a,null,o.a.createElement(j.a,{onClick:function(){return e.handleClose("cancel")},color:"primary"},"Cancel"),o.a.createElement(j.a,{onClick:function(){return e.handleClose("delete")},color:"secondary"},"Delete"))))}}]),a}(n.Component),_e=Object(c.b)((function(e){return{dialog:e.ToDo.dialog}}),{DialogAction:function(e,t){return function(a){return a({type:"DIALOG_ACTION",payload:{id:e,action:t}})}}})(xe),Ie=a(11),Ae=o.a.forwardRef((function(e,t){return o.a.createElement(Ce.a,Object.assign({direction:"up",ref:t},e))})),we=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={task:{category:"",body:"",categoryError:"",bodyError:""}},e.validate=function(){var t="",a="";return e.state.task.category||(t="Please select a category"),e.state.task.body.trim().length||(a="Task description is required"),!t&&!a||(e.setState({task:Object(Ie.a)(Object(Ie.a)({},e.state.task),{},{categoryError:t,bodyError:a})}),!1)},e.handleClose=function(t){if("edit"!==t)e.props.EditDialogAction(e.props.editDialog.task,t);else if(e.validate()){var a={categoryName:e.state.task.category,body:e.state.task.body,id:e.props.editDialog.task.id,done:e.props.editDialog.task.done};e.props.EditDialogAction(a,t)}},e.handleChange=function(t){e.setState({task:Object(Ie.a)(Object(Ie.a)({},e.state.task),{},Object(D.a)({},t.target.name,t.target.value))})},e}return Object(s.a)(a,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){Object.entries(e.editDialog).length>0&&this.setState({task:{category:e.editDialog.task.categoryName,body:e.editDialog.task.body,categoryError:this.state.task.categoryError,bodyError:this.state.task.bodyError}})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(ve.a,{open:void 0!==this.props.editDialog.open&&this.props.editDialog.open,TransitionComponent:Ae,keepMounted:!0,onClose:function(){return e.handleClose("cancel")},"aria-labelledby":"dialog-title","aria-describedby":"dialog-description",maxWidth:"md",fullWidth:!0},o.a.createElement(ke.a,{id:"dialog-title"},"Edit Task"),o.a.createElement(Te.a,null,o.a.createElement(je.a,{id:"dialog-description"},"Please modify the task information")),o.a.createElement(z,{categories:this.props.categories,categoryName:this.state.task.category,body:this.state.task.body,categoryError:this.state.task.categoryError,bodyError:this.state.task.bodyError,handleChange:this.handleChange}),o.a.createElement(De.a,null,o.a.createElement(j.a,{onClick:function(){return e.handleClose("cancel")},color:"primary"},"Cancel"),o.a.createElement(j.a,{onClick:function(){return e.handleClose("edit")},style:{color:le.a[500]}},"Save"))))}}]),a}(n.Component),Se=Object(c.b)((function(e){return{editDialog:e.ToDo.openEditDialog,categories:e.Categories.categories}}),{EditDialogAction:function(e,t){return function(a){return a({type:"EDIT_DIALOG_ACTION",payload:{task:e,action:t}})}}})(we),Re=Object(B.a)(ne)((function(e){var t=e.classes;return o.a.createElement(f.a,{className:t.root},o.a.createElement(Oe,null),o.a.createElement(_e,null),o.a.createElement(Se,null))})),Fe=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={isLoaded:!1},e}return Object(s.a)(a,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.categories.length&&this.setState({isLoaded:!0})}},{key:"UNSAFE_componentWillMount",value:function(){this.props.FetchCategories()}},{key:"render",value:function(){return o.a.createElement("div",null,this.state.isLoaded?o.a.createElement("div",null,o.a.createElement(q,{categories:this.props.categories}),o.a.createElement(ae,null),o.a.createElement(Re,null)):o.a.createElement("div",{style:{width:"100%",height:"100vh",textAlign:"center"}},o.a.createElement("h6",{style:{margin:"auto"}},"Loading...")))}}]),a}(n.Component),Le=Object(c.b)((function(e){return{categories:e.Categories.categories}}),{FetchCategories:function(){return function(e){I(C+"categories").then((function(t){return e({type:"FETCH_CATEGORIES",payload:t})}),(function(e){console.log("ERROR:",e)}))}}})(Fe),Pe=a(34),Ge=a(82),We={items:[],item:{},viewMode:"",deleteId:"",editId:"",toggleId:{},dialog:{},openEditDialog:{},editDialogAction:{}},Me=Object(Pe.c)({ToDo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_TODOS":return Object(Ie.a)(Object(Ie.a)({},We),{},{items:t.payload});case"ADD_TODO":return Object(Ie.a)(Object(Ie.a)({},We),{},{items:e.items,item:t.payload});case"TODO_VIEW_MODE":return Object(Ie.a)(Object(Ie.a)({},We),{},{items:e.items,viewMode:t.payload});case"DELETE_TODO":return Object(Ie.a)(Object(Ie.a)({},We),{},{items:e.items,deleteId:t.payload});case"TOGGLE_TODO_DONE":return Object(Ie.a)(Object(Ie.a)({},We),{},{items:e.items,toggleId:t.payload});case"EDIT_TODO":return Object(Ie.a)(Object(Ie.a)({},We),{},{items:e.items,item:t.payload});case"DIALOG_EDIT_TODO":return Object(Ie.a)(Object(Ie.a)({},We),{},{items:e.items,editId:t.payload});case"OPEN_DIALOG":case"DIALOG_ACTION":return Object(Ie.a)(Object(Ie.a)({},We),{},{items:e.items,dialog:t.payload});case"OPEN_EDIT_DIALOG":return Object(Ie.a)(Object(Ie.a)({},We),{},{items:e.items,openEditDialog:t.payload});case"EDIT_DIALOG_ACTION":return Object(Ie.a)(Object(Ie.a)({},We),{},{items:e.items,editDialogAction:t.payload});default:return e}},Categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CATEGORIES":return Object(Ie.a)(Object(Ie.a)({},e),{},{categories:t.payload});default:return e}}}),Be=[Ge.a],Ue=Object(Pe.e)(Me,{},Object(Pe.d)(Pe.a.apply(void 0,Be),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e})),ze=function(){return o.a.createElement(c.a,{store:Ue},o.a.createElement(v,null,o.a.createElement(Le,null)))};i.a.render(o.a.createElement(ze,null),document.getElementById("root"))},75:function(e,t,a){e.exports={greeting:"main_greeting__2Xb6P"}}},[[110,1,2]]]);
//# sourceMappingURL=main.8d54fad3.chunk.js.map