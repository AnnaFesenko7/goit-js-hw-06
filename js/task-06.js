const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onInputBlur);
function onInputBlur(event) {
    // console.log(event.currentTarget.value.split("").length);
    // console.log(inputEl.getAttribute('data-length'));
    event.currentTarget.value.split("").length === Number(inputEl.getAttribute('data-length'))
        ? inputEl.classList.add('valid')
        : inputEl.classList.add('invalid');
}