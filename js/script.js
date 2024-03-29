const inputRotate = document.querySelector(".input-rotate");
const inputScale = document.querySelector(".input-scale");
const scaleLabel = document.querySelector("#scale-label");
const rotateLabel = document.querySelector("#rotate-label");
const card = document.querySelector(".card");
const obj = {
  rotate: 0,
  scale: 100,
};

function rotateCard(e) {
  const { value } = e.target;
  obj.rotate = value;

  rotateLabel.textContent = `Rotate ${value}`;
  card.style.transform = `rotate(${value}deg) scale(${obj.scale / 100})`;
}

function scalecard(e) {
  const { value } = e.target;

  const calcValue = value / 100;

  obj.scale = value;

  scaleLabel.textContent = `Scale ${calcValue}`;
  card.style.transform = `scale(${calcValue}) rotate(${obj.rotate}deg)`;
}

inputRotate.addEventListener("input", rotateCard);

inputScale.addEventListener("input", scalecard);
