"use strict";

const todoControl = document.querySelector(".todo-control");
const headerInput = document.querySelector(".header-input");
const todoList = document.querySelector(".todo-list");
const todoCompleted = document.querySelector(".todo-completed");

let todoData = [];
let newArr = [];

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

      if (item.completed) {
        todoCompleted.append(li);
      } else {
        todoList.append(li);
      }

      li.querySelector(".todo-complete").addEventListener("click", function () {
        item.completed = !item.completed;
        render();
      });

      li.querySelector(".todo-remove").addEventListener("click", function () {
        li.remove();
        clear();
      });

      localStorage.setItem("item", JSON.stringify(todoData));
    }
  });
};

const clear = function () {
  todoData = [];
};

const getCase = function () {
  if (localStorage.item) {
    todoData = JSON.parse(localStorage.getItem("item"));
    console.log(todoData);
    render();
  }
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

getCase();
