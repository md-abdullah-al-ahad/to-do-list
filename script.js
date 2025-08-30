const submitButton = document.querySelector("#submit-button");
const inputValue = document.querySelector("#input-value");
const taskToDo = document.querySelector("#task-to-do");
const clearButton = document.querySelector("#clear-button");
submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    const text = inputValue.value;
    const newItem = document.createElement("li");
    newItem.textContent = text;
    newItem.className =
        "mb-2 p-2 hover:bg-gray-100 rounded my-font text-[30px]";
    taskToDo.append(newItem);
    inputValue.value = "";
});

clearButton.addEventListener("click", function () {
    taskToDo.innerHTML = "";
});
