// Smart School
// Gestion de la page des capteurs


// Données provisoires
// Elles seront remplacées par les données de l'ESP32 plus tard.

let temperature = 21.8;
let luminosite = 76;
let presence = true;
let porteFermee = true;


// Actualiser les données

function actualiserCapteurs() {

    // Simulation d'une nouvelle température

    temperature = (20 + Math.random() * 4).toFixed(1);

    // Simulation de la luminosité

    luminosite = Math.floor(60 + Math.random() * 35);


    // Affichage des nouvelles données

    document.getElementById("temperature").textContent =
        temperature + " °C";

    document.getElementById("luminosite").textContent =
        luminosite + " %";


    // Mise à jour de l'heure

    let maintenant = new Date();

    let heure = maintenant.getHours()
        .toString()
        .padStart(2, "0");

    let minutes = maintenant.getMinutes()
        .toString()
        .padStart(2, "0");

    document.getElementById("heureSynchro").textContent =
        heure + ":" + minutes;


    console.log("Les données des capteurs ont été actualisées.");
}


// Actualisation automatique toutes les 10 secondes

setInterval(actualiserCapteurs, 10000);
