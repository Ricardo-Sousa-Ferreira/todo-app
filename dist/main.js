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
/*! exports provided: createObjectTask, pushToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createObjectTask\", function() { return createObjectTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pushToArray\", function() { return pushToArray; });\nlet id = 0;\n\nconst createObjectTask = (title, description, dueDate, priority, checkStatus, project) => {\n    id++;\n    return{title,description,dueDate,priority,checkStatus,project, id};\n}\n\nconst pushToArray = (newTask, taskArray) => {\n    taskArray.push(newTask);\n    window.localStorage.setItem(id, JSON.stringify(taskArray));\n}\n\n\n\n//# sourceURL=webpack:///./src/assets/create.js?");

/***/ }),

/***/ "./src/assets/dom.js":
/*!***************************!*\
  !*** ./src/assets/dom.js ***!
  \***************************/
/*! exports provided: dom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dom\", function() { return dom; });\nfunction domElements(){\n    //top navbar\n    const iconDiv = document.getElementById(\"iconDiv\");\n    const quickFind = document.getElementById(\"quickFind\");\n    const addNewTask  = document.getElementById(\"addNewTask\");\n\n    //New Task Form\n    const toggleInvisibility = document.getElementById(\"toggleInvisibility\");\n    const cancelButton = document.getElementById(\"cancelButton\");\n    const submitButton = document.getElementById(\"submitButton\");\n\n    //Form Values\n   function getFormValues(){\n        const taskName = document.getElementById(\"taskName\").value;\n        const taskDescription = document.getElementById(\"taskDescription\").value;\n        const dueDate = document.getElementById(\"dueDate\").value;\n        const priorityLevel = document.getElementById(\"priorityLevel\").value;\n        const done = document.getElementById(\"done\").value;\n        const assignProject = document.getElementById(\"assignProject\").value;\n\n        return {taskName, taskDescription, dueDate, priorityLevel, done, assignProject}\n   }\n\n    return {iconDiv, quickFind, addNewTask, cancelButton, toggleInvisibility, submitButton, taskName,  getFormValues}\n}\n\nlet dom = domElements();\n\n\n\n//# sourceURL=webpack:///./src/assets/dom.js?");

/***/ }),

/***/ "./src/assets/eventListeners.js":
/*!**************************************!*\
  !*** ./src/assets/eventListeners.js ***!
  \**************************************/
/*! exports provided: addEventListeners, taskArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addEventListeners\", function() { return addEventListeners; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskArray\", function() { return taskArray; });\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/assets/dom.js\");\n/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.js */ \"./src/assets/create.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render.js */ \"./src/assets/render.js\");\n\n\n\n\nlet taskArray = [];\n\nfunction addEventListeners(){\n    \n\n//New Task Button\n_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].addNewTask.addEventListener(\"click\", function(){\n    toggleInvisibility.classList.remove(\"invisible\");\n});\n\n//Cancel Task Button\n_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].cancelButton.addEventListener(\"click\", function(){\n    // toggleInvisibility.classList.add(\"invisible\");\n    _render_js__WEBPACK_IMPORTED_MODULE_2__[\"render\"].renderMainDisplay();\n});\n\n\n//Form Submit\n_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].submitButton.addEventListener(\"click\", function(){\n    let values = _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"dom\"].getFormValues();\n    const newTask = Object(_create_js__WEBPACK_IMPORTED_MODULE_1__[\"createObjectTask\"])(values.taskName, values.taskDescription, \n    values.dueDate, values.priorityLevel, values.done, values.assignProject);\n\n    Object(_create_js__WEBPACK_IMPORTED_MODULE_1__[\"pushToArray\"])(newTask, taskArray);  \n});\n\n}\n\n\n\n//# sourceURL=webpack:///./src/assets/eventListeners.js?");

/***/ }),

/***/ "./src/assets/render.js":
/*!******************************!*\
  !*** ./src/assets/render.js ***!
  \******************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListeners.js */ \"./src/assets/eventListeners.js\");\n\n\nfunction renderElements(){\n\n    function renderMainDisplay(){\n        _eventListeners_js__WEBPACK_IMPORTED_MODULE_0__[\"taskArray\"].forEach(element =>\n            console.log(element)\n        )\n    }\n    return{renderMainDisplay}\n}\n\nconst render = renderElements();\n\n\n\n//# sourceURL=webpack:///./src/assets/render.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/eventListeners.js */ \"./src/assets/eventListeners.js\");\n\n\nObject(_assets_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__[\"addEventListeners\"])();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });