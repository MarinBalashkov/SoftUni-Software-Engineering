/**
 * 
 * @param {[[]]} arr 
 */
function solve(arr) {
    let firstDiagonalStartIndex = 0;
    let secondDiagonalStartIndex = arr.length - 1;
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;


    for (let r = 0; r < arr.length; r++) {
        firstDiagonalSum += arr[r][firstDiagonalStartIndex];
        secondDiagonalSum += arr[r][secondDiagonalStartIndex];
        firstDiagonalStartIndex++;
        secondDiagonalStartIndex--;
        
    }

    return `${firstDiagonalSum} ${secondDiagonalSum}`;
}
console.log(solve([[20, 40],
    [10, 60]]   
   ));
console.log(solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]   
   ));