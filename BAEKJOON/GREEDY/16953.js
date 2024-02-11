let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [target, result] = input[0].split(" ").map(Number);

let current = result;

let count = 1;

let answer = 0;

while (current > target) {
  const arr = String(current).split("");
  const lastNumber = arr[arr.length - 1];

  if (current % 2 === 0) {
    current /= 2;
    count++;
  } else if (lastNumber === "1") {
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
