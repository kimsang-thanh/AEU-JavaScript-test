const inputRotate = document.querySelector(".input-rotate");
const inputScale = document.querySelector(".input-scale");
const scaleLabel = document.querySelector(".scale-label");
const rotateLabel = document.querySelector(".rotate-label");
const card = document.querySelector(".card");

function rotateCard(e) {
  const { value } = e.target;

  rotateLabel.textContent = `Rotate ${value}`;
  card.style.transform = `rotate(${value}deg)`;
}

function scalecard(e) {
  const { value } = e.target;

  scaleLabel.textContent = `Scale ${value}`;
  card.style.transform = `scale(${value})`;
}

inputRotate.addEventListener("input", rotateCard);

inputScale.addEventListener("input", scalecard);
