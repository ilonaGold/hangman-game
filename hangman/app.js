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
