function domElements(){
    //top navbar
    const iconDiv = document.getElementById("iconDiv");
    const quickFind = document.getElementById("quickFind");
    const addNewTask  = document.getElementById("addNewTask");

    //New Task Form
    const toggleInvisibility = document.getElementById("toggleInvisibility");
    const cancelButton = document.getElementById("cancelButton");
    const submitButton = document.getElementById("submitButton");

    //Form Values
   function getFormValues(){
        const taskName = document.getElementById("taskName").value;
        const taskDescription = document.getElementById("taskDescripion").value;
        const dueDate = document.getElementById("dueDate").value;
        const priorityLevel = document.getElementById("priorityLevel").value;
        const done = document.getElementById("done").value;
        const assignProject = document.getElementById("assignProject").value;

        return {taskName, taskDescription, dueDate, priorityLevel, done, assignProject}
   }

    return {iconDiv, quickFind, addNewTask, cancelButton, toggleInvisibility, submitButton, taskName,  getFormValues}
}

let dom = domElements();

export {dom};