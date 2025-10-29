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
  editBtn.onclick = () => editTask(li, taskSpan, editBtn);

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.onclick = () => li.remove();

  li.appendChild(taskSpan);
  li.appendChild(editBtn);
  li.appendChild(delBtn);

  taskList.appendChild(li);
  taskInput.value = '';
}

function editTask(li, taskSpan, editBtn) {
  // Create input field
  const input = document.createElement('input');
  input.type = 'text';
  input.value = taskSpan.textContent;
  input.className = 'edit-input';

  // Replace span with input
  li.replaceChild(input, taskSpan);

  // Change Edit button to Save
  editBtn.textContent = 'Save';
  editBtn.onclick = () => {
    taskSpan.textContent = input.value.trim() || taskSpan.textContent;
    li.replaceChild(taskSpan, input);
    editBtn.textContent = 'Edit';
    editBtn.onclick = () => editTask(li, taskSpan, editBtn);
  };

  // Allow pressing Enter to save
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      editBtn.click();
    }
  });

  // Focus input
  input.focus();
}
