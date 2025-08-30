const submitButton = document.querySelector("#submit-button");
const inputValue = document.querySelector("#input-value");
const taskToDo = document.querySelector("#task-to-do");
const clearButton = document.querySelector("#clear-button");

submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    const text = inputValue.value;
    if (text.trim() === "") {
        alert("Task can't be empty!!!");
        return;
    }
    const newItem = document.createElement("li");
    newItem.innerHTML = `
    <span class="my-font">${text}</span>
    <button class="btn btn-square">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z"/></svg>
    </button>
    `;
    newItem.className =
        "mb-2 p-2 hover:bg-gray-100 rounded flex justify-between items-center gap-2";
    taskToDo.append(newItem);
    inputValue.value = "";
});

clearButton.addEventListener("click", function () {
    taskToDo.innerHTML = "";
});

taskToDo.addEventListener("click", function (e) {
    if (e.target.closest("button.btn-square")) {
        const li = e.target.closest("li");
        if (li) li.remove();
    }
});
