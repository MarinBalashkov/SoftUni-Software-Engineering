import { html } from '../../node_modules/lit-html/lit-html.js';
import { editItem, getItemById } from '../api/data.js';
import { notifyError, notifySuccesss } from './common/notifications.js';


const editTemplate = (item, onSubmit) => html`
        <form @submit=${onSubmit} class="text-center border border-light p-5" action="#" method="">
            <h1>Edit Movie</h1>
            <div class="form-group">
                <label for="title">Movie Title</label>
                <input type="text" class="form-control" placeholder="Movie Title" value="" name="title" .value=${item.title}>
            </div>
            <div class="form-group">
                <label for="description">Movie Description</label>
                <textarea class="form-control" placeholder="Movie Description..." name="description" .value=${item.description}></textarea>
            </div>
            <div class="form-group">
                <label for="imageUrl">Image url</label>
                <input type="text" class="form-control" placeholder="Image Url" value="" name="imageUrl" .value=${item.imageUrl}>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
`;

export async function editPage(ctx) {

    const id = ctx.params.id;
    const item = await getItemById(id);
    ctx.render(editTemplate(item, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const title = formData.get('title');
        const description = formData.get('description');
        const imageUrl = formData.get('imageUrl');


        try {
            if (!title || !description || !imageUrl) {
                throw new Error('All fields are reqired');              
            }

            const itemToEdit = {
                title,
                description,
                imageUrl,
              };


            await editItem(id, itemToEdit);
            event.target.reset();
            notifySuccesss('Eddited successfully!!!');
            ctx.page.redirect('/details/' + id);
        } catch (error) {
            return notifyError(error.message);
        }
    }
}