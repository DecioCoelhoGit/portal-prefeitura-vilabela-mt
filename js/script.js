/* =========================================================
   INÍCIO: SCRIPT GLOBAL
   Projeto: portal-prefeitura-vilabela-mt
   Arquivo: js/script.js
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initThemeSystem();
});

/* =========================================================
   FINAL: SCRIPT GLOBAL
   ========================================================= */


/* =========================================================
   INÍCIO: MENU MOBILE
   ========================================================= */

function initMobileMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (!menuToggle || !mainNav) return;

  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
    menuToggle.textContent = mainNav.classList.contains("open") ? "×" : "☰";
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.textContent = "☰";
    });
  });
}

/* =========================================================
   FINAL: MENU MOBILE
   ========================================================= */


/* =========================================================
   INÍCIO: SISTEMA DE TEMAS
   Temas:
   1. claro
   2. escuro
   3. contraste
   ========================================================= */

function initThemeSystem() {
  const themeButton = document.getElementById("themeButton");
  const body = document.body;

  const themes = ["light", "dark", "contrast"];
  const savedTheme = localStorage.getItem("portal-theme") || "light";

  applyTheme(savedTheme);

  if (!themeButton) return;

  themeButton.addEventListener("click", () => {
    const currentTheme = localStorage.getItem("portal-theme") || "light";
    const currentIndex = themes.indexOf(currentTheme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];

    applyTheme(nextTheme);
  });

  function applyTheme(theme) {
    body.classList.remove("dark-theme", "contrast-theme");

    if (theme === "dark") {
      body.classList.add("dark-theme");
      themeButton.textContent = "☾";
      themeButton.title = "Tema escuro";
    }

    if (theme === "contrast") {
      body.classList.add("contrast-theme");
      themeButton.textContent = "◉";
      themeButton.title = "Tema contraste";
    }

    if (theme === "light") {
      themeButton.textContent = "◐";
      themeButton.title = "Tema claro";
    }

    localStorage.setItem("portal-theme", theme);
  }
}

// MENU
document.getElementById("menuToggle").onclick = () => {
  document.getElementById("nav").classList.toggle("active");
};

// TEMA
const themeBtn = document.getElementById("themeToggle");
themeBtn.onclick = () => {
  document.body.classList.toggle("dark");
};

// ACESSIBILIDADE
const accessBtn = document.getElementById("accessBtn");
const accessPanel = document.getElementById("accessPanel");

accessBtn.onclick = () => {
  accessPanel.classList.toggle("show");
};

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

/* =========================================================
   FINAL: SISTEMA DE TEMAS
   ========================================================= */
