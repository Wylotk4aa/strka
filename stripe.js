// Konfiguracja Stripe dla produktu kursu
document.addEventListener('DOMContentLoaded', function() {
    const buyCourseBtn = document.getElementById('buyCourse');
    
    if (buyCourseBtn) {
        buyCourseBtn.addEventListener('click', function() {
            // URL do płatności Stripe dla kursu za 99 zł
            const stripeUrl = 'https://buy.stripe.com/9AQeY3eaF2XZ34YcMU';
            
            // Przekierowanie do Stripe
            window.location.href = stripeUrl;
        });
    }
});
