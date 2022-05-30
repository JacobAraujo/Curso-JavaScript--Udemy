function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateId(numDigit){
    let id = '';
    for(let c = 0; c < numDigit; c++){
        id += getRandomInt(0, 9);
    }
    return id;
}

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const higherNumbers = numbers.filter(value => value >= 10);
console.log(higherNumbers);

let users = [
    {name: 'Bruno', age: 21},
    {name: 'Bruna', age: 23},
    {name: 'Kevin', age: 17},
    {name: 'Kauany', age: 13},
    {name: 'Brenda', age: 21},
];
const olderUsers = users.filter(user => user.age >= 20);
console.log(olderUsers);

const doubleNumbers = numbers.map(value => value * 2);
console.log(doubleNumbers);

const valuesMultiplyOursIndex = numbers.map((value, index) => value * index);
console.log(valuesMultiplyOursIndex);

const nameUsers = users.map(user => user.name);
console.log(nameUsers);

users.map(function (user){
    const id = generateId(6);
    user.id = id;
    return user;  
})

// soma dos números com reduce

const sum = numbers.reduce((acc, cur) => acc += cur, 0);
console.log(sum);

// pessoa mais velha com reduce

let olderUser = users.reduce(function(acc, value){
    if (value.age > acc.age) return value;
    return value;
})

console.log(olderUser);
