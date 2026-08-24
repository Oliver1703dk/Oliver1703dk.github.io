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
})();
