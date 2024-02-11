let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [target, result] = input[0].split(" ").map(Number);

let current = result;

let count = 1;

let answer = 0;

while (current > target) {
  if (current % 2 === 0) {
    current /= 2;
    count++;
  } else if (current % 10 === 1) {
    const arr = String(current).split("");
    arr.pop();
    current = Number(arr.join(""));
    count++;
  } else {
    break;
  }

  if (current === target) {
    answer = count;
    break;
  }
}

console.log(answer ? answer : -1);
