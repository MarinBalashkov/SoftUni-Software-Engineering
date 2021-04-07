function calculatesumOfNumbers(input1, input2) {
    let num1 = Number(input1);
    let num2 = Number(input2);
    if (num1 && num2) {
        let sum = 0;
        for (let i = num1; i <= num2; i++) {
            sum += i;
        }

        console.log(sum);
    }
}

calculatesumOfNumbers('-8', '');