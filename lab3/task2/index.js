const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

const createTask = (taskText) => {
    const listItem = document.createElement('li');

    const taskLeftContainer = document.createElement('div');
    taskLeftContainer.className = 'task-left';

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

    const textSpan = document.createElement('span');
    textSpan.className = 'task-text';
    textSpan.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';

    const deleteIcon = document.createElement('img');
    deleteIcon.src = 'https://cdn-icons-png.flaticon.com/128/9713/9713380.png'; // путь к картинке
    deleteIcon.alt = 'Delete';
    deleteIcon.style.width = '20px';
    deleteIcon.style.height = '20px';

    deleteButton.appendChild(deleteIcon);

    checkBox.addEventListener('change', () => {
        textSpan.classList.toggle('done');
    });

    deleteButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
    });

    taskLeftContainer.appendChild(checkBox);
    taskLeftContainer.appendChild(textSpan);

    listItem.appendChild(taskLeftContainer);
    listItem.appendChild(deleteButton);

    return listItem;
};

taskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const taskValue = taskInput.value.trim();
    if (!taskValue) return;

    const newTask = createTask(taskValue);
    taskList.appendChild(newTask);

    taskInput.value = '';
    taskInput.focus();
});