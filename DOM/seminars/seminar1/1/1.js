// Определение текущего размера окна браузера:
//         Напишите функцию, которая будет выводить текущую ширину и высоту окна браузера при его изменении.

//         Подтверждение закрытия страницы:
//         Создайте всплывающее окно или диалоговое окно, которое появляется при попытке закрыть вкладку браузера и спрашивает пользователя, уверен ли он в своем решении закрыть страницу.

//         Управление историей переходов:
//         Используйте объект history для управления историей переходов на веб-странице. Создайте кнопки "Назад" и "Вперед" для перемещения по истории.

// common.js

// 1 
function displayWindowSize() {
  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  console.log(`Ширина: ${width}, Высота: ${height}`);
}

window.addEventListener("resize", displayWindowSize);
window.addEventListener("load", displayWindowSize);


// 2
function confirmPageClose() {
  window.addEventListener("beforeunload", function (e) {
    e.returnValue = "Вы уверены, что хотите покинуть страницу?";
  });
}
// 3
function back() {
  window.history.back();
}

function forward() {
  window.history.forward();
}

