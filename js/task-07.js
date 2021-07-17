const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', changeFontSizeText);

function changeFontSizeText() {
    textEl.style.fontSize = `${inputEl.value}px`;
};