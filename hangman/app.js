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
