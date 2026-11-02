// On récupère tous les boutons de filtre
const boutonsFiltres = document.querySelectorAll(".salle-filter");

// On récupère toutes les cartes des salles
const cartesSalles = document.querySelectorAll(".salle-card");


// On ajoute une action sur chaque bouton
boutonsFiltres.forEach(function (bouton) {

    bouton.addEventListener("click", function () {

        // On retire la classe active de tous les boutons
        boutonsFiltres.forEach(function (autreBouton) {
            autreBouton.classList.remove("active");
        });

        // On active le bouton sélectionné
        bouton.classList.add("active");

        // On récupère le filtre demandé
        const filtre = bouton.dataset.filter;


        // On affiche ou cache les salles
        cartesSalles.forEach(function (salle) {

            const statutSalle = salle.dataset.status;

            if (filtre === "all" || statutSalle === filtre) {
                salle.classList.remove("hidden");
            } else {
                salle.classList.add("hidden");
            }

        });

    });

});


// Fonction utilisée par les boutons "Voir les détails"
function afficherDetails(nomSalle) {

    alert(
        "Détails de " + nomSalle +
        "\n\nCette fonctionnalité sera développée dans une prochaine étape."
    );

}
