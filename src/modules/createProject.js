import { mainProfile } from "../index.js";
import { Project } from "./projects.js";
import { createElementDOM } from "./createDomElement.js";

export function createProject(name) {
    let newProject = new Project;
    newProject.name = name;
    mainProfile.projects.push(newProject);

    const projectGrid = document.getElementById('project-grid');
    const currentProjectCard = createElementDOM('div', 'projectCard', 'project-card');
    projectGrid.appendChild(currentProjectCard);   
    
    const title = document.createElement('h2');
    currentProjectCard.appendChild(title);
    title.textContent = name;

    const taskWrapper = createElementDOM('div', 'tasksWrapper', 'task-wrapper');
    currentProjectCard.appendChild(taskWrapper);

    const addTaskBtn = createElementDOM('div', 'addBtn btnTask', 'add-task-button');
    addTaskBtn.textContent = '+ Add task'
    taskWrapper.appendChild(addTaskBtn);


    (function moveAddProjectButton() {
        const currentBtn = document.getElementById('add-project-button').parentNode;
        const newBtn = currentBtn.cloneNode(true);
        currentBtn.remove();
        projectGrid.appendChild(newBtn);
    })();

    newProject.DomElement = currentProjectCard;
};

