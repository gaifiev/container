import app.MathMethods;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.*;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

public class MathMetodsTest {
    private MathMethods checkNumber;

    @BeforeEach
    void testInit() {
        checkNumber = new MathMethods();
    }

    @Test
    void testEvenNumber() {
        assertThat(checkNumber.evenOddNumber(2)).isTrue();
    }

    @Test
    void testOddNumbers() {
        assertThat(checkNumber.evenOddNumber(3)).isFalse();
    }

    // проверяем в зоне нужных интервалов
    @ParameterizedTest
    @ValueSource(ints = { 25, 30, 100, 40, 50 })
    void testNumbersArePresentInInterval(int number) {
        assertThat(checkNumber.numberInInterval(number)).isTrue();
    }

    // проверяем на вылет за пределы интервалов
    @ParameterizedTest
    @ValueSource(ints = { 23, 103 })
    void testNumbersAreMissingInInterval(int number) {
        assertThat(checkNumber.numberInInterval(number)).isFalse();
    }
}
