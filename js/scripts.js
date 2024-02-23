/**
 * Clase que representa una tarea.
 */
class Task {
    /**
     * Crea una instancia de Task.
     * @param {string} text - El texto de la tarea.
     */
    constructor(text) {
        this.text = text;
        this.completed = false;
    }
}

/**
 * Clase que gestiona las tareas.
 */
class TaskManager {
    /**
     * Crea una instancia de TaskManager.
     */
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }

    /**
     * Añade una nueva tarea.
     * @param {string} text - El texto de la tarea a añadir.
     */
    addTask(text) {
        const task = new Task(text);
        this.tasks.push(task);
        this.updateLocalStorage();
    }

    /**
     * Elimina una tarea.
     * @param {number} index - El índice de la tarea a eliminar.
     */
    removeTask(index) {
        this.tasks.splice(index, 1);
        this.updateLocalStorage();
    }

    /**
     * Cambia el estado de completado de una tarea.
     * @param {number} index - El índice de la tarea cuyo estado se va a cambiar.
     */
    toggleTaskCompleted(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
        this.updateLocalStorage();
    }

    /**
     * Actualiza el almacenamiento local con las tareas.
     */
    updateLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    /**
     * Obtiene todas las tareas.
     * @returns {Task[]} - Un array de tareas.
     */
    getTasks() {
        return this.tasks;
    }
}

const taskManager = new TaskManager();

/**
 * Agrega una nueva tarea.
 */
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const text = taskInput.value.trim();
    if(text) {
        taskManager.addTask(text);
        taskInput.value = '';
        renderTasks();
    }
}

/**
 * Función para eliminar una tarea.
 * @param {number} index - El índice de la tarea a eliminar.
 */
function deleteTask(index) {
    taskManager.removeTask(index);
    renderTasks();
}

/**
 * Renderiza todas las tareas en la interfaz de usuario.
 */
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    taskManager.getTasks().forEach((task, index) => {
        const taskEl = document.createElement('li');
        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        taskText.style.flexGrow = '1';
        if(task.completed) {
            taskText.style.textDecoration = 'line-through';
        }
        
        // Botón para borrar tarea
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Borrar';
        deleteBtn.onclick = () => deleteTask(index);
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.classList.add('buttonB'); // Añadir clase buttonB
        
        taskEl.appendChild(taskText);
        taskEl.appendChild(deleteBtn);
        taskList.appendChild(taskEl);
    });
}

/**
 * Cambia el estado de completado de una tarea.
 * @param {number} index - El índice de la tarea cuyo estado se va a cambiar.
 */
function toggleTaskCompleted(index) {
    taskManager.toggleTaskCompleted(index);
    renderTasks();
}

document.getElementById('addTaskBtn').addEventListener('click', addTask);

renderTasks();

