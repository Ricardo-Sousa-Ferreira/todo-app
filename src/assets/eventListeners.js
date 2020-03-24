import {dom, getFormValues} from "./dom.js"
import {createObjectTask} from "./newTaskObject.js"

function addEventListeners(){
//New Task Button
dom.addNewTask.addEventListener("click", function(){
    toggleInvisibility.classList.remove("invisible");
});

//Cancel Task Button
dom.cancelButton.addEventListener("click", function(){
    toggleInvisibility.classList.add("invisible");
});

}

//Form Submit
dom.submitButton.addEventListener("click", function(){
    let values = dom.getFormValues();
    console.log(values.taskName);
})



export {addEventListeners};