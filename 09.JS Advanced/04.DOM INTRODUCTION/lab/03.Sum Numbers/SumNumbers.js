function calc() {
    // TODO: sum = num1 + num2
    const firstNum = Number(document.querySelector('#num1').value);
    const secondNumber = Number(document.querySelector('#num2').value);

    document.querySelector('#sum').value = firstNum + secondNumber;
}
