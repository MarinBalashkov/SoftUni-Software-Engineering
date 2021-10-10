/**
 * 
 * @param {[]} worker 
 */


function solve(tokens) {
    const log = {};
    for (const info of tokens) {
        let [town, product, price] = info.split(' | ').filter(x => x);
        if (log[product]) {
            log[product] = log[product].price <= Number(price) ? log[product] : { town, price: Number(price) };
        } else {
            log[product] = { town, price: Number(price) };
        }

    }
    // return [...Object.entries(result)].reduce((a, [k, v]) => {
    //     const smollestpriceInTown = v.sort((a, b) => a.price - b.price);
    //     return a + `${k} -> ${smollestpriceInTown[0].price} (${smollestpriceInTown[0].town})` + '\n'
    // }, '')

    let result = [];
    for (const product in log) {
        result.push(`${product} -> ${log[product].price} (${log[product].town})`)
    }

    return result.join()
}

console.log(solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
));