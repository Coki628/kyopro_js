const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

// 入力受け取り
const [a, b, c] = lines[0].split(' ').map((num) => Number(num));

// (7-a) + (7-b) + (7-c)
const ans = 7*3 - a - b - c;
console.log(ans);
