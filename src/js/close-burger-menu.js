export const renderCloseBurgerMenu = () => {
    let menuBtn = document.querySelector('.menu-btn')
    let menu = document.querySelector('.navbar')
    const links = document.querySelectorAll('.menu__link')
    links.forEach(link => link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        menu.classList.remove('active');
    }))
    console.log('123');
    }