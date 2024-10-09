import { createTask } from "./taskFactory";

let allTasks = [];


const sidebarDiv = document.getElementById("sidebar-content");
const mainDiv = document.getElementById("main-content-div");

function createTaskForm() {

    const formDiv = document.createElement('div');
    formDiv.className = 'task-form-container';

    // Formulario HTML
    formDiv.innerHTML = `
        <h3>Create a new task</h3>
        <form id="taskForm">
            <label for="title">Title:</label><br>
            <input type="text" id="form-title" name="title"><br><br>
            <label for="project">Project:</label><br>
            <input type="text" id="form-project" name="project"><br><br>
            <label for="description">Description:</label><br>
            <textarea id="form-description" name="description"></textarea><br><br>
            <label for="dueDate">Due Date:</label><br>
            <input type="date" id="form-dueDate" name="dueDate"><br><br>
            <label for="priority">Priority:</label><br>
            <select id="form-priority" name="priority">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select><br><br>
            <button type="button" id="addForm">Add Task</button>
            <button type="button" id="closeForm">Cancel</button>
        </form>
    `;

    document.body.appendChild(formDiv);


    const addButton = document.getElementById('addForm');
    addButton.addEventListener('click', () => {

        const title = document.querySelector("#form-title").value;
        const project = document.querySelector("#form-project").value;
        const description = document.querySelector("#form-description").value;
        const dueDate = document.querySelector("#form-dueDate").value;
        const priority = document.querySelector("#form-priority").value;
    
        const myTask = createTask(project, title, description, dueDate, priority, false);
        allTasks.push(myTask);
        document.body.removeChild(formDiv);
        console.log(allTasks);
        
    });

    const closeButton = document.getElementById('closeForm');
    closeButton.addEventListener('click', () => {
        document.body.removeChild(formDiv);  // Eliminar el formulario del DOM
    });


}

function displayHome(){

    //Sidebar content
    const titleElement = document.createElement("p");
    titleElement.className = 'sidebar-title';
    titleElement.textContent = "Home";
    sidebarDiv.appendChild(titleElement);

    const AllTasksbutton = document.createElement('button');
    AllTasksbutton.className = 'sidebar-button';
    AllTasksbutton.textContent = "All tasks";
    sidebarDiv.appendChild(AllTasksbutton);

    const titleElement2 = document.createElement("p");
    titleElement2.className = 'sidebar-title';
    titleElement2.textContent = "Projects";
    sidebarDiv.appendChild(titleElement2);

    const Projectsbutton = document.createElement('button');
    Projectsbutton.className = 'sidebar-button';
    Projectsbutton.textContent = "Add project";
    sidebarDiv.appendChild(Projectsbutton);

    //Main content
    const headerDiv = document.createElement('div');
    headerDiv.className = 'header-main';

    const taskSpan = document.createElement("span");
    taskSpan.className = 'sidebar-title';
    taskSpan.textContent = "All tasks";
    headerDiv.appendChild(taskSpan);

    const AddTaskButton = document.createElement('button');
    AddTaskButton.className = 'header-button';
    AddTaskButton.textContent = "Add task";
    AddTaskButton.addEventListener('click', () => {
        createTaskForm();
    });
    headerDiv.appendChild(AddTaskButton);

    mainDiv.appendChild(headerDiv);
}

export { displayHome };