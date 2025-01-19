// INITIALIZATION FUNCTIONS
function fetchQuestionAnswer() {}
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

// Load question-answer pairs to initialize the game
let currentAnswer = "";
fetch("questions.json")
  .then((response) => response.json())
  .then((data) => {
    const randomPair = data[Math.floor(Math.random() * data.length)];
    hint.textContent = `Hint: ${randomPair.question}`;
    currentAnswer = randomPair.answer.toUpperCase();
    secretWordDisplay.textContent = "_ ".repeat(currentAnswer.length).trim();
  })
  .catch((error) =>
    console.error("Error loading question-answer pairs:", error)
  );
