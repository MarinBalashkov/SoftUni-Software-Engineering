import { html } from '../../node_modules/lit-html/lit-html.js';
import { editItem, getItemById } from '../api/data.js';


const editTemplate = (item, onSubmit) => html`
<h1>Edit Offer</h1>
<p class="message"></p>
<form @submit=${onSubmit}>
    <div>
        <input type="text" placeholder="Name..." name="name" .value=${item.name}>
    </div>
    <div>
        <input type="text" placeholder="Price..." name="price" .value=${item.price}>
    </div>
    <div>
        <input type="text" placeholder="Image url..." name="imageUrl" .value=${item.imageUrl}>
    </div>
    <div>
        <textarea placeholder="Give us some description about this offer..." name="description" .value=${item.description}></textarea>
    </div>
    <div>
        <input type="text" placeholder="Brand..." name="brand" .value=${item.brand}>
    </div>
    <div>
        <button>Edit</button>
    </div>
</form>
`;

export async function editPage(ctx) {

    const id = ctx.params.id;
    const item = await getItemById(id);
    ctx.render(editTemplate(item, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const brand = formData.get('brand');
        const name = formData.get('name');
        const description = formData.get('description');
        const imageUrl = formData.get('imageUrl');
        const price = formData.get('price');


        try {
            if (!brand || !name || !description || !imageUrl || !Number(price)) {
                throw new Error('All fields are reqired');              
            }
            if (price <= 0) {
                throw new Error('pricemust be positive numbers  fields are reqired');                            
            }
            const itemToEdit = {
                brand,
                name,
                description,
                imageUrl,
                price: Number(price),
                buyers: []
              };


            await editItem(id, itemToEdit);
            event.target.reset();
            ctx.page.redirect('/details/' + id);
        } catch (error) {
            return alert(error.message);
        }
    }
}