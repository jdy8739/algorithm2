const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [_, distances, prices] = input.map((el) => el.split(" ").map(Number));

prices.pop();

const lowestPrice = Math.min(...prices);

let answer = 0;
let answerFound = false;

for (let i = 0; i < distances.length; i++) {
  const distanceForNext = distances[i];
  const priceOfCurrentCity = prices[i];

  if (priceOfCurrentCity === lowestPrice) {
    answerFound = true;
    answer += priceOfCurrentCity * distanceForNext;
  } else {
    if (answerFound) {
      answer += lowestPrice * distanceForNext;
    } else {
      answer += priceOfCurrentCity * distanceForNext;
    }
  }
}

console.log(answer);
