import { createTask } from "./taskFactory";
import { taskForm, projectForm } from "./form";

let allTasks = [];
let projects = ["Default"];

const sidebarDiv = document.getElementById("sidebar-content");
const mainDiv = document.getElementById("main-content-div");

function createTaskForm() {

    const formDiv = taskForm(projects);
    document.body.appendChild(formDiv);

    document.getElementById('addForm').addEventListener('click', () => {

        const title = document.querySelector("#form-title").value;
        const project = document.querySelector("#form-project").value;
        const description = document.querySelector("#form-description").value;
        const dueDate = document.querySelector("#form-dueDate").value;
        const priority = document.querySelector("#form-priority").value;
    
        const myTask = createTask(project, title, description, dueDate, priority, false);

        allTasks.push(myTask);
        displayMain();
        document.body.removeChild(formDiv);
        console.log(allTasks);
        
    });

    document.getElementById('closeForm').addEventListener('click', () => {
        document.body.removeChild(formDiv);  
    });

}

function createProjectForm() {

    const formDiv = projectForm();
    document.body.appendChild(formDiv);

    document.getElementById('addProjectForm').addEventListener('click', () => {

        const newProject = document.querySelector("#form-title").value;

        projects.push(newProject);
        displaySidebar();
        document.body.removeChild(formDiv);
        console.log(projects);
        
    });

    document.getElementById('closeProjectForm').addEventListener('click', () => {
        document.body.removeChild(formDiv);  
    });

    

}

function displaySidebar(){

        sidebarDiv.innerHTML = "";
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
        titleElement2.textContent = "Projects: ";
        sidebarDiv.appendChild(titleElement2);
    
        projects.forEach(project =>{
    
            const projectbutton = document.createElement('button');
            projectbutton.className = 'sidebar-button-project';
            projectbutton.textContent = `${project}`;
            sidebarDiv.appendChild(projectbutton);
    
        });
    
        const Projectsbutton = document.createElement('button');
        Projectsbutton.className = 'sidebar-button';
        Projectsbutton.textContent = "+  Add project";
        Projectsbutton.addEventListener('click', () => {
            createProjectForm();

        });
        sidebarDiv.appendChild(Projectsbutton);

}

function displayMain(){

    mainDiv.innerHTML = "";
    //Header
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

    //All tasks
    const tasksDiv = document.createElement('div');
    tasksDiv.className = 'tasks-div';

    allTasks.forEach(task =>{
    
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task-div';

        const titleSpan = document.createElement("span");
        titleSpan.textContent = `${task.title} - Priority: ${task.priority} - DueDate: ${task.dueDate}`;
        taskDiv.appendChild(titleSpan);

        tasksDiv.appendChild(taskDiv);

    });

    mainDiv.appendChild(tasksDiv);

}

function displayHome(){

    displaySidebar();
    displayMain();

}

export { displayHome };