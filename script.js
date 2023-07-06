const scoreOne = document.querySelector(".scoreOne");
const scoreTwo = document.querySelector(".scoreTwo");
const dropdown = document.querySelector("#dropdown");
const increaseOne = document.querySelector(".increaseScoreOne");
const increaseTwo = document.querySelector(".increaseScoreTwo");
const reset = document.querySelector(".reset");

let maxScore;
dropdown.addEventListener("input", function () {
  maxScore = dropdown.value;
  if (parseInt(maxScore) > 0) {
    increaseOne.classList.remove("disable");
    increaseTwo.classList.remove("disable");
  } else if (parseInt(maxScore) === 0) {
    increaseTwo.classList.add("disable");
    increaseOne.classList.add("disable");
  }
  scoreOne.innerText = "0";
  scoreTwo.innerText = "0";
});

increaseOne.addEventListener("click", function () {
  if (!increaseOne.classList.contains("disable")) {
    score = Number(scoreOne.innerText) + 1;
    scoreOne.innerText = `${score}`;
    if (score === parseInt(maxScore)) {
      scoreOne.classList.add("win");
      scoreTwo.classList.add("loose");
      increaseOne.classList.add("disable");
      increaseTwo.classList.add("disable");
    }
  }
});
increaseTwo.addEventListener("click", function () {
  if (!increaseTwo.classList.contains("disable")) {
    score = Number(scoreTwo.innerText) + 1;
    scoreTwo.innerText = `${score}`;
    if (score === parseInt(maxScore)) {
      scoreTwo.classList.add("win");
      scoreOne.classList.add("loose");
      increaseOne.classList.add("disable");
      increaseTwo.classList.add("disable");
    }
  }
});
reset.addEventListener("click", function () {
  scoreOne.innerText = "0";
  scoreTwo.innerText = "0";
  scoreOne.classList.remove("win", "loose");
  scoreTwo.classList.remove("win", "loose");
  if (Number(maxScore) > 0) {
    increaseOne.classList.remove("disable");
    increaseTwo.classList.remove("disable");
  }
});
