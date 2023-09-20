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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mainProfile: () => (/* binding */ mainProfile)\n/* harmony export */ });\n/* harmony import */ var _modules_profile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/profile.js */ \"./src/modules/profile.js\");\n/* harmony import */ var _modules_projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/projects.js */ \"./src/modules/projects.js\");\n/* harmony import */ var _modules_tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tasks.js */ \"./src/modules/tasks.js\");\n/* harmony import */ var _modules_createProject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/createProject.js */ \"./src/modules/createProject.js\");\n/* harmony import */ var _modules_createTask_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/createTask.js */ \"./src/modules/createTask.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst mainProfile = new _modules_profile_js__WEBPACK_IMPORTED_MODULE_0__.Profile('blossm');\r\n(0,_modules_createProject_js__WEBPACK_IMPORTED_MODULE_3__.createProject)('Daily routine');\r\n(0,_modules_createProject_js__WEBPACK_IMPORTED_MODULE_3__.createProject)('Daily routine');\r\n(0,_modules_createTask_js__WEBPACK_IMPORTED_MODULE_4__.createTask)('Daily routine', '2 odin lessons', 'very important, your main task of the day', new Date(\"2023-09-22\"), 3, false);\r\n\r\nconsole.log(mainProfile.projects)\r\n\r\n\n\n//# sourceURL=webpack://todo-list-top/./src/index.js?");

/***/ }),

/***/ "./src/modules/createDomElement.js":
/*!*****************************************!*\
  !*** ./src/modules/createDomElement.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createElementDOM: () => (/* binding */ createElementDOM)\n/* harmony export */ });\nfunction createElementDOM(elementType = '', elementClass = '', elementId = '') {\r\n    const currentElement = document.createElement(elementType);\r\n    elementClass.split(' ').forEach(className => currentElement.classList.add(className));\r\n    currentElement.setAttribute('id', elementId);\r\n    return currentElement;\r\n};\n\n//# sourceURL=webpack://todo-list-top/./src/modules/createDomElement.js?");

/***/ }),

/***/ "./src/modules/createProject.js":
/*!**************************************!*\
  !*** ./src/modules/createProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProject: () => (/* binding */ createProject)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ \"./src/modules/projects.js\");\n/* harmony import */ var _createDomElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createDomElement.js */ \"./src/modules/createDomElement.js\");\n\r\n\r\n\r\n\r\nfunction createProject(name) {\r\n    let newProject = new _projects_js__WEBPACK_IMPORTED_MODULE_1__.Project;\r\n    newProject.name = name;\r\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.mainProfile.projects.push(newProject);\r\n\r\n    const projectGrid = document.getElementById('project-grid');\r\n    const currentProjectCard = (0,_createDomElement_js__WEBPACK_IMPORTED_MODULE_2__.createElementDOM)('div', 'projectCard', 'project-card');\r\n    projectGrid.appendChild(currentProjectCard);   \r\n    \r\n    const title = document.createElement('h2');\r\n    currentProjectCard.appendChild(title);\r\n    title.textContent = name;\r\n\r\n    const taskWrapper = (0,_createDomElement_js__WEBPACK_IMPORTED_MODULE_2__.createElementDOM)('div', 'tasksWrapper', 'task-wrapper');\r\n    currentProjectCard.appendChild(taskWrapper);\r\n\r\n    const addTaskBtn = (0,_createDomElement_js__WEBPACK_IMPORTED_MODULE_2__.createElementDOM)('div', 'addBtn btnTask', 'add-task-button');\r\n    addTaskBtn.textContent = '+ Add task'\r\n    taskWrapper.appendChild(addTaskBtn);\r\n\r\n\r\n    (function moveAddProjectButton() {\r\n        const currentBtn = document.getElementById('add-project-button').parentNode;\r\n        const newBtn = currentBtn.cloneNode(true);\r\n        currentBtn.remove();\r\n        projectGrid.appendChild(newBtn);\r\n    })();\r\n\r\n    newProject.DomElement = currentProjectCard;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://todo-list-top/./src/modules/createProject.js?");

/***/ }),

/***/ "./src/modules/createTask.js":
/*!***********************************!*\
  !*** ./src/modules/createTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTask: () => (/* binding */ createTask)\n/* harmony export */ });\n/* harmony import */ var _modules_tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/tasks.js */ \"./src/modules/tasks.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n/* harmony import */ var _createDomElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createDomElement.js */ \"./src/modules/createDomElement.js\");\n\r\n\r\n\r\n\r\nfunction createTask(targetProjectName, title, description, dueDate, priority, ifDone) {\r\n    let newTask = new _modules_tasks_js__WEBPACK_IMPORTED_MODULE_0__.Task();\r\n    \r\n    newTask.title = title || newTask.title;\r\n    newTask.description = description || newTask.description;\r\n    newTask.dueDate = dueDate || newTask.dueDate;\r\n    newTask.priority = priority || newTask.priority;\r\n    newTask.ifDone = ifDone || newTask.ifDone;\r\n\r\n    const targetProject = _index_js__WEBPACK_IMPORTED_MODULE_1__.mainProfile.projects.find((project) => project.name == targetProjectName);\r\n    targetProject.tasks.push(newTask);\r\n\r\n    const taskWrapper = targetProject.DomElement.querySelector('#task-wrapper');\r\n\r\n    (function addTaskDOM() {\r\n        const newTask = (0,_createDomElement_js__WEBPACK_IMPORTED_MODULE_2__.createElementDOM)('button', 'taskCard', 'task-card');\r\n        taskWrapper.appendChild(newTask);\r\n\r\n        const taskTitle = (0,_createDomElement_js__WEBPACK_IMPORTED_MODULE_2__.createElementDOM)('p', 'task-title', 'task-title-display');\r\n        taskTitle.textContent = title;\r\n        newTask.appendChild(taskTitle);\r\n        \r\n    })();\r\n\r\n    (function moveAddTaskButton() {\r\n        const currentAddTaskButton = taskWrapper.querySelector('#add-task-button');\r\n        const addTaskButtonClone = currentAddTaskButton.cloneNode(true);\r\n        currentAddTaskButton.remove()\r\n        taskWrapper.appendChild(addTaskButtonClone);\r\n    })();\r\n\r\n};\r\n\n\n//# sourceURL=webpack://todo-list-top/./src/modules/createTask.js?");

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