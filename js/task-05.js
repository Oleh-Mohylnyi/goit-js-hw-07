const inputEl = document.querySelector('#name-input');
const greetingEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);
function onInputChange(event) {
    if (event.currentTarget.value === '') {
        greetingEl.textContent = 'незнакомец';
    } else {
        greetingEl.textContent = event.currentTarget.value;
    }
};