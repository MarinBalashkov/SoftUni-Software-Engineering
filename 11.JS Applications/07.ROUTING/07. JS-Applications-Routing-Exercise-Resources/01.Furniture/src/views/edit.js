import { html } from '../../node_modules/lit-html/lit-html.js';
import { editElement, getElementById } from '../api/data.js';

const editTemplate = (onSubmit, item) => html`        
<div class="row space-top">
            <div class="col-md-12">
                <h1>Edit Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onSubmit}> 
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control" id="new-make" type="text" name="make" .value=${item.make}>
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control is-valid" id="new-model" type="text" name="model" .value=${item.model}>
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control is-invalid" id="new-year" type="number" name="year" .value=${item.year}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description" .value=${item.description}>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price" .value=${item.price}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img" .value=${item.img}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material" .value=${item.material}>
                    </div>
                    <input type="submit" class="btn btn-info" value="Edit" />
                </div>
            </div>
        </form>`;

export async function editPage(ctx) {
    const userId = sessionStorage.getItem('userId');
    const itemId = ctx.params.id;
    const item = await getElementById(itemId);

    ctx.render(editTemplate(onSubmit, item));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        // const description = formData.get('description').trim();
        // const img = formData.get('img').trim();
        // const make = formData.get('make').trim();
        // const material = formData.get('material').trim();
        // const model = formData.get('model').trim();
        // const price = formData.get('price').trim();
        // const year = formData.get('year').trim();

        const data = [...formData.entries()].reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {});

        if (Object.entries(data).filter(([k, v]) => v != 'material').some(([k, v]) => v == '')) {
            return alert('Missing fields');
        }



        //TODO validation
        // const item = {
        //     description: description,
        //     img: img,
        //     make: make,
        //     material: material,
        //     model: model,
        //     price: price,
        //     year: year

        // };

        await editElement(itemId, data);
        ctx.page.redirect('/');
    }
}