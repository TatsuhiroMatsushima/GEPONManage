(this.webpackJsonpaaaaaaaaaaa=this.webpackJsonpaaaaaaaaaaa||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),o=a(3),i=a.n(o),c=(a(13),a(4)),h=a(5),u=a(1),l=a(6),r=a(7),d=(a(14),function(t){Object(r.a)(a,t);var e=Object(l.a)(a);function a(){var t;return Object(c.a)(this,a),(t=e.call(this)).state={tasks:[{id:1,body:"\u3068\u308a\u3042\u3048\u305a\u8868\u793a\u3057\u3066\u307f\u308b"},{id:2,body:"\u79c1\u305f\u3061\u3001\u3044\u305a\u308c\u66f8\u304d\u63db\u3048\u3089\u308c\u308b\u904b\u547d"}]},t.changeText=t.changeText.bind(Object(u.a)(t)),t.submitTask=t.submitTask.bind(Object(u.a)(t)),t.fetchTasks=t.fetchTasks.bind(Object(u.a)(t)),t}return Object(h.a)(a,[{key:"componentWillMount",value:function(){this.fetchTasks()}},{key:"fetchTasks",value:function(){var t=this;fetch("https://tatsuhiromatsushima.github.io/GEPONManage/").then((function(t){return t.json()})).then((function(e){t.setState({tasks:e})}))}},{key:"changeText",value:function(t){var e=t.target.value;this.setState({inputText:e}),console.dir(e)}},{key:"submitTask",value:function(){fetch("http://localhost:3001/tasks",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({body:this.state.inputText})}).then(this.fetchTasks)}},{key:"putTask",value:function(t){fetch("http://localhost:3001/tasks/"+t,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({body:"\u3084\u3063\u305f\u3088"})}).then(this.fetchTasks)}},{key:"deleteTask",value:function(t){fetch("http://localhost:3001/tasks/"+t,{method:"DELETE"}).then(this.fetchTasks)}},{key:"render",value:function(){var t=this;return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"tasks"},this.state.tasks.map((function(e){return s.a.createElement("div",{className:"task",key:e.id},e.body,s.a.createElement("button",{className:"put",onClick:function(){t.putTask(e.id)}},"put"),s.a.createElement("button",{className:"delete",onClick:function(){t.deleteTask(e.id)}},"delete"))}))),s.a.createElement("div",{id:"task-form"},s.a.createElement("input",{type:"text",onChange:this.changeText}),s.a.createElement("button",{onClick:this.submitTask},"submit")))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},8:function(t,e,a){t.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.28ed9125.chunk.js.map