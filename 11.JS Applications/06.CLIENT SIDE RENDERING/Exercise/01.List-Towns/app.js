import {html, render} from '../node_modules/lit-html/lit-html.js';


const listTempalte = (data) => html `
<ul>
    ${data.map(x => html`<li>${x}</li>`)}
</ul>`; 

document.getElementById('btnLoadTowns').addEventListener('click', updateList);

function updateList(event) {
    event.preventDefault();

    const towns = document.getElementById('towns').value.split(',').map(x => x.trim());
    const root = document.getElementById('root');

    const result = listTempalte(towns);

    render(result, root);
}

