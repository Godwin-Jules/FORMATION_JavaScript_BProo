// Getting element by id
// On spécifie le nom de l'ID
const title = document.getElementById('titre_principale');
const titre = document.getElementById('titre_secondaire');
console.log(title);
console.log(titre);


// Getting elements by class
// la méthode forEach ne marche pas avec getElementsByClassName()
const paras = document.getElementsByClassName('p');
// const para = document.querySelectorAll('.p');
// console.log(paras);
// para.forEach(p => {
//     console.log(p);
// });
console.log(paras[0]);
const par = document.getElementsByClassName('contenu');
console.log(par);


// Getting elements by tag name
// Cette méthode permet de récupérer tous les éléments de type p ou h1 par exemple
const tags = document.getElementsByTagName('p');
console.log(tags[0]);