// HANGMAN DYNAMIC UI

// Step 1: Select the body element and clear it (since index.html is empty initially)
const body = document.body;

// Step 2: Create the main container for the Hangman game
const container = document.createElement("div");
container.id = "hangman-container";
body.appendChild(container);

// Step 3: Add a title to the game
const title = document.createElement("h1");
title.textContent = "Hangman Game";
container.appendChild(title);

// Step 4: Create the gallows section
const gallows = document.createElement("div");
gallows.id = "gallows";

// Draw the gallows using basic HTML & CSS
const gallowsCanvas = document.createElement("canvas");
gallowsCanvas.id = "gallows-canvas";
gallowsCanvas.width = 200;
gallowsCanvas.height = 300;

gallows.appendChild(gallowsCanvas);
container.appendChild(gallows);

// Function to draw the gallows
function drawGallows() {
  const canvas = document.getElementById("gallows-canvas");
  const ctx = canvas.getContext("2d");

  // Color
  ctx.fillStyle = "000";

  // Base
  ctx.fillRect(20, 280, 160, 10);

  // Vertical post
  ctx.fillRect(50, 20, 10, 260);

  // Horizontal beam
  ctx.fillRect(50, 20, 100, 10);

  // Short vertical line
  ctx.fillRect(140, 20, 10, 50);
}

drawGallows(); // Function to draw the gallows

// Step 5: Create the quiz section
const quizSection = document.createElement("div");
quizSection.id = "quiz-section";

// Add a hint/question area
const hint = document.createElement("p");
hint.id = "hint";
hint.textContent = "Loading..."; // Placeholder for hint
quizSection.appendChild(hint);

// Add the secret word display (underscores)
const secretWordDisplay = document.createElement("p");
secretWordDisplay.id = "secret-word";
secretWordDisplay.textContent = "banana"; // Placeholder for secret word
quizSection.appendChild(secretWordDisplay);

// Add incorrect guesses counter
const incorrectGuesses = document.createElement("p");
incorrectGuesses.id = "incorrect-guesses";
incorrectGuesses.textContent = "Incorrect guesses: 0 / 6";
quizSection.appendChild(incorrectGuesses);
container.appendChild(quizSection);

// Step 6: Create the virtual keyboard
const keyboard = document.createElement("div");
keyboard.id = "virtual-keyboard";

// Generate buttons for each letter (A-Z)
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
alphabet.split("").forEach((letter) => {
  const button = document.createElement("button");
  button.textContent = letter;
  button.classList.add("key");
  button.addEventListener("click", () => handleGuess(letter));
  keyboard.appendChild(button);
});

container.appendChild(keyboard);

// Step 7: Load question-answer pairs to initialize the game
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
