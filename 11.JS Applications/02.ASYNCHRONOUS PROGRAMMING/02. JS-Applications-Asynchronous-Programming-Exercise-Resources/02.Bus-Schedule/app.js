function solve() {
    const infoSpan = document.querySelector('.info');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    let nextStopId = `depot`;
    let stopName = '';

    async function depart() {
        const url = `http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`;
        try {
            const response = await fetch(url);
            const stop = await response.json();

            stopName = stop.name;
            if (stop.next == 'depot' || response.status == 404) {
                throw new Error('Error');
            }
            
            infoSpan.textContent = `Next stop ${stopName}`;
            departBtn.setAttribute('disabled', true)
            arriveBtn.removeAttribute('disabled');
            
            nextStopId = stop.next;
        } catch (error) {
            infoSpan.textContent = `Error`;
            departBtn.setAttribute('disabled', true)
            arriveBtn.setAttribute('disabled', true)
        }
    }

    function arrive() {
        infoSpan.textContent = `Arriving at ${stopName}`;
        arriveBtn.setAttribute('disabled', true)
        departBtn.removeAttribute('disabled');
    }

    return {
        depart,
        arrive
    };
}

let result = solve();