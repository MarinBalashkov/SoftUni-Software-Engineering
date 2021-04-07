import { html } from '../../node_modules/lit-html/lit-html.js';
import { createItem } from '../api/data.js';


const createTemplate = (onSubmit) => html``;

export async function createPage(ctx) {
    ctx.render(createTemplate(onSubmit))

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
            // const item = {
            //     brand,
            //     model,
            //     description,
            //     year: Number(year),
            //     imageUrl,
            //     price: Number(price)
            //   };
              

            await createItem(item);
            event.target.reset();
            //ctx.page.redirect('/catalog');
        } catch (error) {
           return alert(error.message);
        }


    }
}