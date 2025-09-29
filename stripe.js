document.getElementById('buy-btn').onclick = function() {
    var stripe = Stripe('TWOJSTRIPE');
    stripe.redirectToCheckout({
        lineItems: [{price: '99 zł', quantity: 1}],
        mode: 'payment',
        successUrl: window.location.href + '?success=true',
        cancelUrl: window.location.href + '?canceled=true',
    });
};