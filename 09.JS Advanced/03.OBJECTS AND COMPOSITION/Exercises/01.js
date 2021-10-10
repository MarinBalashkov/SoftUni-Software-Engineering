function solve(arr) {
    const result = {};
    for (let i = 0; i < arr.length; i += 2) {
        let name = arr[i];
        let calories = Number(arr[i + 1]);
        result[name] = calories;
    }

    return result
}


console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));