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
  }
];

const questionText = document.getElementById("questionText");
const leftAnswers = document.getElementById("leftAnswers");
const rightAnswers = document.getElementById("rightAnswers");
const statusText = document.getElementById("statusText");
const ropeGroup = document.getElementById("ropeGroup");
const restartBtn = document.getElementById("restartBtn");

let currentQuestion;
let ropePosition = 0;
let roundLocked = false;

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
    const b1 = document.createElement("button");
    b1.textContent = opt;
    b1.onclick = () => checkAnswer(opt, "left", b1);
    leftAnswers.appendChild(b1);

    const b2 = document.createElement("button");
    b2.textContent = opt;
    b2.onclick = () => checkAnswer(opt, "right", b2);
    rightAnswers.appendChild(b2);
  });
}

function moveRope(dir) {
  ropePosition += dir === "left" ? -40 : 40;
  ropeGroup.style.transform = `translate(calc(-50% + ${ropePosition}px), -50%)`;
}

function checkAnswer(answer, team, btn) {
  if (roundLocked) return;

  if (answer === currentQuestion.correctAnswer) {
    roundLocked = true;
    btn.classList.add("correct");
    statusText.textContent = "Зөв!";
    moveRope(team);

    setTimeout(renderQuestion, 1000);
  } else {
    btn.classList.add("wrong");
    btn.disabled = true;
    statusText.textContent = "Буруу!";
  }
}

restartBtn.onclick = () => {
  ropePosition = 0;
  ropeGroup.style.transform = "translate(-50%, -50%)";
  renderQuestion();
};

renderQuestion();
