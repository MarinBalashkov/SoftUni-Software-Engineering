function solve(str1, str2, str3) {
    let sum = 0;
    sum += str1.length;
    sum += str2.length;
    sum += str3.length;

    console.log(sum)
    console.log(Math.floor(sum / 3));;
}

function strlen(...params) {
    let total = params.reduce((a, b) => a + b.length, 0);
    console.log(total);
    console.log(Math.floor(total / params.length));;
}


solve('chocolate', 'ice cream', 'cake');
strlen('pasta', '5', '22.3');