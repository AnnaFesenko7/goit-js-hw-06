const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', onInputBlur);
function onInputBlur(event) {
    output.textContent = event.currentTarget.value; 
}