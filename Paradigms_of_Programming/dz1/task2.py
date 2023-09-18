# Задача №2
# Написать точно такую же процедуру, но в декларативном стиле

def sort_list_declarative(numbers):
    # Используем встроенную функцию sorted с параметром reverse=True
    return sorted(numbers, reverse=True)

numbers = [4, 5, 2, 7, 1, 3, 8, 9, 6]
sort_numbers = sort_list_declarative(numbers)
print(sort_numbers)