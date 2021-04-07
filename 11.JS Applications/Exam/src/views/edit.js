import { html } from '../../node_modules/lit-html/lit-html.js';
import { editItem, getItemById } from '../api/data.js';


const editTemplate = (item, onSubmit) => html`
<!-- <section id="edit-listing">
    <div class="container">

        <form @submit=${onSubmit} id="edit-form">
            <h1>Edit Car Listing</h1>
            <p>Please fill in this form to edit an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand" .value=${item.brand}>

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model" .value=${item.model}>

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description" .value=${item.description}>

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year" .value=${item.year}>

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl" .value=${item.imageUrl}>

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price" .value=${item.price}>

            <hr>
            <input type="submit" class="registerbtn" value="Edit Listing">
        </form>
    </div>
</section> -->
`;

export async function editPage(ctx) {

    const id = ctx.params.id;
    const item = await getItemById(id);
    ctx.render(editTemplate(item, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        // const brand = formData.get('brand').trim();
        // const model = formData.get('model').trim();
        // const description = formData.get('description').trim();
        // const year = formData.get('year').trim();
        // const imageUrl = formData.get('imageUrl').trim();
        // const price = formData.get('price').trim();


        try {
            // if (!brand || !model || !description || !Number(year) || !imageUrl || !Number(price)) {
            //     throw new Error('All fields are reqired');              
            // }
            // if (year <= 0 || price <= 0) {
            //     throw new Error('price and year must be positive numbers  fields are reqired');                            
            // }
            // const itemToEdit = {
            //     brand,
            //     model,
            //     description,
            //     year: Number(year),
            //     imageUrl,
            //     price: Number(price)
            //   };


            await editItem(id, itemToEdit);
            event.target.reset();
            //ctx.page.redirect('/details/' + id);
        } catch (error) {
            return alert(error.message);
        }
    }
}