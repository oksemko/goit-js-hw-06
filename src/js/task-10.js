// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає кнопку Створити,
// після чого рендериться колекція.Натисненням на кнопку Очистити,
// колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
// у такий спосіб видаляючи всі створені елементи.

// -----------------------------------------------------------------------------------------------

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let initialSizeOfBox = 30;
const refs = {
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  divBoxEl: document.querySelector("#boxes"),
  inputEl: document.querySelector("#controls").firstElementChild,
};

refs.createBtn.addEventListener("click", createBtnListener);
refs.destroyBtn.addEventListener("click", destroyBoxes);

function createBtnListener() {
  const amountOfBoxes = createBoxes(refs.inputEl.value);
  refs.divBoxEl.append(...amountOfBoxes);
}

function createBoxes(amount) {
  let sizeOfBox = 0;
  const boxElements = [];
  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");
    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.display = "block";
    sizeOfBox = initialSizeOfBox + i * 10;
    boxEl.style.width = `${sizeOfBox}px`;
    boxEl.style.height = `${sizeOfBox}px`;
    boxElements.push(boxEl);
  }

  initialSizeOfBox = sizeOfBox + 10;
  return boxElements;
}

function destroyBoxes() {
  refs.divBoxEl.innerHTML = "";
  // initialSizeOfBox = 30;
}
