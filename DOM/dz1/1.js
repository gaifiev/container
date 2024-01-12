// Вы разрабатываете веб-страницу для отображения расписания занятий в спортивном клубе. Каждое занятие имеет название, время проведения, максимальное количество участников и текущее количество записанных участников.

// 1. Создайте веб-страницу с заголовком "Расписание занятий" и областью для отображения занятий.

// 2. Загрузите информацию о занятиях из предоставленных JSON-данных. Каждое занятие должно отображаться на странице с указанием его названия, времени проведения, максимального количества участников и текущего количества записанных участников.

// 3. Пользователь может нажать на кнопку "Записаться" для записи на занятие. Если максимальное количество участников уже достигнуто, кнопка "Записаться" становится неактивной.

// 4. После успешной записи пользователя на занятие, обновите количество записанных участников и состояние кнопки "Записаться".

const scheduleData = [
  {
    name: "Занятие 1",
    time: "12:00 - 13:30",
    maxQuantityParticipants: 12,
    currentQuantityParticipants: 9,
  },
  {
    name: "Занятие 2",
    time: "9:00 - 11:00",
    maxQuantityParticipants: 10,
    currentQuantityParticipants: 8,
  },
  {
    name: "Занятие 3",
    time: "14:00 - 15:30",
    maxQuantityParticipants: 10,
    currentQuantityParticipants: 8,
  },
  {
    name: "Занятие 4",
    time: "16:00 - 18:00",
    maxQuantityParticipants: 15,
    currentQuantityParticipants: 12,
  },
];

// рендерим для отображения
function renderSchedule() {
  const scheduleContainer = document.getElementById("schedule");

  scheduleContainer.innerHTML = "";

  scheduleData.forEach(function (classItem) {
    const classElement = document.createElement("div");

    classElement.classList.add("class-item");
    classElement.innerHTML = `
    <h3>${classItem.name}</h3>
    <p>Время: ${classItem.time}</p>
    <p>Макс. участников: ${classItem.maxQuantityParticipants}</p>
    <p>Записано: ${classItem.currentQuantityParticipants}</p>

    <button onclick="register(${scheduleData.indexOf(classItem)})" ${
      classItem.currentQuantityParticipants ===
      classItem.maxQuantityParticipants
        ? "disabled"
        : ""
    }>Записаться</button>
    `;
    scheduleContainer.appendChild(classElement);
  });
}

function register(index) {
  if (
    scheduleData[index].currentQuantityParticipants <
    scheduleData[index].maxQuantityParticipants
  ) {
    scheduleData[index].currentQuantityParticipants++;
    renderSchedule();
    alert(`Вы успешно записались на занятие "${scheduleData[index].name}"`);
  }
}

renderSchedule();
