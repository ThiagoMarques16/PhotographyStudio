const hamburgerMenu = document.querySelector('.hamburger-menu');
const navigationButtons = document.querySelectorAll('.navigation-buttons');
const textElement = document.querySelector('.text-info');
const btnEnviar = document.querySelector('#enviar');
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const telefone = document.querySelector('#telefone');
const mensagem = document.querySelector('#mensagem');
const error = document.querySelector('.error');



//Ativação menu hamburguer
hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('activated');


    navigationButtons.forEach(button => {
        button.classList.toggle('side');
    });
});


//Verificação valores do formulario e envio de formulario
btnEnviar.addEventListener("click", () => {
    event.preventDefault();
    if (nome.value.trim() !== "" && email.value.trim() !== "" && telefone.value.trim() !== "") {
        alert(`Obrigado ${nome.value} entraremos em contato`);
        error.classList.remove('info')
    } else {
        error.classList.add('info');
    }
});

// Efeito fade in do texto do home
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

//Efeito overlay da galeria
window.addEventListener('DOMContentLoaded', function () {
    const overlay = document.querySelector('.overlay');
    const albumContainer = document.querySelector('.album-container');

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

    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.2
    });

    const albumSection = document.querySelector('.album-section');
    observer.observe(albumSection);
});

