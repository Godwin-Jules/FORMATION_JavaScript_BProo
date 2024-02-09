console.log(document.URL);
// on met le selecteur à l'interieur de querySelector('');
// querySelector sélectionne seulement le premier élément de votre sélecteur
const h1 = document.querySelector('h1');
const para = document.querySelector('p');
const clas = document.querySelector('.erreur');
const h2 = document.querySelector('h2');
const h = document.querySelector('body > h2'); // récupère le premier élement h2 du body

console.log(h1);
console.log(para);
console.log(clas);
console.log(h2);
console.log(h);

// Par contre le querySelectorAll sélectionne tous les éléments de votre sélecteur
// const h2s = document.querySelectorAll('h2');
// console.log(h2s);
console.log(document.querySelectorAll('br')[0]);
// Cela retourne une nodelist, c'est différent de array mais elle comporte les méthodes basiques d'un array
// Exemple
const f = document.querySelectorAll('h2');
console.log(f[0]);
console.log('Début des itérations -------------------');
f.forEach( element => {
    console.log(element);
})