document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");
  const themeToggle = document.getElementById("themeToggle");
  const accessBtn = document.getElementById("accessBtn");
  const accessPanel = document.getElementById("accessPanel");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light");
      themeToggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
    });
  }

  if (accessBtn && accessPanel) {
    accessBtn.addEventListener("click", () => {
      accessPanel.classList.toggle("show");
    });
  }
});

function setFont(scale) {
  document.body.style.fontSize = scale + "em";
}

function setContrast() {
  document.body.classList.toggle("contrast");
}

function resetAccess() {
  document.body.style.fontSize = "1em";
  document.body.classList.remove("contrast");
}
