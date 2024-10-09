function createTask(project, title, description, dueDate, priority, isCompleted = false) {
    
    return {
        project: project,
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        isCompleted: isCompleted,

        markAsCompleted() {
            this.isCompleted = true;
        },
    };
}

export { createTask };