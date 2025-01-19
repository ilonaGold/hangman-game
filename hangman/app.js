// Initialize variables
const guessedLetters = new Set();
let currentAnswer = "";
let incorrectGuessesCount = 0; // Track incorrect guesses separately

// INITIALIZATION FUNCTIONS

// Function to fetch question-answer pairs and initialize the game

function fetchQuestionAnswer() {
  fetch("questions.json")
    .then((response) => response.json())
    .then((data) => {
      const randomPair = data[Math.floor(Math.random() * data.length)];
      hint.textContent = `Hint: ${randomPair.question}`;
      currentAnswer = randomPair.answer.toUpperCase();
      secretWordDisplay.textContent = "_ ".repeat(currentAnswer.length).trim();
      console.log(`The secret word is: ${currentAnswer}`); // Log the secret word for cross-checking
    })
    .catch((error) =>
      console.error("Error loading question-answer pairs:", error)
    );
}

function resetGame() {}
function restartGame() {}

// GAME STATE UPDATE FUNCTIONS
function updateIncorrectGuesses() {}
function updateSecretWordDisplay() {}
function updateGameState() {}

// GAME LOGIC FUNCTIONS
function handleGuess() {}
function isGameWon() {}
function isGameLost() {}

// EVENT LISTENER FUNCTIONS
// document.querySelectorAll(".key").forEach(...);
// document.addEventListener("keydown", ...);

// UTILITY FUNCTIONS
function getCorrectGuessesCount() {}

// INITIALIZE THE GAME
fetchQuestionAnswer();
drawGallows();
