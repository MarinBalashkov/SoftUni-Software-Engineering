/**
 * 
 * @param {[]} table 
 */
function solve(table) {
    const result = [];
    for (let i = 1; i < table.length; i++) {
        const row = table[i].split('|').map(x => x.trim()).filter(x => x);
        const [Town, Latitude, Longitude] = row;
        const latitudeInNumber = Number(Latitude);
        const longitudeInNumber = Number(Longitude);
        const record = {
            Town,
            Latitude: Math.round((latitudeInNumber + Number.EPSILON) * 100) / 100,
            Longitude: Math.round((longitudeInNumber + Number.EPSILON) * 100) / 100
        };

        result.push(record);
    }

    return JSON.stringify(result);
}

console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));


function solve2(input) {
    let[columns, ...table] = input.map(splitLine);

    function isEmptyString(x) {
        return x != "";
    }

    function convertIfNum(x) {
        return isNaN(x) ? x : Number(x)
    }

    function splitLine(input) {
        return input.split('|'). filter(isEmptyString).map(x => x.trim()).map(convertIfNum);
    }

    return JSON.stringify(table.map(entry => {
        return columns.reduce((acc, curr, index) => {
            acc[curr] = entry[index];
            return acc;
        }, {})
    }))
}

console.log(solve2(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));

