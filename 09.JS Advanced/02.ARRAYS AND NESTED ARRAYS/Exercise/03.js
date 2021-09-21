/**
 * 
 * @param {[]} arr 
 */

function solve(arr) {
    let initialNumber = 1;
    const result = [];
    for (const command of arr) {
        command === 'add' ? result.push(initialNumber) : result.pop();
        initialNumber++;
    }

    return result.length == 0 ? 'Empty' : result.join("\n");
}

console.log(solve(['add',
    'add',
    'add',
    'add']
));

console.log(solve(['add',
    'add',
    'remove',
    'add',
    'add']
));

console.log(solve(['remove',
    'remove',
    'remove']
));