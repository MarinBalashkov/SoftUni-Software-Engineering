import { html } from '../../node_modules/lit-html/lit-html.js';
import { searchItems } from '../api/data.js';

const searchByYearTemplate = (cars, onClick, year) => html`
<section id="search-cars">
    <h1>Filter by year</h1>

    <div class="container">
        <input type="text" name="search" placeholder="Enter desired production year" .value=${year || ''}>
        <button @click=${onClick} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>
    <div class="listings">
        ${cars.length == 0 ? html`<p class="no-cars"> No results.</p>` 
        : cars.map(myListingCardTemplate)}
    </div>
</section>`;

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

export async function searchByYearPage(ctx) {
    const year = Number(ctx.querystring.split('=')[1]);
    const cars = Number.isInteger(year) ? await searchItems(year) : [];
    ctx.render(searchByYearTemplate(cars, onClick, year));
        

    async function onClick(event) {
        event.preventDefault();
        const query = Number(event.target.parentNode.querySelector('input').value);
        if (Number.isNaN(query) == false) {
            ctx.page.redirect(`/searchByYear?search=` + query)
        }else{
            return alert ('Year must be a positive number!!')
        }
    }
}