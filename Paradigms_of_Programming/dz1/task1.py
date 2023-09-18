# Задача №1
# Дан список целых чисел numbers. Необходимо написать в императивном стиле процедуру для сортировки числа в списке в порядке убывания. Можно использовать любой алгоритм сортировки.

def sort_list_imperative(numbers):
    n = len(numbers)
    for i in range(n):
        for j in range(0, n - i - 1):
            # если текущий элемент больше следующего элемента массива, то меняем их местами
            if numbers[j] < numbers[j + 1]:
                numbers[j], numbers[j + 1] = numbers[j + 1], numbers[j]
        # если итерация закончилась, то список массива уже отсортирован
    return numbers


numbers = [4, 5, 2, 7, 1, 3, 8, 9, 6]
sort_numbers = sort_list_imperative(numbers)
print(sort_numbers)
