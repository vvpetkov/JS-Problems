function solve([n]) {
    n = Number(n);
    let result = '';
    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n; j++) {
            result += '*';
        }
        console.log(result);
        result = '';
    }
}
solve(['10']);