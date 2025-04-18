const header = document.querySelector('[data-js-header]')



function headerFix () {
    const headerTop  = header.offsetTop
    const headerHeight = header.clientHeight

    if ( window.scrollY > headerTop + headerHeight*0.5) {
        header.classList.add('header-fixed')
    } else {
        header.classList.remove('header-fixed')
    }
}

window.addEventListener('scroll', headerFix);
document.addEventListener('DOMContentLoaded', headerFix);