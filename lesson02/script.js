// Une chaîne de caractère / String

console.log('Salut tous les pros du monde entier');
console.log("Salut tout les pros du monde");

let nom = "MILEGNE";
let prenom = "Dieu donné K. Jules";
let surnom = 'Genius';

// Concaténation des chaînes de caractères / String concatenation

let nom_complet = prenom + nom;
console.log(nom_complet);

let concat = `Je m'appelle :
                ${prenom + prenom}
                mais mes potes me surnomme ${surnom}`;


console.log(concat);

// Obtenir un seul caractère dans une chaîne de caractères / Getting String characters

let email = "julesdieudonne97@gmail.com"
console.log(email[16]);

// Longueur d'une chaîne / String length

console.log(email.length);
let longueur = nom_complet.length;
console.log(longueur);
// Les méthodes d'une chaîne de caractères / String methods

console.log(prenom.toUpperCase());
let upper = surnom.toUpperCase();
let low = nom.toLowerCase();

console.log('Lower character : ' + low);
console.log('Upper character : ' + upper);