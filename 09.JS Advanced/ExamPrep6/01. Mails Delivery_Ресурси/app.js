function solve() {
    const recipientName = document.querySelector('#recipientName').value;
    const title = document.querySelector('#title').value;
    const message = document.querySelector('#message').value;
    const add = document.querySelector('#add');
    const reset = document.querySelector('#reset');
    const list = document.querySelector('#list');

    add.addEventListener('click', (ev) => {
        ev.preventDefault();
        if (!recipientName || !title || !message) {
            return;
        }

        
    });
}
solve()