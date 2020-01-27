const input = ['4'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = Number(gets());
const spiral = n * n;

for (let row = 0; row < n; row++) {
  let line = '-!-';
  for (let col = 0; col < n; col++) {
    line = line + (n * col);
  }
  print(line + (n + row));
}

X