// Les opérations arithmétiques / arithmetic operators
// +, -, *, /, **, %

let rayon  = 10;
let pi = 3.14;
let longueur = 45;
let largeur = 10;

let surface_circle = pi * rayon**2;
let surface_rectangle = longueur * largeur;
let perimetre_circle = 2 * rayon * pi;
let perimetre_rectangle = 2 * (longueur + largeur);

let result_circle = `Mon cercle a pour perimetre : ${perimetre_circle} et pour surface : ${surface_circle}`;
let result_rectangle = `Mon rectangle a pour perimetre : ${perimetre_rectangle} et pour surface : ${surface_rectangle}`;

console.log(result_circle);
console.log(result_rectangle);

// Les opérations incrémentielles
// -- ++ += -= *= /=
let likes = 12;
likes++;
likes += 4;
likes -= 4;
likes /= 2;
likes *= 3;
console.log(likes);