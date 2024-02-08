// // la condition if - if statement

// /**Syntax
//  * if (condition){
//  *      expression ...
//  * }
//  */

// let password = 'secret...';
// if (password === 'secret'){
//     console.log('Super bon mot de passe');
// }

// if (password.length >= 6){
//     console.log('Mot de passe long');
//     console.log(password.length);
// } else{
//     console.log('Mot de passe court');
//     console.log(password.length);
// }

// let heure = 10;
// let age = 25;

// if (age >= 21){
//     console.log('Bien, vous pouvez visiter la plateforme');
// }

// if (heure < 12){
//     console.log('Bonjour !');
// } else {
//     console.log('Bonsoir !');
// }

// plusieurs if else

// 2           =   bébé
// 2 - 10      =   adolescent
// 11 - 20     =   mineur
// 21 - 60     =   homme
// 61 - 90     =   vieux
// 91 et +     =   vieillard

// let age = 15;

// if (age <= 2){
//     console.log('Bonjour bébé !');
// } else if (age <= 10){
//     console.log('Bonjour Adolescent !');
// } else if (age <= 20){
//     console.log('Bonjour Mineur !');
// } else if (age <= 60){
//     console.log('Bonjour l\'Homme !');
// } else if (age <= 90){
//     console.log('Bonjour Vieux !');
// } else if (age > 90){
//     console.log('Bonjour Vieillard !');
// } else {
//     console.log('Bonjour.......');
// }

// Switch cases
let number = 6;

switch (number) {
    case 1:
        console.log("Janvier");
        break;
    case 2:
        console.log("Février");
        break;
    case 3:
        console.log("Mars");
        break;
    case 4:
        console.log("Avril");
        break;
    case 5:
        console.log("Mai");
        break;
    case 6:
        console.log("Juin");
        break;
    case 7:
        console.log("Juillet");
        break;
    case 8:
        console.log("Août");
        break;
    case 9:
        console.log("Septembre");
        break;
    case 10:
        console.log("Octobre");
        break;
    case 11:
        console.log("Novembre");
        break;
    case 12:
        console.log("Déembre");
        break;
    default:
        console.log('Non défini');
        break;
}