import { Todos } from "/src/todos.js";
import { domManip } from "/src/domManipulation.js"
import { addingProjects, projects } from "/src/addingProjects.js"
import { todos } from "/src/todos.js";
//import { todos } from "./todos";

const sideNav = document.querySelector('.openNav');
const navbar = document.querySelector('.navbar');
const addTodoButton = document.querySelector('.add-todos')
const formTodo = document.querySelector('.todos-form')
const addButton = document.querySelector('.submit')
const submitTodo = document.querySelector('.submit-todo');
const clearAllTodos = document.querySelector('.clear-all-todos')
const displayedTodosContainer = document.querySelector('.displayed-todos')

sideNav.addEventListener('click', () => {
    domManip.openNav();
    domManip.closeNavBar();
    domManip.addProject();
})

domManip.formClose();
const projectName = document.querySelector('.navbar-projects');
const header = document.querySelector('.header')

addButton.addEventListener('click', () => {
    addingProjects.addProject();
    document.querySelector('.adding-project').disabled = false;

})

submitTodo.addEventListener('click', () => {
    addingProjects.addTodoToProject()
    formTodo.classList.add('removed')
})

navbar.addEventListener('click', (e) => {
    const projectDiv = document.querySelectorAll('.project')
    projectDiv.forEach(div => div.addEventListener('click', (e) => {
        if (e.target.className === 'project') {
            console.log('project clicked')
            projectName.textContent = div.textContent.slice(0, -2);
        }

        header.appendChild(projectName);
    }))
})

addTodoButton.addEventListener('click', () => {
    formTodo.classList.toggle('removed');
    document.querySelector('.project-form').classList.add('removed');
})

export { addButton, projectName, formTodo, clearAllTodos, displayedTodosContainer }

