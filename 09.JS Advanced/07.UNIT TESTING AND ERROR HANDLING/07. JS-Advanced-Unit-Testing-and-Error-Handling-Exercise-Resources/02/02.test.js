const { expect, assert } = require('chai');
const isOddOrEven = require('./02')

describe('tintirimintiri', () => {
    it('alkjdlkja', () => {
        expect(isOddOrEven('aa')).to.equal('even');
    })

    it('', () => {
        assert.isUndefined(isOddOrEven(1));
    })

    it('', () => {
        assert.equal(isOddOrEven('aa'), 'even');
        assert.equal(isOddOrEven('aann'), 'even');
        assert.equal(isOddOrEven('aannnn'), 'even');

    })

    it('', () => {
        assert.equal(isOddOrEven('a'), 'odd');
    })
})