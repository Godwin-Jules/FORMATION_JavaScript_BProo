/** Tip 02
 * Vérifier si une propriété existe dans un objet
*/
// Utilisation du mot clé IN
// pour vérifier si un objet contient une propriété

let personne = {
    id: 1,
    nom: 'MILEGNE',
    salaire: 100000
}

console.log('age' in personne);
console.log('salaire' in personne);