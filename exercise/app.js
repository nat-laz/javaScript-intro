// Select the input field, button, and list
let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTaskButton");
let taskList = document.getElementById("taskList");


addTaskButton.addEventListener("click", function () {
    // Step 1: Get the task text from the input field
    const taskText = taskInput.value;
  
    // Step 2: Create a new list item element
    const listItem = document.createElement("li");
  
    // Step 3: Set the text of the list item
    listItem.textContent = taskText;
  
    // Step 4: Append the list item to the unordered list
    taskList.appendChild(listItem);
  
    // Clear the input field after adding the task
    taskInput.value = "";
  });
  