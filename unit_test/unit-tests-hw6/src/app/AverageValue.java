package app;

import java.util.ArrayList;
import java.util.List;

//Задание 1. Создайте программу на Python или Java, которая принимает два списка чисел и выполняет следующие действия:
//        a. Рассчитывает среднее значение каждого списка.
public class AverageValue {
    List<Integer> list = new ArrayList<>();

    public AverageValue(List<Integer> list) {
        this.list = list;
    }

    public double avgValue() {
        int average = 0;
        int sum = 0;
        for (Integer element : list) {
            sum = sum + element;
        }
        average = sum / list.size();
        return average;
    }
}
