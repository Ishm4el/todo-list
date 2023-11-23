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
                this.completed = false;
            }

            get completed() {
                return this._completed;
            }
            
            set completed(bool) {
                this._completed = bool;
            }
        
            print() {
                return `
                <div class='todo-title'>${this.title}</div> 
                <div class='todo-description'>${this.description}</div>
                <div class='todo-due-date'>Due: ${this.dueDate}</div>
                <div class='todo-priority'>Priority: ${this.priority}</div>
                <div class='todo-icons'>
                    <div class="todo-icons-completed">V</div>
                    <div class="todo-icons-configure">C</div>
                    <div class="todo-icons-delete">D</div>
                </div>
                `;
            }
        }
        const todos = [];
        const getName = () => { return name; };
        const setName = (newName) => { name = newName; };
        const addTodo = (title, description, dueDate, priority) => { todos.push(new TodoItem(title, description, dueDate, priority)) };
        const removeTodo = (todo) => {
            const index = todos.indexOf(todo);
            if (index > -1)
                todos.splice(index, 1);
        };

        const updateTodo = (todo, newTodo) => {
            const index = todos.indexOf(todo);
            if (index > -1) {
                todos[index].title = newTodo.title;
                todos[index].description = newTodo.description;
                todos[index].dueDate = newTodo.dueDate;
                todos[index].priority = newTodo.priority;
                todos[index].completed = newTodo.completed;
            }
        };

        return { getName, setName, todos, addTodo, removeTodo, updateTodo };
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
            if(dom.getBody().contains(dom.getBody().querySelector('.project-tab-selected'))) {
                console.log('in');
                dom.body.querySelector('.project-tab-selected').classList.remove('project-tab-selected');
            } 
            projectTab.classList.add('project-tab-selected');
            viewingProject = id;
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
        if (todo.completed)
            todoCard.classList.add('todo-card-completed');
        todoCard.getElementsByClassName('todo-icons-completed')[0].addEventListener('click', (completed) => {
            todoCard.classList.toggle('todo-card-completed');
            todo.completed = !todo.completed;
        });
        todoCard.getElementsByClassName('todo-icons-configure')[0].addEventListener('click', () => {
            const modalConfigure = document.getElementById('modal-configure');
            const formConfigure = modalConfigure.querySelector('#form-configure');
            formConfigure.querySelector('#configure-title-input').setAttribute('value', todo.title);
            formConfigure.querySelector('#configure-description-input').setAttribute('value', todo.description);

            formConfigure.querySelector('#configure-date-input').setAttribute('value', todo.dueDate);
            
            const configurePriority = formConfigure.querySelector('#configure-priority').children;
            for (let i = 1; i < configurePriority.length; i = i + 2) {
                configurePriority[i].removeAttribute('checked');
                if (JSON.stringify(todo.priority) === JSON.stringify(configurePriority[i].value)) {
                    configurePriority[i].setAttribute('checked', 'checked');
                }
            }
            modalConfigure.showModal();

            function submitConfigure(button) {
                button.preventDefault();
                if (formConfigure.checkValidity()) {
                    getProjects()[getViewingProject()].updateTodo(todo, {
                        title: formConfigure.elements["configureTitle"].value,
                        description: formConfigure.elements["configureDescription"].value,
                        dueDate: formConfigure.elements["configureDate"].value,
                        priority: formConfigure.elements["configurePriority"].value,
                        completed: todo.completed
                    })
                    modalConfigure.close();
                    formConfigure.reset();
                    console.log(todo);
                    todoCard.children[0].textContent = todo.title;
                    todoCard.children[1].textContent = todo.description;
                    todoCard.children[2].textContent = "Due: " + todo.dueDate;
                    todoCard.children[3].textContent = "Priority: " + todo.priority;
                }
                formConfigure.querySelector('#submit-configure').removeEventListener('click', submitConfigure);
            }

            formConfigure.querySelector('#submit-configure').addEventListener('click', submitConfigure);
        })
        todoCard.getElementsByClassName('todo-icons-delete')[0].addEventListener('click', () => {
            getProjects()[getViewingProject()].removeTodo(todo);
            dom.getDashboard().removeChild(todoCard);
        });
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
        dom.sidebar.children[1].classList.add('project-tab-selected');

        projects[0].todos.forEach((todo) => {
            dom.getDashboard().appendChild(GenerateTodoCard(todo));
        });
    }

    function addProject(title) {
        getProjects().push(Project(title));
    }

    

    addProject('default');
    addProject('second!');
    projects[0].addTodo("First Task", "Our first thing to do!", "1999-01-01", "High");
    projects[1].addTodo("Second Task", "Our second thing to do!", "1999-01-02", "Low");
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
            console.log(formAddTodo.querySelector('input[name="todoPriority"]:checked').value);
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

    const getBody = () => body;

    return { body, sidebar, modalAddProject, buttonAddProject, resetDashboard, getDashboard, getBody, formAddTodo };
})();

app.initiateDisplay();