/* ==========================================
   SKILLBRIDGE ACADEMY — main.js
   ========================================== */

// ---- NAVBAR SCROLL EFFECT ----
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ---- MOBILE MENU ----
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMenu() {
  mobileMenu.classList.remove('open');
}

// ---- SCROLL REVEAL ----
const revealEls = document.querySelectorAll('.section-label, h2, .course-card, .why-card, .testimonial-card, .hero-tag, .hero h1, .hero-sub, .hero-btns, .hero-stats');

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => observer.observe(el));

// ---- FORM SUBMIT (placeholder — replace with Brevo embed) ----
function handleFormSubmit(e) {
  e.preventDefault();

  const name    = document.getElementById('fname').value;
  const email   = document.getElementById('email').value;
  const course  = document.getElementById('course').value;

  // GA4 event: track lead form submission
  if (typeof gtag !== 'undefined') {
    gtag('event', 'generate_lead', {
      event_category: 'form',
      event_label: 'contact_form',
      value: course
    });
  }

  // Show success state
  document.getElementById('lead-form').style.display = 'none';
  document.getElementById('form-success').style.display = 'block';

  console.log('Lead captured:', { name, email, course });
  // NOTE: When you paste the real Brevo embed, this JS form is replaced entirely.
  // Brevo handles submission + list addition automatically.
}

// ---- GA4: TRACK SCROLL DEPTH ----
let tracked = { 25: false, 50: false, 75: false, 90: false };
window.addEventListener('scroll', () => {
  const scrollPct = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
  [25, 50, 75, 90].forEach(depth => {
    if (scrollPct >= depth && !tracked[depth]) {
      tracked[depth] = true;
      if (typeof gtag !== 'undefined') {
        gtag('event', 'scroll_depth', { event_category: 'engagement', event_label: depth + '%' });
      }
    }
  });
});

// ---- GA4: TRACK TIME ON PAGE ----
const startTime = Date.now();
window.addEventListener('beforeunload', () => {
  const timeSpent = Math.round((Date.now() - startTime) / 1000);
  if (typeof gtag !== 'undefined') {
    gtag('event', 'time_on_page', { event_category: 'engagement', value: timeSpent });
  }
});

// ---- SMOOTH ANCHOR SCROLL ----
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    }
  });
});
