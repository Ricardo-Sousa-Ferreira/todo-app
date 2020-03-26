import {addEventListeners, taskArray, projectArray} from "./assets/eventListeners.js"
import {render} from "./assets/render.js"

addEventListeners();
render.renderMainDisplay(taskArray);
render.projArray(projectArray);
render.projDropBox(projectArray);

