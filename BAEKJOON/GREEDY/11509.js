const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const heightList = input[1].split(" ").map(Number);

const arrows = Array.from({ length: Number(input[0]) }, () => 0);

let answer = 0;

for (const height of heightList) {
  if (arrows[height] > 0) {
    arrows[height] -= 1;
  } else {
    answer += 1;
  }
  arrows[height - 1] += 1;
}

console.log(answer);
