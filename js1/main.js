

const description = {
    user: {
        name: 'Nikolai',
        age: 21,
        colour: 'red'
    }
}

console.log(description.user)

const greeter = {
    sayHello: function(name) {
        return `Helloy ${name}`;
    }
}
console.log(greeter.sayHello('Nikolai'))


const users = [
    {
        name: 'alex',
        age: 23,
        role: 'user'
    },
    {
        name: 'Tom',
        age: 30,
        role: 'user'
    },
    {
        name: 'Nikolai',
        age: 23,
        role: 'user'
    },
    {
        name: 'Max',
        age: 23,
        role: 'admin'
    }
];
let regularUsersCount = 0;
for (let user of users) {   
    if (user.role !== 'admin') {  
        regularUsersCount++; 
    }  
} 

console.log('Количество обычных пользователей:', regularUsersCount);

