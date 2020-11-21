import {addingProjects} from "/src/addingProjects.js"
class DomManipulation {
    constructor() {
        this.sideNav = document.querySelector('.openNav')
        this.navbar = document.querySelector('.navbar')
        this.closeNav = document.createElement('p')
        this.addNewProjectButton = document.createElement('button')
        this.x = document.querySelector('.x')
        this.form = document.querySelector('.project-form')
        this.closeForm = document.querySelector('.closeForm')
        this.closeNav.textContent = 'X';
        this.addNewProjectButton.textContent = 'Add Project'
        this.addNewProjectButton.classList.add('adding-project')
        this.closeNav.classList.add('close-nav')
        this.navbar.appendChild(this.closeNav);
        this.navbar.appendChild(this.addNewProjectButton);

        this.submitProjectButton = document.querySelector('.submit')
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
        if (this.addNewProjectButton !== null) {
        this.addNewProjectButton.addEventListener('click', () => {
            this.form.classList.remove('removed')
            this.submitProjectButton.classList.remove('removed')
        })
        }
    }

    formClose() {
        this.closeForm.addEventListener('click', () => {
            this.form.classList.toggle('removed');
            this.addNewProjectButton.disabled = false;
        })
    }
}

const domManip = new DomManipulation();
export {domManip}