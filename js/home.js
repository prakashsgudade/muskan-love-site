const text = document.getElementById("text");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const nextBtn = document.getElementById("nextBtn");

// UNFOLD TEXTS
const messages = [
  "Thank you for saying Yes 💖",
  "Yeh website kisi proposal ke liye nahi hai…",
  "Bas ek honest feeling hai jo chup nahi rahi.",
  "Tumhari khushi meri expectation se zyada important hai.",
  "Agar kabhi tumhara mann kare… main yahin hoon."
];

let step = 0;

// YES CLICK
yesBtn.addEventListener("click", () => {
  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  text.innerText = messages[step];
  nextBtn.classList.remove("hidden");
});

// NEXT CLICK
nextBtn.addEventListener("click", () => {
  step++;

  if (step < messages.length) {
    text.innerText = messages[step];
  } else {
    nextBtn.style.display = "none";
  }
});

// NO BUTTON PRANK
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
