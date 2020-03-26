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

const deleteTask = (deleteId, arr) =>{
    deleteId = parseInt(deleteId);
    for(let i = 0; i < arr.length; i++){
        if(arr[i].id == deleteId ) { 
            arr.splice(i,1);
        }
    }
     console.log(arr);
    return arr;
    
}

export {createObjectTask, pushToArray, newProject, deleteTask};