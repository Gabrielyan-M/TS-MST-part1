const burgerButton = document.querySelector('[data-js-burger-button]')
const burgerMenu = document.querySelector('[data-js-burger-menu]')

const anchorButtons = document.querySelectorAll('[data-js-anchor-button]')


burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('menu-active')
    burgerMenu.classList.toggle('menu-active')
    document.querySelector('body').classList.toggle('scroll-off')
})

anchorButtons.forEach(elem => {
    elem.addEventListener('click', () => {
        burgerButton.classList.remove('menu-active')
        burgerMenu.classList.remove('menu-active')
        document.querySelector('body').classList.remove('scroll-off')
    })
})




// resetting classes
window.addEventListener('resize', () => {
    if(window.innerWidth > 600) {
        burgerButton.classList.remove('menu-active')
        burgerMenu.classList.remove('menu-active')
        document.querySelector('body').classList.remove('scroll-off')
    }
})


