import {html} from '../../node_modules/lit-html/lit-html.js';
//import { until } from '../../node_modules/lit-html/directives/until.js';
import { getItemsByUserId } from '../api/data.js';

const myListingTemplate = (cars) => html`
<section id="my-listings">
    <h1>My car listings</h1>
    <div class="listings">
        ${cars.length == 0 
                    ? html`<p class="no-cars"> You haven't listed any cars yet.</p>`
                    : cars.map(myListingCardTemplate)
                    }
    </div>
</section>
`;

const myListingCardTemplate = (car) => html`
        <div class="listing">
            <div class="preview">
                <img src=${car.imageUrl}>
            </div>
            <h2>${car.brand} ${car.model}</h2>
            <div class="info">
                <div class="data-info">
                    <h3>Year: ${car.year}</h3>
                    <h3>Price: ${car.price} $</h3>
                </div>
                <div class="data-buttons">
                    <a href="/details/${car._id}" class="button-carDetails">Details</a>
                </div>
            </div>
        </div>`;

export async function myListingPage(ctx) {
    const user = ctx.user;
    if (user) {
        const cars = await getItemsByUserId(user._id);
        ctx.render(myListingTemplate(cars));
    }else{
        ctx.page.redirect('/login')
    }

}