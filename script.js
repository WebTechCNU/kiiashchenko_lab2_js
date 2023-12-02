const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete",
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");

function newTodo() {
  const todoText = prompt("Enter a new TODO:");
  if (todoText) {
    const todoItem = document.createElement("li");
    todoItem.className = classNames.TODO_ITEM;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = classNames.TODO_CHECKBOX;
    checkbox.addEventListener("change", updateUncheckedCount);

    const textSpan = document.createElement("span");
    textSpan.className = classNames.TODO_TEXT;
    textSpan.textContent = todoText;

    const deleteButton = document.createElement("button");
    deleteButton.className = classNames.TODO_DELETE;
    deleteButton.textContent = "❌";
    deleteButton.addEventListener("click", deleteTodo);

    todoItem.appendChild(checkbox);
    todoItem.appendChild(textSpan);
    todoItem.appendChild(deleteButton);

    list.appendChild(todoItem);
    updateItemCount();
    updateUncheckedCount();
  }
}

function deleteTodo() {
  const listItem = this.parentNode;
  list.removeChild(listItem);
  updateItemCount();
  updateUncheckedCount();
}

function updateItemCount() {
  const totalItems = list.getElementsByTagName("li").length;
  itemCountSpan.textContent = totalItems;
}

function updateUncheckedCount() {
  const uncheckedItems = list.querySelectorAll(
    `.${classNames.TODO_ITEM} input[type="checkbox"]:not(:checked)`
  ).length;
  uncheckedCountSpan.textContent = uncheckedItems;
}
