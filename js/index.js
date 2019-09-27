let form = document.querySelector('#todo-input');
form.onsubmit = submitEventHandler;

let todoTable = document.querySelector(".todo-table");

const todoArray = [];
let editIndex = -1;

updateTodos();

setInterval(updateTodos, 2000);


function updateTodos() {
    fetch("/todos").then(function (res) {
        return res.json()
    }).then(function (todosJson) {
        todoArray.length = 0;
        todosJson.forEach((e) => {
            todoArray.push(e);
        })
        updateTable()
    })
}

function postTodos() {
    fetch("/todos", {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(todoArray)
    }).then(function (res) {
        if (res.ok) {
            console.log("Sent Successfully");
        } else {
            console.log("Error", res.status);
        }
    })
}

function submitEventHandler(event) {
    event.preventDefault();
    let input = document.querySelector("#todo-input input");
    let todoText = input.value;
    input.value = "";
    if (editIndex < 0) {
        let todo = createTodo(todoText);
        todoArray.push(todo);
    } else {
        let todo = todoArray[editIndex];
        todo.text = todoText;
        editIndex = -1;
    }
    updateTable();
    postTodos();
}

function updateTable() {
    todoTable.innerHTML = '<div class="table-row table-head"><div class="table-cell grow">Todo Description</div><div class="table-cell">Added On</div><div class="table-cell">Actions</div></div>';
    for (let i = 0; i < todoArray.length; i++) {
        let todo = todoArray[i];
        let HTMLTemplate = `<div class="table-cell grow">${todo.text}</div><div class="table-cell">${formatDate(todo.time)}</div><div class="table-cell"><a class="todo-delete" href="#">Delete</a><a class="todo-edit" href="#">Edit</a></div>`;
        let wrapper = document.createElement("div");
        wrapper.classList = "table-row table-body";
        wrapper.innerHTML = HTMLTemplate;
        wrapper.id = "todo-" + i;
        wrapper.querySelector('.todo-delete').addEventListener("click", onDeleteTodo);
        wrapper.querySelector('.todo-edit').addEventListener("click", onEditTodo);
        todoTable.appendChild(wrapper);
    }
};

function createTodo(todoText) {
    return {
        text: todoText,
        time: new Date().getTime()
    };
}

function onDeleteTodo(e) {
    e.preventDefault();
    let todoWrapper = e.target.parentNode.parentNode;
    let todoIndex = parseInt(todoWrapper.id.split('-')[1]);
    todoArray.splice(todoIndex, 1);
    updateTable();
    postTodos();
}

function onEditTodo(e) {
    e.preventDefault();
    let todoWrapper = e.target.parentNode.parentNode;
    let todoIndex = parseInt(todoWrapper.id.split('-')[1]);
    let todo = todoArray[todoIndex];
    document.querySelector("#todo-input input").value = todo.text;
    editIndex = todoIndex;
}

function formatDate(ts) {
    const date = new Date(ts)
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    let hours = date.getHours();

    let ampm = hours > 12 ? "PM" : "AM";

    hours = hours > 12 ? hours - 12 + "" : hours + "";
    hours = hours.length == 1 ? "0" + hours : hours;
    minutes = date.getMinutes() + "";
    minutes = minutes.length == 1 ? "0" + minutes : minutes;

    let str = months[date.getMonth()] + ' ' + date.getDate() + ', ' + hours + ":" + minutes + " " + ampm;
    return str;
}