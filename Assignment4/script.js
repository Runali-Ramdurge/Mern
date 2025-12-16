function addTodo() {
  const input = document.getElementById("todoInput");
  const todoText = input.value.trim();

  if (todoText === "") {
    alert("Please enter a todo");
    return;
  }

  const li = document.createElement("li");
  li.className = "list-group-item";

  const span = document.createElement("span");
  span.innerText = todoText;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm";
  deleteBtn.innerText = "Delete";

  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(deleteBtn);

  document.getElementById("todoList").appendChild(li);

  input.value = "";
}
