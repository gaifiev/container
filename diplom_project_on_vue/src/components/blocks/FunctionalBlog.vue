<template>
  <div class="blog center">
    <h2 class="blog__title">Статьи о здоровье и медицине</h2>
    <div>
      <button @click="openModal('add')">Добавить статью</button>
      <button @click="sortArticlesAlphabetically">
        Сортировать по алфавиту
      </button>
      <button @click="sortArticlesByOrder">Сортировать по дате</button>
    </div>

    <div v-for="(article, index) in articles" :key="index">
      <h3 class="blog__artitle">{{ article.title }}</h3>
      <p class="blog__text">{{ article.content }}</p>
      <div class="blog__box-date">
        <p>Лайки: {{ article.likes }}</p>
        <p>Дата: {{ formatDate(article.date) }}</p>
      </div>

      <button @click="toggleLike(index)">
        {{ article.isLiked ? "Убрать лайк" : "Поставить лайк" }}
      </button>
      <button @click="openModal('edit', index)">Редактировать</button>
      <button @click="deleteArticle(index)">Удалить</button>
    </div>

    <div v-if="modalVisible" class="blog__custom-overlay">
      <div class="blog__custom-modal">
        <label for="title">Заголовок:</label>
        <input v-model="newArticle.title" type="text" id="title" />
        <label for="content">Содержание:</label>
        <textarea v-model="newArticle.content" id="content"></textarea>
        <div class="blog__modal-buttons">
          <button @click="saveArticle">Сохранить</button>
          <button @click="closeModal">Отмена</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jsonData from "../../../public/data/data.json";

export default {
  name: "FunctionalBlogVue",
  data() {
    return {
      articles: [],
      newArticle: { title: "", content: "" },
      editingIndex: null,
      modalVisible: false,
    };
  },
  mounted() {
    this.articles = jsonData.map((article) => ({
      ...article,
      date: new Date(),
      likes: 0, // количество лайков по умолчанию
      isLiked: false, // поставлен ли лайк
    }));
  },
  methods: {
    openModal(mode, index = null) {
      this.modalVisible = true;
      if (mode === "edit") {
        this.editingIndex = index;
        this.newArticle = { ...this.articles[index] };
      } else {
        this.editingIndex = null;
        this.newArticle = { title: "", content: "" };
      }
    },
    closeModal() {
      this.modalVisible = false;
      this.newArticle = { title: "", content: "" };
      this.editingIndex = null;
    },
    saveArticle() {
      if (this.editingIndex !== null) {
        // редактирование статьи
        this.articles[this.editingIndex] = {
          ...this.newArticle,
          date: new Date(),
        };
      } else {
        // добавление статьи
        this.articles.push({
          ...this.newArticle,
          date: new Date(),
          likes: 0,
          isLiked: false,
        });
      }
      // закрываем модальное окно
      this.closeModal();
    },
    // удаление статьи
    deleteArticle(index) {
      this.articles.splice(index, 1);
    },
    // сортировка по алфавиту
    sortArticlesAlphabetically() {
      this.articles.sort((a, b) => a.title.localeCompare(b.title));
    },
    sortArticlesByOrder() {
      this.articles.sort((a, b) => a.date - b.date);
    },
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("ru-US", options);
    },
    toggleLike(index) {
      // переключаем состояние лайка
      this.articles[index].isLiked = !this.articles[index].isLiked;

      // обновляем количество лайков
      if (this.articles[index].isLiked) {
        this.articles[index].likes += 1;
      } else {
        this.articles[index].likes -= 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#title {
  height: 30px;
  width: 400px;
}

#content {
  width: 100%;
  height: 200px;
}

label {
  margin: 5px;
}
.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Poppins", sans-serif;
  background-color: #f7fcfd;
}

.blog {
  margin-top: 30px;
  &__title {
    font-size: 48px;
    margin-bottom: 20px;
  }

  &__box-date {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__artitle {
    font-size: 27px;
  }

  &__text {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  &__custom-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  &__custom-modal {
    background: #fff;
    padding: 20px;
    width: 900px;
    height: 450px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: stretch;
  }

  &__modal-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
}

button {
  padding: 10px;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  border-radius: 30px;
  background-color: rgba(36, 190, 224, 1);
  transition: 0.5s ease;
  margin: 10px;
}

button:hover {
  background: #008aca;
}
</style>
