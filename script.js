function addTask() {
    const input = document.getElementById("todoInput");
    const task = input.value.trim();

    if (task) {
        const listItem = document.createElement("li");
        listItem.textContent = task;
        
        document.getElementById("todoList").appendChild(listItem);
        input.value = ""; 
    }
}

function deleteLastTask() {
    const todoList = document.getElementById("todoList");
    if (todoList.lastChild) {
        todoList.removeChild(todoList.lastChild);
    }
}
