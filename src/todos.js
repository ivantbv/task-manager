import {displayedTodosContainer} from "/src/index.js"
import { formTodo, submitTodo } from "/src/index.js"
Date.prototype.toDateInputValue = (function() {
    let local = new Date(this);
    local.setUTCMinutes(this.getUTCMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});

export class Todos {
	constructor() {
		//to add todo
		this.todos = [];
		this.id = 0
		this.taskToDoInput = document.querySelector('#todo-title-input')
		this.taskDescriptionInput = document.querySelector('#todo-description-input')
		this.taskDateInput = document.querySelector('#todo-date-input')
		this.taskDateInput.valueAsDate = new Date();
		this.taskPriorityInput = document.querySelectorAll('input[name="priority"]')
		this.appendTodoDiv = document.querySelector('.displayed-todos')
		this.header = document.querySelector('.header');
		
		//to edit todo
		this.editTitleInput = document.querySelector('#change-title-input')
		this.editDescriptionInput = document.querySelector('#change-description-input')
		this.editDateInput = document.querySelector('#change-date-input')
		this.editPriorityInput = document.querySelectorAll('input[name="change-priority"')
		this.containerEditTodo = document.querySelector('.edit-todos-form')

		this.submitChangedTodoBtn = document.createElement('button')
		this.submitChangedTodoBtn.classList.add('submit-changed-todo')
		this.submitChangedTodoBtn.textContent = 'Confirm changes'

		//to clear all todos
		this.clearAllTodos = document.createElement('button')
		this.clearAllTodos.textContent = 'Clear All Todos'
		this.clearAllTodos.classList.add('clear-all-todos')
	}

	addTodo() {
		//this.todos.completed;
		this.todosContainerDiv = document.createElement('div')
		this.todosContainerDiv.classList.add('todos-container');

		this.completeCheckbox = document.createElement('input')
		this.completeCheckbox.type = 'checkbox'
		this.completeCheckbox.classList.add('complete-checkbox')

		this.deleteTodoBtn = document.createElement('button');
		this.deleteTodoBtn.classList.add('delete-todo-btn');
		this.deleteTodoBtn.textContent = 'X';

		this.editTodoBtn = document.createElement('button')
		this.editTodoBtn.classList.add('edit-todo-btn')
		this.editTodoBtn.textContent = 'Edit'

		//getting the date's value from the input
		const date = new Date(this.taskDateInput.value)
		const day = date.getUTCDate()
		const month = date.getUTCMonth() + 1;
		const year = date.getUTCFullYear()
		const fullDateFromInput = [year, `${minTwoDigits(month)}`, `${minTwoDigits(day)}`].join('-')

		//getting the value from the radio buttons
		let radioBtnValue;
		for (const radioBtn of this.taskPriorityInput) {
			if (radioBtn.checked) {
				radioBtnValue = radioBtn.value
			}
		}
		const priorityValue = `${radioBtnValue} priority`

		//setting a data attribute to the del btn equal to the id
		this.deleteTodoBtn.setAttribute('data-id', ++this.id)

		this.editTodoBtn.setAttribute('data-id', this.deleteTodoBtn.dataset.id)
		console.log(this.deleteTodoBtn, 'from addTodo')

		const todosContainerDivCopy = this.todosContainerDiv

		this.todos.push({
			name: this.taskToDoInput.value,
			description: this.taskDescriptionInput.value,
			priority: radioBtnValue,
			date: fullDateFromInput,
			id: this.deleteTodoBtn.dataset.id
		})

		this.deleteTodoBtn.addEventListener('click', (e) => {
			this.todos = this.todos
		.filter(todo => todo.id !== e.target.getAttribute('data-id'))
		
			todosContainerDivCopy.remove()

			if (this.todos.length === 0) {
				this.clearAllTodos.remove()
			}
			console.log(this.todos, 'from del todo btns')
		})
		
		//creating the divs for the todos
		this.todoTitleDiv = document.createElement('div')
		this.todoTitleDiv.classList.add('todo-title')
		this.todoDescriptionDiv = document.createElement('div')
		this.todoDescriptionDiv.classList.add('todo-description')
		this.todoDateDiv = document.createElement('div')
		this.todoDateDiv.classList.add('todo-date')
		this.todoPriorityDiv = document.createElement('div')
		this.todoPriorityDiv.classList.add('todo-priority')
		//making copy of the divs and their values to make separation
		const todoTitleCopy = this.todoTitleDiv
		const todoDescriptionCopy = this.todoDescriptionDiv
		const todoDateInputCopy = this.taskDateInput.value
		const todoPriorityCopy = this.taskPriorityInput;
		//^actually using the this.todos array to get the values
		
		//set the todo's card text depending on the input
		this.todoTitleDiv.textContent = this.taskToDoInput.value
		this.todoDescriptionDiv.textContent = this.taskDescriptionInput.value
		this.todoDateDiv.textContent = `Deadline: ${fullDateFromInput}`
		this.todoPriorityDiv.textContent = priorityValue


		this.completeCheckbox.addEventListener('click', (e) => {	
			if (e.target.checked) {
			todosContainerDivCopy.style.textDecoration = 'line-through'
			console.log(this.todos)
		} else if (!e.target.checked) {	
			todosContainerDivCopy.style.textDecoration = 'none';
				console.log(this.todos);
			}
		})

		console.log(this.todos);
		todosContainerDivCopy.appendChild(this.todoTitleDiv);
		todosContainerDivCopy.appendChild(this.todoDescriptionDiv);
		todosContainerDivCopy.appendChild(this.todoDateDiv);
		todosContainerDivCopy.appendChild(this.todoPriorityDiv);
		todosContainerDivCopy.appendChild(this.completeCheckbox);
		todosContainerDivCopy.appendChild(this.deleteTodoBtn);
		todosContainerDivCopy.appendChild(this.editTodoBtn);

		this.appendTodoDiv.appendChild(todosContainerDivCopy)

		//reset the form's fields on next open
		this.taskToDoInput.value = ''
		this.taskDescriptionInput.value = '';
		//reset the date to today's date as well
		/////

		this.clearAllTodos.addEventListener('click', () => {
			while (displayedTodosContainer.hasChildNodes()) {
				displayedTodosContainer.removeChild(displayedTodosContainer.firstChild)
			}
			
			this.todos = [];
			if (this.todos.length === 0) {
				this.clearAllTodos.remove()
			}
		})

		this.header.appendChild(this.clearAllTodos)

	}
}

export class EditTodos extends Todos {
	constructor(todos) {
		super(todos)
	}
	// toggleTodo(index) {
	// 	const todo = this.todos[index]
	// 	return todo.completed = !todo.completed
	// }

	editTodos() {
		const lowPriorityBtn = document.getElementById('change-low')
		const highPriorityBtn = document.getElementById('change-high')

		this.editTodoBtn.addEventListener('click', (e) => {
			this.containerEditTodo.classList.toggle('removed');
			this.containerEditTodo.appendChild(this.submitChangedTodoBtn)
			// ^ add eventListener for it so that changes appear in
			//the corresponding todos card

			//this.editTitleInput.value = todoTitleCopy.textContent;
			// this.editDateInput.value = todoDateInputCopy

			for (let i in this.todos) {
				if (this.todos[i].id === e.target.getAttribute('data-id')) {
					this.editTitleInput.value = this.todos[i].name;
					this.editDescriptionInput.value = this.todos[i].description
					this.editDateInput.value = this.todos[i].date
					console.log(this.todos[i].date)

					if (this.todos[i].priority === 'Low') {
						lowPriorityBtn.checked = true
						break;
					} else if (this.todos[i].priority === 'High') {
						highPriorityBtn.checked = true
						break
					}
				}
			  }

		})
	}

}

function minTwoDigits(n) {
	return (n < 10 ? '0' : '') + n;
  }

const todos = new Todos()

export { todos }

//whats left:
//sync the todos array of objects when a todos name is edited

//when todo is added in the DOM:
//the todo should be able to be expanded and edited in the form that
//was used to add it
//the non-expanded todo should have displayed its title, description,
// delete button and toggle button (complete/incomplete)