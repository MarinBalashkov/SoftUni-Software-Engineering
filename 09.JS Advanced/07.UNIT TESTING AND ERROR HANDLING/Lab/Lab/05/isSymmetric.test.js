const { expect } = require('chai');
const isSymmetric = require('./isSymmetric');

describe('isSymmetric', () => {
    it('return tru for valid symmetric input', () => {
        expect(isSymmetric([1,1])).to.true;
    })
})