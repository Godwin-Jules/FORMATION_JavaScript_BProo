/** Tip 04
 * Comment déstructurer les propriétés d'un objet JavaScript
*/
// permet de créer des variables qui dérivent des propriétés de l'objet personne
const person = {
    id:1,
    nom:'John Doe'
};
const {id, nom} = person;
console.log(person);

console.log(id);
console.log(nom);
// Comment modifier les propriétés de ce objet
const {id: identifiant} = person;

console.log(identifiant);
console.log(id);

// Comment changer les variables de façon dynamique
let personne = {
    id:1,
    nnom:'John Doe'
};
let {id:identity} = personne;
let nom_prop = 'nnom';
let {[nom_prop]:nname} = personne;
console.log(nname);