let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const arr = input
  .slice(1, input.length - 1)
  .map((el) => el.split(" ").map(Number));

arr.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

let answer = "";

arr.forEach((el) => (answer += el.join(" ") + "\n"));

console.log(answer);
