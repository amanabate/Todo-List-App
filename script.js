const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.onclick = () => editTask(taskSpan);

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.onclick = () => li.remove();

  li.appendChild(taskSpan);
  li.appendChild(editBtn);
  li.appendChild(delBtn);

  taskList.appendChild(li);
  taskInput.value = '';
}

function editTask(taskSpan) {
  const newTask = prompt('Edit task:', taskSpan.textContent);
  if (newTask !== null && newTask.trim() !== '') {
    taskSpan.textContent = newTask.trim();
  }
}
