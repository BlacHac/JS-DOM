const input = document.getElementById('input');
const addbtn = document.getElementById('addbtn');
const body = document.body

function addTask(){

    const newTaskContainer = document.createElement('div');
    const task = document.createElement('p');
    const done = document.createElement('button');
    const trash = document.createElement('button');

    newTaskContainer.appendChild(task);
    newTaskContainer.appendChild(done);
    newTaskContainer.appendChild(trash);

    task.innerText=input.value;
    task.classList.add('task');

    done.classList.add('nTButton', 'green');
    done.innerHTML='&#10004';

    trash.classList.add('nTButton', 'red');
    trash.innerHTML = "<i class='fa fa-trash'></i>"

    newTaskContainer.classList.add('newTaskContainer');

    if(input.value === ""){
        alert('Please enter a task!');
    }else{
        body.append(newTaskContainer);
    }
    input.value = "";

    done.addEventListener('click', function(){
        if(task.style.textDecoration === "line-through"){
            task.style.textDecoration = 'none';
            done.innerHTML = "&#10004"
        }else{
            task.style.textDecoration = "line-through";
            done.innerText = 'undo';
        }
    });

    trash.addEventListener('click', function(){
        newTaskContainer.remove();
    });
};

addbtn.addEventListener('click', addTask);


