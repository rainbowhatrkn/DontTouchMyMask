// Script pour faire pleuvoir des chapeaux

// Fonction pour générer un chapeau qui tombe
function createHat() {
    const hatTypes = ['red-hat', 'black-hat', 'grey-hat']; // Différents types de chapeaux
    const hat = document.createElement('div'); // Créer un élément div pour le chapeau
    hat.classList.add('hat-fall'); // Appliquer la classe pour la chute
    hat.classList.add(hatTypes[Math.floor(Math.random() * hatTypes.length)]); // Ajouter un chapeau au hasard

    hat.innerText = '🎩'; // Emoji représentant le chapeau, peut être remplacé par un symbole ou une image
    hat.style.left = Math.random() * 100 + 'vw'; // Positionner aléatoirement le chapeau horizontalement
    hat.style.animationDuration = Math.random() * 3 + 2 + 's'; // Durée aléatoire de l'animation de chute

    document.getElementById('hat-rain').appendChild(hat); // Ajouter le chapeau dans le conteneur

    // Retirer le chapeau après qu'il soit tombé
    setTimeout(() => {
        hat.remove();
    }, 5000); // Temps d'attente avant de supprimer l'élément
}

// Générer des chapeaux à des intervalles réguliers
setInterval(createHat, 500); // Créer un chapeau toutes les 500 millisecondes