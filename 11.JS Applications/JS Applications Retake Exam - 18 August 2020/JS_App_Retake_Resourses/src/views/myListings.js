import {html} from '../../node_modules/lit-html/lit-html.js';
import { getItemsByUserId } from '../api/data.js';

const myListingTemplate = (items) => html``;

const myListingCardTemplate = (item) => html``;

export async function myListingPage(ctx) {
    const user = ctx.user;
    if (user) {
        const items = await getItemsByUserId(user._id);
        ctx.render(myListingTemplate(items));
    }else{
        //ctx.page.redirect('/login')
    }

}