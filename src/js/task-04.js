let counterValue = document.querySelector("#value");

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);

function increment() {
  counterValue.textContent = +counterValue.textContent + 1;
}

function decrement() {
  counterValue.textContent = +counterValue.textContent - 1;
}
