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

const themeBtn = document.getElementById("themeToggle");

themeBtn.onclick = () => {
  document.body.classList.toggle("light");
  themeBtn.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
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
