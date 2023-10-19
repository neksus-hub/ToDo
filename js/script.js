"use strict";

const todoControl = document.querySelector(".todo-control");
const headerInput = document.querySelector(".header-input");
const todoList = document.querySelector(".todo-list");
const todoCompleted = document.querySelector(".todo-completed");

const todoData = [
  {
    text: "Сварить кофе",
    completed: false,
  },
  {
    text: "Помыть посуду",
    completed: true,
  },
];

const render = function () {
  console.log(todoData);
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
