// portfolio.js - OBSŁUGA PORTFOLIO I MODALU
document.addEventListener('DOMContentLoaded', function() {
    
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeModal = document.querySelector('.close-modal');
    const zoomButtons = document.querySelectorAll('.zoom-btn');

    // Sprawdź czy elementy istnieją
    if (!modal || !modalImg || !closeModal) {
        return;
    }


    // Funkcja powiększania zdjęć
    zoomButtons.forEach(button => {
        button.addEventListener('click', function() {
            const fullImageUrl = this.getAttribute('data-image');
            
            if (fullImageUrl) {
                modal.style.display = 'block';
                modalImg.src = fullImageUrl;
                document.body.style.overflow = 'hidden';
            } else {
            }
        });
    });

    // Zamknij modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Zamknij po kliknięciu w tło
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Zamknij ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

});
