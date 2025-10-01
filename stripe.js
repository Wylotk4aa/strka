// stripe.js - OBSŁUGA PŁATNOŚCI
document.addEventListener('DOMContentLoaded', function() {
    
    const buyCourseBtn = document.getElementById('buyCourse');
    

    if (buyCourseBtn) {
        buyCourseBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // URL do płatności Stripe dla kursu
            const stripeUrl = 'https://buy.stripe.com/9AQeY3eaF2XZ34YcMU';
            
            // Przekierowanie do Stripe
            window.location.href = stripeUrl;
        });
        
    } else {
    }
});
