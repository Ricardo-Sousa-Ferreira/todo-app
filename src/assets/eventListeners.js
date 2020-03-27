import {dom} from "./dom.js"
import {createObjectTask, pushToArray, newProject, deleteTask, editArrayElement} from "./create.js"
import {render, taskToEdit} from "./render.js"
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
let editButtons = document.getElementsByClassName("editIcon");

function addEventListeners(){
    

//New Task Button
dom.addNewTask.addEventListener("click", function(){
    toggleInvisibility.classList.remove("invisible");
    submitButton.classList.remove("invisible");
    editButtonForm.classList.add("invisible");
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
    render.renderUpdate(activeFilter, arrayToRender, taskArray);
    addEventLis();
});

function addEventLis(){
    addDeleteButtonsEvents();
    addEditButtonsEvents();
}
//Delete Buttons
function addDeleteButtonsEvents(){
    //Adds click event to newly created delete icons
    deleteButtons = document.getElementsByClassName("deleteIcon");
    for(let i = 0; i < deleteButtons.length; i++){
        deleteButtons[i].addEventListener("click", function(e){
            let value = e.currentTarget;
            taskArray = deleteTask(value.id, taskArray);
            render.renderUpdate(activeFilter, arrayToRender, taskArray);
            addEventLis();
        });
    }
}

function addEditButtonsEvents(){
    editButtons = document.getElementsByClassName("editIcon");
    for(let i = 0; i < editButtons.length; i++){
        editButtons[i].addEventListener("click", function(e){
            let value = e.currentTarget;
            render.renderEdit(value.id, taskArray);
            addEventLis();
        })
    }
}

//Edit Submit
dom.editButtonForm.addEventListener("click", function(){
    let values = dom.getFormValues();
    console.log(values)
    let idToEdit = taskToEdit.id;
    taskArray = editArrayElement(idToEdit, values, taskArray);
    render.renderUpdate(activeFilter, arrayToRender, taskArray);
    addEventLis();
});

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
    addEventLis();
});

dom.todayFilter.addEventListener("click", function(){
    arrayToRender = filterEl.todayFilter(taskArray);
    render.renderMainDisplay(arrayToRender);
    activeFilter = "today";
    addEventLis();
});

dom.thisWeekFilter.addEventListener("click", function(){
    arrayToRender = filterEl.thisWeekFilter(taskArray);
    render.renderMainDisplay(arrayToRender);
    activeFilter = "thisWeek";
    addEventLis();
});

dom.behindSchedule.addEventListener("click", function(){
    arrayToRender = filterEl.behindSchedule(taskArray);
    render.renderMainDisplay(arrayToRender);
    activeFilter = "behindSchedule";
    addEventLis();
});

dom.highFilter.addEventListener("click", function(){
    arrayToRender = filterEl.highFilter(taskArray);
    render.renderMainDisplay(arrayToRender);
    activeFilter = "high";
    addEventLis();
});

dom.mediumFilter.addEventListener("click", function(){
    arrayToRender = filterEl.mediumFilter(taskArray);
    render.renderMainDisplay(arrayToRender);
    activeFilter = "medium";
    addEventLis();
});

dom.lowFilter.addEventListener("click", function(){
    arrayToRender = filterEl.lowFilter(taskArray);
    render.renderMainDisplay(arrayToRender);
    activeFilter = "low";
    addEventLis();
});


//Search Bar
dom.searchInput.addEventListener("keyup", function(){
    const arrayToRender = search.searchBar(dom.searchInput.value, taskArray);
    render.renderMainDisplay(arrayToRender);
    addEventLis();
})

}
export {addEventListeners, taskArray, projectArray};