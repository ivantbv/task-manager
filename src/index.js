import { todos } from "/src/todos.js";
//import {openNav, sideNav, navbar} from "/src/domManipulation.js"
import {domManip } from "/src/domManipulation.js"
import {AddingProjects} from "/src/addingProjects.js"
const addingProjects = new AddingProjects()

const sideNav = document.querySelector('.openNav');
const navbar = document.querySelector('.navbar');

const addButton = document.querySelector('.submit')

sideNav.addEventListener('click', () => {
    domManip.openNav();
    domManip.closeNavBar();
    domManip.addProject();
})


domManip.formClose();

addButton.addEventListener('click', () => {
    addingProjects.addProject();
})
