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

/* PATCH V9.3 — FONTE ACESSÍVEL */
window.setFont = function(scale){
  document.body.classList.remove("font-normal","font-large","font-xlarge");
  if(scale === 1.15){
    document.body.classList.add("font-large");
    localStorage.setItem("portal-font-class","font-large");
  }else if(scale === 1.3){
    document.body.classList.add("font-xlarge");
    localStorage.setItem("portal-font-class","font-xlarge");
  }else{
    document.body.classList.add("font-normal");
    localStorage.setItem("portal-font-class","font-normal");
  }
};

window.resetAccess = function(){
  document.body.classList.remove("font-normal","font-large","font-xlarge","contrast");
  document.body.classList.add("font-normal");
  localStorage.removeItem("portal-font-class");
};

document.addEventListener("DOMContentLoaded", function(){
  const savedFont = localStorage.getItem("portal-font-class");
  if(savedFont){
    document.body.classList.add(savedFont);
  }
});
