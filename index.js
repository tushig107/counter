let userChoice1 = 0;

const increase = document.getElementById("increase");
increase.addEventListener("click", function () {
  userChoice1++;
  displayResult();
});

const decrease = document.getElementById("decrease");
decrease.addEventListener("click", function () {
  userChoice1--;
  displayResult();
});

const reset = document.getElementById("reset");
reset.addEventListener("click", function () {
  userChoice1 = 0;
  displayResult();
});

function displayResult() {
  document.getElementById("count").innerHTML = userChoice1;
}
