// Modifying or Updating HTML contents using JavaScript
// let h1 = document.querySelector('h1');
// let h_text = h1.innerText;
// let maj_text = h_text.toUpperCase();
// h1.innerText = maj_text;

document.querySelector('h1').innerText = document.querySelector('h1').innerText.toUpperCase(); // En une ligne

// Récupération des éléments enfants
const div = document.querySelector('.contenu');
console.log(div.innerHTML);

const personne = ['Dieu donné', 'MILEGNE'];
personne.forEach( p => {
    div.innerHTML += `<p>${p}</p>`;
});

/*
// Comment créer un élément HTML (la balise a par exemple)
const link = document.createElement('a');
link.href = 'https://google.com';
link.innerText = 'Visiter le site de Google';
// console.log(link);
// Commnent l'ajouter au body ?
// Première manière :
document.querySelector('.contenu').innerHTML += link;

// Deuxième manière :
document.querySelector('.contenu').appendChild(link);
*/

let lien = document.querySelector('a');
lien.innerText = 'Aller sur le site de BProo';
lien.setAttribute('href', 'https://bproo.fr');

let h = document.querySelector('h1');
// h.setAttribute('style', 'color:blue;font-style:italic;font-weight:bold');
h.style.color = 'blue';
h.style.fontSize = '40px';
h.style.fontStyle = 'italic';
h.style.fontFamily = 'gEORGIA';

let git = document.createElement('a');
git.href = 'https://github.com/Godwin-Jules';
git.innerText = 'Lien vers mon compte GitHub';
document.querySelector('body').appendChild(git);

document.querySelectorAll('a').forEach( el => {
    el.setAttribute('style', 'color:red;font-style:italic;font-weight:bold');
});