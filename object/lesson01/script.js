// Les objets dans la vraie vie ont 
// des propriétés et
//  des actions qu'ils peuvent faire
// Exemple :

/**Objet téléphone
 * propriétés       Méthodes
 * --------------------------
 * couleur          appeler
 * marque           sonner
 * SE               jouer de la musique
 * version          enregistrer
 * état
 */

/**Objet personne
 * Propriétés       Méthodes
 * -------------------------
 * nom              manger
 * email            marcher
 * numéro           chanter
 * age              travailler
 * taille
 */

/**Objet Blog
 * Propriétés       Méthodes
 * -------------------------
 * id               publier
 * titre            dépublier
 * contenu          supprimer
 * commentaires
 * likes
 */

// Literal object (Objet littéral)
// Declaration of Literal Object
const personne = {
    nom:'Dieu donné',
    email:'mdjulesdeveloper23@gmail.com',
    age:20,
    taille:1.80,
    couleur:'Noire',
    blogs:[
        'Les bases de JS',
        'Les bases de React',
        'Les bases de HTML & CSS'
    ],
};

console.log(personne);
console.log(personne.email);

personne.age = 90;
personne.blogs[0] = 'Les bases du JavaScript';
console.log(personne.age);
console.log(personne.blogs[2])
console.log(personne.blogs[0]);
