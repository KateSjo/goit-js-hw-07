const elements = ingredients.map((ingredient) => {
    const liElement = document.createElement('li');
    liElement.textContent = ingredient;
    return liElement;
});
console.log(elements);
const ulIngredients = document.querySelector('ul');
ulIngredients.append(...elements);

