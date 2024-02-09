let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let remains = Number(input[0].split(' ')[1]);

const tmp = input.slice(1, input.length - 1);

const units = tmp.map(Number).reverse();

let count = 0;

for (let i=0; i<units.length; i++) {
    const unit = units[i];
    
    const div = Math.floor(remains / unit);
    
    count += div;
    remains %= unit;
    
    if (remains <= 0) break;
}

console.log(count);