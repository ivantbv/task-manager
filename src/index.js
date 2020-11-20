import { todos } from "/src/todos.js";
//import {openNav, sideNav, navbar} from "/src/domManipulation.js"
import {domManip } from "/src/domManipulation.js"
import {addingProjects} from "/src/addingProjects.js"


let editProjectBool = false;

const sideNav = document.querySelector('.openNav');
const navbar = document.querySelector('.navbar');

const addButton = document.querySelector('.submit')
const changeProjectButton = document.querySelector('.submit-edit')
sideNav.addEventListener('click', () => {
    domManip.openNav();
    domManip.closeNavBar();
    domManip.addProject();
})

domManip.formClose();

const projectName = document.createElement('div');
const header = document.querySelector('.header')

addButton.addEventListener('click', () => {
    if (editProjectBool === false) {
        addingProjects.addProject();
    }
    //editProjectBool = false;
    document.querySelector('.adding-project').disabled = false;
})

// changeProjectButton.addEventListener('click', () => {
//     if (editProjectBool === true) {
//     addingProjects.editProject();
//     }
//     document.querySelector('.adding-project').disabled = false;
// })

navbar.addEventListener('click', (e) => {
    if (e.target.tagName !== 'SPAN' && e.target.tagName === 'BUTTON') return
    const projectDiv = document.querySelectorAll('.project')
    
    projectDiv.forEach(div => div.addEventListener('click', (e) => {
        if (e.target.className === 'project') {
            console.log('project clicked')
        projectName.textContent = div.textContent.slice(0, -2);
        }
        // if (e.target.tagName === 'BUTTON') {
        //     console.log('button clicked')
        // }

        projectName.classList.add('navbar-projects')
        header.appendChild(projectName);
    }))
        
   
})

// if (editProjectBool === true) {
//     console.log(editProjectBool, 'from editing proj');
//     addingProjects.editProject()
// }

export {editProjectBool, addButton, projectName}

