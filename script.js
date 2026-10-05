/* ========================================
   SMART SCHOOL
   Navigation principale
======================================== */


function afficherSection(id) {

    // Récupération de toutes les sections

    const sections = document.querySelectorAll(".page-section");


    // Masquer toutes les sections

    sections.forEach(function(section) {

        section.classList.remove("active-section");

    });


    // Afficher la section demandée

    const section = document.getElementById(id);

    if (section) {

        section.classList.add("active-section");

    }


    // Mettre à jour le menu

    const liens = document.querySelectorAll(".nav-link");

    liens.forEach(function(lien) {

        lien.classList.remove("active");

    });


    const lienActif = document.querySelector(
        '.nav-link[href="#' + id + '"]'
    );

    if (lienActif) {

        lienActif.classList.add("active");

    }


    // Remonter en haut de la page

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ========================================
   Navigation avec les liens
======================================== */

document.querySelectorAll(".nav-link").forEach(function(lien) {

    lien.addEventListener("click", function(event) {

        event.preventDefault();

        const id = lien.getAttribute("href").substring(1);

        afficherSection(id);

    });

});


/* ========================================
   Connexion
======================================== */

function afficherConnexion() {

    const modal = document.getElementById("connexion");

    if (modal) {

        modal.classList.add("modal-visible");

    }

}


function fermerConnexion() {

    const modal = document.getElementById("connexion");

    if (modal) {

        modal.classList.remove("modal-visible");

    }

}


/* ========================================
   Données simulées
======================================== */

function actualiserDonnees() {

    const temperature =
        (21 + Math.random() * 2).toFixed(1);

    const eclairage =
        Math.floor(70 + Math.random() * 20);

    const presence =
        Math.floor(8 + Math.random() * 10);


    // Tableau de bord

    const temperatureElement =
        document.getElementById("temperature");

    const eclairageElement =
        document.getElementById("eclairage");

    const presenceElement =
        document.getElementById("presence");


    if (temperatureElement) {

        temperatureElement.textContent =
            temperature + " °C";

    }


    if (eclairageElement) {

        eclairageElement.textContent =
            eclairage + " %";

    }


    if (presenceElement) {

        presenceElement.textContent =
            presence;

    }


    // Aperçu de l'accueil

    const accueilTemperature =
        document.getElementById("accueilTemperature");

    const accueilEclairage =
        document.getElementById("accueilEclairage");


    if (accueilTemperature) {

        accueilTemperature.textContent =
            temperature + " °C";

    }


    if (accueilEclairage) {

        accueilEclairage.textContent =
            eclairage + " %";

    }


    // Capteur de température

    const capteurTemperature =
        document.getElementById("capteurTemperature");


    if (capteurTemperature) {

        capteurTemperature.textContent =
            temperature + " °C";

    }

}


/* Actualisation toutes les 30 secondes */

setInterval(
    actualiserDonnees,
    30000
);


/* ========================================
   Ouverture d'une section avec l'URL
======================================== */

function chargerSectionDepuisURL() {

    const hash =
        window.location.hash.substring(1);


    if (hash) {

        const section =
            document.getElementById(hash);


        if (section) {

            afficherSection(hash);

        }

    }

}


window.addEventListener(
    "load",
    chargerSectionDepuisURL
);
