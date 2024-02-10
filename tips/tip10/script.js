/** Tip 10
 * How to flatten an array of array
 * Comment aplatir des tableaux des tableaux
*/

const monArray = [
    {
        id:1
    },
    [
        {
            id:2
        }
    ],
    [
        {
            id:3
        }
    ]
];
const flattened = monArray.flat();
console.log(flattened);

// plus avancer
const arr = [
    0,
    1,
    2,
    [
        [
            [
                3,
                4
            ]
        ]
    ]
];
console.log(arr.flat(2));