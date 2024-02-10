/** Tip 03
 * Comment ajouter les noms de propriétés
 * de façon dynamique dans un objet JavaScript
*/

let item = {
    nom:'Biscuit',
    ['saveur']:'Chocolat'
}
console.log(item);

let dynamic = 'favorite';
let itm = {
    nom:'Biscuit',
    [dynamic]:'Chocolat'
};
console.log(itm);