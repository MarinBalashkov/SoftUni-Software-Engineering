const { assert, expect } = require('chai');
const mathEnforcer = require('./04')


describe('mathEnforcer', () => {
    describe('add', () => {
        it('is not number', () => {
            assert.isUndefined(mathEnforcer.addFive('a'));
            assert.isUndefined(mathEnforcer.addFive(undefined));
        })

        it('is not number', () => {
            assert.equal(mathEnforcer.addFive(0), 5);
            assert.equal(mathEnforcer.addFive(-5), 0);
            assert.equal(mathEnforcer.addFive(1.2), 6.2);
            assert.equal(mathEnforcer.addFive(1), 6);

        })
    })

    describe('SUBTRACTS', () => {
        it('is not number', () => {
            expect(mathEnforcer.subtractTen('a')).to.be.undefined;
            expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
            
        })

        it('is not number', () => {
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
            expect(mathEnforcer.subtractTen(10.2)).closeTo(-0.2, -0.1);
            expect(mathEnforcer.subtractTen(1)).to.equal(-9);

        })
    })

})