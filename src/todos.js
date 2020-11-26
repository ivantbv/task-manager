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
		this.editTitleIput = document.querySelector('#change-title-input')
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
		const fullDateFromInput = `Deadline: ${[day, month, year].join('/')}`

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
		//GIVE A CLASSNAME FOR THE CONTAINER'S CHILDREN ^ 
		//SO I CAN SELECT THEM FOR THE EDITING FORM

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
		


		//set the todo's card text depending on the input
		this.todoTitleDiv.textContent = this.taskToDoInput.value
		this.todoDescriptionDiv.textContent = this.taskDescriptionInput.value
		this.todoDateDiv.textContent = fullDateFromInput
		this.todoPriorityDiv.textContent = priorityValue

		const todoPriorityDivCopy = this.todoPriorityDiv
		

	// 	let copyRadioBtn
	// 	todoPriorityCopy.forEach(btn => {
	// 		if (btn.checked) {
	// 			if (btn.value === 'Low') {
											
	// 				for (const radioButton of this.editPriorityInput) {
	// 					const lowRadio = document.querySelector('input[value="Low"]')
	// 					lowRadio.checked = true
	// 					copyRadioBtn = lowRadio
	// 				}
	// 			} else if (btn.value === 'High') {
	// 				for (const radioButton of this.editPriorityInput) {
	// 					const highRadio = document.querySelector('input[value="High"]')
	// 					highRadio.checked = true
	// 					copyRadioBtn = highRadio
	// 				}
	// 			}
	// 		}
	// 	})
	// console.log(copyRadioBtn.checked, 'ads')

	const lowPriorityBtn = document.getElementById('change-low')
	const highPriorityBtn = document.getElementById('change-high')

		this.editTodoBtn.addEventListener('click', (e) => {
			this.containerEditTodo.classList.toggle('removed');
			this.containerEditTodo.appendChild(this.submitChangedTodoBtn)
			// ^ add eventListener for it so that changes appear in
			//the corresponding todos card

			this.editTitleIput.value = todoTitleCopy.textContent;
			this.editDescriptionInput.value = todoDescriptionCopy.textContent;
			this.editDateInput.value = todoDateInputCopy

			// if (todoPriorityDivCopy.textContent === 'High priority') {
			// 	//check the high priority radiobutton in edit form
			// } else if (todoPriorityDivCopy.textContent === 'Low priority') {

			// }

			for (let i in this.todos) {
				if (this.todos[i].id === e.target.getAttribute('data-id')) {
					console.log(this.todos[i].priority === 'High', 'from for in');
					if (this.todos[i].priority === 'Low') {
						lowPriorityBtn.checked = true
						break;
					} else if (this.todos[i].priority === 'High') {
						highPriorityBtn.checked = true
						break
					}
				}
			  }

			console.log(lowPriorityBtn, highPriorityBtn)

		})

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

		this.clearAllTodos.addEventListener('click', () => {
			while (displayedTodosContainer.hasChildNodes()) {
				displayedTodosContainer.removeChild(displayedTodosContainer.firstChild)
			}
			
			this.todos = [];
			if (this.todos.length === 0) {
				this.clearAllTodos.remove()
			}
			console.log(this.todos, 'after splicing')
		})

		this.header.appendChild(this.clearAllTodos)

	}
}

// class EditTodos extends Todos {
// 	constructor(todos) {
// 		super(todos)
// 	}
// 	deleteTodo(index) {
// 		return this.todos.splice(index, 1)
// 	}
// 	toggleTodo(index) {
// 		const todo = this.todos[index]
// 		return todo.completed = !todo.completed
// 	}
// }

const todos = new Todos()

export { todos }

//whats left:
//sync the todos array of objects when a todos name is edited

//when todo is added in the DOM:
//the todo should be able to be expanded and edited in the form that
//was used to add it
//the non-expanded todo should have displayed its title, description,
// delete button and toggle button (complete/incomplete)