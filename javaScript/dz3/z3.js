/* Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел */
const inputNumber1 = 3;
const inputNumber2 = 9;
const inputNumber3 = 5;

const findMaxNumber = (num1, num2, num3) => Math.max(num1, num2, num3);

const maxNumber = findMaxNumber(inputNumber1, inputNumber2, inputNumber3);
console.log(`Максимальное значение среди этих чисел: ${maxNumber}`);
