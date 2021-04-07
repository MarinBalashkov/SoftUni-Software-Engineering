function attachEventsListeners() {
    const inputDistance = document.getElementById('inputDistance');
    const outputDistance = document.getElementById('outputDistance');
    const inputUnits = document.getElementById('inputUnits');
    const outputUnits = document.getElementById('outputUnits');

    const convInMeter = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    }

    document.getElementById('convert').addEventListener('click', (ev) => {
        const inputDistanceInMeters = Number(inputDistance.value) * convInMeter[inputUnits.value];
        const converted = inputDistanceInMeters / convInMeter[outputUnits.value];

        outputDistance.value = converted;
    })
}