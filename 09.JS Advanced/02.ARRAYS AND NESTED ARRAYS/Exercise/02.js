/**
 * 
 * @param {[]} arr 
 * @param {Number} number 
 */

function solve(arr, number) {
    return arr.filter((x, i) => i % number === 0 || i === 0)
}

console.log(solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));

console.log(solve(['dsa',
'asd', 
'test', 
'tset'], 
2
));

console.log(solve(['1', 
'2',
'3', 
'4', 
'5'], 
6
));