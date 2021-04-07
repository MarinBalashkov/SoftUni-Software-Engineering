function attachGradientEvents() {
    document.getElementById('gradient').addEventListener('mousemove', OnMove);
    const output = document.getElementById('result');

    function onMove(event) {
        const offsetX = event.offsetX;
        
        const precent = Math.round(offsetX / event.target.clientWidth * 100);

        output.textContent = `${precent}`;
    }
}