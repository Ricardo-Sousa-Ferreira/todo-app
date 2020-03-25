import {taskArray} from "./eventListeners.js"

function renderElements(){

    function renderMainDisplay(){
        taskArray.forEach(element =>
            console.log(element)
        )
    }
    return{renderMainDisplay}
}

const render = renderElements();

export{render};