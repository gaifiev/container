/* Задание 1
Необходимо создать переменную в которой будет храниться температура в градусах Цельсия, преобразовать значение в температуру по фаренгейту.
Формула перевода градусов Цельсия в градусы Фаренгейта: градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
Вывести в консоль температуру в Цельсиях и Фаренгейтах.
*/

// first method
let degreeCelsius = 22
let degreeFahrenheit = (9/5) * degreeCelsius + 32;

console.log(`Температура ${degreeCelsius} °C преобразовали в температуру ${degreeFahrenheit} °F`);

/* // second method
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Введите значение температуры в °C: ", (degreeCelsius) => {
  console.log(
    `Преобразование температуры ${degreeCelsius} °C в температуру по фаренгейту °F: ${
      degreeCelsius * (9 / 5) + 32
    }`
  );
  rl.close();
}); */
