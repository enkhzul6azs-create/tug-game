const questions = [
  {
    rule: "Ялгах эгшиг",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["тэмдэг", "тэмдэгь", "темдэг", "тэмдг"],
    correctAnswer: "тэмдэг"
  },
  {
    rule: "Ялгах эгшиг",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["хичээл", "хичиэл", "хчээл", "хичээль"],
    correctAnswer: "хичээл"
  },
  {
    rule: "Эр үгийн ы, эм үгийн ий",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["номын", "номийн", "номынь", "номни"],
    correctAnswer: "номын"
  },
  {
    rule: "Эр үгийн ы, эм үгийн ий",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["гэрийн", "гэрын", "гэрийнь", "гэриийн"],
    correctAnswer: "гэрийн"
  },
  {
    rule: "Эр үгийн ы, эм үгийн ий",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["морины", "мориний", "морны", "морийны"],
    correctAnswer: "морины"
  },
  {
    rule: "Г зөв залгах",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["өгүүлбэр", "өгуулбэр", "өгүлбэр", "өгүүлбэрь"],
    correctAnswer: "өгүүлбэр"
  },
  {
    rule: "Г зөв залгах",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["хөгжим", "хогжим", "хөгжэм", "хөгжимь"],
    correctAnswer: "хөгжим"
  },
  {
    rule: "Залган бичих дүрэм",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["номонд", "номнд", "номмонд", "номондь"],
    correctAnswer: "номонд"
  },
  {
    rule: "Залган бичих дүрэм",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["сургуульд", "сургуулид", "сургуйлд", "сургуулььд"],
    correctAnswer: "сургуульд"
  },
  {
    rule: "Залган бичих дүрэм",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["багштай", "багштэй", "бахштай", "багштаи"],
    correctAnswer: "багштай"
  },
  {
    rule: "Я, Е, Ё үсгийн зөв хэрэглээ",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["баяр", "байар", "баиар", "баяар"],
    correctAnswer: "баяр"
  },
  {
    rule: "Я, Е, Ё үсгийн зөв хэрэглээ",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["оюутан", "ойутан", "оювтан", "оюутэн"],
    correctAnswer: "оюутан"
  }
];

const questionText = document.getElementById("questionText");
const ruleLabel = document.getElementById("ruleLabel");
const leftAnswers = document.getElementById("leftAnswers");
const rightAnswers = document.getElementById("rightAnswers");
const scoreLeftEl = document.getElementById("scoreLeft");
const scoreRightEl = document.getElementById("scoreRight");
const questionNumberEl = document.getElementById("questionNumber");
const statusText = document.getElementById("statusText");
const ropeGroup = document.getElementById("ropeGroup");
const restartBtn = document.getElementById("restartBtn");

let scoreLeft = 0;
let scoreRight = 0;
let ropePosition = 0;
let roundLocked = false;
let questionCount = 0;
let currentQuestionData = null;
let autoNextTimeout = null;

const STEP = 36;
const WIN_LIMIT = 180;
const AUTO_NEXT_DELAY = 1000;

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

function updateScore() {
  scoreLeftEl.textContent = scoreLeft;
  scoreRightEl.textContent = scoreRight;
}

function disableAllButtons() {
  document.querySelectorAll(".answer-btn").forEach((btn) => {
    btn.disabled = true;
  });
}

function renderAnswers(container, team, questionData) {
  container.innerHTML = "";

  questionData.shuffledOptions.forEach((option) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = option;
    btn.addEventListener("click", () => handleAnswer(team, option, btn));
    container.appendChild(btn);
  });
}

function renderQuestion() {
  clearTimeout(autoNextTimeout);

  roundLocked = false;
  questionCount += 1;

  const q = getRandomQuestion();
  const shuffledOptions = shuffleArray(q.options);

  currentQuestionData = {
    ...q,
    shuffledOptions
  };

  questionNumberEl.textContent = questionCount;
  ruleLabel.textContent = `Дүрэм: ${currentQuestionData.rule}`;
  questionText.textContent = currentQuestionData.question;
  statusText.textContent = "Хэн түрүүлж зөв хариулах вэ?";

  renderAnswers(leftAnswers, "left", currentQuestionData);
  renderAnswers(rightAnswers, "right", currentQuestionData);
}

function animateRope(direction) {
  ropeGroup.style.setProperty("--rope-x", `${ropePosition}px`);
  ropeGroup.style.transform = `translate(-50%, -50%) translateX(${ropePosition}px)`;

  ropeGroup.classList.remove("bounce-left", "bounce-right");
  void ropeGroup.offsetWidth;

  if (direction === "left") {
    ropeGroup.classList.add("bounce-left");
  } else {
    ropeGroup.classList.add("bounce-right");
  }
}

function checkWinner() {
  if (Math.abs(ropePosition) >= WIN_LIMIT) {
    if (ropePosition < 0) {
      statusText.textContent = "Баг 1 тоглоомд яллаа!";
      setTimeout(() => alert("Баг 1 тоглоомд яллаа!"), 100);
    } else {
      statusText.textContent = "Баг 2 тоглоомд яллаа!";
      setTimeout(() => alert("Баг 2 тоглоомд яллаа!"), 100);
    }

    disableAllButtons();
    return true;
  }

  return false;
}

function handleAnswer(team, chosenAnswer, clickedButton) {
  if (roundLocked) return;
  if (!currentQuestionData) return;

  const isCorrect = chosenAnswer === currentQuestionData.correctAnswer;

  if (!isCorrect) {
    clickedButton.classList.add("wrong");
    clickedButton.disabled = true;

    if (team === "left") {
      statusText.textContent = "Баг 1 буруу дарлаа. Дахин оролдож болно.";
    } else {
      statusText.textContent = "Баг 2 буруу дарлаа. Дахин оролдож болно.";
    }
    return;
  }

  roundLocked = true;
  clickedButton.classList.add("correct");

  if (team === "left") {
    scoreLeft += 1;
    ropePosition -= STEP;
    statusText.textContent = "Баг 1 түрүүлж зөв хариуллаа!";
    animateRope("left");
  } else {
    scoreRight += 1;
    ropePosition += STEP;
    statusText.textContent = "Баг 2 түрүүлж зөв хариуллаа!";
    animateRope("right");
  }

  updateScore();
  disableAllButtons();

  const hasWinner = checkWinner();
  if (hasWinner) return;

  autoNextTimeout = setTimeout(() => {
    renderQuestion();
  }, AUTO_NEXT_DELAY);
}

function restartGame() {
  clearTimeout(autoNextTimeout);

  scoreLeft = 0;
  scoreRight = 0;
  ropePosition = 0;
  roundLocked = false;
  questionCount = 0;
  currentQuestionData = null;

  ropeGroup.style.setProperty("--rope-x", "0px");
  ropeGroup.style.transform = "translate(-50%, -50%) translateX(0px)";
  ropeGroup.classList.remove("bounce-left", "bounce-right");

  updateScore();
  renderQuestion();
}

restartBtn.addEventListener("click", restartGame);

updateScore();
renderQuestion();