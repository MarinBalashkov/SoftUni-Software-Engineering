function rectangle(width, height, color) {
    const obj = {
        width: Number(width),
        height: Number(height),
        color
    };

    obj.calcArea = () => {
        return obj.height * obj.width
    };
    return obj;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
