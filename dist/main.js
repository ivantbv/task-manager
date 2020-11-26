(()=>{"use strict";var t={371:(t,e,o)=>{o.d(e,{Wq:()=>u,Po:()=>a,n:()=>m}),Date.prototype.toDateInputValue=function(){let t=new Date(this);return t.setUTCMinutes(this.getUTCMinutes()-this.getTimezoneOffset()),t.toJSON().slice(0,10)};class i{constructor(){this.todos=[],this.id=0,this.taskToDoInput=document.querySelector("#todo-title-input"),this.taskDescriptionInput=document.querySelector("#todo-description-input"),this.taskDateInput=document.querySelector("#todo-date-input"),this.taskDateInput.valueAsDate=new Date,this.taskPriorityInput=document.querySelectorAll('input[name="priority"]'),this.appendTodoDiv=document.querySelector(".displayed-todos"),this.header=document.querySelector(".header"),this.editTitleIput=document.querySelector("#change-title-input"),this.editDescriptionInput=document.querySelector("#change-description-input"),this.editDateInput=document.querySelector("#change-date-input"),this.editPriorityInput=document.querySelectorAll('input[name="change-priority"'),this.containerEditTodo=document.querySelector(".edit-todos-form"),this.submitChangedTodoBtn=document.createElement("button"),this.submitChangedTodoBtn.classList.add("submit-changed-todo"),this.submitChangedTodoBtn.textContent="Confirm changes",this.clearAllTodos=document.createElement("button"),this.clearAllTodos.textContent="Clear All Todos",this.clearAllTodos.classList.add("clear-all-todos")}addTodo(){this.todosContainerDiv=document.createElement("div"),this.todosContainerDiv.classList.add("todos-container"),this.completeCheckbox=document.createElement("input"),this.completeCheckbox.type="checkbox",this.completeCheckbox.classList.add("complete-checkbox"),this.deleteTodoBtn=document.createElement("button"),this.deleteTodoBtn.classList.add("delete-todo-btn"),this.deleteTodoBtn.textContent="X",this.editTodoBtn=document.createElement("button"),this.editTodoBtn.classList.add("edit-todo-btn"),this.editTodoBtn.textContent="Edit";const t=new Date(this.taskDateInput.value),e="Deadline: "+[t.getUTCDate(),t.getUTCMonth()+1,t.getUTCFullYear()].join("/");let o;for(const t of this.taskPriorityInput)t.checked&&(o=t.value);const i=o+" priority";this.deleteTodoBtn.setAttribute("data-id",++this.id),this.editTodoBtn.setAttribute("data-id",this.deleteTodoBtn.dataset.id),console.log(this.deleteTodoBtn,"from addTodo");const d=this.todosContainerDiv;this.todos.push({name:this.taskToDoInput.value,description:this.taskDescriptionInput.value,priority:o,date:e,id:this.deleteTodoBtn.dataset.id}),this.deleteTodoBtn.addEventListener("click",(t=>{this.todos=this.todos.filter((e=>e.id!==t.target.getAttribute("data-id"))),d.remove(),0===this.todos.length&&this.clearAllTodos.remove(),console.log(this.todos,"from del todo btns")})),this.todoTitleDiv=document.createElement("div"),this.todoTitleDiv.classList.add("todo-title"),this.todoDescriptionDiv=document.createElement("div"),this.todoDescriptionDiv.classList.add("todo-description"),this.todoDateDiv=document.createElement("div"),this.todoDateDiv.classList.add("todo-date"),this.todoPriorityDiv=document.createElement("div"),this.todoPriorityDiv.classList.add("todo-priority");const s=this.todoTitleDiv,n=this.todoDescriptionDiv,r=this.taskDateInput.value;this.taskPriorityInput,this.todoTitleDiv.textContent=this.taskToDoInput.value,this.todoDescriptionDiv.textContent=this.taskDescriptionInput.value,this.todoDateDiv.textContent=e,this.todoPriorityDiv.textContent=i,this.todoPriorityDiv;const c=document.getElementById("change-low"),a=document.getElementById("change-high");this.editTodoBtn.addEventListener("click",(t=>{this.containerEditTodo.classList.toggle("removed"),this.containerEditTodo.appendChild(this.submitChangedTodoBtn),this.editTitleIput.value=s.textContent,this.editDescriptionInput.value=n.textContent,this.editDateInput.value=r;for(let e in this.todos)if(this.todos[e].id===t.target.getAttribute("data-id")){if(console.log("High"===this.todos[e].priority,"from for in"),"Low"===this.todos[e].priority){c.checked=!0;break}if("High"===this.todos[e].priority){a.checked=!0;break}}console.log(c,a)})),this.completeCheckbox.addEventListener("click",(t=>{t.target.checked?(d.style.textDecoration="line-through",console.log(this.todos)):t.target.checked||(d.style.textDecoration="none",console.log(this.todos))})),console.log(this.todos),d.appendChild(this.todoTitleDiv),d.appendChild(this.todoDescriptionDiv),d.appendChild(this.todoDateDiv),d.appendChild(this.todoPriorityDiv),d.appendChild(this.completeCheckbox),d.appendChild(this.deleteTodoBtn),d.appendChild(this.editTodoBtn),this.appendTodoDiv.appendChild(d),this.clearAllTodos.addEventListener("click",(()=>{for(;u.hasChildNodes();)u.removeChild(u.firstChild);this.todos=[],0===this.todos.length&&this.clearAllTodos.remove(),console.log(this.todos,"after splicing")})),this.header.appendChild(this.clearAllTodos)}}new i;const d=new class extends i{constructor(t){super(t),this.navbar=document.querySelector(".navbar"),this.textField=document.getElementById("name"),this.form=document.querySelector(".project-form"),this.id=0,this.projects=[],this.editForm=!1,this.projectDiv=document.querySelector(".project"),this.header=document.querySelector(".header"),this.submitProjectButton=document.querySelector(".submit"),this.divToAppendForm=document.querySelector(".append-form")}addProject(){this.projectDiv=document.createElement("span"),this.projectDiv.textContent=this.textField.value,this.projectDiv.classList.add("project"),this.textField.value="",this.form.classList.toggle("removed");const t=document.createElement("button");t.classList.add("delete-project");const e=document.createElement("button");t.setAttribute("data-id",++this.id),e.setAttribute("data-id",t.dataset.id),console.log(e,"from adding project");const o=this.projectDiv;this.projects.push({title:o.textContent,todo:this.todos,id:t.dataset.id}),console.log(this.projects,"from addproject to check ID"),t.addEventListener("click",(t=>{this.projects=this.projects.filter((e=>e.id!==t.target.getAttribute("data-id"))),o.remove(),m.textContent="",console.log(this.projects,"from del button")})),e.addEventListener("click",(i=>{this.form.classList.add("removed"),document.querySelector(".adding-project").disabled=!0,this.formDiv=document.createElement("div"),this.formDiv.classList.add("proj-form"),this.closeForm=document.createElement("div"),this.closeForm.classList.add("close-form"),this.closeForm.textContent="X",this.editProjectInputField=document.createElement("input"),this.editProjectInputField.type="text",this.editProjectInputField.name="name",this.editProjectInputField.placeholder="Enter the new project's title",this.editProjectInputField.className="name",this.formDiv.appendChild(this.editProjectInputField),this.formDiv.appendChild(this.closeForm),this.changeProjectButton=document.createElement("div"),this.changeProjectButton.classList.add("submit-changed-project"),this.changeProjectButton.textContent="Change",this.formDiv.appendChild(this.changeProjectButton),this.divToAppendForm.appendChild(this.formDiv),this.closeForm.addEventListener("click",(()=>{this.formDiv.remove(),document.querySelector(".adding-project").disabled=!1})),this.changeProjectButton.addEventListener("click",(()=>{for(let t in this.projects)if(this.projects[t].id==i.target.getAttribute("data-id")){this.projects[t].title=this.editProjectInputField.value;break}console.log(this.projects),o.textContent=this.editProjectInputField.value,this.formDiv.remove(),this.editProjectInputField.value="",document.querySelector(".adding-project").disabled=!1,o.appendChild(t),t.textContent="X",o.appendChild(e),e.textContent="E",e.classList.add("edit-project"),m.textContent=o.textContent.slice(0,-2)}))})),m.textContent=o.textContent,o.appendChild(t),t.textContent="X",o.appendChild(e),e.textContent="E",e.classList.add("edit-project"),this.navbar.appendChild(o)}addTodoToProject(){this.addTodo()}},s=new class{constructor(){this.sideNav=document.querySelector(".openNav"),this.navbar=document.querySelector(".navbar"),this.closeNav=document.createElement("p"),this.addNewProjectButton=document.createElement("button"),this.x=document.querySelector(".x"),this.form=document.querySelector(".project-form"),this.closeForm=document.querySelector(".closeForm"),this.closeNav.textContent="X",this.addNewProjectButton.textContent="Add Project",this.addNewProjectButton.classList.add("adding-project"),this.closeNav.classList.add("close-nav"),this.navbar.appendChild(this.closeNav),this.navbar.appendChild(this.addNewProjectButton),this.submitProjectButton=document.querySelector(".submit")}openNav(){this.sideNav.classList.remove("removed"),this.navbar.classList.remove("removed"),this.closeNav.classList.remove("removed")}closeNavBar(){this.closeNav.addEventListener("click",(()=>{this.navbar.classList.add("removed"),this.closeNav.classList.add("removed"),this.sideNav.classList.remove("removed")}))}addProject(){null!==this.addNewProjectButton&&this.addNewProjectButton.addEventListener("click",(()=>{this.form.classList.remove("removed"),this.submitProjectButton.classList.remove("removed"),a.classList.add("removed")}))}formClose(){this.closeForm.addEventListener("click",(()=>{this.form.classList.toggle("removed"),this.addNewProjectButton.disabled=!1}))}},n=document.querySelector(".openNav"),r=document.querySelector(".navbar"),c=document.querySelector(".add-todos"),a=document.querySelector(".todos-form"),l=document.querySelector(".submit"),h=document.querySelector(".submit-todo"),u=(document.querySelector(".clear-all-todos"),document.querySelector(".displayed-todos"));n.addEventListener("click",(()=>{s.openNav(),s.closeNavBar(),s.addProject()})),s.formClose();const m=document.querySelector(".navbar-projects"),p=document.querySelector(".header");l.addEventListener("click",(()=>{d.addProject(),document.querySelector(".adding-project").disabled=!1})),h.addEventListener("click",(()=>{d.addTodoToProject(),a.classList.add("removed")})),r.addEventListener("click",(t=>{document.querySelectorAll(".project").forEach((t=>t.addEventListener("click",(e=>{"project"===e.target.className&&(console.log("project clicked"),m.textContent=t.textContent.slice(0,-2)),p.appendChild(m)}))))})),c.addEventListener("click",(()=>{a.classList.toggle("removed"),document.querySelector(".project-form").classList.add("removed")}))}},e={};function o(i){if(e[i])return e[i].exports;var d=e[i]={exports:{}};return t[i](d,d.exports,o),d.exports}o.d=(t,e)=>{for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o(371)})();