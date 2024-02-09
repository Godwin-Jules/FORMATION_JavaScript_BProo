// Varible sscope / La portée des variables

let numbers = [12, 24, 65, 134, 165, 58, 22];
let nom_de_famille = 'MILEGNE';
let prenoms = 'Dieu donné K. Jules';

for (let i = 0; i < numbers.length; i++){
    console.log(`Auteur du programme : ${prenoms} ${nom_de_famille}`);
    console.log('Itération numéro : ', i+1);let departement = 'Génie Logiciel';


    if ((numbers[i] % 2) != 0){
        console.log(numbers[i]);
        break;
    } else {
        continue;
    }
    
}
/*
console.log(departement);
Cette ligne n'est pas possible, elle génère des erreurs parce que la varible se trouve dans un bloc de code inférieur au bloc de code appellant.

Par contre, un bloc de code inferieur peut utiliser une variable de son bloc de code ou d'un bloc de code supérieur à lui.
*/