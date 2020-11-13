class Todos {
    constructor() {
        this.todos = []
    }
    addTodo(name) {
        return this.todos.push({
            name: name,
            completed: false,
        })
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

export class EditTodos extends Todos {
    constructor(todos) {
        super(todos)
    }

    deleteTodo(index) {
        return this.todos.splice(index, 1) 
    }
    editName(index, newName) {
    return this.todos[index].name = newName
    }
    editDescription(index, newDesc) {
        return this.todos[index].description = newDesc
    }
    editPriority(index, newPriority) {
        return this.todos[index].priority = newPriority
    }
    editDate(index, newDate) {
        return this.todos[index].dueDate = newDate 
    }
}

const todos = new EditTodos()

export {todos}