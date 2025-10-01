// Główne funkcjonalności strony
document.addEventListener('DOMContentLoaded', function() {
    console.log('Scripts.js loaded - main functionality');
    
    // Płynne przewijanie do sekcji
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animacja pojawiania się sekcji
    const sections = document.querySelectorAll('.section');
    
    function checkVisibility() {
        const triggerBottom = window.innerHeight / 1.2;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            
            if (sectionTop < triggerBottom) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }

    // Inicjalizacja animacji
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Sprawdź widoczność przy załadowaniu i przewijaniu
    window.addEventListener('load', checkVisibility);
    window.addEventListener('scroll', checkVisibility);
    
    // Sprawdź też od razu po załadowaniu DOM
    setTimeout(checkVisibility, 100);
});
