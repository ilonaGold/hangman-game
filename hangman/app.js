// Game state
const guessedLetters = new Set();
const usedAnswers = new Set();
let incorrectGuessesCount = 0;
let isFetching = false; // Global flag to prevent multiple fetches

// Function to fetch question-answer pairs
function fetchQuestionAnswer() {
  if (isFetching) return; // Prevent multiple fetches
  isFetching = true;

  fetch("questions.json")
    .then((response) => response.json())
    .then((data) => {
      // Reset usedAnswers if all words have been used
      if (usedAnswers.size === data.length) {
        console.log("All words used. Resetting usedAnswers set.");
        usedAnswers.clear();
      }

      let randomPair;
      do {
        randomPair = data[Math.floor(Math.random() * data.length)];
      } while (usedAnswers.has(randomPair.answer.toUpperCase()));

      // Add the new word to usedAnswers
      hint.textContent = `Hint: ${randomPair.question}`;
      currentAnswer = randomPair.answer.toUpperCase();
      usedAnswers.add(currentAnswer); // Add current word to the set
      secretWordDisplay.textContent = "_ ".repeat(currentAnswer.length).trim();

      console.log(`The secret word is: ${currentAnswer}`);
      console.log("Used answers set:", [...usedAnswers]);
    })
    .catch((error) =>
      console.error("Error loading question-answer pairs:", error)
    )
    .finally(() => {
      isFetching = false; // Unlock fetch
    });
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
  // Prevent input if the game has ended
  if (isGameWon() || isGameLost()) {
    console.log("Game has already ended, ignoring input.");
    return;
  }

  // Prevent input during a fetch operation
  if (isFetching) {
    console.log("Fetching in progress, ignoring input.");
    return;
  }

  // Prevent duplicate guesses
  if (guessedLetters.has(letter)) return; // Prevent duplicate guesses

  // Add the guessed letter to the set
  guessedLetters.add(letter);

  // Disable the button (virtual or dynamically found)
  if (!button) {
    button = document.querySelector(`[data-letter="${letter}"]`);
  }
  if (button) {
    button.disabled = true;
    button.style.opacity = "0.5";
  }

  // Check if the guess is correct or incorrect
  if (currentAnswer.includes(letter)) {
    updateSecretWordDisplay();
  } else {
    incorrectGuessesCount++;
    updateIncorrectGuesses();
    drawHangmanPart();
  }

  // Update the game state
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
  let keyPressLock = false;

  document.addEventListener("keydown", (event) => {
    if (keyPressLock) return; // Ignore if locked
    keyPressLock = true;

    setTimeout(() => {
      keyPressLock = false; // Unlock after delay
    }, 100); // 100ms debounce delay

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
    // Add a small delay to ensure all updates are complete
    showModal(`YOU ${statusMessage}!`, "The secret word was:", currentAnswer);
    // Disable all keyboard buttons
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
