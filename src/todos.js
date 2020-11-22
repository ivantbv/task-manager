export class Todos {
	constructor() {
		this.todos = [];
		//this.id = 0
		this.taskToDoInput = document.querySelector('#todo-title-input')
		this.taskDescriptionInput = document.querySelector('#todo-description-input')
		this.taskDateInput = document.querySelector('#todo-date-input')
		this.taskPriorityInput = document.querySelectorAll('input[name="priority"]')
		this.appendTodoDiv = document.querySelector('.displayed-todos')
		
	}
	//probably need to nest this class or its method and constructor
	//OR EXTEND it into AddingPRojects
	addTodo(completed) {
		this.todosContainerDiv = document.createElement('div')
		this.todosContainerDiv.classList.add('todos-container');

		const date = new Date(this.taskDateInput.value)
		const day = date.getUTCDate()
		const month = date.getUTCMonth()
		const year = date.getUTCFullYear()
		const fullDateFromInput = `Deadline: ${[day, month, year].join('/')}`

		let radioBtnValue;
		for (const radioBtn of this.taskPriorityInput) {
			if (radioBtn.checked) {
				radioBtnValue = radioBtn.value
			}
		}

		const priorityValue = `${radioBtnValue} priority`

		this.todoTitleDiv = document.createElement('div')
		this.todoDescriptionDiv = document.createElement('div')
		this.todoDateDiv = document.createElement('div')
		this.todoPriorityDiv = document.createElement('div')

		this.todoTitleDiv.textContent = this.taskToDoInput.value
		this.todoDescriptionDiv.textContent = this.taskDescriptionInput.value
		this.todoDateDiv.textContent = fullDateFromInput
		this.todoPriorityDiv.textContent = priorityValue

		this.todos.push({
			name: this.taskToDoInput.value,
			description: this.taskDescriptionInput.value,
			priority: radioBtnValue,
			date: fullDateFromInput,
			completed: completed,
			completed: false,
			//id: ++this.id
		})
		console.log(this.todos);
		//this.todoDiv.appendChild(this.todos)
		this.todosContainerDiv.appendChild(this.todoTitleDiv);
		this.todosContainerDiv.appendChild(this.todoDescriptionDiv)
		this.todosContainerDiv.appendChild(this.todoDateDiv)
		this.todosContainerDiv.appendChild(this.todoPriorityDiv)

		this.appendTodoDiv.appendChild(this.todosContainerDiv)
	}
	addDescription(index, description) {
		return this.todos[index].description = description
	}
	addPriority(index, priority) {
		return this.todos[index].priority = priority
	}
	addDate(index, dueDate) {
		return this.todos[index].dueDate = dueDate
	}
}

class EditTodos extends Todos {
	constructor(todos) {
		super(todos)
	}
	deleteTodo(index) {
		return this.todos.splice(index, 1)
	}
	toggleTodo(index) {
		const todo = this.todos[index]
		return todo.completed = !todo.completed
	}
	editName(index, newName) {
		return this.todos[index].name = newName
	}
	// editDescription(index, newDesc) {
	// 	return this.todos[index].description = newDesc
	// }
	// editPriority(index, newPriority) {
	// 	return this.todos[index].priority = newPriority
	// }
	// editDate(index, newDate) {
	// 	return this.todos[index].dueDate = newDate
	// }
}

const todos = new Todos()

export { todos }

//there should be a button that adds todos
//when the button is clicked a form should show up
//the form should have a field for the todo's title
//the form should have a field for the todo's deadline
//the form should have a field for the todo's description
//the form should have a color/number for its priority

//when added in the DOM:
//the todo should be able to be expanded and edited in the form that
//was used to add it
//the non-expanded todo should have displayed its title, description,
// delete button and toggle button (complete/incomplete)