//Saves the burger menu icon and navigation links in variables
const menu = document.querySelector('.burger-menu');
const navLinks = document.getElementById('nav-links');

//Adds events listener to the button that toggles the ul links active class
menu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});