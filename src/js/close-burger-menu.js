export const renderCloseBurgerMenu = () => {

    const menuBtn = document.querySelector('.menu-btn')
    const menu = document.querySelector('.navbar')
    const links = document.querySelectorAll('.menu__link')
    
    links.forEach(link => link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        menu.classList.remove('active');
    }))

}