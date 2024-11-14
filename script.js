const hamburgerMenu = document.querySelector('.hamburger-menu');
const navigationButtons = document.querySelectorAll('.navigation-buttons');
const textElement = document.querySelector('.text-info');



hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('activated');


    navigationButtons.forEach(button => {
        button.classList.toggle('side');
    });
});


function activateFadeIn(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}

const observer = new IntersectionObserver(activateFadeIn, {
    threshold: 0.5
});

observer.observe(textElement);

window.addEventListener('DOMContentLoaded', function () {
    const overlay = document.querySelector('.overlay');
    const albumContainer = document.querySelector('.album-container');

    // Função que vai ser chamada quando o alvo (galeria) estiver visível
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(function () {
                    overlay.style.opacity = '0';  
                    albumContainer.style.opacity = '1'; 
                }, 2500);  
                observer.unobserve(entry.target);
            }
        });
    }

    // Criando o observer para observar a galeria
    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.2  // A animação acontece quando pelo menos 50% da galeria estiver visível
    });

    // Observe a seção da galeria
    const albumSection = document.querySelector('.album-section');
    observer.observe(albumSection);
});

