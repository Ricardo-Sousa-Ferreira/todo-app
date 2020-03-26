import {dom} from "./dom.js"
import {filterEl} from "./filters.js"

function renderElements(){

    function renderMainDisplay(arr){
        dom.rightCol.innerText = "";
        arr.forEach(element => {
            const newDiv = dom.createDiv();
            const titleDiv = dom.createDiv();
            const dueDateDiv = dom.createDiv();
            const deleteDiv = dom.createDiv();

            titleDiv.innerHTML = element.title;
            dueDateDiv.innerHTML = element.dueDate;
            deleteDiv.innerHTML = '<i class="fas fa-trash-alt"></i>';

            newDiv.classList.add("displayMain");
            titleDiv.classList.add("displayMainTask");
            dueDateDiv.classList.add("displayMainTask");
            deleteDiv.classList.add("deleteIcon");

            deleteDiv.setAttribute("id", element.id);

            dom.rightCol.appendChild(newDiv);
            newDiv.appendChild(titleDiv);
            newDiv.appendChild(dueDateDiv);
            newDiv.appendChild(deleteDiv);      
        });

        
    }

    function projArray(arr){
        dom.projectList.innerText = "";
        arr.forEach(element => {
            const newDiv = dom.createDiv()
            newDiv.innerHTML = element.projName;
            newDiv.classList.add("projectsDisplay");
            dom.projectList.appendChild(newDiv);
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
        console.log(taskArray+"dfee");
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


    return{renderMainDisplay, projArray, projDropBox, renderUpdate}
}



const render = renderElements();

export{render};