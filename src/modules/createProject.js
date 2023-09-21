import { mainProfile } from "../index.js";
import { Project } from "./projects.js";
import { createElementDOM } from "./createDomElement.js";
import { bindAddProject } from "./eventBinds.js";
import { createModule } from "./createModule.js";

export function createProject(name = 'CHANGE ME!') {
    let newProject = new Project;
    newProject.name = name;
    mainProfile.projects.push(newProject);

    const projectGrid = document.getElementById('project-grid');
    const currentProjectCard = createElementDOM('div', 'projectCard', 'project-card');
    projectGrid.appendChild(currentProjectCard);   
    
    const title = createElementDOM('h2', 'projectTitle');
    currentProjectCard.appendChild(title);
    title.textContent = name;
    title.setAttribute('contenteditable', true);

    (function getNewTitle() {
        title.addEventListener('input', () => {
            newProject.name = title.textContent;
        })
    })();

    const taskWrapper = createElementDOM('div', 'tasksWrapper', 'task-wrapper');
    currentProjectCard.appendChild(taskWrapper);

    const addTaskBtn = createElementDOM('div', 'addBtn btnTask', 'add-task-button');
    addTaskBtn.textContent = '+ Add task'
    taskWrapper.appendChild(addTaskBtn);
    addTaskBtn.addEventListener('click', () => {createModule(true, null, newProject.name)});


    (function moveAddProjectButton() {
        const currentBtn = document.getElementById('add-project-button').parentNode;
        const newBtn = currentBtn.cloneNode(true);
        currentBtn.remove();
        projectGrid.appendChild(newBtn);
        bindAddProject();
    })();

    newProject.DomElement = currentProjectCard;
};

