background-color: rgba(0, 0, 0, 0.8);
}
// On récupère les boutons d'abonnement
document.getElementById('basicPlan').addEventListener('click', function() {
    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: '5.00'  // Montant de l'abonnement de base
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert('Merci pour votre abonnement, ' + details.payer.name.given_name);
                window.location.href = "content.html"; // Redirige vers le contenu après paiement
            });
        }
    }).render('#basicPlan'); // Rendre le bouton PayPal sur la page d'abonnement
});

document.getElementById('premiumPlan').addEventListener('click', function() {
    paypal.Buttons({
createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: '10.00'  // Montant de l'abonnement premium
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert('Merci pour votre abonnement, ' + details.payer.name.given_name);
                window.location.href = "content.html"; // Redirige vers le contenu après paiement
            });
        }
    }).render('#premiumPlan'); // Rendre le bouton PayPal sur la page d'abonnement
});
