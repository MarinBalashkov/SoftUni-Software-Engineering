import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllElements } from '../api/data.js'

const catalogTemplate = (data, onSearch, searchText) => html`
<div class="row space-top">
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Welcome to Furniture System</h1>
            <p>Select furniture from the catalog to view details.</p>
            <div style="float:right">
        <input id="searchInput" name="search" type="text" .value=${searchText}>
        <button @click=${onSearch}>Search</button>
        </div>
        </div>
    </div>
</div>
<div class="row space-top">
    ${data.map(x => itemTemplate(x))}
</div>`;

const itemTemplate = (item) => html`
<div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
            <img src=${item.img} />
            <p>${item.description}</p>
            <footer>
                <p>Price: <span>${item.price} $</span></p>
            </footer>
            <div>
                <a href=${`/details/${item._id}`} class="btn btn-info">Details</a>
            </div>
        </div>
    </div>
</div>`;

export async function catalogPage(ctx) {
    let querystring = ctx.querystring.split('=')[1] || '';


    const data = await getAllElements(querystring);

    ctx.render(catalogTemplate(data, onSearch, querystring))

    function onSearch(event) {
        event.preventDefault();
        const searchText = document.getElementById('searchInput').value;
        const search = encodeURIComponent(searchText);
        ctx.page.redirect('/?serach=' + search);
    }
}