let todoList = document.querySelector("#todo-list");
let newTodo = document.querySelector("#new-todo");
let addButton = document.querySelector("#add-button");

let todos = [];

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  let text = newTodo.value;
  if (text) {
    addTodo(text);
    newTodo.value = "";
  }
});

function addTodo(text) {
  let todo = {
    text: text,
    done: false,
    id: Date.now(),
  };
  todos.push(todo);
  renderTodos();
}

function toggleTodo(id) {
  let todo = todos.find((todo) => todo.id === id);
  todo.done = !todo.done;
  renderTodos();
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  renderTodos();
}

function deleteCompletedTodo() {
  console.log("delete button clicked");
  todos = todos.filter((todo) => !todo.done);
  renderTodos();
}

function renderTodos() {
  let todoElements = todos
    .map(
      (todo) => `
    <div class="todo">
      <input type="checkbox" id="${todo.id}" ${
        todo.done ? "checked" : ""
      } onclick="toggleTodo(${todo.id})" >
      <label for="${todo.id}">
        <span class="${todo.done ? "done" : ""}">${todo.text}</span>
      </label>
      <button class="btn" onclick="deleteTodo(${todo.id})">Delete</button>
    </div>`
    )
    .join("");
  todoList.innerHTML = todoElements;
}
