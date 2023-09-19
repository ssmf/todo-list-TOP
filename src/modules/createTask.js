import {Task} from '../modules/tasks.js'
import {mainProfile} from '../index.js'

export function createTask(targetProjectName, title, description, dueDate, priority, ifDone) {
    let newTask = new Task();
    
    newTask.title = title || newTask.title;
    newTask.description = description || newTask.description;
    newTask.dueDate = dueDate || newTask.dueDate;
    newTask.priority = priority || newTask.priority;
    newTask.ifDone = ifDone || newTask.ifDone;

    const targetProject = mainProfile.projects.find((project) => project.name == targetProjectName);
    targetProject.tasks.push(newTask);
};
