import {Task} from '../modules/tasks.js'
import {mainProfile} from '../index.js'
import { createElementDOM } from "./createDomElement.js";
import { createModule } from './createModule.js';
import { createTaskDetailsDisplay } from './taskDetailsDisplay.js';

export function createTask(targetProjectName, title, description, dueDate, priority, ifDone = false, readLocalData = false, ifNew) {
    let newTask = new Task();
    
    newTask.title = title || newTask.title;
    newTask.description = description || newTask.description;
    newTask.dueDate = dueDate || newTask.dueDate;
    newTask.priority = priority || newTask.priority;
    newTask.ifDone = ifDone || newTask.ifDone;

    const targetProject = mainProfile.projects.find((project) => project.name == targetProjectName);
    if (ifNew == true) {
        targetProject.tasks.push(newTask);
    }
    else {
        const currentTask = targetProject.tasks.find(e => e.title == title);
        console.log(currentTask);
        targetProject.tasks[targetProject.tasks.indexOf(currentTask)] = newTask;
    };

    console.log(targetProject.tasks);

    if (readLocalData == false) {
    let projectArr = JSON.parse(localStorage.getItem('Projects'));
    projectArr.splice(projectArr.indexOf(targetProject), 1);
    projectArr.push(targetProject);
    localStorage.setItem('Projects', JSON.stringify(projectArr));
    };

    const taskWrapper = targetProject.DomElement.querySelector('#task-wrapper');

    (function addTaskDOM() {
        const newTaskDOM = createElementDOM('div', 'taskCard', 'task-card');
        const editButton = createElementDOM('button', 'taskTitle', 'task-title');
        const ifDoneButton = createElementDOM('input', 'ifDoneButton', 'if-done-button');
        ifDoneButton.setAttribute('type', 'checkbox');
        ifDoneButton.setAttribute('name', 'ifDone');

        ifDoneButton.addEventListener('change', () => {
            newTask.ifDone = !newTask.ifDone;
            ifDoneToggle(newTask.ifDone);
        });

        newTaskDOM.appendChild(editButton);
        newTaskDOM.appendChild(ifDoneButton);
        taskWrapper.appendChild(newTaskDOM);
        newTask.DomElement = newTaskDOM; // Assigning dom element as a property of an object

        (function editTaskBind() {
            editButton.addEventListener('click', () => {
                createModule(false, newTask, targetProject.name);
            });
        })();

        const taskTitle = createElementDOM('p', 'taskTitle', 'task-title-display');
        taskTitle.textContent = title;
        editButton.appendChild(taskTitle);

        const priorityCircle = createElementDOM('span', 'prioritySign', 'priority-sign');
        priorityCircle.classList.add(`prioritySign${priority}`);
        priorityCircle.textContent = `⬤ `;
        taskTitle.prepend(priorityCircle);

        function ifDoneToggle(currentIfDone) {
            (!currentIfDone) ? newTask.DomElement.classList.remove('Done') : newTask.DomElement.classList.add('Done'); 
        }

        if (ifDone == true) {
            ifDoneToggle(ifDone);
            ifDoneButton.checked = true;
        };

        (function hoverDetails() {
            editButton.addEventListener('mouseenter', () => {
                const currentDetailsDisplay = createTaskDetailsDisplay(newTask);

                function trackMouse(e) {
                    currentDetailsDisplay.style.left = `${e.clientX}px`;
                    currentDetailsDisplay.style.top = `${e.clientY}px`;
                };

                document.addEventListener('mousemove', trackMouse);

                editButton.addEventListener('mouseleave', () => {
                    setTimeout(currentDetailsDisplay.classList.add('taskDetailsNotVisible', 0))
                    setTimeout(() => {
                        currentDetailsDisplay.remove();
                        document.removeEventListener('mousemove', trackMouse);
                    }, 200);
                });
            });
        })();
        
        
    })();

    (function moveAddTaskButton() {
        const currentAddTaskButton = taskWrapper.querySelector('#add-task-button');
        const addTaskButtonClone = currentAddTaskButton.cloneNode(true);
        currentAddTaskButton.remove()
        taskWrapper.appendChild(addTaskButtonClone);

        addTaskButtonClone.addEventListener('click', () => {createModule(true, null, targetProject.name)});
    })();
};
