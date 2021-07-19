// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// const inputRef = document.querySelector("#name-input");
// const textRef = document.querySelector("#name-output");

// inputRef.oninput = ({target: {value}}) => textRef.textContent = value.trim() !== '' ? value : 'незнакомец';




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