function getTimeToWalk(num1, num2, num3) {
    let steps = Number(num1);
    let footprintInMeters = Number(num2);
    let speedinKmH = Number(num3);

    let resultInSec = 0;
    if (steps, footprintInMeters, speedinKmH) {
        let lengthInMeters = steps * footprintInMeters;
        resultInSec = ((lengthInMeters / 1000) / speedinKmH) * 60 * 60;
        let breaks = Math.floor(lengthInMeters / 500);
        resultInSec += breaks * 60;
    }

    function secondsToHms(d) {
        d = Number(d);
    
        let h = Math.floor(d / 3600);
        let m = Math.floor(d % 3600 / 60);
        let s = Math.ceil(d % 3600 % 60);
    
        return ('0' + h).slice(-2) + ":" + ('0' + m).slice(-2) + ":" + ('0' + s).slice(-2);
    }

    console.log(secondsToHms(resultInSec))

}

getTimeToWalk(4000, 0.60, 5);
getTimeToWalk(2564, 0.70, 5.5);


// function solve(steps, footprint, speedKmH) {
//     const speed = speedKmH * 1000 / 3600;
//     const distance = steps * footprint;

//     const rest = Math.floor(distance / 500) * 60;
//     const time = distance / speed + rest;

//     const hours = Math.floor(time/60/60).toFixed(0).padStart(2, "0");
//     const minutes = Math.floor(time/60).toFixed(0).padStart(2, "0");
//     const seconds = (time%60).toFixed(0).padStart(2, "0");

//     return `${hours}:${minutes}:${seconds}`;
// }

// console.log(solve(4000, 0.60, 5));
// console.log(solve(2564, 0.70, 5.5));

