/**
 * 
 * @param {{}} requirement 
 */
function solve(requirement) {
    const {model, carriage, power, carriage, color, wheelsize} = requirement;

    function getEngine(power) {
        const engines = [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 }
        ];

        return engines.find(x => x.power >= power);
    }
    function getWheels(wheelsize) {
        const roundedSize = Math.floor(wheelsize)
        const size = roundedSize % 2 == 0 ? roundedSize - 1 : roundedSize
        return [size, size, size, size];
    }

    return {
        model,
        engine: getEngine(power),
        carriage: { type: carriage, color },
        wheels: getWheels(wheelsize)
    };
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));

console.log(solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
));