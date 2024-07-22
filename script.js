// Attendez que le document soit complètement chargé avant d'ajouter des écouteurs d'événements
document.addEventListener('DOMContentLoaded', function () {
    // Sélectionner l'élément de la flèche de défilement
    const scrollDownButton = document.querySelector('.scroll-down');

    // Vérifiez si le bouton existe avant d'ajouter l'écouteur d'événements
    if (scrollDownButton) {
        // Ajouter un écouteur d'événements pour le clic
        scrollDownButton.addEventListener('click', function (event) {
            // Empêcher le comportement par défaut du lien (si nécessaire)
            event.preventDefault();

            // Sélectionner la section cible
            const targetSection = document.querySelector('#more-info');

            // Faire défiler la page vers la section cible en douceur
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
