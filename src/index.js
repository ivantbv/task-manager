import { todos } from "/src/todos.js";
//import {openNav, sideNav, navbar} from "/src/domManipulation.js"
import {domManip } from "/src/domManipulation.js"
import {addingProjects} from "/src/addingProjects.js"


let editProjectBool = false;

const sideNav = document.querySelector('.openNav');
const navbar = document.querySelector('.navbar');

const addButton = document.querySelector('.submit')

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
    if (editProjectBool === true) {
        addingProjects.editProject()
    }
    //editProjectBool = false;
    document.querySelector('.adding-project').disabled = false;
})

navbar.addEventListener('click', (e) => {
    const projectDiv = document.querySelectorAll('.project')
    if (e.target.tagName !== 'SPAN') return
    
    //let emptyArr = []
    projectDiv.forEach(div => div.addEventListener('click', () => {
        projectName.textContent = div.textContent.slice(0, -2);
    }))
        
    //.slice(0, -2);
    projectName.classList.add('navbar-projects')
    header.appendChild(projectName);
    
})

// if (editProjectBool === true) {
//     console.log(editProjectBool, 'from editing proj');
//     addingProjects.editProject()
// }

export {editProjectBool, addButton}

