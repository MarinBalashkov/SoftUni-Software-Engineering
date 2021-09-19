/**
 * 
 * @param {[[]]} arr 
 */
function solve(arr) {
    let count = 0;
    for (let r = 0; r < arr.length - 1; r++) {
        for (let c = 0; c < arr[r].length; c++) {
            if (arr[r][c] === arr[r + 1][c] || arr[r][c] === arr[r][c + 1]) {
                count++;
            }
            if (r === arr.length - 2 && arr[r + 1][c] === arr[r + 1][c + 1]) {
                count++;
            }
        }
    }

    return count;
}
console.log(solve([
[2, 2, 5, 7, 4],
[4, 0, 5, 3, 4],
[2, 5, 5, 4, 2]]
));