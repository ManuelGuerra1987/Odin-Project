
function taskForm(projectsArray) {

    const formDiv = document.createElement('div');
    formDiv.className = 'task-form-container';

    let projectOptions = projectsArray.map(project => `<option value="${project}">${project}</option>`).join('');
    
    formDiv.innerHTML = `
        <h3>Create a new task</h3>
        <form id="taskForm">

            <label for="title">Title:</label><br>
            <input type="text" id="form-title" name="title"><br><br>

            <label for="project">Project:</label><br>
            <select id="form-project" name="project">
                ${projectOptions}
            </select><br><br>

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

    return formDiv;
}

function projectForm() {

    const formDiv = document.createElement('div');
    formDiv.className = 'task-form-container';

    formDiv.innerHTML = `
        <h3>Create a new project</h3>
        <form id="projectForm">

            <label for="title">Title:</label><br>
            <input type="text" id="form-title" name="title"><br><br>

            <br><br>
            
            <button type="button" id="addProjectForm">Add project</button>
            <button type="button" id="closeProjectForm">Cancel</button>
        </form>
    `;

    return formDiv;
}

export { taskForm, projectForm };