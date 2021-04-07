import { html, render } from '../node_modules/lit-html/lit-html.js';


const selectTemplate = (list) => html`
    ${list.map(x => html`<option .value=${x._id}>${x.text}</option>`)}
`;

const endpoint = 'http://localhost:3030/jsonstore/advanced/dropdown';
const input = document.getElementById('itemText')

initialize();

async function initialize() {
document.querySelector('form').addEventListener('submit', (ev) => addItem(ev, list));

    const response = await fetch(endpoint);
    const data = await response.json();
    const list = Object.values(data);
    update(list);
}

function update(list) {
    const main = document.getElementById('menu');
    const result = selectTemplate(list);
    render(result, main);
}

async function addItem(event, list) {
    event.preventDefault();

    const item = {
        text: input.value
    };

    const response = await fetch(endpoint, {
        method: 'post', 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(item)
    });
    const result = await response.json();
    list.push(result);

    update(list);
}
