import { todos } from "/src/todos.js";
//import {openNav, sideNav, navbar} from "/src/domManipulation.js"
import {domManip, sideNav, navbar } from "/src/domManipulation.js"

//const domManip = new DomManipulation()

sideNav.addEventListener('click', () => {
    domManip.openNav();
})