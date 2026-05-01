(function () {
  "use strict";

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    const menuBtn = document.getElementById("menuToggle");
    const themeBtn = document.getElementById("themeToggle");
    const accessBtn = document.getElementById("accessBtn");
    const nav = document.getElementById("nav");
    const accessPanel = document.getElementById("accessPanel");

    const savedTheme = localStorage.getItem("portal-theme");
    if (savedTheme === "light") {
      document.body.classList.add("light");
      if (themeBtn) themeBtn.textContent = "☀️";
    }

    if (menuBtn && nav) {
      menuBtn.addEventListener("click", function (e) {
        e.preventDefault();
        nav.classList.toggle("active");
        menuBtn.textContent = nav.classList.contains("active") ? "×" : "☰";
      });
    }

    if (themeBtn) {
      themeBtn.addEventListener("click", function (e) {
        e.preventDefault();
        document.body.classList.toggle("light");

        const isLight = document.body.classList.contains("light");
        localStorage.setItem("portal-theme", isLight ? "light" : "dark");
        themeBtn.textContent = isLight ? "☀️" : "🌙";
      });
    }

    if (accessBtn && accessPanel) {
      accessBtn.addEventListener("click", function (e) {
        e.preventDefault();
        accessPanel.classList.toggle("show");
      });
    }
  });

  window.setFont = function (size) {
    document.body.style.fontSize = size + "em";
    localStorage.setItem("portal-font", size);
  };

  window.setContrast = function () {
    document.body.classList.toggle("contrast");
  };

  window.resetAccess = function () {
    document.body.style.fontSize = "1em";
    document.body.classList.remove("contrast");
    localStorage.removeItem("portal-font");
  };
})();
