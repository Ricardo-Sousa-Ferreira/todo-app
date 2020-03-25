import {dom} from "./dom.js"

function renderElements(){

    function renderMainDisplay(arr){
        console.log(arr);
        dom.rightCol.innerText = "";
        arr.forEach(element => {
            const newDiv = dom.createDiv()
            newDiv.innerHTML = element.title;
            newDiv.classList.add("displayMain");
            dom.rightCol.appendChild(newDiv);
        });

    }
    return{renderMainDisplay}
}

const render = renderElements();

export{render};