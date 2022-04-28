const taskInput = document.querySelector(".tast-input input");

taskBox = document.querySelector(".task-box");

//getting localstorage todo-list

lettodos = JSON.parse(localStorage.getItem("todos-list"));

function showTodo(){
    let li = "";
    todos.forEach((todo,id) =>
    {
        let isCompleted = todo.status == "complated" ? "checked" : "";
li += `<li class="task">
                <label for="${id}">
                    <input onklick="updateStatus(this)" type="checkbox" id="${id}" ${isCompleted}>
                    <p class="${isCompleted}">${todo.name}</p>
                </label>
                <div class="settings">
                    <i onclick="showMenu(this)" class="uil uil-ellpsis-h"></i>
                    <ul class="task-menu">
                        <li> onclick="editTask(${id}, '${todo.name})" <i class="uil uil-pen"></i>Edit</li>
                        <li> onclick="deleteTask(${id})" <i class="uil uil-tresh"></i>Delete</li>
                    </ul>
                </div>
            </li>`;
    });
    taskBox.innerHTML = li;   
}

showTodo();

function showMenu(selectedTask){
    let taskMenu = selectedTask.parentElement.lastElementChild;
    taskMenu.classList.add("show");
    document.addEventListener("click", e => {
        if(e.target.tagName != "I" || e.target != selectedTask){
    taskMenu.classList.remove("show");

        }
    })
}

function editTask(taskId, taskName) {

}

function deleteTask(deleteId) {
todos.splice(deleteId, 1);
        localStorage.setItem("todo-list", JSON.stringify(todos));
showTodo();
}

function updateStatus(selectedTask){
    let taskName = selectedTask.parentElement.lastChildElement;
    if(selectedTask.checked) {
        taskName.classList.add("checked");
        todos[selectedTask.id].status = "completed";
    }else{
        taskName.classList.remove("checked");
        todos[selectedTask.id].status = "pending";

    }
        localStorage.setItem("todo-list", JSON.stringify(todos));

}



taskInput.addEventListener("keyup", e => {
    let userTask = taskInput.value.trim();
    if(e.key == "Enter && userTask") {
        // let todos = localstorage.getItem("todo-list");
        if(!todos){
            todos = [];
        }
        taskInput.value = "";
        let taskInfo = {name: userTask, status: "pending"};
        todos.push(taskInfo);
        localStorage.setItem("todo-list", JSON.stringify(todos));
        showTodo();
    }
})



// 37:00