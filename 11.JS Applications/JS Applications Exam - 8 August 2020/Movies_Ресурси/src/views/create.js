import { html } from '../../node_modules/lit-html/lit-html.js';
import { createItem } from '../api/data.js';
import { notifyError, notifySuccesss } from './common/notifications.js';


const createTemplate = (onSubmit) => html`
        <form @submit=${onSubmit} class="text-center border border-light p-5">
            <h1>Add Movie</h1>
            <div class="form-group">
                <label for="title">Movie Title</label>
                <input type="text" class="form-control" placeholder="Title" name="title" value="">
            </div>
            <div class="form-group">
                <label for="description">Movie Description</label>
                <textarea class="form-control" placeholder="Description" name="description"></textarea>
            </div>
            <div class="form-group">
                <label for="imageUrl">Image url</label>
                <input type="text" class="form-control" placeholder="Image Url" name="imageUrl" value="">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>`;

export async function createPage(ctx) {
    ctx.render(createTemplate(onSubmit))

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

            const item = {
                title,
                description,
                imageUrl
              };
              

            await createItem(item);
            event.target.reset();
            notifySuccesss("Created successfully!");
            ctx.page.redirect('/');
        } catch (error) {
           return notifyError(error.message);
        }


    }
}