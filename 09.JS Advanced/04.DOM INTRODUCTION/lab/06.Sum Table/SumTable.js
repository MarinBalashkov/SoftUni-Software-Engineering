function sumTable() {
    const nums = document.querySelectorAll('table tr');

    let sum = 0;

    for (let i = 1; i < nums.length - 1; i++) {
        const cols = nums[i].children;
        sum += Number(cols[cols.length - 1].textContent);
    }

    document.getElementById('sum').textContent = sum;


    const rows = Array.from(document.querySelectorAll('table tr')).slice(1, -1);

    document.getElementById('sum').textContent = rows.reduce((sum, row) => {
        return sum + Number(row.lastChild.textContent);
    }, 0)
}