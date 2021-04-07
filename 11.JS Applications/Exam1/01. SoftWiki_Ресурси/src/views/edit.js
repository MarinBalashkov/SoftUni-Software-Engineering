import { html } from '../../node_modules/lit-html/lit-html.js';
import { editItem, getItemById } from '../api/data.js';


const editTemplate = (item, onSubmit) => html`
<section id="edit-page" class="content">
    <h1>Edit Article</h1>

    <form @submit=${onSubmit} id="edit" action="#" method="">
        <fieldset>
            <p class="field title">
                <label for="title">Title:</label>
                <input type="text" name="title" id="title" placeholder="Enter article title" .value=${item.title}>
            </p>

            <p class="field category">
                <label for="category">Category:</label>
                <input type="text" name="category" id="category" placeholder="Enter article category" .value=${item.category}>
            </p>
            <p class="field">
                <label for="content">Content:</label>
                <textarea name="content" id="content" .value=${item.content}></textarea>
            </p>

            <p class="field submit">
                <input class="btn submit" type="submit" value="Save Changes">
            </p>

        </fieldset>
    </form>
</section>
`;

export async function editPage(ctx) {

    const id = ctx.params.id;
    const item = await getItemById(id);
    ctx.render(editTemplate(item, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const title = formData.get('title').trim();
        const category = formData.get('category').trim();
        const content = formData.get('content').trim();

        const posibleCategories = {
            'JavaScript' : 1, 
            'C#': 2, 
            'Java' : 3, 
            'Python': 4
        }


        try {
            if (!title || !category || !content) {
                throw new Error('All fields are reqired');              
            }

            if (!posibleCategories[category]) {
                throw new Error('The category must be one of "JavaScript", "C#", "Java", or "Python"')
            }

            const itemToEdit = {
                title,
                category,
                content,
              };


            await editItem(id, itemToEdit);
            event.target.reset();
            ctx.page.redirect('/details/' + id);
        } catch (error) {
            return alert(error.message);
        }
    }
}