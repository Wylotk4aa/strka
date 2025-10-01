// scripts.js - GŁÓWNY PLIK
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Strona załadowana pomyślnie');
    
    // Płynne przewijanie do sekcji
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Dostosowane do nowej wysokości headera
                    behavior: 'smooth'
                });
            }
        });
    });

    // FAQ accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    console.log(`📝 Znaleziono ${faqQuestions.length} pytań FAQ`);
    
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
                console.log(`🔓 Otwieram pytanie ${index + 1}`);
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

    // OBSŁUGA SCROLLOWANIA HEADERA
    let lastScrollY = window.scrollY;
    const header = document.querySelector('header');
    const scrollThreshold = 100; // Po ilu pikselach scrollowania header znika

    function handleScroll() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > scrollThreshold) {
            // Scroll w dół - ukryj header
            if (currentScrollY > lastScrollY) {
                header.classList.add('hidden');
                header.classList.add('scrolled');
            } 
            // Scroll w górę - pokaż header (bardziej kompaktowy)
            else {
                header.classList.remove('hidden');
                header.classList.add('scrolled');
            }
        } else {
            // Na samej górze - pokaż normalny header
            header.classList.remove('hidden');
            header.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
    }

    // Dodaj obsługę scrollowania
    window.addEventListener('scroll', handleScroll);

    window.addEventListener('load', checkVisibility);
    window.addEventListener('scroll', checkVisibility);
    setTimeout(checkVisibility, 100);
    
    console.log('✅ Wszystkie funkcjonalności główne zainicjalizowane');
});
