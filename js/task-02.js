const elements = ingredients.map((ingredient) => {
    const liElement = document.createElement('li');
    liElement.textContent = ingredient;
    return liElement;
});
console.log(elements);
const ulElement = document.querySelector('ul');
ulElement.append(elements);
