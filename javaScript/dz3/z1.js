/* Задание 1
Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени */
const num1 = 2;
const num2 = 3;

// первый способ
function sumCubes(firstNumber, secondNumber) {
  const sum = Math.pow(firstNumber, 3) + Math.pow(secondNumber, 3);
  return sum;
}
console.log(`Сумма чисел, возведенных в куб: ${sumCubes(num1, num2)}`);

// второй способ стрелочной функцией
const sum = (firstNumber, secondNumber) => console.log(Math.pow(firstNumber, 3) + Math.pow(secondNumber, 3));
sum(num1, num2);
