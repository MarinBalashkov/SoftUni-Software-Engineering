/**
 * 
 * @param {[]]} arr 
 */

function solve(arr) {
    const result = [];
    const rara;

    for (let i = 0; i < arr.length; i += 2) {
        result[result.length] = arr[i];
    }

    return result.join(' ');
}

console.log(solve(['20', '30', '40', '50', '60']));