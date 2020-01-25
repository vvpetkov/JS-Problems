const input = ['42'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = Number(gets());
// const middleRow = n;

for (let row = 1; row <= n; row++) {
  let line = '';
  for (let col = 1; col <= row; col++) {
    line = line + ' ' + col;
  }
  print(line);
}

for (let row = 1; row <= n - 1; row++) {
  let line = '';
  for (let col = 1; col <= n - row; col++) {
    line = line + ' ' + col;
  }
  print(line);
}
