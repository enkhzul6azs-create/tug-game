// ========================================
// ГЭЭГДЭХ ЭГШГИЙН ДҮРЭМ - ОЛС ТАТАЛТ
// ========================================

// АСУУЛТЫН САН
const questions = [
  {
    question: "'Нутаг + аас' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["нутгаас", "нутагаас", "нутгаасаа", "нутагас"],
    correctAnswer: "нутгаас"
  },
  {
    question: "'Хавар + аас' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["хавраас", "хавараас", "хаваараас", "хавраасаа"],
    correctAnswer: "хавраас"
  },
  {
    question: "'Цэрэг + үүд' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["цэрэгүүд", "цэргүүд", "цэрэггүүд", "цэргүүүд"],
    correctAnswer: "цэргүүд"
  },
  {
    question: "'Хадаг + аар' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["хадагаар", "хадгаар", "хадгааар", "хадаагар"],
    correctAnswer: "хадгаар"
  },
  {
    question: "'Бэлэг + ийн' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["бэлэгийн", "бэлгийн", "бэлэгний", "бэлгэийн"],
    correctAnswer: "бэлгийн"
  },
  {
    question: "'Нарлаг + аар' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["нарлагаар", "нарлгаар", "нарлагар", "нарлагаараа"],
    correctAnswer: "нарлагаар"
  },
  {
    question: "'Аймаг + ийн' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["аймгийн", "аймагийн", "аймгиин", "аймагын"],
    correctAnswer: "аймгийн"
  },
  {
    question: "'Гавар + ын' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["гаварын", "гаварийн", "гаврын", "гаврийн"],
    correctAnswer: "гаврын"
  },
  {
    question: "'Чарга + ыг' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["чаргаыг", "чаргийг", "чаргыг", "чаргаийг"],
    correctAnswer: "чаргыг"
  },
  {
    question: "'Хана + аар' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["ханаар", "ханагaar", "ханыгаар", "ханааар"],
    correctAnswer: "ханаар"
  },
  {
    question: "'Хань + аар' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["ханаар", "ханьар", "ханиар", "ханааар"],
    correctAnswer: "ханиар"
  },
  {
    question: "'Сана + уул' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["санауул", "сануул", "сануулл", "сануал"],
    correctAnswer: "сануул"
  },
  {
    question: "'Өмнө + өөс' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["өмнөөөс", "өмнөөгөөс", "өмнөөс", "өмнөө"],
    correctAnswer: "өмнөөс"
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
    correctAnswer: "торгыг"
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
    question: "'Булаг + ийн' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["булагийн", "булгийн", "булагын", "булаагийн"],
    correctAnswer: "булгийн"
  },
  {
    question: "'Худаг + ийн' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["худагийн", "худгийн", "худагын", "худагий"],
    correctAnswer: "худгийн"
  },
  {
    question: "'Суваг + ийн' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["сувагийн", "сувгийн", "сувагын", "сувгын"],
    correctAnswer: "сувгийн"
  },
  {
    question: "'Зураг + ийн' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["зурагийн", "зургийн", "зурагын", "зургын"],
    correctAnswer: "зургийн"
  },
  {
    question: "'Туг + ийн' нийлбэрийг зөв бичсэн нь аль вэ?",
    options: ["тугийн", "тугын", "тугий", "тугиййн"],
    correctAnswer: "тугийн"
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

// ========================================
// HTML ЭЛЕМЕНТҮҮД
// ========================================

const questionText = document.getElementById("questionText");
const leftAnswers = document.getElementById("leftAnswers");
const rightAnswers = document.getElementById("rightAnswers");
const statusText = document.getElementById("statusText");
const ropeGroup = document.getElementById("ropeGroup");
const restartBtn = document.getElementById("restartBtn");

const victoryScreen = document.getElementById("victoryScreen");
const winnerText = document.getElementById("winnerText");
const victoryRestartBtn = document.getElementById("victoryRestartBtn");
const confettiContainer = document.getElementById("confettiContainer");
const gameArea = document.querySelector(".game-area");

// ========================================
// ТОГЛООМЫН ТӨЛӨВ
// ========================================

let currentQuestion = null;
let ropePosition = 0;
let roundLocked = false;
let isGameOver = false;
let availableQuestions = [];
let nextQuestionTimer = null;

const STEPS_TO_WIN = 8;

// ========================================
// ОЛСНЫ ХӨДӨЛГӨӨН
// ========================================

function getWinDistance() {
  return Math.min(
    280,
    Math.max(72, gameArea.clientWidth * 0.29)
  );
}

function getStepSize() {
  return getWinDistance() / STEPS_TO_WIN;
}

function updateRopePosition() {
  ropeGroup.style.setProperty(
    "--ribbon-correction",
    "0px"
  );

  ropeGroup.style.setProperty(
    "--rope-offset",
    `${ropePosition * getStepSize()}px`
  );
}

// ========================================
// АСУУЛТ ХОЛИХ
// ========================================

function shuffle(arr) {
  const result = [...arr];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] = [
      result[j],
      result[i]
    ];
  }

  return result;
}

// ========================================
// ШИНЭ АСУУЛТ ГАРГАХ
// ========================================

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

  const shuffledOptions = shuffle(
    currentQuestion.options
  );

  shuffledOptions.forEach(option => {

    // ЗҮҮН БАГ
    const leftButton = document.createElement("button");

    leftButton.type = "button";
    leftButton.textContent = option;

    leftButton.onclick = () => {
      checkAnswer(option, "left", leftButton);
    };

    leftAnswers.appendChild(leftButton);

    // БАРУУН БАГ
    const rightButton = document.createElement("button");

    rightButton.type = "button";
    rightButton.textContent = option;

    rightButton.onclick = () => {
      checkAnswer(option, "right", rightButton);
    };

    rightAnswers.appendChild(rightButton);
  });
}

// ========================================
// ОЛС ТАТАХ
// ========================================

function moveRope(team) {

  if (team === "left") {
    ropePosition -= 1;
  } else {
    ropePosition += 1;
  }

  updateRopePosition();

  if (Math.abs(ropePosition) >= STEPS_TO_WIN) {
    endGame(team);
    return true;
  }

  return false;
}

// ========================================
// КОНФЕТТИ ҮҮСГЭХ
// ========================================

function showConfetti() {

  confettiContainer.innerHTML = "";

  const colors = [
    "#fbbf24",
    "#ef4444",
    "#22c55e",
    "#3b82f6",
    "#a855f7",
    "#f472b6"
  ];

  for (let i = 0; i < 90; i++) {

    const piece = document.createElement("span");

    piece.className = "confetti";

    piece.style.setProperty(
      "--confetti-x",
      `${Math.random() * 100}%`
    );

    piece.style.setProperty(
      "--confetti-color",
      colors[i % colors.length]
    );

    piece.style.setProperty(
      "--drift",
      `${(Math.random() - 0.5) * 180}px`
    );

    piece.style.setProperty(
      "--fall-duration",
      `${2.6 + Math.random() * 2.3}s`
    );

    piece.style.setProperty(
      "--fall-delay",
      `${Math.random() * 1.4}s`
    );

    confettiContainer.appendChild(piece);
  }
}

// ========================================
// ЯЛАЛТЫН ХӨГЖИМ
// ========================================

let audioContext = null;

function playVictorySound() {
  try {
    const AudioContextClass =
      window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) return;

    if (!audioContext) {
      audioContext = new AudioContextClass();
    }

    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    const notes = [
      523.25,
      659.25,
      783.99,
      1046.50,
      783.99,
      1046.50
    ];

    const startTime = audioContext.currentTime + 0.05;

    notes.forEach((frequency, index) => {
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();

      const start = startTime + index * 0.19;
      const end = start + 0.17;

      oscillator.type = "triangle";
      oscillator.frequency.value = frequency;

      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(
        0.14,
        start + 0.02
      );

      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        end
      );

      oscillator.connect(gain);
      gain.connect(audioContext.destination);

      oscillator.start(start);
      oscillator.stop(end);
    });

  } catch (error) {
    console.log("Дуу тоглуулах боломжгүй:", error);
  }
}

// ========================================
// ЯЛАГЧИЙГ ЗАРЛАХ
// ========================================

function endGame(team) {

  isGameOver = true;
  roundLocked = true;

  if (nextQuestionTimer !== null) {
    clearTimeout(nextQuestionTimer);
    nextQuestionTimer = null;
  }

  const winningTeam =
    team === "left" ? "БАГ 1" : "БАГ 2";

  questionText.textContent = "Тоглоом дууслаа!";

  statusText.textContent =
    `${winningTeam} ЯЛЛАА! 🏆`;

  statusText.style.color = "#16a34a";

  document.querySelectorAll(".teams button")
    .forEach(button => {
      button.disabled = true;
    });

  // ЯЛАГЧИЙН НЭР
  winnerText.textContent =
    `${winningTeam} ЯЛЛАА!`;

  // ЯЛАЛТЫН ДЭЛГЭЦ
  victoryScreen.hidden = false;

  // КОНФЕТТИ
  showConfetti();

  // ХӨГЖИМ
  playVictorySound();

  victoryRestartBtn.focus();
}

// ========================================
// ХАРИУЛТ ШАЛГАХ
// ========================================

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

// ========================================
// ДАХИН ТОГЛОХ
// ========================================

function restartGame() {

  if (nextQuestionTimer !== null) {
    clearTimeout(nextQuestionTimer);
    nextQuestionTimer = null;
  }

  ropePosition = 0;
  roundLocked = false;
  isGameOver = false;
  availableQuestions = [];

  statusText.textContent = "";
  statusText.style.color = "";

  victoryScreen.hidden = true;
  confettiContainer.innerHTML = "";

  updateRopePosition();
  renderQuestion();
}

// ========================================
// ТОВЧЛУУРУУД
// ========================================

restartBtn.onclick = restartGame;

victoryRestartBtn.onclick = restartGame;

// УТАСНЫ ДЭЛГЭЦ ЭРГЭХ ҮЕД
window.addEventListener(
  "resize",
  updateRopePosition
);

// ========================================
// ТОГЛООМ ЭХЛҮҮЛЭХ
// ========================================

updateRopePosition();
renderQuestion();
