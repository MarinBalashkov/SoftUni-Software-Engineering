function cookingByNumbers(...params) {
    let arrInput = [...params];
    let number = Number(arrInput[0]);
    for (let i = 1; i < arrInput.length; i++) {
        const operation = arrInput[i];
        
        switch (operation) {
            case 'chop': number /= 2; break;
            case 'dice': number = Math.sqrt(number); break;
            case 'spice': number += 1; break;
            case 'bake': number *= 3; break;
            case 'fillet': number = number - ((number * 20) / 100); break;
        }
        console.log(number);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
