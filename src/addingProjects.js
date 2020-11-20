import {editProjectBool, projectName} from "/src/index.js"
import {ExtractTextFromEl} from "/src/domManipulation.js"
class AddingProjects {
	constructor() {
		this.navbar = document.querySelector('.navbar');
		this.textField = document.getElementById('name');
		this.form = document.querySelector('.project-form');

		this.projects = new Map(); // store projects
        this.id = 0; // current id
        this.editForm = false;
        //this.editButton = document.querySelector('.project');   
        this.projectDiv = document.querySelector('.project')
        this.header = document.querySelector('.header');
        this.projectName = document.createElement('div');
        this.submitEditButton = document.querySelector('.submit-edit')
        this.submitProjectButton = document.querySelector('.submit')
    
        //generate the form for edit button
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
            editProjectBool = true;
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
            })
        })

		this.projectDiv.appendChild(deleteProjectButton);
        deleteProjectButton.textContent = 'X';
        this.projectDiv.appendChild(editTitleButton)
        editTitleButton.textContent = 'E'
        editTitleButton.classList.add('edit-project');

        this.navbar.appendChild(projectDivCopy);
    }

     editProject() {
                //if (editProjectBool === true) {
                const deleteProjectButton = document.createElement('button');
                deleteProjectButton.classList.add('delete-project')
                const editTitleButton = document.createElement('button');

                //const projectDivCopy = this.projectDiv;

                deleteProjectButton.addEventListener('click', () => {
                    this.projectDiv.remove();
                });

                // editTitleButton.addEventListener('click', () => {
                //     editProjectBool = true;
                //     this.form.classList.remove('removed')
                //     document.querySelector('.adding-project').disabled = true;
                // })

                this.projectDiv.appendChild(deleteProjectButton);
                deleteProjectButton.textContent = 'X';
                // this.projectDiv.appendChild(editTitleButton)
                // editTitleButton.textContent = 'E'
                // editTitleButton.classList.add('edit-project');
                this.navbar.appendChild(this.projectDiv);
            
           // }
        }   
}

const addingProjects = new AddingProjects()

export {addingProjects}