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