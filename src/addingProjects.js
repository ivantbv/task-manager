import {DomManipulation, sideNav, navbar } from "/src/domManipulation.js"

class AddingProjects {
    constructor() { 
        this.navbar = navbar
        this.addBtn = document.querySelector('.submit')
        this.textField = document.getElementById('name')

        this.form = document.querySelector('.project-form')
    }

    addProject() {
        this.addBtn.addEventListener('click', () => {
            this.projectDiv = document.createElement('div')
            this.projectDiv.textContent = this.textField.value
            this.navbar.appendChild(this.projectDiv)
            this.textField.value = '';
            this.form.classList.toggle('removed');
        })
    }
}

const addingProjects = new AddingProjects()

export {addingProjects}