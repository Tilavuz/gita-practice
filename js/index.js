// header varibles
const headerBenuBarBtn = document.querySelector('.header__menu-bar-btn')
const headerMenu = document.querySelector('.header__menu')
const headerMenuWrap = document.querySelector('.header__menu-wrap')

headerBenuBarBtn.addEventListener('click', () => {
    headerMenu.style.display = 'block'
    headerMenuWrap.style.transform = 'translateX(0)'
})

headerMenu.addEventListener('click', () => {
    headerMenu.style.display = 'none'
    headerMenuWrap.style.transform = 'translateX(-100%)'

})

headerMenuWrap.addEventListener('click', (e) => {
    e.stopPropagation()
})