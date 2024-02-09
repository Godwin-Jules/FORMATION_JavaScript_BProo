// (01) declaration function / déclaration de fonction
// Syntax

function salutation(){
    console.log('Salut les pros......');
    console.log('Salut les pros......');
    console.log('Salut les pros......');
}
salutation();


// (02) expression function / fonction par expression
const greeting = function(){
    console.log('Salut les pros...........');
};

// Pour appeler une fonction par expression
greeting();


// (03) Return function / fonction de retour

function surface(){
    let longueur = 15;
    let largeur = 10;
    return longueur * largeur;
}

console.log('La surface de mon rectangle est de : ', surface(), ' m2');
let surf = surface();
console.log('La surface de mon rectangle est de : ', surf, ' m2');

// (04) Parameters function

function greet(param1, param2){
    console.log('Salut, ', param1, ' ', param2);
}

greet('Dieu donné');
greet('Dieu donné', 'MILEGNE')

function surfaceRectangle(L,l){
    let result = L * l;
    return result;
}
console.log(`La surface de mon rectangle est de : ${surfaceRectangle(4, 3)}`);
console.log(`La surface de mon rectangle est de : ${surfaceRectangle(8, 3)}`);
console.log(`La surface de mon rectangle est de : ${surfaceRectangle(10, 4)}`);
console.log(`La surface de mon rectangle est de : ${surfaceRectangle(12, 9)}`);

// (05) Arrow function / fonction à flêche
// pour les fonctions par expression

const salut = (name) => {
    console.log('Salut les pros.........., ', name);
}
salut();

const sal = (prenom, nom) =>{
    console.log('Salut', prenom, ' ', nom);
}
sal();
sal('Dieu donné');
sal('Dieu donné', 'MILEGNE');

const surfaceRect = (L, l) => {
    return L*l;
};
const surfRect = (L, l) => L*l; // pour une fonction avec une seule ligne de code

console.log(`La surface de mon rectangle est de : ${surfaceRect(10, 7)}`);
console.log(`La surface de mon rectangle est de : ${surfRect(10, 7)}`);

const salt = (prenom='Dieu donné') => console.log('Salut,',prenom);
salt();
salt('René');