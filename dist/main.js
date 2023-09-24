/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mainProfile: () => (/* binding */ mainProfile)\n/* harmony export */ });\n/* harmony import */ var _modules_profile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/profile.js */ \"./src/modules/profile.js\");\n/* harmony import */ var _modules_retrieveData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/retrieveData.js */ \"./src/modules/retrieveData.js\");\n/* harmony import */ var _modules_eventBinds_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/eventBinds.js */ \"./src/modules/eventBinds.js\");\n\r\n\r\n\r\n\r\nconst mainProfile = new _modules_profile_js__WEBPACK_IMPORTED_MODULE_0__.Profile('blossm');\r\n\r\n(0,_modules_retrieveData_js__WEBPACK_IMPORTED_MODULE_1__.retrieveLocalData)();\r\n\r\n(0,_modules_eventBinds_js__WEBPACK_IMPORTED_MODULE_2__.bindAddProject)(mainProfile);\n\n//# sourceURL=webpack://todo-list-top/./src/index.js?");

/***/ }),

/***/ "./src/modules/createDomElement.js":
/*!*****************************************!*\
  !*** ./src/modules/createDomElement.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createElementDOM: () => (/* binding */ createElementDOM)\n/* harmony export */ });\nfunction createElementDOM(elementType, elementClass = 'default', elementId = '') {\r\n    const currentElement = document.createElement(elementType);\r\n    elementClass.split(' ').forEach(className => currentElement.classList.add(className));\r\n    currentElement.setAttribute('id', elementId);\r\n    return currentElement;\r\n};\n\n//# sourceURL=webpack://todo-list-top/./src/modules/createDomElement.js?");

/***/ }),

/***/ "./src/modules/createModule.js":
/*!*************************************!*\
  !*** ./src/modules/createModule.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createModule: () => (/* binding */ createModule)\n/* harmony export */ });\n/* harmony import */ var _createDomElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDomElement */ \"./src/modules/createDomElement.js\");\n/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTask */ \"./src/modules/createTask.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ \"./src/modules/tasks.js\");\n\r\n\r\n\r\n\r\n\r\nfunction createModule(ifNew, taskData = null, projectName) {\r\n\r\n    if (ifNew == true) {\r\n        taskData = new _tasks__WEBPACK_IMPORTED_MODULE_2__.Task();\r\n        taskData.ifDone = false;\r\n    };\r\n\r\n    const overlay = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createElementDOM)('div', 'overlay', 'overlay');\r\n\r\n    const taskModule = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createElementDOM)('div', 'taskModule', 'task-module');\r\n    const formWrapper = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createElementDOM)('form', 'taskModuleForm', 'task-module-form');\r\n\r\n    (function createNewTask() {\r\n        formWrapper.addEventListener('submit', (event) => {\r\n            event.preventDefault();\r\n\r\n            const taskFormData = new FormData(event.target);\r\n            (0,_createTask__WEBPACK_IMPORTED_MODULE_1__.createTask)(projectName, taskFormData.get('title'),\r\n                taskFormData.get('description'),\r\n                taskFormData.get('dueDate'),\r\n                taskFormData.get('priority'),\r\n                taskData.ifDone,\r\n                false,\r\n                ifNew\r\n            );\r\n\r\n            if (ifNew == false) {\r\n                taskData.DomElement.remove();\r\n            }\r\n\r\n            overlay.remove();\r\n            taskModule.remove();\r\n        });\r\n    })();\r\n\r\n    document.body.appendChild(taskModule);\r\n    document.querySelector('.container').appendChild(overlay);\r\n    taskModule.appendChild(formWrapper);\r\n    \r\n    const moduleHeading = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createElementDOM)('h1')\r\n    moduleHeading.textContent = 'dummy heading';\r\n    formWrapper.appendChild(moduleHeading);\r\n\r\n    const titleInput = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createElementDOM)('input', 'textFieldInput titleInput', 'title-input');\r\n    titleInput.setAttribute('placeholder', 'Title');\r\n    titleInput.setAttribute('type', 'text');\r\n    titleInput.setAttribute('name', 'title');\r\n    formWrapper.appendChild(titleInput);\r\n\r\n    const descriptionInput = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createElementDOM)('textarea', 'textFieldInput descriptionInput', 'description-input');\r\n    descriptionInput.setAttribute('placeholder', 'Description');\r\n    descriptionInput.setAttribute('name', 'description');\r\n    formWrapper.appendChild(descriptionInput);\r\n\r\n    const dueDateInput = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createElementDOM)('input', 'dueDateInput', 'due-date-input');\r\n    dueDateInput.setAttribute('type', 'date');\r\n    dueDateInput.setAttribute('name', 'dueDate');\r\n    formWrapper.appendChild(dueDateInput);\r\n\r\n    (function createPriorityModule() {\r\n\r\n        const priorityModule = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createElementDOM)('div', 'priorityModule', 'priority-module');\r\n        formWrapper.appendChild(priorityModule);\r\n        const priorityModuleHeading = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createElementDOM)('h3');\r\n        priorityModuleHeading.textContent = 'Priority';\r\n        priorityModule.appendChild(priorityModuleHeading);\r\n\r\n        const priorityOptionsWrapper = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createElementDOM)('div', 'priorityOptionsWrapper', 'priority-options-wrapper');\r\n\r\n        priorityModule.appendChild(priorityOptionsWrapper);\r\n\r\n        const createPriorityOption = function(num) {\r\n            let priorityWrapper = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createElementDOM)('div', 'priorityWrapper');\r\n            let priorityButton = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createElementDOM)('input', `priority${num}`, `priority-${num}`);\r\n            priorityButton.setAttribute('type', 'radio');\r\n            priorityButton.setAttribute('name', 'priority');\r\n            priorityButton.setAttribute('value', `${num}`);\r\n            let priorityLabel = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createElementDOM)('label', 'priorityLabel');\r\n            priorityLabel.setAttribute('for', `priority-${num}`);\r\n            priorityLabel.textContent = num;\r\n\r\n            priorityOptionsWrapper.appendChild(priorityWrapper);\r\n            priorityWrapper.appendChild(priorityButton);\r\n            priorityWrapper.appendChild(priorityLabel);\r\n\r\n            return priorityWrapper;\r\n        };\r\n\r\n        const priority1Wrapper = createPriorityOption(1);\r\n        const priority2Wrapper = createPriorityOption(2);\r\n        const priority3Wrapper = createPriorityOption(3);\r\n\r\n        const priority1Text = document.createElement('p');\r\n        priority1Text.textContent = 'Normal';\r\n        priority1Wrapper.appendChild(priority1Text);\r\n\r\n        const priority2Text = document.createElement('p');\r\n        priority2Text.textContent = 'Important';\r\n        priority2Wrapper.appendChild(priority2Text);\r\n        \r\n        const priority3Text = document.createElement('p');\r\n        priority3Text.textContent = 'Very Important';\r\n        priority3Wrapper.appendChild(priority3Text);\r\n    })();\r\n\r\n    (function addReq() {\r\n        const objlist = [titleInput, descriptionInput, dueDateInput, document.querySelector('#priority-1')];\r\n        objlist.forEach(e => {e.required = true});\r\n    })();\r\n\r\n    const submitButton = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createElementDOM)('button', 'addBtn btnMain', 'module-submit-btn');\r\n    submitButton.textContent = '+ Create';\r\n    submitButton.setAttribute('type', 'submit');\r\n    formWrapper.appendChild(submitButton);\r\n\r\n    (function quitModuleBind() {\r\n        overlay.addEventListener('click', () => {\r\n            overlay.remove();\r\n            taskModule.remove();\r\n        });\r\n    })();\r\n\r\n    if (ifNew == false) {\r\n        titleInput.defaultValue = taskData.title;\r\n        descriptionInput.defaultValue = taskData.description;\r\n        dueDateInput.defaultValue = taskData.dueDate;\r\n        document.getElementById(`priority-${taskData.priority}`).setAttribute('checked', 'checked');\r\n        moduleHeading.textContent = 'Edit Task';\r\n    }\r\n    else {\r\n        moduleHeading.textContent = 'Create Task';\r\n        //FOR TESTING PURPOSES ONLY\r\n        titleInput.defaultValue = 'Boilerplate Title';\r\n        descriptionInput.defaultValue = 'Boilerplate Description';\r\n        dueDateInput.defaultValue = '2023-10-25';\r\n        document.getElementById('priority-2').setAttribute('checked', 'checked');\r\n    }\r\n\r\n};\n\n//# sourceURL=webpack://todo-list-top/./src/modules/createModule.js?");

/***/ }),

/***/ "./src/modules/createProject.js":
/*!**************************************!*\
  !*** ./src/modules/createProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProject: () => (/* binding */ createProject)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ \"./src/modules/projects.js\");\n/* harmony import */ var _createDomElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createDomElement.js */ \"./src/modules/createDomElement.js\");\n/* harmony import */ var _eventBinds_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventBinds.js */ \"./src/modules/eventBinds.js\");\n/* harmony import */ var _createModule_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createModule.js */ \"./src/modules/createModule.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction createProject(name = 'CHANGE ME!', readLocalData = false) {\r\n    let newProject = new _projects_js__WEBPACK_IMPORTED_MODULE_1__.Project;\r\n    newProject.name = name;\r\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.mainProfile.projects.push(newProject);\r\n\r\n    if (readLocalData == false) {\r\n    let projectArr = JSON.parse(localStorage.getItem('Projects'));\r\n    projectArr.push(newProject);\r\n    localStorage.setItem('Projects', JSON.stringify(projectArr));\r\n    };\r\n\r\n    const projectGrid = document.getElementById('project-grid');\r\n    const currentProjectCard = (0,_createDomElement_js__WEBPACK_IMPORTED_MODULE_2__.createElementDOM)('div', 'projectCard', 'project-card');\r\n    projectGrid.appendChild(currentProjectCard);   \r\n    \r\n    const title = (0,_createDomElement_js__WEBPACK_IMPORTED_MODULE_2__.createElementDOM)('h2', 'projectTitle');\r\n    currentProjectCard.appendChild(title);\r\n    title.textContent = name;\r\n    title.setAttribute('contenteditable', true);\r\n\r\n    (function getNewTitle() {\r\n        title.addEventListener('input', () => {\r\n            newProject.name = title.textContent;\r\n            if (readLocalData == false) {\r\n            let projectArr = JSON.parse(localStorage.getItem('Projects'));\r\n            projectArr.splice(projectArr.indexOf(newProject), 1);\r\n            projectArr.push(newProject);\r\n            localStorage.setItem('Projects', JSON.stringify(projectArr));\r\n            };\r\n        });\r\n    })();\r\n\r\n    const taskWrapper = (0,_createDomElement_js__WEBPACK_IMPORTED_MODULE_2__.createElementDOM)('div', 'tasksWrapper', 'task-wrapper');\r\n    currentProjectCard.appendChild(taskWrapper);\r\n\r\n    const addTaskBtn = (0,_createDomElement_js__WEBPACK_IMPORTED_MODULE_2__.createElementDOM)('div', 'addBtn btnTask', 'add-task-button');\r\n    addTaskBtn.textContent = '+ Add task'\r\n    taskWrapper.appendChild(addTaskBtn);\r\n    addTaskBtn.addEventListener('click', () => {(0,_createModule_js__WEBPACK_IMPORTED_MODULE_4__.createModule)(true, null, newProject.name)});\r\n\r\n\r\n    (function moveAddProjectButton() {\r\n        const currentBtn = document.getElementById('add-project-button').parentNode;\r\n        const newBtn = currentBtn.cloneNode(true);\r\n        currentBtn.remove();\r\n        projectGrid.appendChild(newBtn);\r\n        (0,_eventBinds_js__WEBPACK_IMPORTED_MODULE_3__.bindAddProject)();\r\n    })();\r\n\r\n    newProject.DomElement = currentProjectCard;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://todo-list-top/./src/modules/createProject.js?");

/***/ }),

/***/ "./src/modules/createTask.js":
/*!***********************************!*\
  !*** ./src/modules/createTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTask: () => (/* binding */ createTask)\n/* harmony export */ });\n/* harmony import */ var _modules_tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/tasks.js */ \"./src/modules/tasks.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n/* harmony import */ var _createDomElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createDomElement.js */ \"./src/modules/createDomElement.js\");\n/* harmony import */ var _createModule_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createModule.js */ \"./src/modules/createModule.js\");\n/* harmony import */ var _taskDetailsDisplay_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskDetailsDisplay.js */ \"./src/modules/taskDetailsDisplay.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction createTask(targetProjectName, title, description, dueDate, priority, ifDone = false, readLocalData = false, ifNew) {\r\n    let newTask = new _modules_tasks_js__WEBPACK_IMPORTED_MODULE_0__.Task();\r\n    \r\n    newTask.title = title || newTask.title;\r\n    newTask.description = description || newTask.description;\r\n    newTask.dueDate = dueDate || newTask.dueDate;\r\n    newTask.priority = priority || newTask.priority;\r\n    newTask.ifDone = ifDone || newTask.ifDone;\r\n\r\n    const targetProject = _index_js__WEBPACK_IMPORTED_MODULE_1__.mainProfile.projects.find((project) => project.name == targetProjectName);\r\n    if (ifNew == true) {\r\n        targetProject.tasks.push(newTask);\r\n    }\r\n    else {\r\n        const currentTask = targetProject.tasks.find(e => e.title == title);\r\n        console.log(currentTask);\r\n        targetProject.tasks[targetProject.tasks.indexOf(currentTask)] = newTask;\r\n    };\r\n\r\n    console.log(targetProject.tasks);\r\n\r\n    if (readLocalData == false) {\r\n    let projectArr = JSON.parse(localStorage.getItem('Projects'));\r\n    projectArr.splice(projectArr.indexOf(targetProject), 1);\r\n    projectArr.push(targetProject);\r\n    localStorage.setItem('Projects', JSON.stringify(projectArr));\r\n    };\r\n\r\n    const taskWrapper = targetProject.DomElement.querySelector('#task-wrapper');\r\n\r\n    (function addTaskDOM() {\r\n        const newTaskDOM = (0,_createDomElement_js__WEBPACK_IMPORTED_MODULE_2__.createElementDOM)('div', 'taskCard', 'task-card');\r\n        const editButton = (0,_createDomElement_js__WEBPACK_IMPORTED_MODULE_2__.createElementDOM)('button', 'taskTitle', 'task-title');\r\n        const ifDoneButton = (0,_createDomElement_js__WEBPACK_IMPORTED_MODULE_2__.createElementDOM)('input', 'ifDoneButton', 'if-done-button');\r\n        ifDoneButton.setAttribute('type', 'checkbox');\r\n        ifDoneButton.setAttribute('name', 'ifDone');\r\n\r\n        ifDoneButton.addEventListener('change', () => {\r\n            newTask.ifDone = !newTask.ifDone;\r\n            ifDoneToggle(newTask.ifDone);\r\n        });\r\n\r\n        newTaskDOM.appendChild(editButton);\r\n        newTaskDOM.appendChild(ifDoneButton);\r\n        taskWrapper.appendChild(newTaskDOM);\r\n        newTask.DomElement = newTaskDOM; // Assigning dom element as a property of an object\r\n\r\n        (function editTaskBind() {\r\n            editButton.addEventListener('click', () => {\r\n                (0,_createModule_js__WEBPACK_IMPORTED_MODULE_3__.createModule)(false, newTask, targetProject.name);\r\n            });\r\n        })();\r\n\r\n        const taskTitle = (0,_createDomElement_js__WEBPACK_IMPORTED_MODULE_2__.createElementDOM)('p', 'taskTitle', 'task-title-display');\r\n        taskTitle.textContent = title;\r\n        editButton.appendChild(taskTitle);\r\n\r\n        const priorityCircle = (0,_createDomElement_js__WEBPACK_IMPORTED_MODULE_2__.createElementDOM)('span', 'prioritySign', 'priority-sign');\r\n        priorityCircle.classList.add(`prioritySign${priority}`);\r\n        priorityCircle.textContent = `⬤ `;\r\n        taskTitle.prepend(priorityCircle);\r\n\r\n        function ifDoneToggle(currentIfDone) {\r\n            (!currentIfDone) ? newTask.DomElement.classList.remove('Done') : newTask.DomElement.classList.add('Done'); \r\n        }\r\n\r\n        if (ifDone == true) {\r\n            ifDoneToggle(ifDone);\r\n            ifDoneButton.checked = true;\r\n        };\r\n\r\n        (function hoverDetails() {\r\n            editButton.addEventListener('mouseenter', () => {\r\n                const currentDetailsDisplay = (0,_taskDetailsDisplay_js__WEBPACK_IMPORTED_MODULE_4__.createTaskDetailsDisplay)(newTask);\r\n\r\n                function trackMouse(e) {\r\n                    currentDetailsDisplay.style.left = `${e.clientX}px`;\r\n                    currentDetailsDisplay.style.top = `${e.clientY}px`;\r\n                };\r\n\r\n                document.addEventListener('mousemove', trackMouse);\r\n\r\n                editButton.addEventListener('mouseleave', () => {\r\n                    setTimeout(currentDetailsDisplay.classList.add('taskDetailsNotVisible', 0))\r\n                    setTimeout(() => {\r\n                        currentDetailsDisplay.remove();\r\n                        document.removeEventListener('mousemove', trackMouse);\r\n                    }, 200);\r\n                });\r\n            });\r\n        })();\r\n        \r\n        \r\n    })();\r\n\r\n    (function moveAddTaskButton() {\r\n        const currentAddTaskButton = taskWrapper.querySelector('#add-task-button');\r\n        const addTaskButtonClone = currentAddTaskButton.cloneNode(true);\r\n        currentAddTaskButton.remove()\r\n        taskWrapper.appendChild(addTaskButtonClone);\r\n\r\n        addTaskButtonClone.addEventListener('click', () => {(0,_createModule_js__WEBPACK_IMPORTED_MODULE_3__.createModule)(true, null, targetProject.name)});\r\n    })();\r\n};\r\n\n\n//# sourceURL=webpack://todo-list-top/./src/modules/createTask.js?");

/***/ }),

/***/ "./src/modules/eventBinds.js":
/*!***********************************!*\
  !*** ./src/modules/eventBinds.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   bindAddProject: () => (/* binding */ bindAddProject)\n/* harmony export */ });\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ \"./src/modules/createProject.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n\r\n\r\n\r\nfunction bindAddProject() {\r\n    document.getElementById('add-project-button').addEventListener('click', () => {\r\n        (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.createProject)('CHANGE ME!', false);\r\n    });\r\n};\n\n//# sourceURL=webpack://todo-list-top/./src/modules/eventBinds.js?");

/***/ }),

/***/ "./src/modules/profile.js":
/*!********************************!*\
  !*** ./src/modules/profile.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Profile: () => (/* binding */ Profile)\n/* harmony export */ });\nclass Profile {\r\n    constructor() {\r\n        this.name = 'boilerPlateName';\r\n        this.projects = [];\r\n    };\r\n\r\n\r\n};\n\n//# sourceURL=webpack://todo-list-top/./src/modules/profile.js?");

/***/ }),

/***/ "./src/modules/projects.js":
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\r\n    constructor(name) {\r\n        this.name = name;\r\n        this.tasks = [];\r\n        this.DomElement = '';\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list-top/./src/modules/projects.js?");

/***/ }),

/***/ "./src/modules/retrieveData.js":
/*!*************************************!*\
  !*** ./src/modules/retrieveData.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   retrieveLocalData: () => (/* binding */ retrieveLocalData)\n/* harmony export */ });\n/* harmony import */ var _createProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject.js */ \"./src/modules/createProject.js\");\n/* harmony import */ var _createTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTask.js */ \"./src/modules/createTask.js\");\n\r\n\r\n\r\nfunction retrieveLocalData() {\r\n    let projectsData = JSON.parse(localStorage.getItem('Projects'));\r\n    if (projectsData == undefined) {localStorage.setItem('Projects', '[]'); return 0};\r\n\r\n    for (let projectIndex in projectsData) {\r\n        let currentProject = projectsData[projectIndex];\r\n        (0,_createProject_js__WEBPACK_IMPORTED_MODULE_0__.createProject)(currentProject.name, true);\r\n        for (let taskIndex in currentProject.tasks) {\r\n            let currentTask = currentProject.tasks[taskIndex];\r\n            (0,_createTask_js__WEBPACK_IMPORTED_MODULE_1__.createTask)(currentProject.name, currentTask.title, currentTask.description, currentTask.dueDate, currentTask.priority, currentTask.ifDone, true, true);\r\n        };\r\n    };\r\n};\n\n//# sourceURL=webpack://todo-list-top/./src/modules/retrieveData.js?");

/***/ }),

/***/ "./src/modules/taskDetailsDisplay.js":
/*!*******************************************!*\
  !*** ./src/modules/taskDetailsDisplay.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTaskDetailsDisplay: () => (/* binding */ createTaskDetailsDisplay)\n/* harmony export */ });\n/* harmony import */ var _createDomElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDomElement */ \"./src/modules/createDomElement.js\");\n\r\n\r\nfunction createTaskDetailsDisplay(taskData) {\r\n    const taskDetailsWrapper = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createElementDOM)('div', 'taskDetails', 'task-details');\r\n    taskDetailsWrapper.classList.add(`priority${taskData.priority}Details`);\r\n\r\n    document.getElementById('main-container').appendChild(taskDetailsWrapper);\r\n\r\n    const mainTextWrapper = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createElementDOM)('div', 'mainTextWrapper', 'main-text-wrapper');\r\n    taskDetailsWrapper.appendChild(mainTextWrapper);\r\n\r\n    (function mainTextWrapperContent() {\r\n        const detailsTitle = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createElementDOM)('p', 'detailsTitle', 'details-title');\r\n        detailsTitle.textContent = taskData.title;\r\n        mainTextWrapper.appendChild(detailsTitle);\r\n\r\n        const detailsDescription = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createElementDOM)('p', 'detailsDescription', 'details-description');\r\n        detailsDescription.textContent = taskData.description;\r\n        mainTextWrapper.appendChild(detailsDescription);\r\n\r\n    })();\r\n    \r\n    const otherDetailsWrapper = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createElementDOM)('div', 'otherDetailsWrapper', 'other-details-wrapper');\r\n    taskDetailsWrapper.appendChild(otherDetailsWrapper);\r\n\r\n    (function otherDetailsWrapperContent() {\r\n        const detailsDate = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createElementDOM)('p', 'detailsDate', 'details-date');\r\n        detailsDate.textContent = 'Due to: '\r\n        otherDetailsWrapper.appendChild(detailsDate);\r\n\r\n        const detailsDateValue = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createElementDOM)('span', 'detailsDateValue', 'details-date-value');\r\n        detailsDateValue.textContent = taskData.dueDate;\r\n        detailsDate.appendChild(detailsDateValue);\r\n\r\n        const detailsPriority = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createElementDOM)('p', 'detailsPriority', 'details-priority');\r\n        otherDetailsWrapper.appendChild(detailsPriority);\r\n\r\n        (function detailsPriorityText() {\r\n            const priorityText = (taskData.priority == 1) ?'normal' : (taskData.priority == 2) ? 'Important!' : 'Very important!!!'; \r\n            detailsPriority.textContent = priorityText;\r\n        })();\r\n\r\n        if (taskData.ifDone == true) {\r\n\r\n            setTimeout(() => {taskDetailsWrapper.classList.add('doneTask');}, 0);\r\n            \r\n        } else {\r\n\r\n            setTimeout(() => {taskDetailsWrapper.classList.add('notDoneTask');}, 0);\r\n\r\n        }\r\n    })();\r\n\r\n    return taskDetailsWrapper;\r\n}\n\n//# sourceURL=webpack://todo-list-top/./src/modules/taskDetailsDisplay.js?");

/***/ }),

/***/ "./src/modules/tasks.js":
/*!******************************!*\
  !*** ./src/modules/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n\r\n\r\nclass Task {\r\n    constructor() {\r\n        this.title = 'boilerPlateTitle';\r\n        this.description = 'boilerPlateDescription'\r\n        this.dueDate = new Date(2007, 'January', 12);\r\n        this.priority = 1;\r\n        this.ifDone = false;\r\n        this.DomElement = '';\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://todo-list-top/./src/modules/tasks.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;