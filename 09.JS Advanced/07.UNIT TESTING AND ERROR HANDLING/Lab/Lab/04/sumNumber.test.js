const {describe} = require('mocha');
const {expect} = require('chai');
const sum = require('./dumNumber');

describe('Sum number', () => {
    it('sum single number', () => {
        expect(sum([1])).to.equal(1);
    })

    it('sum multiple number', () => {
        expect(sum([1, 1])).to.equal(2);
    })

    it('sum different number', () => {
        expect(sum([1, 2, 3])).to.equal(6);
    })
})
