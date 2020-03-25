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
    }

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

    return {iconDiv, quickFind, addNewTask, cancelButton, toggleInvisibility, submitButton, taskName, rightCol,  getFormValues, createDiv}
}

let dom = domElements();

export {dom};