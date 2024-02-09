let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const arr = input[1].split(' ').map(Number);

arr.sort((a, b) => a - b);

let answer = 0;

arr.reduce((a, b) => {
    const add = a + b;
    answer += add;
    return add;
}, 0);

console.log(answer);