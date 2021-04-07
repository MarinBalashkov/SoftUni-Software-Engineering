import { html } from '../../node_modules/lit-html/lit-html.js';
//import { until } from '../../node_modules/lit-html/directives/until.js';
import { getItemsByUserId } from '../api/data.js';

const profileTemplate = (memes, user) => html`
                <article class="user-info">
                    <img id="user-avatar-url" alt="user-profile" src="/images/female.png">
                    <div class="user-content">
                        <p>Username: ${user.username}</p>
                        <p>Email: ${user.email}</p>
                        <p>My memes count: ${memes.length}</p>
                    </div>
                </article>
                <h1 id="user-listings-title">User Memes</h1>
                <div class="user-meme-listings">
                    ${memes.length == 0 
                    ? html`<p class="no-memes">No memes in database.</p>` 
                    : memes.map(usersMemeCardTemplate)}                   
                </div>
            </section>
`;

const usersMemeCardTemplate = (meme) => html`
                    <div class="user-meme">
                        <p class="user-meme-title">${meme.title}</p>
                        <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl}>
                        <a class="button" href="/details/${meme._id}">Details</a>
                    </div>`;

export async function profilePage(ctx) {
    const user = {
        email: sessionStorage.getItem('email'),
        username: sessionStorage.getItem('username')
    }

    const memes = await getItemsByUserId();

    ctx.render(profileTemplate(memes, user));
}