// • Создайте HTML-страницу с элементами: изображение, имя фотографа, кнопка "лайк" и счетчик лайков.
// • Используя JavaScript и ваш API-ключ, получите случайное изображение из Unsplash каждый раз, когда пользователь загружает страницу.
// • Отобразите информацию о фотографе под изображением.

document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "G5aCQ6qspZLK0jqKlQ34K53SRogHYeUfCWjOZG0pOAk";

  const photoElement = document.getElementById("photo");
  const photographerElement = document.getElementById("photographer");
  const likeButtonElement = document.getElementById("likeButton");
  const likeCountElement = document.getElementById("likeCount");

  // случайное изображение
  function getRandomPhoto() {
    const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // обновляем элементы с полученной информацией
        const photoUrl = data.urls.regular;
        const photographerName = data.user.name;

        photoElement.src = photoUrl;
        photographerElement.textContent = `Фотограф: ${photographerName}`;
      })
      .catch((error) =>
        console.error("Ошибка при получении данных:", error)
      );
    likeButtonElement.addEventListener("click", likePhoto);
  }

  //  счетчик лайков
  function likePhoto() {
    const currentLikes = parseInt(likeCountElement.textContent);
    const newLikes = currentLikes + 1;
    likeCountElement.textContent = `${newLikes} ${
      newLikes === 1 ? "лайк" : "лайков"
    }`;
  }

  getRandomPhoto();
});
