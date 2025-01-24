// Function to show a modal window
function showModal(status, label, word) {
  // Check if a modal already exists and remove it
  const existingModal = document.querySelector(".modal");
  if (existingModal) {
    existingModal.remove();
  }

  const modal = document.createElement("div");
  modal.classList.add("modal");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  // Include the trophy image if the user wins
  const trophyImage = status.includes("WON")
    ? '<img src="assets/images/trophy.png" alt="Trophy" class="trophy">'
    : "";

  // Close button (cross)
  const closeButton = document.createElement("button");
  closeButton.classList.add("close-btn");
  closeButton.innerHTML = "&times;";
  closeButton.title = "Close";

  modalContent.innerHTML = `
        <h2>${status}</h2>
        ${trophyImage}
        <p>${label}</p>
        <p><strong>${word}</strong></p>
        <button id="play-again-btn">play again</button>
      `;

  modalContent.appendChild(closeButton);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Event listener for close button
  closeButton.addEventListener("click", closeModal);

  // Event listener to close modal on background click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Event listener for Escape key
  document.addEventListener("keydown", handleEscapeKey);

  // Event listener for play again button
  document.getElementById("play-again-btn").addEventListener("click", () => {
    closeModal();
    restartGame();
  });

  // Function to close the modal
  function closeModal() {
    modal.remove();
    document.removeEventListener("keydown", handleEscapeKey);
    restartGame();
  }

  // Function to handle Escape key
  function handleEscapeKey(event) {
    if (event.key === "Escape") {
      closeModal();
    }
  }
}
