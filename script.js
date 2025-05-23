// Get elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Add task on button click
addTaskBtn.addEventListener('click', () => {
  const text = taskInput.value.trim();
  if (text !== '') {
    createTaskItem(text);
    taskInput.value = '';
    taskInput.focus();
  }
});

// Create a new task item
function createTaskItem(taskText) {
  const li = document.createElement('li');
  li.classList.add('task-item');

  // Left side: checkbox + task
  const leftDiv = document.createElement('div');
  leftDiv.classList.add('task-left');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', () => {
    li.classList.toggle('completed');
  });

  const span = document.createElement('span');
  span.textContent = taskText;

  leftDiv.appendChild(checkbox);
  leftDiv.appendChild(span);

  // Right side: delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '🗑️';
  deleteBtn.title = 'Delete task';
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(leftDiv);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}
