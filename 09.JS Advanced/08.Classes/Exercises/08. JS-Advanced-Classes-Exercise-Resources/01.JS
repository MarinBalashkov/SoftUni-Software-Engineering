class Rectangle{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    set color(value) {
        if (typeof value == 'string' && value[0] === value[0].toUpperCase()) {
            this._color = value;
        }
    }
    
    get color() {
        return this._color;
    }

    calcArea(){
        return this.height * this.width;
    }
}

let rect = new Rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
