(function() {
  const currentDomain = window.location.hostname;

  function handleExternal(url) {
    try {
      const targetUrl = new URL(url, window.location.href); // handle relative URLs
      if (targetUrl.hostname !== currentDomain) {
        window.location.href = `/external-links.html?url=${encodeURIComponent(targetUrl.href)}`;
        return true;
      }
    } catch {
      // ignore
    }
    return false;
  }

  document.addEventListener('click', e => {
    const link = e.target.closest('a[href]');
    if (link && handleExternal(link.href)) {
      e.preventDefault();
    }
  });

  document.addEventListener('submit', e => {
    const form = e.target;
    const action = form.action || window.location.href;
    if (handleExternal(action)) {
      e.preventDefault();
    }
  });

  const originalAssign = window.location.assign;
  const originalReplace = window.location.replace;

  window.location.assign = function(url) {
    if (!handleExternal(url)) {
      originalAssign.call(window.location, url);
    }
  };

  window.location.replace = function(url) {
    if (!handleExternal(url)) {
      originalReplace.call(window.location, url);
    }
  };
  Object.defineProperty(window.location, 'href', {
    set(url) {
      if (!handleExternal(url)) {
        window.location.assign(url);
      }
    }
  });
})();
