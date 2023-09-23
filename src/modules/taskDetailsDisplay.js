import { createElementDOM } from "./createDomElement";

export function createTaskDetailsDisplay(taskData) {
    const taskDetailsWrapper = createElementDOM('div', 'taskDetails', 'task-details');
    taskDetailsWrapper.classList.add(`priority${taskData.priority}Details`);

    document.getElementById('main-container').appendChild(taskDetailsWrapper);

    const mainTextWrapper = createElementDOM('div', 'mainTextWrapper', 'main-text-wrapper');
    taskDetailsWrapper.appendChild(mainTextWrapper);

    (function mainTextWrapperContent() {
        const detailsTitle = createElementDOM('p', 'detailsTitle', 'details-title');
        detailsTitle.textContent = taskData.title;
        mainTextWrapper.appendChild(detailsTitle);

        const detailsDescription = createElementDOM('p', 'detailsDescription', 'details-description');
        detailsDescription.textContent = taskData.description;
        mainTextWrapper.appendChild(detailsDescription);

    })();
    
    const otherDetailsWrapper = createElementDOM('div', 'otherDetailsWrapper', 'other-details-wrapper');
    taskDetailsWrapper.appendChild(otherDetailsWrapper);

    (function otherDetailsWrapperContent() {
        const detailsDate = createElementDOM('p', 'detailsDate', 'details-date');
        detailsDate.textContent = 'Due to: '
        otherDetailsWrapper.appendChild(detailsDate);

        const detailsDateValue = createElementDOM('span', 'detailsDateValue', 'details-date-value');
        detailsDateValue.textContent = taskData.dueDate;
        detailsDate.appendChild(detailsDateValue);

        const detailsPriority = createElementDOM('p', 'detailsPriority', 'details-priority');
        otherDetailsWrapper.appendChild(detailsPriority);

        (function detailsPriorityText() {
            const priorityText = (taskData.priority == 1) ?'normal' : (taskData.priority == 2) ? 'Important!' : 'Very important!!!'; 
            detailsPriority.textContent = priorityText;
        })();

        if (taskData.ifDone == true) {

            setTimeout(() => {taskDetailsWrapper.classList.add('doneTask');}, 0);
            
        } else {

            setTimeout(() => {taskDetailsWrapper.classList.add('notDoneTask');}, 0);

        }
    })();

    return taskDetailsWrapper;
}