(function () {
  function isBlogPath(href) {
    try {
      var path = href ? new URL(href, window.location.origin).pathname : '';
      return path === '/blog' || path === '/blog/' || path.indexOf('/blog/') === 0;
    } catch (e) {
      return false;
    }
  }

  function makeLink(className) {
    var a = document.createElement('a');
    a.href = '/blog/';
    a.textContent = 'Blog';
    a.setAttribute('data-blog-link', '1');
    if (className) a.className = className;
    a.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      window.location.assign('/blog/');
    });
    return a;
  }

  function copyNavStyles(from, to) {
    if (!from) return;
    to.style.cssText = from.style.cssText;
    to.style.background = 'none';
    to.style.fontWeight = '400';
  }

  function injectInto(container) {
    if (!container || container.querySelector('[data-blog-link]')) return;
    var anchors = Array.prototype.slice.call(container.querySelectorAll('a'));
    var cv = anchors.filter(function (a) {
      return a.textContent.trim() === 'CV' && !isBlogPath(a.getAttribute('href'));
    })[0];
    if (!cv) return;
    var blog = makeLink(cv.className);
    copyNavStyles(cv, blog);
    cv.parentNode.insertBefore(blog, cv);
  }

  function scan() {
    injectInto(document.querySelector('.nav-desktop'));
    var nodes = document.querySelectorAll('div');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (el.style && el.style.position === 'fixed' && el.style.zIndex === '99') {
        injectInto(el);
      }
    }
  }

  function uncageBody() {
    var root = document.getElementById('root');
    if (!root || root.children.length === 0) return false;
    var b = document.body;
    b.style.maxWidth = 'none';
    b.style.margin = '0';
    b.style.padding = '0';
    b.style.color = 'inherit';
    b.style.background = 'transparent';
    return true;
  }

  var obs = new MutationObserver(function () {
    scan();
    if (uncageBody()) obs.disconnect();
  });
  obs.observe(document.documentElement, { childList: true, subtree: true });
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      scan();
      uncageBody();
    });
  } else {
    scan();
    uncageBody();
  }
})();
