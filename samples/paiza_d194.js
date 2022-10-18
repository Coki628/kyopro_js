const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

// 入力受け取り
const N = Number(lines[0]);

const ans = N * 540;
console.log(ans);
