const objects = [
    {name: "a", grade: 1},
    {name: "b", grade: 4},
    {name: "b", grade: 3},
    {name: "b", grade: 7},
    {name: "d", grade: 5},
    {name: "e", grade: 6},
]
objects.sort((a, b) => {
    if (a.name.localeCompare(b.name)) {
        return 1
    }
    if (b.name.localeCompare(a.name)) {
        return -1
    }
    if (a.grade > b.grade) {
        return 1
    }
    if (a.grade < b.grade ) {
        return -1
    }
})

for (const person of objects) {
    console.log(`${person.name}: ${person.grade}`)
}