// array -> tableau
let fruits = ['banane', 'ananas', 'avocat', 'papaye', 'mangue'];

// array methods
// A little like the String type

console.log(fruits.join(' - '));
console.log(fruits.concat([1, 2, 3, 4, 5]));

//push() add element(s) to the array
fruits.push('haricot', 'console');

// pop() return the last element of an array and delete it in the main array
fruits.pop();
console.log(fruits);