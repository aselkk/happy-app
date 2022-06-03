export const renderBurgerMenu = () => {
	const menuBtn = document.querySelector('.menu-btn');
	const menu = document.querySelector('.navbar');

	menuBtn.addEventListener('click', function() {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	});
};