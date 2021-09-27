function solve(input) {
    const operation = {
        '+': (a, b) => a + b,
        '*': (a, b) => a * b,
        '-': (a, b) => a - b,
        '/': (a, b) => a / b,
    }

    let numbers = [];

    for (const instruction of input) {
        if (Number(instruction)) {
            numbers.push(Number(instruction));
        }
        else{
            const lastNumber = numbers.pop();
            const penultimateNumber = numbers.pop();
            if (!lastNumber || !penultimateNumber) {
                throw new Error('Error: not enough operands!');
            }

            numbers.push(operation[instruction](penultimateNumber, lastNumber))
        }
    }

    if (numbers.length !== 1) {
        throw new Error('Error: too many operands!')
    }

    return numbers[0];

}


try {
    console.log(solve([3,
        4,
        '+']
    ));
    console.log(solve([5,
        3,
        4,
        '*',
        '-']               
    ));
    /*console.log(solve([7,
            33,
            8,
            '-']                  
    ));*/

    console.log(solve(
        [15,
            '/']           
    ));


    

    
} catch (error) {
    console.log(error.message);
}