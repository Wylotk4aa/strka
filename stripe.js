// Konfiguracja Stripe dla wielu produktów
document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', function() {
        const plan = this.getAttribute('data-plan');
        let stripeUrl = '';
        
        switch(plan) {
            case 'standard':
                stripeUrl = 'https://buy.stripe.com/9AQeY3eaF2XZ34YcMU';
                break;
            case 'premium':
                stripeUrl = 'https://buy.stripe.com/9AQeY3eaF2XZ34YcMU';
                break;
            case 'vip':
                stripeUrl = 'https://buy.stripe.com/9AQeY3eaF2XZ34YcMU';
                break;
        }
        
        if(stripeUrl) {
            window.location.href = stripeUrl;
        }
    });
});
