// script.js
document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const addTaskBtn = document.getElementById("addTaskBtn");

  // Add Task Function
  const addTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
      <div class="task-content">
        <input type="checkbox" aria-label="Mark task as completed">
        <span class="task-text">${taskText}</span>
      </div>
      <span class="delete" aria-label="Delete task">&times;</span>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
  };

  // Handle Task List Click Events
  taskList.addEventListener("click", (e) => {
    if (e.target.tagName === "INPUT") {
      e.target.closest("li").classList.toggle("completed");
    }
    if (e.target.classList.contains("delete")) {
      e.target.closest("li").remove();
    }
  });

  // Add Task on Button Click
  addTaskBtn.addEventListener("click", addTask);

  // Add Task on Enter Key
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
  });
});
