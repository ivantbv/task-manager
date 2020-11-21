import { projectName } from "/src/index.js"
class AddingProjects {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.textField = document.getElementById('name');
        this.form = document.querySelector('.project-form');
        this.projects = new Map(); // store projects
        this.id = 0; // current id
        this.editForm = false;
        this.projectDiv = document.querySelector('.project')
        this.header = document.querySelector('.header');
        this.projectName = document.createElement('div');
        this.submitProjectButton = document.querySelector('.submit')

        this.divToAppendForm = document.querySelector('.append-form')
    }

    addProject() {
        this.projectDiv = document.createElement('span');
        this.projectDiv.textContent = this.textField.value;
        this.projectDiv.classList.add('project');
        this.textField.value = '';
        this.form.classList.toggle('removed');

        const deleteProjectButton = document.createElement('button');
        deleteProjectButton.classList.add('delete-project')
        const editTitleButton = document.createElement('button');

        this.projects.set(++this.id, deleteProjectButton, editTitleButton);

        const projectDivCopy = this.projectDiv;

        deleteProjectButton.addEventListener('click', () => {
            projectDivCopy.remove();
            document.querySelector('.navbar-projects').textContent = '';
        });

        editTitleButton.addEventListener('click', () => {
            this.form.classList.add('removed')
            document.querySelector('.adding-project').disabled = true;

            //creating the new form for editing title
            this.formDiv = document.createElement('div')
            this.formDiv.classList.add('proj-form')
            this.closeForm = document.createElement('div')
            this.closeForm.classList.add('close-form')
            this.closeForm.textContent = 'X'
            this.editProjectInputField = document.createElement('input')
            this.editProjectInputField.type = 'text';
            this.editProjectInputField.name = 'name';
            this.editProjectInputField.placeholder = 'Enter the new project\'s title'
            this.editProjectInputField.className = 'name'
            this.formDiv.appendChild(this.editProjectInputField);
            this.formDiv.appendChild(this.closeForm);
            this.changeProjectButton = document.createElement('div');
            this.changeProjectButton.classList.add('submit-changed-project')
            this.changeProjectButton.textContent = 'Change'
            this.formDiv.appendChild(this.changeProjectButton)
            this.divToAppendForm.appendChild(this.formDiv)
            //////
            this.closeForm.addEventListener('click', () => {
                this.formDiv.remove();
                document.querySelector('.adding-project').disabled = false;
            })

            this.changeProjectButton.addEventListener('click', () => {
                projectDivCopy.textContent = this.editProjectInputField.value
                //this.form.classList.add('removed');
                this.formDiv.remove();
                this.editProjectInputField.value = '';
                document.querySelector('.adding-project').disabled = false;

                projectDivCopy.appendChild(deleteProjectButton);
                deleteProjectButton.textContent = 'X';
                projectDivCopy.appendChild(editTitleButton)
                editTitleButton.textContent = 'E'
                editTitleButton.classList.add('edit-project');

                document.querySelector('.navbar-projects').textContent = projectDivCopy.textContent.slice(0, -2);
            })
        })

        document.querySelector('.navbar-projects').textContent = projectDivCopy.textContent

        this.projectDiv.appendChild(deleteProjectButton);
        deleteProjectButton.textContent = 'X';
        this.projectDiv.appendChild(editTitleButton)
        editTitleButton.textContent = 'E'
        editTitleButton.classList.add('edit-project');

        this.navbar.appendChild(projectDivCopy);
    }
}

const addingProjects = new AddingProjects()

export { addingProjects }