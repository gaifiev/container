import app.AverageValue;
import app.ComparingAverages;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

public class TestAverageValue {

    // Приложение должно быть написано в соответствии с принципами
    // объектно-ориентированного программирования.
    // Используйте Pytest (для Python) или JUnit (для Java) для написания тестов,
    // которые проверяют правильность
    // работы программы. Тесты должны учитывать различные сценарии использования
    // вашего приложения.
    // Используйте pylint (для Python) или Checkstyle (для Java) для проверки
    // качества кода.
    // Сгенерируйте отчет о покрытии кода тестами. Ваша цель - достичь минимум 90%
    // покрытия.

    @Test
    void testAverageValue() {
        List<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8));
        AverageValue averageValue = new AverageValue(list);

        assertThat(averageValue.avgValue()).isEqualTo(4);
    }

    @Test
    void testAvgFirstList() {
        ComparingAverages comparingAverages = new ComparingAverages();
        List<Integer> list1 = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8));
        List<Integer> list2 = new ArrayList<>(Arrays.asList(1, 2, 3, 4));
        AverageValue firstList = new AverageValue(list1);
        AverageValue twoList = new AverageValue(list2);

        assertThat(comparingAverages.compareAvgValueLists(firstList, twoList))
                .isEqualTo("Первый список имеет большее среднее значение");
    }

    @Test
    void testAvgTwoList() {
        ComparingAverages comparingAverages = new ComparingAverages();
        List<Integer> list1 = new ArrayList<>(Arrays.asList(1, 2, 3, 4));
        List<Integer> list2 = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8));
        AverageValue firstList = new AverageValue(list1);
        AverageValue twoList = new AverageValue(list2);

        assertThat(comparingAverages.compareAvgValueLists(firstList, twoList))
                .isEqualTo("Второй список имеет большее среднее значение");
    }

    @Test
    void testAvgValuesEqual() {
        ComparingAverages comparingAverages = new ComparingAverages();
        List<Integer> list1 = new ArrayList<>(Arrays.asList(1, 2, 3, 4));
        List<Integer> list2 = new ArrayList<>(Arrays.asList(1, 2, 3, 4));
        AverageValue firstList = new AverageValue(list1);
        AverageValue twoList = new AverageValue(list2);

        assertThat(comparingAverages.compareAvgValueLists(firstList, twoList)).isEqualTo("Средние значения равны");
    }
}