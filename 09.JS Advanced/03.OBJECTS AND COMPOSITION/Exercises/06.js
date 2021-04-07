function solve(products) {
    const result = {};
    for (const product of products) {
        let [name, price] = product.split(' : ');
        if (result[name[0]]) {
            result[name[0]].push({ name, price })
        } else {
            result[name[0]] = [{ name, price }]
        }
    }


    //let {} = result;
    /*return Object.entries(result).sort(([k1, v1], [k2, v2]) => k1.localeCompare(k2)).reduce((a, [k, v]) => {
        return a + `${k}` + '\n' + v.reduce((acc, c) => { return acc + `  ${c.name}: ${c.price}` + '\n'}, '') 
    }, '')*/

    let final = [];

    // for (const key of [...Object.entries(result)].sort(([a,b], [d,c]) => a.localeCompare(d))) {
    //     final += key[0] + '\n';
    //     for (const product of result[key[1]]) {
    //         final += `  ${product.name}: ${product.price}` + '\n';
    //     }
    // }
    const finalresult = [];
    Object.entries(result).sort((a, b) => a[0].localeCompare(b[0])).forEach(entry => {
        let values = entry[1].sort((a,b) =>(a.name).localeCompare(b.name))
        .map(product => `  ${product.name}: ${product.price}`)
        .join('\n')

        let string = `${entry[0]}\n${values}`;
        finalresult.push(string);
        
    });

    return finalresult.join('\n');
}

console.log(solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
));

