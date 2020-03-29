/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/create.js":
/*!******************************!*\
  !*** ./src/assets/create.js ***!
  \******************************/
/*! exports provided: createObjectTask, pushToArray, newProject, deleteTask, editArrayElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createObjectTask\", function() { return createObjectTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pushToArray\", function() { return pushToArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newProject\", function() { return newProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteTask\", function() { return deleteTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editArrayElement\", function() { return editArrayElement; });\nlet id = 0;\n\nconst createObjectTask = (title, description, dueDate, priority, project) => {\n    id++;\n    return{title,description,dueDate,priority,project, id, status};\n}\n\nconst pushToArray = (newTask, taskArray) => {\n    taskArray.push(newTask);\n}\n\nconst newProject = (projName) => {\n    id++;\n    return{projName, id};\n\n}\n\nconst deleteTask = (deleteId, arr) =>{\n    deleteId = parseInt(deleteId);\n    \n    for(let i = 0; i < arr.length; i++){\n        if(arr[i].id == deleteId) { \n            arr.splice(i,1);\n        }\n    }\n    return arr;\n    \n}\n\nconst editArrayElement = (id, values, arr) => {\n    for(let i = 0; i < arr.length; i++){\n        if(arr[i].id == id) {\n            arr[i].title = values.taskName;\n            arr[i].description = values.taskDescription;\n            arr[i].dueDate = values.dueDate;\n            arr[i]. priority = values.priorityLevel;\n            arr[i].project = values.assignProject;\n        }\n    }     \n    return arr;\n}\n\n\n\n//# sourceURL=webpack:///./src/assets/create.js?");

/***/ }),

/***/ "./src/assets/dom.js":
/*!***************************!*\
  !*** ./src/assets/dom.js ***!
  \***************************/
/*! exports provided: dom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dom\", function() { return dom; });\nfunction domElements(){\n    //top navbar\n    const iconDiv = document.getElementById(\"iconDiv\");\n    const quickFind = document.getElementById(\"quickFind\");\n    const addNewTask  = document.getElementById(\"addNewTask\");\n\n    //New Task Form\n    const toggleInvisibility = document.getElementById(\"toggleInvisibility\");\n    const cancelButton = document.getElementById(\"cancelButton\");\n    const submitButton = document.getElementById(\"submitButton\");\n    const editButtonForm = document.getElementById(\"editButtonForm\");\n    //Main Display\n    const rightCol = document.getElementById(\"rightCol\");\n\n    function createDiv(){\n        const newDiv = document.createElement(\"div\");\n        return newDiv;\n    }\n\n    //Filters\n    const allTasks = document.getElementById(\"allTasks\");\n    const todayFilter = document.getElementById(\"todayFilter\");\n    const thisWeekFilter = document.getElementById(\"thisWeekFilter\");\n    const behindSchedule = document.getElementById(\"behindSchedule\");\n    const highFilter = document.getElementById(\"highFilter\");\n    const mediumFilter = document.getElementById(\"mediumFilter\");\n    const lowFilter = document.getElementById(\"lowFilter\");\n\n    \n\n    //New Project\n    const newProject = document.getElementById(\"newProject\");\n    const check = document.getElementById(\"check\");\n    const projectList = document.getElementById(\"projectList\");\n    const assignProject = document.getElementById(\"assignProject\");\n\n    function getProjectName(){\n        const newProjectName = document.getElementById(\"newProject\").value;\n        return newProjectName;\n    }\n\n    //Search Bar\n    const searchInput = document.getElementById(\"quickSearch\");\n\n    //Form Values\n    function getFormValues(){\n        const taskName = document.getElementById(\"taskName\").value;\n        const taskDescription = document.getElementById(\"taskDescription\").value;\n        const dueDate = document.getElementById(\"dueDate\").value;\n        const priorityLevel = document.getElementById(\"priorityLevel\").value;\n        const assignProject = document.getElementById(\"assignProject\").value;\n\n        return {taskName, taskDescription, dueDate, priorityLevel, assignProject}\n    }\n\n    return {iconDiv, quickFind, addNewTask, cancelButton, toggleInvisibility, submitButton, taskName, \n            rightCol, highFilter, mediumFilter, lowFilter, allTasks, todayFilter, thisWeekFilter,behindSchedule,\n            newProject, check, projectList, assignProject, searchInput, editButtonForm, getFormValues, createDiv, getProjectName}\n}\n\nlet dom = domElements();\n\n\n\n//# sourceURL=webpack:///./src/assets/dom.js?");

/***/ }),

/***/ "./src/assets/eventListeners.js":
/*!**************************************!*\
  !*** ./src/assets/eventListeners.js ***!
  \**************************************/
/*! exports provided: addEventListeners, taskArray, projectArray, onLoad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addEventListeners\", function() { return addEventListeners; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskArray\", function() { return taskArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectArray\", function() { return projectArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onLoad\", function() { return onLoad; });\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/assets/dom.js\");\n/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.js */ \"./src/assets/create.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render.js */ \"./src/assets/render.js\");\n/* harmony import */ var _filters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filters.js */ \"./src/assets/filters.js\");\n/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search.js */ \"./src/assets/search.js\");\n\n\n\n\n\n\nlet taskArray = [];\nlet projectArray = [{\n    projName: \"Default\",\n    id:0\n}];\n\nconst onLoad = () => {\n    if (localStorage.taskArrayLocal) {\n        taskArray = JSON.parse(localStorage.getItem('taskArrayLocal'));\n    }\n    if(localStorage.projectArrayLocal){\n        projectArray = JSON.parse(localStorage.getItem('projectArrayLocal'));\n    }\n}\n    \nlet arrayToRender=[]\n\nlet activeFilter = \"showAll\";\nlet activeFilterAux;\nlet deleteButtons = document.getElementsByClassName(\"deleteIcon\");\nlet editButtons = document.getElementsByClassName(\"editIcon\");\nlet deleteIcon = document.getElementsByClassName(\"projDeleteIcon\");\nlet projectsList = document.getElementsByClassName(\"projectsDisplay\");\n\nfunction addEventListeners(){ \n\naddEventLis();\n\n//New Task Button\n_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].addNewTask.addEventListener(\"click\", function(){\n    toggleInvisibility.classList.remove(\"invisible\");\n    submitButton.classList.remove(\"invisible\");\n    editButtonForm.classList.add(\"invisible\");\n});\n\n//Cancel Task Button\n_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].cancelButton.addEventListener(\"click\", function(){\n    toggleInvisibility.classList.add(\"invisible\");\n});\n\n//Form Submit\n_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].submitButton.addEventListener(\"click\", function(){\n    let values = _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].getFormValues();\n    values.status = false;\n    if(values.taskName === \"\"){\n        alert(\"Please Insert a valid name\")\n        return;\n    }\n    let formatedDate = new Date(values.dueDate);//Formats date returned by the input in order to be able to compare it later\n    formatedDate.setHours(0,0,0,0);\n    const newTask = Object(_create_js__WEBPACK_IMPORTED_MODULE_1__[\"createObjectTask\"])(values.taskName, values.taskDescription, \n          formatedDate, values.priorityLevel, values.assignProject);\n    Object(_create_js__WEBPACK_IMPORTED_MODULE_1__[\"pushToArray\"])(newTask, taskArray); \n    _render_js__WEBPACK_IMPORTED_MODULE_2__[\"render\"].renderUpdate(activeFilter, arrayToRender, taskArray, activeFilterAux);\n    addEventLis();\n    \n    \n});\n\nfunction addEventLis(){\n    addDeleteButtonsEvents();\n    addEditButtonsEvents();\n    addDoneTaskEvent();\n    addProjectFilters();\n    addDeleteIconEvents();\n    localStorage.setItem('taskArrayLocal', JSON.stringify(taskArray));\n    localStorage.setItem('projectArrayLocal', JSON.stringify(projectArray));\n    console.log(localStorage);\n    console.log(projectArray);\n}\n//Delete Buttons\nfunction addDeleteButtonsEvents(){\n    //Adds click event to newly created delete icons\n    deleteButtons = document.getElementsByClassName(\"deleteIcon\");\n    for(let i = 0; i < deleteButtons.length; i++){\n        deleteButtons[i].addEventListener(\"click\", function(e){\n            let value = e.currentTarget;\n            taskArray = Object(_create_js__WEBPACK_IMPORTED_MODULE_1__[\"deleteTask\"])(value.id, taskArray);\n            _render_js__WEBPACK_IMPORTED_MODULE_2__[\"render\"].renderUpdate(activeFilter, arrayToRender, taskArray);\n            addEventLis();\n        });\n    }\n}\n\nfunction addDoneTaskEvent(){\n    let taskDisplay = document.getElementsByClassName(\"displayMain\");\n    for(let i=0; i<taskDisplay.length; i++){\n        taskDisplay[i].addEventListener(\"click\", function (e){\n            e.currentTarget.classList.toggle(\"lineThrough\");\n            let clickId = parseInt(e.currentTarget.id);\n            for(let i = 0; i < taskArray.length; i++){\n                if(taskArray[i].id == clickId) { \n                    taskArray[i].status = taskArray[i].status === true ? false : true; \n                }\n            }\n        })\n    }\n\n}\n\nfunction addEditButtonsEvents(){\n    editButtons = document.getElementsByClassName(\"editIcon\");\n    for(let i = 0; i < editButtons.length; i++){\n        editButtons[i].addEventListener(\"click\", function(e){\n            let value = e.currentTarget;\n            _render_js__WEBPACK_IMPORTED_MODULE_2__[\"render\"].renderEdit(value.id, taskArray);\n            addEventLis();\n        })\n    }\n}\n\nfunction addProjectFilters(){\n    projectsList = document.getElementsByClassName(\"projectsDisplay\");\n    for(let i = 0; i < projectsList.length; i++){\n        projectsList[i].addEventListener(\"click\", function(e){\n            activeFilterAux = e.currentTarget.textContent;\n            activeFilter = e.currentTarget.textContent;\n            arrayToRender = _filters_js__WEBPACK_IMPORTED_MODULE_3__[\"filterEl\"].projectFilter(taskArray, activeFilter);\n            _render_js__WEBPACK_IMPORTED_MODULE_2__[\"render\"].renderMainDisplay(arrayToRender);\n            addEventLis();\n        })\n    }\n}\n\n//Edit Submit\n_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].editButtonForm.addEventListener(\"click\", function(){\n    let values = _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].getFormValues();\n    let idToEdit = _render_js__WEBPACK_IMPORTED_MODULE_2__[\"taskToEdit\"].id;\n    taskArray = Object(_create_js__WEBPACK_IMPORTED_MODULE_1__[\"editArrayElement\"])(idToEdit, values, taskArray);\n    _render_js__WEBPACK_IMPORTED_MODULE_2__[\"render\"].renderUpdate(activeFilter, arrayToRender, taskArray);\n    addEventLis();\n});\n\n//Projects\n_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].check.addEventListener(\"click\", function(){\n    let projName = _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].getProjectName();\n    //checks empty project name\n    if(projName === \"\"){\n        alert(\"Please insert a valid project name\")\n        return\n    }\n\n    //checks duplicate name\n    for(let i = 0; i < projectArray.length; i++){\n        console.log(projectArray[i].projName);\n        if(projName === projectArray[i].projName){\n            return;\n        }\n    }\n    const newProj = Object(_create_js__WEBPACK_IMPORTED_MODULE_1__[\"newProject\"])(projName);\n    Object(_create_js__WEBPACK_IMPORTED_MODULE_1__[\"pushToArray\"])(newProj, projectArray);\n    _render_js__WEBPACK_IMPORTED_MODULE_2__[\"render\"].projArray(projectArray);\n    _render_js__WEBPACK_IMPORTED_MODULE_2__[\"render\"].projDropBox(projectArray);\n    addDeleteIconEvents();\n    addProjectFilters();\n    localStorage.setItem('projectArrayLocal', JSON.stringify(projectArray));\n    \n});\n\nfunction addDeleteIconEvents(){\n    deleteIcon = document.getElementsByClassName(\"projDeleteIcon\");\n    for(let i=0; i < deleteIcon.length; i++){\n        deleteIcon[i].addEventListener(\"click\", function(e){\n            let value = e.currentTarget;\n            projectArray = Object(_create_js__WEBPACK_IMPORTED_MODULE_1__[\"deleteTask\"])(value.id, projectArray);\n            console.log(projectArray);\n            _render_js__WEBPACK_IMPORTED_MODULE_2__[\"render\"].projArray(projectArray);\n            _render_js__WEBPACK_IMPORTED_MODULE_2__[\"render\"].projDropBox(projectArray);\n            addDeleteIconEvents()\n        })\n    }\n}\n\n//Filters\n_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].allTasks.addEventListener(\"click\", function(){\n    arrayToRender = taskArray;\n    _render_js__WEBPACK_IMPORTED_MODULE_2__[\"render\"].renderMainDisplay(arrayToRender);\n    activeFilter = \"showAll\";\n    addEventLis();\n});\n\n_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].todayFilter.addEventListener(\"click\", function(){\n    arrayToRender = _filters_js__WEBPACK_IMPORTED_MODULE_3__[\"filterEl\"].todayFilter(taskArray);\n    _render_js__WEBPACK_IMPORTED_MODULE_2__[\"render\"].renderMainDisplay(arrayToRender);\n    activeFilter = \"today\";\n    addEventLis();\n});\n\n_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].thisWeekFilter.addEventListener(\"click\", function(){\n    arrayToRender = _filters_js__WEBPACK_IMPORTED_MODULE_3__[\"filterEl\"].thisWeekFilter(taskArray);\n    _render_js__WEBPACK_IMPORTED_MODULE_2__[\"render\"].renderMainDisplay(arrayToRender);\n    activeFilter = \"thisWeek\";\n    addEventLis();\n});\n\n_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].behindSchedule.addEventListener(\"click\", function(){\n    arrayToRender = _filters_js__WEBPACK_IMPORTED_MODULE_3__[\"filterEl\"].behindSchedule(taskArray);\n    _render_js__WEBPACK_IMPORTED_MODULE_2__[\"render\"].renderMainDisplay(arrayToRender);\n    activeFilter = \"behindSchedule\";\n    addEventLis();\n});\n\n_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].highFilter.addEventListener(\"click\", function(){\n    arrayToRender = _filters_js__WEBPACK_IMPORTED_MODULE_3__[\"filterEl\"].highFilter(taskArray);\n    _render_js__WEBPACK_IMPORTED_MODULE_2__[\"render\"].renderMainDisplay(arrayToRender);\n    activeFilter = \"high\";\n    addEventLis();\n});\n\n_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].mediumFilter.addEventListener(\"click\", function(){\n    arrayToRender = _filters_js__WEBPACK_IMPORTED_MODULE_3__[\"filterEl\"].mediumFilter(taskArray);\n    _render_js__WEBPACK_IMPORTED_MODULE_2__[\"render\"].renderMainDisplay(arrayToRender);\n    activeFilter = \"medium\";\n    addEventLis();\n});\n\n_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].lowFilter.addEventListener(\"click\", function(){\n    arrayToRender = _filters_js__WEBPACK_IMPORTED_MODULE_3__[\"filterEl\"].lowFilter(taskArray);\n    _render_js__WEBPACK_IMPORTED_MODULE_2__[\"render\"].renderMainDisplay(arrayToRender);\n    activeFilter = \"low\";\n    addEventLis();\n});\n\n\n//Search Bar\n_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].searchInput.addEventListener(\"keyup\", function(){\n    const arrayToRender = _search_js__WEBPACK_IMPORTED_MODULE_4__[\"search\"].searchBar(_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].searchInput.value, taskArray);\n    _render_js__WEBPACK_IMPORTED_MODULE_2__[\"render\"].renderMainDisplay(arrayToRender);\n    addEventLis();\n})\n\n}\n\n\n//# sourceURL=webpack:///./src/assets/eventListeners.js?");

/***/ }),

/***/ "./src/assets/filters.js":
/*!*******************************!*\
  !*** ./src/assets/filters.js ***!
  \*******************************/
/*! exports provided: filterEl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterEl\", function() { return filterEl; });\nfunction filterElements(){\n    \n    function highFilter(taskArray){\n        const filtered = taskArray.filter(task => \n            task.priority === \"high\");\n        return filtered;\n    }\n\n    function mediumFilter(taskArray){\n        const filtered = taskArray.filter(task => \n            task.priority === \"medium\");\n        return filtered;\n    }\n\n    function lowFilter(taskArray){\n        const filtered = taskArray.filter(task => \n            task.priority === \"low\");\n        return filtered;\n    }\n\n    function todayFilter(taskArray){\n        let today = new Date();\n        today.setHours(0,0,0,0);\n        const filtered = taskArray.filter(task =>\n            task.dueDate.getTime() === today.getTime());\n        return filtered;\n    }\n\n    function thisWeekFilter(taskArray){\n        let today = new Date();\n        today.setHours(0,0,0,0);\n        let sixFromNow = new Date();\n        sixFromNow.setDate(sixFromNow.getDate()+6);\n        sixFromNow.setHours(0,0,0,0);\n\n        const filtered = taskArray.filter(task =>\n            (task.dueDate.getTime() >= today.getTime()) && (task.dueDate.getTime() <= sixFromNow.getTime()));\n        return filtered;\n    }\n\n    function projectFilter(taskArray, activeProject){\n        const filtered = taskArray.filter(task =>\n            task.project === activeProject);\n            return filtered;\n    }\n\n    function behindSchedule(taskArray){\n        let today = new Date();\n        today.setHours(0,0,0,0);\n\n        const filtered = taskArray.filter(task =>\n            task.dueDate.getTime() < today.getTime());\n        return filtered;\n    }\n\n\n    return {highFilter, mediumFilter, lowFilter, todayFilter, thisWeekFilter, behindSchedule, projectFilter}\n}\n\nconst filterEl = filterElements();\n\n\n\n//# sourceURL=webpack:///./src/assets/filters.js?");

/***/ }),

/***/ "./src/assets/render.js":
/*!******************************!*\
  !*** ./src/assets/render.js ***!
  \******************************/
/*! exports provided: render, taskToEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskToEdit\", function() { return taskToEdit; });\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/assets/dom.js\");\n/* harmony import */ var _filters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters.js */ \"./src/assets/filters.js\");\n\n\n\n\nlet taskToEdit;\n\nfunction renderElements(){\n    \n\n    function renderMainDisplay(arr){\n        let padron = 1;\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].rightCol.innerText = \"\";\n        arr.forEach(element => {\n            const newDiv = _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].createDiv();\n            const titleDiv = _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].createDiv();\n            const dueDateDiv = _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].createDiv();\n            const buttonsDiv = _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].createDiv();\n            const deleteDiv = _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].createDiv();\n            const editDiv = _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].createDiv();\n\n            titleDiv.innerHTML = element.title;\n            if(element.dueDate != \"Invalid Date\" && element.dueDate != null){\n                let date = new Date(element.dueDate);\n                dueDateDiv.innerHTML =  ('0' + date.getDate()).slice(-2)+ '-' + ('0' + (date.getMonth()+1)).slice(-2) + '-'\n                + date.getFullYear();\n            }\n            if(element.status === true){\n                newDiv.classList.add(\"lineThrough\");\n            }\n           \n            deleteDiv.innerHTML = '<i class=\"fas fa-trash-alt\"></i>';\n            editDiv.innerHTML = '<i class=\"fas fa-edit\"></i>'\n\n            newDiv.classList.add(\"displayMain\");\n            titleDiv.classList.add(\"displayMainTask\");\n            dueDateDiv.classList.add(\"displayMainTask\");\n            deleteDiv.classList.add(\"roundIcon\",\"red\",\"deleteIcon\",\"shake\");\n            editDiv.classList.add(\"roundIcon\", \"yellow\", \"editIcon\", \"shake\");\n            buttonsDiv.classList.add(\"taskButtons\");\n\n            if(padron % 2 === 0){\n                newDiv.classList.add(\"padron\");\n            }\n            padron++\n\n            deleteDiv.setAttribute(\"id\", element.id);\n            editDiv.setAttribute(\"id\", element.id);\n            newDiv.setAttribute(\"id\", element.id);\n\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].rightCol.appendChild(newDiv);\n            newDiv.appendChild(titleDiv);\n            newDiv.appendChild(dueDateDiv);\n            buttonsDiv.appendChild(editDiv);\n            buttonsDiv.appendChild(deleteDiv);\n            newDiv.appendChild(buttonsDiv);      \n        });\n\n        \n    }\n\n    function projArray(arr){\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].projectList.innerText = \"\";\n        arr.forEach(element => {\n            const projContainer = _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].createDiv();\n            const newDiv = _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].createDiv();\n            const projDeleteIcon = _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].createDiv();\n            newDiv.innerHTML = element.projName;\n            \n            projContainer.classList.add(\"projContainer\")\n            newDiv.classList.add(\"projectsDisplay\");\n            projDeleteIcon.innerHTML = '<i class=\"fas fa-trash-alt\"></i>';\n            projDeleteIcon.classList.add(\"roundIcon\",\"red\",\"projDeleteIcon\",\"shake\");\n            projDeleteIcon.setAttribute(\"id\", element.id);\n            projContainer.appendChild(newDiv);\n            if(element.projName !== \"Default\"){\n                projContainer.appendChild(projDeleteIcon);\n            }\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].projectList.appendChild(projContainer);\n        })\n    }\n\n    function projDropBox(arr){\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].assignProject.innerText = \"\";\n        arr.forEach(element => {\n            const newOption = document.createElement(\"option\");\n            newOption.value = element.projName;\n            newOption.textContent = element.projName;\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].assignProject.appendChild(newOption);\n        })\n    }\n\n    function renderUpdate(activeFilter, arrayToRender, taskArray, activeFilterAux){\n        switch(activeFilter){\n            case \"showAll\":\n                arrayToRender = taskArray;\n                break;\n            case \"today\":\n                arrayToRender = _filters_js__WEBPACK_IMPORTED_MODULE_1__[\"filterEl\"].todayFilter(taskArray);\n                break;\n            case \"thisWeek\":\n                arrayToRender = _filters_js__WEBPACK_IMPORTED_MODULE_1__[\"filterEl\"].thisWeekFilter(taskArray);\n                break;\n            case \"behindSchedule\":\n                arrayToRender = _filters_js__WEBPACK_IMPORTED_MODULE_1__[\"filterEl\"].behindSchedule(taskArray);\n                break;\n            case \"high\":\n                arrayToRender = _filters_js__WEBPACK_IMPORTED_MODULE_1__[\"filterEl\"].highFilter(taskArray);\n                break;\n            case \"medium\":\n                arrayToRender = _filters_js__WEBPACK_IMPORTED_MODULE_1__[\"filterEl\"].mediumFilter(taskArray);\n                break;\n            case \"low\":\n                arrayToRender = _filters_js__WEBPACK_IMPORTED_MODULE_1__[\"filterEl\"].lowFilter(taskArray);\n                break;\n            case activeFilterAux:\n                arrayToRender = _filters_js__WEBPACK_IMPORTED_MODULE_1__[\"filterEl\"].projectFilter(taskArray, activeFilter);\n                break;\n\n        }\n    \n        renderMainDisplay(arrayToRender);\n\n    }\n\n    function renderEdit(clickedId, arr){\n        //toggles buttons\n        toggleInvisibility.classList.remove(\"invisible\");\n        submitButton.classList.add(\"invisible\");\n        editButtonForm.classList.remove(\"invisible\");\n        clickedId = parseInt(clickedId);\n        for(let i = 0; i < arr.length; i++){\n            if(arr[i].id == clickedId) {\n                taskToEdit = arr[i];\n                break;\n            }\n        }        \n        taskName.value = taskToEdit.title;\n        taskDescription.value = taskToEdit.description;\n        //formats date\n        let date = new Date(taskToEdit.dueDate);\n        let myDateString = date.getFullYear() + '-' + ('0' + (date.getMonth()+1)).slice(-2) + '-'\n             + ('0' + date.getDate()).slice(-2);\n        dueDate.value = myDateString;\n        priorityLevel.value = taskToEdit.priority;\n        assignProject.value = taskToEdit.project;\n        \n    }\n\n\n    return{renderMainDisplay, projArray, projDropBox, renderUpdate, renderEdit}\n}\n\n\n\nconst render = renderElements();\n\n\n\n//# sourceURL=webpack:///./src/assets/render.js?");

/***/ }),

/***/ "./src/assets/search.js":
/*!******************************!*\
  !*** ./src/assets/search.js ***!
  \******************************/
/*! exports provided: search, searchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"search\", function() { return search; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchModule\", function() { return searchModule; });\nfunction searchModule(){\n\n    function searchBar(value, taskArray){\n      value = value.toLowerCase();\n      \n    const filtered = taskArray.filter(task =>\n    task.title.toLowerCase().includes(value));\n    return filtered;\n    }\n\n    \n    return{searchBar}\n}\n\n\n\nconst search = searchModule();\n\n\n\n//# sourceURL=webpack:///./src/assets/search.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/eventListeners.js */ \"./src/assets/eventListeners.js\");\n/* harmony import */ var _assets_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/render.js */ \"./src/assets/render.js\");\n\n\n\nObject(_assets_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__[\"onLoad\"])();\n_assets_render_js__WEBPACK_IMPORTED_MODULE_1__[\"render\"].renderMainDisplay(_assets_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__[\"taskArray\"]);\n_assets_render_js__WEBPACK_IMPORTED_MODULE_1__[\"render\"].projArray(_assets_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__[\"projectArray\"]);\n_assets_render_js__WEBPACK_IMPORTED_MODULE_1__[\"render\"].projDropBox(_assets_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__[\"projectArray\"]);\nObject(_assets_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__[\"addEventListeners\"])();\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });