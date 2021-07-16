console.log(`В списке ${document.querySelectorAll('#categories .item').length} категории`);

const categoriesItemEl = document.querySelector('#categories').children;
function displaysNameQuantityCategories(categories) {
    for (let i = 0; i < categories.length; i += 1) {
        console.log(`Категория:  ${categoriesItemEl[i].querySelector('h2').innerText}
Количество элементов: ${categoriesItemEl[i].querySelectorAll('li').length}`)
    }
};
displaysNameQuantityCategories(categoriesItemEl);