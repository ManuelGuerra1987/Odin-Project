const sidebarDiv = document.getElementById("sidebar-content");
const mainDiv = document.getElementById("main-content-div");

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

    const AddTaskbutton = document.createElement('button');
    AddTaskbutton.className = 'header-button';
    AddTaskbutton.textContent = "Add task";
    headerDiv.appendChild(AddTaskbutton);

    mainDiv.appendChild(headerDiv);
}

export { displayHome };