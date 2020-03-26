import {dom} from "./dom.js"

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

            dom.rightCol.appendChild(newDiv);
            newDiv.appendChild(titleDiv);
            newDiv.appendChild(dueDateDiv);
            newDiv.appendChild(deleteDiv);

            
        });
        const deleteButtons = document.getElementsByClassName("deleteIcon");
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
    return{renderMainDisplay, projArray, projDropBox}
}



const render = renderElements();

export{render};