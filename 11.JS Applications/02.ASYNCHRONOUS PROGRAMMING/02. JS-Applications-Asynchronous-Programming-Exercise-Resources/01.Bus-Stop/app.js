function getInfo() {
    const stopid = document.querySelector('#stopId').value;
    const stopNameDiv = document.querySelector('#stopName');
    const UlElement = document.querySelector('#buses');
    UlElement.innerHTML = '';
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopid}`;

    fetch(url)
        .then(response => {
            if (response.status == 404) {
                throw new Error('Error');
            }
            return response.json();
        })
        .then(data => {
            stopNameDiv.textContent = data.name;
            Object.entries(data.buses).forEach(busInfo => {
                const busId = busInfo[0];
                const time = busInfo[0];
                const liElement = document.createElement('li');
                liElement.textContent = `Bus ${busId} arrives in ${time} minutes`;
                UlElement.appendChild(liElement);
            })
            stopid.value = '';
        })
        .catch(error => {
            stopNameDiv.textContent = 'Error';
        })
}