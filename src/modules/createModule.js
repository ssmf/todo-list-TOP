import { createElementDOM } from "./createDomElement";
import { createTask } from "./createTask";


export function createModule(ifNew, taskData = null, projectName) {

    const overlay = createElementDOM('div', 'overlay', 'overlay');

    const taskModule = createElementDOM('div', 'taskModule', 'task-module');
    const formWrapper = createElementDOM('form', 'taskModuleForm', 'task-module-form');

    (function createNewTask() {
        formWrapper.addEventListener('submit', (event) => {
            event.preventDefault();

            const taskFormData = new FormData(event.target);
            createTask(projectName, taskFormData.get('title'),
                taskFormData.get('description'),
                taskFormData.get('dueDate'),
                taskFormData.get('priority'),
            false);

            overlay.remove();
            taskModule.remove();
        });
    })();

    document.body.appendChild(taskModule);
    document.querySelector('.container').appendChild(overlay);
    taskModule.appendChild(formWrapper);
    
    const moduleHeading = createElementDOM('h1')
    moduleHeading.textContent = 'dummy heading';
    formWrapper.appendChild(moduleHeading);

    const titleInput = createElementDOM('input', 'textFieldInput titleInput', 'title-input');
    titleInput.setAttribute('placeholder', 'Title');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('name', 'title');
    formWrapper.appendChild(titleInput);

    const descriptionInput = createElementDOM('textarea', 'textFieldInput descriptionInput', 'description-input');
    descriptionInput.setAttribute('placeholder', 'Description');
    descriptionInput.setAttribute('name', 'description');
    formWrapper.appendChild(descriptionInput);

    const dueDateInput = createElementDOM('input', 'dueDateInput', 'due-date-input');
    dueDateInput.setAttribute('type', 'date');
    dueDateInput.setAttribute('name', 'dueDate');
    formWrapper.appendChild(dueDateInput);

    (function createPriorityModule() {

        const priorityModule = createElementDOM('div', 'priorityModule', 'priority-module');
        formWrapper.appendChild(priorityModule);
        const priorityModuleHeading = createElementDOM('h3');
        priorityModuleHeading.textContent = 'Priority';
        priorityModule.appendChild(priorityModuleHeading);

        const priorityOptionsWrapper = createElementDOM('div', 'priorityOptionsWrapper', 'priority-options-wrapper');

        priorityModule.appendChild(priorityOptionsWrapper);

        const createPriorityOption = function(num) {
            let priorityWrapper = createElementDOM('div', 'priorityWrapper');
            let priorityButton = createElementDOM('input', `priority${num}`, `priority-${num}`);
            priorityButton.setAttribute('type', 'radio');
            priorityButton.setAttribute('name', 'priority');
            let priorityLabel = createElementDOM('label', 'priorityLabel');
            priorityLabel.setAttribute('for', `priority-${num}`);
            priorityLabel.textContent = num;

            priorityOptionsWrapper.appendChild(priorityWrapper);
            priorityWrapper.appendChild(priorityButton);
            priorityWrapper.appendChild(priorityLabel);

            return priorityWrapper;
        };

        const priority1Wrapper = createPriorityOption(1);
        const priority2Wrapper = createPriorityOption(2);
        const priority3Wrapper = createPriorityOption(3);

        const priority1Text = document.createElement('p');
        priority1Text.textContent = 'Normal';
        priority1Wrapper.appendChild(priority1Text);

        const priority2Text = document.createElement('p');
        priority2Text.textContent = 'Important';
        priority2Wrapper.appendChild(priority2Text);
        
        const priority3Text = document.createElement('p');
        priority3Text.textContent = 'Very Important';
        priority3Wrapper.appendChild(priority3Text);
    })();

    const submitButton = createElementDOM('button', 'addBtn btnMain', 'module-submit-btn');
    submitButton.textContent = '+ Create';
    submitButton.setAttribute('type', 'submit');
    formWrapper.appendChild(submitButton);

    (function quitModuleBind() {
        overlay.addEventListener('click', () => {
            overlay.remove();
            taskModule.remove();
        });
    })();

};