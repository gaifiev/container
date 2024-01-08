/*2. Страница просмотра отзывов.
Показывает список всех продуктов, на которые были оставлены отзывы.
Рядом с каждым продуктом должна быть кнопка "показать отзывы" / "скрыть отзывы" 
(надпись кнопки меняется), при нажатии на которую показываются / скрываются 
отзывы продукта.
После текста отзыва должна быть кнопка "удалить", которая удаляет данный отзыв 
из localstorage и со страницы. 
Если удалены все отзывы продукта, то продукт вовсе должен быть удален, как из 
localstorage, так и со страницы.*/

// удаление последнего отзыва
function removeItemLocalStorage(keyFromLocalStorage, event) {
  localStorage.removeItem(keyFromLocalStorage);
  for (let i = 0; i < productNameList.length; i++) {
    if (productNameList[i] === keyFromLocalStorage) {
      productNameList.splice(i, 1);
    }
  }
  // если удалены все товары
  if (productNameList.length === 0) {
    console.log(productNameKey);
    localStorage.removeItem("productName");
  } else {
    localStorage.setItem(productNameKey, JSON.stringify(productNameList));
  }
  event.target.closest(".product").remove();
}

// показать отзывы
function showReviews(event) {
  // флажок переключатель
  event.target.dataset.show = "true";
  // текст кнопки меняется
  event.target.textContent = "Cкрыть отзывы";
  let productName;
  productName = event.target.closest(".product").dataset.key;
  // получение отзывов
  const reviewsList = JSON.parse(localStorage.getItem(productName));
  // блок с отзывами
  let reviewsDiv = ``;
  for (let i = 0; i < reviewsList.length; i++) {
    reviewsDiv = `${reviewsDiv}
      <div data-idreview="${reviewsList[i].id}" class="reviews">Отзыв: ${reviewsList[i].reviews}
          <button data-key="${productName}"
          data-idreview="${reviewsList[i].id} " class="delete">Удалить</button>
      </div>`;
  }
  // отзывы на страницу перед кнопкой
  event.target.insertAdjacentHTML("beforeBegin", reviewsDiv);
}

// убрать отзывы
function hideReviews(event) {
  // флажок переключатель
  event.target.dataset.show = "false";
  // текст кнопки меняет
  event.target.textContent = "Показать отзывы";
  // показывать отзывы
  const divFromReviews = event.target
    .closest(".product")
    .querySelectorAll(".reviews");
  // скрыть отзывы
  divFromReviews.forEach((e) => e.remove());
}

const container = document.querySelector(".container");
const productNameKey = "productName";
// получение списка товаров
let productNameList = JSON.parse(localStorage.getItem(productNameKey));
// вывод страницы
for (let i = 0; i < productNameList.length; i++) {
  let product = `<div class="product" data-key="${productNameList[i]}">
          <h1>Название продукта: ${productNameList[i]}</h1>
          <button data-show='false' class="showReviews">Показать отзывы</button>
      </div>`;
  container.insertAdjacentHTML("beforeEnd", product);
}
// показать или убрать отзывы
container.addEventListener("click", (event) => {
  if (event.target.classList.contains("showReviews")) {
    event.target.dataset.show === "false"
      ? showReviews(event)
      : hideReviews(event);
  }
});

// удаление отзывов
container.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    const keyFromLocalStorage = event.target.dataset.key;
    const idReview = event.target.dataset.idreview;
    const reviewsList = JSON.parse(localStorage.getItem(keyFromLocalStorage));
    for (let i = 0; i < reviewsList.length; i++) {
      if (reviewsList[i].id === Number(idReview)) {
        reviewsList.splice(i, 1);
      }
    }
    if (reviewsList.length === 0) {
      // если удаляемый отзыв был последним
      removeItemLocalStorage(keyFromLocalStorage, event);
    } else {
      // если удаляемый отзыв был не последним
      localStorage.setItem(keyFromLocalStorage, JSON.stringify(reviewsList));
      // находим отзыв
      const divFromReviews = event.target
        .closest(".product")
        .querySelectorAll(".reviews");
      // удаляем желаемый отзыв
      divFromReviews.forEach((e) => {
        if (Number(e.dataset.idreview) === Number(idReview)) {
          e.remove();
        }
      });
    }
  }
});
