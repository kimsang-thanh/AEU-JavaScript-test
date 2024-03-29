const inputRotate = document.querySelector(".input-rotate");
const inputScale = document.querySelector(".input-scale");
const scaleLabel = document.querySelector("#scale-label");
const rotateLabel = document.querySelector("#rotate-label");
const transformValue = document.querySelector(".transform-value");
const card = document.querySelector(".card");
const obj = {
  rotate: 0,
  scale: 100,
};

function rotateCard(e) {
  const { value } = e.target;
  obj.rotate = value;

  transformValue.textContent = `scale(${obj.scale / 100}) rotate(${
    obj.rotate
  }deg);`;
  rotateLabel.textContent = `Rotate ${value}`;
  card.style.transform = `rotate(${value}deg) scale(${obj.scale / 100})`;
}

function scalecard(e) {
  const { value } = e.target;

  const calcValue = value / 100;

  obj.scale = value;

  transformValue.textContent = `scale(${obj.scale / 100}) rotate(${
    obj.rotate
  }deg);`;
  scaleLabel.textContent = `Scale ${calcValue}`;
  card.style.transform = `scale(${calcValue}) rotate(${obj.rotate}deg)`;
}

document.addEventListener("DOMContentLoaded", () => {
  inputRotate.value = obj.rotate;
  inputScale.value = obj.scale;

  transformValue.textContent = `scale(${obj.scale / 100}) rotate(${
    obj.rotate
  }deg);`;
});

inputRotate.addEventListener("input", rotateCard);

inputScale.addEventListener("input", scalecard);
