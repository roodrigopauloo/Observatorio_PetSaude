document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById('heroCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dots = document.querySelectorAll('.carousel-dots .dot');

    if (!carousel || !prevBtn || !nextBtn) return; // Evita erros em páginas que não têm o carrossel

    // Função para mover nas setas
    nextBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: carousel.clientWidth, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: -carousel.clientWidth, behavior: 'smooth' });
    });

    // Função para mover clicando diretamente nas bolinhas
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            carousel.scrollTo({ left: carousel.clientWidth * index, behavior: 'smooth' });
        });
    });

    // Função para atualizar a bolinha branca ao deslizar
    carousel.addEventListener('scroll', () => {
        let currentIndex = Math.round(carousel.scrollLeft / carousel.clientWidth);
        
        dots.forEach((dot, i) => {
            if (i === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    });
});