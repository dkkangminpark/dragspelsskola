function toggleHidden(selector) {
  document.querySelector(selector).classList.toggle("hidden");
}

function toggleSH(button) {
  const presentationGrid = button.nextElementSibling;

  presentationGrid.classList.toggle("hidden");

  if (presentationGrid.classList.contains("hidden")) {
    button.textContent = "Visa";
  } else {
    button.textContent = "Dölj";
  }
}