function domElements(){
    //top navbar
    const iconDiv = document.getElementById("iconDiv");
    const quickFind = document.getElementById("quickFind");
    const addNewTask  = document.getElementById("addNewTask");

    //New Task Form
    const toggleInvisibility = document.getElementById("toggleInvisibility");
    const cancelButton = document.getElementById("cancelButton");
    const submitButton = document.getElementById("submitButton");

    //Main Display
    const rightCol = document.getElementById("rightCol");

    function createDiv(){
        const newDiv = document.createElement("div");
        return newDiv;
    }

    //Filters
    const allTasks = document.getElementById("allTasks");
    const todayFilter = document.getElementById("todayFilter");
    const thisWeekFilter = document.getElementById("thisWeekFilter");
    const behindSchedule = document.getElementById("behindSchedule");
    const highFilter = document.getElementById("highFilter");
    const mediumFilter = document.getElementById("mediumFilter");
    const lowFilter = document.getElementById("lowFilter");

    //New Project
    const newProject = document.getElementById("newProject");
    const check = document.getElementById("check");
    const projectList = document.getElementById("projectList");
    const assignProject = document.getElementById("assignProject");

    function getProjectName(){
        const newProjectName = document.getElementById("newProject").value;
        return newProjectName;
    }

    //Search Bar
    const searchInput = document.getElementById("quickSearch");

    //Form Values
    function getFormValues(){
        const taskName = document.getElementById("taskName").value;
        const taskDescription = document.getElementById("taskDescription").value;
        const dueDate = document.getElementById("dueDate").value;
        const priorityLevel = document.getElementById("priorityLevel").value;
        const done = document.getElementById("done").value;
        const assignProject = document.getElementById("assignProject").value;

        return {taskName, taskDescription, dueDate, priorityLevel, done, assignProject}
    }

    return {iconDiv, quickFind, addNewTask, cancelButton, toggleInvisibility, submitButton, taskName, 
            rightCol, highFilter, mediumFilter, lowFilter, allTasks, todayFilter, thisWeekFilter,behindSchedule,
            newProject, check, projectList, assignProject, searchInput, getFormValues, createDiv, getProjectName}
}

let dom = domElements();

export {dom};