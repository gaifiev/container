
import urllib.request

# Эта переменная содержит запрос к 'http://localhost:6866/'

fp = urllib.request.urlopen("http://localhost:6866/")

# 'encodedContent' соответствует закодированному ответу сервера ('index.html')
# 'decodedContent' соответствует раскодированному ответу сервера (тут будет то, что мы хотим вывести на экран)

encodedContent = fp.read()
decodedContent = encodedContent.decode("utf8")

# Выводим содержимое файла, полученного с сервера ('index.html')

print(decodedContent)