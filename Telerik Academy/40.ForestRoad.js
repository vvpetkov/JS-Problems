const input = ['42'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = Number(gets());
const mapHeight = 2 * n - 1;
const firstHalfHeight = (mapHeight / 2);
const secondHalfHeight = (mapHeight / 2) - 1;

let draw = '-';

for (let row = 0; row <= firstHalfHeight; row++) {
  for (let col = 0; col <= row; col++) {
    draw = '.'.repeat(row) + '*' + '.'.repeat(firstHalfHeight - row);
  }
  print(draw);
}

for (let row = 0; row <= secondHalfHeight; row++) {
  for (let col = 0; col <= row; col++) {
    draw = '.'.repeat(secondHalfHeight - row) + '*' + '.'.repeat(row + 1);
  }
  print(draw);
}