function showLoadingOverlay(splashText) {
  // Prevent double injection
  if (document.getElementById("custom-loading-overlay")) return;

  // --- Loader Setup ---
  const animationScript = document.createElement("script");
  animationScript.type = "module";
  animationScript.src = "https://cdn.jsdelivr.net/npm/ldrs/dist/auto/jelly.js";
  document.head.appendChild(animationScript);

  const overlay = document.createElement("div");
  overlay.id = "custom-loading-overlay";

  if (typeof splashText === "string" && splashText.trim() !== "") {
    overlay.innerHTML = `
      <l-jelly size="40" speed="0.9" color="var(--loader)"></l-jelly>
      <p id="loadingSplash">${splashText}</p>
    `;
  } else {
    overlay.innerHTML = `
      <l-jelly size="40" speed="0.9" color="var(--loader)"></l-jelly>
      <p id="loadingSplash">If you are reading this the splashtext js is broken</p>
    `;
  }

  document.body.classList.add("loading");
  document.body.appendChild(overlay);

  // --- Loader Hide Logic ---
  const MIN_TIME = 1250; // 1.25s minimum
  const start = Date.now();

  function hideOverlay() {
    const elapsed = Date.now() - start;
    const remaining = Math.max(0, MIN_TIME - elapsed);
    setTimeout(() => {
      overlay.classList.add("fade-out");
      document.body.classList.remove("loading");
      setTimeout(() => overlay.remove(), 1250); // match transition
    }, remaining);
  }

  if (document.readyState === "complete") {
    hideOverlay();
  } else {
    window.addEventListener("load", hideOverlay);
  }
}

showLoadingOverlay();
