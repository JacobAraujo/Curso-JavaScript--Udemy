
// return the bigger number among two numbers 
function maxNum1(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

const maxNum = (num1, num2) => num1 > num2 ? num1 : num2;

const ePaisagem = (largura, altura) => largura > altura;

const isDivisible = (num, div) => num % div === 0;

function numberStatus(num) {
    if (isDivisible(num, 3) && isDivisible(num, 5)) return 'FizzBuzz';
    if (isDivisible(num, 3)) return 'Fizz';
    if (isDivisible(num, 5)) return 'Buzz';

    return num;
}

for (let i = 0; i < 100; i++) {
    console.log(numberStatus(i));
}
