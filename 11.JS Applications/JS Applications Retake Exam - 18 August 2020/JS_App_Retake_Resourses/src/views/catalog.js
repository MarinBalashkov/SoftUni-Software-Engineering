import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllItems} from '../api/data.js';

const catalogTemplate = (items) => html`
<div class="shoes">
${items.length == 0 ? html`<p>No shoes to display. Be the first to create a new ofer</p>` : items.map(cardTemplate)}
</div>`;

const cardTemplate = (item) => html`
    <div class="shoe">
        <img src=${item.imageUrl}>
        <h3>${item.brand} ${item.name}</h3>
        <a href="/details/${item._id}">Buy it for $${item.price}</a>
    </div>`;

export async function catalogPage(ctx) {

    const items = await getAllItems();  

    ctx.render(catalogTemplate(items));
}