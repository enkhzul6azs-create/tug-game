alert("GAME FINAL VERSION");

// ================= QUESTIONS =================
const questions = [
  {
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["зурий", "зуря", "зурья", "зуръя"],
    correctAnswer: "зуръя"
  },
  {
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["номын", "номийн", "номний", "ноомын"],
    correctAnswer: "номын"
  },
  {
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["тэмдэгийг", "тэмдгийг", "тэмдгыг", "тэмдэгыг"],
    correctAnswer: "тэмдгийг"
  },
  {
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["гэрийн", "гэрын", "гэриийн", "гэрийнь"],
    correctAnswer: "гэрийн"
  }
];

// ================= VARIABLES =================
const questionText = document.getElementById("questionText");
const leftAnswers = document.getElementById("leftAnswers");
const rightAnswers = document.getElementById("rightAnswers");
const statusText = document.getElementById("statusText");
const restartBtn = document.getElementById("restartBtn");

let currentQuestion;
let ropePosition = 0;
let roundLocked = false;

const STEP = 40;
const WIN_LIMIT = 200;

// ================= FUNCTIONS =================

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function renderQuestion() {
  roundLocked = false;

  currentQuestion = questions[Math.floor(Math.random() * questions.length)];

  questionText.textContent = currentQuestion.question;

  leftAnswers.innerHTML = "";
  rightAnswers.innerHTML = "";

  const shuffled = shuffle([...currentQuestion.options]);

  shuffled.forEach(opt => {
    const btn1 = document.createElement("button");
    btn1.textContent = opt;
    btn1.onclick = () => checkAnswer(opt, "left", btn1);
    leftAnswers.appendChild(btn1);

    const btn2 = document.createElement("button");
    btn2.textContent = opt;
    btn2.onclick = () => checkAnswer(opt, "right", btn2);
    rightAnswers.appendChild(btn2);
  });
}

function moveRope(direction) {
  if (direction === "left") ropePosition -= STEP;
  else ropePosition += STEP;

  const rope = document.getElementById("ropeGroup");
  rope.style.transform = `translateX(calc(-50% + ${ropePosition}px))`;

  checkWinner();
}

function checkWinner() {
  if (ropePosition <= -WIN_LIMIT) {
    alert("🏆 Баг 1 яллаа!");
    restartGame();
  }
  if (ropePosition >= WIN_LIMIT) {
    alert("🏆 Баг 2 яллаа!");
    restartGame();
  }
}

function disableAllButtons() {
  document.querySelectorAll("button").forEach(btn => {
    btn.disabled = true;
  });
}

function checkAnswer(answer, team, clickedBtn) {
  if (roundLocked) return;
  roundLocked = true;

  const allButtons = document.querySelectorAll("#leftAnswers button, #rightAnswers button");

  // зөв товчийг ногоон болгох
  allButtons.forEach(btn => {
    if (btn.textContent === currentQuestion.correctAnswer) {
      btn.classList.add("correct");
    }
  });

  if (answer === currentQuestion.correctAnswer) {
    statusText.textContent = "Зөв!";
    clickedBtn.classList.add("correct");

    moveRope(team);
  } else {
    statusText.textContent = "Буруу!";
    clickedBtn.classList.add("wrong");
  }

  disableAllButtons();

  setTimeout(() => {
    renderQuestion();
  }, 1000);
}

function restartGame() {
  ropePosition = 0;
  roundLocked = false;

  document.getElementById("ropeGroup").style.transform = "translateX(-50%)";

  renderQuestion();
}

// ================= START =================
restartBtn.addEventListener("click", restartGame);
renderQuestion();
