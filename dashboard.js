// Données utilisées pour le moment
// Plus tard, elles pourront venir de l'ESP32.

let temperature = 21.5;
let eclairage = 78;
let presence = 12;
let reseau = 100;


// Fonction pour actualiser les données

function actualiserDonnees() {

    // Petite variation pour simuler des données réelles
    temperature = (21 + Math.random() * 2).toFixed(1);

    eclairage = Math.floor(70 + Math.random() * 20);

    presence = Math.floor(8 + Math.random() * 10);


    // Mise à jour de la page

    document.getElementById("temperature").textContent =
        temperature + " °C";

    document.getElementById("eclairage").textContent =
        eclairage + " %";

    document.getElementById("presence").textContent =
        presence;

    document.getElementById("reseau").textContent =
        reseau + " %";


    console.log("Données actualisées !");
}


// Actualisation automatique toutes les 30 secondes

setInterval(actualiserDonnees, 30000);
