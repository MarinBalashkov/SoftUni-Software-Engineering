import { html } from '../../node_modules/lit-html/lit-html.js';
import { getItemById, deleteItemById} from '../api/data.js';

const detailsTemplate = (item, onDelete, isOwner) => html``;

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
            //ctx.page.redirect('/catalog');
        }
    }
}