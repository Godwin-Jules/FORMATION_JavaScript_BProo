/*
const p  = document.querySelector('p');
// classList permet de lister toutes les classes de la balise p qu'on a récupéré
console.log(p.classList);
p.classList.add('come');    // permet d'ajouter des classes
console.log(p.classList);
p.classList.remove('come'); // permet de supprimer une classe
p.classList.remove('erreur');
console.log(p.classList);
*/
const p = document.querySelector('p');
const classes = ['error', 'success', 'warning'];

let index = 0;
changeClass = () => {
    if(index > classes.length - 1){
        index = 0;
        p.setAttribute('class', '');
    }
    p.classList.add(classes[index]);
    console.log(index + 1);
    index++;
};

setInterval(changeClass, 2000);
