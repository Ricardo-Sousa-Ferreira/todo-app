let id = 0;
let projId = 0;

const createObjectTask = (title, description, dueDate, priority, checkStatus, project) => {
    id++;
    return{title,description,dueDate,priority,checkStatus,project, id};
}

const pushToArray = (newTask, taskArray) => {
    taskArray.push(newTask);
    window.localStorage.setItem(id, JSON.stringify(taskArray));
}

const newProject = (projName) => {
    projId++;
    return{projName, projId};

}

export {createObjectTask, pushToArray, newProject};