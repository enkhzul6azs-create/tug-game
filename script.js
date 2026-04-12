function checkAnswer(answer, team, clickedBtn) {
  if (roundLocked) return;
  roundLocked = true;

  const allButtons = document.querySelectorAll("#leftAnswers button, #rightAnswers button");

  if (answer === currentQuestion.correctAnswer) {
    // зөв дарсан
    clickedBtn.classList.add("correct");
    statusText.textContent = "Зөв!";

    moveRope(team);
  } else {
    // буруу дарсан
    clickedBtn.classList.add("wrong");
    statusText.textContent = "Буруу!";

    // зөв хариултыг харуулах (энэ удаа л)
    allButtons.forEach(btn => {
      if (btn.textContent === currentQuestion.correctAnswer) {
        btn.classList.add("correct");
      }
    });
  }

  // бүх товчийг disable
  allButtons.forEach(btn => btn.disabled = true);

  setTimeout(() => {
    renderQuestion();
  }, 1000);
}
