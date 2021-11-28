(function solve() {
    Array.prototype.last = () => {
        return this[this.length - 1];
    }

    Array.prototype.skip = (n) => {
        let result = [];
        for (let i = n; i < this.length; i++) {
            result.push(this[i]);
        }
        return result;
    }

    Array.prototype.take = (n) => {
        let result = [];
        for (let i = 0; i < n; i++) {
            result.push(this[i]);
        }
        return result;
    };
    Array.prototype.sum = () => {
        let sum = this.reduce((a, c) => {
            return a + c;
        }, 0)
        
        return sum;
    }

})();