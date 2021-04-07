function attachEvents() {
    document.getElementById('submit').addEventListener("click", getWeatherInfo);
}

attachEvents();

async function getWeatherInfo() {
    const location = document.getElementById('location');
    const locationName = location.value;
    const forecastDiv = document.getElementById('forecast');
    const currentDiv = document.getElementById('current');
    const upcomingDiv = document.getElementById('upcoming');

    const weatherSymbols = {
        'Sunny': '&#x2600', // ☀
        'Partly sunny': '&#x26C5', // ⛅
        'Overcast': '&#x2601', // ☁
        'Rain': '&#x2614', // ☂
        'Degrees': '&#176', // °
    }

    const code = await getCode(locationName);

    const todayData = await getTodayData(code);
    const upComingData = await getUpcomingData(code);

    forecastDiv.style.display = 'block';

    const todaySpan =  document.createElement('span');
    todaySpan.innerHTML = weatherSymbols[todayData.forecast.condition];
    todaySpan.classList.add('condition');
    todaySpan.classList.add('symbol');
    currentDiv.appendChild(todaySpan);

    const conditionSpan = e('span', {className: 'condition'})

    const span1 =  document.createElement('span');
    span1.textContent = todayData.name
    span1.classList.add('forecast-data');

    const span2 =  document.createElement('span');
    span2.textContent = `${todayData.forecast.low}/${todayData.forecast.high}`
    span2.classList.add('forecast-data');

    const span3 =  document.createElement('span');
    span3.textContent = todayData.forecast.condition;
    span3.classList.add('forecast-data');

    conditionSpan.appendChild(span1);
    conditionSpan.appendChild(span2);
    conditionSpan.appendChild(span3);
    currentDiv.appendChild(conditionSpan);

    function appendUpcoming(data){
        data.forecast.forEach(d => {
            const span = e('span', {className: 'upcoming'}, [e('span', {className: 'symbol'}, weatherSymbols[d.condition]), e('span', {className: 'forecast-data'}, `${d.low}/${d.high}`), e('span', {className: 'forecast-data'}, d.condition)]);
            upcomingDiv.appendChild(span);
        })
    }

    appendUpcoming(upComingData);


}

async function getCode(locationName) {
    const locationsUrl = `http://localhost:3030/jsonstore/forecaster/locations`;

    const response = await fetch(locationsUrl);
    const data = await response.json();

    return data.find(x => x.name.toLowerCase() == locationName.toLowerCase()).code;
}

async function getTodayData(code) {
    const todayUrl = `http://localhost:3030/jsonstore/forecaster/today/${code}`;

    const todayResponse = await fetch(todayUrl);
    const todayData = await todayResponse.json();

    return todayData;
}

async function getUpcomingData(code) {
    const upcomingUrl = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;

    const upcomingResponse = await fetch(upcomingUrl);
    const data = await upcomingResponse.json();

    return data;
}

function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}