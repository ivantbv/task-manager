export class AddingProjects {
	constructor() {
		this.navbar = document.querySelector('.navbar');
		this.textField = document.getElementById('name');
		this.form = document.querySelector('.project-form');

		this.projects = new Map(); // store projects
		this.id = 0; // current id
	}

	addProject() {
		this.projectDiv = document.createElement('div');
		this.projectDiv.textContent = this.textField.value;
		this.projectDiv.classList.add('project');

		if (this.textField.value.length > 0) {
			this.textField.value = '';
		}

		this.form.classList.toggle('removed');

		const deleteProject = document.createElement('div');

		this.projects.set(++this.id, deleteProject);

		const projectDivCopy = this.projectDiv;

		deleteProject.addEventListener('click', () => {
			projectDivCopy.remove();
		});

		this.projectDiv.appendChild(deleteProject);
		deleteProject.textContent = 'X';

		this.navbar.appendChild(projectDivCopy);
	}
}