import {dom} from "./dom.js"
import {createObjectTask, pushToArray} from "./create.js"
import {render} from "./render.js"
import {filterEl} from "./filters.js"

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
    let formatedDate = new Date(values.dueDate);//Formats date returned by the input in order to be able to compare it later
    formatedDate.setHours(0,0,0,0);
    const newTask = createObjectTask(values.taskName, values.taskDescription, 
          formatedDate, values.priorityLevel, values.done, values.assignProject);
        console.log(formatedDate);
    pushToArray(newTask, taskArray);  
});

//Filters
dom.allTasks.addEventListener("click", function(){
    render.renderMainDisplay(taskArray);
});

dom.todayFilter.addEventListener("click", function(){
    const arraytoRender = filterEl.todayFilter(taskArray);
    render.renderMainDisplay(arraytoRender);
});

dom.highFilter.addEventListener("click", function(){
    const arraytoRender = filterEl.highFilter(taskArray);
    render.renderMainDisplay(arraytoRender);
});

dom.mediumFilter.addEventListener("click", function(){
    const arraytoRender = filterEl.mediumFilter(taskArray);
    render.renderMainDisplay(arraytoRender);
});

dom.lowFilter.addEventListener("click", function(){
    const arraytoRender = filterEl.lowFilter(taskArray);
    render.renderMainDisplay(arraytoRender);
});

}

export {addEventListeners, taskArray};