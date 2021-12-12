const { assert, expect } = require('chai');
const testNumbers = require('./testNumbers.js');

describe('testNumbers tests', () => {
    describe('sumNumbers tests', () => {
        it('', () => {
            assert.isUndefined(testNumbers.sumNumbers('a', 3));
            assert.isUndefined(testNumbers.sumNumbers(2, 'a'));
            assert.isUndefined(testNumbers.sumNumbers('a', 'b'));
            assert.isUndefined(testNumbers.sumNumbers(undefined, 3));
            assert.isUndefined(testNumbers.sumNumbers(2, undefined));
            assert.isUndefined(testNumbers.sumNumbers([], 3));
            assert.isUndefined(testNumbers.sumNumbers({}, 3));
        });

        it('', () => {
            assert.equal(testNumbers.sumNumbers(1, 1), 2);
            assert.equal(testNumbers.sumNumbers(1.2, 1.3), 2.5);
            assert.equal(testNumbers.sumNumbers(0, 1), 1);
            assert.equal(testNumbers.sumNumbers(1, 0), 1);
            assert.equal(testNumbers.sumNumbers(-1, -3), -4);
            assert.equal(testNumbers.sumNumbers(1.222, 1.333), 2.55);
        });
    });
    

    describe('numberChecker tests', () => {
        it('', () => {
            assert.throws(() => testNumbers.numberChecker('a'), 'The input is not a number!');
            assert.throws(() => testNumbers.numberChecker(undefined), 'The input is not a number!');
            assert.throws(() => testNumbers.numberChecker('asdasa'), 'The input is not a number!');
            assert.throws(() => testNumbers.numberChecker({}), 'The input is not a number!');
        });

        it('', () => {
            assert.equal(testNumbers.numberChecker(2), 'The number is even!');
            assert.equal(testNumbers.numberChecker(1), 'The number is odd!');
            assert.equal(testNumbers.numberChecker(1.22), 'The number is odd!');

        });
    });

    describe('averageSumArray tests', () => {
        it('', () => {
            assert.equal(testNumbers.averageSumArray([1, 1]), 1);
            assert.equal(testNumbers.averageSumArray([2, 2, 2]), 2);
            assert.equal(testNumbers.averageSumArray([1.5, 1.5]), 1.5);


        });
    });
});