function solution(inputArray) {
    let counter = 0;
    inputArray.reduce((a, b) => {
        if (a >= b) {
            const diff = a + 1 - b;
            counter += diff;
            return a + 1;
        }
        return b;
    });
    return counter;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test arrayChange

// alternative solution
// function solution(series) {
//     let moves = 0;
//     for (let i = 1; i < series.length; i++) {
//         if (series[i] <= series[i - 1]) {
//             diff = series[i - 1] - series[i] + 1;
//             series[i] += diff;
//             moves += diff;
//         }
//     }
//     return moves;
// }

// alternative solution
// function solution(inputArray) {
//     return inputArray.reduce(function (x, b, i, a) {
//         while (b >= a[i + 1]) {
//             x++;
//             a[i + 1]++;
//         }
//         return x;
//     }, 0);
// }
