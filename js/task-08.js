// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.



const [input, renderBtn, destroyBtn] = document.querySelector('#controls').children;
const boxContainer = document.querySelector('#boxes');


renderBtn.addEventListener('click', callback);
destroyBtn.addEventListener('click', destroyBoxes);

function createRandom() {
  return `rgb(${(Math.random() * 255) << 0}, ${(Math.random() * 255) << 0}, ${
    (Math.random() * 255) << 0
  })`;
}

let sizeDiv = 30;


function callback() {
    +input.value <= +input.getAttribute('max') && +input.value >= 1
        ? createBoxes(+input.value)
        : alert('введите число от 1 до 100')
}
function createBoxes(amount) {
    let string = '';
    for (let i = 0; i < amount; i += 1) {
        string += `
    <div style="background-color:${createRandom()};
width:${sizeDiv}px;
height:${sizeDiv}px;"></div>
    `;
        sizeDiv += 10;
    }
    boxContainer.insertAdjacentHTML('beforeend', string);
}

function destroyBoxes() {
    boxContainer.innerHTML = '';
    input.value = 0;
    sizeDiv = 30;
}
