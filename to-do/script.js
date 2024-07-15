const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo();
});

function addTodo() {
  let todoText = input.value;

  if (todos) {
    todoText = todos.text;
  }

  if (todoText) {
    const todoEl = document.createElement("li");
    if (todos && todos.completed) {
      todoEl.classList.add("completed");
    }

    todoEl.innerHTML = todoText;

    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");
      updateLS();
    });

    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();

      todoEl.remove();
      updateLS();
    });

    todosUL.appendChild(todoEl);
    input.value = "";
    updateLS();
  }
}

function updateLS() {
  todoEl = document.querySelectorAll("li");

  const todos = [];
  todoEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    });
  });

  localStorage.setItem("todo", JSON.stringify(todos));
}
