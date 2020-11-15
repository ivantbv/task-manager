import { todos } from "/src/todos.js";
//import {openNav, sideNav, navbar} from "/src/domManipulation.js"
import {domManip, sideNav } from "/src/domManipulation.js"
import {addingProjects} from "/src/addingProjects.js"
//const addingProjects = new AddingProjects()

sideNav.addEventListener('click', () => {
    domManip.openNav();
    domManip.closeNavBar();
    domManip.addProject();
})

domManip.formClose();

addingProjects.addProject();