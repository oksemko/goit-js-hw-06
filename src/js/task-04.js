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
