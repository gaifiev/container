// 1. Задача

// Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка. Данные при получении необходимо сохранить в локальное хранилище браузера localStorage. При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage

// 2. Необязательная задача

// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

// const url = 'https://jsonplaceholder.typicode.com/users';
// const getData2 = async(url) => {
//     const res = await fetch(url);
//     const data = await res.json()
//     return data
// };

// try {
//     const users = await getData2(url)

// console.log(users);
// } catch (error) {
//     console.error('спать иди');
// }

document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById("user-list");

    // получение данных пользователей
    async function getUsers() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const users = await response.json();
            return users;
        } catch (error) {
            console.error("что-то не так:", error);
            return [];
        }
    }

    // отображение пользователей
    function displayUsers(users) {
        userList.innerHTML = "";
        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.name;
            
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => deleteUser(user.id));

            li.appendChild(deleteButton);
            userList.appendChild(li);
        });
    }

    // удаление пользователя
    function deleteUser(userId) {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const updatedUsers = users.filter(user => user.id !== userId);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        displayUsers(updatedUsers);
    }

    async function init() {
        const users = await getUsers();
        localStorage.setItem("users", JSON.stringify(users));
        displayUsers(users);
    }

    init();
});
