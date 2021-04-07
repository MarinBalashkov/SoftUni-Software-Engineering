import { html } from '../../node_modules/lit-html/lit-html.js';
//import { until } from '../../node_modules/lit-html/directives/until.js';
import { getAllItems, getAllItemsWithPagenation, getCollectionSize } from '../api/data.js';

const catalogTemplate = (cars, currentPage, pages) => html`
<section id="car-listings">
    <h1>Car Listings</h1>
    <div class="listings">
    <!-- pagenation -->
    <div>
        Page ${currentPage} / ${pages}
        ${currentPage > 1 ? html`<a class="button-list" href="/catalog?page=${currentPage - 1}">&lt; Prev</a>`: ''}
        ${currentPage < pages ? html`<a class="button-list" href="/catalog?page=${currentPage + 1}">Next &gt;</a>`: ''}

    </div>
    <!-- pagenation -->

        ${cars.length == 0 
                    ? html`<p class="no-cars">No cars in database.</p>`
                    : cars.map(carCardTemplate)
                    }
    </div>
</section>
`;

const carCardTemplate = (car) => html`
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

export async function catalogPage(ctx) {
    // pagenation
    const currentPage = Number(ctx.querystring.split('=')[1]) || 1;
    const pageSize = 10;
    const count = await getCollectionSize();
    const pages = Math.ceil(count / pageSize);
    // pagenation

    const cars = await getAllItemsWithPagenation(currentPage, pageSize);

    ctx.render(catalogTemplate(cars, currentPage, pages));
}