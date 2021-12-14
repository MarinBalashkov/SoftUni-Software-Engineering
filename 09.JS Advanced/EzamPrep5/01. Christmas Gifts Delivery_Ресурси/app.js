function solution() {
    const input = document.querySelector('.card input');
    const addButton = document.querySelector('.card button');

    const listOfGifts = document.querySelectorAll('.card ul')[0];
    const sentGifts = document.querySelectorAll('.card ul')[1];
    const discardedGifts = document.querySelectorAll('.card ul')[2];

    addButton.addEventListener('click', (ev) => {
        ev.preventDefault();
        if (!input.value) {
            return;
        }

        const liElement = document.createElement('li');
        liElement.className = 'gift';
        liElement.textContent = input.value;

        const sendBTN = document.createElement('button');
        sendBTN.textContent = 'Send';
        sendBTN.id = 'sendButton';
        liElement.appendChild(sendBTN);

        const discardBTN = document.createElement('button');
        discardBTN.textContent = 'Discard';
        discardBTN.id = 'discardButton';
        liElement.appendChild(discardBTN);

        listOfGifts.appendChild(liElement);

        Array.from(listOfGifts.children)
                .sort((a, b) => a.textContent.localeCompare(b.textContent))
                .forEach(x => listOfGifts.appendChild(x));
        input.value = '';

        sendBTN.addEventListener('click', (ev) => {
            sentGifts.appendChild(liElement);
            sendBTN.remove();
            discardBTN.remove();
        });

        
        discardBTN.addEventListener('click', (ev) => {
            discardedGifts.appendChild(liElement);
            sendBTN.remove();
            discardBTN.remove();
        });
    });
}