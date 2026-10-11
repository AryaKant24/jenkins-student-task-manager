const taskForm = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const task = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  checkbox.addEventListener('change', () => {
    task.classList.toggle('completed', checkbox.checked);
  });

  task.append(checkbox, document.createTextNode(` ${taskInput.value}`));
  taskList.appendChild(task);
  taskInput.value = '';
  taskInput.focus();
});
