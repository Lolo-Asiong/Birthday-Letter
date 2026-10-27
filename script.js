
const sky = document.getElementById("sparkles");

const intro = document.getElementById("intro");
const letterSection = document.getElementById("letterSection");

const openButton = document.getElementById("openButton");
const backButton = document.getElementById("backButton");
const factButton = document.getElementById("factButton");
const extraFact = document.getElementById("extraFact");

// Create small glowing sparkles in the sunset sky.
function createSparkles() {
  const fragment = document.createDocumentFragment();

  const symbols = ["✦", "✧", "·", "✧"];

  for (let i = 0; i < 32; i++) {
    const sparkle = document.createElement("span");

    sparkle.className = "sparkle";
    sparkle.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 85}%`;

    sparkle.style.fontSize =
      `${Math.random() * 10 + 7}px`;

    sparkle.style.animationDelay =
      `${Math.random() * -5}s`;

    sparkle.style.animationDuration =
      `${2 + Math.random() * 4}s`;

    fragment.appendChild(sparkle);
  }

  sky.appendChild(fragment);
}

createSparkles();

// Open the birthday letter.
openButton.addEventListener("click", () => {
  intro.classList.add("hidden");
  letterSection.classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Reveal the extra birthday message.
factButton.addEventListener("click", () => {
  extraFact.classList.remove("hidden");

  factButton.textContent =
    "A little message, just for you ♡";

  factButton.disabled = true;
});

// Return to the sunset opening screen.
backButton.addEventListener("click", () => {
  letterSection.classList.add("hidden");
  intro.classList.remove("hidden");

  extraFact.classList.add("hidden");

  factButton.disabled = false;
  factButton.textContent = "One more little thing ✦";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
