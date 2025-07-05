// HANGMAN DYNAMIC UI

// Step 0: Declare shared variables that will be used across files
window.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
window.currentAnswer = "";

// Step 1: Create the main container for the Hangman game
const body = document.body;
const container = document.createElement("div");
container.id = "hangman-container";
body.appendChild(container);

// Step 2: Add a title to the game
const title = document.createElement("h1");
title.textContent = "Hangman Game";
container.appendChild(title);

// Step 3: Create the gallows section
const gallows = document.createElement("div");
gallows.id = "gallows";

// Step 4: Draw the gallows using basic HTML & CSS
const gallowsCanvas = document.createElement("canvas");
gallowsCanvas.id = "gallows-canvas";
gallowsCanvas.width = 200;
gallowsCanvas.height = 300;
gallows.appendChild(gallowsCanvas);
container.appendChild(gallows);

// Step 5: Create the quiz section
const quizSection = document.createElement("div");
quizSection.id = "quiz-section";

// Step 6: Add a hint/question area and make it globally accessible
window.hint = document.createElement("p");
hint.id = "hint";
hint.textContent = "Loading..."; // Placeholder for hint
quizSection.appendChild(hint);

// Step 7: Add the secret word display (underscores)
window.secretWordDisplay = document.createElement("p");
secretWordDisplay.id = "secret-word";
secretWordDisplay.textContent = "javascript"; // Placeholder for secret word
quizSection.appendChild(secretWordDisplay);

// Step 8: Add incorrect guesses counter and make it globally accessible
window.incorrectGuesses = document.createElement("p");
incorrectGuesses.id = "incorrect-guesses";
incorrectGuesses.textContent = "Incorrect guesses: 0 / 6";
quizSection.appendChild(incorrectGuesses);
container.appendChild(quizSection);

// Step 9: Create the virtual keyboard
const keyboard = document.createElement("div");
keyboard.id = "virtual-keyboard";

// Step 10: Generate keyboard buttons
alphabet.split("").forEach((letter) => {
  const button = document.createElement("button");
  button.textContent = letter;
  button.classList.add("key");
  button.dataset.letter = letter;
  keyboard.appendChild(button);
});
container.appendChild(keyboard);


