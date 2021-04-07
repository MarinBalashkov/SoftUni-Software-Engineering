import { html } from '../../node_modules/lit-html/lit-html.js';
import { createItem } from '../api/data.js';


const createTemplate = (onSubmit) => html`
<h1>Create New Offer</h1>
<p class="message"></p>
<form @submit=${onSubmit}>
    <div>
        <input type="text" placeholder="Name..." name="name">
    </div>
    <div>
        <input type="text" placeholder="Price..." name="price">
    </div>
    <div>
        <input type="text" placeholder="Image url..." name="imageUrl">
    </div>
    <div>
        <textarea placeholder="Give us some description about this offer..." name="description"></textarea>
    </div>
    <div>
        <input type="text" placeholder="Brand..." name="brand">
    </div>
    <div>
        <button>Create</button>
    </div>
</form>`;

export async function createPage(ctx) {
    ctx.render(createTemplate(onSubmit))

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const name = formData.get('name').trim();
        const price = formData.get('price').trim();
        const imageUrl = formData.get('imageUrl').trim();
        const description = formData.get('description').trim();
        const brand = formData.get('brand').trim();


        try {
            if (!brand || !name || !description || !imageUrl || !Number(price)) {
                throw new Error('All fields are reqired');              
            }
            if (Number(price) <= 0) {
                throw new Error('pricemust be positive numbers  fields are reqired');                            
            }
            const item = {
                name,
                price: Number(price),
                imageUrl,
                description,
                brand, 
                buyers: []
              };
              

            await createItem(item);
            event.target.reset();
            ctx.page.redirect('/catalog');
        } catch (error) {
           return alert(error.message);
        }


    }
}