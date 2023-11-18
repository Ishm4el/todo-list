import './style.css';

class TodoItem {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    print() {
        return "Title: " + this.title + "\nDescription: " + this.description + "\nDue Date: " + this.dueDate + "\nPriority: " + this.priority;
    }
}

function Project(name) {
    const todos = [];
    const getName = () => { return name; };
    const setName = (newName) => { name = newName; };
    const addTodo = (title, description, dueDate, priority) => { todos.push(new TodoItem(title, description, dueDate, priority)) };
    return {getName, setName, todos, addTodo};
}

const projects = [];
projects.push(Project("First Project"));
projects[0].addTodo("First Task", "Our first thing to do!", "Tomorrow", "high");
console.log(projects[0].todos[0].print());

console.log("Hello world!");

document.querySelector('body').classList.add('home');

const todoContainer = document.createElement('div');