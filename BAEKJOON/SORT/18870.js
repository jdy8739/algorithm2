let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const duple = input[1].split(' ').map(Number);

const arr = [...new Set(duple)].sort((a, b) => a - b);

const map = new Map();

arr.forEach((el, idx) => map.set(el, idx));

let answer = '';

duple.forEach((el) => answer += map.get(el) + ' ');

console.log(answer);
