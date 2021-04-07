function polulation(townsArray) {
    const towns = {};

    for (const townAsString of townsArray) {
        let token = townAsString.split(' <-> ').filter(x => x);
        //let[name, population] = token;
        let name = token[0];
        let population = Number(token[1]);

        if (towns[name] !== undefined) {
            towns[name] += population;
        }

        towns[name] = population

        /**if (!towns.hasOwnProperty(name)) {
            towns[name] = population
        }**/
    }

    for (const name in towns) {
        console.log(`${name}: ${towns[name]}`);
    }

}