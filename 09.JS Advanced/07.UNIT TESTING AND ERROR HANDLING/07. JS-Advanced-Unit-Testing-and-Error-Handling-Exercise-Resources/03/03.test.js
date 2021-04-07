const {assert } = require('chai');
const lookupChar = require('./03')


describe('charLookup', () => {
    it('', () => {
        assert.isUndefined(lookupChar(1, 1));
        assert.isUndefined(lookupChar('abc', 1.2));
        assert.isUndefined(lookupChar('abc', 'a'));
    })

    it('', () => {
        assert.equal(lookupChar('abv', -1), "Incorrect index");
        assert.equal(lookupChar('abc', 3), "Incorrect index");
    })

    it('', () => {
        assert.equal(lookupChar('abv', 0), "a");
        assert.equal(lookupChar('abc', 2), "c");
    })
})