import {dom} from "./dom.js"
import {createObjectTask, pushToArray} from "./create.js"
import {render} from "./render.js"

let taskArray = [];

function addEventListeners(){
    

//New Task Button
dom.addNewTask.addEventListener("click", function(){
    toggleInvisibility.classList.remove("invisible");
});

//Cancel Task Button
dom.cancelButton.addEventListener("click", function(){
    toggleInvisibility.classList.add("invisible");
});


//Form Submit
dom.submitButton.addEventListener("click", function(){
    let values = dom.getFormValues();
    const newTask = createObjectTask(values.taskName, values.taskDescription, 
    values.dueDate, values.priorityLevel, values.done, values.assignProject);

    pushToArray(newTask, taskArray);  
});

}

export {addEventListeners, taskArray};