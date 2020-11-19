import {editProjectBool} from "/src/index.js"
import {addingProjects} from "/src/addingProjects.js"
class DomManipulation {
    constructor() {
        this.sideNav = document.querySelector('.openNav')
        this.navbar = document.querySelector('.navbar')
        this.closeNav = document.createElement('p')
        this.addNewProject = document.createElement('button')
        this.x = document.querySelector('.x')
        this.form = document.querySelector('.project-form')
        this.closeForm = document.querySelector('.closeForm')
        this.closeNav.textContent = 'X';
        this.addNewProject.textContent = 'Add Project'
        this.addNewProject.classList.add('adding-project')
        this.closeNav.classList.add('close-nav')
        this.navbar.appendChild(this.closeNav);
        this.navbar.appendChild(this.addNewProject);
        
    }

    openNav() {
        this.sideNav.classList.remove('removed')
        this.navbar.classList.remove('removed');
        this.closeNav.classList.remove('removed');
    }

    closeNavBar() {
        this.closeNav.addEventListener('click', () => {
            this.navbar.classList.add('removed');
            this.closeNav.classList.add('removed');
            this.sideNav.classList.remove('removed');
        })
    }

    addProject() {
        if (this.addNewProject !== null) {
        this.addNewProject.addEventListener('click', () => {
            editProjectBool = false;
            this.form.classList.remove('removed')

           // addingProjects.showTodo();
        })
    }
    }

    formClose() {
        this.closeForm.addEventListener('click', () => {
            this.form.classList.toggle('removed');
            this.addNewProject.disabled = false;
        })
    }
}

// const ExtractTextFromEl = {
//     extractText: function(txt) {
//         let children = txt.children;
//         for (let i = children.length -1; i > -1; i--) {
//           children[i].remove();
//         }
//        return txt.innerText
//       }
// }

const domManip = new DomManipulation();
export {domManip}