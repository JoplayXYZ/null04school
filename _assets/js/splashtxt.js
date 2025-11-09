document.addEventListener("DOMContentLoaded", () => {
  const splashTexts = [
    "hi",
    "Api keys in the frontend!!!",
    "Made by 3 MASSIVE tech nerds",
    "Yo bro i made a website: https://localhost:3000",
    "yo chatgpt fix this css",
    "yo chatgpt fix this js",
    "yo chatgpt fix this html",
    "yo chatgpt fix this",
    '"chatgpt, make the site look good"',
    "The F students are the inventors",
    "Anything but school...",
    "this is the most useless text you will read today",
    "cheetahs are pretty cool ngl",
    "who doesnt love some good ol' cheats?",
    "random ass shit",
    "did you know, you can read?",
    "cheetahs are suprisingly in love with idle games.",
    "sand.",
    "schools are not ready for this",
    "Null04School > frogie's arcade > meximath",
    "string cheese.",
    "69 > 67",
    "Its pronounced Nullo /cheetah",
    "spent too much time writing these",
    "juice.",
    "revolver.",
    "donkey.",
    "corn.",
    "pirate anything, except minecraft or silksong",
    "AWS went down (imagine)",
    "apples. (yes, that was a death note refrence /cheetah)",
    "neal.fun, is indeed fun",
    "FISH",
    "eeehh... fish?",
    "tung tung tung sahur",
    "MINIONS! Tonight, we steal, UR MOOOOM!!",
    "frågor? - Fadi",
    "wait, why are we coding this site?",
    "i hate the kahoot auth stuff >:(",
    "blooket is so easy to bot lmao",
    "Kahoot.rocks 🔛🔝",
    "isn't this just a mirror of games from gn-math?",
    "is blooketbot.schoolcheats.net tuff?",
    "blooket... NO ANTICHEAT HA",
    "devs at blooket really didn't think of security",
    "imaging paying for school cheats..... (.net)",
    "YOU... ME... GAS STATION!!!",
    "FISHHHHHHHHHHH!!!!",
    "https://youtu.be/F78rGRzCNbI",
    "Most of the games here are just mirrors of ones from gn-math"
  ];

  const splashtxt = document.getElementById('splashtxt');

  function getRandomSplash() {
    const index = Math.floor(Math.random() * splashTexts.length);
    return splashTexts[index];
  }

  splashtxt.addEventListener('click', () => {
    let text;
    do {
      text = getRandomSplash();
    } while (text === splashtxt.textContent);
    
    splashtxt.textContent = text;
  });

  console.log('[splashtxt.js] Initialised!')
  console.log(`[splashtxt.js] Loaded ${splashTexts.length} messages`)
  splashtxt.textContent = getRandomSplash();
  document.getElementById('loadingSplash').textContent = getRandomSplash();
  console.log(`[splashtxt.js] Initial Text: ${splashtxt.textContent}`)
});

