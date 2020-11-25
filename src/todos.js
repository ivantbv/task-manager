import {displayedTodosContainer} from "/src/index.js"

Date.prototype.toDateInputValue = (function() {
    let local = new Date(this);
    local.setUTCMinutes(this.getUTCMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});

export class Todos {
	constructor() {
		this.todos = [];
		this.id = 0
		this.taskToDoInput = document.querySelector('#todo-title-input')
		this.taskDescriptionInput = document.querySelector('#todo-description-input')
		this.taskDateInput = document.querySelector('#todo-date-input')
		this.taskDateInput.valueAsDate = new Date();
		this.taskPriorityInput = document.querySelectorAll('input[name="priority"]')
		this.appendTodoDiv = document.querySelector('.displayed-todos')
		this.header = document.querySelector('.header');
		
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

		this.todoTitleDiv = document.createElement('div')
		this.todoDescriptionDiv = document.createElement('div')
		this.todoDateDiv = document.createElement('div')
		this.todoPriorityDiv = document.createElement('div')

		this.todoTitleDiv.textContent = this.taskToDoInput.value
		this.todoDescriptionDiv.textContent = this.taskDescriptionInput.value
		this.todoDateDiv.textContent = fullDateFromInput
		this.todoPriorityDiv.textContent = priorityValue

		this.completeCheckbox.addEventListener('click', (e) => {	
			if (e.target.checked) {
			todosContainerDivCopy.style.textDecoration = 'line-through'
			//change it to the copy variable i made
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