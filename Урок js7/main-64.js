"use strict";

// Константы для ключей объекта todo (для избежания опечаток)
const TODO_KEYS = {
  ID: "id",
  TEXT: "text",
  IS_COMPLETED: "is_completed",
};

// Массив для хранения todos
let todos = [];

// Сообщение об ошибке
const ERR_TODO_NOT_FOUND = (todoId) => `Todo with id ${todoId} not found`;

// Получение нового ID для todo
const getNewTodoId = (todos) => {
  return (
    todos.reduce((maxId, todo) => Math.max(maxId, todo[TODO_KEYS.ID]), 0) + 1
  );
};

// Создание новой задачи
const createTodo = (todos, text) => {
  if (!text || text.trim() === "") {
    console.error("Todo text cannot be empty");
    return null;
  }

  const newTodo = {
    [TODO_KEYS.ID]: getNewTodoId(todos),
    [TODO_KEYS.TEXT]: text.trim(),
    [TODO_KEYS.IS_COMPLETED]: false,
  };

  todos.push(newTodo);
  console.log(
    `Created todo: ${newTodo[TODO_KEYS.TEXT]} (ID: ${newTodo[TODO_KEYS.ID]})`,
  );
  return newTodo;
};

// Получение всех todos
const getAllTodos = () => {
  return [...todos]; // Возвращаем копию массива
};

// Получение todo по ID
const getTodoById = (todos, todoId) => {
  const todo = todos.find((todo) => todo[TODO_KEYS.ID] === todoId);

  if (!todo) {
    console.error(ERR_TODO_NOT_FOUND(todoId));
    return null;
  }

  return todo;
};

// Переключение статуса завершения задачи
const completeTodoById = (todos, todoId) => {
  const todo = getTodoById(todos, todoId);

  if (!todo) {
    return null;
  }

  todo[TODO_KEYS.IS_COMPLETED] = !todo[TODO_KEYS.IS_COMPLETED];
  const status = todo[TODO_KEYS.IS_COMPLETED] ? "completed" : "pending";
  console.log(`Todo ${todoId} marked as ${status}`);

  return todo;
};

// Удаление todo по ID
const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex((todo) => todo[TODO_KEYS.ID] === todoId);

  if (todoIndex === -1) {
    console.error(ERR_TODO_NOT_FOUND(todoId));
    return false;
  }

  const deletedTodo = todos.splice(todoIndex, 1)[0];
  console.log(`Deleted todo: ${deletedTodo[TODO_KEYS.TEXT]} (ID: ${todoId})`);
  return true;
};

// Обновление текста todo
const updateTodoText = (todos, todoId, newText) => {
  const todo = getTodoById(todos, todoId);

  if (!todo) {
    return null;
  }

  if (!newText || newText.trim() === "") {
    console.error("Todo text cannot be empty");
    return null;
  }

  const oldText = todo[TODO_KEYS.TEXT];
  todo[TODO_KEYS.TEXT] = newText.trim();
  console.log(
    `Updated todo ${todoId}: "${oldText}" -> "${todo[TODO_KEYS.TEXT]}"`,
  );

  return todo;
};

// Фильтрация todos по статусу
const filterTodosByStatus = (todos, isCompleted) => {
  return todos.filter((todo) => todo[TODO_KEYS.IS_COMPLETED] === isCompleted);
};

// Получение статистики
const getTodosStatistics = () => {
  const total = todos.length;
  const completed = filterTodosByStatus(todos, true).length;
  const pending = total - completed;

  return {
    total,
    completed,
    pending,
    completionRate: total > 0 ? Math.round((completed / total) * 100) : 0,
  };
};

// Вывод всех todos в консоль
const displayAllTodos = () => {
  console.log("\n=== ALL TODOS ===");

  if (todos.length === 0) {
    console.log("No todos found.");
    return;
  }

  todos.forEach((todo) => {
    const status = todo[TODO_KEYS.IS_COMPLETED] ? "✓" : "○";
    console.log(
      `${status} [ID: ${todo[TODO_KEYS.ID]}] ${todo[TODO_KEYS.TEXT]}`,
    );
  });

  const stats = getTodosStatistics();
  console.log(
    `\nTotal: ${stats.total}, Completed: ${stats.completed}, Pending: ${stats.pending}`,
  );
};

// Пример использования
const initExampleData = () => {
  // Очищаем массив
  todos = [];

  // Создаем несколько задач
  createTodo(todos, "Learn JavaScript basics");
  createTodo(todos, "Practice coding exercises");
  createTodo(todos, "Build a todo app");

  // Отмечаем одну задачу как выполненную
  completeTodoById(todos, 2);

  // Выводим все задачи
  displayAllTodos();

  // Обновляем задачу
  updateTodoText(todos, 1, "Learn JavaScript fundamentals");

  // Удаляем задачу
  deleteTodoById(todos, 3);

  // Выводим итоговый список
  displayAllTodos();
  // Показываем статистику
  const stats = getTodosStatistics();
  console.log("\n=== STATISTICS ===");
  console.log(`Completion rate: ${stats.completionRate}%`);
};
