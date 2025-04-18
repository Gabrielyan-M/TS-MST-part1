const buttons = document.querySelectorAll('[data-js-button-reserve]')
const contactUsSection = document.querySelector('#contact-us-section')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        
        const sectionTop = contactUsSection.getBoundingClientRect().top
        const sectionHeight = contactUsSection.clientHeight

        window.scrollBy ({
            top: sectionTop - window.innerHeight/2 + sectionHeight/2,
            behavior: 'smooth'
        })

    })
})
