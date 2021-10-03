function generateReport() {
    const rows = Array.from(document.querySelectorAll('table tbody tr'));
    const headRow = Array.from(document.querySelectorAll('thead tr th input'));
    const result = rows.map(row => {
        return headRow.reduce((acc, curr, index) => {
            if (curr.checked === true) {
                chekBoxName = curr.name
                acc[chekBoxName] = row.children[index].textContent;
            }
            return acc;
        }, {})
    })

    document.querySelector('#output').value = JSON.stringify(result);
}