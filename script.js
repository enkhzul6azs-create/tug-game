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
    question: "'Дархан + ы' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["дархны", "дарханы", "дарханий", "дархний"],
    correctAnswer: "дархны"
  },
  {
    question: "'Явдал + ыг' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["явдлыг", "явдалыг", "явдалийг", "явдлийг"],
    correctAnswer: "явдлыг"
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
let isGameOver = false;
let availableQuestions = [];

// Зургийн улаан тугийг голын шугамтай тааруулах анхны байршил
const OFFSET_X = 32;

// Нэг удаа зөв хариулахад татагдах алхам
const STEP_SIZE = 35;

/* 
  Сүүлчийн (3 дахь) хүүхэд улаан шугамыг бүрэн давж гарах физик зай:
  - Зүүн баг татсаар Баруун багийн хамгийн арын хүүхэд шугамаас гарах: -280px
  - Баруун баг татсаар Зүүн багийн хамгийн арын хүүхэд шугамаас гарах: +280px
*/
const LAST_PLAYER_PASSED_LINE = 280;

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function renderQuestion() {
  if (isGameOver) return;

  roundLocked = false;
  statusText.textContent = "";

  if (availableQuestions.length === 0) {
    availableQuestions = shuffle([...questions]);
  }

  currentQuestion = availableQuestions.pop();
  questionText.textContent = currentQuestion.question;

  leftAnswers.innerHTML = "";
  rightAnswers.innerHTML = "";

  const shuffledOptions = shuffle(currentQuestion.options);

  shuffledOptions.forEach(opt => {
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
  ropePosition += dir === "left" ? -STEP_SIZE : STEP_SIZE;
  ropeGroup.style.transform = `translate(calc(-50% + ${OFFSET_X}px + ${ropePosition}px), -50%)`;

  // Баруун багийн сүүлийн хүүхэд улаан шугамаас бүрэн гарвал: Баг 2 ялагдаж, Баг 1 хожно
  if (ropePosition <= -LAST_PLAYER_PASSED_LINE) {
    endGame("Баг 2-ын сүүлчийн тоглогч шугам давлаа! Баг 1 яллаа! 🏆");
    return true;
  }
  // Зүүн багийн сүүлийн хүүхэд улаан шугамаас бүрэн гарвал: Баг 1 ялагдаж, Баг 2 хожно
  if (ropePosition >= LAST_PLAYER_PASSED_LINE) {
    endGame("Баг 1-ийн сүүлчийн тоглогч шугам давлаа! Баг 2 яллаа! 🏆");
    return true;
  }

  return false;
}

function endGame(message) {
  isGameOver = true;
  roundLocked = true;
  questionText.textContent = "Тоглоом дууслаа!";
  statusText.textContent = message;
  statusText.style.color = "#dc2626";
  statusText.style.fontSize = "24px";

  document.querySelectorAll(".teams button").forEach(btn => btn.disabled = true);
}

function checkAnswer(answer, team, btn) {
  if (roundLocked || isGameOver) return;

  if (answer === currentQuestion.correctAnswer) {
    roundLocked = true;
    btn.classList.add("correct");
    statusText.style.color = "#16a34a";
    statusText.textContent = `${team === "left" ? "Баг 1" : "Баг 2"} зөв хариуллаа!`;

    const finished = moveRope(team);
    if (!finished) {
      setTimeout(renderQuestion, 800);
    }
  } else {
    btn.classList.add("wrong");
    btn.disabled = true;
    statusText.style.color = "#dc2626";
    statusText.textContent = "Буруу байна, дахин оролдоно уу!";
  }
}

restartBtn.onclick = () => {
  ropePosition = 0;
  isGameOver = false;
  roundLocked = false;
  ropeGroup.style.transform = `translate(calc(-50% + ${OFFSET_X}px), -50%)`;
  statusText.style.fontSize = "22px";
  availableQuestions = [];
  renderQuestion();
};

renderQuestion();
