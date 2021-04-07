/**
 * 
 * @param {[] worker 
 */
function solve(tokens) {
    const result = [];
    for (const token of tokens) {
        let [name, level, items] = token.split(' / ').filter(x => x);
        level = Number(level);
        items ? items = items.split(', ').filter(x => x) : items = [];
        result.push({name, level, items});
    }

    return JSON.stringify(result);
}

console.log(solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
));