function encodeAndDecodeMessages() {
    const areas = document.querySelectorAll('#main textarea');
    const [encodeArea, decodetArea] = areas;
    const buttons = document.querySelectorAll('#main button');
    const [encodeButton, decodeButton] = buttons;

    encodeButton.addEventListener('click', (ev) => {
        const message = [...encodeArea.value].map(x => x.charCodeAt(0) + 1).map(x => String.fromCharCode(x));
        decodetArea.value = message.join('');
        encodeArea.value = '';
    });

    decodeButton.addEventListener('click', (ev) => {
        const message = [...decodetArea.value].map(x => x.charCodeAt(0) - 1).map(x => String.fromCharCode(x));
        encodeArea.value = message.join('');
        decodetArea.value = '';
    });


}