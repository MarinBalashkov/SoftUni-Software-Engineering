/**
 * 
 * @param {[[]]} arr 
 */
function solve(arr) {
    let result = Number.MIN_VALUE;
    for (let r = 0; r < arr.length; r++) {
        for (let c = 0; c < arr[r].length; c++) {
            if (Number(arr[r][c]) > result) {
                result = arr[r][c];
            }
        }
    }

    return result;
}

console.log(solve([[20, 50, 10],
    [8, 33, 145]]
   ));
console.log(solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   ));