/* ======================================================
   SPRACHUMSCHALTUNG DE / EN (ohne Google)
   Wird auf JEDER Seite kurz vor </body> eingebunden.
====================================================== */

(function () {

    var STORAGE_KEY = "kn-astro-lang";

    function applyLang(lang) {

        document.querySelectorAll("[data-de]").forEach(function (el) {
            var text = el.getAttribute("data-" + lang);
            if (text !== null) {
                el.textContent = text;
            }
        });

        document.documentElement.setAttribute("lang", lang);
        localStorage.setItem(STORAGE_KEY, lang);

        document.querySelectorAll(".lang-flag-btn").forEach(function (btn) {
            btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
        });
    }

    document.addEventListener("DOMContentLoaded", function () {

        var saved = localStorage.getItem(STORAGE_KEY) || "de";
        applyLang(saved);

        document.querySelectorAll(".lang-flag-btn").forEach(function (btn) {
            btn.addEventListener("click", function () {
                applyLang(btn.getAttribute("data-lang"));
            });
        });

    });

})();
