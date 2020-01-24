// Drawing Figures
// Draw a character on a single line (row)
// DrawCharacterOnSingleLine(row).js

// let textOn1row = '';
// for (i = 0; i < 5; i++) {
//     textOn1row += '*'
// }
// console.log(textOn1row);
//*****



//console.log('*'.repeat(5));
//*****



// let star ='*';
// console.log(`${star.repeat(5)} - ${'JavaScript'} - ${' React'.repeat(3)}`);
//***** - JavaScript -  React React React



let star = '*';
let repeatReact = ' React'.repeat(3);
console.log(`${star.repeat(5)} - ${'JavaScript'} - ${repeatReact}`);



function solve([n]) {
    let star = '*'
    let repeatReact = ' React'.repeat(n);
    console.log(`${star.repeat(10)} - ${'JavaScript'} + ${repeatReact}`);
}
solve(['6']);