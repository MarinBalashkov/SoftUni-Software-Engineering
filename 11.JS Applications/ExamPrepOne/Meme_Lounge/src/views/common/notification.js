import { html, render } from '../../../node_modules/lit-html/lit-html.js';

const notificationTemplate = (message) => html`
            <div id="errorBox" class="notification">
                <span>${message}</span>
            </div>
        `;

const container = document.getElementById('container');
const article = document.createElement('article');
article.id = 'notifications';

export function notify(message) {
    render(notificationTemplate(message), article)
    container.appendChild(article);
    setTimeout(clear, 3000)
}

function clear() {
    render('', article);
}