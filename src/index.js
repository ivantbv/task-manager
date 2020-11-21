import { todos } from "/src/todos.js";
import { domManip } from "/src/domManipulation.js"
import { addingProjects } from "/src/addingProjects.js"

const sideNav = document.querySelector('.openNav');
const navbar = document.querySelector('.navbar');

const addButton = document.querySelector('.submit')
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

export { addButton, projectName }

