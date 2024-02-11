let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const amount = Number(input[0]);

const start = Math.floor(amount / 5);

let answer = 0;

for (let i = start; i >= 0; i--) {
  const remain = amount - i * 5;
  if (remain % 3 === 0) {
    answer = i + remain / 3;
    break;
  }
}

console.log(answer ? answer : -1);
