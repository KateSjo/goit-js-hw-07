const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur',(event) =>{

    if(event.currentTarget.value.length === Number(inputEl.dataset.length) ){
        if(inputEl.classList.contains('invalid')){
            inputEl.classList.remove('invalid')
        }
        inputEl.classList.add('valid')
    }
    else {
        inputEl.classList.remove('valid')
        inputEl.classList.add('invalid') 
       }
} )
