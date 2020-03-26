import {dom} from "./dom.js"
import {createObjectTask, pushToArray, newProject, deleteTask} from "./create.js"
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

let deleteButtons = document.getElementsByClassName("deleteIcon");

function addEventListeners(){
    

//New Task Button
dom.addNewTask.addEventListener("click", function(){
    toggleInvisibility.classList.remove("invisible");
});

//Cancel Task Button
dom.cancelButton.addEventListener("click", function(){
    toggleInvisibility.classList.add("invisible");
});


//Delete Task


//Form Submit
dom.submitButton.addEventListener("click", function(){
    let values = dom.getFormValues();
    let formatedDate = new Date(values.dueDate);//Formats date returned by the input in order to be able to compare it later
    formatedDate.setHours(0,0,0,0);
    const newTask = createObjectTask(values.taskName, values.taskDescription, 
          formatedDate, values.priorityLevel, values.done, values.assignProject);
    pushToArray(newTask, taskArray); 
    render.renderUpdate(activeFilter, arrayToRender, taskArray);
    addDeleteButtonsEvents();
});

function addDeleteButtonsEvents(){
    //Adds click event to newly created delete icons
    deleteButtons = document.getElementsByClassName("deleteIcon");
    for(let i = 0; i < deleteButtons.length; i++){
        deleteButtons[i].addEventListener("click", function(e){
            let value = e.currentTarget;
            taskArray = deleteTask(value.id, taskArray);
            render.renderUpdate(activeFilter, arrayToRender, taskArray);
            addDeleteButtonsEvents();
        });
    }
}


//Projects
dom.check.addEventListener("click", function(){
    let projName = dom.getProjectName();
    const newProj = newProject(projName);
    pushToArray(newProj, projectArray);
    render.projArray(projectArray);
    render.projDropBox(projectArray);
});



//Filters
dom.allTasks.addEventListener("click", function(){
    arrayToRender = taskArray;
    render.renderMainDisplay(arrayToRender);
    activeFilter = "showAll";
    addDeleteButtonsEvents();
});

dom.todayFilter.addEventListener("click", function(){
    arrayToRender = filterEl.todayFilter(taskArray);
    render.renderMainDisplay(arrayToRender);
    activeFilter = "today";
    addDeleteButtonsEvents();
});

dom.thisWeekFilter.addEventListener("click", function(){
    arrayToRender = filterEl.thisWeekFilter(taskArray);
    render.renderMainDisplay(arrayToRender);
    activeFilter = "thisWeek";
    addDeleteButtonsEvents();
});

dom.behindSchedule.addEventListener("click", function(){
    arrayToRender = filterEl.behindSchedule(taskArray);
    render.renderMainDisplay(arrayToRender);
    activeFilter = "behindSchedule";
    addDeleteButtonsEvents();
});

dom.highFilter.addEventListener("click", function(){
    arrayToRender = filterEl.highFilter(taskArray);
    render.renderMainDisplay(arrayToRender);
    activeFilter = "high";
    addDeleteButtonsEvents();
});

dom.mediumFilter.addEventListener("click", function(){
    arrayToRender = filterEl.mediumFilter(taskArray);
    render.renderMainDisplay(arrayToRender);
    activeFilter = "medium";
    addDeleteButtonsEvents();
});

dom.lowFilter.addEventListener("click", function(){
    arrayToRender = filterEl.lowFilter(taskArray);
    render.renderMainDisplay(arrayToRender);
    activeFilter = "low";
    addDeleteButtonsEvents();
});


//Search Bar
dom.searchInput.addEventListener("keyup", function(){
    const arrayToRender = search.searchBar(dom.searchInput.value, taskArray);
    render.renderMainDisplay(arrayToRender);
    addDeleteButtonsEvents();
})

}
export {addEventListeners, taskArray, projectArray};