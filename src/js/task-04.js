// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати
// і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення
// лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або
// зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

// -------------------------------------------------------------------------------------

const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  valueEl: document.querySelector("#value"),
};

let counterValue = 0;

refs.decrementBtn.addEventListener("click", decrement);
refs.incrementBtn.addEventListener("click", increment);

function decrement() {
  counterValue -= 1;
  changeValueEl(counterValue);
}

function increment() {
  counterValue += 1;
  changeValueEl(counterValue);
}

function changeValueEl(value) {
  refs.valueEl.textContent = value;
}

console.log(counterValue);

// let counterValue = document.querySelector("#value");

// const incrementBtn = document.querySelector('[data-action="increment"]');
// const decrementBtn = document.querySelector('[data-action="decrement"]');

// incrementBtn.addEventListener("click", increment);
// decrementBtn.addEventListener("click", decrement);

// function increment() {
//   counterValue.textContent += counterValue.textContent + 1;
// }

// function decrement() {
//   counterValue.textContent -= counterValue.textContent - 1;
// }
