// HANGMAN DYNAMIC UI

// Step 1: Create the main container for the Hangman game
const container = document.createElement("div");
container.id = "hangman-container";
document.body.appendChild(container);

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

// Step 6: Add a hint/question area
const hint = document.createElement("p");
hint.id = "hint";
hint.textContent = "Loading..."; // Placeholder for hint
quizSection.appendChild(hint);

// Step 7: Add the secret word display (underscores)
const secretWordDisplay = document.createElement("p");
secretWordDisplay.id = "secret-word";
secretWordDisplay.textContent = "banana"; // Placeholder for secret word
quizSection.appendChild(secretWordDisplay);

// Step 8: Add incorrect guesses counter
let incorrectGuesses = document.createElement("p");
incorrectGuesses.id = "incorrect-guesses";
incorrectGuesses.textContent = "Incorrect guesses: 0 / 6";
quizSection.appendChild(incorrectGuesses);
container.appendChild(quizSection);

// Step 9: Create the virtual keyboard
const keyboard = document.createElement("div");
keyboard.id = "virtual-keyboard";

// Step 10: Generate buttons for each letter (A-Z)
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
alphabet.split("").forEach((letter) => {
  const button = document.createElement("button");
  button.textContent = letter;
  button.classList.add("key");
  keyboard.appendChild(button);
});

container.appendChild(keyboard);

// Step 11: Load question-answer pairs to initialize the game
fetch("questions.json")
  .then((response) => response.json())
  .then((data) => {
    const randomPair = data[Math.floor(Math.random() * data.length)];
    hint.textContent = `Hint: ${randomPair.question}`;
    currentAnswer = randomPair.answer.toUpperCase();
    secretWordDisplay.textContent = "_ ".repeat(currentAnswer.length).trim();
    console.log(`The secret word is: ${currentAnswer}`); // Log the secret word for cross-checking

    // Step 12: Draw the gallows
    drawGallows();
  })
  .catch((error) =>
    console.error("Error loading question-answer pairs:", error)
  );
