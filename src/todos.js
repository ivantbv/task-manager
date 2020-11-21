class Todo {
	constructor(name, id) {
		this.name = name;
		this.id = id;
		this.completed = false;
	}
}

class EditTodos {
	constructor() {
		this.todos = new Map();
		this.id = 0;
	}
	addTodo(name) {
		return this.todos.set(++this.id, new Todo(name, this.id));
	}
	deleteTodo(index) {
		const todo = this.todos.get(index);
		this.todos.delete(index); 
		return todo;
	}
	toggleTodo(index) {
		const todo = this.todos.get(index);
		return todo.completed = !todo.completed;
	}
	editName(index, newName) {
		this.todos.get(index).name = newName;
		return newName 
	}
	editDescription(index, newDesc) {
		this.todos.get(index).description = newDesc;
		return newDesc
	}
	editPriority(index, newPriority) {
		this.todos.get(index).priority = newPriority;
		return newPriority
	}
	editDate(index, newDate) {
		this.todos.get(index).dueDate = newDate;
		return newDate 
	}
}

const todos = new EditTodos()

export {todos}

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
