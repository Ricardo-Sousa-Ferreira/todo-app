import {dom} from "./dom.js"
import {filterEl} from "./filters.js"


let taskToEdit;

function renderElements(){
    

    function renderMainDisplay(arr){
        let padron = 1;
        dom.rightCol.innerText = "";
        arr.forEach(element => {
            const newDiv = dom.createDiv();
            const titleDiv = dom.createDiv();
            const dueDateDiv = dom.createDiv();
            const buttonsDiv = dom.createDiv();
            const deleteDiv = dom.createDiv();
            const editDiv = dom.createDiv();

            titleDiv.innerHTML = element.title;
            dueDateDiv.innerHTML = element.dueDate;
            deleteDiv.innerHTML = '<i class="fas fa-trash-alt"></i>';
            editDiv.innerHTML = '<i class="fas fa-edit"></i>'

            newDiv.classList.add("displayMain");
            titleDiv.classList.add("displayMainTask");
            dueDateDiv.classList.add("displayMainTask");
            deleteDiv.classList.add("roundIcon","red","deleteIcon","shake");
            editDiv.classList.add("roundIcon", "yellow", "editIcon", "shake");
            buttonsDiv.classList.add("taskButtons");

            if(padron % 2 === 0){
                newDiv.classList.add("padron");
            }
            padron++

            deleteDiv.setAttribute("id", element.id);
            editDiv.setAttribute("id", element.id);

            dom.rightCol.appendChild(newDiv);
            newDiv.appendChild(titleDiv);
            newDiv.appendChild(dueDateDiv);
            buttonsDiv.appendChild(editDiv);
            buttonsDiv.appendChild(deleteDiv);
            newDiv.appendChild(buttonsDiv);      
        });

        
    }

    function projArray(arr){
        dom.projectList.innerText = "";
        arr.forEach(element => {
            const projContainer = dom.createDiv();
            const newDiv = dom.createDiv();
            const projDeleteIcon = dom.createDiv();
            newDiv.innerHTML = element.projName;
            
            projContainer.classList.add("projContainer")
            newDiv.classList.add("projectsDisplay");
            projDeleteIcon.innerHTML = '<i class="fas fa-trash-alt"></i>';
            projDeleteIcon.classList.add("roundIcon","red","projDeleteIcon","shake");
            projDeleteIcon.setAttribute("id", element.id);
            projContainer.appendChild(newDiv);
            if(element.projName !== "Default"){
                projContainer.appendChild(projDeleteIcon);
            }
            dom.projectList.appendChild(projContainer);
        })
    }

    function projDropBox(arr){
        dom.assignProject.innerText = "";
        arr.forEach(element => {
            const newOption = document.createElement("option");
            newOption.value = element.projName;
            newOption.textContent = element.projName;
            dom.assignProject.appendChild(newOption);
        })
    }

    function renderUpdate(activeFilter, arrayToRender, taskArray){
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
    
        renderMainDisplay(arrayToRender);

    }

    function renderEdit(clickedId, arr){
        //toggles buttons
        toggleInvisibility.classList.remove("invisible");
        submitButton.classList.add("invisible");
        editButtonForm.classList.remove("invisible");
        clickedId = parseInt(clickedId);
        for(let i = 0; i < arr.length; i++){
            if(arr[i].id == clickedId) {
                taskToEdit = arr[i];
                break;
            }
        }        
        taskName.value = taskToEdit.title;
        taskDescription.value = taskToEdit.description;
        //formats date
        let date = new Date(taskToEdit.dueDate);
        let myDateString = date.getFullYear() + '-' + ('0' + (date.getMonth()+1)).slice(-2) + '-'
             + ('0' + date.getDate()).slice(-2);
        dueDate.value = myDateString;
        priorityLevel.value = taskToEdit.priority;
        assignProject.value = taskToEdit.project;
        
    }


    return{renderMainDisplay, projArray, projDropBox, renderUpdate, renderEdit}
}



const render = renderElements();

export{render, taskToEdit};