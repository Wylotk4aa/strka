const sections = document.querySelectorAll('.section');

function checkVisibility() {
    const triggerBottom = window.innerHeight / 1.2;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

window.addEventListener('load', checkVisibility);
window.addEventListener('scroll', checkVisibility);