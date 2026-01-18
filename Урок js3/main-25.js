// Задача 1.
for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    continue;
  }
  console.log(i);
}

// Задача 2.
// Получаем число от пользователя
let number = parseInt(prompt("Введите число для вычисления факториала:"));

// Проверяем, что введено корректное число
if (isNaN(number) || number < 0) {
  console.log("Пожалуйста, введите неотрицательное целое число.");
} else {
  let factorial = 1;
  
  // Вычисляем факториал
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  
  console.log(`Факториал числа ${number} равен ${factorial}`);
}

// *Задача 3.
let board = "";
let size = 8;

for (let row = 0; row < size; row++) {
  for (let col = 0; col < size; col++) {
    // Если сумма индексов четная — ставим '#', иначе — пробел
    if ((row + col) % 2 === 0) {
      board += "#";
    } else {
      board += " ";
    }
  }
  board += "\n"; // Переход на новую строку после каждой строки доски
}

console.log(board);