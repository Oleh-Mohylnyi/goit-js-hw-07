let counterValue = 0;
const increment = () => {
    counterValue = counterValue += 1;
}
const decrement = () => {
    counterValue = counterValue -= 1;
}

const valueEL = document.querySelector('#value');
const onIncrementBtnEL = document.querySelector('.increment');
const onDecrementBtnEL = document.querySelector('.decrement');

onIncrementBtnEL.addEventListener('click', () => {
    increment();
    valueEL.textContent = counterValue;
});

onDecrementBtnEL.addEventListener('click', () => {
    decrement();
    valueEL.textContent = counterValue;
});