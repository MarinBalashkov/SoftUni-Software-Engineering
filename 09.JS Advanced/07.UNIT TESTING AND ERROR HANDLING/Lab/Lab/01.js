function subSum(arr, start, end) {
    if (Array.isArray(arr) === false) {
        return NaN;
    }

    if (start < 0) {
        start = 0;
    }

    if(end > arr.length - 1){
        end = arr.length - 1
    }


    return arr.slice(start, end + 1).reduce((a, c) => a + Number(c), 0)
}