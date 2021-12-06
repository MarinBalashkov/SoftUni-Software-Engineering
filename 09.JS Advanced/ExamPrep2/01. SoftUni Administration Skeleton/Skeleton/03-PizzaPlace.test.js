const { assert } = require('chai');
const pizzUni = require('./03-PizzaPlace.js');

describe('pizzUni tests', function () {
    describe('makeAnOrder tests', function () {
        it('without orderedPizza property', function () {
            assert.throw(() => {pizzUni.makeAnOrder({orderedPizza: '', orderedDrink: 'the name of the drink'})}, 'You must order at least 1 Pizza to finish the order.');
            assert.throw(() => {pizzUni.makeAnOrder({orderedPizza: undefined, orderedDrink: 'the name of the drink'})}, 'You must order at least 1 Pizza to finish the order.');
            assert.throw(() => {pizzUni.makeAnOrder({})}, 'You must order at least 1 Pizza to finish the order.');
        });

        it('without orderedDrink property', function () {
            assert.equal(pizzUni.makeAnOrder({orderedPizza: 'Peperone', orderedDrink: ''}), `You just ordered Peperone`);
            assert.equal(pizzUni.makeAnOrder({orderedPizza: 'Peperone', orderedDrink: undefined}), `You just ordered Peperone`);
            assert.equal(pizzUni.makeAnOrder({orderedPizza: 'Peperone'}), `You just ordered Peperone`);
        });

        it('without correct properties', function () {
            assert.equal(pizzUni.makeAnOrder({orderedPizza: 'Peperone', orderedDrink: 'Lemonade'}), `You just ordered Peperone and Lemonade.`);
            assert.equal(pizzUni.makeAnOrder({orderedPizza: 'Fourmage', orderedDrink: 'cola'}), `You just ordered Fourmage and cola.`);
        });
    });


    describe('getRemainingWork tests', function () {
        it('all orderrs are ready', function () {
            assert.equal(pizzUni.getRemainingWork([{pizzaName: 'Peperone', status: 'ready'}, {pizzaName: 'Margarita', status: 'ready'}]), 'All orders are complete!');

            assert.equal(pizzUni.getRemainingWork([{pizzaName: 'Peperone', status: 'ready'}]), 'All orders are complete!');
        });

        it('preparing piza', function () {
            assert.equal(pizzUni.getRemainingWork([{pizzaName: 'Peperone', status: 'preparing'}, {pizzaName: 'Margarita', status: 'preparing'}]), 'The following pizzas are still preparing: Peperone, Margarita.');

            assert.equal(pizzUni.getRemainingWork([{pizzaName: 'Peperone', status: 'preparing'}, {pizzaName: 'Margarita', status: 'ready'}]), 'The following pizzas are still preparing: Peperone.');

            assert.equal(pizzUni.getRemainingWork([{pizzaName: 'Peperone', status: 'ready'}, {pizzaName: 'Margarita', status: 'preparing'}]), 'The following pizzas are still preparing: Margarita.');

            assert.equal(pizzUni.getRemainingWork([{pizzaName: 'Margarita', status: 'preparing'}]), 'The following pizzas are still preparing: Margarita.');
            

        });
    });


    describe('orderType tests', function () {
        it('Carry Out order type', function () {
            assert.equal(pizzUni.orderType(100, 'Carry Out'), 90);
            assert.equal(pizzUni.orderType(0, 'Carry Out'), 0);
            assert.equal(pizzUni.orderType(-10, 'Carry Out'), -9);
            assert.equal(pizzUni.orderType(101.50, 'Carry Out'), 91.35);
            assert.equal(pizzUni.orderType(-101.50, 'Carry Out'), -91.35);
        });

        it('Delivery order type', function () {
            assert.equal(pizzUni.orderType(100, 'Delivery'), 100);
            assert.equal(pizzUni.orderType(0, 'Delivery'), 0);
            assert.equal(pizzUni.orderType(-10, 'Delivery'), -10);
            assert.equal(pizzUni.orderType(101.50, 'Delivery'), 101.50);
            assert.equal(pizzUni.orderType(-101.50, 'Delivery'), -101.50);
        });

    });
})