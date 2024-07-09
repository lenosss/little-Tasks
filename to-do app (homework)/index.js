// Selecting the input field and task container from the DOM
const input = document.querySelector(".taskInput");
const tasksContainer = document.querySelector(".taskForm");

// Function to add a new task
const addTask = (event) => {
  // Prevent form submission from refreshing the page
  event.preventDefault();

  // Check if the input field is empty
  if (input.value == "") {
    alert("Please enter a task");
    return;
  }

  // Create a new task element
  const newTask = document.createElement("div");
  newTask.className = "task"; // Assigning a class to the task element

  // Create a checkbox for the task
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.className = "checkbox"; // Assigning a class to the checkbox
  newTask.append(checkBox); // Appending the checkbox to the task element

  // Create a paragraph element to display the task description
  const taskDescription = document.createElement("p");
  taskDescription.innerText = input.value; // Setting the text content to the value of the input field
  taskDescription.className = "task_description"; // Assigning a class to the task description
  newTask.append(taskDescription); // Appending the task description to the task element

  // Create a button to remove the task
  const removeButton = document.createElement("button");
  removeButton.innerText = "Delete";
  removeButton.className = "remove_button"; // Assigning a class to the remove button
  newTask.append(removeButton); // Appending the remove button to the task element

  // Append the new task to the task container
  tasksContainer.append(newTask);

  // Clear the input field after adding the task
  input.value = "";

  // Event listener for the remove button to delete the task
  removeButton.onclick = (event) => {
    event.preventDefault();
    event.stopPropagation(); // Stop event propagation to prevent checkbox click event
    tasksContainer.removeChild(newTask); // Remove the task from the task container
  };

  // Event listener for the checkbox to mark the task as done
  checkBox.onclick = (event) => {
    event.stopPropagation(); // Stop event propagation to prevent remove button click event
    // Toggle the 'crossed' class for styling
    removeButton.classList.toggle("crossed", checkBox.checked);
    taskDescription.classList.toggle("crossed", checkBox.checked);
    newTask.classList.toggle("done-task", checkBox.checked);
  };
};
