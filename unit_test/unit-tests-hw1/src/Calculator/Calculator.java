package Calculator;

import static org.assertj.core.api.Assertions.*;
import static org.assertj.core.api.Assertions.assertThat;

// Задание 1. ** В классе Calculator создайте метод calculateDiscount, который принимает сумму
// покупки и процент скидки и возвращает сумму с учетом скидки. Ваша задача - проверить этот метод
// с использованием библиотеки AssertJ. Если метод calculateDiscount получает недопустимые аргументы,
// он должен выбрасывать исключение ArithmeticException. Не забудьте написать тесты для проверки этого поведения.

public class Calculator {
    public static void main(String[] args) {
        System.out.println("Сумма покупки = " + calculateDiscount(100, 10));
    //    System.out.println("Сумма покупки = " + calculateDiscount(100, -10));
//        System.out.println("Сумма покупки = " + calculateDiscount(-100, 10));
    }

    // В классе Calculator создайте метод calculateDiscount,
    // который принимает сумму покупки и процент скидки
    // и возвращает сумму с учетом скидки.

    public static float calculateDiscount(float purchaseAmount, float discountAmount) {
        float countDiscountAmount = 0; // счетчик

        if (purchaseAmount >= 0) {
            if (discountAmount >= 0 && discountAmount <= 100) {
                countDiscountAmount = purchaseAmount - (purchaseAmount * discountAmount) / 100;
            } else {
                throw new ArithmeticException("Скидка не может быть отрицательной");
            }
        } else {
            throw new ArithmeticException("Сумма покупки не может быть отрицательной");
        }
        return countDiscountAmount;
    }
}

class CalculatorTest {
    public static void main(String[] args) {
        assertThat(Calculator.calculateDiscount(-100, 10)).isEqualTo(80);
        // assertThat(Calculator.calculateDiscount(100, -10)).isEqualTo(10);
        // assertThat(Calculator.calculateDiscount(100, 1)).isEqualTo(99);

        assertThatThrownBy(
                () -> Calculator.calculateDiscount(-100, 10))
                .isInstanceOf(ArithmeticException.class).hasMessage("Сумма покупки не может быть отрицательной");

        assertThatThrownBy(
                () -> Calculator.calculateDiscount(100, -10))
                .isInstanceOf(ArithmeticException.class).hasMessage("Скидка покупки не может быть отрицательной");

   
    }
}
