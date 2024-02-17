let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const number = Number(input[0]);

let count = 0;

let sum = 0;

while (sum <= number) {
  count++;
  sum += count;
}

console.log(sum === number ? count : count - 1);
