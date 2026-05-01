/* =========================================================
   SCRIPT.JS V5
   Menu Premium + Tema Persistente + Acessibilidade
   Portal Prefeitura Vila Bela MT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  initTheme();
  initAccessibility();
});

/* MENU PREMIUM */
function initMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");

  if (!menuToggle || !nav) return;

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    menuToggle.textContent = nav.classList.contains("active") ? "✕" : "☰";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      menuToggle.textContent = "☰";
    });
  });

  document.addEventListener("click", (event) => {
    const clickedInsideMenu = nav.contains(event.target);
    const clickedButton = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedButton) {
      nav.classList.remove("active");
      menuToggle.textContent = "☰";
    }
  });
}

/* TEMA PERSISTENTE */
function initTheme() {
  const themeToggle = document.getElementById("themeToggle");
  if (!themeToggle) return;

  const savedTheme = localStorage.getItem("portal-theme") || "dark";
  applyTheme(savedTheme);

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.body.classList.contains("light") ? "light" : "dark";
    const nextTheme = currentTheme === "light" ? "dark" : "light";

    applyTheme(nextTheme);
    localStorage.setItem("portal-theme", nextTheme);
  });

  function applyTheme(theme) {
    document.body.classList.remove("light", "dark");

    if (theme === "light") {
      document.body.classList.add("light");
      themeToggle.textContent = "☀️";
      themeToggle.title = "Tema claro ativo";
    } else {
      document.body.classList.add("dark");
      themeToggle.textContent = "🌙";
      themeToggle.title = "Tema escuro ativo";
    }
  }
}

/* ACESSIBILIDADE */
function initAccessibility() {
  const accessBtn = document.getElementById("accessBtn");
  const accessPanel = document.getElementById("accessPanel");

  if (!accessBtn || !accessPanel) return;

  accessBtn.addEventListener("click", () => {
    accessPanel.classList.toggle("show");
  });

  document.addEventListener("click", (event) => {
    const clickedInsidePanel = accessPanel.contains(event.target);
    const clickedButton = accessBtn.contains(event.target);

    if (!clickedInsidePanel && !clickedButton) {
      accessPanel.classList.remove("show");
    }
  });
}

/* FUNÇÕES GLOBAIS DOS BOTÕES DE ACESSIBILIDADE */
function setFont(scale) {
  document.body.style.fontSize = scale + "em";
  localStorage.setItem("portal-font-scale", scale);
}

function setContrast() {
  document.body.classList.toggle("contrast");
}

function resetAccess() {
  document.body.style.fontSize = "1em";
  document.body.classList.remove("contrast");
  localStorage.removeItem("portal-font-scale");
}

/* RESTAURA TAMANHO DA FONTE */
document.addEventListener("DOMContentLoaded", () => {
  const savedFontScale = localStorage.getItem("portal-font-scale");

  if (savedFontScale) {
    document.body.style.fontSize = savedFontScale + "em";
  }
});
