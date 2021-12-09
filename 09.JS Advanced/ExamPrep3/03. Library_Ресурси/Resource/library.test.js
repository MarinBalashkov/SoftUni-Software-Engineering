const { assert, expect } = require('chai');
const library = require('./library.js');

describe('library tests', () => {
    describe('calcPriceOfBook tests', () => {
        it('work correctly with standart price 20', () => {
            assert.equal(library.calcPriceOfBook('Armagedon', 1981), 'Price of Armagedon is 20.00');
            assert.equal(library.calcPriceOfBook('Armagedon', 2030), 'Price of Armagedon is 20.00');
        });

        it('throw error with epmpty name', () => {
            assert.throws((() => library.calcPriceOfBook(undefined, 2000)), 'Invalid input');
        });

        it('throw error with epmpty name', () => {
            assert.throws((() => library.calcPriceOfBook(2, 2000)), 'Invalid input');
        });

        it('throw error with epmpty name', () => {
            assert.throws((() => library.calcPriceOfBook(2.3, 2000)), 'Invalid input');
        });

        it('throw error with epmpty name', () => {
            assert.throws((() => library.calcPriceOfBook('Armagedon', 20.5)), 'Invalid input');
        });

        it('throw error with epmpty name', () => {
            assert.equal(library.calcPriceOfBook('Armagedon', 1980), 'Price of Armagedon is 10.00');
        });

        it('throw error with epmpty name', () => {
            assert.equal(library.calcPriceOfBook('Armagedon', 1950), 'Price of Armagedon is 10.00');
        });
    });

    describe('findBook tests', () => {
        it('', () => {
            assert.equal(library.findBook(['a', 'b', 'c'], 'a'), 'We found the book you want.');
            assert.equal(library.findBook(['a', 'b', 'c'], 'c'), 'We found the book you want.');
            assert.equal(library.findBook(['a', 'b', 'c'], 'b'), 'We found the book you want.');

        });

        it('', () => {
            assert.throws((() => library.findBook([], 'a')), 'No books currently available');
        });

        it('', () => {
            assert.equal(library.findBook(['a', 'b', 'c'], ''), 'The book you are looking for is not here!');
            assert.equal(library.findBook(['a', 'b', 'c'], 'f'), 'The book you are looking for is not here!');
            assert.equal(library.findBook(['a', 'b', 'c'], 2), 'The book you are looking for is not here!');

        });
    });


    describe('arrangeTheBooks tests', () => {
        it('', () => {
            assert.equal(library.arrangeTheBooks(40), 'Great job, the books are arranged.');
            assert.equal(library.arrangeTheBooks(0), 'Great job, the books are arranged.');
            assert.equal(library.arrangeTheBooks(10), 'Great job, the books are arranged.');
            assert.equal(library.arrangeTheBooks(20), 'Great job, the books are arranged.');

        });

        it('', () => {
            assert.throws((() => library.arrangeTheBooks(-1)), 'Invalid input');
            assert.throws((() => library.arrangeTheBooks(-1.2)), 'Invalid input');
            assert.throws((() => library.arrangeTheBooks(5.3)), 'Invalid input');

        });

        it('', () => {
            assert.equal(library.arrangeTheBooks(41), 'Insufficient space, more shelves need to be purchased.');
            assert.equal(library.arrangeTheBooks(100), 'Insufficient space, more shelves need to be purchased.');
            assert.equal(library.arrangeTheBooks(1000), 'Insufficient space, more shelves need to be purchased.');
        });
    });
    
});