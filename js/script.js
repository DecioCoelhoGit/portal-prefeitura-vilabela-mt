/* =========================================================
   SCRIPT.JS V6 ULTRA ESTÁVEL
   Portal Prefeitura Vila Bela MT
   Menu + Tema Persistente + Acessibilidade
   ========================================================= */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    initMenu();
    initTheme();
    initAccessibility();
    restoreFont();
  });

  function $(id) {
    return document.getElementById(id);
  }

  function initMenu() {
    const menuBtn = $("menuToggle");
    const nav = $("nav");

    if (!menuBtn || !nav) return;

    menuBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      nav.classList.toggle("active");
      menuBtn.textContent = nav.classList.contains("active") ? "✕" : "☰";
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("active");
        menuBtn.textContent = "☰";
      });
    });

    document.addEventListener("click", function (e) {
      if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
        nav.classList.remove("active");
        menuBtn.textContent = "☰";
      }
    });
  }

  function initTheme() {
    const themeBtn = $("themeToggle");
    if (!themeBtn) return;

    const savedTheme = localStorage.getItem("portal-theme") || "dark";
    applyTheme(savedTheme, themeBtn);

    themeBtn.addEventListener("click", function (e) {
      e.stopPropagation();

      const current = document.body.classList.contains("light") ? "light" : "dark";
      const next = current === "light" ? "dark" : "light";

      applyTheme(next, themeBtn);
      localStorage.setItem("portal-theme", next);
    });
  }

  function applyTheme(theme, btn) {
    document.body.classList.remove("light", "dark");

    if (theme === "light") {
      document.body.classList.add("light");
      if (btn) btn.textContent = "☀️";
    } else {
      document.body.classList.add("dark");
      if (btn) btn.textContent = "🌙";
    }
  }

  function initAccessibility() {
    const accessBtn = $("accessBtn");
    const panel = $("accessPanel");

    if (!accessBtn || !panel) return;

    accessBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      panel.classList.toggle("show");
    });

    panel.addEventListener("click", function (e) {
      e.stopPropagation();
    });

    document.addEventListener("click", function () {
      panel.classList.remove("show");
    });
  }

  function restoreFont() {
    const savedScale = localStorage.getItem("portal-font-scale");
    if (savedScale) {
      document.body.style.fontSize = savedScale + "em";
    }
  }

  window.setFont = function (scale) {
    document.body.style.fontSize = scale + "em";
    localStorage.setItem("portal-font-scale", scale);
  };

  window.setContrast = function () {
    document.body.classList.toggle("contrast");
  };

  window.resetAccess = function () {
    document.body.style.fontSize = "1em";
    document.body.classList.remove("contrast");
    localStorage.removeItem("portal-font-scale");
  };
})();
