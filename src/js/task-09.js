function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const descriptionColor = document.querySelector('.color');
const bodyEl = document.querySelector('body');

changeColorBtn.addEventListener('click', onchangeColorBtnClick);

function onchangeColorBtnClick() {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  descriptionColor.textContent = color;

}