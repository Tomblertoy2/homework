// Задача 1.
const person = {
    name: "Коля",
    age: 21,
    city: "Воронеж",
    hobby: "программирование"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Задача 2.
function isEmpty(obj) {
    for (let key in obj) {
        return false; // если есть хотя бы одно свойство
    }
    return true;
}

// Примеры:
console.log(isEmpty({})); // true
console.log(isEmpty({ a: 1 })); // false

// Задача 3.
const task = {
    title: "Изучить JavaScript",
    description: "Практиковать объекты и функции",
    isCompleted: false
};

function cloneAndModify(object, modifications) {
    const newObj = { ...object, ...modifications };
    for (let key in newObj) {
        console.log(`${key}: ${newObj[key]}`);
    }
    return newObj;
}

// Пример:
cloneAndModify(task, { isCompleted: true, priority: "high" });

// Задача 4.
function callAllMethods(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'function') {
            obj[key](); // вызываем метод
        }
    }
}

// Пример из условия:
const myObject = {
    method1() {
        console.log('Метод 1 вызван');
    },
    method2() {
        console.log('Метод 2 вызван');
    },
    property: 'Это не метод'
};

callAllMethods(myObject);
// Вывод:
// Метод 1 вызван
// Метод 2 вызван
