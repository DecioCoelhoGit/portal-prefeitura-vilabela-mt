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

/* =========================================================
   FINAL: SISTEMA DE TEMAS
   ========================================================= */
