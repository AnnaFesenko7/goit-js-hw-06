function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  input: document.querySelector('input'),
  create: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),

}

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  const amount = event.currentTarget.value;
  refs.create.addEventListener('click', onCreateBtnClick);

    function onCreateBtnClick(event) {
      createBoxes(amount);
    }
  event.currentTarget.reset();
  console.log(event.currentTarget.value);
}

 

function createBoxes(amount){
  const boxesArrey = [];
  console.log(amount)
  for (let i = 0; i < amount; i += 1){
    const boxEl = document.createElement('div');
    boxEl.style.backgroundColor = getRandomHexColor();
    const boxSize = `${30 + 10 * i}px`
    boxEl.style.width = boxSize
    boxEl.style.height = boxSize
    console.dir(boxEl);
    console.log(boxEl);
    boxesArrey.push(boxEl);
  }
  console.log(boxesArrey);
  refs.boxes.append(...boxesArrey);
  
}


refs.destroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  refs.boxes.innerHTML = '';
}