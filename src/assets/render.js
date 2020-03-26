import {dom} from "./dom.js"

function renderElements(){

    function renderMainDisplay(arr){
        dom.rightCol.innerText = "";
        arr.forEach(element => {
            const newDiv = dom.createDiv()
            newDiv.innerHTML = element.title;
            newDiv.classList.add("displayMain");
            dom.rightCol.appendChild(newDiv);
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
    return{renderMainDisplay, projArray, projDropBox}
}



const render = renderElements();

export{render};