# Таблица умножения
# Домашнее задание
# ● Условие
# На вход подается число n.
# ● Задача
# Написать скрипт в любой парадигме, который выводит на экран таблицу умножения всех чисел от 1 до n.
# Обоснуйте выбор парадигм.
# ● Пример вывода:
# 1 * 1 = 1
# 1 * 2 = 2
# 1 * 3 = 3
# 1 * 4 = 4
# 1 * 5 = 5
# 1 * 6 = 6
# ..
# 1 * 9 = 9
# императивное решение
def multiplicationTable(n):
    for i in range(1, n + 1):
        for j in range(1, 10):
            result = i * j
            print(f"{i} * {j} = {result}")

n = int(input("Введите число n: "))
multiplicationTable(n)

# императивная парадигма: 
# Этот код начинает с цикла, который перебирает числа от 1 до n, а затем вложенный цикл, который выводит таблицу умножения для каждого числа от 1 до 9. Каждое уравнение выводится на экран в формате "a * b = результат", где a и b - числа из диапазона 1 до n и 1 до 9 соответственно.
# Простота и понятность: делает код простым для чтения и понимания.
# Линейный ход выполнения: задача вывода таблицы умножения имеет линейный ход выполнения, где каждая строка таблицы создается поочередно.
# Итерации и циклы позволяют эффективно повторять операции для разных значений, что подходит для создания таблицы умножения, где одни и те же операции выполняются многократно.
# Удобное форматирование вывода позволяет легко форматировать вывод в данной задаче, где каждое уравнение выводится в определенном формате.
# Минимальный набор данных позволяет решить задачу простотой и не требует сохранения большого объема данных.
# Таким образом, использование императивного стиля программирования делает код более понятным, простым и легко читаемым

# декларативное решение
def generateMultiplicationTable(n):
    return [(i, j, i * j) for i in range(1, n + 1) for j in range(1, 10)]

def printMultiplicationTable(table):
    for entry in table:
        print(f"{entry[0]} * {entry[1]} = {entry[2]}")

n = int(input("Введите число n: "))
table = generateMultiplicationTable(n)
printMultiplicationTable(table)

# Декларативный стиль помогает выразить цель программы более четко. Мы объявляем функцию generateMultiplicationTable, которая создает таблицу умножения в виде списка кортежей (i, j, i * j) для всех значений i от 1 до n и j от 1 до 9. Затем мы используем функцию printMultiplicationTable, чтобы вывести этот список.
# Также присутствует отделение логики и улучшает читабелность и управляемость кода.
# Считаю, что использование декларативной парадигмы прибавляет сложность по сравнению с императиным решением