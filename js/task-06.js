const inputWord = document.querySelector('#validation-input');

inputWord.addEventListener('blur', onInputCheck)

function onInputCheck(event){
    if(event.currentTarget.value.length === Number(inputWord.dataset.length)) {
        inputWord.classList.add('valid')
        inputWord.classList.remove('invalid')
        return;
    }
    inputWord.classList.add('invalid')
    inputWord.classList.remove('valid')
    return;
}
