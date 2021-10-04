function deleteByEmail() {
    const email = document.querySelector('input[name="email]').value;

    const rows = Array.from(document.querySelectorAll('tbody tr'))

    let deleted = false;

    for (const row of rows) {
        if (row.children[1] === email) {
            row.parentNode.removeChild(row);
            deleted = true;
            document.getElementById('result').textContent = 'Deleted.'
        }
    }

    if (deleted) {
        document.getElementById('result').textContent = 'Not found.';
    }



}