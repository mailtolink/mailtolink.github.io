// Footer Component
function createFooter() {
  const footer = document.createElement('footer');
  footer.id = 'site-footer';
  footer.innerHTML = `
    <div class="footer-wave">
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--footer-bg)"/>
      </svg>
    </div>
    <div class="footer-body">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="/" class="logo footer-logo" aria-label="MailToLink Home">
            <div class="logo-icon">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="32" height="32" rx="8" fill="url(#footerLogoGrad)"/>
                <path d="M6 10l10 8 10-8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <rect x="6" y="10" width="20" height="14" rx="2" stroke="white" stroke-width="2" fill="none"/>
                <defs>
                  <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stop-color="#FF6B35"/>
                    <stop offset="100%" stop-color="#F7931E"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span class="logo-text">MailTo<strong>Link</strong></span>
          </a>
          <p class="footer-tagline">The fastest, free mailto link generator for developers, marketers, and web creators. Create HTML email hyperlinks in seconds.</p>
          <div class="footer-badges">
            <span class="badge">100% Free</span>
            <span class="badge">No Signup</span>
            <span class="badge">Instant</span>
          </div>
        </div>

        <div class="footer-col">
          <h3 class="footer-heading">Tools</h3>
          <ul class="footer-links" role="list">
            <li><a href="#generator">Mailto Link Generator</a></li>
            <li><a href="#generator">Create Mailto Link</a></li>
            <li><a href="#generator">Email Link HTML Code</a></li>
            <li><a href="#examples">Mailto URL Examples</a></li>
            <li><a href="#generator">HTML Email Hyperlink</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3 class="footer-heading">Learn</h3>
          <ul class="footer-links" role="list">
            <li><a href="#how-it-works">How Mailto Links Work</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#use-cases">Use Cases</a></li>
            <li><a href="#seo-content">HTML Mailto Tag Guide</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3 class="footer-heading">Quick Generate</h3>
          <div class="footer-quick">
            <p>Drop your email and get a mailto link instantly.</p>
            <div class="footer-quick-form">
              <input type="email" id="footerEmail" placeholder="your@email.com" aria-label="Quick email input"/>
              <button id="footerGenBtn" type="button">Generate</button>
            </div>
            <div id="footerResult" class="footer-quick-result" aria-live="polite"></div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="footer-copy">&copy; ${new Date().getFullYear()} <a href="/">mailtolink.github.io</a> &mdash; Free Mailto Link Generator. All rights reserved.</p>
        <p class="footer-legal">This tool generates standard HTML mailto hyperlinks. No data is stored or transmitted.</p>
      </div>
    </div>
  `;

  document.body.appendChild(footer);

  // Footer quick generator
  document.getElementById('footerGenBtn').addEventListener('click', () => {
    const email = document.getElementById('footerEmail').value.trim();
    const resultEl = document.getElementById('footerResult');
    if (!email || !email.includes('@')) {
      resultEl.innerHTML = '<span class="error">Please enter a valid email address.</span>';
      return;
    }
    const link = `<a href="mailto:${email}">Email Us</a>`;
    resultEl.innerHTML = `<code>${escapeHtml('<a href="mailto:' + email + '">Email Us</a>')}</code><button class="copy-btn-small" onclick="copyText('${escapeHtml('<a href=\\"mailto:' + email + '\\">Email Us</a>')}', this)">Copy</button>`;
  });
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function copyText(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const orig = btn.textContent;
    btn.textContent = 'Copied!';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = orig; btn.classList.remove('copied'); }, 2000);
  });
}

createFooter();
