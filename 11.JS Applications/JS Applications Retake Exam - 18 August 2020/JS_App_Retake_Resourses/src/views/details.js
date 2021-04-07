import { html } from '../../node_modules/lit-html/lit-html.js';
import { getItemById, deleteItemById} from '../api/data.js';

const detailsTemplate = (item, onDelete, isOwner, isBought) => html`
<div class="offer-details">
    <h1>Under Armour HOVR</h1>
    <div class="info">
        <img src=${item.imageUrl} alt="">
        <div class="description">${item.description}
            <br>
            <br>
            <p class="price">$${item.price}</p>
        </div>
    </div>
    <div class="actions">

        ${isOwner ? html`<a href="/edit/${item._id}">Edit</a>
        <a @click=${onDelete} href="javascript:void(0)">Delete</a>` : ''}

        ${isBought ? html`<span>You bought it</span>` : html`<a href="/buy/${item._id}">Buy</a>`}
    </div>
</div>`;

export async function detailsPage(ctx) {
    const item = await getItemById(ctx.params.id);
    const user = ctx.user;
    const isOwner = user && user._id == item._ownerId;
    const isBought = item.buyers.includes(user._id);
    ctx.render(detailsTemplate(item, onDelete, isOwner, isBought));

    async function onDelete(event) {
        event.preventDefault();

        const confirmed = confirm('Are you sure you want to dellete this item !!!');
        if (confirmed) {
            await deleteItemById(ctx.params.id);
            ctx.page.redirect('/catalog');
        }
    }
}