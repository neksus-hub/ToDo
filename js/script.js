"use strict";

const todoControl = document.querySelector(".todo-control");
const headerInput = document.querySelector(".header-input");
const todoList = document.querySelector(".todo-list");
const todoCompleted = document.querySelector(".todo-completed");

const todoData = [];

const render = function () {
  todoList.innerHTML = "";
  todoCompleted.innerHTML = "";

  todoData.forEach(function (item) {
    const li = document.createElement("li");

    if (item.text !== "") {
      li.classList.add("todo-item");

      li.innerHTML =
        '<span class="text-todo">' +
        item.text +
        "</span>" +
        '<div class="todo-buttons">' +
        '<button class="todo-remove"></button>' +
        '<button class="todo-complete"></button>' +
        "</div>";

      console.log(li);

      if (item.completed) {
        todoCompleted.append(li);
      } else {
        todoList.append(li);
      }

      li.querySelector(".todo-complete").addEventListener("click", function () {
        item.completed = !item.completed;
        render();
      });
    }
  });
};

todoControl.addEventListener("submit", function (event) {
  event.preventDefault();

  const newTodo = {
    text: headerInput.value,
    completed: false,
  };

  todoData.push(newTodo);
  headerInput.value = "";

  render();
});
