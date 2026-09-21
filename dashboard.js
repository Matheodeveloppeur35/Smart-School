// ========================================
// TABLEAU DE BORD — SMART SCHOOL
// ========================================


// Données actuelles du système

let temperature = 21.5;
let eclairage = 78;
let presence = 12;
let reseau = 100;


// Actualisation des données

function actualiserDonnees() {

    temperature = (21 + Math.random() * 2).toFixed(1);

    eclairage = Math.floor(
        70 + Math.random() * 20
    );

    presence = Math.floor(
        8 + Math.random() * 10
    );


    // Affichage des nouvelles données

    document.getElementById("temperature").textContent =
        temperature + " °C";

    document.getElementById("eclairage").textContent =
        eclairage + " %";

    document.getElementById("presence").textContent =
        presence;

    document.getElementById("reseau").textContent =
        reseau + " %";


    console.log("Données du tableau de bord actualisées.");
}


// Actualisation toutes les 30 secondes

setInterval(actualiserDonnees, 30000);
