let id = 0;

const createObjectTask = (title, description, dueDate, priority, checkStatus, project) => {
    id++;
    return{title,description,dueDate,priority,checkStatus,project, id};
}

const pushToArray = (newTask, taskArray) => {
    taskArray.push(newTask);
    window.localStorage.setItem(id, JSON.stringify(taskArray));
}

export {createObjectTask, pushToArray};