// Задача 1: Проверка чётности числа
const number = 10;
if (number % 2 === 0) {
    console.log(`Число ${number} является чётным`);
} else {
    console.log(`Число ${number} является нечётным`);
}

// Задача 2: Определение скидки по возрасту
let a = 25;
let discount;
discount = a < 18 ? '10%' : 
           a <= 65 ? '20%' : 
           '30%';
console.log(`Для возраста ${a} лет скидка составляет: ${discount}`);

// Задача 3: Проверка доступа
let user = prompt("Введите имя пользователя:");
let password = prompt("Введите пароль:");

if ((user === "admin" || user === "user") && password === "123456") {
    console.log("Доступ разрешен");
} else {
    console.log("Доступ запрещен");
}

// Задача 4: Расчет стоимости доставки (ИСПРАВЛЕННАЯ ВЕРСИЯ)
const weightInput = prompt("Введите вес посылки (в килограммах):");
const deliveryType = prompt("Введите тип доставки (стандарт/грузовик):");

// Проверка на отмену ввода
if (weightInput === null || deliveryType === null) {
    alert("Операция отменена пользователем");
} else {
    const weight = parseFloat(weightInput);
    const normalizedDeliveryType = deliveryType.toLowerCase();
    
    // Объявляем переменные ВНЕ условий, чтобы они были доступны везде
    let baseCost = 0;
    let coefficient = 0;
    let isValid = true; // Флаг валидности данных
    
    // Проверка корректности данных
    if (isNaN(weight) || weight <= 0) {
        alert("Некорректный вес посылки");
        isValid = false;
    } else if (weight >= 100) {
        alert("Слишком большой вес для выбранных типов доставки");
        isValid = false;
    }
    
    // Если данные валидны - продолжаем расчет
    if (isValid) {
        // Расчет базовой стоимости
        if (weight < 1) {
            baseCost = 5;
        } else if (weight <= 5) {
            baseCost = 10;
        } else {
            baseCost = 15;
        }
        
        // Определение коэффициента
        switch (normalizedDeliveryType) {
            case "стандарт":
                coefficient = 1;
                break;
            case "грузовик":
                coefficient = 2;
                break;
            default:
                alert("Неверный тип доставки. Допустимые варианты: 'стандарт' или 'грузовик'");
                isValid = false;
                break;
        }
        
        // Если все данные корректны - выводим результат
        if (isValid) {
            const totalCost = baseCost * coefficient;
            alert(`Итоговая стоимость доставки: $${totalCost}`);
        }
    }
}