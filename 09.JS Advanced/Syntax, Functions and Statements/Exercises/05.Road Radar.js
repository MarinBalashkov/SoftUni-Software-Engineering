function getRadar(speed, area) {
    const motorwayLimit = 130;
    const interstateLimit = 90;
    const cityLimit = 50;
    const residentialLimit = 20;

    let result = '';
    let difference = 0;
    let status = '';
    if (area === 'motorway') {
        if (speed <= motorwayLimit) {
            result = `Driving ${speed} km/h in a ${motorwayLimit} zone`;
        }else{
            difference = speed - motorwayLimit;
            status = getStatus(difference);
            result = `The speed is ${difference} km/h faster than the allowed speed of ${motorwayLimit} - ${status}`;
        }
    }else if (area === 'interstate') {
        if (speed <= interstateLimit) {
            result = `Driving ${speed} km/h in a ${interstateLimit} zone`;
        }else{
            difference = speed - interstateLimit;
            status = getStatus(difference);
            result = `The speed is ${difference} km/h faster than the allowed speed of ${interstateLimit} - ${status}`;
        }
    }else if (area === 'city') {
        if (speed <= cityLimit) {
            result = `Driving ${speed} km/h in a ${cityLimit} zone`;
        }else{
            difference = speed - cityLimit;
            status = getStatus(difference);
            result = `The speed is ${difference} km/h faster than the allowed speed of ${cityLimit} - ${status}`;
        }
    }else if (area === 'residential') {
        if (speed <= residentialLimit) {
            result = `Driving ${speed} km/h in a ${residentialLimit} zone`;
        }else{
            difference = speed - residentialLimit;
            status = getStatus(difference);
            result = `The speed is ${difference} km/h faster than the allowed speed of ${residentialLimit} - ${status}`;
        }
    }

    function getStatus(difference) {
        if (difference <= 20) {
            return 'speeding';
        }else if (difference > 20 && difference <= 40) {
            return 'excessive speeding';
        } else {
            return 'reckless driving';
        }
    }

    console.log(result);
}

getRadar(40, 'city');
getRadar(21, 'residential');
getRadar(120, 'interstate');
getRadar(200, 'motorway');