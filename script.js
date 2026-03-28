let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const message = document.getElementById("message");
const input = document.getElementById("guessInput");
const checkBtn = document.getElementById("checkBtn");
const resetBtn = document.getElementById("resetBtn");
const attemptsDisplay = document.getElementById("attempts");

checkBtn.addEventListener("click", () => {
  const userGuess = Number(input.value);

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.textContent = "⚠️ Enter a number between 1 and 100";
    return;
  }

  attempts++;
  attemptsDisplay.textContent = attempts;

  if (userGuess === randomNumber) {
    message.textContent = "🎉 Correct! You guessed it!";
    document.body.style.background = "#14532d";
  } else if (userGuess > randomNumber) {
    message.textContent = "📉 Too high!";
  } else {
    message.textContent = "📈 Too low!";
  }

  input.value = "";
});

resetBtn.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  attemptsDisplay.textContent = "0";
  message.textContent = "Start guessing...";
  input.value = "";
  document.body.style.background = "#0f172a";
});
