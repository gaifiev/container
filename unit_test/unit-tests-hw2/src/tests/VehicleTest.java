package tests;

import app.Car;
import app.Motorcycle;
import app.Vehicle;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.assertj.core.api.Assertions.*;

public class VehicleTest {

    // Проверить, что экземпляр объекта Car также является экземпляром транспортного
    // средства (используя оператор instanceof).
    @Test
    public void testCarInstanceVehicle() {
        Car car = new Car("LADA", "Vesta", 2020);
        assertTrue(car instanceof Vehicle);
    };

    // Проверить, что объект Car создается с 4-мя колесами.
    @Test
    public void testCarFourWheels() {
        Car car = new Car("LADA", "Vesta", 2020);
        assertThat(car.getNumWheels()).isEqualTo(4);
    }

    // Проверить, что объект Motorcycle создается с 2-мя колесами.
    @Test
    public void testMotorcycleTwoWheels() {
        Motorcycle motorcycle = new Motorcycle("Урал", "Урал-T", 2013);
        assertThat(motorcycle.getNumWheels()).isEqualTo(2);
    }

    // Проверить, что объект Car развивает скорость 60 в режиме тестового вождения (используя метод testDrive()).
    @Test
    public void testSpeedCar() {
        Car car = new Car("LADA", "Vesta", 2020);
        car.testDrive();
        assertThat(car.getSpeed()).isEqualTo(60);
    }

    // Проверить, что объект Motorcycle развивает скорость 75 в режиме тестового вождения (используя метод testDrive()).
    @Test
    public void testSpeedMotorcycle() {
        Motorcycle motorcycle = new Motorcycle("Урал", "Урал-T", 2013);
        motorcycle.testDrive();
        assertThat(motorcycle.getSpeed()).isEqualTo(75);
    }

    // Проверить, что в режиме парковки (сначала testDrive, потом park, т.е. эмуляция движения транспорта) машина останавливается (speed = 0).
    @Test
    public void testSpeedParkCar() {
        Car car = new Car("LADA", "Vesta", 2020);
        car.testDrive();
        car.park();
        assertThat(car.getSpeed()).isEqualTo(0);
    }

    // Проверить, что в режиме парковки (сначала testDrive, потом park, т.е. эмуляция движения транспорта) мотоцикл останавливается (speed = 0).
    @Test
    public void testSpeedParkMotorcycle() {
        Motorcycle motorcycle = new Motorcycle("Урал", "Урал-T", 2013);
        motorcycle.testDrive();
        motorcycle.park();
        assertThat(motorcycle.getSpeed()).isEqualTo(0);
    }

}
