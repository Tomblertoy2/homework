// Задача 1.
function calculateFinalPrice(price, discountPercent, taxRate) {
    const discount = price * (discountPercent / 100);
    const priceAfterDiscount = price - discount;
    const tax = priceAfterDiscount * taxRate;
    return priceAfterDiscount + tax;
}

console.log(calculateFinalPrice(100, 10, 0.2)); // 108
console.log(calculateFinalPrice(100, 10, 0.01)); // 90


// Задача 2.
function checkAccess(username, password) {
    if (username === "admin" && password === "123456") {
        return "Доступ разрешен";
    } else {
        return "Доступ запрещен";
    }
}

// Пример вызова:
console.log(checkAccess("admin", "123456")); // "Доступ разрешен"
console.log(checkAccess("user", "password")); // "Доступ запрещен"

// Задача 3.
function getInfoDay(hour) {
    if (hour >= 0 && hour <= 5) {
        return "Ночь";
    } else if (hour >= 6 && hour <= 11) {
        return "Утро";
    } else if (hour >= 12 && hour <= 17) {
        return "День";
    } else if (hour >= 18 && hour <= 23) {
        return "Вечер";
    } else {
        return "Некорректное время";
    }
}

// Примеры:
console.log(getInfoDay(3));  // "Ночь"
console.log(getInfoDay(9));  // "Утро"
console.log(getInfoDay(25)); // "Некорректное время"

// Задача 4.
function findFirstEven(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            return i;
        }
    }
    return "Чётных чисел нет";
}

console.log(findFirstEven(1, 10)); // 2
console.log(findFirstEven(9, 9));  // "Чётных чисел нет"
