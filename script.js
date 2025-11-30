document.addEventListener('DOMContentLoaded', function(){
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    function loadTasks() {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            const tasksArray = JSON.parse(savedTasks);
            tasksArray.forEach(taskText => {
                createTaskElement(taskText);
            });
        }
    }

    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const removebtn = document.createElement('button');
        removebtn.textContent = "Remove";
        removebtn.classList.add("remove-btn");
        removebtn.onclick = function(){
            taskList.removeChild(li);
        };

        li.appendChild(removebtn);
        taskList.appendChild(li);
    }

    function addTask(){
        const taskText = taskInput.value.trim();
        if (taskText === ""){
            window.alert("enter a task");
        } else {
            createTaskElement(taskText);
            taskInput.value = "";
        }
    }


    loadTasks();

    addButton.addEventListener('click',addTask);
    taskInput.addEventListener('keypress',function(event){
        if (event.key === "Enter"){addTask();}
    })
    
    
});