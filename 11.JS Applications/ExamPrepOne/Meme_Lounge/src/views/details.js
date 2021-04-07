import { html } from '../../node_modules/lit-html/lit-html.js';
//import { until } from '../../node_modules/lit-html/directives/until.js';
import { getItemById, deleteItemById} from '../api/data.js';

const detailsTemplate = (meme, onDelete, isOwner) => html`
<section id="meme-details">
    <h1>Meme Title: ${meme.title}</h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src=${meme.imageUrl}>
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${meme.description}</p>
            <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
            ${isOwner 
            ? html`<a class="button warning" href="/edit/${meme._id}">Edit</a>
            <button @click=${onDelete} class="button danger">Delete</button>` 
            : ''}


        </div>
    </div>
</section>
`;

export async function detailsPage(ctx) {
    const meme = await getItemById(ctx.params.id)
    const userId = sessionStorage.getItem('userId')
    ctx.render(detailsTemplate(meme, onDelete, userId == meme._ownerId))

    async function onDelete(event) {
        event.preventDefault();

        const confirmed = confirm('Are you sure you want to dellete this item !!!');
        if (confirmed) {
            await deleteItemById(ctx.params.id);
            ctx.page.redirect('/catalog')
        }
    }
}