// Opérateurs de comparaison
// ==, !=, >, <, >=, <=

let age = 26;

// console.log(age == 25); must return false
// console.log(agg != 20); must return true
console.log(age <= 20);

// type comparing : using === or !==
console.log(age !== '26');

// Conversion des types de variables
let string_number = String(age);
console.log(string_number, typeof string_number);
console.log(age, typeof age);

let number_age = Number(string_number);
console.log(number_age, typeof numberm_age);

let bool = 'true';
let boolean_bool = Boolean(bool);
console.log(bool, typeof bool);
console.log(boolean_bool, typeof boolean_bool);

let data = '0'
console.log(Boolean(data));
console.log(Boolean('chaine de caractere'));