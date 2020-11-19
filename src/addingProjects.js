import {editProjectBool, addButton} from "/src/index.js"
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
    }
    
	addProject() {
		this.projectDiv = document.createElement('span');
		this.projectDiv.textContent = this.textField.value;
		this.projectDiv.classList.add('project');
		this.textField.value = '';

		this.form.classList.toggle('removed');

        const deleteProject = document.createElement('button');
        deleteProject.classList.add('delete-project')
        const editTitle = document.createElement('button');

		this.projects.set(++this.id, deleteProject, editTitle);

		const projectDivCopy = this.projectDiv;

		deleteProject.addEventListener('click', () => {
			projectDivCopy.remove();
        });
        
        editTitle.addEventListener('click', () => {
            editProjectBool = true;
            this.form.classList.remove('removed')
            document.querySelector('.adding-project').disabled = true;
        })
     
		this.projectDiv.appendChild(deleteProject);
        deleteProject.textContent = 'X';
        this.projectDiv.appendChild(editTitle)
        editTitle.textContent = 'E' //make this a button not a text content
        editTitle.classList.add('edit-project');

        this.navbar.appendChild(projectDivCopy);
        
    }

    showTodo() {
        this.projectDiv.addEventListener('click', () => {
            this.projectName.textContent = this.projectDiv.textContent.slice(0, -2);;
            this.projectName.classList.add('navbar-projects')
            this.header.appendChild(this.projectName);
    })
    }
     editProject() {
                if (editProjectBool === true) {
                    this.projectDiv.textContent = this.textField.value  
                this.form.classList.add('removed');
                this.textField.value = '';
                
                // this.projectDiv.textContent = this.textField.value  
                // this.form.classList.add('removed');
                // this.textField.value = '';

                const deleteProject = document.createElement('button');
                deleteProject.classList.add('delete-project')
                const editTitle = document.createElement('button');

                //const projectDivCopy = this.projectDiv;

                deleteProject.addEventListener('click', () => {
                    this.projectDiv.remove();
                });
                editTitle.addEventListener('click', () => {
                    editProjectBool = true;
                    this.form.classList.remove('removed')
                    document.querySelector('.adding-project').disabled = true;            
                    
                })
                this.projectDiv.appendChild(deleteProject);
                deleteProject.textContent = 'X';
                this.projectDiv.appendChild(editTitle)
                editTitle.textContent = 'E'
                editTitle.classList.add('edit-project');
                this.navbar.appendChild(this.projectDiv);
            
            }
        }   
}

const addingProjects = new AddingProjects()

export {addingProjects}