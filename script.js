document.addEventListener('DOMContentLoaded', function(){
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    function addTask(){
        const taskText = taskInput.value.trim();
        if (taskText === ""){
            window.alert("enter a task");
        }
    }
    

    )
});