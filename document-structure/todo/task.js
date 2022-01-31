const form = document.querySelector('.tasks__control'),
    task = form.querySelector('.tasks__input'),
    taskList = document.querySelector('.tasks__list');

function addTask(event) {
    event.preventDefault();
    const taskVal = task.value.trim();
    if (taskVal) {
        taskList.insertAdjacentHTML("afterBegin", `
        <div class="task">
            <div class="task__title">
                ${taskVal}
             </div>
             <a href="#" class="task__remove">&times;</a>
        </div>
        `);
    }
    this.reset();
};

function removeTask(event) {
    const target = event.target;
    if (target.classList.contains('task__remove')) {
        target.closest('.task').remove();        
    }
}

form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);