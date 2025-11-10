document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("theme-selector");
  const savedTheme = localStorage.getItem("theme");

  let themeLink = document.getElementById("theme-link");
  if (!themeLink) {
    themeLink = document.createElement("link");
    themeLink.id = "theme-link";
    themeLink.rel = "stylesheet";
    document.head.appendChild(themeLink);
  }

  if (savedTheme) {
    applyTheme(savedTheme);
    selector.value = savedTheme;
  } else {
    localStorage.setItem("theme", 'disabled');
  }

  selector.addEventListener("change", () => {
    const theme = selector.value;
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  });

  function applyTheme(theme) {
    if (theme) {
      themeLink.href = `/_extras/themes/${theme}.css`;
      console.log(`Applied theme: ${theme}`);
    } else {
      themeLink.removeAttribute("href");
      console.log("Removed theme");
    }
  }
});
