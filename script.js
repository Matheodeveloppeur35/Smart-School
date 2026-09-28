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
/* =====================================================
   SMART SCHOOL - ALERTES
   ===================================================== */


/* =========================
   FILTRER LES ALERTES
   ========================= */

function filterAlerts(type, button) {

    const alerts = document.querySelectorAll(".alert-card");
    const buttons = document.querySelectorAll(".filter-btn");

    // Changer le bouton actif
    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    // Afficher / masquer les alertes
    alerts.forEach(alert => {

        if (type === "all") {
            alert.style.display = "flex";
        }

        else if (alert.dataset.type === type) {
            alert.style.display = "flex";
        }

        else {
            alert.style.display = "none";
        }

    });
}


/* =========================
   MARQUER UNE ALERTE
   COMME RÉSOLUE
   ========================= */

function resolveAlert(button) {

    const alert = button.closest(".alert-card");

    if (!alert) return;

    // Changer le type
    alert.dataset.type = "resolved";

    // Changer les classes
    alert.classList.remove("critical");
    alert.classList.remove("warning");
    alert.classList.add("resolved");

    // Changer l'icône
    const icon = alert.querySelector(".alert-icon");

    if (icon) {
        icon.textContent = "🟢";
    }

    // Changer le badge
    const badge = alert.querySelector(".alert-badge");

    if (badge) {
        badge.className = "alert-badge resolved";
        badge.textContent = "RÉSOLUE";
    }

    // Supprimer le bouton
    button.remove();

    // Mettre à jour les compteurs
    updateAlertCounters();
}


/* =========================
   COMPTEURS
   ========================= */

function updateAlertCounters() {

    const criticalCount =
        document.querySelectorAll(
            '.alert-card[data-type="critical"]'
        ).length;

    const warningCount =
        document.querySelectorAll(
            '.alert-card[data-type="warning"]'
        ).length;

    const resolvedCount =
        document.querySelectorAll(
            '.alert-card[data-type="resolved"]'
        ).length;


    const criticalElement =
        document.getElementById("criticalCount");

    const warningElement =
        document.getElementById("warningCount");

    const resolvedElement =
        document.getElementById("resolvedCount");


    if (criticalElement) {
        criticalElement.textContent = criticalCount;
    }

    if (warningElement) {
        warningElement.textContent = warningCount;
    }

    if (resolvedElement) {
        resolvedElement.textContent = resolvedCount;
    }
}


/* =========================
   INITIALISATION
   ========================= */

document.addEventListener("DOMContentLoaded", () => {

    updateAlertCounters();

});
