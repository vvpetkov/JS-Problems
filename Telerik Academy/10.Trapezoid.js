
const input = ['5'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = Number(gets());
const firstRow = n;
const lastRow = n * 2;

print('.'.repeat(firstRow) + '*'.repeat(firstRow));

for (let row = 0; row < n - 1; row++) {
  print('.'.repeat(n - row - 1) + '*' + '.'.repeat(n + row - 1) + '*');
}

print('*'.repeat(lastRow));
