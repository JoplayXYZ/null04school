(function() {
  // Prevent double injection
  if (document.getElementById("custom-loading-overlay")) return;

  // --- Loader Setup ---
  const aminationScript = document.createElement("script");
  aminationScript.type = "module";
  aminationScript.src = "https://cdn.jsdelivr.net/npm/ldrs/dist/auto/jelly.js";
  document.head.appendChild(aminationScript);

  const style = document.createElement("style");
  style.textContent = `
    body.loading { overflow: hidden; }
    #custom-loading-overlay {
      position: fixed;
      top: 0; left: 0;
      width: 100vw; height: 100vh;
      backdrop-filter: blur(8px);
      background: linear-gradient(180deg, rgba(70, 70, 70, 1), rgba(0, 0, 0, 0)), center/cover no-repeat;
      display: flex; justify-content: center; align-items: center;
      z-index: 999999;
      opacity: 1;
      transition: opacity 0.6s ease;
      display: flex;
      flex-direction: column;
    }
    #custom-loading-overlay.fade-out {
      opacity: 0;
      pointer-events: none;
    }
    #loadingSplash {
      color: var(--loader);
    }
  `;
  document.head.appendChild(style);

  const overlay = document.createElement("div");
  overlay.id = "custom-loading-overlay";
  overlay.innerHTML = `<l-jelly size="40" speed="0.9" color="var(--loader)"></l-jelly><p id="loadingSplash">If you are reading this the splashtext js is broken</p>`;
  document.body.classList.add("loading");
  document.body.appendChild(overlay);

  // --- Loader Hide Logic ---
  const MIN_TIME = 800; // 0.5s minimum
  const start = Date.now();

  function hideOverlay() {
    const elapsed = Date.now() - start;
    const remaining = Math.max(0, MIN_TIME - elapsed);
    setTimeout(() => {
      overlay.classList.add("fade-out");
      document.body.classList.remove("loading");
      setTimeout(() => overlay.remove(), 800); // match transition
    }, remaining);
  }

  if (document.readyState === "complete") {
    hideOverlay();
  } else {
    window.addEventListener("load", hideOverlay);
  }
})();
