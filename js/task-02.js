const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const arrayLi = [];
const createLiEl = (ingredients) => {
    for (let ingredient of ingredients) {
        const liEl = document.createElement('li');
        liEl.textContent = ingredient;
        arrayLi.push(liEl);
    }
};
createLiEl(ingredients);
document.querySelector('#ingredients').append(...arrayLi)