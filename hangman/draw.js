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
