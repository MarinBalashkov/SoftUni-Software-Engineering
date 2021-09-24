function population(townsArray) {
    const towns = {};

    for (const townAsString of townsArray) {
        let [name, population] = townAsString.split(' <-> ').filter(x => x);
        population = Number(population);

        if (towns[name] === undefined) {
            towns[name] = 0;
        }

        towns[name] += population

        /**if (!towns.hasOwnProperty(name)) {
            towns[name] = population
        }**/
    }

    for (const name in towns) {
        console.log(`${name}: ${towns[name]}`);
    }
}

population(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);