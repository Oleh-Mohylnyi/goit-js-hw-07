const inputEl = document.querySelector('#validation-input');
const currentLengthInput = inputEl.getAttribute('data-length');

inputEl.addEventListener('input', changeBorder);

function changeBorder() {
    inputEl.value.length == currentLengthInput
        ? inputEl.classList.replace('invalid', 'valid')
    : inputEl.value.length == 0
        ? inputEl.classList.remove('invalid', 'valid')
            : inputEl.classList.add('invalid')
}