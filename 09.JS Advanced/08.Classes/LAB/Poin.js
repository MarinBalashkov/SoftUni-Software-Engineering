class Point {
    constructor(x, y) {
        this.x = x;
        this._y = y;
    }

    get x(){
        this._x;
    }

    set x(value){
        if (typeof value !== 'number') {
            throw new Error('x-cordinate must be a number !!!');
        }
        this._x = value;
    }

    get y(){
        this._y;
    }

    set y(value){
        if (typeof value !== 'number') {
            throw new Error('y-cordinate must be a number !!!');
        }
        this._y = value
    }

    static distance(a, b) {
        if (a instanceof Point === false || b instanceof Point === false) {
            throw new TypeError('Parameter must be of type Point');
        }

        return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
    }
}


module.exports = Point;

const p1 = new Point(0, 0);
const p2 = new Point(4, 3);

console.log(p1, p2)
console.log(Point.distance(p2, p1));