function solve(n, k ) {
    const result = [1];

    for (let i = 0; i < n - 1; i++) {
        const lastElements = result.slice(-k);
        result.push(lastElements.reduce((a, b) => a + b))
    }
    return result;
}

console.log(solve(6, 3));
console.log(solve(8, 2));
