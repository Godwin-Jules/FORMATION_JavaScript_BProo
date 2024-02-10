/** Tip 09
 * Vérifier les fausses valeurs dans un tableau (Array)
*/
// Méthodes : filter(), some(), every()

const monArray = [null, false, 'Hello', undefined, 0];
// method filter() pour enlever toutes les valeurs fausses
const filtered = monArray.filter(Boolean);
console.log(filtered);      // returns ['Hello']

// vérifier si au moins une valeur est vrai
const anyTruthy = monArray.some(Boolean);
console.log(anyTruthy);     // returns true

// vérifier si toutes les valeurs sont vraies
const allTruthy = monArray.every(Boolean);
console.log(allTruthy);     // returns false