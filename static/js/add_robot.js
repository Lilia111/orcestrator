// Получаем элементы для выбора типа робота и различных частей формы
const typeRobotTimeSelect = document.getElementById('type_robot_time');
const everyWeekDiv = document.getElementById('every_week');
const everyMounthDiv = document.getElementById('every_mounth');

var typeRobot = document.getElementById('type_robot');
var timeInput = document.getElementById('robot_time');
var saveButton = document.getElementById('save_button');

// Добавляем обработчик события для изменения формы при изменении выбранного значения
typeRobotTimeSelect.addEventListener('change', function () {
    // Получаем выбранное значение
    const selectedValue = typeRobotTimeSelect.value;

    // Проверяем выбранное значение и показываем соответствующую часть формы, скрывая остальные
    if (selectedValue === 'every_week') {
        everyWeekDiv.style.display = 'block';
        everyMounthDiv.style.display = 'none';
    } else if (selectedValue === 'every_mounth') {
        everyWeekDiv.style.display = 'none';
        everyMounthDiv.style.display = 'block';
    } else {
        everyWeekDiv.style.display = 'none';
        everyMounthDiv.style.display = 'none';
    }
});

typeRobot.addEventListener('change', function () {
    const selectedValue = typeRobot.value

    if (selectedValue === 'time') {
        timeInput.style.display = 'block';
        saveButton.style.display = 'block';
    } else if (selectedValue === 'task') {
        timeInput.style.display = 'none';
        saveButton.style.display = 'block';
    }
})


//добавить добавление поля для времени при заполнении всех полей
function addTime() {
    var newInputGroup = document.createElement('div');
    newInputGroup.className = 'input-group mb-3';
    newInputGroup.id = 'time_robot';

    var newInput = document.createElement('input');
    newInput.type = 'time';
    newInput.className = 'form-control';
    newInput.id = 'time';

    var deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = 'btn btn-danger';
    deleteButton.onclick = function () {
        newInputGroup.remove();
    };

    var trashIcon = document.createElement('i');
    trashIcon.className = 'fa-solid fa-trash';

    deleteButton.appendChild(trashIcon);

    newInputGroup.appendChild(newInput);
    newInputGroup.appendChild(deleteButton);

    var inputContainer = document.getElementById('container_time');

    inputContainer.appendChild(newInputGroup);
}

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'Enter') {
        addTime();
    }
});

function addInterval() {
    var newInputGroup = document.createElement("div");
    newInputGroup.className = "input-group mb-3";
    newInputGroup.id = "interval";

    var dayStartInput = document.createElement('input');
    dayStartInput.type = 'number';
    dayStartInput.className = 'form-control';
    dayStartInput.id = 'day_start';

    // Создаем элемент-разделитель
    var dashSpan = document.createElement('span');
    dashSpan.className = 'input-group-text';
    dashSpan.textContent = '-';

    // Создаем элемент ввода для конечного дня
    var dayStopInput = document.createElement('input');
    dayStopInput.type = 'number';
    dayStopInput.className = 'form-control';
    dayStopInput.id = 'day_stop';

    var deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = 'btn btn-danger';
    deleteButton.onclick = function () {
        newInputGroup.remove();
    };

    var trashIcon = document.createElement('i');
    trashIcon.className = 'fa-solid fa-trash';

    deleteButton.appendChild(trashIcon);

    newInputGroup.appendChild(dayStartInput);
    newInputGroup.appendChild(dashSpan);
    newInputGroup.appendChild(dayStopInput);
    newInputGroup.appendChild(deleteButton);

    var inputContainer = document.getElementById('container_interval');

    inputContainer.appendChild(newInputGroup);

}