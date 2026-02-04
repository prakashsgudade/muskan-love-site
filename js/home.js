const text = document.getElementById("text");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// YES CLICK
yesBtn.addEventListener("click", () => {
  text.innerText = "Thank you for saying Yes 💖";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

// NO BUTTON PRANK
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
