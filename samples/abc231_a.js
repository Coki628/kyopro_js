const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

// 入力受け取り
const D = Number(lines[0]);

const ans = D / 100;
console.log(ans);
