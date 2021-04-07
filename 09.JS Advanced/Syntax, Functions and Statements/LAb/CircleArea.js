function calculateCirclearea(radius) {
    
    if (typeof(radius) == 'number') {
        console.log(`${(Math.pow(radius, 2) * Math.PI).toFixed(2)}`);
    } else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof(radius)}.`)
    }
}

calculateCirclearea('name');