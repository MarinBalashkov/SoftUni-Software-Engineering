import { html, render } from '../node_modules/lit-html/lit-html.js';
import { styleMap } from '../node_modules/lit-html/directives/style-map.js';
import { cats as catData } from './catSeeder.js';

const liCardTemplate = (cat) => html`
    <li>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn">Show status code</button>
            <div class="status" style=${styleMap(cat.info ? {} : {display: 'none'})} id=${cat.id}>
                <h4>Status Code: ${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li>`;

const container = document.getElementById('allCats');
catData.forEach(x => x.info = false)
update();

function update() {
    const ulTemplate = (data) => html`
        <ul @click=${toggleInfo}>
            ${data.map(x => liCardTemplate(x))}
        </ul>`;

    const result = ulTemplate(catData)

    render(result, container)
};

function toggleInfo(event) {
    if (event.target.classList.contains('showBtn')) { 
        const elementId = event.target.parentNode.querySelector('.status').id;
        const cat = catData.find(x => x.id == elementId);
        cat.info = !cat.info;
        update();
    }
}
