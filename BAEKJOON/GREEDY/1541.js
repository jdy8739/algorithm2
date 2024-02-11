let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const splitedByMinus = input[0].split("-");

const splitedByAdd = splitedByMinus.map((el) => el.split("+"));

const elements = splitedByAdd.map((el) => {
  const sum = el.reduce((a, b) => Number(a) + Number(b), 0);
  return [sum];
});

const flatted = elements.flat();

let answer = flatted[0];

for (let i = 1; i < flatted.length; i++) {
  answer -= flatted[i];
}

console.log(answer);
