const rangeInput = document.querySelector('#font-size-control')
const output = document.querySelector('#text');

rangeInput.addEventListener('input', onInputChange);
output.style.fontSize = `${rangeInput.value}px`
 
function onInputChange(event) {
    
    output.style.fontSize = `${event.target.value}px`
  
}

