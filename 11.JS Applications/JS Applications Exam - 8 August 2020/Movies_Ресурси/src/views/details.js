import { html } from '../../node_modules/lit-html/lit-html.js';
import { getItemById, deleteItemById, editItem} from '../api/data.js';
import { notifySuccesss } from './common/notifications.js';

const detailsTemplate = (item, onDelete, isOwner, isLiked, onLike, likes) => html`
        <div class="container">
            <div class="row bg-light text-dark">
            <h1>Movie title: ${item.title}</h1>
                
                <div class="col-md-8">
                    <img class="img-thumbnail" src=${item.imageUrl} alt="Movie">
                </div>
                <div class="col-md-4 text-center">
                    <h3 class="my-3 ">Movie Description</h3>
                    <p>${item.description}</p>
                    ${isOwner ? html`
                    <a @click=${onDelete} class="btn btn-danger" href="javascript:void(0)">Delete</a>
                    <a class="btn btn-warning" href="/edit/${item._id}">Edit</a>` : ''}
                    ${isOwner || isLiked ? '' : html`<a @click=${onLike} class="btn btn-primary" href="jacvascript:void(0)">Like</a>`}                 
                    <span class="enrolled-span">Liked ${likes.length}</span>
                </div>
            </div>
        </div>`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const item = await getItemById(id);
    const user = ctx.user;
    const isOwner = user && user._id == item._ownerId;
    const isLiked = item.likes.includes(user.email);

    ctx.render(detailsTemplate(item, onDelete, isOwner, isLiked, onLike, item.likes));

    async function onDelete(event) {
        event.preventDefault();

        const confirmed = confirm('Are you sure you want to dellete this item !!!');
        if (confirmed) {
            await deleteItemById(ctx.params.id);
            notifySuccesss("Deleted successfully");
            ctx.page.redirect('/');
        }
    }

    async function onLike(event) {
        item.likes.push(user.email);
        await editItem(id, item);
        notifySuccesss("Liked successfully");
        ctx.page.redirect(`/details/${id}`);
    }
}