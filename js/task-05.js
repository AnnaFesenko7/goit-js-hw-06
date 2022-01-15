const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
console.log(output.value);
console.log(output.textContent);
const defoultTextContent = output.textContent;

input.addEventListener('input', onInputBlur);

function onInputBlur(event) {    
     output.textContent = event.currentTarget.value? event.currentTarget.value:defoultTextContent;    
   
}
