// script.js

document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll('h1, h2');
    const videos = document.querySelectorAll('video');

    headers.forEach(header => {
        header.addEventListener('mouseenter', function() {
            if (window.innerWidth > 768) { // Désactiver sur petits écrans
                this.classList.add('glitch');
            }
        });
        header.addEventListener('mouseleave', function() {
            this.classList.remove('glitch');
        });
    });

    videos.forEach(video => {
        video.addEventListener('play', function() {
            if (window.innerWidth > 768) { // Désactiver sur petits écrans
                this.style.transform = 'scale(1.1)';
                this.style.boxShadow = '0 0 30px #FF0000, 0 0 30px #FFD700';
                this.style.borderColor = '#FFD700';
            }
        });
        video.addEventListener('pause', function() {
            if (window.innerWidth > 768) { // Désactiver sur petits écrans
                this.style.transform = 'scale(1)';
                this.style.boxShadow = '0 0 20px #FF0000, 0 0 20px #FFD700';
                this.style.borderColor = '#FFF';
            }
        });
    });

    // Scroll smooth vers la section "À propos"
    document.querySelector('nav ul li a[href="#about"]').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
    });

    // Effet d'apparition de la section "À propos"
    const aboutSection = document.querySelector('#about');
    window.addEventListener('scroll', function() {
        const sectionPosition = aboutSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (sectionPosition < screenPosition) {
            aboutSection.style.opacity = '1';
            aboutSection.style.transform = 'translateY(0)';
        }
    });
});