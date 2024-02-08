let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let targetIndex = Number(input[0].split(" ")[1]);

let arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b);

console.log(arr[targetIndex - 1]);
