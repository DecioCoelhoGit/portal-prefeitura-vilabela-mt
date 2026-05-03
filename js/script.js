/* SCRIPT V12.1 — Portal Prefeitura Vila Bela MT */
(function () {
  "use strict";

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    const body = document.body;

    const btnMenu =
      document.getElementById("btnMenu") ||
      document.getElementById("menuToggle");

    const menu =
      document.getElementById("menu") ||
      document.getElementById("nav") ||
      document.querySelector(".nav-menu");

    const btnTema =
      document.getElementById("btnTema") ||
      document.getElementById("themeToggle");

    const btnAcess =
      document.getElementById("btnAcessibilidade") ||
      document.getElementById("accessBtn");

    const painelAcess =
      document.getElementById("acessibilidade") ||
      document.getElementById("accessPanel") ||
      document.querySelector(".access-panel");

    // TEMA PERSISTENTE
    const temaSalvo = localStorage.getItem("portal-tema") || "dark";
    aplicarTema(temaSalvo);

    function aplicarTema(tema) {
      body.classList.remove("light", "dark");
      body.classList.add(tema);
      localStorage.setItem("portal-tema", tema);

      if (btnTema) {
        btnTema.textContent = tema === "light" ? "☀️" : "🌙";
        btnTema.setAttribute("aria-label", tema === "light" ? "Tema claro ativo" : "Tema escuro ativo");
      }
    }

    if (btnTema) {
      btnTema.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        aplicarTema(body.classList.contains("light") ? "dark" : "light");
      };
    }

    // MENU MOBILE
    if (btnMenu && menu) {
      btnMenu.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();

        menu.classList.toggle("open");
        menu.classList.toggle("active");
        btnMenu.textContent = menu.classList.contains("open") || menu.classList.contains("active") ? "×" : "☰";
      };

      menu.querySelectorAll("a").forEach(function (link) {
        link.onclick = function () {
          menu.classList.remove("open", "active");
          btnMenu.textContent = "☰";
        };
      });
    }

    // ACESSIBILIDADE
    if (btnAcess && painelAcess) {
      btnAcess.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();

        painelAcess.classList.toggle("open");
        painelAcess.classList.toggle("show");
      };

      painelAcess.onclick = function (e) {
        e.stopPropagation();
      };
    }

    document.addEventListener("click", function () {
      if (menu) {
        menu.classList.remove("open", "active");
        if (btnMenu) btnMenu.textContent = "☰";
      }

      if (painelAcess) {
        painelAcess.classList.remove("open", "show");
      }
    });

    // FUNÇÕES GLOBAIS DOS BOTÕES A / A+ / A++
    window.setFont = function (scale) {
      body.style.fontSize = scale + "em";
      localStorage.setItem("portal-font-scale", scale);
    };

    window.setContrast = function () {
      body.classList.toggle("contrast");
      localStorage.setItem(
        "portal-contrast",
        body.classList.contains("contrast") ? "on" : "off"
      );
    };

    window.resetAccess = function () {
      body.style.fontSize = "1em";
      body.classList.remove("contrast");
      localStorage.removeItem("portal-font-scale");
      localStorage.removeItem("portal-contrast");
    };

    const fonteSalva = localStorage.getItem("portal-font-scale");
    if (fonteSalva) body.style.fontSize = fonteSalva + "em";

    const contrasteSalvo = localStorage.getItem("portal-contrast");
    if (contrasteSalvo === "on") body.classList.add("contrast");
  });
})();
