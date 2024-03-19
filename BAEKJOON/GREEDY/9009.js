const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

input.shift();

const numbers = input.map(Number);

const arrays = numbers.map((number) => {
  const array = [0, 1];
  let lastNumber = array[array.length - 1];
  while (lastNumber <= number) {
    array.push(lastNumber);

    const firstToLast = array[array.length - 1];
    const secondToLast = array[array.length - 2];

    lastNumber = firstToLast + secondToLast;
  }
  return array.reverse();
});

const numbersString = arrays.map((array, index) => {
  const targets = [];
  const number = numbers[index];

  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    const el = array[i];
    const added = sum + el;
    if (added > number) {
      continue;
    } else if (added <= number) {
      targets.push(el);
      sum += el;
    } else if (sum > number) {
      break;
    }
  }
  targets.pop();
  targets.reverse();

  return targets.join(" ");
});

const answer = numbersString.join("\n");

console.log(answer);
