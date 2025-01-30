// Get references
const taskInput = document.getElementById("task");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
    if (taskInput.value.trim() === "") return;

    // Create a new task item
    let li = document.createElement("li");
    li.innerHTML = `
        ${taskInput.value}
        <button onclick="deleteTask(this)">❌</button>
    `;
    
    li.onclick = function() {
        li.classList.toggle("completed");
    };

    taskList.appendChild(li);
    
    saveTasks();
    taskInput.value = "";
}

// Function to delete a task
function deleteTask(btn) {
    btn.parentElement.remove();
    saveTasks();
}

// Save tasks to local storage
function saveTasks() {
    localStorage.setItem("tasks", taskList.innerHTML);
}

// Load saved tasks when page loads
window.onload = function() {
    taskList.innerHTML = localStorage.getItem("tasks") || "";
};
