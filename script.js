
const questions = [
  {
    question: "'Нутаг + аас' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["нутгаас", "нутагаас", "нутгаасаа", "нутагаасаа"],
    correctAnswer: "нутгаас"
  },
  {
    question: "'Хавар + аас' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["хавраас", "хавараас", "хавруудаас", "хавраасаа"],
    correctAnswer: "хавраас"
  },
  {
    question: "'Аймаг + ийн' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["аймгийн", "аймагийн", "аймгиин", "аймагын"],
    correctAnswer: "аймгийн"
  },
  {
    question: "'Тойрог + ийн' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["тойргийн", "тойрогийн", "тойргын", "тойрогын"],
    correctAnswer: "тойргийн"
  },
  {
    question: "'Олон + оор' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["олноор", "олоноор", "олноороо", "олоноороо"],
    correctAnswer: "олноор"
  },
  {
    question: "'Явсан + ыг' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["явсныг", "явсаныг", "явсаныиг", "явсныиг"],
    correctAnswer: "явсныг"
  },
  {
    question: "'Торго + ыг' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["торгоныг", "торгыг", "торгоыг", "торгонийг"],
    correctAnswer: "торгоныг"
  },
  {
    question: "'Өнгө + ийн' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["өнгийн", "өнгөийн", "өнгөний", "өнгиййн"],
    correctAnswer: "өнгийн"
  },
  {
    question: "'Авга + ыг' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["авгыг", "авгаыг", "авганыг", "авгыйг"],
    correctAnswer: "авгыг"
  },
  {
    question: "'Тархи + ийг' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["тархийг", "тархиийг", "тархиг", "тархиныг"],
    correctAnswer: "тархийг"
  },
  {
    question: "'Мөнгө + ийг' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["мөнгийг", "мөнгөийг", "мөнгөнийг", "мөнгий"],
    correctAnswer: "мөнгийг"
  },
  {
    question: "'Уурга + ыг' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["уургыг", "уургаыг", "уурганыг", "уургийг"],
    correctAnswer: "уургыг"
  },
  {
    question: "'Ажил + аас' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["ажлаас", "ажилаас", "ажлаасаа", "ажилаасаа"],
    correctAnswer: "ажлаас"
  },
  {
    question: "'Анги + аас' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["ангиас", "ангиасаа", "ангьаас", "ангинаас"],
    correctAnswer: "ангиас"
  },
  {
    question: "'Эрдэм + ээс' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["эрдмээс", "эрдэмээс", "эрдмээсээ", "эрдэмнээс"],
    correctAnswer: "эрдмээс"
  },
  {
    question: "'Наадам + аар' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["наадмаар", "наадамаар", "наадмаараа", "наадамнаас"],
    correctAnswer: "наадмаар"
  },
  {
    question: "'Өвөл + ийн' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["өвлийн", "өвөлийн", "өвлийин", "өвөлний"],
    correctAnswer: "өвлийн"
  },
  {
    question: "'Хавар + ын' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["хаврын", "хаварын", "хаврынх", "хаварний"],
    correctAnswer: "хаврын"
  },
  {
    question: "'Хүүхэд + ийн' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["хүүхдийн", "хүүхэдийн", "хүүхдийин", "хүүхэдний"],
    correctAnswer: "хүүхдийн"
  },
  {
    question: "'Амраг + ийн' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["амрагийн", "амргийн", "амрагын", "амргын"],
    correctAnswer: "амрагийн"
  },
  {
    question: "'Худал + аас' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["худлаас", "худалаас", "худлаасаа", "худалаасаа"],
    correctAnswer: "худлаас"
  },
  {
    question: "'Хөгжим + өөр' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["хөгжмөөр", "хөгжимөөр", "хөгжмөөрөө", "хөгжимнөөс"],
    correctAnswer: "хөгжмөөр"
  },
  {
    question: "'дархан + ы' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["дархны", "дарханы", "дарханий", "дархний"],
    correctAnswer: "дархны"
  },
  {
    question: "'Явдал + ыг' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["явдлыг", "явдалыг", "явдалийг", "явдлийг"],
    correctAnswer: "явдлыг"
  }
];

// HTML элементүүд
const questionText = document.getElementById("questionText");
const leftAnswers = document.getElementById("leftAnswers");
const rightAnswers = document.getElementById("rightAnswers");
const statusText = document.getElementById("statusText");
const ropeGroup = document.getElementById("ropeGroup");
const restartBtn = document.getElementById("restartBtn");

// Тоглоомын төлөв
let currentQuestion = null;
let ropePosition = 0;
let roundLocked = false;
let isGameOver = false;
let availableQuestions = [];
let nextQuestionTimer = null;

// Олс татах тохиргоо
const STEP_SIZE = 35;
const WIN_DISTANCE = 280;

// Зургийн улаан туузны төвийг тохируулах
// Тууз зургийн голд байвал 0 байна.
const RIBBON_CORRECTION = 0;

// Олсны байрлалыг шинэчлэх
function updateRopePosition() {
  ropeGroup.style.setProperty(
    "--ribbon-correction",
    `${RIBBON_CORRECTION}px`
  );

  ropeGroup.style.setProperty(
    "--rope-offset",
    `${ropePosition}px`
  );
}

// Асуултын дарааллыг холих
function shuffle(arr) {
  const result = [...arr];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

// Шинэ асуулт харуулах
function renderQuestion() {
  if (isGameOver) return;

  roundLocked = false;
  statusText.textContent = "";

  if (availableQuestions.length === 0) {
    availableQuestions = shuffle(questions);
  }

  currentQuestion = availableQuestions.pop();

  questionText.textContent = currentQuestion.question;

  leftAnswers.innerHTML = "";
  rightAnswers.innerHTML = "";

  const shuffledOptions = shuffle(currentQuestion.options);

  shuffledOptions.forEach(option => {
    const leftButton = document.createElement("button");
    leftButton.textContent = option;
    leftButton.onclick = () => {
      checkAnswer(option, "left", leftButton);
    };
    leftAnswers.appendChild(leftButton);

    const rightButton = document.createElement("button");
    rightButton.textContent = option;
    rightButton.onclick = () => {
      checkAnswer(option, "right", rightButton);
    };
    rightAnswers.appendChild(rightButton);
  });
}

// Олсыг зүүн эсвэл баруун тийш татах
function moveRope(team) {
  if (team === "left") {
    ropePosition -= STEP_SIZE;
  } else {
    ropePosition += STEP_SIZE;
  }

  updateRopePosition();

  if (ropePosition <= -WIN_DISTANCE) {
    endGame(
      "Баг 2-ын сүүлчийн тоглогч шугам давлаа! Баг 1 яллаа! 🏆"
    );
    return true;
  }

  if (ropePosition >= WIN_DISTANCE) {
    endGame(
      "Баг 1-ийн сүүлчийн тоглогч шугам давлаа! Баг 2 яллаа! 🏆"
    );
    return true;
  }

  return false;
}

// Ялагчийг зарлах
function endGame(message) {
  isGameOver = true;
  roundLocked = true;

  questionText.textContent = "Тоглоом дууслаа!";
  statusText.textContent = message;
  statusText.style.color = "#dc2626";
  statusText.style.fontSize = "24px";

  document.querySelectorAll(".teams button").forEach(button => {
    button.disabled = true;
  });
}

// Хариулт шалгах
function checkAnswer(answer, team, button) {
  if (roundLocked || isGameOver) return;

  if (answer === currentQuestion.correctAnswer) {
    roundLocked = true;
    button.classList.add("correct");

    statusText.style.color = "#16a34a";
    statusText.textContent =
      `${team === "left" ? "Баг 1" : "Баг 2"} зөв хариуллаа!`;

    const finished = moveRope(team);

    if (!finished) {
      nextQuestionTimer = setTimeout(() => {
        nextQuestionTimer = null;
        renderQuestion();
      }, 800);
    }
  } else {
    button.classList.add("wrong");
    button.disabled = true;

    statusText.style.color = "#dc2626";
    statusText.textContent =
      "Буруу байна, дахин оролдоно уу!";
  }
}

// Дахин тоглох
restartBtn.onclick = () => {
  if (nextQuestionTimer !== null) {
    clearTimeout(nextQuestionTimer);
    nextQuestionTimer = null;
  }

  ropePosition = 0;
  roundLocked = false;
  isGameOver = false;
  availableQuestions = [];

  statusText.textContent = "";
  statusText.style.fontSize = "22px";

  updateRopePosition();
  renderQuestion();
};

// Тоглоом эхлүүлэх
updateRopePosition();
renderQuestion();
