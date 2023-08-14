function creatObject(constructor) {
    const obj = {};

    Object.setPrototypeOf(obj, constructor.prototype);

    const argsArray = Array.prototype.slice.apply(arguments);

    const result = constructor.apply(obj,argsArray.slice(1));

    if (!result || typeof result === 'string' || typeof result ==='number' || typeof result === 'boolean') {
        return obj
    } else {
        return result;
    }
}

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
    const Samba1 = new Samba(1014778);
    // Посмотрим на свойства __proto__ и prototype
    console.log(Samba1.__proto__); // {model: "dancing series",power: 200, batterySize: 2100, boxSize: 0.5, workTime: 45, ...}
    console.log(Samba1.prototype); // undefined
    console.log(Samba1.__proto__ === Samba.prototype); // true