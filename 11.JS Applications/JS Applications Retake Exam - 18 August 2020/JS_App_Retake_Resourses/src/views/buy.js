import { html } from "../../node_modules/lit-html/lit-html.js";
import { editItem, getItemById } from "../api/data.js";

const buyTemplate = (item, onBuy) => html`
<div class="offer-details">
    <h1>Buyers: ${item.buyers.length}</h1>
    <h2>$${item.price}</h2>
    <br>
    <div class="actions">
        <a @click=${onBuy} href="javascript:void(0)">Buy</a>
    </div>
</div>`;

export async function buyPage(ctx) {
    const user = ctx.user;
    const id = ctx.params.id;
    const item  = await getItemById(id);
    ctx.render(buyTemplate(item, onBuy))

    async function onBuy() {
        if (!user) {
            return alert('Please login first!')
        }
        item.buyers.push(user._id);
        await editItem(id, item);
        ctx.page.redirect(`/details/${item._id}`);
    }
}

