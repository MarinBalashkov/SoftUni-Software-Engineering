import { html } from '../../node_modules/lit-html/lit-html.js';
//import { until } from '../../node_modules/lit-html/directives/until.js';
import { getAllItems } from '../api/data.js';

const catalogTemplate = (memes) => html`
            <section id="meme-feed">
                <h1>All Memes</h1>
                <div id="memes">
                    ${memes.length == 0 
                    ? html`<p class="no-memes">No memes in database.</p>`
                    : memes.map(memeCardTemplate)
                    }
                </div>
            </section>
`;

const memeCardTemplate = (meme) => html`
<div class="meme">
    <div class="card">
        <div class="info">
            <p class="meme-title">${meme.title}</p>
            <img class="meme-image" alt="meme-img" src=${meme.imageUrl}>
        </div>
        <div id="data-buttons">
            <a class="button" href="/details/${meme._id}">Details</a>
        </div>
    </div>
</div>`;

export async function catalogPage(ctx) {
    const memes = await getAllItems();

    ctx.render(catalogTemplate(memes));
}