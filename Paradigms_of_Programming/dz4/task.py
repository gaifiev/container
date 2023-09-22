# Контекст
# Корреляция - статистическая мера, используемая для оценки
# связи между двумя случайными величинами.
# ● Ваша задача
# Написать скрипт для расчета корреляции Пирсона между
# двумя случайными величинами (двумя массивами). Можете
# использовать любую парадигму, но рекомендую использовать
# функциональную, т.к. в этом примере она значительно
# упростит вам жизнь.

import random
import numpy as np
# рандомайзер массива
x = [random.random() for _ in range(100)]
y = [random.random() for _ in range(100)]

# метод для расчета корреляции Пирсона
def pirsonCorrelation(x, y):
    # преобразование в массив
    x = np.array(x)
    y = np.array(y)

    # Вычисляем среднее арифметическое
    avg_arithmetic_x = np.mean(x)
    avg_arithmetic_y = np.mean(y)

    # расчет ковариации
    covariance = np.sum((x - avg_arithmetic_x) * (y - avg_arithmetic_y))

    # возведение в квадрат каждое отклонение и считаем сумму:
    deviation_x = np.sqrt(np.sum((x - avg_arithmetic_x) ** 2))
    deviation_y = np.sqrt(np.sum((y - avg_arithmetic_y) ** 2))

    # расчет корреляции Пирсона
    correlation = covariance / (deviation_x * deviation_y)

    return correlation

correlation = pirsonCorrelation(x, y)
print(f"Корреляция Пирсона: {correlation}")
