document.addEventListener("DOMContentLoaded", () => {
  const splashTexts = [
    "hi",
    "Api keys in the frontend!!!",
    "Made by 2 massive tech NERDS",
    "Yo bro i made a website: https://localhost:3000",
    "yo chatgpt fix this css",
    "The F students are the inventors",
    "Anything but school...",
    "this is the most useless text you will read today"
  ];

  const splashtxt = document.getElementById('splashtxt');

  function getRandomSplash() {
    const index = Math.floor(Math.random() * splashTexts.length);
    return splashTexts[index];
  }

  splashtxt.addEventListener('click', () => {
    splashtxt.textContent = getRandomSplash();
  });

  console.log('[splashtxt.js] Initialised!')
  console.log(`[splashtxt.js] Loaded ${splashTexts.length} messages`)
  splashtxt.textContent = getRandomSplash();
  document.getElementById('loadingSplash').textContent = getRandomSplash();
  console.log(`[splashtxt.js] Initial Text: ${splashtxt.textContent}`)
});

