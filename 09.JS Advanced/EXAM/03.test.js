const { assert } = require('chai');
const numberOperations = require('./03.js');

describe('numberOperations tests', function () {
    describe('powNumber tests', function () {
        it('', function () {
            assert.equal(numberOperations.powNumber(2), 4);
            assert.equal(numberOperations.powNumber(0), 0);
            assert.equal(numberOperations.powNumber(-2), 4);
        });
    });
    describe('numberChecker tests', function () {
        it('is not number', function () {
            assert.throw(() => { numberOperations.numberChecker(NaN) }, 'The input is not a number!');

            assert.throw(() => { numberOperations.numberChecker('vvv') }, 'The input is not a number!');

            assert.throw(() => { numberOperations.numberChecker(undefined) }, 'The input is not a number!');

            assert.equal(numberOperations.numberChecker(20), 'The number is lower than 100!');
            assert.equal(numberOperations.numberChecker(20.3), 'The number is lower than 100!');

            assert.equal(numberOperations.numberChecker(0), 'The number is lower than 100!');

            assert.equal(numberOperations.numberChecker(-20), 'The number is lower than 100!');

            assert.equal(numberOperations.numberChecker(-20.20), 'The number is lower than 100!');

            assert.equal(numberOperations.numberChecker('20'), 'The number is lower than 100!');

            assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!');

            assert.equal(numberOperations.numberChecker(120), 'The number is greater or equal to 100!');

            assert.equal(numberOperations.numberChecker('120'), 'The number is greater or equal to 100!');
            
        });
    });

    describe('sumArrays tests', function () {
        it('', function () {
            assert.deepEqual(numberOperations.sumArrays([1, 2, 3], [1, 2, 3]), [2, 4, 6 ]);

            assert.deepEqual(numberOperations.sumArrays([1], [1]), [2]);

            assert.deepEqual(numberOperations.sumArrays([1, 2], [1, 2, 3]), [2, 4, 3 ]);

            assert.deepEqual(numberOperations.sumArrays([1, 2, 3], [1, 2]), [2, 4, 3 ]);

            assert.deepEqual(numberOperations.sumArrays([], [1, 2, 3]), [1, 2, 3]);
            assert.deepEqual(numberOperations.sumArrays([1, 2, 3], []), [1, 2, 3 ]);

        });
    });
})