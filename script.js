alert("SCRIPT AJILLAA");

// ================= QUESTIONS =================
const questions = [
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
    topic: "Залган бичих",
    rule: "Залган бичих дүрэм",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["номонд", "номнд", "номмонд", "номоонд"],
    correctAnswer: "номонд"
  },
  {
    topic: "Залган бичих",
    rule: "Залган бичих дүрэм",
    question: "Хоосон зайд зөв үгийг сонго: Би ___ явсан.",
    options: ["сургуульн", "сургуулийн", "сургуйлийн", "сургуулын"],
    correctAnswer: "сургуулийн"
  },

  {
    topic: "Ялгах эгшиг",
    rule: "Ялгах эгшгийн зөв хэрэглээ",
    question: "Аль нь зөв бичигдсэн бэ?",
    options: ["тэмдэгийг", "тэмдгийг", "тэмдгыг", "тэмдэгыг"],
    correctAnswer: "тэмдгийг"
  }
];

// ================= SETTINGS =================
const questionText = document.getElementById("questionText");
const ruleLabel = document.getElementById("ruleLabel");
const leftAnswers = document.getElementById("leftAnswers");
const rightAnswers = document.getElementById("rightAnswers");
const scoreLeftEl = document.getElementById("scoreLeft");
const scoreRightEl = document.getElementById("scoreRight");
const statusText = document.getElementById("statusText");

let currentQuestion = null;

// ================= FUNCTIONS =================
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function renderQuestion() {
  currentQuestion = questions[Math.floor(Math.random() * questions.length)];

  questionText.textContent = currentQuestion.question;
  ruleLabel.textContent = currentQuestion.rule;

  leftAnswers.innerHTML = "";
  rightAnswers.innerHTML = "";

  const shuffled = shuffle([...currentQuestion.options]);

  shuffled.forEach(opt => {
    const btn1 = document.createElement("button");
    btn1.textContent = opt;
    btn1.onclick = () => checkAnswer(opt);
    leftAnswers.appendChild(btn1);

    const btn2 = document.createElement("button");
    btn2.textContent = opt;
    btn2.onclick = () => checkAnswer(opt);
    rightAnswers.appendChild(btn2);
  });
}

function checkAnswer(answer) {
  if (answer === currentQuestion.correctAnswer) {
    statusText.textContent = "Зөв! Дараагийн асуулт...";
    setTimeout(renderQuestion, 1000);
  } else {
    statusText.textContent = "Буруу! Дахин оролдоно уу";
  }
}

// ================= START =================
renderQuestion();
