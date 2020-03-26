function filterElements(){
    
    function highFilter(taskArray){
        const filtered = taskArray.filter(task => 
            task.priority === "high");
        return filtered;
    }

    function mediumFilter(taskArray){
        const filtered = taskArray.filter(task => 
            task.priority === "medium");
        return filtered;
    }

    function lowFilter(taskArray){
        const filtered = taskArray.filter(task => 
            task.priority === "low");
        return filtered;
    }

    function todayFilter(taskArray){
        let today = new Date();
        today.setHours(0,0,0,0);
        const filtered = taskArray.filter(task =>
            task.dueDate.getTime() === today.getTime());
        return filtered;
    }

    function thisWeekFilter(taskArray){
        let today = new Date();
        today.setHours(0,0,0,0);
        let sixFromNow = new Date();
        sixFromNow.setDate(sixFromNow.getDate()+6);
        sixFromNow.setHours(0,0,0,0);

        const filtered = taskArray.filter(task =>
            (task.dueDate.getTime() >= today.getTime()) && (task.dueDate.getTime() <= sixFromNow.getTime()));
        return filtered;
    }

    function behindSchedule(taskArray){
        let today = new Date();
        today.setHours(0,0,0,0);

        const filtered = taskArray.filter(task =>
            task.dueDate.getTime() < today.getTime());
        return filtered;
    }


    return {highFilter, mediumFilter, lowFilter, todayFilter, thisWeekFilter, behindSchedule}
}

const filterEl = filterElements();

export{filterEl}