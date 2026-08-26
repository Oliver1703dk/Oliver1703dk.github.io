(function () {
  var root = document.documentElement;
  var stored = localStorage.getItem('theme');
  var theme = stored || 'dark';
  root.setAttribute('data-theme', theme);
  function syncIcons() {
    var dark = root.getAttribute('data-theme') !== 'light';
    var moon = document.getElementById('icon-moon');
    var sun = document.getElementById('icon-sun');
    if (moon) moon.hidden = !dark;
    if (sun) sun.hidden = dark;
    var themeBtn = document.getElementById('theme-toggle');
    if (themeBtn && !moon && !sun) {
      themeBtn.textContent = dark ? 'Light' : 'Dark';
    }
  }
  var themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      theme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      syncIcons();
    });
  }
  var menu = document.getElementById('mobile-menu');
  var toggle = document.getElementById('menu-toggle');
  if (menu && toggle) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      var iconMenu = document.getElementById('icon-menu');
      var iconClose = document.getElementById('icon-close');
      if (iconMenu) iconMenu.hidden = open;
      if (iconClose) iconClose.hidden = !open;
      if (!iconMenu && !iconClose) {
        toggle.textContent = open ? 'Close' : 'Menu';
      }
    });
  }
  syncIcons();

  function spaPath(pathname) {
    if (!pathname) return null;
    // Individual posts stay on static HTML. The listing belongs in the SPA.
    if (pathname.indexOf('/blog/') === 0 && pathname !== '/blog/') return null;
    if (pathname === '/blog' || pathname === '/blog/') return '/blog';
    if (pathname === '/') return '/';
    if (
      pathname === '/publications' || pathname === '/publications/' ||
      pathname === '/projects' || pathname === '/projects/' ||
      pathname === '/cv' || pathname === '/cv/' ||
      pathname.indexOf('/papers/') === 0
    ) {
      return pathname.charAt(pathname.length - 1) === '/' ? pathname.slice(0, -1) : pathname;
    }
    return null;
  }

  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.target === '_blank') return;
    var dest;
    try {
      var url = new URL(a.href, window.location.origin);
      if (url.origin !== window.location.origin) return;
      dest = spaPath(url.pathname);
    } catch (err) {
      return;
    }
    if (!dest) return;
    e.preventDefault();
    sessionStorage.setItem('spa-redirect', dest);
    window.location.assign('/');
  });
})();
