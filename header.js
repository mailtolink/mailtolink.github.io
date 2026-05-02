// Header Component
function createHeader() {
  const header = document.createElement('header');
  header.id = 'site-header';
  header.innerHTML = `
    <nav class="navbar" role="navigation" aria-label="Main navigation">
      <div class="nav-container">
        <a href="/" class="logo" aria-label="MailToLink Home">
          <div class="logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="32" height="32" rx="8" fill="url(#logoGrad)"/>
              <path d="M6 10l10 8 10-8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="6" y="10" width="20" height="14" rx="2" stroke="white" stroke-width="2" fill="none"/>
              <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stop-color="#FF6B35"/>
                  <stop offset="100%" stop-color="#F7931E"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span class="logo-text">MailTo<strong>Link</strong></span>
        </a>

        <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>

        <ul class="nav-links" id="navLinks" role="list">
          <li><a href="#generator" class="nav-link">Generator</a></li>
          <li><a href="#features" class="nav-link">Features</a></li>
          <li><a href="#how-it-works" class="nav-link">How It Works</a></li>
          <li><a href="#examples" class="nav-link">Examples</a></li>
          <li><a href="#faq" class="nav-link">FAQ</a></li>
          <li><a href="#generator" class="nav-cta">Generate Free</a></li>
        </ul>
      </div>
    </nav>
  `;

  document.body.prepend(header);

  // Mobile nav toggle
  const toggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !expanded);
    navLinks.classList.toggle('open');
    toggle.classList.toggle('active');
  });

  // Sticky header on scroll
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navAnchors.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  });

  // Close mobile nav on link click
  navAnchors.forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

createHeader();
