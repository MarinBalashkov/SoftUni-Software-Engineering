function sortArr(arr, criteria) {
    const criterias = {
        asc: (a, b) => a - b,
        dsc: (a, b) => b - a
    }

    return arr.sort(criterias[criteria]);
}

console.log(sortArr([1, 2, 4, 21], 'asc'));