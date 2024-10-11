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

function removeTask(taskTitle){

    const index = allTasks.findIndex(task => task.title === taskTitle);

    if (index !== -1) {
        allTasks.splice(index, 1); 
    }
}

function displayTasks(tasks){

    const tasksContainer = document.createElement('div');
    tasksContainer.className = 'tasks-div';

    tasks.forEach(task =>{
    
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task-div';

        const taskSpanDiv = document.createElement('div');
        taskSpanDiv.className = 'task-span-div';

        if (task.isCompleted){
            taskSpanDiv.style.textDecoration = 'line-through';
        }

        const titleSpan = document.createElement("span");
        titleSpan.textContent = `${task.title} - Priority: ${task.priority} - DueDate: ${task.dueDate}`;
        taskSpanDiv.appendChild(titleSpan);

        const buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'task-buttons-div';

        const completeButton = document.createElement('button');
        completeButton.className = 'mark-complete-button';
        completeButton.textContent = "Mark as completed";
        buttonsDiv.appendChild(completeButton);
        completeButton.addEventListener('click', () => {
            task.isCompleted = true;
            displayHome();
        });

        const removeButton = document.createElement('button');
        removeButton.className = 'remove-button';
        removeButton.textContent = "Delete";
        buttonsDiv.appendChild(removeButton);
        removeButton.addEventListener('click', () => {
            task.isCompleted = true;
            removeTask(task.title);
            displayHome();
        });

        taskDiv.appendChild(taskSpanDiv);
        taskDiv.appendChild(buttonsDiv);
        tasksContainer.appendChild(taskDiv);

    });
    return tasksContainer;
}

function displayMainHeader(title){

    const headerDiv = document.createElement('div');
    headerDiv.className = 'header-main';

    const taskSpan = document.createElement("span");
    taskSpan.className = 'sidebar-title';
    taskSpan.textContent = `${title} tasks`;
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

function displayTasksByProject(projectTitle){

    //Clean previous content
    mainDiv.innerHTML = "";
    
    //Header
    displayMainHeader(projectTitle);

    //Display tasks by project
    const tasks = allTasks.filter(task => task.project === projectTitle);
    const tasksDiv = displayTasks(tasks);
    mainDiv.appendChild(tasksDiv);

}



function displayMain(){

    //Clean previous content
    mainDiv.innerHTML = "";

    //Header
    let All = "All";
    displayMainHeader(All);

    //Display all tasks  
    const tasksDiv = displayTasks(allTasks);
    mainDiv.appendChild(tasksDiv);

}

function displaySidebar(){

    //Clean previous content
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
    AllTasksbutton.addEventListener('click', () => {
        displayMain();
    });

    const titleElement2 = document.createElement("p");
    titleElement2.className = 'sidebar-title';
    titleElement2.textContent = "Projects: ";
    sidebarDiv.appendChild(titleElement2);

    projects.forEach(project =>{

        const projectbutton = document.createElement('button');
        projectbutton.className = 'sidebar-button-project';
        projectbutton.textContent = `${project}`;
        projectbutton.addEventListener('click', () => {
            displayTasksByProject(`${project}`);

        });
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

function displayHome(){

    displaySidebar();
    displayMain();

}

export { displayHome };