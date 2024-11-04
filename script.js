const hamburgerMenu = document.querySelector('.hamburger-menu');
const navigationButtton = document.querySelectorAll('.navigation-buttons');
const photos = document.querySelectorAll('.photos'); 
hamburgerMenu.addEventListener('click', () => {
      hamburgerMenu.classList.toggle("activated");
      navigationButtton.classList.toggle("side");
})

photos.forEach(photo => {
      photo.addEventListener('mouseenter', () => {
            photos.forEach(el => {
                  if (el !== photo) {
                        el.classList.add('preto-e-branco'); // Aplica a classe de preto e branco
                  }
            });
      });

      photo.addEventListener('mouseleave', () => {
            photos.forEach(el => {
                  el.classList.remove('preto-e-branco'); // Remove a classe de preto e branco
            });
      });
});