// Объявление родительского объекта смотри в листинге 1.
// Объект робот-пылесос.

// ЛИСТИНГ 1
// Объект робот-пылесос.
const VacuumCleaner = {
  Model: "vacuum cleaner",
  counterOfStarts: 0,
  isFull: false,
  isObstacle: false,

  startCleaning: function () {
    this.counterOfStarts++;
    // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
    console.log("I am the method of VacuumCleaner");
    console.log(
      "I am cleaning... I have been started: ",
      this.counterOfStarts,
      "times."
    );
  },
  goCharge: function () {
    // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
    console.log("I am the method of VacuumCleaner");
    console.log("I am going to charge...");
  },
};

// ЛИСТИНГ 2
const DancingSeries = {
  // Объявляем новые свойства и переопределить свойство model.
  model: "dancing series",
  power: 200,
  batterySize: 2100,
  boxSize: 0.5,
  workTime: 45,
  isUVLampOn: false,
  // Добавляем новый метод.
  switchUVLamp: function () {
    // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
    console.log("I am the method of DancingSeries");
    this.isUVLampOn = !this.isUVLampOn;
    console.log(`UV lamp is ${this.isUVLampOn ? "working" : "not working"}.`);
  },
  // Делаем ссылку на прототип от родителя.
  __proto__: VacuumCleaner,
};

console.log(DancingSeries);

// ЛИСТИНГ 3
// Объявление базового родительского объекта смотри в листинге
1;
// Объявление DancingSeries смотри в листинге 2.
// Объект робот-пылесос.
const Samba = {
  // Обновляем свойства под конкретную модель.
  model: "Samba-1",
  power: 250,
  batterySize: 2500,
  workTime: 50,
  // Делаем ссылку на прототип от родителя.
  __proto__: DancingSeries,
};

// ЛИСТИНГ 4
// Обращение к свойствам объекта.
console.log(Samba.model); // "Samba-1"
console.log(Samba.isFull); // false
// Вызов методов объекта.
Samba.startCleaning();
// I am the method of VacuumCleaner
// 'I am cleaning... I have been started: 1 times.'
Samba.isUVLampOn = true;
Samba.switchUVLamp();
// I am the method of DancingSeries
// 'UV lamp is not working.'
Samba.goCharge();
// I am the method of VacuumCleaner
// 'I am going to charge...'

// ЛИСТИНГ 5
// Объект робот-пылесос.
const Djaiv = {
  // Обновляем свойства под конкретную модель.
  model: "Djaiv-1",
  power: 250,
  batterySize: 2500,
  workTime: 50,
  // Переопределим метод startCleaning.
  startCleaning: function () {
    this.counterOfStarts++;
    // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
    console.log("I am the method of Djaiv");
    console.log(
      "I am Djaiv, and I am cleaning... I have been started: ",
      this.counterOfStarts,
      "times."
    );
  },
  // Делаем ссылку на прототип от родителя.
  __proto__: DancingSeries,
};

// Листинг 6.
// Объявление базового родительского объекта смотри в листинге
// 1.
// Объявление DancingSeries смотри в листинге 2.
// Объект Samba смотри в листинге 3.
// Объект Djaiv смотри в листинге 5.
// Вызов методов объекта.
Samba.startCleaning();
// I am the method of VacuumCleaner
// 'I am cleaning... I have been started: 1 times.'
Djaiv.startCleaning();
// I am the method of Djaiv
// I am Djaiv, and I am cleaning... I have been started: 1 times.

// Листинг 9.
// Получим прототип для объекта Djaiv.
const DjaivProto = Object.getPrototypeOf(Djaiv);
console.log(DjaivProto.model); // dancing series
const DjaivProtoProto = Object.getPrototypeOf(DjaivProto);
console.log(DjaivProtoProto.model); //vacuum cleaner
const DjaivProtoProtoProto = Object.getPrototypeOf(DjaivProtoProto);
console.log(DjaivProtoProtoProto); // [object Object]

// Листинг 10.
// Объект робот-пылесос.
const MusicSeries = {
  // Объявляем новые свойства и переопределяем свойство model.
  model: "music series",
  power: 200,
  batterySize: 2100,
  boxSize: 0.5,
  workTime: 45,
  // Добавляем новый метод.
  startWipe: function () {
    // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
    console.log("I am the method of MusicSeries");
    console.log("I am starting to wipe the floor...");
  },
  // Делаем ссылку на прототип от родителя.
  __proto__: VacuumCleaner,
};

// Листинг 11.
// Объект робот-пылесос.
const Blues = {
  // Обновляем свойства под конкретную модель.
  model: "Bluees-1",
  power: 250,
  batterySize: 2500,
  workTime: 50,
};
// Установим прототип для робота.
Object.setPrototypeOf(Blues, MusicSeries);

// Листинг 12.
// Объявление базового родительского объекта смотри в листинге 1
// Объявление DancingSeries смотри в листинге 2.
// Объект Djaiv смотри в листинге 5.
// Объявление MusicSeries смотри в листинге 10.
// Объект Blues смотри в листинге 11.
if (Object.getPrototypeOf(Djaiv).model === "dancing series") {
  Djaiv.startCleaning(); //
}
if (Object.getPrototypeOf(Blues).model === "music series") {
  Blues.startWipe(); //
}
// Если мы не будем проверять прототип и просто вызовем метод чужого прототипа мы, естественно, получим ошибку.
Djaiv.startWipe(); // Uncaught TypeError: Djaiv.startWipe is not a function

// Листинг 13.
// Объявление DancingSeries смотри в листинге 2.
// Конструктор объекта робот-пылесос.
function Samba(serailNumber) {
  // Создаем свойства объекта, используя this.
  this.serialNumber = serailNumber;
  this.model = "Samba-1";
  this.power = 250;
  this.batterySize = 2500;
  this.workTime = 50;
  // Делаем ссылку на прототип от родителя.
  this.__proto__ = DancingSeries;
}
// Создадим экземпляр нового объекта.
const Samba1 = new Samba(1014778);
console.log(Samba1.serialNumber); // 1014778
console.log(Samba1.startCleaning()); // I am the method of
VacuumCleaner;
// I am cleaning... I have been started: 1 times.

// Листинг 14.
// Объявление базового родительского объекта смотри в листинге 1
// Объявление DancingSeries смотри в листинге 2.
// Конструктор объекта робот-пылесос Samba смотри в листинге 13
// Создадим 10 роботов пылесосов Samba, как на конвейере.
const robots = [];
for (let index = 0; index < 10; index++) {
  // Создадим экземпляр нового объекта и добавляем его в массив наших роботов, каждый с уникальным серийным номером.
  robots.push(new Samba(index));
}
console.log(robots[3].serialNumber); // 3
console.log(robots[7].serialNumber); // 7

// Листинг 15.
// Объявление базового родительского объекта смотри в листинге 1
// Объявление DancingSeries смотри в листинге 2.
// Конструктор объекта робот-пылесос.
function Samba(serailNumber) {
  // Создаем свойства объекта, используя this.
  this.serialNumber = serailNumber;
  this.model = "Samba-1";
  this.power = 250;
  this.batterySize = 2500;
  this.workTime = 50;
}

// Делаем ссылку на прототип от родителя.
Samba.prototype = DancingSeries;
// Создадим экземпляр нового объекта.
const Samba2 = new Samba(1014778);
console.log(Samba1.serialNumber); // 1014778
console.log(Samba1.startCleaning()); // I am the method of
VacuumCleaner;
// I am cleaning... I have been started: 1 times.

/* Оператор new
Оператор new позволяет создавать новые объекты, используя для этого
функцию-конструктор. Работает он следующим образом:
1. Создает пустой объект, который наполнит всем необходимым.
2. Устанавливает этот объект как this для функции конструктора, чтобы можно
было использовать this внутри функции и добавлять свойства и методы в
этот объект.
3. Вызывает функцию конструктор для инициализации объекта.
4. Если у функции конструктора есть свойство prototype, устанавливает
значение этого свойства как прототип для нового объекта (свойство
__proto__).
5. Устанавливает свойство constructor объекта ссылкой на функцию
конструктор.
6. Если функция конструктор не возвращает ничего или возвращает какое-то
примитивное значение, то оператор new вернет новый созданный и
наполненный объект, если конструктор возвращает объект, то оператор new
вернет этот объект. */

// ЛИСТИНГ 16
// Наша реализация оператора new через функцию createObject.
function createObject(constructor) {
  // Создаем новый объект.
  const obj = {};

  // Установим новому объекту прототипом прототип функции-конструктора
  Object.setPrototypeOf(obj, constructor.prototype);

  // Вызовем функцию-конструктор, передав ей как this созданный на шаге 1 объект, и передадим остальные аргументы, если они были переданы в createObject
  const argsArray = Array.prototype.slice.apply(arguments);
  const result = constructor.apply(obj, argsArray.slice(1));

  // Вернем новый объект, если конструктор вернул примитивное значение или undefined, иначе вернем то, что вернул конструктор.
  if (
    !result ||
    typeof result === "string" ||
    typeof result === "number" ||
    typeof result === "boolean"
  ) {
    return obj;
  } else {
    return result;
  }
}
// Создадим экземпляр нового объекта.
const Samba3 = createObject(Samba, 1014778);

// Проверим установку свойств в конструкторе.
console.log(Samba1.serialNumber); // 1014778

// Проверим, что прототип установился корректно, и мы можем вызывать методы из родительских объектов.
console.log(Samba1.__proto__); // {model: "dancing series", power: 200, batterySize: 2100, boxSize: 0.5, workTime: 45, ...}
console.log(Samba1.startCleaning()); // I am the method of
VacuumCleaner;
// I am cleaning... I have been started: 1 times.

// Проверим присвоение конструктора.
console.log(Samba1.constructor); // function Object() { [native code] }

// ❗Свойство __proto__ объекта и свойство prototype у функции
// конструктора это не одно и то же. Свойство __proto__ есть у
// экземпляра объекта, и оно позволяет находить родителей объекта,
// свойство prototype выполняет служебную функцию при создании
// экземпляра объекта через оператор new.
// Посмотрите на пример кода, который расставит точки на «i».

// Конструктор объекта робот-пылесос.
function Samba(serailNumber) {
  // Создаем свойства объекта, используя this.
  this.serialNumber = serailNumber;
  this.model = "Samba-1";
  this.power = 250;
  this.batterySize = 2500;
  this.workTime = 50;
}

// Делаем ссылку на прототип от родителя.
Samba.prototype = DancingSeries;

// Создадим экземпляр нового объекта.
const Samba4 = new Samba(1014778);

// Посмотрим на свойства __proto__ и prototype
console.log(Samba1.__proto__); // {model: "dancing series", power: 200, batterySize: 2100, boxSize: 0.5, workTime: 45, ...}
console.log(Samba1.prototype); // undefined
console.log(Samba1.__proto__ === Samba.prototype); // true

// Листинг 17.
// Объявление базового родительского объекта смотри в листинге 1.
// Объявление DancingSeries смотри в листинге 2.
// Конструктор объекта робот-пылесос Samba смотри в листинге 13.

// Создадим робот пылесосSamba.
const Samba5 = new Samba(101);

// Попробуем обратиться к стандартному методу toString, хоть мы его и не объявляли ни в одном из объектов.
console.log(Samba1.toString()); // [object Object]

// Листинг 18.
// Создадим пустой объект без прототипа.
const Samba6 = Object.create(null);
// Попробуем обратиться к стандартному методу toString и посмотреть на свойство __proto__
console.log(Samba1.toString); // undefined
console.log(Samba1.__proto__); // undefined
