const welcomePageEl = document.getElementById("welcome-page");
const questionsPageEl = document.getElementById("questions-page");
const resultsPageEl = document.getElementById("results-page");
const startBtnEl = document.getElementById("start-btn");
const questionTextEl = document.getElementById("question-text");
const optionsEl = document.getElementById("options");
const percyCardEl = document.getElementById("percy-result");
const annabethCardEl = document.getElementById("annabeth-result");
const groverCardEl = document.getElementById("grover-result");
const startAgainBtnEl = document.getElementById("start-again-btn");

welcomePageEl.style.display = "block";
questionsPageEl.style.display = "none";
resultsPageEl.style.display = "none";

percyCardEl.style.display = "none";
annabethCardEl.style.display = "none";
groverCardEl.style.display = "none";

let currentQuestionIndex = 0;

let percy = 0;
let annabeth = 0;
let grover = 0;

function stopQuiz() {
  questionsPageEl.style.display = "none";
  resultsPageEl.style.display = "block";

  if (percy > annabeth && percy > grover) {
    percyCardEl.style.display = "block";
  }
  if (annabeth > percy && annabeth > grover) {
    annabethCardEl.style.display = "block";
  }
  if (grover > percy && grover > annabeth) {
    groverCardEl.style.display = "block";
  }

  // if two characters have the same core:
  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

  if (annabeth == grover && annabeth > percy && grover > percy) {
    const random = [annabethCardEl, groverCardEl];
    const index = getRandomInt(0, 2);
    random[index].style.display = "block";
  }
  if (annabeth == percy && annabeth > grover && percy > grover) {
    const random = [annabethCardEl, percyCardEl];
    const index = getRandomInt(0, 2);
    random[index].style.display = "block";
  }
  if (percy == grover && percy > annabeth && grover > annabeth) {
    const random = [percyCardEl, groverCardEl];
    const index = getRandomInt(0, 2);
    random[index].style.display = "block";
  }
}

startBtnEl.addEventListener("click", function () {
  welcomePageEl.style.display = "none";
  questionsPageEl.style.display = "block";
  displayQuestions();
});

function displayQuestions() {
  if (currentQuestionIndex >= questions.length) {
    //maybe just > no =
    stopQuiz();
    return;
  }
  // clear previous options and set question text
  optionsEl.innerHTML = "";
  questionTextEl.textContent = questions[currentQuestionIndex].question;

  for (let i = 0; i < questions[currentQuestionIndex].options.length; i++) {
    const optionDiv = document.createElement("div");
    optionsEl.appendChild(optionDiv);
    const optionText = document.createElement("h2");
    optionDiv.appendChild(optionText);
    optionText.textContent = questions[currentQuestionIndex].options[i];
  }
}

optionsEl.addEventListener("click", function (event) {
  const selectedAnswer = event.target.textContent;

  if (selectedAnswer === questions[currentQuestionIndex].percy) {
    percy++;
  } else if (selectedAnswer === questions[currentQuestionIndex].annabeth) {
    annabeth++;
  } else if (selectedAnswer === questions[currentQuestionIndex].grover) {
    grover++;
  }
  currentQuestionIndex++;
  displayQuestions();
});

startAgainBtnEl.addEventListener("click", function () {
  window.location.reload();
});
