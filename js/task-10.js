function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  input: document.querySelector('input'),
  create: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
}

let indexStartCicle = 0;
refs.create.addEventListener('click', onCreateBtnClick);

  function onCreateBtnClick(event) {
      
          const amount = refs.input.value;
           console.log('amount:',amount);
          createBoxes(amount);
        }
    
    


function createBoxes(amount){
  const boxesArrey = [];
  console.log(amount)
  for (let i = indexStartCicle; i < Number(indexStartCicle) + Number(amount); i += 1){
    console.log(Number(indexStartCicle) + Number(amount));
    const boxEl = document.createElement('div');
    boxEl.style.backgroundColor = getRandomHexColor();
    const boxSize = `${30 + 10 * i}px`
    boxEl.style.width = boxSize
    boxEl.style.height = boxSize
    console.dir(boxEl);
    console.log(boxEl);
    boxesArrey.push(boxEl);
  }
  indexStartCicle += boxesArrey.length;
 
  
  console.log(boxesArrey);
  refs.boxes.append(...boxesArrey);
  
  console.log(" indexStartCicle", indexStartCicle)

  refs.input.value = ''
  
}


refs.destroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  refs.boxes.innerHTML = '';
  indexStartCicle = 0;
}