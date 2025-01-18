// Function to draw the gallows
function drawGallows() {
  const canvas = document.getElementById("gallows-canvas");
  const ctx = canvas.getContext("2d");

  // Color
  ctx.fillStyle = "#3a3a3a";

  // Base
  ctx.fillRect(20, 280, 160, 10);

  // Vertical post
  ctx.fillRect(50, 20, 10, 260);

  // Horizontal beam
  ctx.fillRect(50, 20, 100, 10);

  // Short vertical line
  ctx.fillRect(140, 20, 10, 50);
}

// Function to draw the head
function drawHead() {
  const canvas = document.getElementById("gallows-canvas");
  const ctx = canvas.getContext("2d");

  // Draw head
  ctx.beginPath();
  ctx.arc(145, 85, 15, 0, Math.PI * 2);
  ctx.stroke();
}

// Function to draw the body
function drawBody() {
  const canvas = document.getElementById("gallows-canvas");
  const ctx = canvas.getContext("2d");

  // Draw body
  ctx.beginPath();
  ctx.moveTo(145, 100);
  ctx.lineTo(145, 180);
  ctx.stroke();
}

// Function to draw the left arm
function drawLeftArm() {
  const canvas = document.getElementById("gallows-canvas");
  const ctx = canvas.getContext("2d");

  // Draw left arm
  ctx.beginPath();
  ctx.moveTo(145, 120);
  ctx.lineTo(120, 140);
  ctx.stroke();
}

// Function to draw the right arm
function drawRightArm() {
  const canvas = document.getElementById("gallows-canvas");
  const ctx = canvas.getContext("2d");

  // Draw right arm
  ctx.beginPath();
  ctx.moveTo(145, 120);
  ctx.lineTo(170, 140);
  ctx.stroke();
}

// Function to draw the left leg
function drawLeftLeg() {
  const canvas = document.getElementById("gallows-canvas");
  const ctx = canvas.getContext("2d");

  // Draw left leg
  ctx.beginPath();
  ctx.moveTo(145, 180);
  ctx.lineTo(130, 220);
  ctx.stroke();
}

// Function to draw the right leg
function drawRightLeg() {
  const canvas = document.getElementById("gallows-canvas");
  const ctx = canvas.getContext("2d");

  // Draw right leg
  ctx.beginPath();
  ctx.moveTo(145, 180);
  ctx.lineTo(160, 220);
  ctx.stroke();
}

// Function to draw the next part of the hangman
function drawHangmanPart() {
  const incorrectGuessesCount = guessedLetters.size - getCorrectGuessesCount();
  switch (incorrectGuessesCount) {
    case 1:
      drawHead();
      break;
    case 2:
      drawBody();
      break;
    case 3:
      drawLeftArm();
      break;
    case 4:
      drawRightArm();
      break;
    case 5:
      drawLeftLeg();
      break;
    case 6:
      drawRightLeg();
      break;
  }
}
