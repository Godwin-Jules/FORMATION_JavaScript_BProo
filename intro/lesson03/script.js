// indexOf() : return the index of an element
let nom = 'Milegne';
let prenom = 'Dieu donné';

console.log(nom.indexOf('i'));

// lastIndexOf() return the last index of an element
console.log(nom.lastIndexOf('e'));

// slice(from, to) return the a String between two indexes
console.log(nom.slice(0, 3));

// substr(from, number) : return a string from an index and containing "number" characters
console.log(nom.substr(5, 2));

// replace(this, with) replace a portion of string to another from the same position
console.log(nom.replace('Mi', 'Ri'));

// concat(str1, str2) retunr the concatenation of two Strings
console.log(nom.concat(' ' + prenom));

// trim() erase the surplus 
let salutation = '                     Bonjour à tous                ';
console.log(salutation.trim());

// charAt(index) return a character from a given index
console.log(nom.charAt(5));

// split(separtor) split or divide a string to array using separator as the argument of separation
let greetings = 'Hello My Guys';
let temp = greetings.split(' ');
console.log(greetings.split(' '));

// join(array) do the opposite of split
console.log(temp.join(('-')));
