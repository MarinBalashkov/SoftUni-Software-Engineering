let operators = ['+', '-', '*', '/', '%', '**']

function calculateTwoNumbers(num1, num2, operator) {
    if (operators.includes(operator)) {
        let result = 0;
        switch (operator) {
            case '+': result = num1 + num2; break;
            case '-': result = num1 - num2; break;
            case '*': result = num1 * num2; break;
            case '/': result = num1 / num2; break;
            case '%': result = num1 % num2; break;
            case '**': result = num1 ** num2; break;
        }
        console.log(`${result}`);
    }
}

calculateTwoNumbers(3, 5.5, '*');