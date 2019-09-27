let form = document.querySelector('#todo-input');

form.onsubmit = function (e) {
    e.preventDefault();
    let input = form.children[0].value;
    let time = new Date();
    let htmlTemplate = `<div class="table-cell grow">${input}</div><div class="table-cell">${formatDate(time)}</div><div class="table-cell">Actions</div>`;
    let wrapper = document.createElement("div")
    wrapper.classList = 'table-row table-body';
    wrapper.innerHTML = htmlTemplate;
    let table = document.querySelector(".table");
    table.appendChild(wrapper);
}

function formatDate(date) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    let hours = date.getHours();

    let ampm = hours > 12 ? "PM" : "AM";

    hours = hours > 12 ? hours - 12 + "": hours + "";
    hours = hours.length == 1? "0" + hours: hours;
    minutes = date.getMinutes() + "";
    minutes = minutes.length == 1? "0" + minutes: minutes;
    
    let str = months[date.getMonth()] + ' ' + date.getDate() + ', ' + hours + ":" + minutes + " " + ampm;
    return str;
}