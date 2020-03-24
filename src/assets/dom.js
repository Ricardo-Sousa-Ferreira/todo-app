function domElements(){
    //top navbar
    const iconDiv = document.getElementById("iconDiv");
    const quickFind = document.getElementById("quickFind");
    const addNewTask  = document.getElementById("addNewTask");

    //New Task Form
    const toggleInvisibility = document.getElementById("toggleInvisibility");
    const cancelButton = document.getElementById("cancelButton");

    return {iconDiv, quickFind, addNewTask, cancelButton, toggleInvisibility}
}

let dom = domElements();

export {dom};