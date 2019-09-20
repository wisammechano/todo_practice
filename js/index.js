function submitEventHandler(event) {
    event.preventDefault();
    let input = document.querySelector("#todo-input input");
    let todoText = input.value;
    input.value = "";
    let todo = createTodo(todoText);
    todoArray.push(todo);
    updateTable();
}

function updateTable(){
    todoTable.innerHTML = '<div class="table-row table-head"><div class="table-cell grow">Todo Description</div><div class="table-cell">Added On</div><div class="table-cell">Actions</div></div>';
    for(let i=0; i < todoArray.length; i++) {
        let todo = todoArray[i];
        let HTMLTemplate = `<div class="table-cell grow">${todo.text}</div><div class="table-cell">${todo.time}</div><div class="table-cell">Actions</div>`;
        let wrapper = document.createElement("div");
        wrapper.classList = "table-row table-body";
        wrapper.innerHTML = HTMLTemplate;
        todoTable.appendChild(wrapper);
    }
};

let form = document.querySelector('#todo-input');
form.onsubmit = submitEventHandler;

let todoTable = document.querySelector(".todo-table");

let todoArray = [];
function createTodo(todoText) {
    return {text: todoText, time: "Sep 12, 03:12 PM"};
}