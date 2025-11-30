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
            removeTaskFromStorage(taskText);
        };

        li.appendChild(removebtn);
        taskList.appendChild(li);
    }

    function saveTaskToStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    function addTask(){
        const taskText = taskInput.value.trim();
        if (taskText === ""){
            window.alert("enter a task");
        } else {
            createTaskElement(taskText);
            saveTaskToStorage(taskText);
            taskInput.value = "";
        }
    }

    function removeTaskFromStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }


    loadTasks();

    addButton.addEventListener('click',addTask);
    taskInput.addEventListener('keypress',function(event){
        if (event.key === "Enter"){addTask();}
    })
    
    
});