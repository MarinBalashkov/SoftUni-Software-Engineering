import { html } from '../../node_modules/lit-html/lit-html.js';
//import { until } from '../../node_modules/lit-html/directives/until.js';
import { createItem } from '../api/data.js';
//import { notify } from './common/notification.js';


const createTemplate = (onSubmit) => html`
<section id="create-listing">
    <div class="container">
        <form @submit=${onSubmit} id="create-form">
            <h1>Create Car Listing</h1>
            <p>Please fill in this form to create an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand">

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model">

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description">

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year">

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl">

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price">

            <hr>
            <input type="submit" class="registerbtn" value="Create Listing">
        </form>
    </div>
</section>
`;

export async function createPage(ctx) {
    ctx.render(createTemplate(onSubmit))

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const brand = formData.get('brand');
        const model = formData.get('model');
        const description = formData.get('description');
        const year = formData.get('year');
        const imageUrl = formData.get('imageUrl');
        const price = formData.get('price');


        try {
            if (!brand || !model || !description || !Number(year) || !imageUrl || !Number(price)) {
                throw new Error('All fields are reqired');              
            }
            if (year <= 0 || price <= 0) {
                throw new Error('price and year must be positive numbers  fields are reqired');                            
            }
            const car = {
                brand,
                model,
                description,
                year: Number(year),
                imageUrl,
                price: Number(price)
              };
              

            await createItem(car);
            event.target.reset();
            ctx.page.redirect('/catalog');
        } catch (error) {
           return alert(error.message);
        }


    }
}