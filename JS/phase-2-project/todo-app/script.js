document.addEventListener("DOMContentLoaded", () => {

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const filters = document.querySelector(".filter");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
let filter = "all";

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
  list.innerHTML = "";

  const filtered = todos.filter((todo) => {
    if (filter == "active") return !todo.completed;
    if (filter == "completed") return todo.completed;
    return true;
  });

  filtered.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = todo.completed ? "completed" : "";

    const span = document.createElement("span");
    span.textContent = todo.text;
    span.onclick = () => toggleComplete(index);

    const btn = document.createElement("button");
    btn.textContent = "🗑️";
    btn.onclick = () => deleteTodo(index);

    li.append(span, btn);
    list.appendChild(li);
  });
}

function addTodo(text){
    todos.push({text,completed:false});
    saveTodos();
    renderTodos();
}

function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    saveTodos();
    renderTodos();
}

function deleteTodo(index) {
    todos.splice(index,1)
    saveTodos();
    renderTodos();
}

form.addEventListener("submit",e => {
    e.preventDefault();
    const text = input.value.trim();
    if (text) {
        addTodo(text);
        input.value = "";
    }
})

filters.addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    filter = e.target.dataset.filter;
    document.querySelectorAll(".filters button").forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");
    renderTodos();
  }
});

renderTodos();
});