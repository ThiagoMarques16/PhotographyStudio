const hamburgerMenu = document.querySelector('.hamburger-menu');
const navigationButtons = document.querySelectorAll('.navigation-buttons');
const photos = document.querySelectorAll('.photos');
const textElement = document.querySelector('.text-info');



hamburgerMenu.addEventListener('click', () => {
      hamburgerMenu.classList.toggle('activated');

      // Aplica a classe 'side' a todos os elementos de 'navigation-buttons'
      navigationButtons.forEach(button => {
            button.classList.toggle('side');
      });
});

photos.forEach(photo => {
      photo.addEventListener('mouseenter', () => {
            photos.forEach(el => {
                  if (el !== photo) {
                        el.classList.add('preto-e-branco');
                  }
            });
      });

      photo.addEventListener('mouseleave', () => {
            photos.forEach(el => {
                  el.classList.remove('preto-e-branco');
            });
      });
});

function activateFadeIn(entries, observer) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('fade-in');  // Aplica a animação de fade in
              observer.unobserve(entry.target); // Para evitar que o efeito seja reativado
          }
      });
  }

  const observer = new IntersectionObserver(activateFadeIn, {
      threshold: 0.5  // Ativa o efeito quando 50% do elemento estiver visível
  });

observer.observe(textElement);
