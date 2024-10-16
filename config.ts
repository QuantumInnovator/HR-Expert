const toggleBtn = document.querySelector<HTMLButtonElement>(".toggle-button");
const dropdown = document.querySelector<HTMLDivElement>(".dropdown-menu");

if (toggleBtn && dropdown) {
  toggleBtn.addEventListener("click", () => {
    dropdown.classList.toggle("hidden"); // Specify the class to toggle (e.g., "hidden")
  });
}
