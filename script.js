alert("GAME RESTORED VERSION");

// ================= QUESTIONS =================
const questions = [
  // ================= Я, Е, Ё =================
  {
    topic: "Я, Е, Ё",
    rule: "Я, Е, Ё үсгийн зөв хэрэглээ",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["зурий", "зуря", "зурья", "зуръя"],
    correctAnswer: "зуръя"
  },
  {
    topic: "Я, Е, Ё",
    rule: "Я, Е, Ё үсгийн зөв хэрэглээ",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["таря", "тарьё", "таръя", "тарий"],
    correctAnswer: "таръя"
  },
  {
    topic: "Я, Е, Ё",
    rule: "Я, Е, Ё үсгийн зөв хэрэглээ",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["уяая", "уяий", "уяъя", "уяя"],
    correctAnswer: "уяя"
  },
  {
    topic: "Я, Е, Ё",
    rule: "Я, Е, Ё үсгийн зөв хэрэглээ",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["оёё", "оёий", "оёъя", "оёоё"],
    correctAnswer: "оёё"
  },
  {
    topic: "Я, Е, Ё",
    rule: "Я, Е, Ё үсгийн зөв хэрэглээ",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["очё", "очий", "очъё", "очоё"],
    correctAnswer: "очъё"
  },
  {
    topic: "Я, Е, Ё",
    rule: "Я, Е, Ё үсгийн зөв хэрэглээ",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["ёсыг", "еосыг", "ёсийг", "ёосийг"],
    correctAnswer: "ёсыг"
  },
  {
    topic: "Я, Е, Ё",
    rule: "Я, Е, Ё үсгийн зөв хэрэглээ",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["аялалын", "аяалалын", "аялалийн", "аяалалийн"],
    correctAnswer: "аялалын"
  },
  {
    topic: "Я, Е, Ё",
    rule: "Я, Е, Ё үсгийн зөв хэрэглээ",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["ууя", "ууё", "ууе", "уя"],
    correctAnswer: "ууя"
  },
  {
    topic: "Я, Е, Ё",
    rule: "Я, Е, Ё үсгийн зөв хэрэглээ",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["тарья", "тары", "тарий", "таря"],
    correctAnswer: "тарья"
  },
  {
    topic: "Я, Е, Ё",
    rule: "Я, Е, Ё үсгийн зөв хэрэглээ",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["иръе", "ирий", "ирье", "ирья"],
    correctAnswer: "ирье"
  },

  // ================= Ы / ИЙ =================
  {
    topic: "Ы / ИЙ",
    rule: "Эр үгийн ы, эм үгийн ий",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["номын", "номийн", "номний", "ноомын"],
    correctAnswer: "номын"
  },
  {
    topic: "Ы / ИЙ",
    rule: "Эр үгийн ы, эм үгийн ий",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["гэрийн", "гэрын", "гэриийн", "гэрийнь"],
    correctAnswer: "гэрийн"
  },
  {
    topic: "Ы / ИЙ",
    rule: "Эр үгийн ы, эм үгийн ий",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["морины", "мориний", "морны", "морьны"],
    correctAnswer: "морины"
  },
  {
    topic: "Ы / ИЙ",
    rule: "Эр үгийн ы, эм үгийн ий",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["голын", "голийн", "голний", "голынь"],
    correctAnswer: "голын"
  },
  {
    topic: "Ы / ИЙ",
    rule: "Эр үгийн ы, эм үгийн ий",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["хүүхдийн", "хүүхдын", "хүүхдиин", "хүүхдийнь"],
    correctAnswer: "хүүхдийн"
  },
  {
    topic: "Ы / ИЙ",
    rule: "Эр үгийн ы, эм үгийн ий",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["уулын", "уулийн", "уулний", "уулынь"],
    correctAnswer: "уулын"
  },

  // ================= ЗАЛГАН БИЧИХ =================
  {
    topic: "Залган бичих",
    rule: "Залган бичих дүрэм",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["номонд", "номнд", "номмонд", "номоонд"],
    correctAnswer: "номонд"
  },
  {
    topic: "Залган бичих",
    rule: "Залган бичих дүрэм",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["сургуульд", "сургуулид", "сургуйлд", "сургуйльд"],
    correctAnswer: "сургуульд"
  },
  {
    topic: "Залган бичих",
    rule: "Залган бичих дүрэм",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["багштай", "багштэй", "бахштай", "багштаий"],
    correctAnswer: "багштай"
  },
  {
    topic: "Залган бичих",
    rule: "Залган бичих дүрэм",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["хичээлээр", "хичээлэр", "хичээлеэр", "хичэлээр"],
    correctAnswer: "хичээлээр"
  },
  {
    topic: "Залган бичих",
    rule: "Залган бичих дүрэм",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["дэвтэрт", "дэвтэрд", "дэвтэртт", "дэвтэрть"],
    correctAnswer: "дэвтэрт"
  },
  {
    topic: "Залган бичих",
    rule: "Залган бичих дүрэм",
    question: "Хоосон зайд зөв үгийг сонго: Би ___ явсан.",
    options: ["сургуульн", "сургуулийн", "сургуйлийн", "сургуулын"],
    correctAnswer: "сургуулийн"
  },

  // ================= ЯЛГАХ ЭГШИГ =================
  {
    topic: "Ялгах эгшиг",
    rule: "Ялгах эгшгийн зөв хэрэглээ",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["тэмдэгийг", "тэмдгийг", "тэмдгыг", "тэмдэгыг"],
    correctAnswer: "тэмдгийг"
  },
  {
    topic: "Ялгах эгшиг",
    rule: "Ялгах эгшгийн зөв хэрэглээ",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["хичээлын", "хижээлийн", "хичэлийн", "хичээлийн"],
    correctAnswer: "хичээлийн"
  },
  {
    topic: "Ялгах эгшиг",
    rule: "Ялгах эгшгийн зөв хэрэглээ",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["эмнэлэг", "эмнлэг", "эмнэлэгь", "эмнэлэгг"],
    correctAnswer: "эмнэлэг"
  }
];

// ================= ELEMENTS =================
const questionText = document.getElementById("questionText");
const ruleLabel = document.getElementById("ruleLabel");
const leftAnswers = document.getElementById("leftAnswers");
const rightAnswers = document.getElementById("rightAnswers");
const statusText = document.getElementById("statusText");
const restartBtn = document.getElementById("restartBtn");
const ropeGroup = document.getElementById("ropeGroup");

// ================= VARIABLES =================
let currentQuestion = null;
let ropePosition = 0;
let roundLocked = false;

let questionQueue = [];
let currentQuestionIndex = 0;

const STEP = 40;
const WIN_LIMIT = 200;

// ================= HELPERS =================
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function prepareQuestionQueue() {
  questionQueue = shuffle(questions);
  currentQuestionIndex = 0;
}

function getNextQuestion() {
  if (questionQueue.length === 0 || currentQuestionIndex >= questionQueue.length) {
    prepareQuestionQueue();
  }

  const nextQuestion = questionQueue[currentQuestionIndex];
  currentQuestionIndex += 1;
  return nextQuestion;
}

function disableAnswerButtons() {
  const buttons = document.querySelectorAll("#leftAnswers button, #rightAnswers button");
  buttons.forEach((btn) => {
    btn.disabled = true;
  });
}

function moveRope(direction) {
  if (direction === "left") {
    ropePosition -= STEP;
  } else {
    ropePosition += STEP;
  }

  ropeGroup.style.transform = `translateX(calc(-50% + ${ropePosition}px))`;
}

function checkWinner() {
  if (ropePosition <= -WIN_LIMIT) {
    setTimeout(() => {
      alert("🏆 Баг 1 яллаа!");
      restartGame();
    }, 150);
    return true;
  }

  if (ropePosition >= WIN_LIMIT) {
    setTimeout(() => {
      alert("🏆 Баг 2 яллаа!");
      restartGame();
    }, 150);
    return true;
  }

  return false;
}

// ================= RENDER =================
function renderQuestion() {
  roundLocked = false;
  currentQuestion = getNextQuestion();

  if (!currentQuestion) return;

  ruleLabel.textContent = currentQuestion.rule;
  questionText.textContent = currentQuestion.question;
  statusText.textContent = "Хэн түрүүлж зөв хариулах вэ?";

  leftAnswers.innerHTML = "";
  rightAnswers.innerHTML = "";

  const shuffledOptions = shuffle(currentQuestion.options);

  shuffledOptions.forEach((opt) => {
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

// ================= ANSWER LOGIC =================
function checkAnswer(answer, team, clickedBtn) {
  if (roundLocked) return;
  if (clickedBtn.disabled) return;

  const allButtons = document.querySelectorAll("#leftAnswers button, #rightAnswers button");

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

// ================= RESTART =================
function restartGame() {
  ropePosition = 0;
  roundLocked = false;
  ropeGroup.style.transform = "translateX(-50%)";
  prepareQuestionQueue();
  renderQuestion();
}

// ================= START =================
restartBtn.addEventListener("click", restartGame);
prepareQuestionQueue();
renderQuestion();
