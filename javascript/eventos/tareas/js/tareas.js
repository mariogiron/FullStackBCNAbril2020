// VARIABLES GLOBALES
let tasks = [{
    name: "Crear informe",
    completed: false
},
{
    name: "Comprar comida",
    completed: true
}];

if (localStorage.getItem('tasks')) {
    const tasksStr = localStorage.getItem('tasks');
    tasks = JSON.parse(tasksStr);
}

const btnAddTask = document.querySelector('.addTask');
const btnReset = document.getElementById('btnReset');
const inputName = document.getElementById('inputName');
const taskList = document.querySelector('.tasks');
const taskListCompleted = document.querySelector('.tasks-completed');

// FUNCIONES
function printTasks() {
    taskList.innerHTML = '';
    taskListCompleted.innerHTML = '';
    let count = 0;

    // const tasksIncomplete = tasks.filter(task => !task.completed);
    // const tasksComplete = tasks.filter(task => task.completed);

    for (let task of tasks) {
        const div = document.createElement('div');
        div.className = 'task';
        div.dataset.id = count;

        const p = document.createElement('p');
        p.innerText = task.name;

        const inputEdit = document.createElement('input');
        inputEdit.type = 'text';
        inputEdit.value = task.name;
        inputEdit.style.display = 'none';
        inputEdit.addEventListener('blur', editTask);

        const button = document.createElement('button');
        button.innerText = 'Delete Task';
        button.dataset.id = count;
        button.className = 'btnBorrar';
        button.addEventListener('click', deleteTask);

        const editButton = document.createElement('button');
        editButton.innerText = 'Edit Task';
        editButton.dataset.id = count;
        editButton.className = 'btnEdit';
        editButton.addEventListener('click', showInputEdit);

        const checkCompleted = document.createElement('input');
        checkCompleted.type = 'checkbox';
        checkCompleted.dataset.id = count;
        checkCompleted.checked = task.completed;
        checkCompleted.addEventListener('change', changeCompleted);

        div.appendChild(p);
        div.appendChild(inputEdit);
        div.appendChild(button);
        div.appendChild(editButton);
        div.appendChild(checkCompleted);

        if (!task.completed) {
            taskList.appendChild(div);
        } else {
            taskListCompleted.appendChild(div);
        }

        count++;
    }
}

function saveTasks() {
    const tasksStr = JSON.stringify(tasks);
    localStorage.setItem('tasks', tasksStr);
}

// EVENTOS

btnAddTask.addEventListener('click', addTask);
function addTask() {
    const task = {};
    task.name = inputName.value;
    task.completed = false;
    tasks.push(task);

    saveTasks();
    printTasks();
}

function deleteTask(event) {
    const id = event.target.dataset.id;
    tasks.splice(id, 1);

    saveTasks();
    printTasks();
}

function showInputEdit(event) {
    const divTask = event.target.parentNode;
    const pName = divTask.querySelector('p');
    const inputEdit = divTask.querySelector('input');

    pName.style.display = 'none';
    inputEdit.style.display = 'block';

    inputEdit.focus();
}

function editTask(event) {
    const divTask = event.target.parentNode;
    const pName = divTask.querySelector('p');
    const inputEdit = event.target;

    pName.innerText = inputEdit.value;

    inputEdit.style.display = 'none';
    pName.style.display = 'block';

    tasks[divTask.dataset.id].name = inputEdit.value;

    saveTasks();
    // const idTask = divTask.dataset.id;
    // const task = tasks[idTask];
    // task.name = inputEdit.value;
}

function changeCompleted(event) {
    tasks[event.target.dataset.id].completed = event.target.checked;
    // const idTask = event.target.dataset.id;
    // const task = tasks[idTask];
    // task.completed = event.target.checked;

    saveTasks();
    printTasks();
}

btnReset.addEventListener('click', () => {
    localStorage.removeItem('tasks');
    tasks = [];
    printTasks();
});

//EJECUCIÓN
printTasks();