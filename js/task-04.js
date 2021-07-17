let counterValue = 0;
const increment = () => {
    counterValue = counterValue += 1;
}
const decrement = () => {
    counterValue = counterValue -= 1;
}

const valueEL = document.querySelector('#value');
const onIncrementBtnEL = document.querySelector('[data-action="increment"]');
const onDecrementBtnEL = document.querySelector('[data-action="decrement"]');

onIncrementBtnEL.addEventListener('click', () => {
    increment();
    valueEL.textContent = counterValue;
});

onDecrementBtnEL.addEventListener('click', () => {
    decrement();
    valueEL.textContent = counterValue;
});