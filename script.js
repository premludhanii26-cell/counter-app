// Select elements from DOM
const countValue = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

// State
let count = 0;

// Increase count
increaseBtn.addEventListener("click", function () {
  count++;
  countValue.textContent = count;
});

// Decrease count
decreaseBtn.addEventListener("click", function () {
  count--;
  countValue.textContent = count;
});

// Reset count
resetBtn.addEventListener("click", function () {
  count = 0;
  countValue.textContent = count;
});
