(function () {
  const header = document.querySelector('.header');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', function () {
    header.classList.toggle('scrolled', window.scrollY > 20);
  });

  navToggle.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  const revealElements = document.querySelectorAll(
    '.section-header, .pillar, .price-card, .pack-card, .sample-card, .contact-card, .custom-banner, .thali-card, .hero-logo-frame, .stat'
  );

  revealElements.forEach(function (el) {
    el.classList.add('reveal');
  });

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach(function (el) {
    observer.observe(el);
  });
})();
