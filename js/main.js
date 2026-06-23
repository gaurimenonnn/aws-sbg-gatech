// ─────────────────────────────────────────────
//  AWS Student Builder Group @ Georgia Tech
//  Site behavior
// ─────────────────────────────────────────────

// TODO: replace with the real application form link
const APPLICATION_FORM_URL = "#";

document.querySelectorAll('.apply-cta').forEach(a => { a.href = APPLICATION_FORM_URL; });

// Header gains a solid background once the page is scrolled
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
menuToggle.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));
