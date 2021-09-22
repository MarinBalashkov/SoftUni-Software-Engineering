/**
 * 
 * @param {[]} arr 
 */

function solve(arr) {
    let result = [];
    arr.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeComapre(b);
        }

        return a.length - b.length
    });

    return result;
}

console.log(solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
));