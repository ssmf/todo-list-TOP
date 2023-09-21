import {Task} from '../modules/tasks.js'
import {mainProfile} from '../index.js'
import { createElementDOM } from "./createDomElement.js";
import { createModule } from './createModule.js';

export function createTask(targetProjectName, title, description, dueDate, priority, ifDone) {
    let newTask = new Task();
    
    newTask.title = title || newTask.title;
    newTask.description = description || newTask.description;
    newTask.dueDate = dueDate || newTask.dueDate;
    newTask.priority = priority || newTask.priority;
    newTask.ifDone = ifDone || newTask.ifDone;

    const targetProject = mainProfile.projects.find((project) => project.name == targetProjectName);
    targetProject.tasks.push(newTask);

    const taskWrapper = targetProject.DomElement.querySelector('#task-wrapper');

    (function addTaskDOM() {
        const newTaskDOM = createElementDOM('div', 'taskCard', 'task-card');
        taskWrapper.appendChild(newTaskDOM);
        newTask.DomElement = newTaskDOM; //Assigning dom element as a property of an object

        (function editTaskBind() {
            newTaskDOM.addEventListener('click', () => {
                createModule(false, newTask, targetProjectName);
            });
        })();

        const taskTitle = createElementDOM('p', 'task-title', 'task-title-display');
        taskTitle.textContent = title;
        newTaskDOM.appendChild(taskTitle);

        const priorityCircle = createElementDOM('span', 'prioritySign', 'priority-sign');
        priorityCircle.classList.add(`prioritySign${priority}`);
        priorityCircle.textContent = `⬤ `;
        taskTitle.prepend(priorityCircle);
        
    })();

    (function moveAddTaskButton() {
        const currentAddTaskButton = taskWrapper.querySelector('#add-task-button');
        const addTaskButtonClone = currentAddTaskButton.cloneNode(true);
        currentAddTaskButton.remove()
        taskWrapper.appendChild(addTaskButtonClone);

        addTaskButtonClone.addEventListener('click', () => {createModule(true, null, targetProject.name)});
    })();
};
