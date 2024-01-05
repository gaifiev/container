"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.

1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.

2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.

3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.

4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.

5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
  #books = [];
  constructor(books) {
    checkDublicat(books);
    this.#books = books;
  }

  // получение книги
  getAllBooks() {
    return this.#books;
  }

  // добавление книги
  addBook(title) {
    if (this.#books.includes(title)) {
      throw new Error(`Книга ${title} существует в списке книг`);
    }
    this.#books.push(title);
  }

  // удаление книги
  removeBook(title) {
    if (this.checkTitle(title) === -1) {
      throw new Error(`Книга ${title} отсутствует в списке книг`);
    }
    this.#books.splice(this.checkTitle(title), 1);
  }

  //  проверка на наличие книги
  hasBook(title) {
    if (this.checkTitle(title) !== -1) {
      return true;
    } else {
      return false;
    }
  }

  checkTitle(title) {
    return this.#books.indexOf(title);
  }
}

function checkDublicat(books) {
  if (books.length !== new Set(books).size)
    throw new Error("Список книг содержит дубликаты");
}

const books = new Library([
  "Гарри Поттер",
  "Война и мир",
  "Мастер и Маргарита",
  "Преступление и наказание",
  "Собачье сердце",
  // "Собачье сердце",
]);

console.log("Список книг:");
console.log(books.getAllBooks());

console.log("Добавление книги:");
books.addBook("Отцы и дети");
books.addBook("Темные силы");
// books.addBook("Темные силы");
console.log(books.getAllBooks());

console.log("Удаление книги:");
books.removeBook("Гарри Поттер");
books.removeBook("Темные силы");
// books.removeBook("Темные");
console.log(books.getAllBooks());

console.log("Проверка на наличие книги:");
console.log(books.hasBook("Отцы и дети"));
console.log(books.hasBook("Темные силы"));
