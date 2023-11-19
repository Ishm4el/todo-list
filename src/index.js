import './style.css';
const app = (function() {
    const projects = [];
    function Project(name) {
        class TodoItem {
            constructor(title, description, dueDate, priority) {
                this.title = title;
                this.description = description;
                this.dueDate = dueDate;
                this.priority = priority;
            }
        
            print() {
                return `
                <div class='todo-title'>${this.title}</div> 
                <div class='todo-description'>${this.description}</div>
                <div class='todo-due-date'>Due: ${this.dueDate}</div>
                <div class='todo-priority'>Priority: ${this.priority}</div>
                `;
            }
        }
        const todos = [];
        const getName = () => { return name; };
        const setName = (newName) => { name = newName; };
        const addTodo = (title, description, dueDate, priority) => { todos.push(new TodoItem(title, description, dueDate, priority)) };
        return {getName, setName, todos, addTodo};
    }

    function generateSidebar(project, id) {
        const projectTab = document.createElement('div');
        projectTab.classList.toggle('project-view');
        projectTab.innerHTML = `${project.getName()}`;
        return projectTab;
    }

    function appendProjectSidebar() {
        const lastIndex = getProjects().length - 1;
        return generateSidebar(getProjects()[lastIndex], lastIndex);
    }

    function GenerateTodoCard(todo) {
        const todoCard = document.createElement('div');
        todoCard.classList.add('todo-card');
        todoCard.innerHTML = todo.print();
        return todoCard;
    }

    function updateDisplay() {
        getProjects().forEach((project, id) => {
            dom.sidebar.appendChild(generateSidebar(project, id));
            project.todos.forEach((todo) => {
                dom.dashboard.appendChild(GenerateTodoCard(todo));
            });
        });
    }

    function addProject(title) {
        getProjects().push(Project(title));
    }

    function getLastProject(projects) {
        const lastIndex = --projects.length;
        return {project: projects[lastIndex], lastIndex};
    }

    const getProjects = () => projects;

    addProject('default');
    addProject('second!');
    projects[0].addTodo("First Task", "Our first thing to do!", "Tomorrow", "high");
    return { updateDisplay, addProject, generateSidebar, getLastProject, getProjects, appendProjectSidebar, GenerateTodoCard };
})();

const dom = (function () {
    const body = document.getElementsByTagName('body')[0]; 
    const sidebar = document.getElementById('sidebar');
    const dashboard = document.getElementById('dashboard');
    const modalAddProject = document.getElementById('modal-add-project');
    const modalAddTodo = document.getElementById('modal-add-todo');
    const buttonAddProject = document.getElementById('button-add-project');
    const buttonSubmitProject = document.getElementById('submit-project');
    const buttonSubmitTodo = document.getElementById('submit-todo');
    const formAddProject = document.querySelector('#form-add-project');
    const formAddTodo = document.getElementById('form-add-todo');

    const buttonAddTodo = document.createElement('div');
    buttonAddTodo.setAttribute('id', 'addTodo');
    buttonAddTodo.addEventListener('click', () => {
        modalAddTodo.showModal();
    });
    dashboard.appendChild(buttonAddTodo);

    buttonSubmitTodo.addEventListener('click', (button) => {
        button.preventDefault();
        if (formAddTodo.checkValidity()) {
            app.getProjects()[0].addTodo(formAddTodo.elements["todoTitle"].value, formAddTodo.elements["todoDescription"].value, formAddTodo.elements["todoDate"].value, formAddTodo.elements["todoPriority"].value);
            dom.dashboard.appendChild(app.GenerateTodoCard(app.getProjects()[0].todos[app.getProjects()[0].todos.length - 1]));
        }
    });

    buttonAddProject.addEventListener('click', () => {
        dom.modalAddProject.showModal();
    });
    
    buttonSubmitProject.addEventListener('click', (button) => {
        button.preventDefault();
        if (formAddProject.checkValidity()) {
            app.addProject(formAddProject.elements["projectTitle"].value);
            sidebar.appendChild(app.appendProjectSidebar());
            modalAddProject.close();
            formAddProject.reset();
        }
    });

    return { body, sidebar, dashboard, modalAddProject, buttonAddProject};
})();

app.updateDisplay();