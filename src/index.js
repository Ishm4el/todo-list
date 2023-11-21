import './style.css';
const app = (function() {
    const projects = [];
    const getProjects = () => projects;
    let viewingProject = 0;
    const getViewingProject = () => viewingProject;
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

    function getLastProject(projects) {
        const lastIndex = --getProjects().length;
        return {project: projects[lastIndex], lastIndex};
    }

    function generateSidebar(project, id) {
        const projectTab = document.createElement('div');
        projectTab.classList.toggle('project-view');
        projectTab.setAttribute('data-project-id', id);
        projectTab.innerHTML = `${project.getName()}`;
        projectTab.addEventListener('click', () => {
            dom.resetDashboard();
            console.log(viewingProject);
            viewingProject = id;
            console.log(viewingProject);
            project.todos.forEach((todo) => {
                dom.getDashboard().appendChild(GenerateTodoCard(todo));
            });
        });
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

    function showAllTodos() {
        getProjects().forEach((project, id) => {
            dom.sidebar.appendChild(generateSidebar(project, id));
            project.todos.forEach((todo) => {
                dom.getDashboard().appendChild(GenerateTodoCard(todo));
            });
        });
    }

    function initiateDisplay() {
        getProjects().forEach((project, id) => {
            dom.sidebar.appendChild(generateSidebar(project, id));
        });
        projects[0].todos.forEach((todo) => {
            dom.getDashboard().appendChild(GenerateTodoCard(todo));
        });
    }

    function addProject(title) {
        getProjects().push(Project(title));
    }

    

    

    addProject('default');
    addProject('second!');
    projects[0].addTodo("First Task", "Our first thing to do!", "Tomorrow", "high");
    projects[1].addTodo("Second Task", "Our second thing to do!", "Tomorrow", "low");
    return { initiateDisplay, addProject, generateSidebar, getLastProject, getProjects, appendProjectSidebar, GenerateTodoCard, getViewingProject };
})();

const dom = (function () {
    const body = document.getElementsByTagName('body')[0]; 
    const sidebar = document.getElementById('sidebar');
    let dashboard = document.getElementById('dashboard');
    const modalAddProject = document.getElementById('modal-add-project');
    const modalAddTodo = document.getElementById('modal-add-todo');
    const buttonAddProject = document.getElementById('button-add-project');
    const buttonSubmitProject = document.getElementById('submit-project');
    const buttonSubmitTodo = document.getElementById('submit-todo');
    const formAddProject = document.querySelector('#form-add-project');
    const formAddTodo = document.getElementById('form-add-todo');

    const getDashboard = () => dashboard;

    function createButtonAddTodo() {
        const buttonAddTodo = document.createElement('div');
        buttonAddTodo.setAttribute('id', 'addTodo');
        buttonAddTodo.addEventListener('click', () => {
            modalAddTodo.showModal();
        });
        getDashboard().appendChild(buttonAddTodo);
    }
    createButtonAddTodo();

    function resetDashboard() {
        body.removeChild(dashboard);
        dashboard = document.createElement('div');
        dashboard.setAttribute('id', 'dashboard');
        body.appendChild(dashboard);
        createButtonAddTodo();
    }

    buttonSubmitTodo.addEventListener('click', (button) => {
        button.preventDefault();
        if (formAddTodo.checkValidity()) {
            app.getProjects()[app.getViewingProject()].addTodo(formAddTodo.elements["todoTitle"].value, formAddTodo.elements["todoDescription"].value, formAddTodo.elements["todoDate"].value, formAddTodo.elements["todoPriority"].value);
            dom.getDashboard().appendChild(app.GenerateTodoCard(app.getProjects()[app.getViewingProject()].todos[app.getProjects()[app.getViewingProject()].todos.length - 1]));
            modalAddTodo.close();
            formAddTodo.reset();
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

    return { body, sidebar, modalAddProject, buttonAddProject, resetDashboard, getDashboard };
})();

app.initiateDisplay();