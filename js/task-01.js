function countItems(id) {
    const category = document.querySelector(`ul#${id}`);
    const quantityOfCategory = category.children.length;
    return quantityOfCategory
}
console.log(`В списке ${countItems('categories')} категории.`);


function headingByClass (className, callback) {
    const categoryElements = document.querySelectorAll(`.${className}`);
    categoryElements.forEach(callback)
}

function amountOfElem(el) {
    const nameOfElements = el.firstElementChild.textContent;
    console.log(`- Категории: ${nameOfElements}`);

    const quantityOfElements = el.querySelectorAll('li').length;
    console.log(`- Количество элементов: ${quantityOfElements}`); 
}

headingByClass('item', amountOfElem);
