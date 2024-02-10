/** Tip 05
 * Nullish Coalescing, ?? Operator
 * Fusion nulle, ? Opérateur
*/
// if the left side value is null/undefined then it takes the right side value; in the contrary it takes the left side value

const foo = undefined ?? 'Hello';
console.log(foo);   // returns 'Hello'
const bar = 'Not null' ?? 'Hello';
console.log(bar);   // returns 'Not null'
const baz = 0 ?? 'Hello';
console.log(baz);   // returns 0