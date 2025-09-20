// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    const hidden = mainNav.getAttribute('aria-hidden') === 'true';
    mainNav.setAttribute('aria-hidden', String(!hidden));
  });
}

// Dynamic year in footer
document.querySelectorAll('[id^="year"]').forEach(el => {
  el.textContent = new Date().getFullYear();
});

// Contact form feedback
const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent default form submission

    const status = document.getElementById('formStatus');
    status.textContent = 'Submitting...';

    setTimeout(() => {
      status.textContent = 'Form submitted successfully!';
    }, 2000); // 2 second delay
  });
}
