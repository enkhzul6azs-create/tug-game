alert("SCRIPT AJILLAJ BAINA6");
const questions = [
  // Я, Е, Ё
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
    options: ["аялалын", "аяалалын", "аялалийн", "аяалалын"],
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
  // Ы / ИЙ
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

  // Залган бичих
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
    options: ["сургуульн", "сургуулийн, "сургуйлийн", "сургуулын"],
    correctAnswer: "сургуулийн"
  },

  // Ялгах эгшиг
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
    options: ["хичээлын", "хижээлийн", "хичэлийн, "хичээлийн"],
    correctAnswer: "хичээлийн"
  },
  {
    topic: "Ялгах эгшиг",
    rule: "Ялгах эгшгийн зөв хэрэглээ",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["эмнэлэг", "эмнлэг", "эмнэлэгь", "эмнэлэгг"],
    correctAnswer: "эмнэлэг"
  },



 
 

const topicMap = {
  yaeeyo: "Я, Е, Ё",
  yi: "Ы / ИЙ",
  zalgah: "Залган бичих",
  yalgah: "Ялгах эгшиг",
  g: "Г зөв залгах"
};

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

let currentTopic = null;
let filteredQuestions = [];
let questionQueue = [];
let queueIndex = 0;

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

function getTopicFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const topicKey = params.get("topic");

  if (topicKey && topicMap[topicKey]) {
    return topicMap[topicKey];
  }

  return null;
}

function prepareQuestions() {
  currentTopic = getTopicFromUrl();

  if (currentTopic) {
    filteredQuestions = questions.filter(q => q.topic === currentTopic);
  } else {
    filteredQuestions = [...questions];
  }

  if (filteredQuestions.length === 0) {
    filteredQuestions = [...questions];
  }

  questionQueue = shuffleArray(filteredQuestions);
  queueIndex = 0;
}

function getNextQuestion() {
  if (questionQueue.length === 0) {
    return null;
  }

  if (queueIndex >= questionQueue.length) {
    questionQueue = shuffleArray(filteredQuestions);
    queueIndex = 0;
  }

  const question = questionQueue[queueIndex];
  queueIndex += 1;
  return question;
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

  const q = getNextQuestion();

  if (!q) {
    questionText.textContent = "Асуулт олдсонгүй.";
    ruleLabel.textContent = "Дүрэм: -";
    statusText.textContent = "Асуултын сан хоосон байна.";
    return;
  }

  currentQuestionData = {
    ...q,
    shuffledOptions: shuffleArray(q.options)
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

  prepareQuestions();

  ropeGroup.style.setProperty("--rope-x", "0px");
  ropeGroup.style.transform = "translate(-50%, -50%) translateX(0px)";
  ropeGroup.classList.remove("bounce-left", "bounce-right");

  updateScore();
  renderQuestion();
}

restartBtn.addEventListener("click", restartGame);

updateScore();
restartGame();
