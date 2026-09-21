function actualiser() {
    alert("Les données ont été actualisées.");
}

function ajouter() {
    alert("Ajout : cette fonction sera développée ensuite.");
}

function enregistrer() {
    alert("Paramètres enregistrés pour la démonstration.");
}

function connexion() {

    let nom = document.getElementById("nom").value;

    if (nom.trim() !== "") {

        document.getElementById("message").textContent =
            "Connexion de démonstration réussie.";

    } else {

        document.getElementById("message").textContent =
            "Veuillez saisir votre nom.";
    }
}
