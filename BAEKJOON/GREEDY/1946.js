const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < input.length; i++) {
  const indexAddOne = i + 1;

  if (input[i].length === 1 && input[indexAddOne].length === 3) {
    const sliced = [...input].slice(
      indexAddOne,
      indexAddOne + Number(input[i])
    );

    const scores = sliced.map((score) => score.split(" ").map(Number));

    const sortedScores = scores.sort((a, b) => a[0] - b[0]);

    let count = 1;

    let minOfSecondScore = sortedScores[0][1];

    for (let j = 0; j < sortedScores.length; j++) {
      const scoreToCompare = sortedScores[j][1];

      if (scoreToCompare < minOfSecondScore) {
        count++;
        minOfSecondScore = scoreToCompare;
      }
    }
    console.log(count);
  }
}
