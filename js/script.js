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

todoControl.addEventListener("submit", function (event) {
  event.preventDefault();
});

console.log("Hello, World!");
