// Funkcjonalności związane z portfolio
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio.js loaded - modal functionality');
    
    // OBSŁUGA MODALA DO POWIĘKSZANIA ZDJĘĆ
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeModal = document.querySelector('.close-modal');
    const zoomButtons = document.querySelectorAll('.zoom-btn');

    console.log('Found elements:', {
        modal: modal,
        modalImg: modalImg,
        closeModal: closeModal,
        zoomButtons: zoomButtons.length
    });

    // Otwieranie modala z powiększonym zdjęciem
    zoomButtons.forEach(button => {
        button.addEventListener('click', function() {
            const fullImageUrl = this.getAttribute('data-image');
            
            console.log('Opening modal with image:', fullImageUrl);
            
            if (!modal || !modalImg) {
                console.error('Modal elements not found');
                return;
            }
            
            modal.style.display = 'block';
            modalImg.src = fullImageUrl;
            
            // Blokada przewijania strony w tle
            document.body.style.overflow = 'hidden';
        });
    });

    // Zamykanie modala
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            console.log('Modal closed');
        });
    }

    // Zamykanie modala po kliknięciu w tło
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
                console.log('Modal closed by background click');
            }
        });
    }

    // Zamykanie modala klawiszem Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            console.log('Modal closed by Escape key');
        }
    });

    console.log('Portfolio functionality initialized successfully');
});
