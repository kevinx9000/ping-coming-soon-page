const subscribeForm = document.getElementById('subscribe-form')
const inputField = document.getElementById('input-field')
const errorMessage = document.querySelector('.error-message')

subscribeForm.addEventListener('submit', function (event) {
    event.preventDefault()

    if (!inputField.value) {
        errorMessage.innerHTML = `<small>Whoops! It looks like you forgot to add your email</small>`
        inputField.classList.add('error-border')
        errorMessage.classList.remove('hidden')
    }
    else if (!inputField.checkValidity()) {
        errorMessage.innerHTML = `<small>Please provide a valid email address</small>`
        inputField.classList.add('error-border')
        errorMessage.classList.remove('hidden')
    }
    else {
        errorMessage.innerHTML = `<small><b>It worked!</b> Don't worry, this doesn't actually do anything.</small>`
        inputField.classList.remove('error-border')
        errorMessage.classList.remove('hidden')
        inputField.value = ""
    }
})