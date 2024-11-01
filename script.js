const hamburgerMenu = document.querySelector('.hamburger-menu');
const navigationButtton = document.querySelector('.navigation-buttons');

hamburgerMenu,addEventListener('click', ()=> {
      hamburgerMenu.classList.toggle("activated");
      navigationButtton.classList.toggle("side");
})