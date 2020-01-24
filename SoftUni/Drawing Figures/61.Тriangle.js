// function solve([n]) {
//     n = Number(n);
//     for (let row = 0; row < n; row++) {
//         console.log('$'.repeat(row + 1));
//     }
// }
// solve(['3']);

// the same :

function solve([n]) {
    n = Number(n);
    for (let row = 1; row <= n; row++) {
        console.log('$'.repeat(row));
    }
}
solve(['6']);

// the same

// function solve([n]) {
//     n = Number(n);
//     for (let row = 100; row < n + 100; row++) {
//         console.log('$'.repeat(row - 99));
//     }
// }
// solve(['6']);
