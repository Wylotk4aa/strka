// scripts.js - GŁÓWNY PLIK
document.addEventListener('DOMContentLoaded', function() {
    
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

    // FAQ accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
 
    faqQuestions.forEach((question, index) => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Zamknij wszystkie inne
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Otwórz aktualne jeśli było zamknięte
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });

    // Animacja sekcji
    const sections = document.querySelectorAll('.section');
    
    function checkVisibility() {
        const triggerBottom = window.innerHeight / 1.2;
        
        sections.forEach((section) => {
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

    window.addEventListener('load', checkVisibility);
    window.addEventListener('scroll', checkVisibility);
    setTimeout(checkVisibility, 100);
    
});
