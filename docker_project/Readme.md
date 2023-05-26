# запуск вебсервера и клиента с выводом многостраничного сайта
- http://localhost:6866 для запуска проекта

# Шпаргалка по Docker Compose
### Сборка и запуск контейнеров
- `docker-compose up` – запуск контейнеров из `docker-compose.yml`
- `docker-compose up -d` – запуск контейнеров в фоновом режиме
- `docker-compose up --build` – пересборка контейнеров перед запуском
### Остановка и удаление контейнеров
- `docker-compose down` – остановка и удаление контейнеров из `docker-compose.yml`
- `docker-compose down -v` – остановка и удаление контейнеров и томов
### Управление контейнерами
- `docker-compose ps` – список запущенных контейнеров
- `docker-compose logs` – логи контейнеров
- `docker-compose exec <service-name> <command>` – выполнить команду внутри контейнера
### Переменные окружения
- `environment` – установка переменных окружения в `docker-compose.yml`
- `env_file` – установка переменных окружения из файла
### Сети
- `networks` – создание сети в `docker-compose.yml`
- `external` – подключение к внешней сети
### Тома
- `volumes` – создание томов в `docker-compose.yml`
- `external` – подключение к внешнему тому
