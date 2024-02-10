/** Tip 06
 * Optional chaining  (?.)
 * Chaînage optionnel (?.)
*/
// Permet de vérifier si une valeur existe et la retourner sinon retourner undefined
const book = {
    id:1,
    title:'Title',
    author:null
};

// console.log(book.author.age);   // throws error

console.log(book.author && book.author.age);    // returns undefined

// with optional chaining
console.log(book.author?.age);  // returns undefined

//or deep optionnal chaining
console.log(book.author?.address?.city);    // returns undefined

// function
const person = {
    firstName:'Haseeb',
    lastName:'Anwar',
    printName:function() {
        return `${this.firstName} ${this.lastName}`;
    },
};

console.log(person.printName());    // returns Haseeb Anwar
// vérifie si une fonction affectée à la propriété doesNotExists existe et l'exécuter...
console.log(person.doesNotExists?.());  // returns undefined
console.log(person.printName?.());  // returns Haseeb Anwar