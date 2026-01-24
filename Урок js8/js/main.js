"use strict";

const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
};

const todos = [];

const errTodoNotFound = todoId => `Todo with id ${todoId} not found`;

const getNewTodoId = todos =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find(todo => todo[todoKeys.id] === todoId);

  if (!todo) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};

// 1. Получаем элементы
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const todosContainer = document.querySelector('.todos');

// 2. Функция создания элемента todo в DOM
const createTodoElement = (todo) => {
  const li = document.createElement('li');
  li.className = 'todo';
  li.dataset.id = todo[todoKeys.id];

  const todoText = document.createElement('div');
  todoText.className = 'todo-text';
  todoText.textContent = todo[todoKeys.text];

  const todoActions = document.createElement('div');
  todoActions.className = 'todo-actions';

  const completeBtn = document.createElement('button');
  completeBtn.className = 'button-complete button';
  completeBtn.innerHTML = '&#10004;'; // ✓

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'button-delete button';
  deleteBtn.innerHTML = '&#10006;'; // ✗

  // Если задача выполнена, добавляем класс
  if (todo[todoKeys.is_completed]) {
    li.classList.add('completed');
  }

  todoActions.append(completeBtn, deleteBtn);
  li.append(todoText, todoActions);

  return li;
};

// 3. Функция обработки создания todo
const handleCreateTodo = (todos, text) => {
  if (!text.trim()) return; // не добавляем пустые задачи

  const newTodo = createTodo(todos, text); // добавляем в массив
  const todoElement = createTodoElement(newTodo); // создаём DOM-элемент

  todosContainer.appendChild(todoElement);
  input.value = ''; // очищаем поле ввода
};

// 4. Обработчик отправки формы
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value.trim();
  handleCreateTodo(todos, text);
});

// 5. Обработчик кликов по списку (для удаления и завершения)
todosContainer.addEventListener('click', (e) => {
  const todoItem = e.target.closest('.todo');
  if (!todoItem) return;

  const todoId = parseInt(todoItem.dataset.id);

  if (e.target.classList.contains('button-delete')) {
    deleteTodoById(todos, todoId);
    todoItem.remove();
  } else if (e.target.classList.contains('button-complete')) {
    const updatedTodo = completeTodoById(todos, todoId);
    if (updatedTodo) {
      todoItem.classList.toggle('completed');
    }
  }
});

