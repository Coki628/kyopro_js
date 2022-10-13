const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

// 入力受け取り
const N = Number(lines[0]);

if (1 <= N && N <= 125) {
    console.log(4);
} else if (126 <= N && N <= 211) {
    console.log(6);
} else {
    console.log(8);
}
