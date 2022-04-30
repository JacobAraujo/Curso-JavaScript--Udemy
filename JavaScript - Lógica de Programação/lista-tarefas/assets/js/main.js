let list = document.querySelector('ul#task-list');
const inputTask = document.querySelector('input#task');
const btnTask = document.querySelector('#btn-input');

function createLi(){
    return document.createElement('li')
}

inputTask.addEventListener('keypress', function(e){
    if(e.keyCode === 13){ // enter code is 13
        if(!inputTask) return;
        createTask(inputTask.value);
    } 
})

function cleanInput(input){
    input.value = '';
    input.focus();
}

function createButton(locale, text){
    locale.innerHTML += ' ';
    const button = document.createElement('button');
    button.innerHTML = text;
    button.setAttribute('class', 'apagar');
    button.setAttribute('tittle', 'Apagar essa tarefa')
    locale.appendChild(button);
}

function createTask(text){
    let li = createLi();

    li.innerHTML += text;
    createButton(li, 'Apagar');
    list.appendChild(li);

    cleanInput(inputTask);
    saveTasks();
}

btnTask.addEventListener('click', function(){
    if (!inputTask.value) return;
    createTask(inputTask.value);
})

// Delete function
document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
    }
    saveTasks();
})

function saveTasks(){
    const liTasks = list.querySelectorAll('li');
    const listTasks = [];
    
    for (let task of liTasks){
        taskText = task.innerText.replace(' Apagar', '');
        listTasks.push(taskText);
    }

    const tasksJSON = JSON.stringify(listTasks);
    localStorage.setItem('tasks', tasksJSON);
}

function addSaveTasks(){
    const tasks = localStorage.getItem('tasks');
    const taskList = JSON.parse(tasks);

    for(let task of taskList){
        createTask(task);
    }
}

addSaveTasks();


