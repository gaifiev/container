package app;

public class ComparingAverages {

    // b. Сравнивает эти средние значения и выводит соответствующее сообщение:
    // - ""Первый список имеет большее среднее значение"", если среднее значение
    // первого списка больше.
    // - ""Второй список имеет большее среднее значение"", если среднее значение
    // второго списка больше.
    // - ""Средние значения равны"", если средние значения списков равны.
    public String compareAvgValueLists(AverageValue firstList, AverageValue twoList) {

        if (firstList.avgValue() > twoList.avgValue()) {
            return "Первый список имеет большее среднее значение";
        } else if (firstList.avgValue() < twoList.avgValue()) {
            return "Второй список имеет большее среднее значение";
        }
        return "Средние значения равны";
    }
}
