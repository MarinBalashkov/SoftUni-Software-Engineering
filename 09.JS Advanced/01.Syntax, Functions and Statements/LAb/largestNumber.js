function getLargestNumber(num1, num2, num3) {
    let result;
    if (!Number.isNaN(Number(num1)) && num1 > num2 && num1 > num3) {
        result =num1;
    } else if(!Number.isNaN(Number(num2)) && num2 > num1 && num2 > num3) {
        result =num2;

    } else if (!Number.isNaN(Number(num2))){
        result =num3;
    } else{
        result = 'Error'
    }

    console.log(`The largest number is ${result}.`);
}

function getLargetsNumberSecondSolution(...params) {
    console.log(`The largest number is ${Math.max(...params)}`);
}

getLargestNumber(5, -3, 16);
getLargetsNumberSecondSolution(-3, -5, -22.5);
