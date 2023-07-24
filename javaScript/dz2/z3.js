/* Задание 3
В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью). */

function getRandomInt(day) {
  return Math.floor(Math.random() * day + 1);
}

const day = getRandomInt(31);

switch (true) {
  case day >= 1 && day <= 10:
    console.log(`День ${day} попадает в первую декаду`);
    break;
  case day >= 11 && day <= 20:
    console.log(`День ${day} попадает во вторую декаду`);
    break;
  case day >= 21 && day <= 31:
    console.log(`День ${day} попадает в третью декаду`);
    break;
  default:
    console.log(`${day}` + "В месяце всего 31 день, повторите операцию");
    break;
}
