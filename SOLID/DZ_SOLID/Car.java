package DZ_SOLID;

// 5) Переписать код в соответствии с Dependency Inversion Principle:
// класс Car не должен зависеть от реализации двигателя любого типа топлива
public class Car {
    private Engine engine;

    // конструктор принимает двигатель через интерфейс Engine
    public Car(Engine engine) {
        this.engine = engine;
    }

    public void start() {
        this.engine.start();
    }
}

// интерфейс Engine это общий контракт для всех типов двигателей
interface Engine {
    void start();
}

// класс бенщзинового двигателя
class PetrolEngine implements Engine {
    @Override
    public void start() {
        // метод запуска бензинового двигателя
    }
}
// класс дизельного двигателя
class DieselEngine implements Engine {
    @Override
    public void start() {
        // метод запуска дизеьльного двигателя
    }
}
// Разорвать зависимость классов Car и PetrolEngine. У машины же может быть
// DieselEngine.