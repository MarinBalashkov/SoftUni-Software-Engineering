function calculateFuitPrice(fruit, weight, money) {
    let totalPrice = ((Number(weight) * Number(money)) / 1000).toFixed(2);
    let weightInKg = (Number(weight) / 1000).toFixed(2);

    console.log(`I need $${totalPrice} to buy ${weightInKg} kilograms ${fruit}.`)
}

calculateFuitPrice('orange', 2500, 1.80);
calculateFuitPrice('apple', 1563, 2.35);
