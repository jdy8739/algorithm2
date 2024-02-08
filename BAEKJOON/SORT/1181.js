let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const dupleArr = input.slice(1, input.length - 1);

const arr = [...new Set(dupleArr)];

arr.sort((a, b) => {
  if (a.length === b.length) return a < b ? -1 : 1;
  return a.length - b.length;
});

let answer = "";

arr.forEach((el) => (answer += el + "\n"));

console.log(answer);
