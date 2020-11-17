class DomManipulation {
    constructor() {
        this.sideNav = document.querySelector('.openNav')
        this.navbar = document.querySelector('.navbar')
        this.closeNav = document.createElement('p')
        this.addNewProject = document.createElement('p')
        this.x = document.querySelector('.x')
        this.form = document.querySelector('.project-form')
        this.closeForm = document.querySelector('.closeForm')
        this.closeNav.textContent = 'X';
        this.addNewProject.textContent = 'Add Project'
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
        this.addNewProject.addEventListener('click', () => {
            this.form.classList.remove('removed')
        })
    }

    formClose() {
        this.closeForm.addEventListener('click', () => {
            this.form.classList.toggle('removed');
        })
    }
}

const domManip = new DomManipulation();
export {domManip }