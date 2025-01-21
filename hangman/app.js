// Game state
const guessedLetters = new Set();
let incorrectGuessesCount = 0;

// Function to fetch question-answer pairs
function fetchQuestionAnswer() {
  fetch("questions.json")
    .then((response) => response.json())
    .then((data) => {
      const randomPair = data[Math.floor(Math.random() * data.length)];
      hint.textContent = `Hint: ${randomPair.question}`;
      currentAnswer = randomPair.answer.toUpperCase();
      secretWordDisplay.textContent = "_ ".repeat(currentAnswer.length).trim();
      console.log(`The secret word is: ${currentAnswer}`);
    })
    .catch((error) => console.error("Error loading questions:", error));
}

// Update functions
function updateIncorrectGuesses() {
  incorrectGuesses.textContent = `Incorrect guesses: ${incorrectGuessesCount} / 6`;
  incorrectGuesses.style.color = "red";
}

function getCorrectGuessesCount() {
  return currentAnswer.split("").filter((letter) => guessedLetters.has(letter))
    .length;
}

function updateSecretWordDisplay() {
  secretWordDisplay.textContent = currentAnswer
    .split("")
    .map((letter) => (guessedLetters.has(letter) ? letter : "_"))
    .join(" ");
}

// Handle guess logic
function handleGuess(letter, button) {
  if (guessedLetters.has(letter)) return;

  guessedLetters.add(letter);

  const targetButton =
    button || document.querySelector(`[data-letter="${letter}"]`);
  if (targetButton) {
    targetButton.disabled = true;
    targetButton.style.opacity = "0.5";
  }

  if (currentAnswer.includes(letter)) {
    updateSecretWordDisplay();
  } else {
    incorrectGuessesCount++;
    updateIncorrectGuesses();
    drawHangmanPart();
  }

  updateGameState();
}

// Set up keyboard listeners
function setupKeyboardListeners() {
  // Virtual keyboard
  document.querySelectorAll(".key").forEach((button) => {
    button.addEventListener("click", () =>
      handleGuess(button.textContent, button)
    );
  });

  // Physical keyboard
  document.addEventListener("keydown", (event) => {
    const letter = event.key.toUpperCase();
    if (alphabet.includes(letter)) {
      const button = document.querySelector(`.key[data-letter="${letter}"]`);
      if (button && !button.disabled) {
        handleGuess(letter, button);
      }
    }
  });
}

// Game state checks
function isGameWon() {
  return getCorrectGuessesCount() === currentAnswer.length;
}

function isGameLost() {
  return incorrectGuessesCount >= 6;
}

// Game end handling
function endGame(statusMessage) {
  setTimeout(() => {
    showModal(`YOU ${statusMessage}!`, "The secret word was:", currentAnswer);
    document.querySelectorAll(".key").forEach((button) => {
      button.disabled = true;
      button.style.opacity = "0.5";
    });
  }, 500);
}

function updateGameState() {
  if (isGameWon()) {
    endGame("WON");
  } else if (isGameLost()) {
    endGame("LOST");
  }
}

// Reset game
function resetGame() {
  guessedLetters.clear();
  incorrectGuessesCount = 0;
  updateIncorrectGuesses();

  const canvas = document.getElementById("gallows-canvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGallows();

  document.querySelectorAll(".key").forEach((button) => {
    button.disabled = false;
    button.style.opacity = "1";
  });

  incorrectGuesses.style.color = "#3a3a3a";

  const modal = document.querySelector(".modal");
  if (modal) modal.remove();
}

function restartGame() {
  resetGame();
  fetchQuestionAnswer();
}

// Initialize game
document.addEventListener("DOMContentLoaded", () => {
  drawGallows();
  fetchQuestionAnswer();
  setupKeyboardListeners();
});
