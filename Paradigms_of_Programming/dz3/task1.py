# Контекст
# Вероятнее всего, вы с детства знакомы с этой игрой. Пришло
# время реализовать её. Два игрока по очереди ставят крестики
# и нолики на игровое поле. Игра завершается когда кто-то
# победил, либо наступила ничья, либо игроки отказались
# играть.
# ● Задача
# Написать игру в “Крестики-нолики”. Можете использовать
# любые парадигмы, которые посчитаете наиболее
# подходящими. Можете реализовать доску как угодно - как
# одномерный массив или двумерный массив (массив массивов).
# Можете использовать как правила, так и хардкод, на своё
# усмотрение. Главное, чтобы в игру можно было поиграть через
# терминал с вашего компьютера.

# использую императивную парадигму
# создаем поле 3x3
game_board = [[" " for _ in range(3)] for _ in range(3)]

# метод для отображения в терминале 
def displayBoard(board):
    for row in board:
        print("|".join(row))
        print("-" * 5)

# метод для проверки вин
def checkWin(board, player):
    # Проверяем строки, столбцы и диагонали
    for i in range(3):
        if all(board[i][j] == player for j in range(3)) or all(board[j][i] == player for j in range(3)):
            return True
    if all(board[i][i] == player for i in range(3)) or all(board[i][2 - i] == player for i in range(3)):
        return True
    return False

# метод для хода игрока
def makeMove(board, player, row, col):
    if board[row][col] == " ":
        board[row][col] = player
        return True
    return False

# цикл игры
current_player = "X"
while True:
    displayBoard(game_board)
    print(f"Ход игрока {current_player}")
    row = int(input("Введите номер строки (0, 1, 2): "))
    col = int(input("Введите номер столбца (0, 1, 2): "))
    
    if row < 0 or row > 2 or col < 0 or col > 2:
        print("Некорректный ввод. Введите номер строки и столбца от 0 до 2.")
        continue
    
    if makeMove(game_board, current_player, row, col):
        if checkWin(game_board, current_player):
            displayBoard(game_board)
            print(f"{current_player} победил")
            break
        elif all(all(cell != " " for cell in row) for row in game_board):
            displayBoard(game_board)
            print("Ничья!")
            break
        current_player = "O" if current_player == "X" else "X"
    else:
        print("Это поле уже занято, попробуйте другую комбинацию")
