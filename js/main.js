// ── LumaSleep Website ──

(function () {
  'use strict';

  // Mobile navigation toggle
  const hamburger = document.querySelector('.nav__hamburger');
  const navLinks = document.querySelector('.nav__links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    // Close mobile nav when a link is clicked
    navLinks.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // Dynamic copyright year
  var yearEls = document.querySelectorAll('.js-year');
  var currentYear = new Date().getFullYear();
  yearEls.forEach(function (el) {
    el.textContent = currentYear;
  });
})();
