const { assert } = require('chai');
const dealership = require('./03.js');

describe('dealership tests', function () {
    describe('newCarCost tests', function () {
        it('without discount', function () {
            assert.equal(dealership.newCarCost('Audi', 20000), 20000);
        });

        it('without eny discount', function () {
            assert.equal(dealership.newCarCost('', 20000), 20000);
        });

        it('invalid car param', function () {
            assert.equal(dealership.newCarCost(10, 20000), 20000);
        });

        it('with discount', function () {
            assert.equal(dealership.newCarCost('Audi A4 B8', 20000), 5000);
        });
    });

    describe('carEquipment tests', function () {
        it('return correct extras', function () {
            assert.deepEqual(dealership.carEquipment(['a', 'b', 'c', 'd'], [0, 1]), ['a', 'b']);
        });

        it('return correct extras', function () {
            assert.deepEqual(dealership.carEquipment(['a', 'b', 'c', 'd'], [0, 1]), ['a', 'b']);
        });

        it('input empty index array', function () {
            assert.deepEqual(dealership.carEquipment(['a', 'b', 'c', 'd'], []), []);
        });

        it('input empty extra array', function () {
            assert.deepEqual(dealership.carEquipment([], []), []);
        });

        it('input without extra parameter', function () {
            assert.deepEqual(dealership.carEquipment('', [0, 2]), [undefined, undefined]);
        });

        it('input without arr extra parameter', function () {
            assert.deepEqual(dealership.carEquipment([], [0, 2]), [undefined, undefined]);
        });

    });

    describe('euroCategory tests', function () {
        it('categori les than 4', function () {
            assert.deepEqual(dealership.euroCategory(1), 'Your euro category is low, so there is no discount from the final price!');
        });

        it('categori more than 4', function () {
            assert.deepEqual(dealership.euroCategory(6), `We have added 5% discount to the final price: 14250.`);
        });

        it('categori equal to 4', function () {
            assert.deepEqual(dealership.euroCategory(4), `We have added 5% discount to the final price: 14250.`);
        });


    });

})