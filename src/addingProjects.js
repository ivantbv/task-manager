import { projectName } from "/src/index.js"
import { Todos} from "/src/todos.js"

class AddingProjects extends Todos {
    constructor(todos) {
        super(todos)
        this.navbar = document.querySelector('.navbar');
        this.textField = document.getElementById('name');
        this.form = document.querySelector('.project-form');
        //this.projects = new Map(); // store projects
        this.id = 0;
        this.projects = []
        this.editForm = false;
        this.projectDiv = document.querySelector('.project')
        this.header = document.querySelector('.header');
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

        deleteProjectButton.setAttribute('data-id', ++this.id)
        editTitleButton.setAttribute('data-id', deleteProjectButton.dataset.id)
        console.log(editTitleButton, 'from adding project')
        const projectDivCopy = this.projectDiv;

        this.projects.push({title: projectDivCopy.textContent, todo: this.todos, id: deleteProjectButton.dataset.id})
        console.log(this.projects, 'from addproject to check ID')
        //next i need to think of how to manage each todo in its own
        //corresponding project
        //and wire with the dom

        deleteProjectButton.addEventListener('click', (e) => {            
        this.projects = this.projects
        .filter(project => project.id !== e.target.getAttribute('data-id'))

            projectDivCopy.remove();
            projectName.textContent = '';
            console.log(this.projects, 'from del button');
        });
        editTitleButton.addEventListener('click', (e) => {
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
                //update this.projects array with the new title
                for (let i in this.projects) {
                    if (this.projects[i].id == e.target.getAttribute('data-id')) {
                       this.projects[i].title = this.editProjectInputField.value;
                       break;
                    }
                  }
                  console.log(this.projects)
                /////
                projectDivCopy.textContent = this.editProjectInputField.value

                this.formDiv.remove();
                this.editProjectInputField.value = '';
                document.querySelector('.adding-project').disabled = false;

                projectDivCopy.appendChild(deleteProjectButton);
                deleteProjectButton.textContent = 'X';
                projectDivCopy.appendChild(editTitleButton)
                editTitleButton.textContent = 'E'
                editTitleButton.classList.add('edit-project');

                projectName.textContent = projectDivCopy.textContent.slice(0, -2);
            })
        })

        projectName.textContent = projectDivCopy.textContent

        projectDivCopy.appendChild(deleteProjectButton);
        deleteProjectButton.textContent = 'X';
        projectDivCopy.appendChild(editTitleButton)
        editTitleButton.textContent = 'E'
        editTitleButton.classList.add('edit-project');

        this.navbar.appendChild(projectDivCopy);
    }

    addTodoToProject() {
          this.addTodo()
    }
}

const addingProjects = new AddingProjects()

export { addingProjects }