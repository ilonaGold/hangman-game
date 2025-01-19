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
