import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllItemsHomePage} from '../api/data.js';

const homeTemplate = (items) => html`
<section id="home-page" class="content">
    <h1>Recent Articles</h1>
    <section class="recent js">
        <h2>JavaScript</h2>
        ${articleTemplate(items['JavaScript'])}
    </section>
    <section class="recent csharp">
        <h2>C#</h2>
        ${articleTemplate(items['C#'])}
    </section>
    <section class="recent java">
        <h2>Java</h2>
        ${articleTemplate(items['Java'])}
    </section>
    <section class="recent python">
        <h2>Python</h2>
        ${articleTemplate(items['Python'])}
        
    </section>
</section>`;

const articleTemplate = (item) => html`
        ${item ? html`
        <article>
            <h3>${item.title}</h3>
            <p>${item.content}</p>
            <a href="/details/${item._id}" class="btn details-btn">Details</a>
        </article>` : html`<h3 class="no-articles">No articles yet</h3>`}`;

export async function homePage(ctx) {
    const apiItems = await getAllItemsHomePage();
    const items = {
        'C#': apiItems.find(x => x.category == 'C#'),
        'JavaScript': apiItems.find(x => x.category == 'JavaScript'),
        'Python': apiItems.find(x => x.category == 'Python'),
        'Java': apiItems.find(x => x.category == 'Java'),
    }

    ctx.render(homeTemplate(items))
}