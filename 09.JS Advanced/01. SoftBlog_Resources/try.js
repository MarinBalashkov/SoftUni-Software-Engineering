const arr = [
    {
        name : 'mamaaaa',
        sor: [1, 2, 3,]
    }, 
    {
        name : 'bobb',
        sor: [1]
    }, 
    {
        name : 'tatata',
        sor: [1, 2]
    }
]
arr.sort((a, b) => a.sor.length - b.sor.length)

console.log(arr);