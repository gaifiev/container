/* Задание 2
Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение" */

function calculateSalaryTax() {
  const inputTextOrNumber = 100.5; //либо текст, либо число
  const number = parseFloat(inputTextOrNumber);

  if (isNaN(number)) {
    console.log("Значение задано неверно! Введите число");
  } else {
    const salaryWithDeductionOfTax = number * 0.87;
    console.log(
      `Размер заработной платы за вычетом налогов равен значение - ${salaryWithDeductionOfTax}`
    );
  }
}

calculateSalaryTax();
