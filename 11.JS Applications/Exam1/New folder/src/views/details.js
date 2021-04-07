import { html } from '../../node_modules/lit-html/lit-html.js';
import { getItemById, deleteItemById} from '../api/data.js';

const detailsTemplate = (item, onDelete, isOwner) => html`
<section id="details-page" class="content details">
    <h1>${item.title}</h1>

    <div class="details-content">
        <strong>Published in category ${item.category}</strong>
        <p>${item.content}</p>

        <div class="buttons">
            ${isOwner ? html`
            <a @click=${onDelete} href="javascript:void(0)" class="btn delete">Delete</a>
            <a href="/edit/${item._id}" class="btn edit">Edit</a>` : ''}

            <a href="/home" class="btn edit">Back</a>
        </div>
    </div>
</section>`;

export async function detailsPage(ctx) {
    const item = await getItemById(ctx.params.id);
    const user = ctx.user;
    const isOwner = user && user._id == item._ownerId;
    ctx.render(detailsTemplate(item, onDelete, isOwner));

    async function onDelete(event) {
        event.preventDefault();

        const confirmed = confirm('Are you sure you want to dellete this item !!!');
        if (confirmed) {
            await deleteItemById(ctx.params.id);
            ctx.page.redirect('/home');
        }
    }
}