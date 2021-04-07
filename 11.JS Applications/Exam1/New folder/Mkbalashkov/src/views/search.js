import { html } from '../../node_modules/lit-html/lit-html.js';
import { searchItems } from '../api/data.js';

const searchTemplate = (items, onSubmit, searchString) => html`
<section id="search-page" class="content">
    <h1>Search</h1>
    <form @submit=${onSubmit} id="search-form">
        <p class="field search">
            <input type="text" placeholder="Search by article title" name="search" .value=${searchString}>
        </p>
        <p class="field submit">
            <input class="btn submit" type="submit" value="Search">
        </p>
    </form>
    <div class="search-container">
        ${items.length == 0 ? html`<h3 class="no-articles">No matching articles</h3>` 
        : items.map(articleTemplate)}

        
    </div>
</section>>`;

const articleTemplate = (item) => html`
        <a class="article-preview" href="/details/${item._id}">
            <article>
                <h3>Topic: <span>${item.title}</span></h3>
                <p>Category: <span>${item.category}</span></p>
            </article>
        </a>`;

export async function searchPage(ctx) {
    let searchString;
    ctx.querystring != '' ? searchString = ctx.querystring.split('=')[1] : searchString = '';
    let items;
    if (searchString != '') {
        items = await searchItems(searchString);
    }else{
        items = [];
    }

    ctx.render(searchTemplate(items, onSubmit, searchString));
        

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target)
        const query = formData.get('search').trim();

        ctx.page.redirect(`/search?search=` + query)

        // if (query) {
        // }else{
        //     return alert ('Search must be no empty')
        // }
    }
}