import {dom} from "./dom.js"

function addEventListeners(){
dom.addNewTask.addEventListener("click", function(){
    toggleInvisibility.classList.remove("invisible");
})
}

export {addEventListeners};