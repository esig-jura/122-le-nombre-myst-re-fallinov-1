/**
 * Jeu du nombre mystère
 * @author  Steve Fallet
 * @version 2.0
 * @since   2018-09-09 (date de création)
 */

'use strict';

/**
 * Retourne un nombre entier aléatoire compris entre min et max
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function tireNombre(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
// Constantes
const MIN = 1;
const MAX = 100;

// Variables
let nbMystere = tireNombre(MIN, MAX);
let nbEssais = 0;
let reponse = null;
let message = `Le nombre à deviner est compris entre ${MIN} et ${MAX}.`;

console.log(nbMystere);

do {
    // Récupération de la réponse de l'utilisateur
    // et la convertir en nombre entier avec parseInt()
    reponse = parseInt(prompt(message));
    nbEssais++; // Incrémentation du nombre d'essais

    // Message à afficher en fonction de la réponse
    if(reponse > nbMystere) {
        message = 'C\'est moins !';
    } else {
        message = 'C\'est plus !';
    }

} while (reponse !== nbMystere);

alert(`Bravo, vous avez trouvé en ${nbEssais} essai(s) !`);