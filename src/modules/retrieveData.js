import { createProject } from "./createProject.js";
import { createTask } from "./createTask.js";

export function retrieveLocalData() {
    let projectsData = JSON.parse(localStorage.getItem('Projects'));
    if (projectsData == undefined) {localStorage.setItem('Projects', '[]'); return 0};

    for (let projectIndex in projectsData) {
        let currentProject = projectsData[projectIndex];
        createProject(currentProject.name, true);
        for (let taskIndex in currentProject.tasks) {
            let currentTask = currentProject.tasks[taskIndex];
            createTask(currentProject.name, currentTask.title, currentTask.description, currentTask.dueDate, currentTask.priority, currentTask.ifDone, true, true);
        };
    };
};