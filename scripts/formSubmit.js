const submit = document.querySelector('[data-js-submit-button]')
const form = document.querySelector('[data-js-form]')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = document.querySelector('[data-js-input-name]').value
    const email = document.querySelector('[data-js-input-email]').value
    const chekbox = document.querySelector('[data-js-input-chekbox]').value

    if (chekbox === 'on') {
        alert(`${name}, we have sent an email to your email address - ${email}.`)
    }

    
    
})