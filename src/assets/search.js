function searchModule(){

    function searchBar(value, taskArray){
      value = value.toLowerCase();
      
    const filtered = taskArray.filter(task =>
    task.title.toLowerCase().includes(value));
    return filtered;
    }

    
    return{searchBar}
}



const search = searchModule();

export{search, searchModule};