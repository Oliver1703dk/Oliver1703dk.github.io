document.addEventListener('DOMContentLoaded', function () {

  // ── Theme toggle ──────────────────────────────────────────────────────────

  const html        = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const iconSun     = document.getElementById('icon-sun');
  const iconMoon    = document.getElementById('icon-moon');

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    if (iconSun && iconMoon) {
      iconSun.style.display  = theme === 'dark'  ? 'none'         : 'inline';
      iconMoon.style.display = theme === 'light' ? 'none'         : 'inline';
    }
  }

  function getInitialTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  }

  applyTheme(getInitialTheme());

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const current = html.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next    = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('theme', next);
    });
  }


  // ── Abstract toggle ───────────────────────────────────────────────────────

  document.querySelectorAll('.toggle-abstract').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const content = btn.nextElementSibling;
      if (!content || !content.classList.contains('abstract-content')) return;

      const isOpen = content.style.display === 'block';
      content.style.display = isOpen ? 'none' : 'block';
      btn.textContent = isOpen ? 'Show abstract' : 'Hide abstract';

      const chevron = btn.querySelector('.chevron');
      if (chevron) {
        chevron.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
      }
    });
  });


  // ── BibTeX show/hide ──────────────────────────────────────────────────────

  document.querySelectorAll('.toggle-bibtex').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const content = btn.nextElementSibling;
      if (!content || !content.classList.contains('bibtex-content')) return;

      const isOpen = content.style.display === 'block';
      content.style.display = isOpen ? 'none' : 'block';
    });
  });


  // ── BibTeX copy to clipboard ──────────────────────────────────────────────

  document.querySelectorAll('.copy-bibtex').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const pre = btn.parentElement && btn.parentElement.querySelector('pre');
      if (!pre) return;

      const originalText = btn.textContent;
      navigator.clipboard.writeText(pre.textContent).then(function () {
        btn.textContent = 'Copied!';
        setTimeout(function () {
          btn.textContent = originalText;
        }, 1500);
      }).catch(function () {
        // Fallback for older browsers
        const ta = document.createElement('textarea');
        ta.value = pre.textContent;
        ta.style.position = 'fixed';
        ta.style.opacity  = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        btn.textContent = 'Copied!';
        setTimeout(function () {
          btn.textContent = originalText;
        }, 1500);
      });
    });
  });

});
