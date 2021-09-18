/**
 * 
 * @param {['']} arr 
 * @param {''} flavor1 
 * @param {''} flavor2 
 */
function solve(arr, flavor1, flavor2) {
    const start = arr.indexOf(flavor1);
    const end = arr.indexOf(flavor2);
    return arr.slice(start, end + 1);
}

console.log(solve(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));
console.log(solve(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
));