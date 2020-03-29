let id = 0;

const createObjectTask = (title, description, dueDate, priority, project) => {
    id++;
    return{title,description,dueDate,priority,project, id};
}

const pushToArray = (newTask, taskArray) => {
    taskArray.push(newTask);
    console.log(newTask);
    window.localStorage.setItem(id, JSON.stringify(taskArray));
}

const newProject = (projName) => {
    id++;
    return{projName, id};

}

const deleteTask = (deleteId, arr) =>{
    deleteId = parseInt(deleteId);
    
    for(let i = 0; i < arr.length; i++){
        console.log(deleteId);
        console.log(arr[i].id);
        if(arr[i].id == deleteId) { 
            arr.splice(i,1);
        }
    }
    return arr;
    
}

const editArrayElement = (id, values, arr) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].id == id) {
            arr[i].title = values.taskName;
            arr[i].description = values.taskDescription;
            arr[i].dueDate = values.dueDate;
            arr[i]. priority = values.priorityLevel;
            arr[i].project = values.assignProject;
        }
    }     
    return arr;
}

export {createObjectTask, pushToArray, newProject, deleteTask, editArrayElement};