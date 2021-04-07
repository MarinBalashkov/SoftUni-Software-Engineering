import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllItems} from '../api/data.js';

const catalogTemplate = (items) => html``;

const cardTemplate = (item) => html``;

export async function catalogPage(ctx) {

    const items = await getAllItems();

    ctx.render(catalogTemplate(items));
}