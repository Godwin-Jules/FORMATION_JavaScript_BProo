// Les flux de contrôle en JavaScript
// La boucle for / for loop

/**Syntax :
 * for (initialization; condition; incrementator){
 *      loop body
 * }
 */
console.log('\nEtude de la boucle for');

for (let i = 1; i <= 5; i++){
    console.log(`Loop numero : ${i}`);
}
console.log('Fin de la boucle....');

// La boucle while / while loop

/**Syntax :
 * while(condition){
 *      expression ...
 *      incrementator
 * }
 */
console.log('\nEtude de la boucle while');
let nom = ['MILEGNE', 'Dieu donné', 'Génie Logiciel'];
let i = 0;
while(i<5){
    console.log(`nom majuscule : ${nom[0]}`);
    console.log(`nom minuscule : ${nom[0].toLowerCase()}`);
    console.log("---------------------------------------------");
    i++;
}

console.log('Fin de la boucle while');

// La boucle do while / do while loop

/**Syntax :
 * do{
 *      expression ...
 *      incrementator
 * }while(condition);
 */

console.log('\nEtude de la boucle do while');
i = 0;
do {
    console.log('Juste pour tester ma boucle');
    console.log('********************************');
    i ++;
} while(i < nom.length);

console.log('Fin de la boucle do while');