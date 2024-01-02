"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/
const musicCollection = {
  albums: [
    { title: "Седая ночь", artist: "Юрий Шатунов", year: 1986 },
    { title: "Розовый вечер", artist: "Юрий Шатунов", year: 1989 },
    { title: "Shaman", artist: "Я русский", year: 2022 },
    { title: "RASA", artist: "Пчеловод", year: 2019 },
  ],

  *[Symbol.iterator]() {
    for (const el of this.albums) {
      yield el;
    }
  },
};

for (const el of musicCollection) {
  console.log(el);
  console.log(`${el.title} - ${el.artist} (${el.year})`);
}
