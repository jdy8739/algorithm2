const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

input.shift();

const table = input.map((el) => el.split(' ').map(Number));

table.sort((a, b) => {
    const [aStart, aEnd] = a;
    const [bStart, bEnd] = b;
    
    if (aEnd === bEnd) {
        return aStart - bStart;
    }
    return aEnd - bEnd;
    
});

let answer = 0;
let lastEndTime = 0;

for (let i=0; i<table.length; i++) {
    const startTime = table[i][0];
    
    if (startTime >= lastEndTime) {
        lastEndTime = table[i][1];
        answer++;
    }
}

console.log(answer);