/** Tip 01
 * Ajouter de façon conditionnelle des propriétés à
 * un objet JavaScript
*/
// L'opération de propagation
// Spread Operator

let condition = true;
let personne = {
    id: 1,
    nom: 'MILEGNE',
    ... (condition && {age: 25})
}
// La condition évalue si c'est vrai ou faux, si c'est vrai la propriété age sera ajoutée à l'objet personne
// Bon en gros '...' permet d'ajouter des propriétés à vos objets JavaScript de façon conditionnelle

console.log(personne);