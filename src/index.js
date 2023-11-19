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

    function generateDashboard(project, id) {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        project.todos.forEach((todo) => {
            const todoCard = document.createElement('div');
            todoCard.classList.add('todo-card');
            todoCard.innerHTML = todo.print();
            projectCard.appendChild(todoCard);
        });
        return projectCard;
    }

    function updateDisplay() {
        getProjects().forEach((project, id) => {
            dom.sidebar.appendChild(generateSidebar(project, id));
            dom.dashboard.appendChild(generateDashboard(project, id));
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
    return { updateDisplay, addProject, generateSidebar, getLastProject, getProjects, appendProjectSidebar};
})();

const dom = (function () {
    const body = document.getElementsByTagName('body')[0]; 
    const sidebar = document.getElementById('sidebar');
    const dashboard = document.getElementById('dashboard');
    const modalAddProject = document.getElementById('modal-add-project');
    const buttonAddProject = document.getElementById('button-add-project');
    const buttonSubmitProject = document.getElementById('submit-project');
    const formAddProject = document.querySelector('#form-add-project');

    const buttonAddTodo = document.createElement('div');
    buttonAddTodo.setAttribute('id', 'addTodo');
    dashboard.appendChild(buttonAddTodo);

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
    })

    return { body, sidebar, dashboard, modalAddProject, buttonAddProject};
})();

app.updateDisplay();