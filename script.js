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
const ropeGroup = document.getElementById("ropeGroup");

let currentQuestion = null;
let ropePosition = 0;
let roundLocked = false;

const STEP = 40;
const WIN_LIMIT = 200;

// ================= FUNCTIONS =================
function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function renderQuestion() {
  roundLocked = false;
  currentQuestion = questions[Math.floor(Math.random() * questions.length)];

  questionText.textContent = currentQuestion.question;
  statusText.textContent = "Хэн түрүүлж зөв хариулах вэ?";

  leftAnswers.innerHTML = "";
  rightAnswers.innerHTML = "";

  const shuffled = shuffle(currentQuestion.options);

  shuffled.forEach((opt) => {
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
  if (direction === "left") {
    ropePosition -= STEP;
  } else {
    ropePosition += STEP;
  }

  ropeGroup.style.transform = `translateX(calc(-50% + ${ropePosition}px))`;
  checkWinner();
}

function disableAnswerButtons() {
  const answerButtons = document.querySelectorAll("#leftAnswers button, #rightAnswers button");
  answerButtons.forEach((btn) => {
    btn.disabled = true;
  });
}

function checkWinner() {
  if (ropePosition <= -WIN_LIMIT) {
    setTimeout(() => {
      alert("🏆 Баг 1 яллаа!");
      restartGame();
    }, 100);
    return true;
  }

  if (ropePosition >= WIN_LIMIT) {
    setTimeout(() => {
      alert("🏆 Баг 2 яллаа!");
      restartGame();
    }, 100);
    return true;
  }

  return false;
}

function checkAnswer(answer, team, clickedBtn) {
  if (roundLocked) return;
  if (clickedBtn.disabled) return;

  if (answer === currentQuestion.correctAnswer) {
    roundLocked = true;
    clickedBtn.classList.add("correct");
    statusText.textContent = "Зөв!";

    disableAnswerButtons();
    moveRope(team);

    if (!checkWinner()) {
      setTimeout(() => {
        renderQuestion();
      }, 1000);
    }

    return;
  }

  clickedBtn.classList.add("wrong");
  clickedBtn.disabled = true;
  statusText.textContent = "Буруу! Дахин оролдоно уу.";
}

function restartGame() {
  ropePosition = 0;
  roundLocked = false;
  ropeGroup.style.transform = "translateX(-50%)";
  renderQuestion();
}

// ================= START =================
restartBtn.addEventListener("click", restartGame);
renderQuestion();
