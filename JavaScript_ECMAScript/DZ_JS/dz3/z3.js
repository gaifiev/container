/* Задача необязательная для выполнения

Задача: Создать класс "Студент", который имеет приватные свойства "имя", "возраст" и "средний балл". Класс должен иметь методы для установки и получения значений свойств, а также метод для вывода информации о студенте.
Про приватные свойства и методы - https://learn.javascript.ru/private-protected-properties-methods

const student = new Student();
student.setName('Питер Паркер);
student.setAge(20);
student.setAverageGrade(85);
student.displayInfo(); */

// =========================================
class Student {
    constructor() {
        this._name = '';
        this._age = 0;
        this._averageGrade = 0;
    }

    setName(name) {
        this._name = name;
    }

    setAge(age) {
        if (age > 0) {
            this._age = age;
        }
    }

    setAverageGrade(averageGrade) {
        if (averageGrade >= 0 && averageGrade <= 100) {
            this._averageGrade = averageGrade;
        }
    }

    displayInfo() {
        console.log(`Name: ${this._name}`);
        console.log(`Age: ${this._age}`);
        console.log(`Average grade: ${this._averageGrade}`);
    }
}

const student = new Student();
student.setName('Питер Паркер');
student.setAge(20);
student.setAverageGrade(85);
student.displayInfo();

