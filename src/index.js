import {addEventListeners, taskArray, projectArray,onLoad} from "./assets/eventListeners.js"
import {render} from "./assets/render.js"

onLoad();
render.renderMainDisplay(taskArray);
render.projArray(projectArray);
render.projDropBox(projectArray);
addEventListeners();

