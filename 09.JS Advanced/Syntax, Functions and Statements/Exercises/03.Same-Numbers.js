/*function checkSameNumbers(input) {
    if (!typeof(input)== 'number') {
        console.log("false")
    }else{
        let sum = 0;
        let result = 'true';
        let number = Number(input);
        let lastNumber;
        while (number > 0) {
            lastNumber = number % 10;
            sum += lastNumber;
            number = Math.floor(number / 10);
            if (number <= 0) {
                continue;
            }
            if (lastNumber != number % 10) {
                result = 'false';
                
            }
        }
        console.log(result);
        console.log(sum);
    }
}

checkSameNumbers(1234);*/

function solve(number) {
    const string = number.toString();
    let isSame = true;
    let sum = 0;
    for (let i = 0; i < string.length; i++) {
        let current = Number(string[i]);
        let next = string[i + 1];
        if (string[i] !== string[i + 1] && next !== undefined) {
            isSame = false;
        }

        sum += current;
    }
    return `${isSame}\n${sum}`;
}

console.log(solve(1234));