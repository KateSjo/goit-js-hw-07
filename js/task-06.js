const inputWord = document.querySelector('#validation-input');
inputWord.addEventListener('blur', onInputCheck)

function onValidationInput() {
    inputWord.classList.add('valid');
}

function onInvalidationInput() {
    inputWord.classList.toggle('invalid');
}

function onInputCheck(event) {
    if (event.currentTarget.value.length === 6) {
        onValidationInput();
    };
    onInvalidationInput();
    console.log(event.currentTarget.value.length);
}
