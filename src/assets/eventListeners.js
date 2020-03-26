import {dom} from "./dom.js"
import {createObjectTask, pushToArray, newProject} from "./create.js"
import {render} from "./render.js"
import {filterEl} from "./filters.js"
import {search} from "./search.js";

let taskArray = [];
let projectArray = [{
    projName: "Default",
    projId:0
}];

let arrayToRender=[]

let activeFilter = "showAll";

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
    pushToArray(newTask, taskArray); 
    
    switch(activeFilter){
        case "showAll":
            arrayToRender = taskArray;
            break;
        case "today":
            arrayToRender = filterEl.todayFilter(taskArray);
            break;
        case "thisWeek":
            arrayToRender = filterEl.thisWeekFilter(taskArray);
            break;
        case "behindSchedule":
            arrayToRender = filterEl.behindSchedule(taskArray);
            break;
        case "high":
            arrayToRender = filterEl.highFilter(taskArray);
            break;
        case "medium":
            arrayToRender = filterEl.mediumFilter(taskArray);
            break;
        case "low":
            arrayToRender = filterEl.lowFilter(taskArray);
            break;
    }

    render.renderMainDisplay(arrayToRender);
    const deleteButtons = document.getElementsByClassName("deleteIcon");
    console.log(deleteButtons);
});

//Projects
dom.check.addEventListener("click", function(){
    let projName = dom.getProjectName();
    const newProj = newProject(projName);
    pushToArray(newProj, projectArray);
    render.projArray(projectArray);
    render.projDropBox(projectArray);
});

}

//Filters
dom.allTasks.addEventListener("click", function(){
    arrayToRender = taskArray;
    render.renderMainDisplay(arrayToRender);
    activeFilter = "showAll";
});

dom.todayFilter.addEventListener("click", function(){
    arrayToRender = filterEl.todayFilter(taskArray);
    render.renderMainDisplay(arrayToRender);
    activeFilter = "today";
});

dom.thisWeekFilter.addEventListener("click", function(){
    arrayToRender = filterEl.thisWeekFilter(taskArray);
    render.renderMainDisplay(arrayToRender);
    activeFilter = "thisWeek";
});

dom.behindSchedule.addEventListener("click", function(){
    arrayToRender = filterEl.behindSchedule(taskArray);
    render.renderMainDisplay(arrayToRender);
    activeFilter = "behindSchedule";
});

dom.highFilter.addEventListener("click", function(){
    arrayToRender = filterEl.highFilter(taskArray);
    render.renderMainDisplay(arrayToRender);
    activeFilter = "high";
});

dom.mediumFilter.addEventListener("click", function(){
    arrayToRender = filterEl.mediumFilter(taskArray);
    render.renderMainDisplay(arrayToRender);
    activeFilter = "medium";
});

dom.lowFilter.addEventListener("click", function(){
    arrayToRender = filterEl.lowFilter(taskArray);
    render.renderMainDisplay(arrayToRender);
    activeFilter = "low";
});


//Search Bar
dom.searchInput.addEventListener("keyup", function(){
    const arrayToRender = search.searchBar(dom.searchInput.value, taskArray);
    render.renderMainDisplay(arrayToRender);
})
export {addEventListeners, taskArray, projectArray};