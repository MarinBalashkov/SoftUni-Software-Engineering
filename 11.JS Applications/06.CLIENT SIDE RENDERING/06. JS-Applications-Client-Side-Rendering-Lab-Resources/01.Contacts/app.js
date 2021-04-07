import {render} from './node_modules/lit-html/lit-html.js';
import {cardTemplate} from './card.js';
import {contacts} from './contacts.js';

const container = document.querySelector('#contacts');
container.addEventListener('click', onClick)
const result = contacts.map(cardTemplate);
render(result, container);

function onClick(event) {
    if (event.target.classList.contains('detailsBtn')) {
        const id = event.target.parentNode.querySelector('.details').id;
        const element = container.find(c => c.id == id);
        element.isVisible = !element.isVisible;
        const result = contacts.map(cardTemplate);
        render(result, container);
    }
}