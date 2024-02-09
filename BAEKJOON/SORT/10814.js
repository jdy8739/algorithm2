let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const arr = input.slice(1, input.length - 1).map((el) => {
    const [age, name] = el.split(' ');
    return [Number(age), name];
});

arr.sort((a, b) => a[0] - b[0]);

let answer = '';

arr.forEach((el) => answer += `${el[0]} ${el[1]}` + '\n');

console.log(answer);